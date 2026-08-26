/* Utilidades compartidas por los ficheros de parte. */
module.exports = function crear(urlManual, etiquetaManual) {
  const cuenta = {};
  const epigrafes = [], preguntas = [];
  const url = p => urlManual + '#page=' + p;
  const txt = p => etiquetaManual + ' · pág. ' + p;
  return {
    epigrafes, preguntas,
    tema(id, titulo, resumen, fichas, pags, figuras) {
      const e = { id, titulo, resumen_md: resumen, fichas, fuentes: pags.map(url) };
      if (figuras && figuras.length) e.figuras = figuras;
      epigrafes.push(e);
    },
    q(ep, dif, enunciado, opciones, correcta, explicacion, pag, extra) {
      extra = extra || {};
      cuenta[ep] = (cuenta[ep] || 0) + 1;
      preguntas.push({
        id: 'p-' + ep + '-' + String(cuenta[ep]).padStart(2, '0'),
        epigrafe: ep, dificultad: dif, enunciado, opciones, correcta, explicacion,
        fuente: url(pag), fuente_texto: txt(pag) + (extra.pag2 ? '-' + extra.pag2 : ''),
        volatil: !!extra.volatil, fecha_dato: extra.fecha || '2026-07'
      });
    }
  };
};
