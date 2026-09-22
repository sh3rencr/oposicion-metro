# Continuidad · Oposición Metro

Actualizada: 2026-09-22. Alcance: traspaso documental a otra herramienta, sin cambios
funcionales ni revalidación de producción. Las comprobaciones históricas que se
mencionan son las registradas en las fuentes, no pruebas repetidas en este encargo.

**Propósito:** Aplicación de apoyo al estudio de una oposición de Metro, con temario, práctica, repasos y progreso local.

**Herramientas:** HTML/JavaScript autocontenido y service worker; Publicación en Cloudflare Pages y GitHub Pages.

**Estado documentado**

- README local documenta un paquete offline, preguntas con fuente y copias de seguridad.
- La rama remota tiene cambios posteriores a esta copia local. La ficha es una fotografía de los archivos locales, no una confirmación de la versión publicada.

**Decisiones y límites**

- El progreso se separa por dispositivo, navegador y dominio; conservar copias y migraciones.
- Editar las fuentes de contenido, no los JSON generados.
- Citar fuentes oficiales y revalidar normativa o convocatorias volátiles; no reproducir manuales ni presentar la app como oficial.

**Siguiente paso propuesto, pendiente de encargo**

- Revisar primero los cambios remotos y MANTENIMIENTO.md; decidir después qué contenido o comportamiento necesita actualización.

**Fuentes locales consultables**

- `README.md`
- `MANTENIMIENTO.md`
- `VERIFICAR.md`
- `AGENTS.md`

**Comprobaciones para futuros cambios**

- node tests/migraciones.test.js
- node build.js

**No verificado / no incluido**

- No se revisa aquí la convocatoria ni se transfiere progreso personal.

## Git y traspaso

Foto inicial del checkout examinado: rama `main`, commit `d419a3f51f6d`, seguimiento
`origin/main`. No asumir que esta referencia sigue siendo HEAD después de trabajar.
Antes de retomar, comprobar `git status --short --branch`, `git log -1` y el remoto.

La documentación de este traspaso se guarda en `codex/continuidad-claude-20260922` cuando existe historial
Git; en repositorios sin historial se crea únicamente el primer commit documental.
La rama original y sus cambios pendientes se conservan. En proyectos sin remoto no
hay sincronización externa. Un commit no demuestra push; comprobar la rama remota.
La ficha no autoriza fusionar ramas, desplegar ni subir cambios previos.

## Cierre de la próxima tarea

Actualizar esta ficha con el encargo realmente autorizado, las decisiones nuevas,
los archivos cambiados, pruebas ejecutadas y su resultado, límites y siguiente paso.
Registrar en la entrega rama, hash y estado de push. No incrustar en este documento
el hash del commit que lo contiene: comprobarlo con Git para evitar referencias
circulares. No copiar secretos, historiales completos ni documentación privada.

## Base de la rama documental

Esta rama se preparó sobre el remoto `origin/main` en `197332069a7d`,
más reciente que la foto del checkout original. El resumen funcional procede de
las fuentes locales indicadas y debe contrastarse con los archivos de esta rama
antes de tratarlo como estado vigente. No se integró ese remoto en la copia original.
