#!/usr/bin/env node
'use strict';

const crearMotor = require('../src/psicotecnicos.js');

function baraja(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function aleatorio(n) { return Math.floor(Math.random() * n); }
function escapar(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
function exigir(condicion, mensaje) { if (!condicion) throw new Error(mensaje); }
function cuatroDistintas(opciones) {
  return opciones.length === 4 && new Set(opciones.map(String)).size === 4;
}

const motor = crearMotor(baraja, aleatorio, escapar);
const casos = Math.min(300000, Math.max(1, Number(process.argv[2]) || 100000));
exigir(motor.basesEspaciales.length === 160,
  `Se esperaban 160 bases espaciales asimétricas y hay ${motor.basesEspaciales.length}.`);

for (let i = 0; i < casos; i++) {
  const serie = motor.generaSerie();
  exigir(cuatroDistintas(serie.opciones), `Serie ${i}: las opciones no son cuatro distintas.`);
  exigir(serie.correcta >= 0 && serie.correcta < 4, `Serie ${i}: índice correcto fuera de rango.`);
  exigir(serie.opciones[serie.correcta] === serie.respuesta, `Serie ${i}: la respuesta construida no está marcada.`);

  const verbal = motor.generaVerbal();
  exigir(cuatroDistintas(verbal.opciones), `Verbal ${i}: las opciones no son cuatro distintas.`);
  exigir(verbal.correcta >= 0 && verbal.correcta < 4, `Verbal ${i}: índice correcto fuera de rango.`);
  exigir(verbal.opciones[verbal.correcta] === verbal.respuesta, `Verbal ${i}: la respuesta construida no está marcada.`);

  const espacial = motor.generaEspacial();
  const claves = espacial.opcionesFig.map(motor.claveCeldas);
  exigir(claves.length === 4 && new Set(claves).size === 4,
    `Espacial ${i}: las opciones no son cuatro figuras distintas.`);
  exigir(espacial.correcta >= 0 && espacial.correcta < 4, `Espacial ${i}: índice correcto fuera de rango.`);
  const giros = espacial.enunciado.includes('180') ? 2 : (espacial.enunciado.includes('izquierda') ? 3 : 1);
  const esperada = motor.claveCeldas(motor.rotaN(espacial.figuraBase, giros));
  exigir(motor.claveCeldas(espacial.opcionesFig[espacial.correcta]) === esperada,
    `Espacial ${i}: la opción marcada no es el giro pedido.`);
  const orbita = motor.transformacionesUnicas(espacial.figuraBase).map(motor.claveCeldas);
  exigir(claves.every(clave => orbita.includes(clave)),
    `Espacial ${i}: hay un distractor que no conserva la figura.`);
}

console.log(`✔ ${casos * 3} psicotécnicos generados sin casos degenerados.`);
