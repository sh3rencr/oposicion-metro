/* Parte 4 — Reglamento de Viajeros del Ferrocarril Metropolitano de Madrid
   Decreto 49/1987, de 8 de mayo, de la Comunidad de Madrid. */
'use strict';
const M = 'https://www.metromadrid.es/sites/default/files/empleo/descargables/4.Reglamento_de_Viajeros_Metro_de_Madrid.pdf';
const { epigrafes, preguntas, tema, q } = require('./_util.js')(M, 'Manual 4 · Reglamento de Viajeros');

tema('4.1', 'Naturaleza del Reglamento y derechos de los viajeros',
'El Reglamento de Viajeros del Ferrocarril Metropolitano de Madrid se aprueba por el **Decreto 49/1987, de 8 de mayo**, de la Comunidad de Madrid. Su ámbito se ha ido ampliando por decretos posteriores a la línea de **Rivas-Vaciamadrid y Arganda del Rey** (Decreto 17/1999), a **MetroSur** (Decreto 10/2003) y a las **líneas de Metro Ligero** (Decreto 57/2006).\n\n**Artículo 1.** El **Consorcio Regional de Transportes** velará porque los usuarios sean informados —directamente o a través de Metro— de las características de prestación de los servicios y de sus posibles incidencias.\n\n**Artículo 2. Los siete derechos de los viajeros:**\n\n- **a)** **Elegir** entre los diferentes títulos de transporte que figuren en los Cuadros de Tarifas aprobados.\n- **b)** **Ser transportado** con un título válido, junto con los objetos y bultos de mano que porte, siempre que no supongan molestias o peligro para otros viajeros.\n- **c)** **Renunciar a seguir viaje** en caso de incidencia o suspensión, y obtener la devolución del importe.\n- **d)** **Ser tratado correctamente** por los agentes y que se atiendan sus peticiones de ayuda e información.\n- **e)** **Solicitar y obtener** el **libro de reclamaciones** en las estaciones señalizadas para tal fin.\n- **f)** **Recibir contestación** del Consorcio a esas reclamaciones **en plazo inferior a un mes**.\n- **g)** En caso de accidente, **la indemnización** que corresponda según la póliza de seguros suscrita por Metro.\n\n> Fíjate en quién contesta las reclamaciones del libro: **el Consorcio**, no Metro. Y el plazo es **inferior a un mes**, distinto de los 13 días hábiles que la Carta de Servicios de Metro fija para sus propias reclamaciones.\n\n**Bicicletas plegadas e infantiles.** Tienen la **consideración de bultos de mano** y se rigen por la normativa de estos. Los usuarios de plegables **deberán plegarlas antes de acceder al tren**.',
[
 { anverso: '¿Qué norma aprueba el Reglamento de Viajeros?', reverso: 'El Decreto 49/1987, de 8 de mayo, de la Comunidad de Madrid.' },
 { anverso: '¿Quién contesta las reclamaciones del libro oficial y en qué plazo?', reverso: 'El Consorcio Regional de Transportes, en plazo inferior a un mes.' },
 { anverso: '¿Qué consideración tienen las bicicletas plegadas y las infantiles?', reverso: 'La de bultos de mano. Las plegables hay que plegarlas antes de acceder al tren.' },
 { anverso: '¿Qué derecho tiene el viajero en caso de accidente?', reverso: 'La indemnización que corresponda según la póliza de seguros que Metro tiene suscrita al efecto.' }
], [1]);

q('4.1', 1, 'El Reglamento de Viajeros del Ferrocarril Metropolitano de Madrid fue aprobado por:',
  ['El Decreto 49/1987, de 8 de mayo', 'La Ley 5/1985', 'La Ley 16/1987, de Ordenación de los Transportes Terrestres', 'El Decreto 57/2006'], 0,
  'El Reglamento se aprueba por el Decreto 49/1987, de 8 de mayo. La Ley 5/1985 creó el CRTM y la Ley 16/1987 es la LOTT, que el propio Reglamento invoca para infracciones y sanciones. El Decreto 57/2006 es una de las ampliaciones posteriores, la que extendió el Reglamento a las líneas de Metro Ligero.', 1);

q('4.1', 2, 'Según el artículo 2 del Reglamento, la contestación a las reclamaciones plasmadas en el libro corresponde a:',
  ['El Consorcio Regional de Transportes, en plazo inferior a un mes',
   'Metro de Madrid, en plazo inferior a un mes',
   'El Consorcio Regional de Transportes, en plazo de 13 días hábiles',
   'La Consejería de Transportes, sin plazo determinado'], 0,
  'El derecho del artículo 2.f) es a recibir contestación del Consorcio en plazo inferior a un mes. Los 13 días hábiles son el compromiso propio de la Carta de Servicios de Metro para sus reclamaciones, que es un canal distinto del libro oficial.', 1);

q('4.1', 3, 'Las bicicletas plegadas y las bicicletas infantiles:',
  ['Tienen la consideración de bultos de mano', 'Se rigen íntegramente por el artículo 2 bis, como el resto de bicicletas',
   'No pueden accederse a la red en ningún caso', 'Requieren un título de transporte adicional'], 0,
  'El Reglamento las equipara a bultos de mano, con la normativa propia de estos, lo que las saca del régimen restrictivo del artículo 2 bis. Eso sí, quien lleve una plegable debe plegarla antes de acceder al tren.', 1);

tema('4.2', 'Acceso y estacionamiento con bicicletas (art. 2 bis)',
'El acceso con bicicletas se permite en los **horarios, líneas o tramos** que establezca el **CRTM** mediante **resolución publicada en el BOCM**, y siempre con estas condiciones:\n\n- **a)** Como máximo, **una bicicleta por viajero**.\n- **b)** El viajero es **responsable de su custodia y cuidado**, y de cualesquiera daños que ocasione.\n- **c)** En el tren: como máximo **dos bicicletas en el coche de cabeza y dos en el coche de cola**, en ambos casos **junto a las cabinas de conducción**. En los trenes con **espacios reservados**, deben situarse en ellos.\n- **d)** Puede transportarla en **escaleras mecánicas, pasillos rodantes y ascensores**, siempre que la ocupación lo permita y no cause molestias.\n- **e)** **No está permitido conducir la bicicleta en las instalaciones** (pasillos, andenes, etc.).\n- **f)** En las líneas que **conectan con localidades exteriores a la M-40**, o que salvan vías con elevada intensidad de tráfico peligrosas para ciclistas, se permite el acceso **sin limitación horaria**.\n- **g)** El operador **podrá limitar el acceso** cuando perjudique el normal funcionamiento del servicio: aglomeraciones, averías u otras incidencias.\n\n**Estacionamiento.** Se permite en las estaciones con **espacios específicamente habilitados**. Su uso es **por estricto orden de llegada**.\n\n> Compara con los perros: la bicicleta va **en cabeza y cola** y **sí puede** usar escaleras mecánicas. El perro va en el **último coche** y **no puede** usarlas. Esa simetría invertida es la trampa favorita de este bloque.',
[
 { anverso: '¿Cuántas bicicletas caben por tren y dónde?', reverso: 'Máximo dos en el coche de cabeza y dos en el de cola, junto a las cabinas de conducción. Una bicicleta por viajero.' },
 { anverso: '¿Puede llevarse la bicicleta en escaleras mecánicas?', reverso: 'Sí, y también en pasillos rodantes y ascensores, si la ocupación lo permite y no causa molestias.' },
 { anverso: '¿Dónde no hay limitación horaria para las bicicletas?', reverso: 'En las líneas que conectan con localidades exteriores a la M-40 o que salvan vías peligrosas para ciclistas.' },
 { anverso: '¿Cómo se usa el estacionamiento de bicicletas de las estaciones?', reverso: 'Por estricto orden de llegada, en las estaciones con espacios habilitados al efecto.' }
], [1, 2]);

q('4.2', 2, 'El número máximo de bicicletas que pueden viajar en un tren y su ubicación es:',
  ['Dos en el coche de cabeza y dos en el de cola, junto a las cabinas de conducción',
   'Dos en el último coche, junto a la cabina', 'Una por coche, sin ubicación determinada',
   'Cuatro en el coche central del tren'], 0,
  'El artículo 2 bis fija dos bicicletas en cabeza y dos en cola, siempre junto a las cabinas. La ubicación en el último coche corresponde a los perros, no a las bicicletas: es la confusión más común de este artículo.', 1);

q('4.2', 3, 'Respecto al uso de escaleras mecánicas y pasillos rodantes:',
  ['La bicicleta sí puede transportarse en ellos; el perro no puede utilizarlos en ningún caso',
   'Ni la bicicleta ni el perro pueden utilizarlos', 'Ambos pueden utilizarlos sin restricción',
   'El perro sí puede; la bicicleta no'], 0,
  'El Reglamento permite transportar la bicicleta en escaleras mecánicas, pasillos rodantes y ascensores si la ocupación lo permite. En cambio, con perro solo se pueden usar ascensores: escaleras mecánicas y pasillos rodantes quedan prohibidos en todo caso.', 2);

q('4.2', 3, 'El acceso con bicicletas sin limitación horaria se permite en:',
  ['Las líneas que conectan con localidades exteriores a la M-40 o que salvan vías peligrosas para ciclistas',
   'Todas las líneas de la red, los fines de semana', 'Únicamente en MetroSur y MetroNorte',
   'Las líneas de Metro Ligero exclusivamente'], 0,
  'La excepción horaria del apartado f) se justifica porque en esos trayectos la bicicleta no tiene alternativa segura por carretera. El CRTM determina por resolución los tramos y estaciones afectados, previo informe del operador.', 2);

q('4.2', 2, 'El uso de los espacios de estacionamiento de bicicletas en las estaciones se rige por:',
  ['Estricto orden de llegada', 'Reserva previa a través de la web del CRTM',
   'Sorteo mensual entre los abonados', 'Asignación por el Jefe de Sector'], 0,
  'El Reglamento establece que su uso será por estricto orden de llegada y sometido a las condiciones que fije el operador. No hay reserva previa ni asignación discrecional.', 2);

tema('4.3', 'Acceso con animales domésticos (art. 2 ter)',
'El artículo distingue **tres supuestos**, con regímenes muy distintos:\n\n**1. Perros de asistencia.** Se permite el acceso con **perros de asistencia personal** y con los **perros de asistencia en formación**, en los supuestos y condiciones de la **Ley 2/2015, de 10 de marzo, de Acceso al Entorno de Personas con Discapacidad que Precisan el Acompañamiento de Perros de Asistencia**.\n\n**2. Perros en general.** Fuera del supuesto anterior, se permite el acceso con perros **correctamente identificados mediante chip**, en los horarios, líneas o tramos que establezca el **CRTM** por **resolución publicada en el BOCM**, previo informe de los departamentos del operador, y con estas condiciones:\n\n- **a)** **Un perro por viajero.**\n- **b)** El viajero se **responsabiliza** de la integridad del animal y de los daños que ocasione.\n- **c)** Desde el acceso a la estación hasta la salida a la calle, el perro debe ir **con bozal** y sujeto con **correa, extensible o no, de longitud que no supere los 50 centímetros**.\n- **d)** Los trayectos se realizan en el **último coche** del tren, y los perros **no pueden ocupar asientos en ningún caso**.\n- **e)** Puede usar **ascensores** si no obstaculiza las puertas, la ocupación lo permite y no causa molestias. **En ningún caso escaleras mecánicas ni pasillos rodantes.**\n- **f)** Se podrá **limitar el acceso** por aglomeraciones o por razones de seguridad de las personas y de los propios animales.\n- **g)** Debe cumplirse la legislación de **protección y bienestar animal** y de **salud pública**.\n\n**3. Otros animales domésticos de pequeño tamaño.** Se permite siempre que vayan en **receptáculos idóneos de los que no puedan escapar**, y que **no resulten peligrosos ni molestos** por su forma, volumen, ruido y olor para el resto de viajeros.',
[
 { anverso: '¿Qué ley regula el acceso con perros de asistencia?', reverso: 'La Ley 2/2015, de 10 de marzo, de Acceso al Entorno de Personas con Discapacidad que Precisan el Acompañamiento de Perros de Asistencia.' },
 { anverso: '¿Qué longitud máxima puede tener la correa de un perro?', reverso: '50 centímetros, extensible o no. Y con bozal desde el acceso a la estación hasta la salida a la calle.' },
 { anverso: '¿En qué coche del tren viajan los perros?', reverso: 'En el último coche, y no pueden ocupar asientos en ningún caso.' },
 { anverso: '¿Qué medios de elevación puede usar un viajero con perro?', reverso: 'Solo ascensores. Nunca escaleras mecánicas ni pasillos rodantes.' },
 { anverso: '¿Qué condiciones deben cumplir los animales domésticos de pequeño tamaño?', reverso: 'Ir en receptáculos idóneos de los que no puedan escapar y no resultar peligrosos ni molestos por forma, volumen, ruido u olor.' }
], [2, 3]);

q('4.3', 2, 'La correa con la que debe ir sujeto un perro en las instalaciones de Metro:',
  ['No puede superar los 50 centímetros de longitud, sea extensible o no',
   'Debe ser rígida y de un máximo de un metro', 'No puede ser extensible en ningún caso',
   'No tiene limitación de longitud si el perro lleva bozal'], 0,
  'El artículo 2 ter fija un máximo de 50 centímetros, y admite expresamente que sea extensible o no. El bozal es una exigencia adicional y simultánea, no una alternativa a la correa corta.', 2);

q('4.3', 2, 'Los perros que viajan en el tren deben hacerlo:',
  ['En el último coche, sin ocupar asientos en ningún caso', 'En el coche de cabeza, junto a la cabina',
   'En cualquier coche, siempre que vayan con bozal', 'En el coche central, en el espacio reservado'], 0,
  'Los perros viajan en el último coche y no pueden ocupar asientos bajo ninguna circunstancia. El coche de cabeza junto a la cabina es una de las ubicaciones previstas para las bicicletas, no para los animales.', 2);

q('4.3', 3, 'Un viajero que accede con su perro puede utilizar:',
  ['Los ascensores, si no obstaculiza las puertas y la ocupación lo permite',
   'Las escaleras mecánicas, si el perro va en brazos', 'Los pasillos rodantes, si no hay aglomeración',
   'Cualquier medio mecánico, sin restricción'], 0,
  'Solo los ascensores, y con las cautelas de no obstaculizar las puertas, que la ocupación lo permita y no causar molestias. El Reglamento prohíbe en todo caso las escaleras mecánicas y los pasillos rodantes, sin excepciones por llevar al animal en brazos.', 2);

q('4.3', 3, 'El acceso con perros de asistencia se rige por:',
  ['La Ley 2/2015, de 10 de marzo', 'El Decreto 49/1987 exclusivamente',
   'La Ley 16/1987, de Ordenación de los Transportes Terrestres', 'Una resolución anual del CRTM'], 0,
  'Los perros de asistencia personal, y también los que están en formación, se rigen por la Ley 2/2015, de 10 de marzo, que define y clasifica esos animales. El régimen de resoluciones del CRTM en el BOCM se aplica a los perros en general, que es el segundo supuesto del artículo.', 2);

q('4.3', 2, 'Los animales domésticos de pequeño tamaño distintos de los perros pueden acceder:',
  ['En receptáculos idóneos de los que no puedan escapar, sin resultar peligrosos ni molestos',
   'Únicamente en el último coche y con bozal', 'Solo si están identificados mediante chip',
   'En ningún caso'], 0,
  'El apartado 3 del artículo 2 ter solo exige el receptáculo idóneo y que el animal no resulte peligroso ni molesto por forma, volumen, ruido y olor. El chip, el bozal y la ubicación en el último coche son requisitos del régimen de los perros.', 3);

tema('4.4', 'Obligaciones de Metro: instalaciones, material y agentes',
'**Artículo 3.** Metro de Madrid, como empresa explotadora del Ferrocarril Metropolitano **y de MetroSur**, está obligada a cumplir y **hacer cumplir a sus agentes** todo lo previsto en el Reglamento.\n\n**Artículo 4.** Trenes e instalaciones con acceso al público —accesos exteriores, vestíbulos, escaleras, andenes y otros— deben mantenerse en estado que permita su utilización en buenas condiciones de **comodidad, iluminación, higiene, orden y seguridad**.\n\n**Artículo 5.** Instalaciones y trenes serán objeto de **al menos una limpieza diaria**. Además se realizará su **desinfección, desinsectación y desratización** en los plazos de las normas vigentes, colocándose **en lugar visible los oportunos certificados**.\n\n**Artículo 6.** Cuando se realicen **obras** durante las horas de servicio, o cuando obliguen a depositar materiales en lugares de estancia o paso de viajeros, se adoptarán las disposiciones necesarias para que las **molestias sean las menores posibles**.\n\n**Artículo 7.** Trenes e instalaciones de uso público dispondrán de un **sistema de alumbrado alternativo para emergencia**.\n\n**Artículo 8.** En las estaciones se **señalizará adecuadamente la zona del borde del andén**, constituyendo una **franja de seguridad en la que no deberá permanecer el viajero**.\n\n**Artículo 9.** En **todas las estaciones** deberán existir **instalaciones de megafonía** para transmitir información a los viajeros.\n\n**Artículo 10.** Los agentes mantendrán **en todo momento un trato correcto** con los viajeros y atenderán **con amabilidad** las peticiones de ayuda e información.\n\n**Artículo 17. Preferencia de paso.** Los viajeros que **salen** de los trenes tienen **preferencia** sobre los que desean entrar. El **toque de silbato** del tren indica el **inminente cierre de puertas** y determina la **prohibición de entrada y salida** de viajeros.',
[
 { anverso: '¿Con qué frecuencia mínima se limpian trenes e instalaciones?', reverso: 'Al menos una limpieza diaria. Además, desinfección, desinsectación y desratización en los plazos normativos, con certificados a la vista.' },
 { anverso: '¿Qué exige el artículo 8 sobre el borde del andén?', reverso: 'Que se señalice adecuadamente, constituyendo una franja de seguridad en la que no debe permanecer el viajero.' },
 { anverso: '¿Qué significa el toque de silbato del tren?', reverso: 'Que el cierre de puertas es inminente. Determina la prohibición de entrada y salida de viajeros.' },
 { anverso: '¿Quién tiene preferencia de paso en las puertas del tren?', reverso: 'Los viajeros que salen, sobre los que desean entrar.' }
], [3, 4]);

q('4.4', 2, 'Según el artículo 5 del Reglamento, las instalaciones y trenes serán objeto de:',
  ['Al menos una limpieza diaria, además de desinfección, desinsectación y desratización',
   'Una limpieza semanal y desinfección mensual', 'Limpieza diaria únicamente en los trenes',
   'Limpieza a demanda, según el nivel de ocupación'], 0,
  'El Reglamento exige al menos una limpieza diaria de instalaciones y trenes, y añade desinfección, desinsectación y desratización en los plazos de la normativa vigente, con los certificados colocados en lugar visible.', 3);

q('4.4', 2, 'El toque de silbato del tren:',
  ['Indica el inminente cierre de puertas y prohíbe la entrada y salida de viajeros',
   'Anuncia la llegada del tren a la estación', 'Advierte de la presencia de personal en la vía',
   'Indica que el tren va a circular en modo Llave Especial'], 0,
  'El artículo 17 vincula el toque de silbato al cierre inminente de puertas, y de ahí deriva la prohibición de entrar y salir. El mismo artículo establece que quienes salen tienen preferencia sobre quienes entran.', 4);

q('4.4', 3, 'El artículo 7 del Reglamento obliga a que los trenes e instalaciones de uso público dispongan de:',
  ['Un sistema de alumbrado alternativo para emergencia', 'Un sistema de megafonía en cada coche',
   'Desfibriladores automáticos', 'Cámaras de videovigilancia en todos los accesos'], 0,
  'El artículo 7 se refiere específicamente al alumbrado alternativo de emergencia. La megafonía es objeto del artículo 9, y se exige en todas las estaciones, no en cada coche.', 3);

q('4.4', 3, 'Metro de Madrid está obligada por el artículo 3 a cumplir y hacer cumplir el Reglamento en su condición de empresa explotadora:',
  ['Del Ferrocarril Metropolitano de Madrid y de MetroSur', 'Únicamente del Ferrocarril Metropolitano de Madrid',
   'De toda la red del Consorcio Regional de Transportes', 'Del Ferrocarril Metropolitano y de las líneas de Metro Ligero Oeste'], 0,
  'El artículo 3 menciona expresamente el Ferrocarril Metropolitano de Madrid y MetroSur. Metro no explota las líneas de Metro Ligero Oeste (ML2 y ML3), aunque el Reglamento se les haya extendido por el Decreto 57/2006.', 3);

tema('4.5', 'Incidencias y derecho a devolución',
'**Artículo 11. Cuadros Horario.** Definen, para cada época del año, el **intervalo en minutos** de paso de trenes por cada estación **cuando sea inferior a 7 minutos y 30 segundos**, distinguiendo periodos del día y días de la semana, y el horario de paso del **primer y último tren**. Reflejan además el horario de paso de los trenes con intervalo **a partir de 7 min 30 s en días laborables de lunes a viernes**, e incorporan la información sobre **correspondencias entre líneas**.\n\n**Artículo 12. Los tres supuestos de devolución.** El viajero tiene derecho a la devolución del importe del billete cuando:\n\n- **a)** Se produzca una **suspensión del servicio**.\n- **b)** El intervalo entre trenes sea **superior a 15 minutos** en trayectos cuyo Cuadro Horario prevea intervalos **inferiores a 7 min 30 s**.\n- **c)** El intervalo entre trenes sea **superior a 20 minutos** en trayectos cuyo intervalo previsto sea **igual o superior a 7 min 30 s**.\n\n**Artículo 13.** Para ejercer el derecho, los viajeros que **renuncien a seguir viaje** deben presentar un título cuya devolución esté prevista en el Cuadro de Tarifas.\n\n**Artículo 14. Cómo se materializa.** El viajero recibirá un **título equivalente** al utilizado, que le permita realizar un viaje igual al interrumpido. Si lo desea, puede optar por **recibir en metálico** el importe del viaje no finalizado. La devolución debe solicitarse **en la estación, inmediatamente después de producirse la anomalía**.\n\n> **No dan derecho a devolución** los títulos que permitan un **número ilimitado de viajes** o la **libre circulación**. Es decir: los abonos quedan fuera.\n\n**Artículo 15.** Los Jefes de Estación extenderán **nota** haciendo constar la circunstancia, **a petición de los viajeros**, y también debe solicitarse **inmediatamente**.\n\n**Artículo 16.** En caso de suspensión u otras anormalidades, los **pasos de entrada a vestíbulos o andenes podrán cerrarse** al público el tiempo preciso. Y se informará **lo antes posible por megafonía** de la estimación del retraso.\n\n**Artículo 27.** Quienes **adquieran el título después de ser informados** de la existencia de una suspensión o incidencia **no tendrán derecho a la devolución**.',
[
 { anverso: '¿Cuáles son los tres supuestos de devolución del importe del billete?', reverso: 'Suspensión del servicio; intervalo superior a 15 min cuando el previsto era menor de 7 min 30 s; intervalo superior a 20 min cuando el previsto era igual o mayor.' },
 { anverso: '¿Qué títulos no dan derecho a devolución?', reverso: 'Los que permiten un número ilimitado de viajes o la libre circulación.' },
 { anverso: '¿Cuándo y dónde hay que solicitar la devolución?', reverso: 'En la estación, inmediatamente después de producirse la anomalía.' },
 { anverso: '¿Tiene derecho a devolución quien compra el billete sabiendo ya que hay una incidencia?', reverso: 'No. El artículo 27 lo excluye expresamente.' },
 { anverso: '¿Qué umbral usa el Cuadro Horario para distinguir dos regímenes de información?', reverso: 'Los 7 minutos y 30 segundos de intervalo.' }
], [4]);

q('4.5', 2, 'No dan derecho a devolución del importe:',
  ['Los títulos que permiten un número ilimitado de viajes o la libre circulación',
   'Los títulos sencillos adquiridos en máquina automática', 'Los títulos de 10 viajes',
   'Ningún título: todos dan derecho a devolución'], 0,
  'El artículo 14 excluye expresamente los títulos de viajes ilimitados y los de libre circulación, es decir, los abonos. Los sencillos y los de 10 viajes sí generan derecho a devolución si concurre alguno de los supuestos del artículo 12.', 4);

q('4.5', 3, 'La devolución del importe del viaje no finalizado deberá solicitarse:',
  ['En la estación, inmediatamente después de producirse la anomalía',
   'En un Centro de Atención al Cliente, en el plazo de 15 días',
   'Por escrito ante el Consorcio, en el plazo de un mes',
   'En cualquier momento, mientras no prescriba el derecho'], 0,
  'El artículo 14 exige que se solicite en la estación e inmediatamente después de la anomalía. La misma inmediatez se exige en el artículo 15 para pedir al Jefe de Estación la nota que haga constar la circunstancia.', 4);

q('4.5', 3, 'Un viajero adquiere un título después de que se le haya informado de que hay una suspensión del servicio. Ese viajero:',
  ['No tendrá derecho a la devolución de su importe', 'Tendrá derecho a la devolución en metálico únicamente',
   'Tendrá derecho a un título equivalente, pero no a metálico', 'Tendrá los mismos derechos que el resto de viajeros'], 0,
  'El artículo 27 excluye del derecho de devolución a quienes compran el título ya informados de la incidencia. La lógica es que asumen voluntariamente el riesgo conociéndolo de antemano.', 6);

q('4.5', 2, 'Los Cuadros Horario de Servicio de Transporte definen el intervalo de paso de trenes por cada estación cuando este sea:',
  ['Inferior a siete minutos y treinta segundos', 'Superior a quince minutos',
   'Superior a siete minutos y treinta segundos, en cualquier día', 'Igual o inferior a cinco minutos'], 0,
  'El artículo 11 usa el umbral de 7 min 30 s: por debajo se define el intervalo en minutos, y a partir de ese valor se refleja el horario de paso, pero solo en días laborables de lunes a viernes. Ese mismo umbral reaparece en el artículo 12 para las devoluciones.', 4);

tema('4.6', 'Información al viajero y reclamaciones',
'**Artículo 18. Horarios.** El horario de apertura y cierre del servicio se expondrá en los **vestíbulos de todas las estaciones**, y también en aquellos **accesos** cuyos vestíbulos tengan **más de dos tramos de escaleras de profundidad** o se encuentren a **más de 50 metros en planta**.\n\n**Artículo 19. Tarifas.** El **Cuadro de Tarifas vigente completo** se expondrá en **vestíbulos y andenes**.\n\n**Artículo 20. Cambio de tarifas.** Cuando se autorice un cambio por modificación de precios, tipos de títulos o condiciones de utilización, se anunciará oportunamente, informando de las medidas para garantizar el servicio ya abonado. Esas medidas podrán consistir, alternativa o conjuntamente, en:\n\n- El **canje** de los títulos válidos no agotados antes de la entrada en vigor de la nueva tarifa.\n- **Permitir la utilización de los títulos antiguos durante al menos quince días** a partir del cambio.\n\n**Artículo 21. Información en estaciones.** En lugares convenientes se situará la información necesaria sobre el conjunto de la red, itinerarios, correspondencia, acceso, estación y andén. En **todas las estaciones** debe existir: **plano de la red, Reglamento de Viajeros, horario de apertura y cierre, Cuadro Horario, Cuadro de Tarifas e informaciones especiales**. Los accesos con horarios distintos del general estarán **debidamente señalizados**.\n\n**Artículo 22. Avisos por suspensión.** En caso de suspensión **prevista**, o **como máximo quince minutos después de una suspensión imprevista**, se expondrán avisos **antes de los puntos de control de entrada**, en los **andenes** y en los **accesos** con más de dos tramos de escaleras o a más de 50 metros en planta.\n\n**Artículo 23. Libro de reclamaciones.** Los viajeros podrán formular por escrito sus reclamaciones en el libro oficial, **visado por el Consorcio**, que estará a su disposición en las estaciones señalizadas en el Cuadro de Información de vestíbulos y andenes. Requisito: **exhibir un título de transporte válido para viajar en Metro y su DNI o Pasaporte**.',
[
 { anverso: '¿En qué accesos, además de los vestíbulos, debe exponerse el horario del servicio?', reverso: 'En los que tengan más de dos tramos de escaleras de profundidad o estén a más de 50 metros en planta.' },
 { anverso: 'Ante un cambio de tarifas, ¿cuánto tiempo mínimo pueden seguir usándose los títulos antiguos?', reverso: 'Al menos quince días desde el cambio, como alternativa o complemento al canje.' },
 { anverso: '¿En qué plazo hay que exponer los avisos tras una suspensión imprevista?', reverso: 'Como máximo quince minutos después.' },
 { anverso: '¿Qué hay que exhibir para que te den el libro de reclamaciones?', reverso: 'Un título de transporte válido para viajar en Metro y el DNI o Pasaporte.' }
], [5]);

q('4.6', 3, 'Tras una suspensión imprevista del servicio, los avisos al público deberán exponerse:',
  ['Como máximo quince minutos después', 'Inmediatamente, sin margen alguno',
   'En el plazo de una hora', 'Al finalizar la jornada de servicio'], 0,
  'El artículo 22 concede un margen máximo de quince minutos para una suspensión imprevista; si la suspensión está prevista, los avisos se exponen con antelación. Los avisos van antes de los puntos de control de entrada, en los andenes y en los accesos profundos.', 5);

q('4.6', 2, 'Para obtener el libro de reclamaciones, el viajero debe exhibir:',
  ['Un título de transporte válido para viajar en Metro y su DNI o Pasaporte',
   'Únicamente su DNI o Pasaporte', 'Únicamente un título de transporte válido',
   'Nada: basta con solicitarlo en cualquier estación'], 0,
  'El artículo 23 exige ambas cosas: título válido y documento de identidad. Además, el libro solo está disponible en las estaciones señalizadas a tal fin en el Cuadro de Información de vestíbulos y andenes, no en todas.', 5);

q('4.6', 3, 'Ante un cambio autorizado de tarifas, las medidas para garantizar el servicio ya abonado podrán consistir en:',
  ['El canje de los títulos no agotados o permitir su uso durante al menos quince días desde el cambio',
   'Únicamente la devolución en metálico del importe no consumido',
   'El canje obligatorio en el plazo de 48 horas', 'La prórroga automática por un mes de todos los títulos'], 0,
  'El artículo 20 prevé esas dos medidas, alternativa o conjuntamente: canje de los títulos válidos no agotados, o permitir usar los antiguos durante al menos quince días. La devolución en metálico pertenece al régimen de incidencias del artículo 14, que es otro supuesto.', 5);

q('4.6', 2, 'El Cuadro de Tarifas vigente completo debe exponerse:',
  ['En los vestíbulos y andenes de las estaciones', 'Solo en los vestíbulos',
   'Solo en los andenes', 'Únicamente en los Centros de Atención al Cliente'], 0,
  'El artículo 19 exige exponerlo en vestíbulos y andenes. Compáralo con el Reglamento de Viajeros, que según el manual de conocimientos específicos figura solo en vestíbulos: son dos documentos con reglas de exposición distintas.', 5);

tema('4.7', 'Deberes del viajero: el título de transporte',
'**Artículo 24. La regla básica.** Todo viajero, **antes de iniciar su viaje**, ha de estar provisto de un título de transporte **válido y acorde con el trayecto**, que deberá haber sometido a la **oportuna validación y cancelación** para dicho trayecto.\n\n**Carece de validez** el título que:\n\n- Resulte **insuficiente**.\n- **No se corresponda** con el trayecto a efectuar.\n- **No haya sido validado y cancelado** para dicho trayecto.\n\n**Excepción:** los **niños menores de cuatro años**, y los casos que establezca el órgano con competencia tarifaria.\n\n**Conservación.** Durante todo el viaje y **hasta llegar a las barreras de salida** de la estación de destino, el viajero deberá **conservar el título a disposición** de cualquier agente del Ferrocarril Metropolitano o de la **Inspección del CRTM** que se lo solicite.\n\n**La regla de las tres horas.** Los portadores de títulos con un **número limitado de viajes** tienen derecho a permanecer **durante las tres horas siguientes a su validación** en las instalaciones de la red. **Transcurrido ese tiempo, serán considerados a todos los efectos viajeros sin título de transporte válido.**\n\n**Artículo 25.** Son títulos en vigor los aprobados en cada momento por el **CRTM**, que **preceptivamente figurarán en el Cuadro de Tarifas**. Los títulos válidos son de **utilización personal**, cualesquiera que sean sus características.\n\n**Artículo 26.** Al adquirir el título, en taquilla o en máquina, el viajero debe **asegurarse de que es el adecuado** al trayecto y de que **el cambio recibido es correcto**. Si no lo es, deberá ponerlo **en el mismo momento** en conocimiento del personal.',
[
 { anverso: '¿Cuánto tiempo puede permanecer en la red quien lleva un título de número limitado de viajes?', reverso: 'Tres horas desde la validación. Pasadas, se le considera a todos los efectos viajero sin título válido.' },
 { anverso: '¿Hasta dónde hay que conservar el título de transporte?', reverso: 'Hasta llegar a las barreras de salida de la estación de destino, a disposición de cualquier agente o de la Inspección del CRTM.' },
 { anverso: '¿Quién está exceptuado de llevar título de transporte?', reverso: 'Los niños menores de cuatro años, y los casos que establezca el órgano con competencia tarifaria.' },
 { anverso: '¿Cuándo hay que avisar de que el título adquirido o el cambio no son correctos?', reverso: 'En el mismo momento, al personal de la empresa explotadora.' }
], [5, 6]);

q('4.7', 3, 'Un viajero con un título de 10 viajes valida a las 10:00 h. Si a las 13:30 h sigue dentro de las instalaciones:',
  ['Se le considera, a todos los efectos, viajero sin título de transporte válido',
   'Puede permanecer sin límite, porque su título aún tiene viajes',
   'Debe abonar un suplemento del 50 % del recargo', 'Dispone de una hora adicional de cortesía'], 0,
  'El artículo 24 concede tres horas desde la validación a los portadores de títulos con número limitado de viajes. A las 13:30 se han superado, de modo que pasa a considerarse viajero sin título válido, con el recargo que eso conlleva.', 6);

q('4.7', 2, 'Están exceptuados de la obligación de llevar título de transporte:',
  ['Los niños menores de cuatro años', 'Los niños menores de siete años',
   'Los mayores de 65 años', 'Las personas con discapacidad igual o superior al 65 %'], 0,
  'El artículo 24 exceptúa a los menores de cuatro años, además de los casos que pueda establecer el órgano con competencia tarifaria. Los niños de 4 a 6 años necesitan Tarjeta Infantil o, en su defecto, adquirir un título.', 5);

q('4.7', 2, 'El viajero debe conservar su título de transporte:',
  ['Durante todo el viaje y hasta llegar a las barreras de salida de la estación de destino',
   'Solo hasta atravesar los tornos de entrada', 'Durante las tres horas siguientes a la compra',
   'Únicamente mientras permanezca en el andén'], 0,
  'La obligación se extiende hasta las barreras de salida de la estación de destino, y el título debe estar a disposición de cualquier agente o de la Inspección del CRTM que lo solicite. No basta con haberlo validado a la entrada.', 6);

q('4.7', 3, 'Los títulos de transporte en vigor son los aprobados por:',
  ['El CRTM, y figurarán preceptivamente en el Cuadro de Tarifas', 'Metro de Madrid, S.A.',
   'La Consejería de Transportes de la Comunidad de Madrid', 'El Director Gerente del CRTM por resolución'], 0,
  'El artículo 25 atribuye la aprobación de los títulos al Consorcio Regional de Transportes y exige que figuren preceptivamente en el Cuadro de Tarifas. El Director Gerente del CRTM tiene competencia en otra materia: incoar y resolver los procedimientos sancionadores.', 6);

tema('4.8', 'Recargo extraordinario, infracciones y sanciones',
'**Artículo 28. El recargo extraordinario.** Los viajeros **desprovistos de título válido** están obligados a abonar, en concepto de recargo extraordinario por el servicio utilizado o que se pretenda utilizar, el importe de **ochenta euros**, que se **reduce a la mitad** en caso de **pago inmediato o en el plazo máximo de quince días hábiles** a la empresa explotadora.\n\n**Quién se considera desprovisto de título válido.** Quienes, al serles requerida la exhibición por un agente o por la Inspección del CRTM:\n\n- **No muestren título alguno.**\n- Muestren **título insuficiente** o **no coincidente** con el trayecto realizado o en curso.\n- Exhiban un título **no debidamente validado y cancelado** para ese trayecto.\n\n**Impago.** De no hacerse efectivo el pago y **transcurridos treinta días** desde que se constató la falta de título, se cursará **denuncia** a efectos de incoar el procedimiento sancionador.\n\n**Retirada del título.** Comprobada la **utilización incorrecta** de un título, podrá ser **retirado** por cualquier agente o por la Inspección del CRTM, y **no se devolverá** hasta que se aclare ante el Consorcio que la situación fue ajena al viajero, o se satisfaga la sanción correspondiente.\n\n**Marco normativo aplicable.** Los viajeros están sujetos a las obligaciones y prohibiciones del **artículo 142.14 de la Ley 16/1987, de 30 de julio, de Ordenación de los Transportes Terrestres (LOTT)** y del **artículo 7.o) de la Ley 28/2005, de 26 de diciembre**, de medidas sanitarias frente al tabaquismo.\n\n- Las infracciones se sancionan según el **artículo 143.1.a) de la LOTT**, **salvo fumar**, que se sanciona conforme al **artículo 20 de la Ley 28/2005**.\n- La **prescripción** se rige por el **artículo 30 de la Ley 40/2015, de 1 de octubre**, de Régimen Jurídico del Sector Público.\n\n**Artículo 30. La Inspección es autoridad.** Conforme al **artículo 33.1 de la LOTT**, el personal de Inspección del CRTM tiene, en el ejercicio de sus funciones, **la consideración de autoridad**, y se le expide un **distintivo acreditativo** con el que está **obligado a identificarse** ante cualquier usuario que lo solicite.\n\n**Artículo 33. Órgano competente.** Para **incoar y resolver** los procedimientos sancionadores es el **Director Gerente del Consorcio Regional de Transportes**. El procedimiento se **iniciará siempre de oficio**, por propia iniciativa o como consecuencia de denuncia.\n\n**Disposición adicional única.** Se habilita al **Consejo de Administración del CRTM** para acordar la **modificación de la cuantía del recargo extraordinario**.',
[
 { anverso: '¿Cuál es el importe del recargo extraordinario y cómo se reduce?', reverso: '80 euros, reducidos a la mitad si se paga de inmediato o en el plazo máximo de quince días hábiles.' },
 { anverso: '¿Cuántos días han de pasar sin pagar el recargo para que se curse denuncia?', reverso: 'Treinta días desde que se constató la falta de título.' },
 { anverso: '¿Qué consideración tiene el personal de Inspección del CRTM?', reverso: 'La de autoridad, conforme al artículo 33.1 de la LOTT. Debe identificarse con su distintivo ante cualquier usuario que lo solicite.' },
 { anverso: '¿Quién incoa y resuelve los procedimientos sancionadores?', reverso: 'El Director Gerente del Consorcio Regional de Transportes. Siempre de oficio.' },
 { anverso: '¿Quién puede modificar la cuantía del recargo extraordinario?', reverso: 'El Consejo de Administración del CRTM, por la disposición adicional única.' }
], [6, 7, 8]);

q('4.8', 2, 'El importe del recargo extraordinario por viajar sin título válido es de:',
  ['80 euros, reducidos a la mitad si se paga de inmediato o en quince días hábiles',
   '80 euros, sin posibilidad de reducción', '100 euros, reducidos a 50 si se paga en el acto',
   '50 euros, reducidos a 25 si se paga en quince días'], 0,
  'El artículo 28 fija 80 euros con reducción a la mitad por pago inmediato o dentro de los quince días hábiles siguientes. La cuantía puede modificarla el Consejo de Administración del CRTM, por lo que conviene verificarla si ha pasado tiempo.', 6, { volatil: true });

q('4.8', 3, 'Si el viajero no abona el recargo extraordinario, se cursará denuncia transcurridos:',
  ['Treinta días desde que se constató la falta de título', 'Quince días hábiles desde el requerimiento',
   'Un mes desde el pago fallido', 'Diez días naturales'], 0,
  'Son treinta días desde que se constató la falta de título válido. No hay que confundirlos con los quince días hábiles del artículo 28, que son el plazo para pagar con reducción del 50 %.', 6);

q('4.8', 3, 'El órgano competente para incoar y resolver los procedimientos sancionadores previstos en el Reglamento es:',
  ['El Director Gerente del Consorcio Regional de Transportes', 'El Consejo de Administración del CRTM',
   'La Dirección General de Transportes de la Comunidad de Madrid', 'El Consejo de Administración de Metro de Madrid'], 0,
  'El artículo 33 atribuye esa competencia al Director Gerente del CRTM, y precisa que el procedimiento se inicia siempre de oficio. El Consejo de Administración del CRTM tiene otra competencia distinta: modificar la cuantía del recargo extraordinario.', 7);

q('4.8', 2, 'El personal de Inspección del Consorcio Regional de Transportes, en el ejercicio de sus funciones:',
  ['Tiene la consideración de autoridad y debe identificarse ante quien lo solicite',
   'Tiene la consideración de agente colaborador, sin carácter de autoridad',
   'Solo puede actuar acompañado de agentes de la Policía Nacional',
   'No puede requerir la exhibición del título de transporte'], 0,
  'El artículo 30 del Reglamento, remitiéndose al artículo 33.1 de la LOTT, le otorga la consideración de autoridad, y le obliga a identificarse mediante el distintivo acreditativo ante cualquier usuario que lo solicite.', 7);

q('4.8', 3, 'La infracción consistente en fumar en los espacios del Ferrocarril Metropolitano se sanciona conforme a:',
  ['El artículo 20 de la Ley 28/2005, de 26 de diciembre', 'El artículo 143.1.a) de la Ley 16/1987',
   'El artículo 142.14 de la Ley 16/1987', 'El artículo 30 de la Ley 40/2015'], 0,
  'El artículo 31 establece la regla general de sancionar según el artículo 143.1.a) de la LOTT, con una excepción expresa: fumar, que se sanciona por el artículo 20 de la Ley 28/2005 antitabaco. El artículo 30 de la Ley 40/2015 regula la prescripción, no la sanción.', 7);

q('4.8', 3, 'Un viajero exhibe un título de transporte válido pero que no está debidamente validado y cancelado para el trayecto que realiza. A efectos del Reglamento:',
  ['Se le considera viajero desprovisto de título de transporte válido',
   'Se le permite validarlo en ese momento sin consecuencias',
   'Solo se le sanciona si el título es de otra zona tarifaria',
   'Se le retira el título pero no se le aplica recargo'], 0,
  'El artículo 28 equipara tres situaciones: no mostrar título, mostrarlo insuficiente o no coincidente con el trayecto, y mostrarlo sin validar y cancelar debidamente. En las tres, el viajero se considera desprovisto de título válido y procede el recargo.', 6);

module.exports = {
  parte: { parte: '4', titulo: 'Reglamento de Viajeros del Ferrocarril Metropolitano de Madrid',
           manual: 'Manual 4 del temario oficial · Decreto 49/1987',
           url_manual: M, color: '#0f8a4d', epigrafes },
  preguntas
};
