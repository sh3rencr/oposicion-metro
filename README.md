# Oposición Metro de Madrid — Maquinista de Tracción Eléctrica

Aplicación de estudio para la convocatoria de **Maquinista de Tracción Eléctrica y Jefe/a de
Sector** de Metro de Madrid (BOCM núm. 187, de 7 de agosto de 2026, 30 plazas).

**En línea, en dos sitios a la vez:**

| Dirección | Servida desde |
|---|---|
| <https://oposicion-metro.pages.dev> | Cloudflare · dirección principal |
| <https://sh3rencr.github.io/oposicion-metro/> | GitHub · copia de emergencia |

Se publica en ambos en cada despliegue. Están en redes distintas a propósito: si un operador
no enruta hacia una, la otra sigue accesible (ver [INCIDENCIAS.md](INCIDENCIAS.md)).

Un solo fichero HTML local autocontenido: sin dependencias, sin CDN y sin servidor. Funciona
abierto desde el disco. La versión web añade un service worker generado para poder arrancar en
frío sin conexión después de la primera visita. El progreso se guarda en el navegador y queda
separado por dispositivo, navegador y dirección web; por eso Cloudflare es la URL canónica.

## Qué contiene

| | |
|---|---|
| Partes del temario | 7 |
| Temas | 101 |
| Preguntas | 474, todas con su fuente enlazada al PDF oficial |
| Fichas | 514 |
| Texto de estudio | ~35.500 palabras de redacción propia |
| Figuras | 8 diagramas en SVG dibujados a partir de las descripciones del temario |

Además: simulacro cronometrado, repetición espaciada tipo SM-2, psicotécnicos generados por
algoritmo (series, verbal y espacial), progreso por partes, copia de seguridad y buscador.

## Cómo se trabaja

```bash
node contenido/fuente/_fusionar.js     # refunde los ficheros de parte en los JSON
node tests/psicotecnicos.test.js 300000 # genera 900.000 ejercicios y comprueba sus soluciones
node tests/migraciones.test.js           # protege el progreso antiguo y el reparto de respuestas
node build.js                          # valida el contenido y genera dist/
```

`build.js` **se niega a compilar** si una pregunta no tiene fuente, si el epígrafe no existe, si
no hay cuatro opciones distintas, si un id está repetido o si algo marcado como volátil no lleva
fecha. Esa validación es también la que corta el despliegue automático.

El despliegue ejecuta además el motor psicotécnico como módulo puro y una autoprueba en Chrome
del HTML ya construido. Cloudflare y GitHub publican desde el mismo artefacto validado y uno puede
terminar aunque el otro proveedor falle.

### Dónde vive el contenido

No edites `contenido/temario.json` ni `contenido/preguntas.json`: **se generan**. Las fuentes
reales son `contenido/fuente/parte-1.js` … `parte-7.js`. Ver [MANTENIMIENTO.md](MANTENIMIENTO.md).

### Despliegue

Cada empujón a `main` que toque `contenido/`, `src/` o `build.js` compila, valida y publica en
Cloudflare Pages. También puede lanzarse a mano desde la pestaña **Actions**.

Requiere dos secretos en el repositorio:

| Secreto | Cómo se obtiene |
|---|---|
| `CLOUDFLARE_ACCOUNT_ID` | Ya configurado |
| `CLOUDFLARE_API_TOKEN` | Cloudflare → **Mi perfil → Tokens de API → Crear token** → plantilla **«Editar Cloudflare Workers»**. Se copia una sola vez y se pega en GitHub → *Settings → Secrets and variables → Actions* |

El token da permiso de escritura sobre Cloudflare Pages: guárdalo solo como secreto del
repositorio y no lo pegues en ningún otro sitio.

## Documentación

| Fichero | Para qué |
|---|---|
| [VERIFICAR.md](VERIFICAR.md) | Los diez datos que hay que contrastar a mano con la fuente oficial |
| [contenido/FUENTES.md](contenido/FUENTES.md) | Mapa de fuentes, lagunas conocidas y contradicciones detectadas entre manuales |
| [MANTENIMIENTO.md](MANTENIMIENTO.md) | Cómo añadir preguntas y temas |
| [PUBLICAR.md](PUBLICAR.md) | Despliegue manual y alternativas |
| [herramientas/LEEME.md](herramientas/LEEME.md) | OCR y renderizado de los PDF del temario |

## Aviso

Material de apoyo preparado con ayuda de inteligencia artificial a partir de las bases y los
siete manuales que Metro de Madrid publica en su web. **No sustituye a las bases oficiales.**

Los manuales llevan aviso de «prohibida la reproducción», por lo que la app **no reproduce su
texto**: los resúmenes son redacción propia y las preguntas se construyen sobre hechos y
normativa, citando manual y página. Los PDF originales **no se versionan** (`.gitignore`).

El logotipo de Metro es marca registrada de Metro de Madrid, S.A. Se usa en una herramienta
privada, sin ánimo de lucro y sin relación con la empresa.
