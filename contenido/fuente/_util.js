/* Utilidades compartidas por los ficheros de parte. */
const legacyPorId = require('./legacy-ids.json');

module.exports = function crear(urlManual, etiquetaManual) {
  const epigrafes = [], preguntas = [];
  const url = p => urlManual + '#page=' + p;
  const txt = p => etiquetaManual + ' · pág. ' + p;
  const hash = texto => {
    let h = 2166136261;
    for (let i = 0; i < texto.length; i++) {
      h ^= texto.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return ('00000000' + (h >>> 0).toString(16)).slice(-8);
  };
  return {
    epigrafes, preguntas,
    tema(id, titulo, resumen, fichas, pags, figuras, notaNormativa) {
      const e = { id, titulo, resumen_md: resumen, fichas, fuentes: pags.map(url) };
      if (figuras && figuras.length) e.figuras = figuras;
      if (notaNormativa) e.nota_normativa = notaNormativa;
      epigrafes.push(e);
    },
    q(ep, dif, enunciado, opciones, correcta, explicacion, pag, extra) {
      extra = extra || {};
      const id = extra.id || 'p-' + ep + '-' + hash(ep + '\n' + enunciado);
      const giro = parseInt(hash(id + '\nopciones'), 16) % opciones.length;
      const opcionesOrdenadas = opciones.slice(giro).concat(opciones.slice(0, giro));
      const pregunta = {
        id,
        epigrafe: ep, dificultad: dif, enunciado, opciones: opcionesOrdenadas,
        correcta: (correcta - giro + opciones.length) % opciones.length, explicacion,
        fuente: url(pag), fuente_texto: txt(pag) + (extra.pag2 ? '-' + extra.pag2 : ''),
        volatil: !!extra.volatil, fecha_dato: extra.fecha || '2026-07'
      };
      if (legacyPorId[id]) pregunta.legacy_id = legacyPorId[id];
      preguntas.push(pregunta);
    }
  };
};
