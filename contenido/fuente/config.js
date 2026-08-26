'use strict';

/* Metadatos que no pertenecen a una parte concreta del temario. */
module.exports = {
  temario: {
    _comentario: "Estructura de datos generada. Edita contenido/fuente/config.js y parte-1.js … parte-7.js, y ejecuta _fusionar.js.",
    _comentario_usuario: "Cambia usuario.nombre para personalizar los saludos. Déjalo vacío para no usar nombre.",
    version_contenido: '0.2.0',
    fecha_revision: '2026-08-27',
    usuario: { nombre: 'Andrei' },
    examen: {
      _comentario: "Las bases de 2026 NO fijan número de preguntas ni duración. Son una estimación basada en convocatorias anteriores; actualízalos aquí cuando Metro publique el formato real.",
      preguntas_simulacro: 80,
      minutos_simulacro: 90,
      umbral_aprobado_porcentaje: 50,
      formato_confirmado: false
    }
  },
  banco: {
    _comentario: "Banco generado desde contenido/fuente/parte-1.js … parte-7.js. Ninguna pregunta se publica sin fuente oficial.",
    version_contenido: '0.2.0'
  }
};
