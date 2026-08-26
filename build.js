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

const RAIZ = __dirname;
const CONTENIDO = path.join(RAIZ, 'contenido');
const SRC = path.join(RAIZ, 'src');
const DIST = path.join(RAIZ, 'dist');
const DEST_LOCAL = path.join(DIST, 'Oposicion-Metro');
const DEST_WEB = path.join(DIST, 'web');

const rojo = s => '\x1b[31m' + s + '\x1b[0m';
const verde = s => '\x1b[32m' + s + '\x1b[0m';
const ambar = s => '\x1b[33m' + s + '\x1b[0m';

function leerJSON(f) {
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); }
  catch (e) { console.error(rojo('✖ No se pudo leer ' + path.basename(f) + ': ' + e.message)); process.exit(1); }
}

/* ------------------------- validación ------------------------- */
function validar(temario, banco) {
  const errores = [], avisos = [];
  const epIds = new Set();
  const vistos = new Set();

  if (!Array.isArray(temario.partes)) errores.push('temario.json: falta el array "partes".');
  (temario.partes || []).forEach(pa => {
    if (!pa.parte) errores.push('Hay una parte sin campo "parte".');
    (pa.epigrafes || []).forEach(ep => {
      if (!ep.id) errores.push(`Parte ${pa.parte}: hay un epígrafe sin "id".`);
      if (epIds.has(ep.id)) errores.push(`Epígrafe duplicado: ${ep.id}`);
      epIds.add(ep.id);
      if (!ep.titulo) errores.push(`Epígrafe ${ep.id}: sin "titulo".`);
      if (!ep.resumen_md) avisos.push(`Epígrafe ${ep.id}: sin "resumen_md".`);
      if (!ep.fuentes || !ep.fuentes.length) errores.push(`Epígrafe ${ep.id}: sin "fuentes". REGLA DE ORO.`);
      (ep.fichas || []).forEach((f, i) => {
        if (!f.anverso || !f.reverso) errores.push(`Epígrafe ${ep.id}, ficha ${i}: le falta anverso o reverso.`);
      });
    });
  });

  const preguntas = banco.preguntas || [];
  preguntas.forEach(p => {
    const d = `Pregunta ${p.id || '(sin id)'}`;
    if (!p.id) errores.push('Hay una pregunta sin "id".');
    else if (vistos.has(p.id)) errores.push(`ID duplicado: ${p.id}`);
    vistos.add(p.id);
    if (!p.fuente) errores.push(`${d}: SIN FUENTE. La regla de oro prohíbe publicarla.`);
    if (!p.explicacion) errores.push(`${d}: sin "explicacion".`);
    if (!p.enunciado) errores.push(`${d}: sin "enunciado".`);
    if (!Array.isArray(p.opciones) || p.opciones.length !== 4) errores.push(`${d}: debe tener exactamente 4 opciones.`);
    else if (new Set(p.opciones).size !== 4) errores.push(`${d}: tiene opciones repetidas.`);
    if (typeof p.correcta !== 'number' || p.correcta < 0 || p.correcta > 3) errores.push(`${d}: "correcta" fuera de rango (0-3).`);
    if (!epIds.has(p.epigrafe)) errores.push(`${d}: el epígrafe "${p.epigrafe}" no existe en temario.json.`);
    if (p.volatil && !p.fecha_dato) errores.push(`${d}: marcada como volátil pero sin "fecha_dato".`);
    if (![1, 2, 3].includes(p.dificultad)) avisos.push(`${d}: "dificultad" debería ser 1, 2 o 3.`);
  });

  const sinPreguntas = [...epIds].filter(id => !preguntas.some(p => p.epigrafe === id));
  sinPreguntas.forEach(id => avisos.push(`El epígrafe ${id} no tiene ninguna pregunta todavía.`));

  const ex = temario.examen || {};
  if (preguntas.length < (ex.preguntas_simulacro || 80)) {
    avisos.push(`Hay ${preguntas.length} preguntas y el simulacro pide ${ex.preguntas_simulacro}. El simulacro se acortará.`);
  }
  return { errores, avisos };
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
    chunk('IDAT', zlib.deflateSync(Buffer.concat(filas), { level: 9 })),
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
  const { errores, avisos } = validar(temario, banco);

  avisos.forEach(a => console.log(ambar('  ⚠ ' + a)));
  if (errores.length) {
    console.log('');
    errores.forEach(e => console.log(rojo('  ✖ ' + e)));
    console.log(rojo('\n✖ ' + errores.length + ' error(es). No se ha generado nada.\n'));
    process.exit(1);
  }
  if (avisos.length) console.log('');

  const plantilla = fs.readFileSync(path.join(SRC, 'plantilla.html'), 'utf8');
  const appJs = fs.readFileSync(path.join(SRC, 'app.js'), 'utf8');

  // Los datos van embebidos: file:// bloquea fetch() de archivos locales.
  const datos = 'var DATOS = ' + JSON.stringify({ temario, preguntas: banco })
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
  fs.writeFileSync(path.join(DEST_LOCAL, 'EMPEZAR-AQUI.html'), htmlLocal);
  fs.writeFileSync(path.join(DEST_LOCAL, 'LEEME.txt'), fs.readFileSync(path.join(SRC, 'LEEME.txt')));
  ['temario.json', 'preguntas.json', 'FUENTES.md'].forEach(f => {
    fs.copyFileSync(path.join(CONTENIDO, f), path.join(DEST_LOCAL, 'contenido', f));
  });

  /* --- versión web / móvil --- */
  fs.writeFileSync(path.join(DEST_WEB, 'index.html'), render({ conManifest: true }));
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
  console.log('  Para web  : dist/web/  (index.html + manifest.json + iconos)');
  console.log('\n  Comprueba que abre bien:  open "dist/Oposicion-Metro/EMPEZAR-AQUI.html"\n');
}

main();
