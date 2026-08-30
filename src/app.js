/* =======================================================================
   Oposición Metro de Madrid — Maquinista de Tracción Eléctrica
   App de estudio autocontenida. Vanilla JS, sin dependencias.
   ======================================================================= */
(function () {
'use strict';

var TEMARIO   = DATOS.temario;
var PREGUNTAS = DATOS.preguntas.preguntas;
var LEGACY_FICHAS = DATOS.legacy_fichas || {};
var EXAMEN    = TEMARIO.examen;
var PARTES    = TEMARIO.partes;

/* --- índices de acceso rápido --- */
var EPIGRAFES = [];
var EP_POR_ID = {};
var PARTE_DE_EP = {};
PARTES.forEach(function (pa) {
  pa.epigrafes.forEach(function (ep) {
    EPIGRAFES.push(ep);
    EP_POR_ID[ep.id] = ep;
    PARTE_DE_EP[ep.id] = pa;
  });
});
var PREG_POR_ID = {};
var ID_ANTIGUO_A_NUEVO = {};
PREGUNTAS.forEach(function (p) {
  PREG_POR_ID[p.id] = p;
  if (p.legacy_id) ID_ANTIGUO_A_NUEVO[p.legacy_id] = p.id;
});

var NUEVAS_POR_DIA = 20;
var MAX_REPASO_POR_BLOQUE = 40;
var INTERVALOS = [1, 3, 7, 16, 35, 75, 150];

/* ===================== utilidades ===================== */
var $ = function (sel, raiz) { return (raiz || document).querySelector(sel); };
var app = $('#app');

function el(tag, attrs, hijos) {
  var n = document.createElement(tag);
  if (attrs) for (var k in attrs) {
    if (k === 'class') n.className = attrs[k];
    else if (k === 'html') n.innerHTML = attrs[k];
    else if (k === 'text') n.textContent = attrs[k];
    else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2), attrs[k]);
    else if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
  }
  (hijos || []).forEach(function (h) {
    if (h === null || h === undefined || h === false) return;
    n.appendChild(typeof h === 'string' ? document.createTextNode(h) : h);
  });
  return n;
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
function hoyStr(d) {
  d = d || new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function sumarDias(fecha, n) {
  var p = fecha.split('-');
  var d = new Date(+p[0], +p[1] - 1, +p[2]);
  d.setDate(d.getDate() + n);
  return hoyStr(d);
}
function diasEntre(a, b) {
  var pa = a.split('-'), pb = b.split('-');
  var da = new Date(+pa[0], +pa[1] - 1, +pa[2]), db = new Date(+pb[0], +pb[1] - 1, +pb[2]);
  return Math.round((db - da) / 86400000);
}
function baraja(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function aleatorio(n) { return Math.floor(Math.random() * n); }
function mmss(seg) {
  var m = Math.floor(seg / 60), s = seg % 60;
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}
function plural(n, sing, pl) { return n + ' ' + (n === 1 ? sing : pl); }
function barraProgreso(pct, etiqueta, estilo, color) {
  var valor = Math.max(0, Math.min(100, Number(pct) || 0));
  return el('div', {
    class: 'barra', style: estilo || '', role: 'progressbar',
    'aria-label': etiqueta || 'Progreso', 'aria-valuemin': '0',
    'aria-valuemax': '100', 'aria-valuenow': String(Math.round(valor))
  }, [el('i', { style: 'width:' + valor + '%' + (color ? ';background:' + color : '') })]);
}
function normaliza(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function hashTexto(s) {
  var h = 2166136261;
  s = String(s);
  for (var i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ('00000000' + (h >>> 0).toString(16)).slice(-8);
}
function claveFicha(ep, ficha) {
  return ep.id + '#f-' + (ficha.id || hashTexto(ep.id + '\n' + ficha.anverso));
}

/* ===================== identidad visual ===================== */
function icono(nombre, clase) {
  var ns = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('class', 'ico' + (clase ? ' ' + clase : ''));
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  var use = document.createElementNS(ns, 'use');
  use.setAttribute('href', '#i-' + nombre);
  svg.appendChild(use);
  return svg;
}
function marcaEstudio() { return '<span class="marca-propia">M</span>'; }
function nombreUsuario() {
  return (TEMARIO.usuario && TEMARIO.usuario.nombre) ? String(TEMARIO.usuario.nombre).trim() : '';
}
function saludo() {
  var h = new Date().getHours();
  var momento = h < 6 ? 'Buenas noches' : h < 13 ? 'Buenos días' : h < 21 ? 'Buenas tardes' : 'Buenas noches';
  var n = nombreUsuario();
  return n ? momento + ', ' + n : momento;
}
function colorParte(pa) { return (pa && pa.color) ? pa.color : 'var(--accent)'; }
function tintaParte(pa) {
  return pa && ['3', '4', '6'].indexOf(String(pa.parte)) >= 0 ? '#000000' : '#ffffff';
}
/* Tiñe la banda superior y los acentos con el color de la parte que se está viendo. */
function ponerLinea(color) {
  document.documentElement.style.setProperty('--linea', color || 'var(--accent)');
}
function roundel(pa, pequeno) {
  return el('span', { class: 'roundel' + (pequeno ? ' pequeno' : ''),
                      style: 'background:' + colorParte(pa) + ';color:' + tintaParte(pa), text: pa.parte });
}
/* Devuelve ', Andrei' o cadena vacía, para poder tutear sin quedar forzado. */
function coma() { var n = nombreUsuario(); return n ? ', ' + n : ''; }

/* ===================== estado persistente ===================== */
var CLAVE = 'oposicion-metro-v1';
var CLAVE_BLOQUEO = CLAVE + '-pestana-activa';
var CLAVE_ANTES_RESTAURAR = CLAVE + '-antes-restaurar';
var VERSION_ESTADO = 2;
var E;
var soloLectura = false;
var avisoSoloLecturaMostrado = false;
var ID_PESTANA = (window.crypto && window.crypto.randomUUID)
  ? window.crypto.randomUUID()
  : String(Date.now()) + '-' + String(Math.random()).slice(2);
var fichasValidas = {};
var fichaAntiguaANueva = {};
EPIGRAFES.forEach(function (ep) {
  (ep.fichas || []).forEach(function (f) {
    var nueva = claveFicha(ep, f);
    fichasValidas[nueva] = true;
    if (LEGACY_FICHAS[nueva]) fichaAntiguaANueva[LEGACY_FICHAS[nueva]] = nueva;
  });
});

function estadoInicial() {
  return { v: VERSION_ESTADO, srs: {}, practica: {}, fichas: {}, simulacros: [], fallos: [],
           racha: { ultimo: null, dias: 0, mejor: 0 }, vistos: {},
           nuevasHoy: { fecha: null, n: 0 }, tema: 'auto', psico: {}, revision: 0 };
}
function esObjetoPlano(v) {
  if (!v || Object.prototype.toString.call(v) !== '[object Object]') return false;
  var proto = Object.getPrototypeOf(v);
  return proto === Object.prototype || proto === null;
}
function enteroAcotado(v, min, max, defecto) {
  return Number.isInteger(v) && v >= min && v <= max ? v : defecto;
}
function fechaValida(v) {
  if (typeof v !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
  var p = v.split('-').map(Number), d = new Date(p[0], p[1] - 1, p[2]);
  return d.getFullYear() === p[0] && d.getMonth() === p[1] - 1 && d.getDate() === p[2];
}
function idPreguntaActual(id) {
  return PREG_POR_ID[id] ? id : (ID_ANTIGUO_A_NUEVO[id] || null);
}
function claveFichaActual(id) {
  return fichasValidas[id] ? id : (fichaAntiguaANueva[id] || null);
}
function normalizarEstado(origen, estricto) {
  if (!esObjetoPlano(origen)) {
    if (estricto) throw new Error('El estado no es un objeto.');
    origen = {};
  }
  if (estricto && 'v' in origen &&
      (!Number.isInteger(origen.v) || origen.v < 1 || origen.v > VERSION_ESTADO)) {
    throw new Error('La versión del estado no es compatible.');
  }
  if (estricto && !esObjetoPlano(origen.srs)) throw new Error('El campo srs no es un objeto.');
  if (estricto) ['practica', 'fichas', 'racha', 'vistos', 'nuevasHoy', 'psico'].forEach(function (campo) {
    if (campo in origen && !esObjetoPlano(origen[campo])) throw new Error('El campo ' + campo + ' no es un objeto.');
  });
  var n = estadoInicial();

  if (esObjetoPlano(origen.srs)) Object.keys(origen.srs).forEach(function (id) {
    var actual = idPreguntaActual(id), t = origen.srs[id];
    if (!actual || !esObjetoPlano(t)) return;
    n.srs[actual] = {
      n: enteroAcotado(t.n, 0, INTERVALOS.length, 0),
      due: fechaValida(t.due) ? t.due : hoyStr(),
      fallos: enteroAcotado(t.fallos, 0, 100000, 0),
      vistas: enteroAcotado(t.vistas, 0, 1000000, 0),
      lastReviewed: fechaValida(t.lastReviewed) ? t.lastReviewed : null
    };
  });
  if (esObjetoPlano(origen.practica)) Object.keys(origen.practica).forEach(function (id) {
    var actual = idPreguntaActual(id), t = origen.practica[id];
    if (!actual || !esObjetoPlano(t)) return;
    var intentos = enteroAcotado(t.intentos, 0, 1000000, 0);
    n.practica[actual] = {
      intentos: intentos,
      aciertos: enteroAcotado(t.aciertos, 0, intentos, 0),
      ultimo: fechaValida(t.ultimo) ? t.ultimo : null
    };
  });
  if (!esObjetoPlano(origen.practica)) Object.keys(n.srs).forEach(function (id) {
    n.practica[id] = { intentos: Math.max(1, n.srs[id].vistas), aciertos: 0, ultimo: n.srs[id].lastReviewed };
  });
  if (esObjetoPlano(origen.fichas)) Object.keys(origen.fichas).forEach(function (id) {
    var actual = claveFichaActual(id), t = origen.fichas[id];
    if (!actual || !esObjetoPlano(t)) return;
    n.fichas[actual] = {
      n: enteroAcotado(t.n, 0, INTERVALOS.length, 0),
      due: fechaValida(t.due) ? t.due : hoyStr(),
      lastReviewed: fechaValida(t.lastReviewed) ? t.lastReviewed : null
    };
  });
  if (Array.isArray(origen.simulacros)) {
    n.simulacros = origen.simulacros.slice(-100).filter(esObjetoPlano).map(function (s) {
      var total = enteroAcotado(s.total, 1, 10000, 1);
      var aciertos = enteroAcotado(s.aciertos, 0, total, 0);
      var porParte = {};
      if (esObjetoPlano(s.porParte)) Object.keys(s.porParte).forEach(function (clave) {
        if (!/^(?:[1-7]|\?)$/.test(clave)) return;
        var g = s.porParte[clave];
        if (!esObjetoPlano(g)) return;
        var gt = enteroAcotado(g.total, 1, 10000, 1);
        porParte[clave] = { total: gt, ac: enteroAcotado(g.ac, 0, gt, 0) };
      });
      return {
        fecha: fechaValida(s.fecha) ? s.fecha : hoyStr(),
        aciertos: aciertos, total: total,
        nota: Math.round((aciertos / total) * 1000) / 10,
        segundos: enteroAcotado(s.segundos, 0, 864000, 0),
        porParte: porParte
      };
    });
  } else if (estricto && 'simulacros' in origen) throw new Error('El historial de simulacros no es válido.');
  if (Array.isArray(origen.fallos)) {
    origen.fallos.forEach(function (id) {
      var actual = idPreguntaActual(id);
      if (actual && n.fallos.indexOf(actual) < 0) n.fallos.push(actual);
    });
  } else if (estricto && 'fallos' in origen) throw new Error('La lista de fallos no es válida.');
  if (esObjetoPlano(origen.racha)) {
    var diasRacha = enteroAcotado(origen.racha.dias, 0, 100000, 0);
    n.racha = {
      ultimo: fechaValida(origen.racha.ultimo) ? origen.racha.ultimo : null,
      dias: diasRacha,
      mejor: Math.max(diasRacha, enteroAcotado(origen.racha.mejor, 0, 100000, 0))
    };
  }
  if (esObjetoPlano(origen.vistos)) Object.keys(origen.vistos).forEach(function (id) {
    if (EP_POR_ID[id] && origen.vistos[id]) n.vistos[id] = true;
  });
  if (esObjetoPlano(origen.nuevasHoy)) {
    n.nuevasHoy = {
      fecha: fechaValida(origen.nuevasHoy.fecha) ? origen.nuevasHoy.fecha : null,
      n: enteroAcotado(origen.nuevasHoy.n, 0, NUEVAS_POR_DIA, 0)
    };
  }
  n.tema = ['auto', 'claro', 'oscuro'].indexOf(origen.tema) >= 0 ? origen.tema : 'auto';
  if (esObjetoPlano(origen.psico)) ['serie', 'verbal', 'espacial', 'mixto'].forEach(function (tipo) {
    var t = origen.psico[tipo];
    if (!esObjetoPlano(t)) return;
    var hechos = enteroAcotado(t.hechos, 0, 1000000, 0);
    n.psico[tipo] = {
      hechos: hechos,
      aciertos: enteroAcotado(t.aciertos, 0, hechos, 0)
    };
  });
  n.revision = enteroAcotado(origen.revision, 0, Number.MAX_SAFE_INTEGER, 0);
  return n;
}
function cargar() {
  try {
    var crudo = localStorage.getItem(CLAVE);
    E = crudo ? normalizarEstado(JSON.parse(crudo), false) : estadoInicial();
  } catch (err) { E = estadoInicial(); }
}
var guardarPendiente = null;
function guardarYa() {
  if (guardarPendiente) { clearTimeout(guardarPendiente); guardarPendiente = null; }
  if (soloLectura) return false;
  try {
    var serializado = JSON.stringify(E);
    localStorage.setItem(CLAVE, serializado);
    return localStorage.getItem(CLAVE) === serializado;
  } catch (err) { console.warn('No se pudo guardar el progreso', err); return false; }
}
function guardar() {
  if (soloLectura) return;
  if (guardarPendiente) clearTimeout(guardarPendiente);
  guardarPendiente = setTimeout(guardarYa, 120);
}
function puedeEditar() {
  if (!soloLectura) return true;
  if (!avisoSoloLecturaMostrado) {
    avisoSoloLecturaMostrado = true;
    alert('Esta aplicación ya está abierta en otra pestaña. Cierra la otra pestaña y pulsa «Comprobar de nuevo» para evitar perder progreso.');
  }
  return false;
}
function leerBloqueo() {
  try { return JSON.parse(localStorage.getItem(CLAVE_BLOQUEO) || 'null'); }
  catch (err) { return null; }
}
function escribirBloqueo() {
  try { localStorage.setItem(CLAVE_BLOQUEO, JSON.stringify({ id: ID_PESTANA, ts: Date.now() })); return true; }
  catch (err) { return false; }
}
function comprobarBloqueo() {
  var b = leerBloqueo();
  var ocupado = b && b.id !== ID_PESTANA && Date.now() - b.ts < 15000;
  var anterior = soloLectura;
  soloLectura = !!ocupado;
  if (!soloLectura) escribirBloqueo();
  if (anterior !== soloLectura && pila && pila.length) pintar();
  return !soloLectura;
}
function avisoPestana(c) {
  if (!soloLectura) return;
  c.appendChild(el('div', { class: 'aviso aviso-pestana', role: 'alert' }, [
    el('b', { text: 'Modo de solo lectura. ' }),
    document.createTextNode('La aplicación está abierta en otra pestaña. Cierra la otra para evitar que dos copias sobrescriban el progreso.'),
    el('button', { class: 'btn', style: 'margin-top:10px', onclick: function () {
      avisoSoloLecturaMostrado = false;
      comprobarBloqueo();
    } }, ['Comprobar de nuevo'])
  ]));
}
// Si cierra la pestaña o cambia de aplicación, volcamos ya: nada de esperar al retardo.
window.addEventListener('pagehide', guardarYa);
window.addEventListener('beforeunload', guardarYa);
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') guardarYa();
});
window.addEventListener('pagehide', function () {
  var b = leerBloqueo();
  if (b && b.id === ID_PESTANA) try { localStorage.removeItem(CLAVE_BLOQUEO); } catch (err) {}
});
window.addEventListener('storage', function (ev) {
  if (ev.key === CLAVE_BLOQUEO) comprobarBloqueo();
  if (ev.key === CLAVE && soloLectura && ev.newValue) {
    try { E = normalizarEstado(JSON.parse(ev.newValue), false); if (pila.length) pintar(); } catch (err) {}
  }
});
setInterval(function () { if (!document.hidden) comprobarBloqueo(); }, 5000);

/* ===================== repetición espaciada ===================== */
function tarjeta(id) {
  if (!E.srs[id]) E.srs[id] = { n: 0, due: hoyStr(), fallos: 0, vistas: 0 };
  return E.srs[id];
}
function registrar(id, acerto, modo, revisable) {
  if (!puedeEditar()) return false;
  var h = hoyStr();
  var practica = E.practica[id] || { intentos: 0, aciertos: 0, ultimo: null };
  practica.intentos++;
  if (acerto) practica.aciertos++;
  practica.ultimo = h;
  E.practica[id] = practica;

  if (!acerto && E.fallos.indexOf(id) < 0) E.fallos.push(id);

  // Solo un repaso programado puede mover el calendario SRS. Un test o un
  // simulacro mide práctica, pero no finge que han transcurrido días.
  if (modo === 'repaso' && revisable) {
    var eraNueva = !E.srs[id];
    var t = tarjeta(id);
    t.vistas++;
    if (t.lastReviewed !== h) {
      if (eraNueva) contadorNuevas().n++;
      if (acerto) {
        t.n = Math.min(INTERVALOS.length, t.n + 1);
        t.due = sumarDias(h, INTERVALOS[Math.min(t.n - 1, INTERVALOS.length - 1)]);
        var i = E.fallos.indexOf(id);
        if (i >= 0 && t.n >= 2) E.fallos.splice(i, 1);
      } else {
        t.n = 0;
        t.fallos++;
        t.due = sumarDias(h, 1);
      }
      t.lastReviewed = h;
    }
  }
  tocarRacha();
  E.revision++;
  guardar();
  return true;
}
function tocarRacha() {
  var h = hoyStr(), r = E.racha;
  if (r.ultimo === h) return;
  r.dias = (r.ultimo && diasEntre(r.ultimo, h) === 1) ? r.dias + 1 : 1;
  r.ultimo = h;
  if (r.dias > r.mejor) r.mejor = r.dias;
}
function contadorNuevas() {
  var h = hoyStr();
  if (E.nuevasHoy.fecha !== h) E.nuevasHoy = { fecha: h, n: 0 };
  return E.nuevasHoy;
}
function datosColaDeHoy() {
  var h = hoyStr(), vencidas = [], nuevas = [];
  PREGUNTAS.forEach(function (p) {
    var t = E.srs[p.id];
    if (!t) nuevas.push(p);
    else if (t.due <= h) vencidas.push(p);
  });
  vencidas.sort(function (a, b) {
    var ta = E.srs[a.id], tb = E.srs[b.id];
    if (ta.n !== tb.n) return ta.n - tb.n;           // lo más flojo primero
    return tb.fallos - ta.fallos;                     // y lo más fallado antes
  });
  var cupo = Math.max(0, NUEVAS_POR_DIA - contadorNuevas().n);
  var nuevasHoy = baraja(nuevas).slice(0, cupo);
  var pendientes = vencidas.concat(nuevasHoy);
  return {
    lista: pendientes.slice(0, MAX_REPASO_POR_BLOQUE),
    total: pendientes.length,
    vencidas: vencidas.length,
    nuevas: nuevasHoy.length
  };
}
function colaDeHoy() { return datosColaDeHoy().lista; }

/* ===================== markdown mínimo ===================== */
function md(txt) {
  var bloques = String(txt).split(/\n{2,}/);
  var html = bloques.map(function (b) {
    b = b.trim();
    if (!b) return '';
    var lineas = b.split('\n');
    if (lineas.every(function (l) { return /^[-*]\s+/.test(l.trim()); })) {
      return '<ul>' + lineas.map(function (l) {
        return '<li>' + enLinea(l.trim().replace(/^[-*]\s+/, '')) + '</li>';
      }).join('') + '</ul>';
    }
    if (/^#{1,4}\s+/.test(b)) return '<h2>' + enLinea(b.replace(/^#{1,4}\s+/, '')) + '</h2>';
    if (lineas.length > 1 && lineas.every(function (l) { return /^\|/.test(l.trim()); })) return tabla(lineas);
    if (lineas.every(function (l) { return /^>\s?/.test(l.trim()); })) {
      return '<p class="nota-md">' + enLinea(lineas.map(function (l) { return l.replace(/^>\s?/, ''); }).join(' ')) + '</p>';
    }
    return '<p>' + enLinea(b).replace(/\n/g, '<br>') + '</p>';
  }).join('');
  return html;
}
function tabla(lineas) {
  var filas = lineas.map(function (l) {
    return l.trim().replace(/^\||\|$/g, '').split('|').map(function (c) { return c.trim(); });
  }).filter(function (f) {
    return !f.every(function (c) { return /^:?-{2,}:?$/.test(c); });   // fuera la línea separadora
  });
  var cab = filas.shift();
  return '<div class="tabla-env"><table class="tabla"><thead><tr>' +
    cab.map(function (c) { return '<th>' + enLinea(c) + '</th>'; }).join('') +
    '</tr></thead><tbody>' +
    filas.map(function (f) {
      return '<tr>' + f.map(function (c) { return '<td>' + enLinea(c) + '</td>'; }).join('') + '</tr>';
    }).join('') + '</tbody></table></div>';
}
function enLinea(s) {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/«([^»]*)»/g, '«$1»');
}


/* ===================== biblioteca de figuras =====================
   Dibujos propios en SVG, hechos a partir de las descripciones escritas
   del temario (dimensiones, colores y leyendas). No reproducen las
   ilustraciones de los manuales.
   ================================================================= */
function svgEnv(w, h, contenido, titulo) {
  return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" style="max-width:' + w +
    'px;height:auto;display:block;margin:0 auto" role="img" aria-label="' + esc(titulo || '') + '">' +
    contenido + '</svg>';
}
function triAdvertencia(x, y, lado) {
  var h = lado * 0.866;
  return '<g transform="translate(' + x + ',' + y + ')">' +
    '<path d="M' + (lado / 2) + ' 0 L' + lado + ' ' + h + ' L0 ' + h + ' Z" fill="#f5d000" stroke="#111" stroke-width="' + (lado * 0.075) + '" stroke-linejoin="round"/>' +
    '<circle cx="' + (lado * 0.42) + '" cy="' + (h * 0.52) + '" r="' + (lado * 0.055) + '" fill="#111"/>' +
    '<path d="M' + (lado * 0.42) + ' ' + (h * 0.60) + ' l0 ' + (h * 0.16) + ' M' + (lado * 0.42) + ' ' + (h * 0.66) +
      ' l' + (lado * 0.11) + ' ' + (h * 0.10) + ' M' + (lado * 0.42) + ' ' + (h * 0.66) + ' l' + (-lado * 0.10) + ' ' + (h * 0.10) +
      ' M' + (lado * 0.30) + ' ' + (h * 0.64) + ' l' + (lado * 0.24) + ' 0" stroke="#111" stroke-width="' + (lado * 0.035) + '" fill="none" stroke-linecap="round"/>' +
    '</g>';
}
var FIGURAS = {
  'cartel-avisador': function () {
    return svgEnv(400, 230,
      '<rect x="8" y="34" width="384" height="192" rx="6" fill="#fff" stroke="#333" stroke-width="3"/>' +
      '<rect x="28" y="52" width="344" height="120" fill="#f5d000"/>' +
      '<rect x="28" y="172" width="344" height="40" fill="#0b4ea2"/>' +
      '<text x="200" y="92" text-anchor="middle" font-size="21" font-weight="700" fill="#111">¡ATENCIÓN!</text>' +
      '<text x="200" y="122" text-anchor="middle" font-size="17" font-weight="700" fill="#111">CARTEL PRECAUTORIO EN</text>' +
      '<text x="200" y="146" text-anchor="middle" font-size="17" font-weight="700" fill="#111">LA SIGUIENTE ESTACIÓN</text>' +
      '<text x="200" y="199" text-anchor="middle" font-size="19" font-weight="700" fill="#fff">SELECCIONAR A.T.P.</text>' +
      '<text x="200" y="22" text-anchor="middle" font-size="15" fill="#666">80 × 40 cm — amarillo 80×30, azul 80×10</text>',
      'Cartel avisador de precaución próxima');
  },
  'cartel-personal': function () {
    return svgEnv(400, 230,
      '<rect x="8" y="34" width="384" height="192" rx="6" fill="#fff" stroke="#333" stroke-width="3"/>' +
      '<rect x="28" y="52" width="344" height="160" fill="#f5d000"/>' +
      '<text x="145" y="98" text-anchor="middle" font-size="22" font-weight="700" fill="#111">¡PRECAUCIÓN!</text>' +
      '<text x="145" y="132" text-anchor="middle" font-size="18" font-weight="700" fill="#111">PERSONAL EN</text>' +
      '<text x="145" y="156" text-anchor="middle" font-size="18" font-weight="700" fill="#111">PLATAFORMA DE VÍA</text>' +
      triAdvertencia(288, 76, 76) +
      '<text x="200" y="22" text-anchor="middle" font-size="15" fill="#666">80 × 40 cm — parada obligatoria ante él</text>',
      'Cartel precautorio por presencia de personal en la plataforma de vía');
  },
  'cartel-obras': function () {
    return svgEnv(400, 230,
      '<rect x="8" y="34" width="384" height="192" rx="6" fill="#fff" stroke="#333" stroke-width="3"/>' +
      '<rect x="28" y="52" width="344" height="120" fill="#f5d000"/>' +
      '<rect x="28" y="172" width="344" height="40" fill="#0b4ea2"/>' +
      '<text x="150" y="98" text-anchor="middle" font-size="21" font-weight="700" fill="#111">¡PRECAUCIÓN!</text>' +
      '<text x="150" y="128" text-anchor="middle" font-size="20" font-weight="700" fill="#111">ZONA DE OBRAS</text>' +
      triAdvertencia(292, 62, 68) +
      '<text x="200" y="199" text-anchor="middle" font-size="19" font-weight="700" fill="#fff">SELECCIONAR A.T.P.</text>' +
      '<text x="200" y="22" text-anchor="middle" font-size="15" fill="#666">80 × 40 cm — amarillo 80×30, azul 80×10</text>',
      'Cartel precautorio por zona de obras');
  },
  'cartel-obras-enlace': function () {
    return svgEnv(260, 300,
      '<rect x="46" y="34" width="168" height="248" rx="6" fill="#fff" stroke="#333" stroke-width="3"/>' +
      '<rect x="62" y="50" width="136" height="140" fill="#f5d000"/>' +
      '<rect x="62" y="190" width="136" height="76" fill="#0b4ea2"/>' +
      '<text x="130" y="76" text-anchor="middle" font-size="15" font-weight="700" fill="#111">¡PRECAUCIÓN!</text>' +
      '<text x="130" y="96" text-anchor="middle" font-size="14" font-weight="700" fill="#111">ZONA DE OBRAS</text>' +
      triAdvertencia(100, 106, 60) +
      '<text x="130" y="222" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">VELOCIDAD</text>' +
      '<text x="130" y="246" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">MÁXIMA 30 Km/h</text>' +
      '<text x="130" y="22" text-anchor="middle" font-size="14" fill="#666">35 × 80 cm — retrorreflectante</text>',
      'Cartel precautorio de zona de obras desde túnel de enlace');
  },
  'cartel-autoshunt': function () {
    return svgEnv(400, 230,
      '<rect x="8" y="34" width="384" height="192" rx="6" fill="#fff" stroke="#333" stroke-width="3"/>' +
      triAdvertencia(112, 50, 62) +
      '<g transform="translate(228,50)"><circle cx="31" cy="27" r="27" fill="#fff" stroke="#d8232a" stroke-width="7"/>' +
      '<path d="M12 8 L50 46" stroke="#d8232a" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M31 14 a7 7 0 1 1 0.1 0 M24 46 l0 -14 a7 7 0 0 1 14 0 l0 14" fill="#111"/></g>' +
      '<rect x="28" y="126" width="344" height="42" fill="#f5d000"/>' +
      '<rect x="28" y="168" width="344" height="44" fill="#d8232a"/>' +
      '<text x="200" y="155" text-anchor="middle" font-size="19" font-weight="700" fill="#111">ATENCIÓN MANIOBRA EN A.T.O.</text>' +
      '<text x="200" y="197" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">PROHIBIDO EL PASO SIN AUTORIZACIÓN</text>' +
      '<text x="200" y="22" text-anchor="middle" font-size="15" fill="#666">80 × 40 cm — permanente en accesos a sacos con Auto-Shunt</text>',
      'Cartel de prohibición de paso por maniobra en Auto-Shunt');
  }  ,
  'faroles': function () {
    function farol(x, color, nombre, significado) {
      return '<g transform="translate(' + x + ',0)">' +
        '<rect x="6" y="42" width="86" height="78" rx="5" fill="' + color + '" stroke="#333" stroke-width="2"/>' +
        '<circle cx="49" cy="34" r="22" fill="' + color + '" stroke="#333" stroke-width="2"/>' +
        '<circle cx="49" cy="34" r="11" fill="#fff" opacity="0.65"/>' +
        '<text x="49" y="146" text-anchor="middle" font-size="16" font-weight="700" fill="var(--text)">' + nombre + '</text>' +
        '<text x="49" y="168" text-anchor="middle" font-size="14" fill="var(--muted)">' + significado + '</text>' +
        '</g>';
    }
    return svgEnv(560, 190,
      farol(20, '#f5d000', 'Amarillo', 'inicio de precaución') +
      farol(180, '#1668d4', 'Azul', 'inicio zona de obras') +
      farol(340, '#12a150', 'Verde', 'final de precaución') +
      '<g transform="translate(470,0)">' +
      '<rect x="16" y="60" width="60" height="60" rx="4" fill="#c8102e" stroke="#333" stroke-width="2"/>' +
      '<circle cx="46" cy="34" r="20" fill="#c8102e" stroke="#333" stroke-width="2"/>' +
      '<text x="46" y="146" text-anchor="middle" font-size="16" font-weight="700" fill="var(--text)">Rojo</text>' +
      '<text x="46" y="168" text-anchor="middle" font-size="14" fill="var(--muted)">no rebasar</text></g>' +
      '<text x="280" y="186" text-anchor="middle" font-size="13" fill="var(--muted)">Luz portátil intermitente sobre rectángulo reflectante del mismo color, 20 × 18 cm</text>',
      'Faroles de precaución: amarillo, azul, verde y rojo');
  },
  'secuencia-obras': function () {
    var y = 110;
    function hito(x, color, etiqueta, distancia, bajo) {
      var dy = bajo ? 26 : 0;
      return '<g transform="translate(' + x + ',0)">' +
        '<line x1="0" y1="' + (y - 34) + '" x2="0" y2="' + (y + 10) + '" stroke="#9aa3b2" stroke-width="2"/>' +
        '<circle cx="0" cy="' + (y - 46) + '" r="14" fill="' + color + '" stroke="#333" stroke-width="2"/>' +
        '<text x="0" y="' + (y + 32 + dy) + '" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">' + etiqueta + '</text>' +
        (distancia ? '<text x="0" y="' + (y + 50 + dy) + '" text-anchor="middle" font-size="13" fill="var(--muted)">' + distancia + '</text>' : '') +
        '</g>';
    }
    return svgEnv(760, 210,
      '<text x="380" y="24" text-anchor="middle" font-size="14" fill="var(--muted)">Sentido de la marcha  →</text>' +
      '<rect x="380" y="' + (y - 14) + '" width="140" height="28" fill="#1668d4" opacity="0.16"/>' +
      '<text x="450" y="' + (y - 26) + '" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">ZONA DE OBRAS</text>' +
      '<line x1="30" y1="' + y + '" x2="730" y2="' + y + '" stroke="#6b7484" stroke-width="4"/>' +
      '<g transform="translate(80,0)">' +
      '<rect x="-32" y="' + (y - 68) + '" width="64" height="36" rx="4" fill="#f5d000" stroke="#333" stroke-width="2"/>' +
      '<line x1="0" y1="' + (y - 32) + '" x2="0" y2="' + (y + 10) + '" stroke="#9aa3b2" stroke-width="2"/>' +
      '<text x="0" y="' + (y + 32) + '" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">Cartel</text>' +
      '<text x="0" y="' + (y + 50) + '" text-anchor="middle" font-size="13" fill="var(--muted)">piñón anterior</text></g>' +
      hito(250, '#f5d000', 'Farol amarillo', '≈150 m antes', false) +
      hito(380, '#1668d4', 'Farol azul', 'inicio · máx. 30 km/h', true) +
      hito(620, '#12a150', 'Farol verde', '≈150 m después', false),
      'Secuencia de señalización de una zona de obras');
  },
  'zonas-anden': function () {
    return svgEnv(560, 210,
      '<rect x="30" y="40" width="500" height="110" fill="var(--surface-2)" stroke="var(--border)" stroke-width="2"/>' +
      '<rect x="30" y="112" width="500" height="38" fill="#f5d000" opacity="0.55"/>' +
      '<rect x="30" y="108" width="500" height="6" fill="#f5d000"/>' +
      '<rect x="30" y="150" width="500" height="22" fill="var(--muted)" opacity="0.35"/>' +
      '<text x="280" y="84" text-anchor="middle" font-size="18" font-weight="700" fill="var(--text)">ZONA B</text>' +
      '<text x="280" y="102" text-anchor="middle" font-size="13" fill="var(--muted)">todo el andén excepto la Zona A</text>' +
      '<text x="280" y="137" text-anchor="middle" font-size="15" font-weight="700" fill="#111">ZONA A — franja de borde de andén (≈80 cm)</text>' +
      '<text x="280" y="167" text-anchor="middle" font-size="13" fill="var(--text)">plataforma de vía</text>' +
      '<text x="280" y="196" text-anchor="middle" font-size="13" fill="var(--muted)">En andenes centrales hay dos franjas, una por cada lado</text>' +
      '<text x="280" y="28" text-anchor="middle" font-size="13" fill="var(--muted)">Durante el periodo de servicio solo se puede trabajar en la Zona B</text>',
      'Zonas A y B del andén');
  }
};

/* ===================== navegación ===================== */
var pila = [];
function ir(fn, titulo, args) {
  pila.push({ fn: fn, titulo: titulo, args: args });
  pintar();
}
function reemplazar(fn, titulo, args) {
  pila[pila.length - 1] = { fn: fn, titulo: titulo, args: args };
  pintar();
}
function esSesionActiva(v) {
  return v && (v.fn === pSesion || v.fn === pPsicoSesion) && v.args &&
    v.args.sesion && !v.args.sesion.terminada;
}
function confirmarAbandono(v) {
  if (!esSesionActiva(v)) return true;
  var nombre = v.fn === pPsicoSesion ? 'la tanda de psicotécnicos' :
    (v.args.sesion.modo === 'simulacro' ? 'el simulacro' : 'el test');
  return confirm('¿Seguro que quieres abandonar ' + nombre + '? Se perderán las respuestas de esta sesión.');
}
function atras(forzar) {
  if (pila.length <= 1) return;
  var actual = pila[pila.length - 1];
  if (!forzar && !confirmarAbandono(actual)) return;
  pila.pop(); pintar();
}
function alInicio(forzar) {
  var actual = pila[pila.length - 1];
  if (!forzar && !confirmarAbandono(actual)) return;
  pila = [pila[0]]; pintar();
}
function pintar() {
  var v = pila[pila.length - 1];
  teclado = null;
  ponerLinea(null);
  pieOculto();
  app.innerHTML = '';
  $('#titulo-pantalla').textContent = v.titulo;
  $('#btn-atras').classList.toggle('oculto', pila.length <= 1);
  $('#btn-buscar').classList.toggle('oculto', esSesionActiva(v));
  avisoPestana(app);
  v.fn(app, v.args || {});
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}
function pie(nodos) {
  var p = $('#pie'), c = $('#pie-contenido');
  c.innerHTML = '';
  (nodos || []).forEach(function (n) { c.appendChild(n); });
  p.classList.remove('oculto');
  document.querySelector('.wrap').style.paddingBottom = '110px';
}
function pieOculto() {
  $('#pie').classList.add('oculto');
  document.querySelector('.wrap').style.paddingBottom = '96px';
}

/* ===================== teclado ===================== */
var teclado = null;
document.addEventListener('keydown', function (ev) {
  var activo = ev.target && ev.target.nodeType === 1 ? ev.target : document.activeElement;
  if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
  var editable = activo && activo.closest ? activo.closest('input,textarea,select,[contenteditable="true"]') : null;
  if (ev.key === 'Escape' && !editable && pila.length > 1) {
    atras(); ev.preventDefault(); return;
  }
  var interactivo = activo && activo.closest ? activo.closest('input,textarea,select,button,a,summary,[contenteditable="true"]') : null;
  if (interactivo) {
    // Garantiza la activación en navegadores/teclados que no sintetizan el clic
    // nativo y evita que el atajo global de «seguir» secuestre la tecla.
    if (interactivo.tagName === 'BUTTON' && (ev.key === 'Enter' || ev.key === ' ')) {
      ev.preventDefault(); interactivo.click();
    }
    return;
  }
  var k = ev.key;
  if (!teclado) return;
  if (k >= '1' && k <= '9' && teclado.opcion) {
    if (teclado.opcion(parseInt(k, 10) - 1) !== false) ev.preventDefault();
  } else if ((k === 'Enter' || k === ' ') && teclado.seguir) {
    if (teclado.seguir() !== false) ev.preventDefault();
  }
});

/* ===================== pantalla: inicio ===================== */
function pInicio(c) {
  var datosCola = datosColaDeHoy();
  var cola = datosCola.lista;
  var r = E.racha;

  var hero = el('section', { class: 'hero' });
  hero.appendChild(el('div', { class: 'rotulo', text: 'Siguiente estación' }));
  hero.appendChild(el('h2', { class: 'saludo', text: cola.length ? 'Repaso de hoy' : 'Repaso completado' }));
  hero.appendChild(el('p', { class: 'entradilla', text: cola.length
    ? saludo() + '. Tienes una ruta breve para mantener fresco lo que empieza a olvidarse.'
    : saludo() + '. Hoy no quedan preguntas pendientes; puedes avanzar por otra línea de estudio.' }));

  var textoCola = cola.length
    ? plural(cola.length, 'pregunta preparada', 'preguntas preparadas') +
      (datosCola.total > cola.length ? ' · ' + datosCola.total + ' pendientes en total' : '')
    : 'Todo el repaso previsto está al día';
  var cifraRuta = el('span', { class: 'ruta-cifra', 'aria-label': cola.length ? plural(cola.length, 'pregunta', 'preguntas') : 'Repaso completado' },
    cola.length ? [String(cola.length)] : [icono('check')]);
  var ruta = el('div', { class: 'ruta-card' }, [
    el('div', { class: 'ruta-cab' }, [el('b', { text: textoCola }), cifraRuta]),
    el('div', { class: 'ruta-estaciones', 'aria-hidden': 'true' }, [
      el('span', { class: 'ruta-estacion actual' }, [el('i'), document.createTextNode('Repaso')]),
      el('span', { class: 'ruta-estacion' }, [el('i'), document.createTextNode('Temario')]),
      el('span', { class: 'ruta-estacion' }, [el('i'), document.createTextNode('Test')]),
      el('span', { class: 'ruta-estacion' }, [el('i'), document.createTextNode('Simulacro')])
    ])
  ]);
  hero.appendChild(ruta);
  hero.appendChild(el('button', { class: 'btn primario', onclick: function () {
    if (cola.length) ir(pRepaso, 'Repaso de hoy'); else ir(pTestConfig, 'Hacer un test');
  } }, [icono(cola.length ? 'play' : 'list-checks'), cola.length ? 'Comenzar la ruta' : 'Hacer un test']));
  hero.appendChild(el('div', { class: 'rachah', text: r.dias > 0
    ? 'Racha: ' + plural(r.dias, 'día seguido', 'días seguidos') + ' · récord: ' + plural(r.mejor, 'día', 'días')
    : 'Responde algo hoy y empiezas racha.' }));
  c.appendChild(hero);

  c.appendChild(el('div', { class: 'cab-seccion' }, [
    el('h2', { text: 'Otras líneas' }),
    el('span', { text: plural(PREGUNTAS.length, 'pregunta', 'preguntas') })
  ]));
  var menu = el('div', { class: 'menu' });
  function boton(nombreIcono, tit, sub, fn, tituloPantalla) {
    menu.appendChild(el('button', { class: 'btn', onclick: function () { ir(fn, tituloPantalla); } }, [
      el('span', { class: 'icono-menu' }, [icono(nombreIcono)]),
      el('span', { class: 'txt' }, [el('b', { text: tit }), el('span', { text: sub })])
    ]));
  }
  boton('book', 'Temario', 'Estudia por partes y epígrafes', pPartes, 'Estudiar tema');
  boton('list-checks', 'Test rápido', 'Configura una tanda a tu medida', pTestConfig, 'Hacer un test');
  boton('timer', 'Simulacro', EXAMEN.preguntas_simulacro + ' preguntas y ' + EXAMEN.minutos_simulacro + ' minutos orientativos', pSimulacroIntro, 'Simulacro de examen');
  boton('shapes', 'Psicotécnicos', 'Series, vocabulario y razonamiento espacial', pPsicoMenu, 'Psicotécnicos');

  c.appendChild(menu);

  if (!EXAMEN.formato_confirmado) {
    c.appendChild(el('div', { class: 'aviso compacto', role: 'note' }, [
      icono('info'),
      el('span', { text: 'Las bases de 2026 no fijan el formato. El simulacro usa ' +
        EXAMEN.preguntas_simulacro + ' preguntas y ' + EXAMEN.minutos_simulacro +
        ' minutos como estimación basada en convocatorias anteriores.' })
    ]));
  }

  var extra = el('nav', { class: 'extra-nav', 'aria-label': 'Más opciones' });
  function fila(nombreIcono, tit, fn, tp) {
    extra.appendChild(el('button', { class: 'btn', onclick: function () { ir(fn, tp); } }, [icono(nombreIcono), tit]));
  }
  fila('chart', 'Mi progreso', pProgreso, 'Mi progreso');
  fila('backup', 'Copia de seguridad', pCopia, 'Copia de seguridad');
  fila('info', 'Fuentes y límites', pSobre, 'Sobre este contenido');
  c.appendChild(extra);
}

/* ===================== pantalla: partes y epígrafes ===================== */
function pPartes(c) {
  c.appendChild(el('p', { class: 'fuente', text:
    'El temario oficial tiene ' + PARTES.length + (PARTES.length === 1 ? ' parte.' : ' partes.') +
    ' Toca una para ver sus temas.' }));
  var lista = el('div', { class: 'lista' });
  PARTES.forEach(function (pa) {
    var ids = pa.epigrafes.map(function (e) { return e.id; });
    var nPreg = PREGUNTAS.filter(function (q) { return ids.indexOf(q.epigrafe) >= 0; }).length;
    var d = dominioParte(pa);
    lista.appendChild(el('button', { class: 'item', onclick: function () { ir(pEpigrafes, 'Parte ' + pa.parte, { parte: pa }); } }, [
      roundel(pa),
      el('span', { class: 'cuerpo' }, [
        el('b', { text: pa.titulo }),
        el('small', { text: plural(pa.epigrafes.length, 'tema', 'temas') + ' · ' + plural(nPreg, 'pregunta', 'preguntas') +
                            (d.total ? ' · ' + d.pct + '% dominado' : '') }),
        d.total ? barraProgreso(d.pct, 'Dominio de la parte ' + pa.parte, 'margin-top:8px;height:6px', colorParte(pa)) : null
      ]),
      el('span', { class: 'flecha', text: '›' })
    ]));
  });
  c.appendChild(lista);
}

function pEpigrafes(c, a) {
  var pa = a.parte;
  ponerLinea(colorParte(pa));
  c.appendChild(el('div', { style: 'display:flex;gap:14px;align-items:center;margin-bottom:6px' }, [
    roundel(pa),
    el('div', {}, [
      el('div', { class: 'rotulo', text: 'Parte ' + pa.parte + ' del temario' }),
      el('h2', { style: 'margin:2px 0 0', text: pa.titulo })
    ])
  ]));
  if (pa.manual) c.appendChild(el('p', { class: 'fuente', style: 'margin-bottom:18px', text: 'Fuente: ' + pa.manual }));

  /* Los temas se recorren como las estaciones de una línea. */
  var diagrama = el('div', { class: 'diagrama' });
  pa.epigrafes.forEach(function (ep) {
    var nPreg = PREGUNTAS.filter(function (q) { return q.epigrafe === ep.id; }).length;
    var leido = !!E.vistos[ep.id];
    diagrama.appendChild(el('button', {
      class: 'estacion' + (leido ? ' hecha' : ''),
      onclick: function () { ir(pTema, 'Tema ' + ep.id, { ep: ep }); }
    }, [
      el('span', { class: 'raiz' }, [el('span', { class: 'parada' })]),
      el('span', { class: 'caja' }, [
        el('span', { class: 'cuerpo' }, [
          el('b', { text: ep.titulo }),
          el('small', { text: ep.id + ' · ' + plural(nPreg, 'pregunta', 'preguntas') +
            ' · ' + plural((ep.fichas || []).length, 'ficha', 'fichas') + (leido ? ' · leído' : '') })
        ]),
        el('span', { class: 'flecha', text: '›' })
      ])
    ]));
  });
  c.appendChild(diagrama);

  var ids = pa.epigrafes.map(function (e) { return e.id; });
  var preg = PREGUNTAS.filter(function (q) { return ids.indexOf(q.epigrafe) >= 0; });
  if (preg.length) {
    c.appendChild(el('button', { class: 'btn primario',
      style: 'margin-top:18px;background:' + colorParte(pa) + ';color:' + tintaParte(pa),
      onclick: function () { lanzarTest(baraja(preg), 'Parte ' + pa.parte); } },
      ['Test de toda la parte ' + pa.parte]));
  }
}

function pTema(c, a) {
  var ep = a.ep;
  if (!soloLectura) { E.vistos[ep.id] = true; tocarRacha(); E.revision++; guardar(); }

  var paTema = PARTE_DE_EP[ep.id];
  ponerLinea(colorParte(paTema));
  if (paTema) {
    c.appendChild(el('div', { style: 'display:flex;gap:12px;align-items:center;margin-bottom:10px' }, [
      roundel(paTema, true),
      el('div', { class: 'rotulo', text: 'Tema ' + ep.id + ' · ' + paTema.titulo })
    ]));
  }
  c.appendChild(el('h2', { text: ep.titulo }));
  c.appendChild(el('div', { class: 'card rail' }, [el('div', { class: 'md', html: md(ep.resumen_md) })]));
  if (ep.nota_normativa) c.appendChild(el('div', { class: 'aviso', role: 'note' }, [
    el('b', { text: 'Manual y norma vigente no usan el mismo límite. ' }),
    document.createTextNode(ep.nota_normativa)
  ]));

  (ep.figuras || []).forEach(function (nombre) {
    if (!FIGURAS[nombre]) return;
    c.appendChild(el('div', { class: 'card figura' }, [el('div', { html: FIGURAS[nombre]() })]));
  });

  if (ep.fuentes && ep.fuentes.length) {
    c.appendChild(el('p', { class: 'fuente', html: 'Fuente: ' + ep.fuentes.map(function (u) {
      return '<a href="' + esc(u) + '" target="_blank" rel="noopener">abrir el temario oficial</a>';
    }).join(' · ') }));
  }

  var preg = PREGUNTAS.filter(function (q) { return q.epigrafe === ep.id; });
  var acciones = el('div', { class: 'fila', style: 'margin-top:18px' });
  if (preg.length) {
    acciones.appendChild(el('button', { class: 'btn primario', onclick: function () {
      lanzarTest(baraja(preg), 'Tema ' + ep.id); } }, ['Ponte a prueba con este tema']));
  }
  if ((ep.fichas || []).length) {
    acciones.appendChild(el('button', { class: 'btn', onclick: function () {
      ir(pFichas, 'Fichas ' + ep.id, { ep: ep }); } }, ['Fichas (' + ep.fichas.length + ')']));
  }
  c.appendChild(acciones);
}

/* ===================== motor de preguntas ===================== */
function lanzarTest(preguntas, etiqueta) {
  ir(pSesion, etiqueta || 'Test', {
    preguntas: preguntas, inmediato: true, modo: 'test', etiqueta: etiqueta || 'Test'
  });
}

function preguntaParaSesion(p) {
  var opciones = baraja(p.opciones.map(function (texto, idx) {
    return { texto: texto, correcta: idx === p.correcta };
  }));
  var copia = {};
  Object.keys(p).forEach(function (k) { copia[k] = p[k]; });
  copia.opciones = opciones.map(function (o) { return o.texto; });
  copia.correcta = opciones.findIndex(function (o) { return o.correcta; });
  return copia;
}
function crearSesionPreguntas(cfg) {
  var h = hoyStr(), revisables = {};
  if (cfg.modo === 'repaso') cfg.preguntas.forEach(function (p) {
    var t = E.srs[p.id];
    revisables[p.id] = !t || t.due <= h;
  });
  return {
    lista: cfg.preguntas.map(preguntaParaSesion), i: 0,
    respuestas: new Array(cfg.preguntas.length).fill(null), reintentos: [],
    inicio: Date.now(), deadline: cfg.minutos ? Date.now() + cfg.minutos * 60000 : null,
    modo: cfg.modo, revisables: revisables, terminada: false
  };
}

function pSesion(c, cfg) {
  var s = cfg.sesion || crearSesionPreguntas(cfg);
  cfg.sesion = s;
  var lista = s.lista;
  var tempo = null;

  var cabecera = el('div', { class: 'contador' });
  var barra = barraProgreso(0, 'Progreso de la sesión');
  var mapa = cfg.inmediato ? null : el('details', { class: 'mapa-preguntas' });
  var zona = el('div');
  c.appendChild(cabecera); c.appendChild(barra);
  if (mapa) c.appendChild(mapa);
  c.appendChild(zona);

  if (s.deadline) {
    tempo = setInterval(function () {
      if (!document.body.contains(zona)) { clearInterval(tempo); return; }
      var queda = Math.ceil((s.deadline - Date.now()) / 1000);
      var cr = $('#crono');
      if (cr) {
        cr.textContent = 'Tiempo ' + mmss(Math.max(0, queda));
        cr.classList.toggle('rojo', queda <= 300);
      }
      if (queda <= 0) { clearInterval(tempo); terminar(true); }
    }, 1000);
  }

  function actual() { return lista[s.i]; }

  function actualizarMapa() {
    if (!mapa) return;
    mapa.innerHTML = '';
    var respondidas = s.respuestas.filter(function (r) { return r !== null; }).length;
    mapa.appendChild(el('summary', { text: respondidas + ' de ' + lista.length + ' respondidas · ir a una pregunta' }));
    var rejilla = el('div', { class: 'rejilla-preguntas' });
    lista.forEach(function (p, idx) {
      rejilla.appendChild(el('button', {
        class: 'salto-pregunta' + (s.respuestas[idx] !== null ? ' respondida' : '') + (idx === s.i ? ' actual' : ''),
        'aria-label': 'Pregunta ' + (idx + 1) + (s.respuestas[idx] !== null ? ', respondida' : ', sin responder'),
        'aria-current': idx === s.i ? 'step' : null,
        onclick: function () { s.i = idx; dibujar(); }
      }, [String(idx + 1)]));
    });
    mapa.appendChild(rejilla);
  }

  function dibujar() {
    var p = actual();
    zona.innerHTML = '';
    cabecera.innerHTML = '';
    cabecera.appendChild(el('span', { text: 'Pregunta ' + (s.i + 1) + ' de ' + lista.length }));
    cabecera.appendChild(s.deadline
      ? el('span', { class: 'crono', id: 'crono', text: 'Tiempo ' + mmss(Math.max(0, Math.ceil((s.deadline - Date.now()) / 1000))) })
      : el('span', { text: cfg.etiqueta || '' }));
    var pct = (s.i / lista.length) * 100;
    $('i', barra).style.width = pct.toFixed(1) + '%';
    barra.setAttribute('aria-valuenow', String(Math.round(pct)));
    actualizarMapa();

    var tarjetaP = el('div', { class: 'card' });
    if (p.volatil) {
      tarjetaP.appendChild(el('div', { class: 'chip-volatil',
        text: 'Dato sujeto a cambios · verificar en la web de Metro (dato de ' + (p.fecha_dato || '?') + ')' }));
    }
    tarjetaP.appendChild(el('div', { class: 'enunciado', text: p.enunciado }));

    var ops = el('div', { class: 'opciones' });
    var botones = [];
    p.opciones.forEach(function (texto, idx) {
      var b = el('button', { class: 'op', onclick: function () { elegir(idx); } }, [
        el('span', { class: 'tecla', text: String(idx + 1) }),
        el('span', { text: texto })
      ]);
      if (s.respuestas[s.i] === idx) b.classList.add('marcada');
      botones.push(b); ops.appendChild(b);
    });
    tarjetaP.appendChild(ops);
    zona.appendChild(tarjetaP);

    teclado = { opcion: function (n) { if (n < p.opciones.length) { elegir(n); return true; } return false; },
                seguir: function () { if (!cfg.inmediato && s.respuestas[s.i] !== null) { avanzar(); return true; } return false; } };

    if (!cfg.inmediato) {
      var nav = el('div', { class: 'fila', style: 'margin-top:6px' });
      if (s.i > 0) nav.appendChild(el('button', { class: 'btn sutil', onclick: function () { s.i--; dibujar(); } }, ['← Anterior']));
      nav.appendChild(el('button', { class: 'btn' + (s.respuestas[s.i] !== null ? ' primario' : ''), onclick: avanzar },
        [s.i === lista.length - 1 ? 'Terminar y corregir' : 'Siguiente →']));
      zona.appendChild(nav);
      pie([el('button', { class: 'btn sutil', onclick: confirmarSalida }, ['Abandonar el simulacro'])]);
    } else if (s.respuestas[s.i] !== null) {
      mostrarCorreccion(false);
    }

    function elegir(idx) {
      if (!puedeEditar()) return;
      if (cfg.inmediato) {
        if (s.respuestas[s.i] !== null) return;
        s.respuestas[s.i] = idx;
        var acerto = idx === p.correcta;
        if (!registrar(p.id, acerto, cfg.modo, !!s.revisables[p.id])) {
          s.respuestas[s.i] = null;
          return;
        }
        if (!acerto && s.reintentos.indexOf(p.id) < 0) s.reintentos.push(p.id);
        mostrarCorreccion(true);
      } else {
        s.respuestas[s.i] = idx;
        dibujar();
      }
    }

    function mostrarCorreccion(enfocar) {
      var idx = s.respuestas[s.i];
      var acerto = idx === p.correcta;
      botones.forEach(function (b, k) {
        b.disabled = true;
        b.classList.remove('marcada');
        if (k === p.correcta) b.classList.add('correcta');
        else if (k === idx) b.classList.add('fallada');
      });
      if (enfocar) botones[idx].classList.add(acerto ? 'anim-ok' : 'anim-err');
      var feedback = bloqueExplicacion(p, acerto);
      tarjetaP.appendChild(feedback);
      zona.appendChild(el('button', { class: 'btn primario', style: 'margin-top:16px', onclick: avanzar },
        [s.i === lista.length - 1 ? 'Ver el resultado' : 'Siguiente pregunta']));
      if (enfocar) feedback.focus({ preventScroll: true });
      teclado = { seguir: function () { avanzar(); return true; } };
    }
  }

  function avanzar() {
    if (s.i < lista.length - 1) { s.i++; dibujar(); }
    else intentarTerminar();
  }
  function intentarTerminar() {
    var sinResponder = s.respuestas.filter(function (r) { return r === null; }).length;
    if (sinResponder && !cfg.inmediato &&
        !confirm('Quedan ' + sinResponder + ' preguntas sin responder. ¿Quieres corregir ya?')) return;
    terminar(false);
  }
  function confirmarSalida() {
    if (confirmarAbandono(pila[pila.length - 1])) {
      s.terminada = true;
      if (tempo) clearInterval(tempo);
      atras(true);
    }
  }
  function terminar(porTiempo) {
    if (s.terminada) return;
    s.terminada = true;
    if (tempo) clearInterval(tempo);
    var segundos = Math.floor((Date.now() - s.inicio) / 1000);
    if (!cfg.inmediato) {
      lista.forEach(function (p, k) {
        if (s.respuestas[k] !== null) registrar(p.id, s.respuestas[k] === p.correcta, cfg.modo, false);
      });
    }
    var res = { lista: lista, respuestas: s.respuestas, segundos: segundos, porTiempo: porTiempo,
                modo: cfg.modo, etiqueta: cfg.etiqueta, reintentos: s.reintentos };
    if (cfg.modo === 'simulacro') guardarSimulacro(res);
    reemplazar(pResultado, 'Resultado', res);
  }

  dibujar();
}

function bloqueExplicacion(p, acerto) {
  var b = el('div', { class: 'feedback ' + (acerto ? 'bien' : 'mal'), role: 'status',
    'aria-live': 'polite', tabindex: '-1' });
  b.appendChild(el('div', { class: 'cab' }, [icono(acerto ? 'check' : 'x'), acerto ? 'Correcto' : 'Incorrecto']));
  if (!acerto) {
    b.appendChild(el('div', { class: 'exp', style: 'margin-bottom:8px',
      html: '<strong>La respuesta correcta es:</strong> ' + esc(p.opciones[p.correcta]) }));
  }
  b.appendChild(el('div', { class: 'exp', text: p.explicacion }));
  b.appendChild(el('div', { class: 'fuente fuente-enlace' }, [
    icono('file'),
    document.createTextNode((p.fuente_texto || 'Temario oficial') + ' — '),
    el('a', { href: p.fuente, target: '_blank', rel: 'noopener' }, ['Abrir la fuente'])
  ]));
  return b;
}

/* ===================== resultado ===================== */
function guardarSimulacro(res) {
  if (!puedeEditar()) return false;
  var ac = res.lista.filter(function (p, k) { return res.respuestas[k] === p.correcta; }).length;
  var porParte = {};
  res.lista.forEach(function (p, k) {
    var pa = PARTE_DE_EP[p.epigrafe];
    var clave = pa ? pa.parte : '?';
    if (!porParte[clave]) porParte[clave] = { ac: 0, total: 0 };
    porParte[clave].total++;
    if (res.respuestas[k] === p.correcta) porParte[clave].ac++;
  });
  E.simulacros.push({ fecha: hoyStr(), aciertos: ac, total: res.lista.length,
    nota: Math.round((ac / res.lista.length) * 1000) / 10, segundos: res.segundos, porParte: porParte });
  if (E.simulacros.length > 100) E.simulacros.shift();
  E.revision++; guardar();
  return true;
}

function pResultado(c, res) {
  var lista = res.lista, resp = res.respuestas;
  var aciertos = lista.filter(function (p, k) { return resp[k] === p.correcta; }).length;
  var pct = Math.round((aciertos / lista.length) * 1000) / 10;
  var esSimulacro = res.modo === 'simulacro';
  var umbral = EXAMEN.umbral_aprobado_porcentaje;
  var aprueba = pct >= umbral;

  if (res.porTiempo) c.appendChild(el('div', { class: 'aviso', text: 'Se acabó el tiempo. Se ha corregido lo respondido hasta ese momento.' }));

  var tarj = el('div', { class: 'card' });
  tarj.appendChild(el('div', { class: 'nota' }, [
    el('div', { class: 'valor ' + (aprueba ? 'bien' : 'mal'), text: esSimulacro ? String(pct) : aciertos + '/' + lista.length }),
    el('div', { class: 'sub', text: esSimulacro
      ? aciertos + ' de ' + lista.length + ' correctas · ' + mmss(res.segundos)
      : 'aciertos · ' + pct + '% · ' + mmss(res.segundos) }),
    esSimulacro ? el('div', { class: 'veredicto ' + (aprueba ? 'bien' : 'mal'),
      text: aprueba ? 'APTO — superas el ' + umbral + '%' : 'NO APTO — te falta llegar al ' + umbral + '%' }) : null,
    esSimulacro ? el('div', { class: 'sub', style: 'margin-top:10px', text: aprueba
      ? 'Bien' + coma() + '. Repite dentro de unos días para ver si aguanta.'
      : 'Tranquilo' + coma() + '. Abajo tienes cada fallo explicado; ahí está la nota que te falta.' }) : null
  ]));
  c.appendChild(tarj);

  if (esSimulacro && !EXAMEN.formato_confirmado) {
    c.appendChild(el('div', { class: 'aviso', html:
      'Recuerda: este umbral del ' + umbral + '% es una <b>estimación</b>. Las bases de 2026 puntúan conocimientos de 0 a 40 y exigen 20 para pasar; no publican cuántas preguntas son.' }));
  }

  /* desglose */
  var grupos = {};
  lista.forEach(function (p, k) {
    var pa = PARTE_DE_EP[p.epigrafe];
    var clave = pa ? 'Parte ' + pa.parte + ' — ' + pa.titulo : 'Sin clasificar';
    if (!grupos[clave]) grupos[clave] = { ac: 0, total: 0, color: colorParte(pa) };
    grupos[clave].total++;
    if (resp[k] === p.correcta) grupos[clave].ac++;
  });
  var claves = Object.keys(grupos);
  if (claves.length > 1) {
    var t = el('table', { class: 'tabla' });
    var cabecera = el('thead');
    cabecera.appendChild(el('tr', {}, [el('th', { text: 'Parte' }), el('th', { class: 'num', text: 'Aciertos' }), el('th', { class: 'num', text: '%' })]));
    t.appendChild(cabecera);
    var cuerpo = el('tbody');
    t.appendChild(cuerpo);
    claves.forEach(function (cl) {
      var g = grupos[cl];
      cuerpo.appendChild(el('tr', {}, [
        el('td', {}, [el('span', { class: 'punto', style: 'background:' + g.color }), document.createTextNode(cl)]),
        el('td', { class: 'num', text: g.ac + '/' + g.total }),
        el('td', { class: 'num', text: Math.round((g.ac / g.total) * 100) + '%' })
      ]));
    });
    c.appendChild(el('div', { class: 'card' }, [el('h2', { text: 'Por partes del temario' }), t]));
  }

  var falladas = lista.filter(function (p, k) { return resp[k] !== p.correcta; });
  var acciones = el('div', { class: 'fila' });
  if (falladas.length) {
    acciones.appendChild(el('button', { class: 'btn primario', onclick: function () {
      reemplazar(pSesion, 'Repasar los fallos', { preguntas: baraja(falladas), inmediato: true, modo: 'test', etiqueta: 'Repaso de fallos' });
    } }, ['Repasar los ' + falladas.length + ' fallos']));
  }
  acciones.appendChild(el('button', { class: 'btn', onclick: function () { alInicio(); } }, ['Volver al inicio']));
  c.appendChild(acciones);

  if (falladas.length) {
    c.appendChild(el('div', { class: 'seccion-tit', text: 'Lo que has fallado' }));
    lista.forEach(function (p, k) {
      if (resp[k] === p.correcta) return;
      var card = el('div', { class: 'card' });
      card.appendChild(el('div', { class: 'enunciado', style: 'font-size:1.05rem', text: p.enunciado }));
      card.appendChild(el('div', { class: 'exp', style: 'margin-bottom:6px',
        html: resp[k] === null ? '<em>Sin responder.</em>' : 'Marcaste: <em>' + esc(p.opciones[resp[k]]) + '</em>' }));
      card.appendChild(bloqueExplicacion(p, false));
      c.appendChild(card);
    });
  }
}

/* ===================== configurar un test ===================== */
function muestraEstratificada(preguntas, n) {
  var grupos = {};
  preguntas.forEach(function (p) {
    if (!grupos[p.epigrafe]) grupos[p.epigrafe] = [];
    grupos[p.epigrafe].push(p);
  });
  var colas = baraja(Object.keys(grupos)).map(function (id) { return baraja(grupos[id]); });
  var elegidas = [];
  while (elegidas.length < n && colas.length) {
    var siguientes = [];
    colas.forEach(function (cola) {
      if (elegidas.length < n && cola.length) elegidas.push(cola.shift());
      if (cola.length) siguientes.push(cola);
    });
    colas = baraja(siguientes);
  }
  return baraja(elegidas);
}

function pTestConfig(c) {
  var seleccion = 'todo';
  c.appendChild(el('h2', { text: '1. ¿De qué quieres el test?' }));
  var selector = el('div', { class: 'lista' });
  var opciones = [{ id: 'todo', tit: 'Mezclado de todo el temario', sub: PREGUNTAS.length + ' preguntas disponibles' }];
  PARTES.forEach(function (pa) {
    var ids = pa.epigrafes.map(function (e) { return e.id; });
    var n = PREGUNTAS.filter(function (q) { return ids.indexOf(q.epigrafe) >= 0; }).length;
    if (n) opciones.push({ id: 'parte:' + pa.parte, tit: 'Parte ' + pa.parte + ' — ' + pa.titulo, sub: plural(n, 'pregunta', 'preguntas') });
  });
  var botonesSel = [];
  opciones.forEach(function (o) {
    var b = el('button', { class: 'item', 'aria-pressed': o.id === seleccion ? 'true' : 'false', onclick: function () {
      seleccion = o.id;
      botonesSel.forEach(function (x) { x.style.borderColor = ''; x.style.background = ''; x.setAttribute('aria-pressed', 'false'); });
      b.style.borderColor = 'var(--accent)'; b.style.background = 'var(--accent-soft)';
      b.setAttribute('aria-pressed', 'true');
      refrescar();
    } }, [
      el('span', { class: 'cod' }, o.id === 'todo' ? [icono('star')] : [o.id.split(':')[1]]),
      el('span', { class: 'cuerpo' }, [el('b', { text: o.tit }), el('small', { text: o.sub })])
    ]);
    botonesSel.push(b); selector.appendChild(b);
  });
  botonesSel[0].style.borderColor = 'var(--accent)'; botonesSel[0].style.background = 'var(--accent-soft)';
  c.appendChild(selector);

  c.appendChild(el('h2', { text: '2. ¿Qué nivel?', style: 'margin-top:26px' }));
  c.appendChild(el('p', { class: 'fuente', style: 'margin-bottom:10px', text:
    'Definiciones: se responden entendiendo el concepto. Datos concretos: hay que recordar un nombre, ' +
    'un lugar o una competencia. Cifras y matices: llevan una cifra, un plazo o una medida, o hay que ' +
    'distinguir entre opciones casi iguales.' }));
  var nivel = 0;   // 0 = todos
  var zonaNivel = el('div', { class: 'fila' });
  var botonesNivel = [];
  [{ n: 0, t: 'Todos' }, { n: 1, t: 'Definiciones' }, { n: 2, t: 'Datos concretos' }, { n: 3, t: 'Cifras y matices' }]
    .forEach(function (o) {
      var b = el('button', { class: 'btn' + (o.n === 0 ? ' primario' : ''), 'aria-pressed': o.n === 0 ? 'true' : 'false', onclick: function () {
        nivel = o.n;
        botonesNivel.forEach(function (x) { x.classList.remove('primario'); x.setAttribute('aria-pressed', 'false'); });
        b.classList.add('primario');
        b.setAttribute('aria-pressed', 'true');
        refrescar();
      } }, [o.t]);
      botonesNivel.push(b); zonaNivel.appendChild(b);
    });
  c.appendChild(zonaNivel);

  c.appendChild(el('h2', { text: '3. ¿Cuántas preguntas?', style: 'margin-top:26px' }));
  var zonaN = el('div', { class: 'fila' });
  c.appendChild(zonaN);

  function disponibles() {
    var base;
    if (seleccion === 'todo') base = PREGUNTAS.slice();
    else {
      var pa = PARTES.filter(function (x) { return x.parte === seleccion.split(':')[1]; })[0];
      var ids = pa.epigrafes.map(function (e) { return e.id; });
      base = PREGUNTAS.filter(function (q) { return ids.indexOf(q.epigrafe) >= 0; });
    }
    return nivel ? base.filter(function (q) { return q.dificultad === nivel; }) : base;
  }
  var cantidad = 10;   // preferencia del usuario; se ajusta a lo disponible al arrancar

  function refrescar() {
    var disp = disponibles();
    zonaN.innerHTML = '';

    if (!disp.length) {
      zonaN.appendChild(el('p', { class: 'fuente', style: 'flex:1 1 100%',
        text: 'No hay preguntas de ese nivel en lo que has elegido. Prueba con otro nivel.' }));
      pintarPie(0);
      return;
    }

    var opciones = [10, 25, 50].filter(function (n, i) { return i === 0 || n <= disp.length; });
    if (disp.length > 50) opciones.push(disp.length);
    if (opciones.indexOf(cantidad) < 0) cantidad = opciones[0];

    opciones.forEach(function (n) {
      var real = Math.min(n, disp.length);
      var etiqueta = n === disp.length && n > 50 ? 'Todas (' + disp.length + ')'
                   : (real < n ? n + ' (hay ' + real + ')' : String(n));
      var b = el('button', { class: 'btn' + (n === cantidad ? ' primario' : ''),
        'aria-pressed': n === cantidad ? 'true' : 'false',
        onclick: function () { cantidad = n; refrescar(); } }, [etiqueta]);
      zonaN.appendChild(b);
    });
    pintarPie(Math.min(cantidad, disp.length));
  }

  function pintarPie(n) {
    if (!n) { pieOculto(); return; }
    pie([el('button', { class: 'btn primario', onclick: function () {
      lanzarTest(muestraEstratificada(disponibles(), n), 'Test de ' + n);
    } }, ['Empezar el test · ' + plural(n, 'pregunta', 'preguntas')])]);
  }

  refrescar();
}

/* ===================== simulacro ===================== */
function pSimulacroIntro(c) {
  var n = Math.min(EXAMEN.preguntas_simulacro, PREGUNTAS.length);
  c.appendChild(el('div', { class: 'card' }, [
    el('h2', { text: 'Simulacro de examen' }),
    el('p', { html: 'Vas a hacer <b>' + n + ' preguntas</b> en <b>' + EXAMEN.minutos_simulacro + ' minutos</b>, sin ver si aciertas hasta el final. Igual que el día del examen.' }),
    el('p', { class: 'fuente', text: 'Puedes volver atrás y cambiar respuestas mientras dure el tiempo.' })
  ]));

  if (PREGUNTAS.length < EXAMEN.preguntas_simulacro) {
    c.appendChild(el('div', { class: 'aviso', html:
      'Todavía no hay ' + EXAMEN.preguntas_simulacro + ' preguntas en la aplicación: el simulacro será de <b>' + n + '</b>.' }));
  }
  if (!EXAMEN.formato_confirmado) {
    c.appendChild(el('div', { class: 'aviso', html:
      'Las bases de la convocatoria de 2026 <b>no dicen</b> cuántas preguntas tiene el examen ni cuánto dura. Estas cifras son una estimación a partir de convocatorias anteriores.' }));
  }

  var hist = E.simulacros.slice(-3).reverse();
  if (hist.length) {
    c.appendChild(el('div', { class: 'seccion-tit', text: 'Tus últimos simulacros' }));
    var t = el('table', { class: 'tabla' });
    var cuerpoHist = el('tbody');
    t.appendChild(cuerpoHist);
    hist.forEach(function (s) {
      cuerpoHist.appendChild(el('tr', {}, [
        el('td', { text: s.fecha }),
        el('td', { class: 'num', text: s.aciertos + '/' + s.total }),
        el('td', { class: 'num', text: s.nota + '%' })
      ]));
    });
    c.appendChild(el('div', { class: 'card' }, [t]));
  }

  c.appendChild(el('button', { class: 'btn primario', style: 'margin-top:14px', onclick: function () {
    reemplazar(pSesion, 'Simulacro', { preguntas: muestraEstratificada(PREGUNTAS, n), inmediato: false,
      modo: 'simulacro', minutos: EXAMEN.minutos_simulacro, etiqueta: 'Simulacro' });
  } }, ['Empezar el simulacro']));
}

/* ===================== repaso inteligente ===================== */
function pRepaso(c) {
  var datosCola = datosColaDeHoy();
  var cola = datosCola.lista;
  if (!cola.length) {
    c.appendChild(el('div', { class: 'vacio', html:
      '<p style="font-size:2.5rem;margin:0 0 8px">✅</p><p><b>Nada pendiente por hoy' + esc(coma()) + '.</b></p>' +
      '<p>Vuelve mañana. Si quieres seguir, haz un test normal.</p>' }));
    c.appendChild(el('button', { class: 'btn', onclick: function () { reemplazar(pTestConfig, 'Hacer un test'); } }, ['Hacer un test']));
    return;
  }
  var nuevas = cola.filter(function (p) { return !E.srs[p.id]; }).length;
  c.appendChild(el('div', { class: 'card' }, [
    el('h2', { text: plural(cola.length, 'pregunta en este bloque', 'preguntas en este bloque') }),
    el('p', { html: (cola.length - nuevas) + ' de repaso y ' + nuevas + ' nuevas. ' +
      'Cuando aciertas, la pregunta tarda más en volver: 1, 3, 7, 16, 35 días… Cuando fallas, vuelve mañana.' }),
    datosCola.total > cola.length ? el('p', { class: 'fuente', text:
      'Hay ' + (datosCola.total - cola.length) + ' preguntas más pendientes. Aparecerán en el siguiente bloque para que la sesión no sea interminable.' }) : null
  ]));
  c.appendChild(el('button', { class: 'btn primario', onclick: function () {
    reemplazar(pSesion, 'Repaso de hoy', { preguntas: cola, inmediato: true, modo: 'repaso', etiqueta: 'Repaso' });
  } }, ['Empezar el repaso']));

  if (E.fallos.length) {
    c.appendChild(el('button', { class: 'btn', style: 'margin-top:10px', onclick: function () {
      var f = E.fallos.map(function (id) { return PREG_POR_ID[id]; }).filter(Boolean);
      reemplazar(pSesion, 'Mis fallos', { preguntas: baraja(f), inmediato: true, modo: 'test', etiqueta: 'Mis fallos' });
    } }, [E.fallos.length === 1 ? 'Solo mi pregunta fallada' : 'Solo mis ' + E.fallos.length + ' preguntas falladas']));
  }
}

/* ===================== fichas ===================== */
function pFichas(c, a) {
  var ep = a.ep;
  var h = hoyStr();
  var todas = (ep.fichas || []).map(function (f) {
    var clave = claveFicha(ep, f);
    var t = E.fichas[clave];
    return { f: f, clave: clave, revisable: !t || t.due <= h };
  });
  if (!a.sesion) a.sesion = { fichas: baraja(todas.filter(function (f) { return f.revisable; })), i: 0, girada: false };
  var sesion = a.sesion;

  var cont = el('div');
  c.appendChild(cont);

  function dibujar() {
    if (!sesion.fichas.length) {
      cont.innerHTML = '';
      cont.appendChild(el('div', { class: 'vacio', html: '<p style="font-size:2.5rem;margin:0 0 8px">✅</p><p><b>No hay fichas pendientes de este tema.</b></p><p>Volverán cuando toque repasarlas.</p>' }));
      cont.appendChild(el('button', { class: 'btn', onclick: function () {
        a.sesion = { fichas: baraja(todas.map(function (f) {
          return { f: f.f, clave: f.clave, revisable: false };
        })), i: 0, girada: false };
        sesion = a.sesion; dibujar();
      } }, ['Repasar todas de todos modos']));
      teclado = null;
      return;
    }
    if (sesion.i >= sesion.fichas.length) {
      cont.innerHTML = '';
      cont.appendChild(el('div', { class: 'vacio' }, [
        el('span', { class: 'fin-icono' }, [icono('check')]),
        el('p', { html: '<b>Fichas terminadas' + esc(coma()) + '.</b>' })
      ]));
      cont.appendChild(el('button', { class: 'btn primario', onclick: function () {
        sesion.i = 0; sesion.girada = false;
        sesion.fichas = baraja(sesion.fichas.map(function (f) {
          return { f: f.f, clave: f.clave, revisable: false };
        }));
        dibujar();
      } }, ['Otra vuelta sin alterar el calendario']));
      cont.appendChild(el('button', { class: 'btn sutil', style: 'margin-top:10px', onclick: function () { atras(); } }, ['Volver al tema']));
      teclado = null;
      return;
    }
    var item = sesion.fichas[sesion.i];
    cont.innerHTML = '';
    cont.appendChild(el('div', { class: 'contador' }, [el('span', { text: 'Ficha ' + (sesion.i + 1) + ' de ' + sesion.fichas.length }), el('span', { text: ep.id })]));

    var caja = el('button', { type: 'button', class: 'ficha' + (sesion.girada ? ' girada' : ''), onclick: girar,
      'aria-pressed': sesion.girada ? 'true' : 'false', text: sesion.girada ? item.f.reverso : item.f.anverso });
    cont.appendChild(caja);
    cont.appendChild(el('div', { class: 'ficha-pista', text: sesion.girada ? '¿La sabías?' : 'Toca la ficha (o pulsa Intro) para ver la respuesta' }));

    if (sesion.girada) {
      var fila = el('div', { class: 'fila' });
      fila.appendChild(el('button', { class: 'btn', onclick: function () { responder(false); } }, [icono('x'), 'No la sabía']));
      fila.appendChild(el('button', { class: 'btn primario', onclick: function () { responder(true); } }, [icono('check'), 'La sabía']));
      cont.appendChild(fila);
      teclado = { seguir: function () { responder(true); return true; },
                  opcion: function (n) { if (n === 0) { responder(false); return true; } if (n === 1) { responder(true); return true; } return false; } };
    } else {
      teclado = { seguir: function () { girar(); return true; } };
    }
  }
  function girar() { sesion.girada = !sesion.girada; dibujar(); }
  function responder(sabia) {
    if (!puedeEditar()) return;
    var t = E.fichas[item_clave()] || { n: 0, due: hoyStr() };
    var item = sesion.fichas[sesion.i];
    if (item.revisable && t.lastReviewed !== h) {
      if (sabia) { t.n = Math.min(INTERVALOS.length, t.n + 1); t.due = sumarDias(h, INTERVALOS[Math.min(t.n - 1, INTERVALOS.length - 1)]); }
      else { t.n = 0; t.due = sumarDias(h, 1); }
      t.lastReviewed = h;
      E.fichas[item_clave()] = t;
    }
    tocarRacha(); E.revision++; guardar();
    sesion.i++; sesion.girada = false; dibujar();
  }
  function item_clave() { return sesion.fichas[sesion.i].clave; }
  dibujar();
}

/* ===================== progreso ===================== */
function dominioParte(pa) {
  var ids = pa.epigrafes.map(function (e) { return e.id; });
  var preg = PREGUNTAS.filter(function (q) { return ids.indexOf(q.epigrafe) >= 0; });
  if (!preg.length) return { pct: 0, dominadas: 0, total: 0 };
  var dom = preg.filter(function (p) { var t = E.srs[p.id]; return t && t.n >= 2; }).length;
  return { pct: Math.round((dom / preg.length) * 100), dominadas: dom, total: preg.length };
}

function pProgreso(c) {
  var r = E.racha;
  c.appendChild(el('div', { class: 'card' }, [
    el('h2', { text: 'Constancia' }),
    el('p', {}, [el('b', { text: plural(r.dias, 'día seguido', 'días seguidos') }),
      document.createTextNode(' estudiando · récord: ' + plural(r.mejor, 'día', 'días'))]),
    el('p', { class: 'fuente', text: 'Cuenta un día cada vez que respondes algo o lees un tema.' })
  ]));

  c.appendChild(el('div', { class: 'seccion-tit', text: 'Dominio por parte del temario' }));
  var card = el('div', { class: 'card' });
  PARTES.forEach(function (pa) {
    var d = dominioParte(pa);
    card.appendChild(el('div', { style: 'display:flex;gap:13px;align-items:flex-start;margin-bottom:17px' }, [
      roundel(pa, true),
      el('div', { style: 'flex:1;min-width:0' }, [
        el('div', { style: 'display:flex;justify-content:space-between;gap:12px;font-size:.94rem;margin-bottom:6px' }, [
          el('span', { text: pa.titulo }),
          el('b', { text: d.pct + '%' })
        ]),
        barraProgreso(d.pct, 'Dominio de la parte ' + pa.parte, '', colorParte(pa)),
        el('small', { class: 'fuente', text: d.dominadas + ' de ' + d.total + ' preguntas dominadas' })
      ])
    ]));
  });
  card.appendChild(el('p', { class: 'fuente', style: 'margin:0',
    text: 'Se considera «dominada» una pregunta que has acertado dos veces seguidas en el repaso espaciado.' }));
  c.appendChild(card);

  c.appendChild(el('div', { class: 'seccion-tit', text: 'Evolución de los simulacros' }));
  if (E.simulacros.length < 1) {
    c.appendChild(el('div', { class: 'card plano' }, [el('p', { class: 'fuente', style: 'margin:0', text: 'Todavía no has hecho ningún simulacro.' })]));
  } else {
    c.appendChild(el('div', { class: 'card' }, [grafica(E.simulacros)]));
  }

  var datosPend = datosColaDeHoy();
  c.appendChild(el('div', { class: 'card plano' }, [
    el('p', { style: 'margin:0', html: 'Preguntas en el sistema: <b>' + PREGUNTAS.length + '</b> · vistas al menos una vez: <b>' +
      Object.keys(E.practica).length + '</b> · pendientes hoy: <b>' + datosPend.total + '</b> · marcadas como falladas: <b>' + E.fallos.length + '</b>' })
  ]));
}

function grafica(sims) {
  var W = 640, H = 220, ml = 40, mr = 12, mt = 14, mb = 30;
  var datos = sims.slice(-20);
  var ancho = W - ml - mr, alto = H - mt - mb;
  var umbral = EXAMEN.umbral_aprobado_porcentaje;
  function x(i) { return ml + (datos.length === 1 ? ancho / 2 : (i / (datos.length - 1)) * ancho); }
  function y(v) { return mt + alto - (v / 100) * alto; }

  var partes = [];
  partes.push('<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="none"/>');
  [0, 25, 50, 75, 100].forEach(function (v) {
    partes.push('<line x1="' + ml + '" y1="' + y(v) + '" x2="' + (W - mr) + '" y2="' + y(v) +
      '" stroke="var(--border)" stroke-width="1"/>');
    partes.push('<text x="' + (ml - 8) + '" y="' + (y(v) + 4) + '" text-anchor="end" font-size="12" fill="var(--muted)">' + v + '</text>');
  });
  partes.push('<line x1="' + ml + '" y1="' + y(umbral) + '" x2="' + (W - mr) + '" y2="' + y(umbral) +
    '" stroke="var(--ok)" stroke-width="2" stroke-dasharray="6 4"/>');
  partes.push('<text x="' + (W - mr) + '" y="' + (y(umbral) - 6) + '" text-anchor="end" font-size="12" fill="var(--ok)">aprobado estimado</text>');

  if (datos.length > 1) {
    partes.push('<polyline fill="none" stroke="var(--accent)" stroke-width="3" stroke-linejoin="round" points="' +
      datos.map(function (s, i) { return x(i) + ',' + y(s.nota); }).join(' ') + '"/>');
  }
  datos.forEach(function (s, i) {
    partes.push('<circle cx="' + x(i) + '" cy="' + y(s.nota) + '" r="5" fill="var(--accent)"><title>' +
      esc(s.fecha + ': ' + s.nota + '%') + '</title></circle>');
  });
  partes.push('<text x="' + ml + '" y="' + (H - 8) + '" font-size="12" fill="var(--muted)">' + esc(datos[0].fecha) + '</text>');
  if (datos.length > 1) {
    partes.push('<text x="' + (W - mr) + '" y="' + (H - 8) + '" text-anchor="end" font-size="12" fill="var(--muted)">' +
      esc(datos[datos.length - 1].fecha) + '</text>');
  }
  var svg = el('div', { class: 'grafica', html:
    '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Evolución de las notas de los simulacros">' +
    partes.join('') + '</svg>' });
  return svg;
}

/* ===================== copia de seguridad ===================== */
function pCopia(c) {
  c.appendChild(el('div', { class: 'card' }, [
    el('h2', { text: 'Guardar tu progreso en un archivo' }),
    el('p', { text: 'Se descarga un archivo pequeño con todo lo que llevas estudiado. Guárdalo donde quieras. Te sirve por si cambias de ordenador o de móvil, o por si borras el historial del navegador.' }),
    el('button', { class: 'btn primario', onclick: descargarCopia }, [icono('backup'), 'Guardar mi progreso'])
  ]));

  var entrada = el('input', { type: 'file', accept: '.json,application/json', class: 'oculto',
    onchange: function (ev) { restaurarCopia(ev.target.files[0]); } });
  c.appendChild(el('div', { class: 'card' }, [
    el('h2', { text: 'Recuperar un progreso guardado' }),
    el('p', { text: 'Busca el archivo que guardaste antes. Cuidado: sustituye por completo lo que tengas ahora en este aparato.' }),
    el('button', { class: 'btn', onclick: function () { entrada.click(); } }, [icono('file'), 'Recuperar desde un archivo']),
    entrada
  ]));

  c.appendChild(el('div', { class: 'aviso', html:
    '<b>Importante:</b> cada dispositivo y cada dirección web guardan un progreso independiente. ' +
    'Usa normalmente <b>oposicion-metro.pages.dev</b>. Si cambias de aparato o abres la copia de GitHub, guarda el archivo aquí y recupéralo allí.' }));

  var anterior = null;
  try { anterior = localStorage.getItem(CLAVE_ANTES_RESTAURAR); } catch (err) {}
  if (anterior) c.appendChild(el('div', { class: 'card' }, [
    el('h2', { text: 'Deshacer la última recuperación' }),
    el('p', { text: 'La aplicación conserva automáticamente el progreso que había justo antes de recuperar un archivo.' }),
    el('button', { class: 'btn', onclick: function () {
      if (!puedeEditar() || !confirm('¿Recuperar el progreso anterior a la última restauración?')) return;
      try {
        var previo = normalizarEstado(JSON.parse(localStorage.getItem(CLAVE_ANTES_RESTAURAR)), false);
        var actual = JSON.stringify(E);
        E = previo; E.revision++;
        if (!guardarYa()) throw new Error('guardado');
        localStorage.setItem(CLAVE_ANTES_RESTAURAR, actual);
        alert('Listo. Se ha recuperado el progreso anterior.');
        alInicio(true);
      } catch (err) { alert('No se ha podido recuperar el progreso anterior.'); }
    } }, ['↶ Deshacer la última recuperación'])
  ]));

  c.appendChild(el('div', { class: 'card' }, [
    el('h2', { text: 'Empezar de cero' }),
    el('p', { class: 'fuente', text: 'Borra todo tu progreso en este aparato. No se puede deshacer.' }),
    el('button', { class: 'btn peligro', onclick: function () {
      if (puedeEditar() && confirm('¿Seguro? Se borrará todo tu progreso en este aparato.') &&
          confirm('Última confirmación: esto no se puede deshacer.')) {
        E = estadoInicial(); E.revision++; guardarYa(); alInicio(true);
      }
    } }, ['Borrar todo mi progreso'])
  ]));
}

function descargarCopia() {
  guardarYa();
  var datos = JSON.stringify({ app: 'oposicion-metro', v: VERSION_ESTADO, exportado: new Date().toISOString(), estado: E }, null, 2);
  var blob = new Blob([datos], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = el('a', { href: url, download: 'progreso-oposicion-metro-' + hoyStr() + '.json' });
  document.body.appendChild(a); a.click();
  setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 1500);
}

function restaurarCopia(archivo) {
  if (!archivo) return;
  if (archivo.size > 5 * 1024 * 1024) {
    alert('Ese archivo es demasiado grande para ser una copia de progreso válida.');
    return;
  }
  var lector = new FileReader();
  lector.onload = function () {
    try {
      var obj = JSON.parse(lector.result);
      if (!puedeEditar()) return;
      if (obj && obj.estado) {
        if (obj.app !== 'oposicion-metro') throw new Error('aplicacion');
        if (!Number.isInteger(obj.v) || obj.v < 1 || obj.v > VERSION_ESTADO) throw new Error('version');
      }
      var nuevo = normalizarEstado(obj && obj.estado ? obj.estado : obj, true);
      if (!confirm('Se va a sustituir tu progreso actual por el del archivo. ¿Continuar?')) return;
      var anterior = JSON.stringify(E);
      try { localStorage.setItem(CLAVE_ANTES_RESTAURAR, anterior); } catch (err) {}
      E = nuevo; E.revision++;
      if (!guardarYa()) { E = normalizarEstado(JSON.parse(anterior), false); guardarYa(); throw new Error('guardado'); }
      var comprobado = normalizarEstado(JSON.parse(localStorage.getItem(CLAVE)), true);
      if (JSON.stringify(comprobado) !== JSON.stringify(E)) {
        E = normalizarEstado(JSON.parse(anterior), false); guardarYa(); throw new Error('verificacion');
      }
      alert('Listo. Tu progreso se ha recuperado.');
      alInicio(true);
    } catch (err) {
      alert('Ese archivo no vale. Tiene que ser el que descargaste con el botón «Guardar mi progreso».');
    }
  };
  lector.onerror = function () { alert('No se ha podido leer el archivo.'); };
  lector.readAsText(archivo);
}

/* ===================== buscador ===================== */
function pBuscador(c) {
  var caja = el('input', { class: 'buscador', type: 'search', placeholder: 'Buscar en temas y preguntas…',
    autocomplete: 'off', oninput: function () { render(caja.value); } });
  c.appendChild(caja);
  var res = el('div');
  c.appendChild(res);

  function render(q) {
    res.innerHTML = '';
    var t = normaliza(q).trim();
    if (t.length < 2) {
      res.appendChild(el('div', { class: 'vacio', text: 'Escribe al menos dos letras.' }));
      return;
    }
    var todosTemas = EPIGRAFES.filter(function (ep) {
      return normaliza(ep.titulo + ' ' + ep.resumen_md).indexOf(t) >= 0;
    });
    var todasPregs = PREGUNTAS.filter(function (p) {
      return normaliza(p.enunciado + ' ' + p.opciones.join(' ') + ' ' + p.explicacion).indexOf(t) >= 0;
    });
    var temas = todosTemas.slice(0, 12);
    var pregs = todasPregs.slice(0, 25);

    if (!temas.length && !pregs.length) {
      res.appendChild(el('div', { class: 'vacio', text: 'Nada encontrado.' }));
      return;
    }
    if (temas.length) {
      res.appendChild(el('div', { class: 'seccion-tit', text:
        (temas.length === todosTemas.length ? plural(temas.length, 'tema', 'temas') : temas.length + ' de ' + todosTemas.length + ' temas') }));
      var l1 = el('div', { class: 'lista' });
      temas.forEach(function (ep) {
        l1.appendChild(el('button', { class: 'item', onclick: function () { ir(pTema, 'Tema ' + ep.id, { ep: ep }); } }, [
          el('span', { class: 'cod', text: ep.id }),
          el('span', { class: 'cuerpo' }, [el('b', { text: ep.titulo })]),
          el('span', { class: 'flecha', text: '›' })
        ]));
      });
      res.appendChild(l1);
    }
    if (pregs.length) {
      res.appendChild(el('div', { class: 'seccion-tit', text:
        (pregs.length === todasPregs.length ? plural(pregs.length, 'pregunta', 'preguntas') : pregs.length + ' de ' + todasPregs.length + ' preguntas') }));
      res.appendChild(el('button', { class: 'btn primario', style: 'margin-bottom:10px', onclick: function () {
        lanzarTest(baraja(pregs), 'Búsqueda: ' + q); } }, ['Hacer un test con estas ' + pregs.length]));
      var l2 = el('div', { class: 'lista' });
      pregs.forEach(function (p) {
        l2.appendChild(el('button', { class: 'item', onclick: function () { lanzarTest([p], 'Pregunta suelta'); } }, [
          el('span', { class: 'cod', text: p.epigrafe }),
          el('span', { class: 'cuerpo' }, [el('b', { text: p.enunciado })]),
          el('span', { class: 'flecha', text: '›' })
        ]));
      });
      res.appendChild(l2);
    }
  }
  render('');
  setTimeout(function () { caja.focus(); }, 60);
}

/* ===================== sobre este contenido ===================== */
function pSobre(c) {
  c.appendChild(el('div', { class: 'aviso', html:
    '<b>Léelo antes de fiarte del todo de esta aplicación.</b>' }));
  c.appendChild(el('div', { class: 'card' }, [el('div', { class: 'md', html: md(
    'Esta aplicación es **material de apoyo**, preparada con ayuda de inteligencia artificial a partir de **fuentes públicas y oficiales**: las bases de la convocatoria publicadas por Metro de Madrid y los siete manuales del temario oficial que la propia empresa publica en su web.\n\n' +
    '**No sustituye** a las bases oficiales ni al temario oficial. Es un complemento para repasar y para coger ritmo, nada más.\n\n' +
    '**Contrasta siempre** con la convocatoria. Las bases y el temario están en la web de Metro de Madrid, y son el único documento que vale.\n\n' +
    '**Cada pregunta lleva su fuente.** Debajo de cada explicación verás el manual y la página de donde sale el dato, con un enlace para abrir el PDF oficial. Si algo no te cuadra, ve a la fuente.\n\n' +
    '**Datos que cambian.** Las preguntas marcadas con un aviso naranja contienen datos que Metro actualiza cada cierto tiempo (número de líneas, tarifas, cifras de red). Verifícalos en la web antes del examen.\n\n' +
    '**Identidad independiente.** La marca visual y el icono de esta herramienta son propios. El lenguaje de líneas y estaciones solo ayuda a organizar el estudio; esta aplicación no está hecha, revisada ni respaldada por Metro de Madrid.\n\n' +
    '**Lo que las bases de 2026 NO dicen.** No fijan cuántas preguntas tiene el examen ni cuánto dura. La prueba de conocimientos se puntúa de 0 a 40 y hay que sacar al menos 20 para pasar; es eliminatoria. El simulacro de esta aplicación usa una estimación basada en convocatorias anteriores.'
  ) })]));

  c.appendChild(el('div', { class: 'card' }, [
    el('h2', { text: 'Enlaces oficiales' }),
    el('div', { class: 'lista' }, [
      el('a', { class: 'item', href: 'https://www.metromadrid.es/es/oferta-empleo/maquinista-de-traccion-electrica-y-jefea-de-sector-0',
        target: '_blank', rel: 'noopener' }, [
        el('span', { class: 'cod' }, [icono('file')]),
        el('span', { class: 'cuerpo' }, [el('b', { text: 'Bases y temario oficial' }), el('small', { text: 'metromadrid.es — oferta de empleo' })])
      ]),
      el('a', { class: 'item', href: 'https://www.bocm.es/boletin/CM_Orden_BOCM/2026/08/07/BOCM-20260807-5.PDF',
        target: '_blank', rel: 'noopener' }, [
        el('span', { class: 'cod' }, [icono('scale')]),
        el('span', { class: 'cuerpo' }, [el('b', { text: 'Anuncio en el BOCM' }), el('small', { text: '7 de agosto de 2026 · 30 plazas totales: 15 de Maquinista y 15 de Jefe/a de Sector' })])
      ])
    ])
  ]));

  c.appendChild(el('div', { class: 'card plano' }, [el('p', { class: 'fuente', style: 'margin:0',
    text: 'Contenido revisado el ' + (TEMARIO.fecha_revision || '—') + ' · versión ' + (TEMARIO.version_contenido || '—') +
          ' · ' + PREGUNTAS.length + ' preguntas · ' + EPIGRAFES.length + ' temas' })]));
}

/* ===================== PSICOTÉCNICOS =====================
   El motor puro vive en psicotecnicos.js y se incrusta antes que esta app.
   ======================================================== */
var MOTOR_PSICO = crearMotorPsicotecnico(baraja, aleatorio, esc);
var generaSerie = MOTOR_PSICO.generaSerie;
var generaVerbal = MOTOR_PSICO.generaVerbal;
var generaEspacial = MOTOR_PSICO.generaEspacial;
var claveCeldas = MOTOR_PSICO.claveCeldas;
var rotaN = MOTOR_PSICO.rotaN;
var transformacionesUnicas = MOTOR_PSICO.transformacionesUnicas;
var svgFigura = MOTOR_PSICO.svgFigura;
var BASES_ESPACIALES = MOTOR_PSICO.basesEspaciales;
/* --- menú y sesión de psicotécnicos --- */
function pPsicoMenu(c) {
  c.appendChild(el('div', { class: 'aviso info', html:
    'En el examen, razonamiento verbal y espacial valen <b>20 de los 100 puntos</b>. Se entrenan, y se nota.' }));
  if (!E.psico) E.psico = {};

  var tipos = [
    { id: 'serie', emoji: '🔢', tit: 'Series numéricas', sub: 'Encuentra el número que continúa' },
    { id: 'verbal', emoji: '🔤', tit: 'Razonamiento verbal', sub: 'Sinónimos, antónimos y analogías' },
    { id: 'espacial', emoji: '🔷', tit: 'Razonamiento espacial', sub: 'Giros de figuras' },
    { id: 'mixto', emoji: '🎲', tit: 'Mezclado', sub: 'Los tres tipos a la vez' }
  ];
  var lista = el('div', { class: 'menu' });
  tipos.forEach(function (t) {
    var st = E.psico[t.id] || { hechos: 0, aciertos: 0 };
    lista.appendChild(el('button', { class: 'btn', onclick: function () { ir(pPsicoConfig, t.tit, { tipo: t }); } }, [
      el('span', { class: 'emoji', text: t.emoji }),
      el('span', { class: 'txt' }, [
        el('b', { text: t.tit }),
        el('span', { text: st.hechos ? t.sub + ' · ' + Math.round((st.aciertos / st.hechos) * 100) + '% de acierto' : t.sub })
      ])
    ]));
  });
  c.appendChild(lista);
  c.appendChild(el('p', { class: 'fuente', style: 'margin-top:16px',
    text: 'Los ejercicios se generan solos cada vez, así que nunca se acaban ni se repiten igual.' }));
}

function pPsicoConfig(c, a) {
  c.appendChild(el('h2', { text: '¿Cuántos ejercicios?' }));
  var fila = el('div', { class: 'fila' });
  c.appendChild(fila);
  c.appendChild(el('p', { class: 'fuente', style: 'margin-top:18px',
    text: 'Se mide el tiempo empleado y al final verás la media por ejercicio.' }));

  var cantidad = 10;
  function refrescar() {
    fila.innerHTML = '';
    [10, 20, 30].forEach(function (n) {
      fila.appendChild(el('button', { class: 'btn' + (n === cantidad ? ' primario' : ''), 'aria-pressed': n === cantidad ? 'true' : 'false',
        onclick: function () { cantidad = n; refrescar(); } }, [String(n)]));
    });
    pie([el('button', { class: 'btn primario', onclick: function () {
      reemplazar(pPsicoSesion, a.tipo.tit, { tipo: a.tipo, n: cantidad });
    } }, ['Empezar · ' + plural(cantidad, 'ejercicio', 'ejercicios')])]);
  }
  refrescar();
}

function pPsicoSesion(c, a) {
  if (!E.psico) E.psico = {};
  var s = a.sesion || { total: a.n, i: 0, aciertos: 0, inicio: Date.now(), ejercicio: null,
    respuesta: null, terminada: false, modo: 'psico' };
  a.sesion = s;
  var total = s.total;
  var cabecera = el('div', { class: 'contador' });
  var barra = barraProgreso(0, 'Progreso de los psicotécnicos');
  var zona = el('div');
  c.appendChild(cabecera); c.appendChild(barra); c.appendChild(zona);

  var reloj = setInterval(function () {
    if (!document.body.contains(zona)) { clearInterval(reloj); return; }
    var cr = $('#crono'); if (cr) cr.textContent = 'Tiempo ' + mmss(Math.floor((Date.now() - s.inicio) / 1000));
  }, 1000);

  function genera() {
    if (a.tipo.id === 'serie') return generaSerie();
    if (a.tipo.id === 'verbal') return generaVerbal();
    if (a.tipo.id === 'espacial') return generaEspacial();
    var r = Math.random();
    return r < .34 ? generaSerie() : (r < .67 ? generaVerbal() : generaEspacial());
  }

  function dibujar() {
    if (s.i >= total) { clearInterval(reloj); return fin(); }
    if (!s.ejercicio) s.ejercicio = genera();
    var ejercicio = s.ejercicio;
    zona.innerHTML = ''; cabecera.innerHTML = '';
    cabecera.appendChild(el('span', { text: 'Ejercicio ' + (s.i + 1) + ' de ' + total }));
    cabecera.appendChild(el('span', { class: 'crono', id: 'crono', text: 'Tiempo ' + mmss(Math.floor((Date.now() - s.inicio) / 1000)) }));
    var pctProgreso = (s.i / total) * 100;
    $('i', barra).style.width = pctProgreso.toFixed(1) + '%';
    barra.setAttribute('aria-valuenow', String(Math.round(pctProgreso)));

    var card = el('div', { class: 'card' });
    card.appendChild(el('div', { class: 'enunciado', text: ejercicio.enunciado }));

    if (ejercicio.clase === 'serie') {
      var serieEl = el('div', { class: 'serie' });
      ejercicio.items.forEach(function (v) { serieEl.appendChild(el('span', { text: String(v) })); });
      serieEl.appendChild(el('span', { class: 'hueco', text: '?' }));
      card.appendChild(serieEl);
    }
    if (ejercicio.clase === 'espacial') {
      card.appendChild(el('div', { class: 'figs' }, [el('div', { class: 'fig', html: svgFigura(ejercicio.figuraBase, 108) })]));
    }

    var ops = el('div', { class: ejercicio.clase === 'espacial' ? 'figs' : 'opciones' });
    var botones = [];
    var lista = ejercicio.clase === 'espacial' ? ejercicio.opcionesFig : ejercicio.opciones;
    lista.forEach(function (o, idx) {
      var b;
      if (ejercicio.clase === 'espacial') {
        b = el('button', { class: 'op', style: 'flex-direction:column;align-items:center;min-height:0;padding:10px',
          onclick: function () { elegir(idx); } }, [
          el('span', { class: 'tecla', text: String(idx + 1) }),
          el('span', { html: svgFigura(o, 92) })
        ]);
      } else {
        b = el('button', { class: 'op', onclick: function () { elegir(idx); } }, [
          el('span', { class: 'tecla', text: String(idx + 1) }), el('span', { text: String(o) })
        ]);
      }
      botones.push(b); ops.appendChild(b);
    });
    card.appendChild(ops);
    zona.appendChild(card);

    teclado = { opcion: function (n) { if (n < lista.length) { elegir(n); return true; } return false; } };
    if (s.respuesta !== null) mostrarCorreccion(false);

    function elegir(idx) {
      if (!puedeEditar() || s.respuesta !== null) return;
      var ok = idx === ejercicio.correcta;
      s.respuesta = idx;
      if (ok) s.aciertos++;
      var st = E.psico[a.tipo.id] || { hechos: 0, aciertos: 0 };
      st.hechos++; if (ok) st.aciertos++;
      E.psico[a.tipo.id] = st;
      tocarRacha(); E.revision++; guardar();

      mostrarCorreccion(true);
    }

    function mostrarCorreccion(enfocar) {
      var idx = s.respuesta;
      var ok = idx === ejercicio.correcta;
      botones.forEach(function (b, k) {
        b.disabled = true;
        if (k === ejercicio.correcta) b.classList.add('correcta');
        else if (k === idx) b.classList.add('fallada');
      });
      if (enfocar) botones[idx].classList.add(ok ? 'anim-ok' : 'anim-err');

      var fb = el('div', { class: 'feedback ' + (ok ? 'bien' : 'mal'), role: 'status',
        'aria-live': 'polite', tabindex: '-1' });
      fb.appendChild(el('div', { class: 'cab' }, [icono(ok ? 'check' : 'x'), ok ? 'Correcto' : 'Incorrecto']));
      fb.appendChild(el('div', { class: 'exp', text: ejercicio.explicacion }));
      card.appendChild(fb);

      var seguir = el('button', { class: 'btn primario', style: 'margin-top:16px',
        onclick: siguiente }, [s.i === total - 1 ? 'Ver el resultado' : 'Siguiente']);
      zona.appendChild(seguir);
      if (enfocar) fb.focus({ preventScroll: true });
      teclado = { seguir: function () { siguiente(); return true; } };
    }
    function siguiente() { s.i++; s.ejercicio = null; s.respuesta = null; dibujar(); }
  }

  function fin() {
    s.terminada = true;
    var seg = Math.floor((Date.now() - s.inicio) / 1000);
    var pct = Math.round((s.aciertos / total) * 100);
    zona.innerHTML = ''; cabecera.innerHTML = ''; $('i', barra).style.width = '100%';
    barra.setAttribute('aria-valuenow', '100');
    zona.appendChild(el('div', { class: 'card' }, [
      el('div', { class: 'nota' }, [
        el('div', { class: 'valor ' + (pct >= 60 ? 'bien' : 'mal'), text: s.aciertos + '/' + total }),
        el('div', { class: 'sub', text: pct + '% · ' + mmss(seg) + ' · ' + Math.round(seg / total) + ' s por ejercicio' })
      ])
    ]));
    var f = el('div', { class: 'fila' });
    f.appendChild(el('button', { class: 'btn primario', onclick: function () {
      reemplazar(pPsicoSesion, a.tipo.tit, { tipo: a.tipo, n: total }); } }, ['Otra tanda']));
    f.appendChild(el('button', { class: 'btn', onclick: function () { alInicio(); } }, ['Volver al inicio']));
    zona.appendChild(f);
    teclado = null;
  }

  dibujar();
}

/* ===================== tema claro / oscuro ===================== */
function aplicarTema() {
  var t = E.tema || 'auto';
  var oscuro = t === 'oscuro' || (t === 'auto' && window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-tema', oscuro ? 'oscuro' : 'claro');
  var b = $('#btn-tema');
  b.replaceChildren(icono(oscuro ? 'sun' : 'moon'));
  b.title = oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
  b.setAttribute('aria-label', b.title);
}

// Autoprueba intensiva activada solo de forma explícita en localhost con
// ?autotest=N. El resultado queda en un atributo del documento para CI/manual.
if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) && /(?:\?|&)autotest=\d+/.test(location.search)) {
  setTimeout(function () {
    var m = location.search.match(/(?:\?|&)autotest=(\d+)/);
    var total = Math.min(300000, Math.max(1, Number(m && m[1]) || 1));
    var fallos = [];
    var posiciones = [0, 0, 0, 0], casosBarajado = 0, legadosDeclarados = 0;
    function unicas(a) { return new Set(a.map(String)).size === a.length; }
    // Comprueba la migración de todos los ids publicados y que barajar nunca
    // cambia la respuesta correcta. Veinte pasadas detectan además un sesgo
    // accidental de posición sin convertir la prueba en probabilísticamente frágil.
    PREGUNTAS.forEach(function (p) {
      if (!p.legacy_id) return;
      legadosDeclarados++;
      if (ID_ANTIGUO_A_NUEVO[p.legacy_id] !== p.id) fallos.push('migración ' + p.id);
    });
    var primera = PREGUNTAS.filter(function (p) { return p.legacy_id; })[0];
    var legado = { srs: {}, practica: {}, fichas: {}, simulacros: [], fallos: [],
      racha: { ultimo: '2026-02-30', dias: 5, mejor: 2 }, vistos: {}, nuevasHoy: {}, psico: {} };
    if (!primera) fallos.push('manifiesto de migración vacío');
    else {
      legado.srs[primera.legacy_id] = { n: 99, due: '2026-99-99', fallos: 1, vistas: 3 };
      legado.practica[primera.legacy_id] = { intentos: 2, aciertos: 9, ultimo: '2026-02-30' };
    }
    var primeraFichaAntigua = Object.keys(fichaAntiguaANueva)[0];
    var primeraFichaNueva = primeraFichaAntigua ? fichaAntiguaANueva[primeraFichaAntigua] : null;
    if (primeraFichaAntigua) legado.fichas[primeraFichaAntigua] = { n: 2, due: '2026-08-27' };
    var migrado = normalizarEstado(legado, true);
    if (primera && (!migrado.srs[primera.id] || migrado.srs[primera.id].n !== 0 ||
        migrado.practica[primera.id].aciertos !== 0 || migrado.racha.mejor !== 5 || migrado.racha.ultimo !== null)) {
      fallos.push('normalización de estado');
    }
    if (!primeraFichaNueva || !migrado.fichas[primeraFichaNueva] || migrado.fichas[primeraFichaNueva].n !== 2) {
      fallos.push('migración de fichas');
    }
    for (var pasada = 0; pasada < 20 && !fallos.length; pasada++) {
      PREGUNTAS.forEach(function (p) {
        var q = preguntaParaSesion(p);
        casosBarajado++;
        posiciones[q.correcta]++;
        if (q.opciones.length !== 4 || !unicas(q.opciones) ||
            q.opciones[q.correcta] !== p.opciones[p.correcta] ||
            q.opciones.slice().sort().join('\u0000') !== p.opciones.slice().sort().join('\u0000')) {
          fallos.push('barajado ' + p.id);
        }
      });
    }
    if (posiciones.some(function (n) { return n === 0; })) fallos.push('distribución del barajado');
    for (var i = 0; i < total && !fallos.length; i++) {
      var s = generaSerie();
      if (s.opciones.length !== 4 || !unicas(s.opciones) || s.correcta < 0 || s.correcta > 3) fallos.push('serie ' + i);
      var v = generaVerbal();
      if (v.opciones.length !== 4 || !unicas(v.opciones) || v.correcta < 0 || v.correcta > 3) fallos.push('verbal ' + i);
      var e = generaEspacial();
      var claves = e.opcionesFig.map(claveCeldas);
      if (claves.length !== 4 || new Set(claves).size !== 4 || e.correcta < 0 || e.correcta > 3) fallos.push('espacial ' + i);
      var giros = e.enunciado.indexOf('180') >= 0 ? 2 : (e.enunciado.indexOf('izquierda') >= 0 ? 3 : 1);
      var esperada = rotaN(e.figuraBase, giros);
      if (claveCeldas(esperada) !== claveCeldas(e.opcionesFig[e.correcta])) fallos.push('rotación ' + i);
      var orbita = transformacionesUnicas(e.figuraBase).map(claveCeldas);
      if (claves.some(function (cl) { return orbita.indexOf(cl) < 0; })) fallos.push('distractor ' + i);
    }
    document.documentElement.setAttribute('data-autotest', JSON.stringify({
      casosPorGenerador: total, casosBarajado: casosBarajado,
      posicionesBarajado: posiciones, migraciones: Object.keys(ID_ANTIGUO_A_NUEVO).length,
      legadosDeclarados: legadosDeclarados,
      migracionesFichas: Object.keys(fichaAntiguaANueva).length,
      fichasDeclaradas: Object.keys(LEGACY_FICHAS).length,
      preguntas: PREGUNTAS.length,
      basesEspaciales: BASES_ESPACIALES.length, fallos: fallos
    }));
  }, 0);
}

/* ===================== arranque ===================== */
cargar();
comprobarBloqueo();
aplicarTema();
if (window.matchMedia) {
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function () {
    if ((E.tema || 'auto') === 'auto') aplicarTema();
  });
}
$('#btn-tema').addEventListener('click', function () {
  var oscuroAhora = document.documentElement.getAttribute('data-tema') === 'oscuro';
  E.tema = oscuroAhora ? 'claro' : 'oscuro';
  guardar(); aplicarTema();
});
$('#marca').innerHTML = marcaEstudio();
$('#btn-atras').addEventListener('click', function () { atras(); });
$('#btn-buscar').addEventListener('click', function () {
  var actual = pila[pila.length - 1];
  if (actual.fn === pBuscador) return;
  ir(pBuscador, 'Buscar');
});
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').catch(function (err) {
      console.warn('No se pudo preparar el arranque sin conexión', err);
    });
  });
}

pila = [{ fn: pInicio, titulo: 'Oposición Metro', args: {} }];
pintar();

})();
