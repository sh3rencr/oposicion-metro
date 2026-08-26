# Fuentes — Oposición Maquinista de Tracción Eléctrica (Metro de Madrid)

Fecha de consulta y redacción: **26 de agosto de 2026**.
Última verificación de la convocatoria en metromadrid.es: **26 de agosto de 2026**, sin cambios.
Versión de contenido: **2.1 — OCR aplicado, figuras propias y dificultad recalculada**.

## 0. Convocatoria vigente

| Dato | Valor | Fuente |
|---|---|---|
| Anuncio | ANUNCIO de 4 de agosto de 2026 | [BOCM núm. 187, 07/08/2026](https://www.bocm.es/boletin/CM_Orden_BOCM/2026/08/07/BOCM-20260807-5.PDF) |
| Plazas | 30 (15 Maquinista + 15 Jefe/a de Sector) | BOCM-20260807-5 |
| Reserva discapacidad | 7 % (1 de cada colectivo) | BOCM-20260807-5 |
| Sueldo publicado | 43.146,96 € | [metromadrid.es](https://www.metromadrid.es/es/oferta-empleo/maquinista-de-traccion-electrica-y-jefea-de-sector-0) |
| Plazo de inscripción | **No abierto al 26/08/2026.** Previsto "a partir de septiembre" | FAQ oficial |
| Derechos de participación | 25 € | Bases, "Derechos de participación" |
| Demandante de empleo | **NO** es necesario (cambia respecto a convocatorias anteriores) | FAQ oficial |
| Puntuación | Conocimientos **0-40, mínimo 20, eliminatorio y primero**. Razonamiento verbal+espacial 20. Competencias 40 | Bases, "Segunda fase" |
| Nº de preguntas y duración | **Las bases NO lo fijan.** Lo publicará la consultora externa | Bases |

Confianza: **alta** (BOCM + web oficial).

## 1. Temario oficial y cobertura alcanzada

Los 7 manuales están descargados en `fuentes-oficiales/` (601 páginas). Las bases los
declaran **"base única y definitiva para la corrección"**.

| # | Manual | Págs. | Temas | Preguntas | Cobertura |
|---|---|---|---|---|---|
| 1 | Conocimientos específicos sobre Metro de Madrid | 101 | 24 | 131 | **Completa** (cap. 1-7, incluido «Metro en cifras») |
| 2 | Normas internas de seguridad de los agentes | 78 | 16 | 76 | **Completa**: caps. 1 a 21 |
| 3 | Normativa Interna de Circulación (NIC) | 150 | 21 | 98 | **Completa**: títulos 1-5 |
| 4 | Reglamento de Viajeros (Decreto 49/1987) | 9 | 8 | 34 | **Completa** |
| 5 | Código Ético | 14 | 7 | 23 | **Completa** (24 artículos) |
| 6 | Prevención de Riesgos Laborales | 240 | 19 | 89 | **Completa**: temas 1 a 10 y el cuestionario de la pág. 226 |
| 7 | Conocimientos generales sobre el CRTM | 9 | 6 | 23 | **Completa**, incluidos organigrama y Oficinas de Gestión |
| | **Total** | **601** | **101** | **474** | |

Además: **514 fichas**, **~35.500 palabras** de resumen propio y **8 figuras** dibujadas en SVG.

Enlaces directos a los PDF:
[1](https://www.metromadrid.es/sites/default/files/empleo/descargables/1._Conocimientos_espec%C3%ADficos_sobre_Metro_de_Madrid.pdf) ·
[2](https://www.metromadrid.es/sites/default/files/empleo/descargables/2.Normas_Internas_Seguridad_Agentes.pdf) ·
[3](https://www.metromadrid.es/sites/default/files/empleo/descargables/3.Normativa_Interna_de_Circulacion.pdf) ·
[4](https://www.metromadrid.es/sites/default/files/empleo/descargables/4.Reglamento_de_Viajeros_Metro_de_Madrid.pdf) ·
[5](https://www.metromadrid.es/sites/default/files/empleo/descargables/5.Codigo_Etico_Metro_de_Madrid.pdf) ·
[6](https://www.metromadrid.es/sites/default/files/empleo/descargables/6.Manual_PRL.pdf) ·
[7](https://www.metromadrid.es/sites/default/files/empleo/descargables/7.Conocimientos_generales_CRMT.pdf)

Fechas de edición: manual 1 = julio 2026; manual 7 = junio 2026; manual 5 = abril 2017.
Manuales 2 y 3 con control de cambios hasta ACT-09 (01/09/2021).

## 2. Lo que FALTA (sé honesto con esto antes de dárselo)

### 2.1 Bloques del temario todavía sin cubrir

**Ninguno de entidad.** Los siete manuales están cubiertos, incluido el cuestionario oficial de
la página 226 del manual de PRL. Queda sin desarrollar el detalle más fino de los temas 3, 4 y 5
de ese manual —herramientas y máquinas una por una, cada tipo de agente físico—, pero sus
conceptos nucleares sí están.

### 2.2 Contenido recuperado por OCR

Los bloques que estaban en imagen **ya se han recuperado**, con una herramienta propia construida
sobre PDFKit y Vision de macOS (`ocr.swift` en el scratchpad de trabajo):

- **«Metro en cifras»** (manual 1, pág. 17): las once cifras, verificadas a tres resoluciones
  distintas y contrastadas después a la vista sobre la página renderizada. Están **fechadas el
  18 de mayo de 2026** y marcadas como volátiles.
- **Organigrama del CRTM** y **Oficinas de Gestión** (manual 7, págs. 4, 5 y 7).

**Las señales no se han copiado: se han vuelto a dibujar.** Los cinco carteles, los faroles, la
secuencia de señalización de una zona de obras y el esquema de las zonas A y B del andén son
**SVG de elaboración propia**, hechos a partir de las descripciones escritas del manual
(dimensiones, colores y leyendas). No reproducen las ilustraciones de Metro.

> **Discrepancia detectada:** el manual 2 describe el cartel de presencia de personal con
> «inscripción en **letras negras**», pero **su propia ilustración las muestra en rojo y azul**.
> Las figuras de la app siguen la **descripción escrita**, que es la que se examinaría.

### 2.3 Reparto por dificultad

474 preguntas repartidas en **30 de nivel 1 · 376 de nivel 2 · 68 de nivel 3**.

Las etiquetas **ya no se escriben a mano**: las calcula `contenido/fuente/_dificultad.js` y las
aplica el fusionador a todas las preguntas por igual, con un criterio único:

- **Nivel 1 — Definiciones.** Se responden entendiendo el concepto.
- **Nivel 2 — Datos concretos.** Exigen recordar un nombre, un lugar o una competencia.
- **Nivel 3 — Cifras y matices.** La respuesta correcta contiene una cifra, un plazo o una medida,
  o las cuatro opciones son casi idénticas y hay que discriminar.

El reparto está cargado en el nivel 2, que es lo esperable en un temario de memorización. El
nivel 3 (68 preguntas) es el repaso útil de la víspera; el nivel 1 (30) sirve de calentamiento.

## 3. Contradicciones detectadas ENTRE manuales oficiales

Son del propio material de Metro. Conviene conocerlas para no dar por mala una respuesta correcta:

| Asunto | Manual 1 | Manual 7 | Cómo lo resuelve la app |
|---|---|---|---|
| Creación del CRTM | "organismo creado en **1986**" (pág. 7) | "se creó mediante la **Ley 5/1985**" (pág. 3) | Se pregunta por la **norma** (Ley 5/1985) y se advierte del matiz en el tema 7.1 |
| Sede social en Avenida de Asturias, 4 | La atribuye a **Metro de Madrid** (pág. 33) | La atribuye al **CRTM** (pág. 3) | Se recoge cada una en su parte y se señala la coincidencia |
| Misión de Metro | "ser la **principal solución de movilidad**" | Manual 5: "ser la **opción de movilidad preferente**" | Se advierte en el tema 5.1 de que son dos formulaciones distintas |

Y dos **erratas internas** del manual 6: dice que la Ley de Prevención "tiene 6 capítulos" y a
continuación enumera **siete**; y su **cuestionario de la pág. 226 no cuadra con su propia clave
de respuestas** en la pregunta 11 (sobre elección de EPI), donde da por falsa la afirmación
"elegirlo según el riesgo del que debe proteger". **No se ha construido ninguna pregunta sobre
ninguno de los dos puntos.**

## 4. Datos volátiles marcados en la app

Siete preguntas llevan `volatil: true` y muestran aviso en pantalla: número de líneas de la red,
número de depósitos y cocheras, precio de las tarjetas personal y MULTI, gratuidad del abono
Joven 7-14, cuantía del recargo extraordinario del Reglamento de Viajeros, y horizonte del Plan
Estratégico de Movilidad Sostenible (2013-2025, que puede haber expirado).

## 5. Nota de derechos de autor

Los manuales 1, 2, 3, 5 y 7 llevan la advertencia *"No está permitida la reproducción total o
parcial de este Manual"*. Por eso la app **no reproduce su texto**: los resúmenes son redacción
propia y las preguntas se construyen sobre hechos y normativa, citando manual y página.
`fuentes-oficiales/` está en `.gitignore` para no republicar los PDF.

El **logotipo de Metro de Madrid** es marca registrada de Metro de Madrid, S.A. Se usa por
decisión expresa del responsable del proyecto, en una herramienta privada, sin ánimo de lucro y
que se declara no oficial en la propia app y en el LEEME.

## 6. Fuentes descartadas

Academias y editoriales (Adams, MAD, soyapto, formacion.ninja, psicotecnicos2x, redopositor) se
usaron **solo** para localizar la convocatoria. **Ningún dato del temario procede de ellas.** Se
detectó información desactualizada en varias (p. ej. la afirmación de que hace falta ser
demandante de empleo, que la FAQ oficial desmiente para 2026).
