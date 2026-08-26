/* Criterio ÚNICO de dificultad, aplicado por _fusionar.js a todas las preguntas.
   Se calcula, no se escribe a mano: así todas las partes usan la misma vara de medir.

     Nivel 1 — DEFINICIONES.      Se responde entendiendo el concepto.
     Nivel 2 — DATOS CONCRETOS.   Exige recordar un hecho: un nombre, una competencia, un lugar.
     Nivel 3 — CIFRAS Y MATICES.  Exige una cifra, un plazo o una medida, o distinguir entre
                                  opciones casi idénticas.                                    */
'use strict';

const MAGNITUD = new RegExp(
  '\\b\\d[\\d.,]*\\s*(km/h|km|metros?|m\\b|cm|mm|€|euros?|%|horas?|h\\b|minutos?|min\\b|segundos?|s\\b|d[ií]as?|a[ñn]os?|puntos?|V\\b|voltios?|vocales|trabajadores|plazas)'
  + '|^\\s*\\d[\\d.,]*\\s*$'
  + '|^\\s*\\d+\\s*y\\s*\\d+\\s*$'
  + '|\\bde\\s+\\d{4}\\b', 'i');

const DEFINICION = /¿qu[eé] (es|son|significa)|se define como|se denomina|se entiende por|consiste en|\bes,? seg[uú]n\b|^[^¿]{0,60}\bes:\s*$|se considera[nb]?\b/i;

function similitud(ops) {
  const tok = ops.map(o => new Set(
    o.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
     .replace(/[^\wáéíóúñ\s]/g, ' ').split(/\s+/).filter(w => w.length > 3)));
  let suma = 0, n = 0;
  for (let i = 0; i < tok.length; i++) for (let j = i + 1; j < tok.length; j++) {
    const a = tok[i], b = tok[j];
    const inter = [...a].filter(x => b.has(x)).length;
    suma += inter / (new Set([...a, ...b]).size || 1); n++;
  }
  return n ? suma / n : 0;
}

module.exports = function dificultad(p) {
  if (MAGNITUD.test(p.opciones[p.correcta])) return 3;
  const s = similitud(p.opciones);
  if (s >= 0.34) return 3;
  if (DEFINICION.test(p.enunciado) && s <= 0.12) return 1;
  return 2;
};
