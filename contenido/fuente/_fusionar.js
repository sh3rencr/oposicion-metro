#!/usr/bin/env node
/* Funde los ficheros de parte (contenido/fuente/parte-N.js) en temario.json y preguntas.json.
   Uso: node contenido/fuente/_fusionar.js            (todas las partes)
        node contenido/fuente/_fusionar.js 1 7        (solo esas)                              */
'use strict';
const fs = require('fs'), path = require('path');
const dificultad = require('./_dificultad.js');
const AQUI = __dirname, CONT = path.join(AQUI, '..');

const pedidas = process.argv.slice(2);
const ficheros = fs.readdirSync(AQUI).filter(f => /^parte-\d+\.js$/.test(f))
  .filter(f => !pedidas.length || pedidas.includes(f.match(/\d+/)[0]))
  .sort((a, b) => (+a.match(/\d+/)[0]) - (+b.match(/\d+/)[0]));

const temario = JSON.parse(fs.readFileSync(path.join(CONT, 'temario.json'), 'utf8'));
const banco = JSON.parse(fs.readFileSync(path.join(CONT, 'preguntas.json'), 'utf8'));

for (const f of ficheros) {
  const mod = require(path.join(AQUI, f));
  const i = temario.partes.findIndex(p => p.parte === mod.parte.parte);
  if (i >= 0) temario.partes[i] = mod.parte; else temario.partes.push(mod.parte);
  const ids = new Set(mod.parte.epigrafes.map(e => e.id));
  banco.preguntas = banco.preguntas.filter(q => !ids.has(q.epigrafe)).concat(mod.preguntas);
  console.log(`  ${f}: ${mod.parte.epigrafes.length} temas, ${mod.preguntas.length} preguntas`);
}

// La dificultad se recalcula siempre con el criterio único de _dificultad.js
let recalculadas = 0;
banco.preguntas.forEach(p => { const n = dificultad(p); if (n !== p.dificultad) recalculadas++; p.dificultad = n; });
const rep = { 1: 0, 2: 0, 3: 0 };
banco.preguntas.forEach(p => rep[p.dificultad]++);
console.log(`\nDificultad recalculada en ${recalculadas} preguntas — nivel 1: ${rep[1]} · nivel 2: ${rep[2]} · nivel 3: ${rep[3]}`);

temario.partes.sort((a, b) => (+a.parte) - (+b.parte));
banco.preguntas.sort((a, b) => a.id.localeCompare(b.id, 'es', { numeric: true }));

fs.writeFileSync(path.join(CONT, 'temario.json'), JSON.stringify(temario, null, 2) + '\n');
fs.writeFileSync(path.join(CONT, 'preguntas.json'), JSON.stringify(banco, null, 2) + '\n');
console.log(`\nTotal: ${temario.partes.length} partes · ` +
  `${temario.partes.reduce((a, p) => a + p.epigrafes.length, 0)} temas · ${banco.preguntas.length} preguntas`);
