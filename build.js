#!/usr/bin/env node
/* =======================================================================
   build.js — genera la aplicación autocontenida.
   Uso:   node build.js
   Salida: dist/Oposicion-Metro/  (doble clic)  y  dist/web/  (para publicar)
   ======================================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');

const RAIZ = __dirname;
const CONTENIDO = path.join(RAIZ, 'contenido');
const SRC = path.join(RAIZ, 'src');
const DIST = path.join(RAIZ, 'dist');
const DEST_LOCAL = path.join(DIST, 'Oposicion-Metro');
const DEST_WEB = path.join(DIST, 'web');

const rojo = s => '\x1b[31m' + s + '\x1b[0m';
const verde = s => '\x1b[32m' + s + '\x1b[0m';
const ambar = s => '\x1b[33m' + s + '\x1b[0m';

const MANUALES_ADMITIDOS = new Set([
  'https://www.metromadrid.es/sites/default/files/empleo/descargables/1._Conocimientos_espec%C3%ADficos_sobre_Metro_de_Madrid.pdf',
  'https://www.metromadrid.es/sites/default/files/empleo/descargables/2.Normas_Internas_Seguridad_Agentes.pdf',
  'https://www.metromadrid.es/sites/default/files/empleo/descargables/3.Normativa_Interna_de_Circulacion.pdf',
  'https://www.metromadrid.es/sites/default/files/empleo/descargables/4.Reglamento_de_Viajeros_Metro_de_Madrid.pdf',
  'https://www.metromadrid.es/sites/default/files/empleo/descargables/5.Codigo_Etico_Metro_de_Madrid.pdf',
  'https://www.metromadrid.es/sites/default/files/empleo/descargables/6.Manual_PRL.pdf',
  'https://www.metromadrid.es/sites/default/files/empleo/descargables/7.Conocimientos_generales_CRMT.pdf'
]);

function leerJSON(f) {
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); }
  catch (e) { console.error(rojo('✖ No se pudo leer ' + path.basename(f) + ': ' + e.message)); process.exit(1); }
}

function hashTexto(texto) {
  let h = 2166136261;
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ('00000000' + (h >>> 0).toString(16)).slice(-8);
}

/* ------------------------- validación ------------------------- */
function validar(temario, banco, legacyPorId, legacyFichas) {
  const errores = [], avisos = [];
  const epIds = new Set();
  const manualPorEp = new Map();
  const vistos = new Set();
  const legacyVistos = new Set();
  const fichasActuales = new Set();

  if (!Array.isArray(temario.partes)) errores.push('temario.json: falta el array "partes".');
  (temario.partes || []).forEach(pa => {
    if (!pa.parte) errores.push('Hay una parte sin campo "parte".');
    if (!MANUALES_ADMITIDOS.has(pa.url_manual)) errores.push(`Parte ${pa.parte}: el manual no es uno de los siete PDF oficiales admitidos.`);
    (pa.epigrafes || []).forEach(ep => {
      if (!ep.id) errores.push(`Parte ${pa.parte}: hay un epígrafe sin "id".`);
      if (epIds.has(ep.id)) errores.push(`Epígrafe duplicado: ${ep.id}`);
      epIds.add(ep.id);
      manualPorEp.set(ep.id, pa.url_manual);
      if (!ep.titulo) errores.push(`Epígrafe ${ep.id}: sin "titulo".`);
      if (!ep.resumen_md) avisos.push(`Epígrafe ${ep.id}: sin "resumen_md".`);
      if (!ep.fuentes || !ep.fuentes.length) errores.push(`Epígrafe ${ep.id}: sin "fuentes". REGLA DE ORO.`);
      (ep.fichas || []).forEach((f, i) => {
        if (!f.anverso || !f.reverso) errores.push(`Epígrafe ${ep.id}, ficha ${i}: le falta anverso o reverso.`);
        if (f.id && !/^[0-9a-f]{8}$/.test(f.id)) errores.push(`Epígrafe ${ep.id}, ficha ${i}: id explícito no válido.`);
        if (f.anverso) {
          const idFicha = `${ep.id}#f-${f.id || hashTexto(ep.id + '\n' + f.anverso)}`;
          if (fichasActuales.has(idFicha)) errores.push(`Epígrafe ${ep.id}: ficha repetida o colisión de id (${idFicha}).`);
          fichasActuales.add(idFicha);
        }
      });
    });
  });

  const preguntas = banco.preguntas || [];
  preguntas.forEach(p => {
    const d = `Pregunta ${p.id || '(sin id)'}`;
    if (!p.id) errores.push('Hay una pregunta sin "id".');
    else if (!/^p-\d+\.\d+-[0-9a-f]{8}$/.test(p.id)) errores.push(`${d}: el id estable no tiene el formato esperado.`);
    else if (vistos.has(p.id)) errores.push(`ID duplicado: ${p.id}`);
    vistos.add(p.id);
    if (p.legacy_id) {
      if (!/^p-\d+\.\d+-\d{2,}$/.test(p.legacy_id)) errores.push(`${d}: legacy_id no tiene el formato esperado.`);
      if (legacyVistos.has(p.legacy_id)) errores.push(`legacy_id duplicado: ${p.legacy_id}`);
      legacyVistos.add(p.legacy_id);
      if (!legacyPorId || legacyPorId[p.id] !== p.legacy_id) {
        errores.push(`${d}: legacy_id no coincide con contenido/fuente/legacy-ids.json.`);
      }
    } else if (legacyPorId && legacyPorId[p.id]) {
      errores.push(`${d}: ha perdido el legacy_id congelado en contenido/fuente/legacy-ids.json.`);
    }
    if (!p.fuente) errores.push(`${d}: SIN FUENTE. La regla de oro prohíbe publicarla.`);
    else {
      const m = String(p.fuente).match(/^(https:\/\/[^#]+\.pdf)#page=(\d+)$/i);
      if (!m || !MANUALES_ADMITIDOS.has(m[1]) || Number(m[2]) < 1) {
        errores.push(`${d}: la fuente debe ser uno de los siete PDF oficiales admitidos y llevar #page=N.`);
      } else if (manualPorEp.has(p.epigrafe) && m[1] !== manualPorEp.get(p.epigrafe)) {
        errores.push(`${d}: apunta a un manual distinto del asignado a su epígrafe ${p.epigrafe}.`);
      }
    }
    const paginaVisible = String(p.fuente_texto || '').match(/pág\.\s*(\d+)/i);
    if (!paginaVisible) {
      errores.push(`${d}: falta "fuente_texto" con la página visible.`);
    } else {
      const paginaEnlace = String(p.fuente || '').match(/#page=(\d+)$/i);
      if (paginaEnlace && Number(paginaEnlace[1]) !== Number(paginaVisible[1])) {
        errores.push(`${d}: la página visible (${paginaVisible[1]}) no coincide con la del enlace (${paginaEnlace[1]}).`);
      }
    }
    if (!p.explicacion) errores.push(`${d}: sin "explicacion".`);
    if (!p.enunciado) errores.push(`${d}: sin "enunciado".`);
    if (!Array.isArray(p.opciones) || p.opciones.length !== 4) errores.push(`${d}: debe tener exactamente 4 opciones.`);
    else {
      const normalizadas = p.opciones.map(o => String(o).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim());
      if (p.opciones.some(o => !String(o).trim())) errores.push(`${d}: tiene una opción vacía.`);
      if (new Set(normalizadas).size !== 4) errores.push(`${d}: tiene opciones repetidas o equivalentes al normalizarlas.`);
    }
    if (typeof p.correcta !== 'number' || p.correcta < 0 || p.correcta > 3) errores.push(`${d}: "correcta" fuera de rango (0-3).`);
    if (!epIds.has(p.epigrafe)) errores.push(`${d}: el epígrafe "${p.epigrafe}" no existe en temario.json.`);
    if (p.volatil && !/^\d{4}-\d{2}(?:-\d{2})?$/.test(String(p.fecha_dato || ''))) {
      errores.push(`${d}: marcada como volátil pero sin "fecha_dato" válida (AAAA-MM o AAAA-MM-DD).`);
    }
    if (![1, 2, 3].includes(p.dificultad)) avisos.push(`${d}: "dificultad" debería ser 1, 2 o 3.`);
  });

  if (!legacyPorId || Array.isArray(legacyPorId) || typeof legacyPorId !== 'object') {
    errores.push('contenido/fuente/legacy-ids.json no es un objeto válido.');
  } else {
    Object.keys(legacyPorId).forEach(id => {
      if (!vistos.has(id)) errores.push(`legacy-ids.json apunta a una pregunta inexistente: ${id}`);
    });
  }
  if (!legacyFichas || Array.isArray(legacyFichas) || typeof legacyFichas !== 'object') {
    errores.push('contenido/fuente/legacy-fichas.json no es un objeto válido.');
  } else {
    const antiguas = new Set();
    Object.entries(legacyFichas).forEach(([id, antiguo]) => {
      if (!fichasActuales.has(id)) errores.push(`legacy-fichas.json apunta a una ficha inexistente: ${id}`);
      if (!/^\d+\.\d+#\d+$/.test(antiguo)) errores.push(`legacy-fichas.json contiene una clave antigua no válida: ${antiguo}`);
      if (antiguas.has(antiguo)) errores.push(`legacy-fichas.json repite la clave antigua: ${antiguo}`);
      antiguas.add(antiguo);
    });
  }

  const sinPreguntas = [...epIds].filter(id => !preguntas.some(p => p.epigrafe === id));
  sinPreguntas.forEach(id => avisos.push(`El epígrafe ${id} no tiene ninguna pregunta todavía.`));
  [...epIds].forEach(id => {
    const n = preguntas.filter(p => p.epigrafe === id).length;
    if (n > 0 && n < 4) avisos.push(`El epígrafe ${id} solo tiene ${n} pregunta(s): el muestreo lo compensará, pero conviene ampliar si la fuente lo permite.`);
  });

  if (preguntas.length) {
    const posiciones = [0, 0, 0, 0];
    let correctaMasLarga = 0, extremos = 0;
    preguntas.forEach(p => {
      if (Number.isInteger(p.correcta) && p.correcta >= 0 && p.correcta < 4) posiciones[p.correcta]++;
      if (!Array.isArray(p.opciones) || p.opciones.length !== 4) return;
      const longitudes = p.opciones.map(o => String(o).length);
      const max = Math.max(...longitudes);
      if (longitudes[p.correcta] === max && longitudes.filter(x => x === max).length === 1) correctaMasLarga++;
      const otras = longitudes.filter((_, i) => i !== p.correcta);
      if (longitudes[p.correcta] > Math.max(...otras) * 2.5) extremos++;
    });
    if (Math.max(...posiciones) / preguntas.length > .8) {
      avisos.push(`Las respuestas de fuente están sesgadas por posición (${posiciones.join('/')}); la app debe barajar opciones en cada sesión.`);
    }
    if (correctaMasLarga / preguntas.length > .45) {
      avisos.push(`En ${correctaMasLarga}/${preguntas.length} preguntas la correcta es la única más larga; revisar editorialmente los casos extremos (${extremos}).`);
    }
  }

  const ex = temario.examen || {};
  if (preguntas.length < (ex.preguntas_simulacro || 80)) {
    avisos.push(`Hay ${preguntas.length} preguntas y el simulacro pide ${ex.preguntas_simulacro}. El simulacro se acortará.`);
  }
  return { errores, avisos };
}

function validarAutocontenido(html, nombre) {
  const reglas = [
    [/<script\b[^>]*\bsrc\s*=/i, 'script externo'],
    [/<(?:img|iframe|audio|video|source)\b[^>]*\bsrc\s*=\s*["'](?:https?:)?\/\//i, 'medio externo'],
    [/<link\b[^>]*\brel\s*=\s*["'](?:stylesheet|preload|modulepreload)["'][^>]*\bhref\s*=\s*["'](?:https?:)?\/\//i, 'hoja de estilo externa'],
    [/@import\s+(?:url\()?\s*["']?(?:https?:)?\/\//i, '@import externo'],
    [/url\(\s*["']?(?:https?:)?\/\//i, 'url() externa'],
    [/\bfetch\s*\(/, 'fetch()'],
    [/\bXMLHttpRequest\b/, 'XMLHttpRequest'],
    [/\b(?:WebSocket|EventSource)\s*\(/, 'conexión persistente'],
    [/\bimportScripts\s*\(/, 'importScripts()'],
    [/\bimport\s*\(/, 'import() dinámico']
  ];
  const fallos = reglas.filter(([re]) => re.test(html)).map(([, desc]) => desc);
  if (fallos.length) throw new Error(`${nombre} no es autocontenido: ${fallos.join(', ')}`);
}

/* ------------------------- icono PNG mínimo ------------------------- */
function crc32(buf) {
  let c, tabla = crc32.tabla;
  if (!tabla) {
    tabla = crc32.tabla = [];
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      tabla[n] = c >>> 0;
    }
  }
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) crc = tabla[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}
function chunk(tipo, datos) {
  const len = Buffer.alloc(4); len.writeUInt32BE(datos.length);
  const cuerpo = Buffer.concat([Buffer.from(tipo, 'ascii'), datos]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(cuerpo));
  return Buffer.concat([len, cuerpo, crc]);
}
function invertirBits(valor, cantidad) {
  let invertido = 0;
  for (let i = 0; i < cantidad; i++) {
    invertido = (invertido << 1) | (valor & 1);
    valor >>>= 1;
  }
  return invertido;
}

/*
 * DEFLATE fijo y determinista. zlib puede escoger representaciones distintas
 * según la versión del sistema aunque los píxeles sean idénticos. Este encoder
 * deliberadamente pequeño usa el bloque Huffman fijo del estándar y un LZ77
 * acotado: produce exactamente los mismos bytes en macOS y Linux.
 */
function deflateDeterminista(datos) {
  const salida = [];
  let byte = 0, usados = 0;
  function bits(valor, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      byte |= ((valor >>> i) & 1) << usados;
      if (++usados === 8) { salida.push(byte); byte = 0; usados = 0; }
    }
  }
  function simboloFijo(s) {
    let codigo, n;
    if (s <= 143) { codigo = 0x30 + s; n = 8; }
    else if (s <= 255) { codigo = 0x190 + s - 144; n = 9; }
    else if (s <= 279) { codigo = s - 256; n = 7; }
    else { codigo = 0xC0 + s - 280; n = 8; }
    bits(invertirBits(codigo, n), n);
  }
  const baseLongitud = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
    35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
  const extraLongitud = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2,
    3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  const baseDistancia = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129,
    193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
    16385, 24577];
  const extraDistancia = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6,
    7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  function emitirPareja(longitud, distancia) {
    let li = 0;
    while (li < baseLongitud.length - 1 &&
           longitud >= baseLongitud[li + 1]) li++;
    simboloFijo(257 + li);
    if (extraLongitud[li]) bits(longitud - baseLongitud[li], extraLongitud[li]);
    let di = 0;
    while (di < baseDistancia.length - 1 &&
           distancia >= baseDistancia[di + 1]) di++;
    bits(invertirBits(di, 5), 5);
    if (extraDistancia[di]) bits(distancia - baseDistancia[di], extraDistancia[di]);
  }

  // BFINAL=1, BTYPE=01 (árbol fijo).
  bits(1, 1); bits(1, 2);
  const ultimo = new Int32Array(65536); ultimo.fill(-1);
  function clave(pos) {
    return ((datos[pos] * 257 + datos[pos + 1]) * 257 + datos[pos + 2]) & 65535;
  }
  for (let i = 0; i < datos.length;) {
    let longitud = 0, distancia = 0;
    if (i + 2 < datos.length) {
      const k = clave(i), anterior = ultimo[k];
      ultimo[k] = i;
      if (anterior >= 0 && i - anterior <= 32768 &&
          datos[anterior] === datos[i] && datos[anterior + 1] === datos[i + 1] &&
          datos[anterior + 2] === datos[i + 2]) {
        const limite = Math.min(258, datos.length - i);
        while (longitud < limite && datos[anterior + longitud] === datos[i + longitud]) longitud++;
        if (longitud >= 3) distancia = i - anterior;
      }
    }
    if (longitud >= 3) {
      emitirPareja(longitud, distancia);
      for (let j = 1; j < longitud && i + j + 2 < datos.length; j++) ultimo[clave(i + j)] = i + j;
      i += longitud;
    } else {
      simboloFijo(datos[i]);
      i++;
    }
  }
  simboloFijo(256);
  if (usados) salida.push(byte);

  let a = 1, b = 0;
  for (let i = 0; i < datos.length; i++) {
    a = (a + datos[i]) % 65521;
    b = (b + a) % 65521;
  }
  const adler = Buffer.alloc(4); adler.writeUInt32BE(((b << 16) | a) >>> 0);
  return Buffer.concat([Buffer.from([0x78, 0x01]), Buffer.from(salida), adler]);
}

function codificarPNG(w, h, rgba) {
  const filas = [];
  for (let y = 0; y < h; y++) {
    const fila = Buffer.alloc(1 + w * 4);
    fila[0] = 0;
    rgba.copy(fila, 1, y * w * 4, (y + 1) * w * 4);
    filas.push(fila);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateDeterminista(Buffer.concat(filas))),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

/* Decodifica un PNG de paleta de 8 bits sin entrelazar (el formato del logo de Metro). */
function decodificarPNGPaleta(buf) {
  let i = 8, paleta = null, trns = null, w = 0, h = 0;
  const idat = [];
  while (i < buf.length) {
    const ln = buf.readUInt32BE(i);
    const tipo = buf.toString('ascii', i + 4, i + 8);
    const datos = buf.slice(i + 8, i + 8 + ln);
    if (tipo === 'IHDR') {
      w = datos.readUInt32BE(0); h = datos.readUInt32BE(4);
      if (datos[8] !== 8 || datos[9] !== 3 || datos[12] !== 0) {
        throw new Error('src/logo-metro.png: se esperaba PNG de paleta de 8 bits sin entrelazar');
      }
    } else if (tipo === 'PLTE') paleta = datos;
    else if (tipo === 'tRNS') trns = datos;
    else if (tipo === 'IDAT') idat.push(datos);
    else if (tipo === 'IEND') break;
    i += 12 + ln;
  }
  const crudo = zlib.inflateSync(Buffer.concat(idat));
  const rgba = Buffer.alloc(w * h * 4);
  let prev = Buffer.alloc(w), p = 0;
  for (let y = 0; y < h; y++) {
    const filtro = crudo[p++];
    const linea = Buffer.from(crudo.slice(p, p + w)); p += w;
    for (let x = 0; x < w; x++) {
      const a = x >= 1 ? linea[x - 1] : 0, b = prev[x], c = x >= 1 ? prev[x - 1] : 0;
      let v = linea[x];
      if (filtro === 1) v = (v + a) & 255;
      else if (filtro === 2) v = (v + b) & 255;
      else if (filtro === 3) v = (v + ((a + b) >> 1)) & 255;
      else if (filtro === 4) {
        const pp = a + b - c, pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c);
        v = (v + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c)) & 255;
      }
      linea[x] = v;
    }
    for (let x = 0; x < w; x++) {
      const idx = linea[x], o = (y * w + x) * 4;
      rgba[o] = paleta[idx * 3]; rgba[o + 1] = paleta[idx * 3 + 1]; rgba[o + 2] = paleta[idx * 3 + 2];
      rgba[o + 3] = (trns && idx < trns.length) ? trns[idx] : 255;
    }
    prev = linea;
  }
  return { w, h, rgba };
}

/* Reescala con muestreo por área y compone sobre un fondo opaco. */
function escalar(src, destW, destH, fondo) {
  const out = Buffer.alloc(destW * destH * 4);
  for (let y = 0; y < destH; y++) {
    for (let x = 0; x < destW; x++) {
      const sx0 = Math.floor(x * src.w / destW), sx1 = Math.max(sx0 + 1, Math.floor((x + 1) * src.w / destW));
      const sy0 = Math.floor(y * src.h / destH), sy1 = Math.max(sy0 + 1, Math.floor((y + 1) * src.h / destH));
      let r = 0, g = 0, b = 0, a = 0, n = 0;
      for (let sy = sy0; sy < sy1; sy++) for (let sx = sx0; sx < sx1; sx++) {
        const o = (sy * src.w + sx) * 4, al = src.rgba[o + 3] / 255;
        r += src.rgba[o] * al; g += src.rgba[o + 1] * al; b += src.rgba[o + 2] * al; a += al; n++;
      }
      const alfa = a / n, o = (y * destW + x) * 4;
      out[o]     = Math.round(r / n + fondo[0] * (1 - alfa));
      out[o + 1] = Math.round(g / n + fondo[1] * (1 - alfa));
      out[o + 2] = Math.round(b / n + fondo[2] * (1 - alfa));
      out[o + 3] = 255;
    }
  }
  return out;
}

/* Icono cuadrado: logo centrado sobre blanco. 'margen' deja aire para iconos maskable. */
function iconoDesdeLogo(logo, tam, proporcion) {
  const px = Buffer.alloc(tam * tam * 4).fill(255);
  const destW = Math.round(tam * proporcion);
  const destH = Math.round(destW * logo.h / logo.w);
  const escalado = escalar(logo, destW, destH, [255, 255, 255]);
  const x0 = Math.round((tam - destW) / 2), y0 = Math.round((tam - destH) / 2);
  for (let y = 0; y < destH; y++) {
    escalado.copy(px, ((y0 + y) * tam + x0) * 4, y * destW * 4, (y + 1) * destW * 4);
  }
  return codificarPNG(tam, tam, px);
}

/* ------------------------- construcción ------------------------- */
function main() {
  console.log('\n🚇 Construyendo la aplicación…\n');

  const temario = leerJSON(path.join(CONTENIDO, 'temario.json'));
  const banco = leerJSON(path.join(CONTENIDO, 'preguntas.json'));
  const legacyPorId = leerJSON(path.join(CONTENIDO, 'fuente', 'legacy-ids.json'));
  const legacyFichas = leerJSON(path.join(CONTENIDO, 'fuente', 'legacy-fichas.json'));
  const { errores, avisos } = validar(temario, banco, legacyPorId, legacyFichas);

  avisos.forEach(a => console.log(ambar('  ⚠ ' + a)));
  if (errores.length) {
    console.log('');
    errores.forEach(e => console.log(rojo('  ✖ ' + e)));
    console.log(rojo('\n✖ ' + errores.length + ' error(es). No se ha generado nada.\n'));
    process.exit(1);
  }
  if (avisos.length) console.log('');

  const plantilla = fs.readFileSync(path.join(SRC, 'plantilla.html'), 'utf8');
  // Se concatenan como código fuente antes de incrustarlos. El resultado sigue
  // siendo un solo <script> y un solo HTML, sin imports ni carga en ejecución.
  const appJs = [
    fs.readFileSync(path.join(SRC, 'psicotecnicos.js'), 'utf8'),
    fs.readFileSync(path.join(SRC, 'app.js'), 'utf8')
  ].join('\n\n');

  // Los datos van embebidos: file:// bloquea fetch() de archivos locales.
  const datos = 'var DATOS = ' + JSON.stringify({ temario, preguntas: banco, legacy_fichas: legacyFichas })
    .replace(/<\//g, '<\\/') + ';';

  const logo = decodificarPNGPaleta(fs.readFileSync(path.join(SRC, 'logo-metro.png')));
  const icono512 = iconoDesdeLogo(logo, 512, 0.86);
  const icono192 = iconoDesdeLogo(logo, 192, 0.86);
  const iconoMask = iconoDesdeLogo(logo, 512, 0.58);   // con aire, para iconos recortables
  const iconoData = 'data:image/png;base64,' + iconoDesdeLogo(logo, 180, 0.86).toString('base64');
  // versión ligera del logo para la interfaz (se muestra a ~30 px de alto)
  const logoUI = codificarPNG(480, Math.round(480 * logo.h / logo.w),
    escalar(logo, 480, Math.round(480 * logo.h / logo.w), [255, 255, 255]));
  const logoData = 'data:image/png;base64,' + logoUI.toString('base64');

  function render({ conManifest }) {
    let h = plantilla
      .replace('/*__DATOS__*/', () => datos + '\nvar LOGO_METRO = ' + JSON.stringify(logoData) + ';')
      .replace('/*__APP__*/', () => appJs)
      .replace(/__ICONO__/g, () => conManifest ? 'icon-192.png' : iconoData);
    if (!conManifest) h = h.replace(/\n?\s*<link rel="manifest"[^>]*>/, '');
    return h;
  }

  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(path.join(DEST_LOCAL, 'contenido'), { recursive: true });
  fs.mkdirSync(DEST_WEB, { recursive: true });

  /* --- versión de doble clic --- */
  const htmlLocal = render({ conManifest: false });
  validarAutocontenido(htmlLocal, 'EMPEZAR-AQUI.html');
  fs.writeFileSync(path.join(DEST_LOCAL, 'EMPEZAR-AQUI.html'), htmlLocal);
  fs.writeFileSync(path.join(DEST_LOCAL, 'LEEME.txt'), fs.readFileSync(path.join(SRC, 'LEEME.txt')));
  ['temario.json', 'preguntas.json', 'FUENTES.md'].forEach(f => {
    fs.copyFileSync(path.join(CONTENIDO, f), path.join(DEST_LOCAL, 'contenido', f));
  });

  /* --- versión web / móvil --- */
  const htmlWeb = render({ conManifest: true });
  validarAutocontenido(htmlWeb, 'index.html');
  fs.writeFileSync(path.join(DEST_WEB, 'index.html'), htmlWeb);
  fs.writeFileSync(path.join(DEST_WEB, 'icon-512.png'), icono512);
  fs.writeFileSync(path.join(DEST_WEB, 'icon-192.png'), icono192);
  fs.writeFileSync(path.join(DEST_WEB, 'icon-maskable-512.png'), iconoMask);
  fs.writeFileSync(path.join(DEST_WEB, 'manifest.json'), JSON.stringify({
    name: 'Oposición Metro de Madrid — Maquinista',
    short_name: 'Oposición Metro',
    description: 'Preparación de la oposición de Maquinista de Tracción Eléctrica de Metro de Madrid.',
    start_url: './index.html',
    scope: './',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#f4f6f9',
    theme_color: '#0065b3',
    lang: 'es',
    icons: [
      { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  }, null, 2));
  const revisionWeb = crypto.createHash('sha256').update(htmlWeb).digest('hex').slice(0, 16);
  fs.writeFileSync(path.join(DEST_WEB, 'sw.js'), `'use strict';
const CACHE = 'oposicion-metro-${revisionWeb}';
const ARCHIVOS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('oposicion-metro-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then(response => {
      const copia = response.clone(); caches.open(CACHE).then(cache => cache.put('./index.html', copia)); return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
`);
  fs.writeFileSync(path.join(DEST_WEB, '.nojekyll'), '');

  /* --- resumen --- */
  const kb = n => (n / 1024).toFixed(0) + ' KB';
  const nPreg = banco.preguntas.length;
  const nEp = temario.partes.reduce((a, p) => a + p.epigrafes.length, 0);
  const nFichas = temario.partes.reduce((a, p) => a + p.epigrafes.reduce((b, e) => b + (e.fichas || []).length, 0), 0);
  const porParte = temario.partes.map(p => {
    const ids = p.epigrafes.map(e => e.id);
    return `parte ${p.parte}: ${banco.preguntas.filter(q => ids.includes(q.epigrafe)).length}`;
  }).join(' · ');

  console.log(verde('✔ Construido.\n'));
  console.log('  Contenido : ' + temario.partes.length + ' partes · ' + nEp + ' temas · ' +
              nPreg + ' preguntas · ' + nFichas + ' fichas');
  console.log('  Preguntas : ' + porParte);
  console.log('  Doble clic: dist/Oposicion-Metro/EMPEZAR-AQUI.html  (' + kb(htmlLocal.length) + ', un solo archivo)');
  console.log('  Para web  : dist/web/  (index.html + manifest.json + iconos + arranque offline)');
  console.log('\n  Comprueba que abre bien:  open "dist/Oposicion-Metro/EMPEZAR-AQUI.html"\n');
}

main();
