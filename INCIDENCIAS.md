# Incidencias conocidas

## 2026-08-26 · La web no carga desde la conexión de casa (Movistar)

**Síntoma.** `https://oposicion-metro.pages.dev` no responde desde la línea de casa: la conexión
se agota sin llegar a establecerse. Falla igual en navegador y en `curl`.

**No es la web.** Comprobado desde la red de GitHub, en el propio despliegue automático: devuelve
**HTTP 200 y servía las 474 preguntas del artefacto de aquel despliegue**. El workflow compara
en cada publicación la cantidad servida con la del artefacto que acaba de validar.

**Causa.** Movistar no consigue enrutar hasta el rango de Cloudflare **188.114.96.0/20**, que es
al que resuelve este dominio desde España. Pruebas que lo demuestran:

| Prueba | Resultado |
|---|---|
| `dig oposicion-metro.pages.dev` | `188.114.96.5`, `188.114.97.5` |
| Conexión a esas IP | agota el tiempo |
| Las mismas IP con el SNI de `cloudflare.com` | **también falla** → no es nuestro sitio |
| `traceroute 188.114.96.5` | muere en el salto 3, dentro de Telefónica |
| Otras IP de Cloudflare (`172.66.x`, `104.16.x`, `104.18.x`) | **HTTP 200** |
| Forzando `172.66.47.193` con el mismo dominio | **HTTP 200 y contenido correcto** |

En resumen: la mayor parte de Cloudflare es alcanzable desde esta línea; ese rango concreto, no.

**Solución temporal** (solo para este Mac, mientras dure el problema de Movistar):

```bash
echo "172.66.47.193 oposicion-metro.pages.dev" | sudo tee -a /etc/hosts
```

Y para quitarlo cuando Movistar lo arregle:

```bash
sudo sed -i '' '/oposicion-metro.pages.dev/d' /etc/hosts
```

**Solución duradera.** Asignar un **dominio propio** al proyecto de Pages. Los dominios
personalizados se sirven desde el rango estándar de Cloudflare, que sí es alcanzable desde
Movistar. Se hace en el panel: proyecto → *Custom domains* → *Set up a domain*.
