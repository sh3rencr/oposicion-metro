/* =======================================================================
   Oposición Metro de Madrid — Maquinista de Tracción Eléctrica
   App de estudio autocontenida. Vanilla JS, sin dependencias.
   ======================================================================= */
(function () {
'use strict';

var TEMARIO   = DATOS.temario;
var PREGUNTAS = DATOS.preguntas.preguntas;
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
PREGUNTAS.forEach(function (p) { PREG_POR_ID[p.id] = p; });

var NUEVAS_POR_DIA = 20;
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
function normaliza(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/* ===================== identidad visual ===================== */
/* Logo oficial de Metro de Madrid (marca registrada de Metro de Madrid, S.A.).
   Se usa aquí en una herramienta de estudio privada y sin ánimo de lucro, que se
   identifica expresamente como NO oficial en la pantalla "Sobre este contenido". */
function logoMetro(alto) {
  return '<img src="' + LOGO_METRO + '" alt="Metro de Madrid" style="height:' + alto + 'px;width:auto;display:block">';
}
/* Emblema alternativo, de dibujo propio, por si algún día conviene no usar la marca. */
function emblema(tam, fondo, trazo) {
  return '<svg viewBox="0 0 64 64" width="' + tam + '" height="' + tam + '" aria-hidden="true">' +
    '<circle cx="32" cy="32" r="30" fill="' + fondo + '"/>' +
    '<path d="M17 48V31a15 15 0 0 1 30 0v17" fill="none" stroke="' + trazo +
      '" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M25.6 48 29.6 33M38.4 48 34.4 33" stroke="' + trazo +
      '" stroke-width="3.1" stroke-linecap="round"/>' +
    '<path d="M27.7 40.5h8.6M26.2 45.5h11.6" stroke="' + trazo +
      '" stroke-width="2.5" stroke-linecap="round"/>' +
    '</svg>';
}
/* Trazado suelto de líneas, como un plano de metro. Solo decoración. */
function motivoVia() {
  return '<svg class="via" width="164" height="132" viewBox="0 0 164 132" aria-hidden="true">' +
    '<g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M6 122h52a44 44 0 0 0 44-44V10"/>' +
    '<path d="M40 122h18a16 16 0 0 0 16-16V32"/>' +
    '<path d="M132 122V60a22 22 0 0 1 22-22h6"/>' +
    '</g></svg>';
}
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
/* Tiñe la banda superior y los acentos con el color de la parte que se está viendo. */
function ponerLinea(color) {
  document.documentElement.style.setProperty('--linea', color || 'var(--accent)');
}
function roundel(pa, pequeno) {
  return el('span', { class: 'roundel' + (pequeno ? ' pequeno' : ''),
                      style: 'background:' + colorParte(pa), text: pa.parte });
}
/* Devuelve ', Andrei' o cadena vacía, para poder tutear sin quedar forzado. */
function coma() { var n = nombreUsuario(); return n ? ', ' + n : ''; }

/* ===================== estado persistente ===================== */
var CLAVE = 'oposicion-metro-v1';
var E;

function estadoInicial() {
  return { v: 1, srs: {}, fichas: {}, simulacros: [], fallos: [],
           racha: { ultimo: null, dias: 0, mejor: 0 }, vistos: {},
           nuevasHoy: { fecha: null, n: 0 }, tema: 'auto' };
}
function cargar() {
  try {
    var crudo = localStorage.getItem(CLAVE);
    E = crudo ? JSON.parse(crudo) : estadoInicial();
  } catch (err) { E = estadoInicial(); }
  var base = estadoInicial();
  for (var k in base) if (!(k in E)) E[k] = base[k];
}
var guardarPendiente = null;
function guardarYa() {
  if (guardarPendiente) { clearTimeout(guardarPendiente); guardarPendiente = null; }
  try { localStorage.setItem(CLAVE, JSON.stringify(E)); }
  catch (err) { console.warn('No se pudo guardar el progreso', err); }
}
function guardar() {
  if (guardarPendiente) clearTimeout(guardarPendiente);
  guardarPendiente = setTimeout(guardarYa, 120);
}
// Si cierra la pestaña o cambia de aplicación, volcamos ya: nada de esperar al retardo.
window.addEventListener('pagehide', guardarYa);
window.addEventListener('beforeunload', guardarYa);
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') guardarYa();
});

/* ===================== repetición espaciada ===================== */
function tarjeta(id) {
  if (!E.srs[id]) E.srs[id] = { n: 0, due: hoyStr(), fallos: 0, vistas: 0 };
  return E.srs[id];
}
function registrar(id, acerto) {
  if (!E.srs[id]) contadorNuevas().n++;   // la cuota diaria se gasta al responder, no al abrir
  var t = tarjeta(id);
  t.vistas++;
  if (acerto) {
    t.n = t.n + 1;
    t.due = sumarDias(hoyStr(), INTERVALOS[Math.min(t.n - 1, INTERVALOS.length - 1)]);
    var i = E.fallos.indexOf(id);
    if (i >= 0 && t.n >= 2) E.fallos.splice(i, 1);
  } else {
    t.n = 0;
    t.fallos++;
    t.due = sumarDias(hoyStr(), 1);
    if (E.fallos.indexOf(id) < 0) E.fallos.push(id);
  }
  tocarRacha();
  guardar();
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
function colaDeHoy() {
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
  return vencidas.concat(baraja(nuevas).slice(0, cupo));
}

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
    if (/^#{1,4}\s+/.test(b)) return '<h4>' + enLinea(b.replace(/^#{1,4}\s+/, '')) + '</h4>';
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
function atras() {
  if (pila.length > 1) { pila.pop(); pintar(); }
}
function alInicio() { pila = [pila[0]]; pintar(); }
function pintar() {
  var v = pila[pila.length - 1];
  teclado = null;
  ponerLinea(null);
  pieOculto();
  app.innerHTML = '';
  $('#titulo-pantalla').textContent = v.titulo;
  $('#btn-atras').classList.toggle('oculto', pila.length <= 1);
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
  if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) return;
  if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
  var k = ev.key;
  if (k === 'Escape' && pila.length > 1) { atras(); ev.preventDefault(); return; }
  if (!teclado) return;
  if (k >= '1' && k <= '9' && teclado.opcion) {
    if (teclado.opcion(parseInt(k, 10) - 1) !== false) ev.preventDefault();
  } else if ((k === 'Enter' || k === ' ') && teclado.seguir) {
    if (teclado.seguir() !== false) ev.preventDefault();
  }
});

/* ===================== pantalla: inicio ===================== */
function pInicio(c) {
  var cola = colaDeHoy();
  var r = E.racha;

  var hero = el('div', { class: 'hero' });
  hero.insertAdjacentHTML('afterbegin', motivoVia());
  hero.appendChild(el('div', { class: 'cabecera-hero' }, [
    el('span', { class: 'placa', html: logoMetro(30) }),
    el('div', { class: 'saludo', text: saludo() })
  ]));
  if (cola.length) {
    hero.appendChild(el('div', { class: 'cifra' }, [
      el('b', { text: String(cola.length) }),
      el('span', { text: cola.length === 1 ? 'pregunta para hoy' : 'preguntas para hoy' })
    ]));
  } else {
    hero.appendChild(el('div', { class: 'cifra' }, [el('b', { text: '✓' }), el('span', { text: 'hoy ya está el repaso al día' })]));
  }
  hero.appendChild(el('div', { class: 'rachah', text: r.dias > 0
    ? '🔥 ' + plural(r.dias, 'día seguido', 'días seguidos') + ' · récord: ' + plural(r.mejor, 'día', 'días')
    : 'Responde algo hoy y empiezas racha.' }));
  hero.appendChild(el('button', { class: 'btn', onclick: function () {
    if (cola.length) ir(pRepaso, 'Repaso de hoy'); else ir(pTestConfig, 'Hacer un test');
  } }, [cola.length ? 'Empezar el repaso de hoy' : 'Hacer un test de todos modos']));
  c.appendChild(hero);

  if (!EXAMEN.formato_confirmado) {
    c.appendChild(el('div', { class: 'aviso', html:
      '<b>Ojo:</b> las bases de 2026 no dicen cuántas preguntas tiene el examen. El simulacro usa ' +
      EXAMEN.preguntas_simulacro + ' preguntas y ' + EXAMEN.minutos_simulacro +
      ' minutos como estimación, a partir de convocatorias anteriores.' }));
  }

  var menu = el('div', { class: 'menu' });
  function boton(emoji, tit, sub, fn, tituloPantalla, primario) {
    menu.appendChild(el('button', { class: 'btn' + (primario ? ' primario' : ''), onclick: function () { ir(fn, tituloPantalla); } }, [
      el('span', { class: 'emoji', text: emoji }),
      el('span', { class: 'txt' }, [el('b', { text: tit }), el('span', { text: sub })])
    ]));
  }
  boton('📖', 'Estudiar tema', 'Lee el resumen de cada tema y ponte a prueba', pPartes, 'Estudiar tema');
  boton('✏️', 'Hacer un test', 'De un tema o mezclado, con corrección al momento', pTestConfig, 'Hacer un test');
  boton('⏱️', 'Simulacro de examen', EXAMEN.preguntas_simulacro + ' preguntas cronometradas, como el día real', pSimulacroIntro, 'Simulacro de examen');
  boton('🔁', 'Repaso inteligente', 'Te pone justo lo que estás a punto de olvidar', pRepaso, 'Repaso de hoy', cola.length > 0);
  boton('🧠', 'Psicotécnicos', 'Series, palabras y figuras: los otros 20 puntos', pPsicoMenu, 'Psicotécnicos');

  c.appendChild(menu);

  c.appendChild(el('div', { class: 'seccion-tit', text: 'Además' }));
  var extra = el('div', { class: 'lista' });
  function fila(emoji, tit, sub, fn, tp) {
    extra.appendChild(el('button', { class: 'item', onclick: function () { ir(fn, tp); } }, [
      el('span', { class: 'cod', text: emoji }),
      el('span', { class: 'cuerpo' }, [el('b', { text: tit }), el('small', { text: sub })]),
      el('span', { class: 'flecha', text: '›' })
    ]));
  }
  fila('📊', 'Mi progreso', 'Dominio por parte, racha y notas de simulacro', pProgreso, 'Mi progreso');
  fila('💾', 'Copia de seguridad', 'Guardar o recuperar tu progreso', pCopia, 'Copia de seguridad');
  fila('ℹ️', 'Sobre este contenido', 'De dónde sale todo esto y qué límites tiene', pSobre, 'Sobre este contenido');
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
        d.total ? el('div', { class: 'barra', style: 'margin-top:8px;height:6px' },
          [el('i', { style: 'width:' + d.pct + '%;background:' + colorParte(pa) })]) : null
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
            ' · ' + plural((ep.fichas || []).length, 'ficha', 'fichas') + (leido ? ' · leído ✓' : '') })
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
      style: 'margin-top:18px;background:' + colorParte(pa) + ';color:#fff',
      onclick: function () { lanzarTest(baraja(preg), 'Parte ' + pa.parte); } },
      ['Test de toda la parte ' + pa.parte]));
  }
}

function pTema(c, a) {
  var ep = a.ep;
  E.vistos[ep.id] = true; tocarRacha(); guardar();

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

  (ep.figuras || []).forEach(function (nombre) {
    if (!FIGURAS[nombre]) return;
    c.appendChild(el('div', { class: 'card figura' }, [el('div', { html: FIGURAS[nombre]() })]));
  });

  if (ep.fuentes && ep.fuentes.length) {
    c.appendChild(el('p', { class: 'fuente', html: 'Fuente: ' + ep.fuentes.map(function (u) {
      return '<a href="' + esc(u) + '" target="_blank" rel="noopener">temario oficial ↗</a>';
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

function pSesion(c, cfg) {
  var lista = cfg.preguntas.slice();
  var i = 0;
  var respuestas = new Array(lista.length).fill(null);
  var reintentos = [];
  var inicio = Date.now();
  var limite = cfg.minutos ? cfg.minutos * 60 : null;
  var tempo = null;

  var cabecera = el('div', { class: 'contador' });
  var barra = el('div', { class: 'barra' }, [el('i')]);
  var zona = el('div');
  c.appendChild(cabecera); c.appendChild(barra); c.appendChild(zona);

  if (limite) {
    tempo = setInterval(function () {
      if (!document.body.contains(zona)) { clearInterval(tempo); return; }
      var queda = limite - Math.floor((Date.now() - inicio) / 1000);
      var cr = $('#crono');
      if (cr) {
        cr.textContent = '⏱ ' + mmss(Math.max(0, queda));
        cr.classList.toggle('rojo', queda <= 300);
      }
      if (queda <= 0) { clearInterval(tempo); terminar(true); }
    }, 1000);
  }

  function actual() { return lista[i]; }

  function dibujar() {
    var p = actual();
    zona.innerHTML = '';
    cabecera.innerHTML = '';
    cabecera.appendChild(el('span', { text: 'Pregunta ' + (i + 1) + ' de ' + lista.length }));
    cabecera.appendChild(limite
      ? el('span', { class: 'crono', id: 'crono', text: '⏱ ' + mmss(limite - Math.floor((Date.now() - inicio) / 1000)) })
      : el('span', { text: cfg.etiqueta || '' }));
    $('i', barra).style.width = ((i / lista.length) * 100).toFixed(1) + '%';

    var tarjetaP = el('div', { class: 'card' });
    if (p.volatil) {
      tarjetaP.appendChild(el('div', { class: 'chip-volatil',
        text: '⚠ Dato sujeto a cambios — verificar en la web de Metro (dato de ' + (p.fecha_dato || '?') + ')' }));
    }
    tarjetaP.appendChild(el('div', { class: 'enunciado', text: p.enunciado }));

    var ops = el('div', { class: 'opciones' });
    var botones = [];
    p.opciones.forEach(function (texto, idx) {
      var b = el('button', { class: 'op', onclick: function () { elegir(idx); } }, [
        el('span', { class: 'tecla', text: String(idx + 1) }),
        el('span', { text: texto })
      ]);
      if (respuestas[i] === idx) b.classList.add('marcada');
      botones.push(b); ops.appendChild(b);
    });
    tarjetaP.appendChild(ops);
    zona.appendChild(tarjetaP);

    teclado = { opcion: function (n) { if (n < p.opciones.length) { elegir(n); return true; } return false; },
                seguir: function () { if (!cfg.inmediato && respuestas[i] !== null) { avanzar(); return true; } return false; } };

    if (!cfg.inmediato) {
      var nav = el('div', { class: 'fila', style: 'margin-top:6px' });
      if (i > 0) nav.appendChild(el('button', { class: 'btn sutil', onclick: function () { i--; dibujar(); } }, ['← Anterior']));
      nav.appendChild(el('button', { class: 'btn' + (respuestas[i] !== null ? ' primario' : ''), onclick: avanzar },
        [i === lista.length - 1 ? 'Terminar y corregir' : 'Siguiente →']));
      zona.appendChild(nav);
      pie([el('button', { class: 'btn sutil', onclick: confirmarSalida }, ['Abandonar el simulacro'])]);
    }

    function elegir(idx) {
      if (cfg.inmediato) {
        if (respuestas[i] !== null) return;
        respuestas[i] = idx;
        var acerto = idx === p.correcta;
        registrar(p.id, acerto);
        if (!acerto && reintentos.indexOf(p.id) < 0) reintentos.push(p.id);
        botones.forEach(function (b, k) {
          b.disabled = true;
          b.classList.remove('marcada');
          if (k === p.correcta) b.classList.add('correcta');
          else if (k === idx) b.classList.add('fallada');
        });
        botones[idx].classList.add(acerto ? 'anim-ok' : 'anim-err');
        tarjetaP.appendChild(bloqueExplicacion(p, acerto));
        var seguir = el('button', { class: 'btn primario', style: 'margin-top:16px', onclick: avanzar },
          [i === lista.length - 1 ? 'Ver el resultado' : 'Siguiente pregunta']);
        zona.appendChild(seguir);
        seguir.focus({ preventScroll: true });
        teclado = { seguir: function () { avanzar(); return true; } };
      } else {
        respuestas[i] = idx;
        botones.forEach(function (b, k) { b.classList.toggle('marcada', k === idx); });
      }
    }
  }

  function avanzar() {
    if (i < lista.length - 1) { i++; dibujar(); }
    else terminar(false);
  }
  function confirmarSalida() {
    if (confirm('¿Seguro que quieres abandonar el simulacro? Se perderán las respuestas.')) { if (tempo) clearInterval(tempo); atras(); }
  }
  function terminar(porTiempo) {
    if (tempo) clearInterval(tempo);
    var segundos = Math.floor((Date.now() - inicio) / 1000);
    if (!cfg.inmediato) {
      lista.forEach(function (p, k) { if (respuestas[k] !== null) registrar(p.id, respuestas[k] === p.correcta); });
    }
    var res = { lista: lista, respuestas: respuestas, segundos: segundos, porTiempo: porTiempo,
                modo: cfg.modo, etiqueta: cfg.etiqueta, reintentos: reintentos };
    if (cfg.modo === 'simulacro') guardarSimulacro(res);
    reemplazar(pResultado, 'Resultado', res);
  }

  dibujar();
}

function bloqueExplicacion(p, acerto) {
  var b = el('div', { class: 'feedback ' + (acerto ? 'bien' : 'mal') });
  b.appendChild(el('div', { class: 'cab', text: acerto ? '✓ Correcto' : '✗ Incorrecto' }));
  if (!acerto) {
    b.appendChild(el('div', { class: 'exp', style: 'margin-bottom:8px',
      html: '<strong>La respuesta correcta es:</strong> ' + esc(p.opciones[p.correcta]) }));
  }
  b.appendChild(el('div', { class: 'exp', text: p.explicacion }));
  b.appendChild(el('div', { class: 'fuente', html: '📄 ' + esc(p.fuente_texto || 'Temario oficial') +
    ' — <a href="' + esc(p.fuente) + '" target="_blank" rel="noopener">abrir la fuente ↗</a>' }));
  return b;
}

/* ===================== resultado ===================== */
function guardarSimulacro(res) {
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
  guardar();
}

function pResultado(c, res) {
  var lista = res.lista, resp = res.respuestas;
  var aciertos = lista.filter(function (p, k) { return resp[k] === p.correcta; }).length;
  var pct = Math.round((aciertos / lista.length) * 1000) / 10;
  var esSimulacro = res.modo === 'simulacro';
  var umbral = EXAMEN.umbral_aprobado_porcentaje;
  var aprueba = pct >= umbral;

  if (res.porTiempo) c.appendChild(el('div', { class: 'aviso', text: '⏱ Se acabó el tiempo. Se ha corregido lo respondido hasta ese momento.' }));

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
    c.appendChild(el('div', { class: 'card' }, [el('h3', { text: 'Por partes del temario' }), t]));
  }

  var falladas = lista.filter(function (p, k) { return resp[k] !== p.correcta; });
  var acciones = el('div', { class: 'fila' });
  if (falladas.length) {
    acciones.appendChild(el('button', { class: 'btn primario', onclick: function () {
      reemplazar(pSesion, 'Repasar los fallos', { preguntas: baraja(falladas), inmediato: true, modo: 'test', etiqueta: 'Repaso de fallos' });
    } }, ['Repasar los ' + falladas.length + ' fallos']));
  }
  acciones.appendChild(el('button', { class: 'btn', onclick: alInicio }, ['Volver al inicio']));
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
function pTestConfig(c) {
  var seleccion = 'todo';
  c.appendChild(el('h3', { text: '1. ¿De qué quieres el test?' }));
  var selector = el('div', { class: 'lista' });
  var opciones = [{ id: 'todo', tit: 'Mezclado de todo el temario', sub: PREGUNTAS.length + ' preguntas disponibles' }];
  PARTES.forEach(function (pa) {
    var ids = pa.epigrafes.map(function (e) { return e.id; });
    var n = PREGUNTAS.filter(function (q) { return ids.indexOf(q.epigrafe) >= 0; }).length;
    if (n) opciones.push({ id: 'parte:' + pa.parte, tit: 'Parte ' + pa.parte + ' — ' + pa.titulo, sub: plural(n, 'pregunta', 'preguntas') });
  });
  var botonesSel = [];
  opciones.forEach(function (o) {
    var b = el('button', { class: 'item', onclick: function () {
      seleccion = o.id;
      botonesSel.forEach(function (x) { x.style.borderColor = ''; x.style.background = ''; });
      b.style.borderColor = 'var(--accent)'; b.style.background = 'var(--accent-soft)';
      refrescar();
    } }, [
      el('span', { class: 'cod', text: o.id === 'todo' ? '★' : o.id.split(':')[1] }),
      el('span', { class: 'cuerpo' }, [el('b', { text: o.tit }), el('small', { text: o.sub })])
    ]);
    botonesSel.push(b); selector.appendChild(b);
  });
  botonesSel[0].style.borderColor = 'var(--accent)'; botonesSel[0].style.background = 'var(--accent-soft)';
  c.appendChild(selector);

  c.appendChild(el('h3', { text: '2. ¿Qué nivel?', style: 'margin-top:26px' }));
  c.appendChild(el('p', { class: 'fuente', style: 'margin-bottom:10px', text:
    'Definiciones: se responden entendiendo el concepto. Datos concretos: hay que recordar un nombre, ' +
    'un lugar o una competencia. Cifras y matices: llevan una cifra, un plazo o una medida, o hay que ' +
    'distinguir entre opciones casi iguales.' }));
  var nivel = 0;   // 0 = todos
  var zonaNivel = el('div', { class: 'fila' });
  var botonesNivel = [];
  [{ n: 0, t: 'Todos' }, { n: 1, t: 'Definiciones' }, { n: 2, t: 'Datos concretos' }, { n: 3, t: 'Cifras y matices' }]
    .forEach(function (o) {
      var b = el('button', { class: 'btn' + (o.n === 0 ? ' primario' : ''), onclick: function () {
        nivel = o.n;
        botonesNivel.forEach(function (x) { x.classList.remove('primario'); });
        b.classList.add('primario');
        refrescar();
      } }, [o.t]);
      botonesNivel.push(b); zonaNivel.appendChild(b);
    });
  c.appendChild(zonaNivel);

  c.appendChild(el('h3', { text: '3. ¿Cuántas preguntas?', style: 'margin-top:26px' }));
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
        onclick: function () { cantidad = n; refrescar(); } }, [etiqueta]);
      zonaN.appendChild(b);
    });
    pintarPie(Math.min(cantidad, disp.length));
  }

  function pintarPie(n) {
    if (!n) { pieOculto(); return; }
    pie([el('button', { class: 'btn primario', onclick: function () {
      lanzarTest(baraja(disponibles()).slice(0, n), 'Test de ' + n);
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
    reemplazar(pSesion, 'Simulacro', { preguntas: baraja(PREGUNTAS).slice(0, n), inmediato: false,
      modo: 'simulacro', minutos: EXAMEN.minutos_simulacro, etiqueta: 'Simulacro' });
  } }, ['Empezar el simulacro']));
}

/* ===================== repaso inteligente ===================== */
function pRepaso(c) {
  var cola = colaDeHoy();
  if (!cola.length) {
    c.appendChild(el('div', { class: 'vacio', html:
      '<p style="font-size:2.5rem;margin:0 0 8px">✅</p><p><b>Nada pendiente por hoy' + esc(coma()) + '.</b></p>' +
      '<p>Vuelve mañana. Si quieres seguir, haz un test normal.</p>' }));
    c.appendChild(el('button', { class: 'btn', onclick: function () { reemplazar(pTestConfig, 'Hacer un test'); } }, ['Hacer un test']));
    return;
  }
  var nuevas = cola.filter(function (p) { return !E.srs[p.id]; }).length;
  c.appendChild(el('div', { class: 'card' }, [
    el('h2', { text: plural(cola.length, 'pregunta para hoy', 'preguntas para hoy') }),
    el('p', { html: (cola.length - nuevas) + ' de repaso y ' + nuevas + ' nuevas. ' +
      'Cuando aciertas, la pregunta tarda más en volver: 1, 3, 7, 16, 35 días… Cuando fallas, vuelve mañana.' })
  ]));
  c.appendChild(el('button', { class: 'btn primario', onclick: function () {
    reemplazar(pSesion, 'Repaso de hoy', { preguntas: cola, inmediato: true, modo: 'repaso', etiqueta: 'Repaso' });
  } }, ['Empezar el repaso']));

  if (E.fallos.length) {
    c.appendChild(el('button', { class: 'btn', style: 'margin-top:10px', onclick: function () {
      var f = E.fallos.map(function (id) { return PREG_POR_ID[id]; }).filter(Boolean);
      reemplazar(pSesion, 'Mis fallos', { preguntas: baraja(f), inmediato: true, modo: 'test', etiqueta: 'Mis fallos' });
    } }, ['Solo mis ' + E.fallos.length + ' preguntas falladas']));
  }
}

/* ===================== fichas ===================== */
function pFichas(c, a) {
  var ep = a.ep;
  var fichas = baraja((ep.fichas || []).map(function (f, k) { return { f: f, clave: ep.id + '#' + k }; }));
  var i = 0, girada = false;

  var cont = el('div');
  c.appendChild(cont);

  function dibujar() {
    if (i >= fichas.length) {
      cont.innerHTML = '';
      cont.appendChild(el('div', { class: 'vacio', html: '<p style="font-size:2.5rem;margin:0 0 8px">🎉</p><p><b>Fichas terminadas' + esc(coma()) + '.</b></p>' }));
      cont.appendChild(el('button', { class: 'btn primario', onclick: function () { i = 0; girada = false; fichas = baraja(fichas); dibujar(); } }, ['Otra vuelta']));
      cont.appendChild(el('button', { class: 'btn sutil', style: 'margin-top:10px', onclick: atras }, ['Volver al tema']));
      teclado = null;
      return;
    }
    var item = fichas[i];
    cont.innerHTML = '';
    cont.appendChild(el('div', { class: 'contador' }, [el('span', { text: 'Ficha ' + (i + 1) + ' de ' + fichas.length }), el('span', { text: ep.id })]));

    var caja = el('div', { class: 'ficha' + (girada ? ' girada' : ''), onclick: girar,
      text: girada ? item.f.reverso : item.f.anverso });
    cont.appendChild(caja);
    cont.appendChild(el('div', { class: 'ficha-pista', text: girada ? '¿La sabías?' : 'Toca la ficha (o pulsa Intro) para ver la respuesta' }));

    if (girada) {
      var fila = el('div', { class: 'fila' });
      fila.appendChild(el('button', { class: 'btn', onclick: function () { responder(false); } }, ['✗ No la sabía']));
      fila.appendChild(el('button', { class: 'btn primario', onclick: function () { responder(true); } }, ['✓ La sabía']));
      cont.appendChild(fila);
      teclado = { seguir: function () { responder(true); return true; },
                  opcion: function (n) { if (n === 0) { responder(false); return true; } if (n === 1) { responder(true); return true; } return false; } };
    } else {
      teclado = { seguir: function () { girar(); return true; } };
    }
  }
  function girar() { girada = !girada; dibujar(); }
  function responder(sabia) {
    var t = E.fichas[item_clave()] || { n: 0, due: hoyStr() };
    if (sabia) { t.n++; t.due = sumarDias(hoyStr(), INTERVALOS[Math.min(t.n - 1, INTERVALOS.length - 1)]); }
    else { t.n = 0; t.due = sumarDias(hoyStr(), 1); }
    E.fichas[item_clave()] = t;
    tocarRacha(); guardar();
    i++; girada = false; dibujar();
  }
  function item_clave() { return fichas[i].clave; }
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
    el('h3', { text: 'Constancia' }),
    el('p', { html: '🔥 <b>' + plural(r.dias, 'día seguido', 'días seguidos') + '</b> estudiando · récord: ' + plural(r.mejor, 'día', 'días') }),
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
        el('div', { class: 'barra' }, [el('i', { style: 'width:' + d.pct + '%;background:' + colorParte(pa) })]),
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

  var pend = colaDeHoy().length;
  c.appendChild(el('div', { class: 'card plano' }, [
    el('p', { style: 'margin:0', html: 'Preguntas en el sistema: <b>' + PREGUNTAS.length + '</b> · vistas al menos una vez: <b>' +
      Object.keys(E.srs).length + '</b> · pendientes hoy: <b>' + pend + '</b> · marcadas como falladas: <b>' + E.fallos.length + '</b>' })
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
    el('h3', { text: 'Guardar tu progreso en un archivo' }),
    el('p', { text: 'Se descarga un archivo pequeño con todo lo que llevas estudiado. Guárdalo donde quieras. Te sirve por si cambias de ordenador o de móvil, o por si borras el historial del navegador.' }),
    el('button', { class: 'btn primario', onclick: descargarCopia }, ['💾 Guardar mi progreso'])
  ]));

  var entrada = el('input', { type: 'file', accept: '.json,application/json', class: 'oculto',
    onchange: function (ev) { restaurarCopia(ev.target.files[0]); } });
  c.appendChild(el('div', { class: 'card' }, [
    el('h3', { text: 'Recuperar un progreso guardado' }),
    el('p', { text: 'Busca el archivo que guardaste antes. Cuidado: sustituye por completo lo que tengas ahora en este aparato.' }),
    el('button', { class: 'btn', onclick: function () { entrada.click(); } }, ['📂 Recuperar desde un archivo']),
    entrada
  ]));

  c.appendChild(el('div', { class: 'aviso', html:
    '<b>Importante:</b> el progreso del ordenador y el del móvil son independientes. Para pasarlo de uno a otro, guarda el archivo aquí y recupéralo allí.' }));

  c.appendChild(el('div', { class: 'card' }, [
    el('h3', { text: 'Empezar de cero' }),
    el('p', { class: 'fuente', text: 'Borra todo tu progreso en este aparato. No se puede deshacer.' }),
    el('button', { class: 'btn peligro', onclick: function () {
      if (confirm('¿Seguro? Se borrará todo tu progreso en este aparato.') &&
          confirm('Última confirmación: esto no se puede deshacer.')) {
        E = estadoInicial(); guardar(); alInicio();
      }
    } }, ['Borrar todo mi progreso'])
  ]));
}

function descargarCopia() {
  var datos = JSON.stringify({ app: 'oposicion-metro', v: 1, exportado: new Date().toISOString(), estado: E }, null, 2);
  var blob = new Blob([datos], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = el('a', { href: url, download: 'progreso-oposicion-metro-' + hoyStr() + '.json' });
  document.body.appendChild(a); a.click();
  setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 1500);
}

function restaurarCopia(archivo) {
  if (!archivo) return;
  var lector = new FileReader();
  lector.onload = function () {
    try {
      var obj = JSON.parse(lector.result);
      var nuevo = obj && obj.estado ? obj.estado : obj;
      if (!nuevo || typeof nuevo !== 'object' || !nuevo.srs) throw new Error('formato');
      if (!confirm('Se va a sustituir tu progreso actual por el del archivo. ¿Continuar?')) return;
      E = nuevo;
      var base = estadoInicial();
      for (var k in base) if (!(k in E)) E[k] = base[k];
      guardar();
      alert('Listo. Tu progreso se ha recuperado.');
      alInicio();
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
    var temas = EPIGRAFES.filter(function (ep) {
      return normaliza(ep.titulo + ' ' + ep.resumen_md).indexOf(t) >= 0;
    }).slice(0, 12);
    var pregs = PREGUNTAS.filter(function (p) {
      return normaliza(p.enunciado + ' ' + p.opciones.join(' ') + ' ' + p.explicacion).indexOf(t) >= 0;
    }).slice(0, 25);

    if (!temas.length && !pregs.length) {
      res.appendChild(el('div', { class: 'vacio', text: 'Nada encontrado.' }));
      return;
    }
    if (temas.length) {
      res.appendChild(el('div', { class: 'seccion-tit', text: plural(temas.length, 'tema', 'temas') }));
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
      res.appendChild(el('div', { class: 'seccion-tit', text: plural(pregs.length, 'pregunta', 'preguntas') }));
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
    '**El logotipo** es marca registrada de Metro de Madrid, S.A. Aparece aquí porque esto es una herramienta privada de estudio, sin ánimo de lucro y sin relación con la empresa. Esta aplicación no está hecha, revisada ni respaldada por Metro de Madrid.\n\n' +
    '**Lo que las bases de 2026 NO dicen.** No fijan cuántas preguntas tiene el examen ni cuánto dura. La prueba de conocimientos se puntúa de 0 a 40 y hay que sacar al menos 20 para pasar; es eliminatoria. El simulacro de esta aplicación usa una estimación basada en convocatorias anteriores.'
  ) })]));

  c.appendChild(el('div', { class: 'card' }, [
    el('h3', { text: 'Enlaces oficiales' }),
    el('div', { class: 'lista' }, [
      el('a', { class: 'item', href: 'https://www.metromadrid.es/es/oferta-empleo/maquinista-de-traccion-electrica-y-jefea-de-sector-0',
        target: '_blank', rel: 'noopener' }, [
        el('span', { class: 'cod', text: '📄' }),
        el('span', { class: 'cuerpo' }, [el('b', { text: 'Bases y temario oficial' }), el('small', { text: 'metromadrid.es — oferta de empleo' })])
      ]),
      el('a', { class: 'item', href: 'https://www.bocm.es/boletin/CM_Orden_BOCM/2026/08/07/BOCM-20260807-5.PDF',
        target: '_blank', rel: 'noopener' }, [
        el('span', { class: 'cod', text: '⚖️' }),
        el('span', { class: 'cuerpo' }, [el('b', { text: 'Anuncio en el BOCM' }), el('small', { text: '7 de agosto de 2026 · 30 plazas' })])
      ])
    ])
  ]));

  c.appendChild(el('div', { class: 'card plano' }, [el('p', { class: 'fuente', style: 'margin:0',
    text: 'Contenido revisado el ' + (TEMARIO.fecha_revision || '—') + ' · versión ' + (TEMARIO.version_contenido || '—') +
          ' · ' + PREGUNTAS.length + ' preguntas · ' + EPIGRAFES.length + ' temas' })]));
}

/* ===================== PSICOTÉCNICOS =====================
   Todos los ejercicios se generan por algoritmo en el momento:
   son infinitos y la solución es comprobable por construcción.
   ======================================================== */

/* --- series numéricas --- */
function generaSerie() {
  var tipos = ['aritmetica', 'geometrica', 'alterna', 'cuadratica', 'fibonacci', 'multisuma'];
  var tipo = tipos[aleatorio(tipos.length)];
  var it = [], resp, exp, i;

  if (tipo === 'aritmetica') {
    var a = 2 + aleatorio(20), d = (2 + aleatorio(11)) * (Math.random() < .25 ? -1 : 1);
    for (i = 0; i < 6; i++) it.push(a + i * d);
    resp = a + 6 * d;
    exp = 'Cada término ' + (d > 0 ? 'suma ' + d : 'resta ' + Math.abs(d)) + ' al anterior.';
  } else if (tipo === 'geometrica') {
    var g = 1 + aleatorio(5), r = 2 + aleatorio(2);
    for (i = 0; i < 5; i++) it.push(g * Math.pow(r, i));
    resp = g * Math.pow(r, 5);
    exp = 'Cada término es el anterior multiplicado por ' + r + '.';
  } else if (tipo === 'alterna') {
    var a1 = 1 + aleatorio(15), d1 = 2 + aleatorio(7);
    var a2 = 40 + aleatorio(30), d2 = -(2 + aleatorio(6));
    for (i = 0; i < 3; i++) { it.push(a1 + i * d1); it.push(a2 + i * d2); }
    resp = a1 + 3 * d1;
    exp = 'Hay dos series entrelazadas. La de las posiciones impares suma ' + d1 +
          ' y la de las pares resta ' + Math.abs(d2) + '. Toca la primera.';
  } else if (tipo === 'cuadratica') {
    var b = 1 + aleatorio(9), d0 = 1 + aleatorio(5), e = 1 + aleatorio(4), v = b, dd = d0;
    for (i = 0; i < 6; i++) { it.push(v); v += dd; dd += e; }
    resp = v;
    exp = 'La diferencia entre términos no es fija: crece de ' + e + ' en ' + e + '.';
  } else if (tipo === 'fibonacci') {
    var x = 1 + aleatorio(6), y = 1 + aleatorio(8);
    it = [x, y];
    for (i = 0; i < 4; i++) it.push(it[it.length - 1] + it[it.length - 2]);
    resp = it[it.length - 1] + it[it.length - 2];
    exp = 'Cada término es la suma de los dos anteriores.';
  } else {
    var m = 2 + aleatorio(2), k = 1 + aleatorio(7), z = 1 + aleatorio(5);
    it = [z];
    for (i = 0; i < 5; i++) it.push(it[it.length - 1] * m + k);
    resp = it[it.length - 1] * m + k;
    exp = 'Cada término se multiplica por ' + m + ' y se le suma ' + k + '.';
  }

  var opciones = distractoresNumericos(resp, it);
  return { clase: 'serie', items: it, opciones: opciones.lista, correcta: opciones.idx,
           enunciado: '¿Qué número continúa la serie?', explicacion: exp + ' El resultado es ' + resp + '.' };
}
function distractoresNumericos(resp, serie) {
  var set = {}, out = [resp];
  set[resp] = 1;
  var ultimo = serie[serie.length - 1];
  var candidatos = [resp + 1, resp - 1, resp + 2, resp - 2, ultimo + (ultimo - serie[serie.length - 2]),
                    resp + Math.max(2, Math.round(Math.abs(resp) * .1)), resp - Math.max(2, Math.round(Math.abs(resp) * .1)),
                    resp + 5, resp - 5, resp * 2 - ultimo];
  baraja(candidatos).forEach(function (v) {
    v = Math.round(v);
    if (out.length < 4 && !set[v] && isFinite(v)) { set[v] = 1; out.push(v); }
  });
  var n = 10;
  while (out.length < 4) { if (!set[resp + n]) { set[resp + n] = 1; out.push(resp + n); } n += 3; }
  var mezcla = baraja(out);
  return { lista: mezcla.map(String), idx: mezcla.indexOf(resp) };
}

/* --- razonamiento verbal --- */
var SINONIMOS = [
  ['ávido', 'ansioso', ['austero', 'tardío', 'sereno']],
  ['efímero', 'pasajero', ['perpetuo', 'sólido', 'rotundo']],
  ['nimio', 'insignificante', ['enorme', 'urgente', 'ruidoso']],
  ['acervo', 'conjunto', ['aspereza', 'desprecio', 'penuria']],
  ['inocuo', 'inofensivo', ['contagioso', 'insípido', 'inaudito']],
  ['prolijo', 'detallado', ['escueto', 'confuso', 'torpe']],
  ['óbice', 'obstáculo', ['ayuda', 'permiso', 'tramo']],
  ['tácito', 'sobrentendido', ['expreso', 'ruidoso', 'dudoso']],
  ['zanjar', 'resolver', ['enredar', 'excavar', 'aplazar']],
  ['insigne', 'ilustre', ['anónimo', 'insulso', 'endeble']],
  ['aciago', 'desdichado', ['festivo', 'templado', 'previsible']],
  ['diáfano', 'transparente', ['turbio', 'rígido', 'estrecho']],
  ['exiguo', 'escaso', ['abundante', 'exacto', 'exigente']],
  ['perentorio', 'urgente', ['opcional', 'duradero', 'periódico']],
  ['soslayar', 'eludir', ['afrontar', 'sostener', 'señalar']],
  ['mermar', 'disminuir', ['ampliar', 'mezclar', 'reparar']],
  ['adusto', 'severo', ['afable', 'adulto', 'ágil']],
  ['fortuito', 'casual', ['premeditado', 'afortunado', 'forzoso']],
  ['ínfimo', 'mínimo', ['máximo', 'medio', 'infame']],
  ['conciso', 'breve', ['extenso', 'consciente', 'concreto']],
  ['irascible', 'colérico', ['pacífico', 'irónico', 'razonable']],
  ['veraz', 'verdadero', ['falaz', 'voraz', 'vertical']],
  ['pusilánime', 'cobarde', ['audaz', 'generoso', 'punzante']],
  ['albergar', 'alojar', ['expulsar', 'blanquear', 'anunciar']],
  ['baladí', 'trivial', ['crucial', 'balsámico', 'baldío']],
  ['contumaz', 'obstinado', ['dócil', 'contagioso', 'contiguo']],
  ['dirimir', 'zanjar', ['agravar', 'dirigir', 'derretir']],
  ['lacónico', 'parco', ['locuaz', 'lácteo', 'lóbrego']]
];
var ANTONIMOS = [
  ['prolijo', 'escueto', ['detallado', 'extenso', 'minucioso']],
  ['efímero', 'perdurable', ['fugaz', 'breve', 'pasajero']],
  ['ínfimo', 'máximo', ['mínimo', 'escaso', 'pequeño']],
  ['adusto', 'afable', ['severo', 'seco', 'huraño']],
  ['tácito', 'explícito', ['implícito', 'callado', 'supuesto']],
  ['exiguo', 'abundante', ['escaso', 'corto', 'raquítico']],
  ['pusilánime', 'audaz', ['cobarde', 'tímido', 'medroso']],
  ['diáfano', 'turbio', ['claro', 'nítido', 'limpio']],
  ['contumaz', 'dócil', ['terco', 'tenaz', 'porfiado']],
  ['veraz', 'mendaz', ['sincero', 'fiel', 'cierto']],
  ['nimio', 'trascendental', ['leve', 'menudo', 'trivial']],
  ['lacónico', 'locuaz', ['breve', 'conciso', 'sobrio']]
];
var ANALOGIAS = [
  ['maquinista', 'tren', 'piloto', 'avión', ['aeropuerto', 'billete', 'azafata']],
  ['andén', 'estación', 'muelle', 'puerto', ['barco', 'marinero', 'ancla']],
  ['semáforo', 'circulación', 'señal', 'ferrocarril', ['vagón', 'túnel', 'raíl']],
  ['carril', 'vía', 'peldaño', 'escalera', ['ascensor', 'subida', 'pasamanos']],
  ['freno', 'detener', 'acelerador', 'arrancar', ['motor', 'volante', 'rueda']],
  ['médico', 'hospital', 'profesor', 'colegio', ['alumno', 'libro', 'examen']],
  ['reloj', 'tiempo', 'termómetro', 'temperatura', ['fiebre', 'grados', 'calor']],
  ['agua', 'sed', 'comida', 'hambre', ['plato', 'cocina', 'sabor']],
  ['llave', 'cerradura', 'contraseña', 'cuenta', ['ordenador', 'usuario', 'correo']],
  ['libro', 'capítulo', 'edificio', 'planta', ['ladrillo', 'arquitecto', 'ciudad']],
  ['abeja', 'colmena', 'hormiga', 'hormiguero', ['reina', 'miel', 'insecto']],
  ['tijera', 'cortar', 'martillo', 'clavar', ['clavo', 'madera', 'golpe']]
];

function generaVerbal() {
  var r = Math.random();
  if (r < 0.4) {
    var s = SINONIMOS[aleatorio(SINONIMOS.length)];
    return montaVerbal('¿Cuál es el sinónimo de «' + s[0] + '»?', s[1], s[2],
      '«' + s[0] + '» significa lo mismo que «' + s[1] + '».');
  } else if (r < 0.7) {
    var a = ANTONIMOS[aleatorio(ANTONIMOS.length)];
    return montaVerbal('¿Cuál es el antónimo de «' + a[0] + '»?', a[1], a[2],
      'El contrario de «' + a[0] + '» es «' + a[1] + '». Los demás son sinónimos suyos, no antónimos.');
  }
  var g = ANALOGIAS[aleatorio(ANALOGIAS.length)];
  return montaVerbal(g[0] + ' es a ' + g[1] + ' como ' + g[2] + ' es a…', g[3], g[4],
    'La relación es la misma en los dos pares: ' + g[0] + '/' + g[1] + ' y ' + g[2] + '/' + g[3] + '.');
}
function montaVerbal(enunciado, correcta, malas, exp) {
  var ops = baraja([correcta].concat(malas.slice(0, 3)));
  return { clase: 'verbal', enunciado: enunciado, opciones: ops, correcta: ops.indexOf(correcta), explicacion: exp };
}

/* --- razonamiento espacial: rotación de figuras --- */
var N = 3;
function claveCeldas(cs) { return cs.map(function (c) { return c[0] + ',' + c[1]; }).sort().join('|'); }
function rota(cs) { return cs.map(function (c) { return [c[1], N - 1 - c[0]]; }); }
function espeja(cs) { return cs.map(function (c) { return [c[0], N - 1 - c[1]]; }); }
function rotaN(cs, k) { var r = cs; for (var i = 0; i < k; i++) r = rota(r); return r; }

function generaEspacial() {
  var base, intentos = 0;
  do {
    base = [];
    var todas = [];
    for (var r = 0; r < N; r++) for (var c = 0; c < N; c++) todas.push([r, c]);
    base = baraja(todas).slice(0, 4 + aleatorio(2));
    intentos++;
  } while (intentos < 60 && (
    claveCeldas(base) === claveCeldas(rota(base)) ||
    claveCeldas(base) === claveCeldas(rotaN(base, 2)) ||
    claveCeldas(base) === claveCeldas(espeja(base))
  ));

  var giros = [1, 2, 3];
  var k = giros[aleatorio(giros.length)];
  var nombre = { 1: '90° a la derecha', 2: '180°', 3: '90° a la izquierda' }[k];
  var correcta = rotaN(base, k);

  var candidatos = [espeja(correcta), rota(correcta), rotaN(correcta, 2), espeja(rota(correcta))];
  var usados = {};
  usados[claveCeldas(correcta)] = 1;
  usados[claveCeldas(base)] = 1;   // nunca ofrecer la figura original sin girar
  var malas = [];
  candidatos.forEach(function (c) {
    var cl = claveCeldas(c);
    if (malas.length < 3 && !usados[cl]) { usados[cl] = 1; malas.push(c); }
  });
  var seguridad = 0;
  while (malas.length < 3 && seguridad++ < 80) {
    var m = correcta.slice();
    m[aleatorio(m.length)] = [aleatorio(N), aleatorio(N)];
    var claves = {}; var limpio = m.filter(function (x) { var c = x[0] + ',' + x[1]; if (claves[c]) return false; claves[c] = 1; return true; });
    var cl2 = claveCeldas(limpio);
    if (!usados[cl2] && limpio.length === correcta.length) { usados[cl2] = 1; malas.push(limpio); }
  }

  var ops = baraja([correcta].concat(malas));
  return { clase: 'espacial', figuraBase: base,
    enunciado: '¿Cuál de estas figuras es la de arriba girada ' + nombre + '?',
    opcionesFig: ops, correcta: ops.indexOf(correcta),
    explicacion: 'Al girar ' + nombre + ', cada casilla se desplaza manteniendo su posición relativa. ' +
      'Los distractores son la figura reflejada como en un espejo, o girada un número distinto de veces: ' +
      'fíjate siempre en una casilla de referencia, por ejemplo la de una esquina.' };
}
function svgFigura(celdas, tam) {
  tam = tam || 96;
  var p = tam / N, out = '';
  for (var r = 0; r < N; r++) for (var c = 0; c < N; c++) {
    out += '<rect x="' + (c * p) + '" y="' + (r * p) + '" width="' + p + '" height="' + p +
           '" fill="none" stroke="var(--border)" stroke-width="1"/>';
  }
  celdas.forEach(function (cel) {
    out += '<rect x="' + (cel[1] * p + 2) + '" y="' + (cel[0] * p + 2) + '" width="' + (p - 4) +
           '" height="' + (p - 4) + '" rx="3" fill="var(--accent)"/>';
  });
  return '<svg viewBox="0 0 ' + tam + ' ' + tam + '" width="' + tam + '" height="' + tam +
         '" role="img" aria-label="figura">' + out + '</svg>';
}

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
  c.appendChild(el('h3', { text: '¿Cuántos ejercicios?' }));
  var fila = el('div', { class: 'fila' });
  c.appendChild(fila);
  c.appendChild(el('p', { class: 'fuente', style: 'margin-top:18px',
    text: 'Va cronometrado: en el examen el tiempo aprieta, así que conviene acostumbrarse.' }));

  var cantidad = 10;
  function refrescar() {
    fila.innerHTML = '';
    [10, 20, 30].forEach(function (n) {
      fila.appendChild(el('button', { class: 'btn' + (n === cantidad ? ' primario' : ''),
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
  var total = a.n, i = 0, aciertos = 0, inicio = Date.now(), ejercicio = null;
  var cabecera = el('div', { class: 'contador' });
  var barra = el('div', { class: 'barra' }, [el('i')]);
  var zona = el('div');
  c.appendChild(cabecera); c.appendChild(barra); c.appendChild(zona);

  var reloj = setInterval(function () {
    if (!document.body.contains(zona)) { clearInterval(reloj); return; }
    var cr = $('#crono'); if (cr) cr.textContent = '⏱ ' + mmss(Math.floor((Date.now() - inicio) / 1000));
  }, 1000);

  function genera() {
    if (a.tipo.id === 'serie') return generaSerie();
    if (a.tipo.id === 'verbal') return generaVerbal();
    if (a.tipo.id === 'espacial') return generaEspacial();
    var r = Math.random();
    return r < .34 ? generaSerie() : (r < .67 ? generaVerbal() : generaEspacial());
  }

  function dibujar() {
    if (i >= total) { clearInterval(reloj); return fin(); }
    ejercicio = genera();
    zona.innerHTML = ''; cabecera.innerHTML = '';
    cabecera.appendChild(el('span', { text: 'Ejercicio ' + (i + 1) + ' de ' + total }));
    cabecera.appendChild(el('span', { class: 'crono', id: 'crono', text: '⏱ ' + mmss(Math.floor((Date.now() - inicio) / 1000)) }));
    $('i', barra).style.width = ((i / total) * 100).toFixed(1) + '%';

    var card = el('div', { class: 'card' });
    card.appendChild(el('div', { class: 'enunciado', text: ejercicio.enunciado }));

    if (ejercicio.clase === 'serie') {
      var s = el('div', { class: 'serie' });
      ejercicio.items.forEach(function (v) { s.appendChild(el('span', { text: String(v) })); });
      s.appendChild(el('span', { class: 'hueco', text: '?' }));
      card.appendChild(s);
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

    function elegir(idx) {
      var ok = idx === ejercicio.correcta;
      if (ok) aciertos++;
      var st = E.psico[a.tipo.id] || { hechos: 0, aciertos: 0 };
      st.hechos++; if (ok) st.aciertos++;
      E.psico[a.tipo.id] = st;
      tocarRacha(); guardar();

      botones.forEach(function (b, k) {
        b.disabled = true;
        if (k === ejercicio.correcta) b.classList.add('correcta');
        else if (k === idx) b.classList.add('fallada');
      });
      botones[idx].classList.add(ok ? 'anim-ok' : 'anim-err');

      var fb = el('div', { class: 'feedback ' + (ok ? 'bien' : 'mal') });
      fb.appendChild(el('div', { class: 'cab', text: ok ? '✓ Correcto' : '✗ Incorrecto' }));
      fb.appendChild(el('div', { class: 'exp', text: ejercicio.explicacion }));
      card.appendChild(fb);

      var seguir = el('button', { class: 'btn primario', style: 'margin-top:16px',
        onclick: function () { i++; dibujar(); } }, [i === total - 1 ? 'Ver el resultado' : 'Siguiente']);
      zona.appendChild(seguir);
      seguir.focus({ preventScroll: true });
      teclado = { seguir: function () { i++; dibujar(); return true; } };
    }
  }

  function fin() {
    var seg = Math.floor((Date.now() - inicio) / 1000);
    var pct = Math.round((aciertos / total) * 100);
    zona.innerHTML = ''; cabecera.innerHTML = ''; $('i', barra).style.width = '100%';
    zona.appendChild(el('div', { class: 'card' }, [
      el('div', { class: 'nota' }, [
        el('div', { class: 'valor ' + (pct >= 60 ? 'bien' : 'mal'), text: aciertos + '/' + total }),
        el('div', { class: 'sub', text: pct + '% · ' + mmss(seg) + ' · ' + Math.round(seg / total) + ' s por ejercicio' })
      ])
    ]));
    var f = el('div', { class: 'fila' });
    f.appendChild(el('button', { class: 'btn primario', onclick: function () {
      reemplazar(pPsicoSesion, a.tipo.tit, { tipo: a.tipo, n: total }); } }, ['Otra tanda']));
    f.appendChild(el('button', { class: 'btn', onclick: alInicio }, ['Volver al inicio']));
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
  b.textContent = oscuro ? '☀️' : '🌙';
  b.title = oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
}

/* ===================== arranque ===================== */
cargar();
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
$('#marca').innerHTML = logoMetro(26);
$('#btn-atras').addEventListener('click', atras);
$('#btn-buscar').addEventListener('click', function () {
  var actual = pila[pila.length - 1];
  if (actual.fn === pBuscador) return;
  ir(pBuscador, 'Buscar');
});

pila = [{ fn: pInicio, titulo: 'Oposición Metro', args: {} }];
pintar();

})();
