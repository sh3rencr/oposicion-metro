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
├── _util.js       ← helpers compartidos (tema, q, numeración de ids)
├── parte-1.js  …  parte-7.js
└── _fusionar.js   ← funde las partes en temario.json y preguntas.json
```

Para tocar contenido, edita el `parte-N.js` correspondiente y ejecuta:

```bash
node contenido/fuente/_fusionar.js      # todas las partes
node contenido/fuente/_fusionar.js 3    # solo la parte 3
node build.js
```

Los ids de pregunta son `p-<epígrafe>-<nn>` y se numeran por orden dentro de cada epígrafe.
**Añade siempre al final del epígrafe**: si insertas una pregunta en medio, se renumeran las
siguientes y Andrei pierde el progreso de repaso espaciado de esas preguntas.

## Cómo añadir preguntas a mano

También puedes editar `contenido/preguntas.json` directamente, pero se sobrescribirá la próxima
vez que ejecutes el fusionador. Para cambios que quieras conservar, usa los ficheros de parte.

```json
{
  "id": "p-013",
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

Edita `contenido/temario.json`. Cada epígrafe necesita `id`, `titulo`, `resumen_md`,
`fichas` y `fuentes` (obligatorio).

## Cómo cambiar el formato del simulacro

En `contenido/temario.json`, bloque `examen`. Cuando Metro publique el número real de
preguntas y la duración, cámbialos ahí y pon `"formato_confirmado": true`: eso quita
automáticamente los avisos de "cifra estimada" de toda la app.

## Estructura

```
oposicion-metro/
├── build.js              ← el único script; genera dist/
├── src/
│   ├── plantilla.html    ← HTML + CSS
│   ├── app.js            ← toda la lógica
│   └── LEEME.txt         ← lo que él lee
├── contenido/            ← los datos; es lo único que hay que tocar para añadir temario
│   ├── temario.json
│   ├── preguntas.json
│   └── FUENTES.md        ← mapa de fuentes y lagunas conocidas
├── fuentes-oficiales/    ← los 7 PDF de Metro + el BOCM + su texto extraído (no se publica)
└── dist/                 ← generado; no lo edites a mano
```
