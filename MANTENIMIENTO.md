# Mantenimiento (para ti)

## Cómo se construye

```bash
cd ~/Code/oposicion-metro
node build.js
```

Genera:

- `dist/Oposicion-Metro/` → lo que le pasas a él (doble clic en `EMPEZAR-AQUI.html`).
- `dist/web/` → lo que subes a Netlify o GitHub Pages (ver `PUBLICAR.md`).

**Él nunca ejecuta esto.** Solo abre el HTML.

## De dónde sale el contenido

`temario.json` y `preguntas.json` **se generan**. Las fuentes reales son los ficheros por parte:

```
contenido/fuente/
├── config.js      ← nombre de usuario, revisión y formato del examen
├── legacy-ids.json ← mapa congelado para migrar el progreso de la versión antigua
├── legacy-fichas.json ← el mismo mapa congelado para las fichas antiguas
├── _util.js       ← helpers compartidos (tema, q, ids estables)
├── parte-1.js  …  parte-7.js
└── _fusionar.js   ← funde las partes en temario.json y preguntas.json
```

Para tocar contenido, edita el `parte-N.js` correspondiente y ejecuta:

```bash
node contenido/fuente/_fusionar.js      # todas las partes
node contenido/fuente/_fusionar.js 3    # solo la parte 3
node tests/psicotecnicos.test.js 300000 # 900.000 ejercicios generados
node tests/migraciones.test.js           # ids antiguos y posiciones de respuesta
node build.js
```

Los ids se generan de forma estable a partir del epígrafe y el enunciado. Insertar una pregunta
en medio ya no renumera las siguientes. `legacy-ids.json` congela los identificadores posicionales
de la primera versión para migrar el progreso existente: no asignes uno a preguntas nuevas ni
recalcules ese fichero por orden. `legacy-fichas.json` cumple la misma función para las fichas.

Si vas a cambiar de forma importante el enunciado de una pregunta ya publicada, pasa
`{ id: 'su-id-actual' }` como último argumento de `q(...)`. Así la corrección editorial tampoco
creará una tarjeta nueva en el repaso espaciado.

Si cambias el anverso de una ficha publicada, añade a su objeto `id: 'xxxxxxxx'`, usando los
ocho caracteres que aparecen después de `#f-` en `legacy-fichas.json`. El reverso puede editarse
sin hacer nada especial.

## Cómo añadir preguntas

Edita siempre el `contenido/fuente/parte-N.js` correspondiente. Los JSON se sobrescriben la
próxima vez que se ejecuta el fusionador y no son una fuente editable.

```json
{
  "id": "p-2.4-a1b2c3d4",
  "legacy_id": "p-2.4-03",
  "epigrafe": "1.2",
  "dificultad": 2,
  "enunciado": "…",
  "opciones": ["…", "…", "…", "…"],
  "correcta": 0,
  "explicacion": "Por qué la correcta lo es, y por qué las otras no.",
  "fuente": "https://…pdf#page=18",
  "fuente_texto": "Manual 1 · Conocimientos específicos · pág. 18",
  "volatil": false,
  "fecha_dato": "2026-07"
}
```

`build.js` **se niega a construir** si una pregunta no tiene `fuente`, si el `epigrafe`
no existe, si no hay exactamente 4 opciones distintas, si `correcta` está fuera de rango,
si el `id` está repetido, o si algo marcado `volatil` no lleva `fecha_dato`.

## Cómo añadir temas

Edita el `contenido/fuente/parte-N.js` correspondiente. Cada epígrafe necesita `id`, `titulo`,
`resumen_md`, `fichas` y `fuentes` (obligatorio).

## Cómo cambiar el formato del simulacro

En `contenido/fuente/config.js`, bloque `examen`. Cuando Metro publique el número real de
preguntas y la duración, cámbialos ahí y pon `"formato_confirmado": true`: eso quita
automáticamente los avisos de "cifra estimada" de toda la app.

## Estructura

```
oposicion-metro/
├── build.js              ← el único script; genera dist/
├── src/
│   ├── plantilla.html    ← HTML + CSS
│   ├── app.js            ← interfaz, progreso y sesiones
│   ├── psicotecnicos.js  ← generadores puros y comprobables con Node
│   └── LEEME.txt         ← lo que él lee
├── contenido/            ← los datos; es lo único que hay que tocar para añadir temario
│   ├── fuente/           ← fuentes editables y configuración
│   ├── temario.json
│   ├── preguntas.json
│   └── FUENTES.md        ← mapa de fuentes y lagunas conocidas
├── fuentes-oficiales/    ← los 7 PDF de Metro + el BOCM + su texto extraído (no se publica)
└── dist/                 ← generado; no lo edites a mano
```
