# Continuidad · metro oposición andrei

## Estado vigente · 10/10/2026

La fuente técnica es el clon `Code/oposicion-metro`, remoto personal existente
`sh3rencr/oposicion-metro`, rama `main`. La copia `Documents/ChatGPT/metro oposición
andrei` conserva documentación histórica y trabajo local; no se sobrescribe.

Preparada una PR documental sobre `1973320`: recupera las instrucciones y fichas
locales seleccionadas del candidato de sincronización. El código, contenido,
mapas de progreso, pruebas y workflow coinciden byte a byte con esa base. Se
conservan las dos historias originales sin merge ni reescritura.

Verificación funcional del 09/10 sobre las mismas fuentes: 900.000 casos
sintéticos, migración de 474 preguntas/514 tarjetas y build de 101 temas en siete
partes. Comprobaciones y diff documentales revisados el 10/10. El temario y las
convocatorias no se revalidan por esta preparación.

El workflow despliega solo con cambios en `contenido/`, `src/`, `tests/`,
`build.js` o su propio YAML en main, o con una ejecución manual. Esta PR modifica
únicamente cuatro Markdown fuera de esos filtros; no dispara publicación.
Fusión y sincronización de copias originales pendientes de aprobación expresa.

Siguiente paso: revisar y aprobar esta PR; después integrar las historias locales
si se autoriza, conservando el WIP de la copia documental.

## Historial documental conservado

## Actualización de orquestación · 2026-09-23

Encargo autorizado: aplicar la política global de modelos y retirar su copia
obsoleta local. AGENTS.md remite ahora al AGENTS.md global de Codex; se conserva
el modelo principal elegido por el usuario y las restricciones propias del proyecto.
La política global prefiere DeepSeek para bloques adecuados dentro de sus límites
vigentes y usa GPT-6 Luna o Sol cuando corresponde un ejecutor nativo.

Comprobación: se comparó el contenido anterior y posterior, conservando íntegramente
las secciones locales ajenas a la orquestación. No hay cambios funcionales; no se
han ejecutado compilaciones, entregas, publicaciones ni tareas pendientes del proyecto.
Los cambios previos de otras tareas se conservan fuera de este commit.

Siguiente paso: aplicar estas reglas en el próximo encargo autorizado; consultar
README.md y el documento de estado vigente para retomar trabajo funcional.
La rama, el commit y el resultado de sincronización de este encargo se registran
en el informe ORQUESTACION_MODELOS_2026-09-23.md del proyecto Productividad.
