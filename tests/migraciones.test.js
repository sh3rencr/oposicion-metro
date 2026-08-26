#!/usr/bin/env node
'use strict';

const crear = require('../contenido/fuente/_util.js');
const legacyPreguntas = require('../contenido/fuente/legacy-ids.json');
const legacyFichas = require('../contenido/fuente/legacy-fichas.json');
const temario = require('../contenido/temario.json');
const preguntas = require('../contenido/preguntas.json').preguntas;

function exigir(condicion, mensaje) { if (!condicion) throw new Error(mensaje); }
function hashTexto(texto) {
  let h = 2166136261;
  for (let i = 0; i < texto.length; i++) { h ^= texto.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ('00000000' + (h >>> 0).toString(16)).slice(-8);
}

const porId = Object.fromEntries(preguntas.map(p => [p.id, p]));
for (const [id, antiguo] of Object.entries(legacyPreguntas)) {
  exigir(porId[id] && porId[id].legacy_id === antiguo, `Migración de pregunta rota: ${antiguo} → ${id}`);
}

const fichasActuales = new Set();
for (const parte of temario.partes) for (const ep of parte.epigrafes) for (const f of ep.fichas || []) {
  fichasActuales.add(`${ep.id}#f-${f.id || hashTexto(ep.id + '\n' + f.anverso)}`);
}
for (const id of Object.keys(legacyFichas)) exigir(fichasActuales.has(id), `Migración de ficha rota: ${id}`);

// Simula insertar una pregunta delante de una ya publicada: la nueva no debe
// apropiarse del id posicional antiguo y la existente debe conservarlo.
const util = crear('https://www.metromadrid.es/sites/default/files/empleo/descargables/1._Conocimientos_espec%C3%ADficos_sobre_Metro_de_Madrid.pdf', 'Manual 1');
util.q('1.1', 1, 'Pregunta nueva insertada antes', ['A', 'B', 'C', 'D'], 0, 'Prueba', 1);
util.q('1.1', 1, 'Metro de Madrid, S.A. es:', ['A', 'B', 'C', 'D'], 0, 'Prueba', 7);
exigir(util.preguntas[0].legacy_id === undefined, 'Una pregunta nueva ha heredado un id antiguo.');
exigir(util.preguntas[1].legacy_id === 'p-1.1-01', 'Insertar una pregunta ha desplazado el id antiguo.');

const posiciones = [0, 0, 0, 0];
preguntas.forEach(p => posiciones[p.correcta]++);
exigir(Math.max(...posiciones) / preguntas.length < .35,
  `Las respuestas correctas vuelven a estar sesgadas por posición: ${posiciones.join('/')}`);

console.log(`✔ ${Object.keys(legacyPreguntas).length} preguntas y ${Object.keys(legacyFichas).length} fichas migrables; posiciones ${posiciones.join('/')}.`);
