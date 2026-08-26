'use strict';

/*
 * Motor puro de psicotécnicos. No toca el DOM ni el progreso: recibe las tres
 * utilidades que necesita y por eso puede probarse directamente con Node.
 */
function crearMotorPsicotecnico(baraja, aleatorio, escapar) {
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
             enunciado: '¿Qué número continúa la serie?', explicacion: exp + ' El resultado es ' + resp + '.',
             respuesta: String(resp) };
  }

  function distractoresNumericos(resp, serie) {
    var vistos = {}, out = [resp];
    vistos[resp] = 1;
    var ultimo = serie[serie.length - 1];
    var candidatos = [resp + 1, resp - 1, resp + 2, resp - 2, ultimo + (ultimo - serie[serie.length - 2]),
      resp + Math.max(2, Math.round(Math.abs(resp) * .1)), resp - Math.max(2, Math.round(Math.abs(resp) * .1)),
      resp + 5, resp - 5, resp * 2 - ultimo];
    baraja(candidatos).forEach(function (v) {
      v = Math.round(v);
      if (out.length < 4 && !vistos[v] && isFinite(v)) { vistos[v] = 1; out.push(v); }
    });
    var n = 10;
    while (out.length < 4) {
      if (!vistos[resp + n]) { vistos[resp + n] = 1; out.push(resp + n); }
      n += 3;
    }
    var mezcla = baraja(out);
    return { lista: mezcla.map(String), idx: mezcla.indexOf(resp) };
  }

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
    ['freno', 'detener', 'acelerador', 'acelerar', ['arrancar', 'motor', 'rueda']],
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
    return { clase: 'verbal', enunciado: enunciado, opciones: ops,
      correcta: ops.indexOf(correcta), explicacion: exp, respuesta: correcta };
  }

  var N = 3;
  function claveCeldas(cs) { return cs.map(function (c) { return c[0] + ',' + c[1]; }).sort().join('|'); }
  function rota(cs) { return cs.map(function (c) { return [c[1], N - 1 - c[0]]; }); }
  function espeja(cs) { return cs.map(function (c) { return [c[0], N - 1 - c[1]]; }); }
  function rotaN(cs, k) { var r = cs; for (var i = 0; i < k; i++) r = rota(r); return r; }
  function transformacionesUnicas(cs) {
    var vistas = {}, out = [];
    [rotaN(cs, 0), rotaN(cs, 1), rotaN(cs, 2), rotaN(cs, 3),
     espeja(cs), rota(espeja(cs)), rotaN(espeja(cs), 2), rotaN(espeja(cs), 3)]
      .forEach(function (fig) {
        var cl = claveCeldas(fig);
        if (!vistas[cl]) { vistas[cl] = true; out.push(fig); }
      });
    return out;
  }
  function basesEspacialesValidas() {
    var celdas = [];
    for (var r = 0; r < N; r++) for (var c = 0; c < N; c++) celdas.push([r, c]);
    var out = [];
    function combinar(desde, quedan, actual) {
      if (!quedan) {
        if (transformacionesUnicas(actual).length === 8) out.push(actual.map(function (c) { return c.slice(); }));
        return;
      }
      for (var i = desde; i <= celdas.length - quedan; i++) combinar(i + 1, quedan - 1, actual.concat([celdas[i]]));
    }
    combinar(0, 4, []); combinar(0, 5, []);
    return out;
  }
  var basesEspaciales = basesEspacialesValidas();

  function generaEspacial() {
    var base = basesEspaciales[aleatorio(basesEspaciales.length)].map(function (c) { return c.slice(); });
    var giros = [1, 2, 3], k = giros[aleatorio(giros.length)];
    var nombre = { 1: '90° a la derecha', 2: '180°', 3: '90° a la izquierda' }[k];
    var correcta = rotaN(base, k), claveCorrecta = claveCeldas(correcta);
    var malas = baraja(transformacionesUnicas(base).filter(function (fig) {
      return claveCeldas(fig) !== claveCorrecta;
    })).slice(0, 3);
    var ops = baraja([correcta].concat(malas));
    return { clase: 'espacial', figuraBase: base,
      enunciado: '¿Cuál de estas figuras es la de arriba girada ' + nombre + '?',
      opcionesFig: ops, correcta: ops.indexOf(correcta),
      explicacion: 'Al girar ' + nombre + ', cada casilla se desplaza manteniendo su posición relativa. ' +
        'Los distractores son la figura reflejada como en un espejo o transformada de otra manera: ' +
        'fíjate siempre en una casilla de referencia, por ejemplo la de una esquina.' };
  }

  function descripcionFigura(celdas) {
    return 'Figura con casillas ocupadas en ' + celdas.slice().sort(function (a, b) {
      return a[0] - b[0] || a[1] - b[1];
    }).map(function (c) { return 'fila ' + (c[0] + 1) + ', columna ' + (c[1] + 1); }).join('; ');
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
      '" role="img" aria-label="' + escapar(descripcionFigura(celdas)) + '">' + out + '</svg>';
  }

  return {
    generaSerie: generaSerie, generaVerbal: generaVerbal, generaEspacial: generaEspacial,
    claveCeldas: claveCeldas, rotaN: rotaN, transformacionesUnicas: transformacionesUnicas,
    svgFigura: svgFigura, basesEspaciales: basesEspaciales
  };
}

if (typeof module !== 'undefined' && module.exports) module.exports = crearMotorPsicotecnico;
