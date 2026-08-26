# Lista de verificación manual

Diez cosas que deberías comprobar **tú, a mano, contra la fuente oficial** antes de
pasarle esto a tu amigo. Están ordenadas de más a menos crítico: las cuatro primeras
afectan a si llega a presentarse; el resto, a si el contenido es fiable.

Marca la casilla cuando lo hayas mirado.

## Sobre el proceso (lo que más le puede costar la plaza)

- [ ] **1. Que el plazo de inscripción no se haya abierto y cerrado ya.**
  Las FAQ oficiales decían el 26/08/2026 "previsto a partir de septiembre", sin fecha.
  Es lo único de esta lista que caduca.
  → <https://www.metromadrid.es/es/oferta-empleo/maquinista-de-traccion-electrica-y-jefea-de-sector-0>

- [ ] **2. Los requisitos físico-médicos, antes de que pague los 25 €.**
  Hay exigencias visuales duras (agudeza lejana binocular ≥ 1, monocular del ojo peor ≥ 0,5)
  y una lista larga de exclusiones cardiovasculares. Si no las cumple, el resto sobra.
  → Misma página, apartado "Requisitos físico-médicos del puesto de trabajo".

- [ ] **3. Que sigue sin hacer falta estar de alta como demandante de empleo.**
  Varias academias afirman lo contrario porque copian la convocatoria anterior. La FAQ
  oficial de 2026 dice que NO hace falta. Confírmalo antes de que se fíe de un foro.

- [ ] **4. Que la titulación le sirve.** Se exige Bachiller o equivalente a efectos
  profesionales según la Orden EDU/1603/2009. Si su título es de FP, mira esa Orden.

## Sobre cómo puntúa el examen (esto cambia cómo hay que estudiar)

- [ ] **5. El reparto de los 100 puntos.** Comprueba en las bases que sigue siendo:
  conocimientos técnicos 40 · razonamiento verbal y espacial 20 · competencias 40.
  Y sobre todo: que la parte de **conocimientos exige 20 sobre 40 y es eliminatoria**,
  de modo que si no la pasa no le corrigen lo demás.
  → Apartado "Segunda fase. Prueba objetiva de aptitud".

- [ ] **6. Si ya han publicado cuántas preguntas tiene el test y cuánto dura.**
  Las bases no lo dicen; lo publicará la consultora externa en el apartado
  "Circunstancias, requisitos y condiciones relativas a la inscripción y a la prueba".
  En cuanto salga, cámbialo en `contenido/temario.json` → bloque `examen`, y pon
  `"formato_confirmado": true`. Eso quita solo los avisos de "cifra estimada".

## Sobre datos concretos de las preguntas

Con 348 preguntas no puedes comprobarlas todas. Estas cuatro son las que más se repiten en el
temario, las más fáciles de transcribir mal y las que más cuesta desaprender si se memorizan
con un error.

- [ ] **7. Los dos anchos de vía y los dos gálibos.** Metro pesado **1.445 mm**, metro ligero
  **1.435 mm**. Gálibo estrecho **230 cm** (líneas 1-5 y Ramal, series 2000 y 3000); gálibo
  ancho **280 cm** (líneas 6-12, series 5000 a 9000). Cuatro cifras que se parecen entre sí.
  → Manual 1, págs. 39-40.

- [ ] **8. Las velocidades y los modos de conducción.** M+20 limita a **20 km/h**; Llave
  Especial por vías principales, **30 km/h**; paso de hombre, **unos 5 km/h**; paso junto al
  farol azul de una zona de obras, **30 km/h**. Comprueba también que en Llave Especial **se
  anula el ATP** y no hay frenado ante señal en rojo.
  → Manual 1, págs. 49-50 y Manual 2, págs. 16 y 37.

- [ ] **9. Los colores de la señalización de vía.** Farol **amarillo** = inicio de precaución;
  **azul** = inicio de zona de obras; **verde** = final de precaución; **rojo** (baliza o luz)
  = prohibición absoluta de rebasar. Y las distancias: **150 m** antes y después para amarillo
  y verde, **50 m** de parada ante una luz roja, **100 m** mínimo para las balizas rojas.
  → Manual 2, págs. 24-25, 32-33 y 36 y 45.

- [ ] **10. El recargo por viajar sin título y sus plazos.** **80 euros**, la mitad si se paga
  de inmediato o en **quince días hábiles**; denuncia a los **treinta días**. Y la regla de las
  **tres horas** desde la validación para títulos de viajes limitados.
  → Manual 4, arts. 24 y 28.

## Además, si tienes tiempo

- [ ] **Las contradicciones entre manuales** que están recogidas en `contenido/FUENTES.md`,
  sección 3. Son del propio material de Metro y conviene que Andrei las conozca para no dar
  por mala una respuesta suya que es correcta.

- [ ] **Que los bloques sin cubrir siguen sin cubrir.** El más importante es la parte de la NIC
  sobre **circulación en situaciones degradadas y auxilio a trenes**. Está identificado en
  `FUENTES.md`, sección 2.1.

## Y una comprobación que no es de datos

- [ ] **Abre la aplicación y responde una pregunta**, en la web publicada o en el archivo
  local. Cierra, vuelve a abrir y comprueba que se acuerda de lo que hiciste.

  Si vais a usar **solo la versión web**, con probarla ahí basta: la he verificado servida por
  HTTP y funciona. Si además le vas a pasar el archivo suelto, ábrelo entonces **con doble clic
  desde el Finder y con el wifi apagado**, porque el protocolo `file://` es el único escenario
  que no he podido reproducir yo.
