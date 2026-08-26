# Publicar la aplicación (instrucciones para ti, no para Andrei)

> **EN LÍNEA.** La dirección principal es **<https://oposicion-metro.pages.dev/>** y la copia
> de emergencia es **<https://sh3rencr.github.io/oposicion-metro/>**. Los cambios locales no
> llegan a ninguna de las dos hasta subirlos a `main` o ejecutar un despliegue manual.
>
> **Para actualizarla** tras cambiar contenido:
> ```bash
> cd ~/Code/oposicion-metro
> node contenido/fuente/_fusionar.js
> node tests/psicotecnicos.test.js 300000
> node build.js
> ```

La carpeta `dist/web/` es lo que se sube: `index.html`, el service worker, el manifest y los
iconos. Es un sitio estático puro: no necesita servidor de aplicaciones ni base de datos.

Antes de subir, siempre:

```bash
cd ~/Code/oposicion-metro
node contenido/fuente/_fusionar.js && node tests/psicotecnicos.test.js 300000 && node build.js
```

## Opción recomendada — Cloudflare Pages (gratis)

Gratis de verdad para este caso: sitios estáticos ilimitados, ancho de banda ilimitado y
dominio `.pages.dev` incluido. Dos caminos.

### A) Sin terminal, arrastrando la carpeta

1. Entra en <https://dash.cloudflare.com> con tu cuenta.
2. En el menú lateral: **Compute (Workers & Pages)** → **Create** → pestaña **Pages** →
   **Upload assets**.
3. Ponle nombre al proyecto. **Ese nombre será la URL**: `<nombre>.pages.dev`.
4. Arrastra la carpeta `dist/web` completa y pulsa **Deploy**.

Para actualizar: entra en el proyecto → **Create new deployment** → arrastras otra vez.

### B) Desde la terminal, con un comando

No hace falta instalar nada: `npx` descarga la herramienta al vuelo.

```bash
npx wrangler pages deploy ~/Code/oposicion-metro/dist/web --project-name=oposicion-metro
```

La primera vez te abrirá el navegador para que autorices tu cuenta de Cloudflare. A partir de
ahí, cada actualización es ese mismo comando.

> Los menús del panel de Cloudflare cambian de nombre cada pocos meses. Si no encuentras
> «Upload assets», busca **Pages** y la opción de subida directa. El camino B es más estable.

## Alternativas

**Netlify Drop** — <https://app.netlify.com/drop>. Arrastras `dist/web` y ya. No pide ni
cuenta para la primera subida. Es lo más rápido si solo quieres probarlo hoy.

**GitHub Pages** — ya funciona como copia de emergencia. El workflow compila una sola vez y
publica ese mismo artefacto en GitHub y Cloudflare mediante trabajos independientes: un fallo
de un proveedor no impide intentar el otro.

> **Cuidado si haces el repo público**: los manuales de Metro llevan aviso de «prohibida la
> reproducción». La app no reproduce su texto, pero subir `fuentes-oficiales/` sería
> republicar los PDF. Ya está en `.gitignore` por eso.

## Sobre la privacidad de la URL

Dijiste que esto es de uso estrictamente privado entre Andrei y tú. Conviene que sepas que
**una URL `.pages.dev` es pública**: no sale en Google si nadie enlaza, pero cualquiera que
acierte el nombre entra. Con el logotipo de Metro en la portada, merece la pena pensarlo.

Dos formas de reducirlo:

- **Lo simple**: ponle al proyecto un nombre que nadie vaya a adivinar, en vez de
  `oposicion-metro`. Es «seguridad por oscuridad», pero para dos personas basta.
- **Lo serio**: **Cloudflare Zero Trust → Access** permite proteger el sitio con una lista de
  correos autorizados. Andrei y tú recibiríais un código por email la primera vez. El plan
  gratuito cubre de sobra a dos usuarios. No te detallo los menús exactos porque la interfaz
  de Zero Trust cambia a menudo; búscalo como «Access → Applications» y añade el proyecto de
  Pages.

## Y no tires la copia local

`dist/Oposicion-Metro/EMPEZAR-AQUI.html` sigue siendo útil aunque publiquéis la web:

- Funciona **sin internet**, en un túnel o en el metro.
- No depende de que Cloudflare, tu cuenta o el proyecto sigan ahí dentro de seis meses.
- Es la copia que le puedes pasar por WhatsApp o en un USB sin que dependa de nadie.

Si vais a usar solo la web, no hace falta que compruebes nada de la versión local.

## Lo que él tiene que hacer (explícaselo tú)

Le pasas el enlace por WhatsApp. Que lo abra en el móvil y:

- **iPhone (Safari)**: botón de compartir → *Añadir a pantalla de inicio*.
- **Android (Chrome)**: menú de tres puntos → *Añadir a pantalla de inicio* / *Instalar aplicación*.

Le queda con su icono, como una aplicación más.

## Recuerda

El progreso del móvil y el del ordenador **no se sincronizan**, aunque sea la misma URL: cada
navegador guarda lo suyo. Para pasarlo de uno a otro está el botón de copia de seguridad.
Está explicado en el `LEEME.txt`.
