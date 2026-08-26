/* Parte 2 — Normas internas para la seguridad de los agentes en relación con la circulación. */
'use strict';
const M = 'https://www.metromadrid.es/sites/default/files/empleo/descargables/2.Normas_Internas_Seguridad_Agentes.pdf';
const { epigrafes, preguntas, tema, q } = require('./_util.js')(M, 'Manual 2 · Normas de seguridad');

tema('2.1', 'Ámbito de aplicación y normativa general previa',
'Estas Normas se aplican en **toda la Red operada por Metro**, **excepto** en las explotaciones que tengan **normativa propia**.\n\nSon de **obligado cumplimiento** para todos los trabajadores de Metro que:\n\n- **Intervengan en la circulación** de trenes, y/o\n- Realicen trabajos en **zonas colindantes y andenes** de estación, o\n- **Accedan a la plataforma de vía**.\n\n**Quedan fuera** del ámbito las dependencias e instalaciones **cuando permanezcan cerradas a la explotación**, y el personal que trabaje en ellas en esas circunstancias.\n\n**Qué es estar «en explotación».** Una línea, tramo, depósito o cochera está en explotación —**tanto en periodo de servicio como fuera de servicio**— cuando sus instalaciones **puedan permitir la circulación de trenes** y **exista comunicación expresa** de esa situación por parte de la Dirección, que publicará el momento a partir del cual quedan o no en explotación.\n\n**Prohibiciones expresas.** Queda prohibido **conducir trenes y organizar, coordinar o ejecutar trabajos al margen o en contra** de estas Normas, así como realizar cualquier actividad que ponga en peligro la propia integridad física o la de otros. Su incumplimiento se considera **incumplimiento laboral**.\n\n**Programación de los trabajos.** Todos los trabajos que afecten o pudieran afectar a la circulación estarán **programados con anterioridad** y se reflejarán en un **documento diario** comunicado a los departamentos afectados.\n\n- La **Comisión de programación** coordina todas las peticiones y confecciona el **documento de programación**, con **todos los cortes de tensión y trabajos previstos** para cada día, los departamentos solicitantes y la programación de vehículos.\n- **No podrán autorizarse trabajos no incluidos** en él, salvo **emergencias** surgidas con posterioridad a su distribución, que deberán justificarse ante la **Dirección de Operación**. Esas emergencias también quedan sujetas a estas Normas.\n\n**Incompatibilidad.** No se autorizará la programación **simultánea** de trabajos en la plataforma de vía y circulación de trenes en la **misma área de trabajo**, salvo que sea **para trabajar conjuntamente**, cuando esté prevista una **falta total de funcionamiento de todos los sistemas de comunicación** que haga imposible comunicarse con el PCC.\n\nLas comunicaciones se realizarán conforme al **Manual de estilo para las comunicaciones establecidas con trenes y vehículos** vigente en cada momento.',
[
 { anverso: '¿Cuándo se considera que una instalación está «en explotación»?', reverso: 'Cuando sus instalaciones puedan permitir la circulación de trenes y exista comunicación expresa de la Dirección. Vale tanto en periodo de servicio como fuera de servicio.' },
 { anverso: '¿Qué órgano coordina y programa los trabajos que afectan a la circulación?', reverso: 'La Comisión de programación, que elabora el documento de programación diario.' },
 { anverso: '¿Pueden autorizarse trabajos no incluidos en el documento de programación?', reverso: 'No, salvo emergencias posteriores a su distribución, que deben justificarse ante la Dirección de Operación.' },
 { anverso: '¿Qué consecuencia tiene incumplir estas Normas?', reverso: 'Se considera incumplimiento laboral para los trabajadores de Metro.' }
], [11, 12, 13]);

q('2.1', 2, 'Las Normas internas para la seguridad de los agentes son de aplicación:',
  ['En toda la Red operada por Metro, excepto en las explotaciones que tengan normativa propia',
   'Únicamente en las vías principales de metro pesado', 'Solo durante el periodo fuera de servicio',
   'En toda la Red sin excepción alguna'], 0,
  'El capítulo 1 establece la aplicación en toda la Red operada por Metro, con la salvedad expresa de las explotaciones con normativa propia. Además quedan fuera las dependencias cerradas a la explotación y el personal que trabaje en ellas en esas circunstancias.', 11);

q('2.1', 3, 'El documento de programación diario lo elabora:',
  ['La Comisión de programación', 'El Puesto de Control Central', 'La Dirección de Operación',
   'El responsable operativo de cada estación'], 0,
  'La Comisión de programación, constituida con personal delegado de distintos departamentos, coordina las peticiones y confecciona el documento. La Dirección de Operación aparece en otro papel: ante ella se justifican las emergencias que no estaban programadas.', 12);

q('2.1', 3, 'Un trabajo urgente que no figura en el documento de programación:',
  ['Solo puede realizarse si es una emergencia surgida tras su distribución y se justifica ante la Dirección de Operación',
   'No puede realizarse en ningún caso', 'Puede realizarse con la sola autorización del PCC',
   'Puede realizarse si lo autoriza el responsable operativo de la estación'], 0,
  'La regla general es que no se autoricen trabajos ajenos al documento de programación. La única excepción son las emergencias posteriores a su distribución, que deben justificarse ante la Dirección de Operación y que quedan igualmente sujetas a estas Normas.', 12);

q('2.1', 3, 'Se admite la programación simultánea de trabajos en la plataforma de vía y circulación de trenes en la misma área de trabajo:',
  ['Solo si es para trabajar conjuntamente, cuando esté prevista una falta total de los sistemas de comunicación con el PCC',
   'Siempre que el PCC lo autorice expresamente, aunque los trabajos y los trenes actúen por separado',
   'Nunca, ni siquiera cuando el tren y el personal tengan que trabajar conjuntamente',
   'Solo durante el periodo de servicio, cuando la circulación se encuentra regulada por señales'], 0,
  'La Norma prohíbe esa simultaneidad con una excepción muy concreta: que sea para trabajar conjuntamente y esté prevista una falta total de funcionamiento de todos los sistemas de comunicación que impida contactar con el PCC.', 12);

tema('2.2', 'Áreas, zonas y periodos: las definiciones que hay que distinguir',
'Este capítulo es el que más confusiones genera, porque hay muchos conceptos parecidos. La clave es fijarse en **quién está y qué se hace**.\n\n**Área de trabajo.** Tramo de línea en el que **se autoriza la realización de trabajos en el periodo fuera de servicio**. Puede abarcar una estación, una interestación, un tramo de piñón de salida a piñón de salida, o varias estaciones e interestaciones contiguas. Puede haber en ella uno o varios equipos de trabajadores y/o trenes. **El acceso deberá ser siempre autorizado por el PCC.** Como mínimo abarcará la longitud comprendida entre **las balizas rojas o las luces rojas** que la delimitan. En **trabajos itinerantes**, se considera siempre el tramo **desde el piñón de salida de una estación hasta el piñón de salida de la siguiente**, ocupado en cada momento por el equipo.\n\n**Área de seguridad.** Tramo de línea **a cada lado del área de trabajo**, establecido para **proteger** a los equipos que la ocupan, y **por el cual se prohíbe la circulación de trenes sin autorización expresa del PCC**.\n\n**Zona de trabajo.** Tramo de línea en el que **se encuentra personal trabajando** en la plataforma de vía.\n\n**Zona de obras.** Tramo de línea en el que **se están realizando actuaciones** por las que **se limita la velocidad**, y en el cual, **durante el periodo de servicio, NO hay personal trabajando**.\n\n> La diferencia entre **zona de trabajo** y **zona de obras** es exactamente esa: en la de trabajo **hay personas**; en la de obras, **no** durante el servicio.\n\n**Zona colindante.** Espacio comprendido **entre los límites de la plataforma de vía y los cerramientos exteriores**. También lo son los recintos con comunicación con el túnel: cocheras, pozos de ventilación, pozos de bombas, salidas de emergencia, galerías de cables.\n\n**Periodo de servicio.** De aplicación **individualizada para cada línea**: desde la **apertura del servicio al público**, incrementado en el tiempo necesario para la **distribución previa de los trenes**, hasta el **encierre del último tren de viajeros**.\n\n**Periodo fuera de servicio.** Desde la finalización del periodo de servicio hasta el inicio del siguiente. Normalmente para **trabajos nocturnos**. En caso de **suspensión de servicio** en un tramo, en ese tramo se aplica la normativa del **periodo fuera de servicio**.\n\n**Saco de maniobras.** En las estaciones **finales de línea**, el lugar comprendido entre el **piñón extremo y el final de la línea**, donde pueden realizarse la **inversión de marcha y el estacionamiento**. Si se suspende el servicio en un tramo, las estaciones finales de ese tramo se consideran finales de línea.\n\n**Rampa y pendiente.** **Rampa** = plano inclinado **ascendente**. **Pendiente** = plano inclinado **descendente**.',
[
 { anverso: '¿Qué diferencia hay entre zona de trabajo y zona de obras?', reverso: 'En la zona de trabajo hay personal trabajando en la plataforma de vía. En la zona de obras se limita la velocidad pero, durante el periodo de servicio, no hay personal.' },
 { anverso: '¿Qué es el área de seguridad?', reverso: 'El tramo a cada lado del área de trabajo, donde se prohíbe la circulación de trenes sin autorización expresa del PCC.' },
 { anverso: '¿Cuándo empieza y cuándo acaba el periodo de servicio?', reverso: 'Desde la apertura al público, más el tiempo de distribución previa de los trenes, hasta el encierre del último tren de viajeros. Se aplica línea por línea.' },
 { anverso: '¿Qué normativa se aplica en un tramo con el servicio suspendido?', reverso: 'La del periodo fuera de servicio.' },
 { anverso: '¿Qué es una rampa y qué es una pendiente?', reverso: 'Rampa: plano inclinado ascendente. Pendiente: plano inclinado descendente.' },
 { anverso: '¿Qué es el saco de maniobras?', reverso: 'En estaciones finales de línea, el espacio entre el piñón extremo y el final de la línea, para inversión de marcha y estacionamiento.' }
], [14, 15, 17, 18, 20]);

q('2.2', 3, 'La diferencia esencial entre una «zona de trabajo» y una «zona de obras» es que:',
  ['En la zona de trabajo hay personal trabajando en la plataforma de vía; en la zona de obras, durante el periodo de servicio, no lo hay',
   'La zona de obras solo existe en vías secundarias', 'La zona de trabajo no limita la velocidad de los trenes',
   'La zona de obras solo se establece fuera del periodo de servicio'], 0,
  'La presencia o ausencia de personal es el criterio que las separa, y de ahí derivan señalizaciones y actuaciones muy distintas: cartel precautorio por presencia de personal frente a cartel precautorio por zona de obras.', 20);

q('2.2', 2, 'El área de seguridad se define como:',
  ['El tramo de línea a cada lado del área de trabajo por el que se prohíbe circular sin autorización expresa del PCC',
   'El tramo de línea donde se autoriza la realización de trabajos',
   'La franja de borde de andén de 80 cm', 'El espacio entre la plataforma de vía y los cerramientos exteriores'], 0,
  'El área de seguridad envuelve al área de trabajo y protege a quienes la ocupan. El tramo donde se autorizan los trabajos es el área de trabajo, la franja de 80 cm es la Zona A del andén y el espacio hasta los cerramientos es la zona colindante.', 14);

q('2.2', 3, 'El periodo de servicio comprende:',
  ['Desde la apertura al público, incrementado en el tiempo de distribución previa de los trenes, hasta el encierre del último tren de viajeros',
   'Desde la salida del primer tren hasta la llegada del último a su cabecera',
   'El horario comercial publicado en los Cuadros Horario, exactamente',
   'Desde las 6:00 hasta las 1:30, de forma uniforme en toda la red'], 0,
  'La definición incluye expresamente el tiempo previo necesario para distribuir los trenes a lo largo de la línea, de modo que el periodo de servicio empieza antes de que abra la estación al público. Además es de aplicación individualizada para cada línea.', 17);

q('2.2', 3, 'En un tramo de línea con el servicio suspendido se aplicará la normativa correspondiente:',
  ['Al periodo fuera de servicio', 'Al periodo de servicio', 'A las vías secundarias',
   'A las áreas de trabajo, en todo caso'], 0,
  'La Norma es explícita: en el tramo suspendido rige la normativa del periodo fuera de servicio. En coherencia, las estaciones finales de ese tramo pasan además a considerarse estaciones finales de línea a efectos de saco de maniobras.', 17);

q('2.2', 2, 'En términos de la Norma, una «rampa» es:',
  ['Un plano inclinado de la vía en sentido ascendente', 'Un plano inclinado de la vía en sentido descendente',
   'El dispositivo de acceso al tren para sillas de ruedas', 'El acceso peatonal desde el andén a la plataforma de vía'], 0,
  'Rampa es ascendente y pendiente es descendente. En el lenguaje ferroviario ambos términos son técnicos y opuestos, a diferencia del uso coloquial en el que se emplean casi como sinónimos.', 17);

q('2.2', 3, 'En los trabajos itinerantes, el área de trabajo se corresponde siempre con:',
  ['El tramo desde el piñón de salida de una estación hasta el piñón de salida de la siguiente, ocupado en cada momento por el equipo',
   'La totalidad de la línea', 'La distancia entre las dos balizas rojas colocadas por el equipo',
   'Una única interestación, la que se esté ocupando'], 0,
  'Para trabajos itinerantes la Norma fija ese tramo de piñón de salida a piñón de salida. La delimitación por balizas rojas es el mínimo que abarca un área de trabajo ordinaria, no la regla específica de los itinerantes.', 14);

tema('2.3', 'Marcha a la vista, paso de hombre y el PCC',
'**Marcha a la vista.** Conducción **manual** que impone al conductor la obligación de **avanzar con prudencia**, regulando la velocidad de acuerdo con **la parte de vía que visualiza por delante**, de forma que sea **posible detener el tren ante cualquier persona u obstáculo visible desde la cabina** o ante una señal de parada.\n\n**Marcha a paso de hombre.** Conducción manual a una velocidad **aproximada de 5 km/h**, equivalente a la de una persona andando.\n\n> No confundas: la marcha a la vista **no tiene una cifra** asociada, depende de la visibilidad. El paso de hombre sí: **unos 5 km/h**.\n\n**Modos de conducción, según esta Norma:**\n\n- **M+20**: modo manual que **no permite rebasar los 20 km/h**.\n- **M+ATP**: modo manual que no permite rebasar una cierta velocidad, llamada **velocidad máxima de seguridad**, para un itinerario establecido.\n- **ATO**: modo **automático protegido por ATP**, en el que el propio tren, una vez iniciada la marcha, desarrolla su velocidad y **se detiene en el siguiente punto de parada sin intervención del conductor**.\n\n**Auto-Shunt.** Maniobra de **inversión de marcha** que se realiza en el modo de conducción **ATO**, **normalmente sin conductor** en una o en las dos cabinas de mando extremas del tren.\n\n**Circulación a contravía.** **Marcha adelante** de un tren, en **sentido contrario** al usualmente asignado a la vía por la que circula, **con conductor en la cabeza del tren**.\n\n**El Puesto de Control Central (PCC).** Centro donde se gestiona, controla y supervisa la operación. Lo forman **cuatro puestos**:\n\n| Puesto | Responsable de |\n|---|---|\n| **Puesto de Mando de Trenes** | Organizar, coordinar, supervisar y dirigir la **circulación** por líneas, depósitos y cocheras |\n| **Puesto de Control de Estaciones** | Control centralizado y **telemando de las instalaciones** de estaciones y coordinación del personal en incidencias |\n| **Despacho de Cargas** | **Telemando de los sistemas de corte y reposición de tensión** y gestión de la energía |\n| **Puesto de Control de Seguridad** | Gestión y coordinación de la **seguridad de las personas y de las instalaciones** |\n\n**Responsable operativo.** La persona que realiza **la supervisión y el control de la circulación** en la línea, estación, depósito o cochera **que tiene a su cargo**.\n\n**Testigo piloto.** Elemento o documento que, **tras su recepción por un conductor, le autoriza a realizar un recorrido determinado en situaciones de servicio degradadas**.',
[
 { anverso: '¿A qué velocidad equivale la marcha a paso de hombre?', reverso: 'Aproximadamente 5 km/h, la de una persona andando.' },
 { anverso: '¿Qué obliga a hacer la marcha a la vista?', reverso: 'Avanzar con prudencia regulando la velocidad según la vía que se visualiza, de modo que se pueda detener el tren ante cualquier persona, obstáculo o señal de parada.' },
 { anverso: '¿Qué es el Auto-Shunt?', reverso: 'Una maniobra de inversión de marcha en modo ATO, normalmente sin conductor en una o en las dos cabinas extremas.' },
 { anverso: '¿Cuáles son los cuatro puestos que forman el PCC?', reverso: 'Puesto de Mando de Trenes, Puesto de Control de Estaciones, Despacho de Cargas y Puesto de Control de Seguridad.' },
 { anverso: '¿Qué puesto del PCC telemanda los cortes y reposiciones de tensión?', reverso: 'El Despacho de Cargas.' },
 { anverso: '¿Qué es el testigo piloto?', reverso: 'El elemento o documento que, al recibirlo el conductor, le autoriza a realizar un recorrido determinado en situaciones de servicio degradadas.' }
], [16, 17, 18, 19]);

q('2.3', 2, 'La marcha a paso de hombre corresponde a una velocidad aproximada de:',
  ['5 km/h', '10 km/h', '20 km/h', '30 km/h'], 0,
  'El paso de hombre son unos 5 km/h, la velocidad de una persona andando. Los 20 km/h son el límite del modo M+20 y los 30 km/h el de la Llave Especial por vías principales y el del paso por zonas de obras.', 16);

q('2.3', 3, 'La maniobra de Auto-Shunt consiste en:',
  ['Una inversión de marcha en modo ATO, normalmente sin conductor en las cabinas extremas',
   'La conducción manual a paso de hombre por un saco de maniobras',
   'El shuntado de los circuitos de vía por parte de un tren de trabajo',
   'La circulación a contravía autorizada por el PCC'], 0,
  'El Auto-Shunt es una inversión de marcha automatizada en ATO, y por eso los accesos a los sacos de maniobras donde está implantada llevan un cartel permanente de prohibición de paso sin autorización: puede moverse un tren sin nadie a los mandos.', 14);

q('2.3', 3, 'El telemando de los sistemas de corte y reposición de tensión y la gestión de la energía corresponde, dentro del PCC, al:',
  ['Despacho de Cargas', 'Puesto de Mando de Trenes', 'Puesto de Control de Estaciones', 'Puesto de Control de Seguridad'], 0,
  'El Despacho de Cargas es el puesto encargado de la energía. El Puesto de Mando de Trenes dirige la circulación, el de Estaciones telemanda las instalaciones de estación y el de Seguridad coordina la seguridad de personas e instalaciones.', 18);

q('2.3', 2, 'La circulación a contravía se define como:',
  ['La marcha adelante de un tren en sentido contrario al usualmente asignado a la vía, con conductor en la cabeza del tren',
   'La marcha atrás de un tren por su vía habitual',
   'La circulación por una vía banalizada en cualquier sentido',
   'El desplazamiento de un tren sin conductor en cabina'], 0,
  'Dos elementos definen la contravía: es marcha adelante, no marcha atrás, y el conductor va en la cabeza del tren. Circular por una vía banalizada en el otro sentido no es contravía, porque esa vía está señalizada y enclavada para ambos sentidos.', 15);

q('2.3', 3, 'Según esta Norma, en el modo de conducción ATO el tren:',
  ['Desarrolla su velocidad y se detiene en el siguiente punto de parada sin intervención del conductor, una vez iniciada la marcha',
   'Circula sin límite de velocidad bajo responsabilidad del conductor',
   'No puede rebasar los 20 km/h', 'Solo puede usarse en vías secundarias'], 0,
  'La definición subraya que, una vez iniciada la marcha, el tren desarrolla la velocidad y se detiene en el siguiente punto de parada por sí solo. El límite de 20 km/h corresponde al M+20 y la ausencia de límite a la Llave Especial.', 17);

tema('2.4', 'Carteles avisadores y precautorios',
'**Cartel avisador de precaución próxima.** **Anticipa una zona de trabajo**. Dimensiones aproximadas **80 × 40 cm**: una parte **amarilla de 80 × 30** y otra **azul de 80 × 10**. Inscripciones:\n\n- En **letras negras sobre fondo amarillo**: *«¡ATENCIÓN! CARTEL PRECAUTORIO EN LA SIGUIENTE ESTACIÓN»*.\n- En **letras blancas sobre fondo azul**: *«SELECCIONAR A.T.P.»*.\n\nSe sitúa en el **piñón de salida de la estación anterior** a aquella donde está el cartel precautorio por presencia de personal. Si hay **varios carteles precautorios en estaciones consecutivas**, solo hace falta **un cartel avisador**, en la estación anterior al **primero**.\n\n**Carteles precautorios.** Indican **presencia de personal** (aislado o agrupado) en la plataforma de vía **o la existencia de una zona de obras**. Se colocan en los **piñones de salida de las estaciones**, en las **bocas de acceso al túnel** desde depósitos o cocheras, y a la **salida de un túnel de enlace** entre líneas.\n\n**Hasta dónde llega la precaución que establecen:**\n\n- En una **estación intermedia**: hasta el **piñón de salida de la siguiente estación**.\n- En el piñón de salida de una **estación final de línea**, hacia saco, depósito o cochera: hasta el **fondo del saco** o hasta la **boca de acceso** a depósitos y cocheras.\n- A la **salida de un túnel de enlace**: hasta que **la cabeza del tren sobrepase el farol verde** en la línea de destino, circulando en sentido normal. **A contravía, la restricción se mantiene en toda la interestación.**\n\nTodos estos carteles deben colocarse con un **sistema de fijación que impida su retirada involuntaria** mientras dure la precaución.\n\n**Los tres tipos de cartel precautorio:**\n\n| Tipo | Aspecto | Efecto |\n|---|---|---|\n| **4.1.2.1** Presencia de personal | 80 × 40, letras negras sobre amarillo, *«¡PRECAUCIÓN! PERSONAL EN PLATAFORMA DE VÍA»* y triángulo | Parada obligatoria ante él |\n| **4.1.2.2** Zona de obras | 80 × 40, amarillo (80×30) y azul (80×10): *«¡PRECAUCIÓN! ZONA DE OBRAS»* + *«SELECCIONAR A.T.P.»* | Reducir velocidad al paso |\n| **4.1.2.3** Zona de obras desde túnel de enlace | **Retrorreflectante**, **35 × 80** (amarillo 35×50, azul 35×30): *«¡PRECAUCIÓN! ZONA DE OBRAS»* + *«VELOCIDAD MÁXIMA 30 Km/h»* | Máximo 30 km/h |\n\n> Fíjate en que el cartel del túnel de enlace es el único con las **dimensiones invertidas (35 × 80)**, el único **retrorreflectante** y el único que lleva escrita **una cifra de velocidad**.\n\n**Cartel de prohibición de paso por maniobra en Auto-Shunt.** 80 × 40 cm, fondo blanco, con señal triangular de peligro por circulación de trenes y señal circular de prohibición de paso a peatones, la leyenda **«ATENCIÓN MANIOBRA EN A.T.O.»** sobre fondo amarillo y **«PROHIBIDO EL PASO SIN AUTORIZACIÓN»** en blanco sobre rojo. Debe estar colocado **permanentemente en todos los posibles accesos** a los sacos de maniobras donde esté implantada la función Auto-Shunt.\n\n**Cartel indicador de salidas de emergencia.** **Fotoluminiscente**, rectangular, colocado en el paramento lateral del túnel. Indica la **distancia hasta las estaciones más próximas en cada sentido** o hasta la salida de emergencia, señalando **cuál es la salida más cercana**.',
[
 { anverso: '¿Qué dos leyendas lleva el cartel avisador de precaución próxima?', reverso: '«¡ATENCIÓN! CARTEL PRECAUTORIO EN LA SIGUIENTE ESTACIÓN» en negro sobre amarillo, y «SELECCIONAR A.T.P.» en blanco sobre azul.' },
 { anverso: 'Si hay varios carteles precautorios en estaciones consecutivas, ¿cuántos avisadores se colocan?', reverso: 'Solo uno, en la estación anterior a aquella donde está el primer cartel precautorio.' },
 { anverso: '¿Qué tiene de especial el cartel precautorio de zona de obras desde un túnel de enlace?', reverso: 'Es retrorreflectante, mide 35 × 80 cm y lleva la leyenda «VELOCIDAD MÁXIMA 30 Km/h».' },
 { anverso: '¿Hasta dónde establece la precaución un cartel precautorio colocado en una estación intermedia?', reverso: 'Hasta el piñón de salida de la estación siguiente.' },
 { anverso: '¿Dónde debe estar colocado permanentemente el cartel de «ATENCIÓN MANIOBRA EN A.T.O.»?', reverso: 'En todos los posibles accesos a los sacos de maniobras donde esté implantada la función Auto-Shunt.' },
 { anverso: '¿Qué información da el cartel indicador de salidas de emergencia?', reverso: 'La distancia hasta las estaciones más próximas en cada sentido o hasta la salida de emergencia, y cuál es la salida más cercana. Es fotoluminiscente.' }
], [21, 22, 23, 24, 26], ['cartel-avisador','cartel-personal','cartel-obras','cartel-obras-enlace','cartel-autoshunt']);

q('2.4', 3, 'El cartel avisador de precaución próxima debe situarse:',
  ['En el piñón de salida de la estación anterior a aquella donde se sitúa el cartel precautorio',
   'En el mismo piñón donde está el cartel precautorio', 'En el andén de la estación afectada',
   'A 150 metros antes del inicio de la zona de trabajo'], 0,
  'Se coloca en el piñón de salida de la estación anterior, para que el conductor tenga tiempo de seleccionar M+ATP. Los 150 metros antes corresponden al farol amarillo de las zonas de obras, que es otro elemento distinto.', 21);

q('2.4', 3, 'El cartel precautorio por zona de obras a la que se accede directamente desde un túnel de enlace se distingue porque:',
  ['Es retrorreflectante, mide 35 × 80 cm y ordena una velocidad máxima de 30 km/h',
   'Mide 80 × 40 cm y ordena seleccionar A.T.P.', 'Lleva una señal circular de prohibición de paso a peatones',
   'Es fotoluminiscente y señala la salida de emergencia más cercana'], 0,
  'Es el único cartel precautorio con las dimensiones invertidas, el único retrorreflectante y el único que incorpora una cifra de velocidad. Los otros dos carteles precautorios miden 80 × 40 cm y el de obras ordinario lleva la leyenda «SELECCIONAR A.T.P.».', 23, { pag2: 24 });

q('2.4', 3, 'Un cartel precautorio colocado a la salida de un túnel de enlace entre líneas establece la circulación con precaución:',
  ['Hasta que la cabeza del tren sobrepase el farol verde en la línea de destino, circulando en sentido normal',
   'Hasta el piñón de salida de la siguiente estación', 'Hasta el fondo del saco de maniobras',
   'Durante toda la línea de destino'], 0,
  'Ese es el efecto en sentido normal de circulación. A contravía la regla cambia: la restricción se mantiene en toda la interestación, porque los faroles no informan de la zona de obras en ese sentido.', 22);

q('2.4', 2, 'Si existen varios carteles precautorios en estaciones consecutivas:',
  ['Solo será necesario colocar el cartel avisador en la estación anterior a la del primer cartel precautorio',
   'Habrá que colocar un cartel avisador antes de cada uno', 'No será necesario ningún cartel avisador',
   'Se sustituirán todos por un único cartel precautorio al inicio del tramo'], 0,
  'La Norma economiza la señalización: basta un avisador antes del primero de la serie. La precaución se mantiene encadenada de un cartel precautorio al siguiente.', 21);

q('2.4', 2, 'El cartel indicador de salidas de emergencia en los túneles es:',
  ['Fotoluminiscente y se coloca en el paramento lateral del túnel', 'Retrorreflectante y se coloca en la bóveda',
   'Luminoso e intermitente, de color verde', 'De color amarillo y azul, de 80 × 40 cm'], 0,
  'Es fotoluminiscente, para ser visible sin alimentación eléctrica, y va en el paramento lateral. Indica la distancia a las estaciones más próximas en cada sentido o a la salida de emergencia, y cuál es la más cercana.', 26);

tema('2.5', 'Indicadores luminosos portátiles',
'Son señales situadas en la plataforma de vía que indican **presencia de personal**, una **zona de obras** o el **límite autorizado de circulación**.\n\n**a) Baliza roja.** Indica la **prohibición absoluta de rebasarla** cuando está situada en la plataforma de vía. Se compone de un **soporte reflectante** y una **señal luminosa roja** colocada sobre él, a una **altura mínima de 1,5 m sobre el nivel de los carriles**.\n\n**b) Luz roja.** Indica también **prohibición absoluta de rebasarla**. Consiste en una **linterna** con un foco de luz roja.\n\n**c) Farol amarillo.** Indica **inicio de precaución**.\n\n**d) Farol azul.** Indica **inicio de la zona de obras**.\n\n**e) Farol verde.** Indica **final de precaución**.\n\nLos tres faroles (amarillo, azul y verde) se sitúan **entre el carril exterior de la vía y el paramento lateral del túnel** o el límite de la plataforma de vía. Cada uno se compone de una **luz portátil intermitente** del color correspondiente y un **rectángulo reflectante del mismo color**, de dimensiones aproximadas **20 × 18 cm**.\n\n**f) Farol de indicación de parada en piñón por trabajos en la franja de borde de andén (Zona A).** Indica la **presencia de personal trabajando en la Zona A** del andén en que está situado. Se compone de un **soporte reflectante** y una **luz roja intermitente** en su parte superior.\n\n> Resumen mnemotécnico del semáforo de la vía: **amarillo = empieza la precaución**, **azul = empieza la obra**, **verde = se acabó la precaución**. Y **rojo, en cualquiera de sus formas, no se rebasa jamás**.\n\n**Colocación en una zona de obras** (sentido normal de marcha):\n\n1. **Cartel precautorio** en el piñón de salida de la estación inmediata anterior, o en el acceso al túnel desde depósitos o cocheras.\n2. **Farol amarillo**, aproximadamente **150 metros antes** del comienzo de la zona de obras.\n3. **Farol azul**, **al inicio** de la zona de obras.\n4. **Farol verde**, aproximadamente **150 metros después del final** de la zona de obras. **Excepción**: si ese final queda en una interestación a **menos de 150 metros** del piñón de salida de la siguiente estación, el farol verde se sitúa **en ese piñón de salida**.',
[
 { anverso: '¿Qué indican el farol amarillo, el azul y el verde?', reverso: 'Amarillo: inicio de precaución. Azul: inicio de la zona de obras. Verde: final de precaución.' },
 { anverso: '¿A qué altura mínima se coloca la señal luminosa de una baliza roja?', reverso: 'A 1,5 metros sobre el nivel de los carriles.' },
 { anverso: '¿A qué distancia se colocan el farol amarillo y el verde respecto a la zona de obras?', reverso: 'El amarillo, unos 150 metros antes del comienzo. El verde, unos 150 metros después del final.' },
 { anverso: '¿Qué significa un farol rojo intermitente sobre soporte reflectante en el piñón del andén?', reverso: 'Que hay personal trabajando en la franja de borde de andén (Zona A) de ese andén.' },
 { anverso: '¿Qué dimensiones tiene el rectángulo reflectante de los faroles de precaución?', reverso: 'Aproximadamente 20 × 18 cm.' }
], [24, 25, 36], ['faroles']);

q('2.5', 2, 'El farol azul situado en la plataforma de vía indica:',
  ['Inicio de la zona de obras', 'Inicio de precaución', 'Final de precaución', 'Prohibición absoluta de rebasarlo'], 0,
  'El azul marca el inicio de la zona de obras. El inicio de la precaución lo marca el amarillo y el final el verde. La prohibición absoluta de rebase corresponde a la baliza roja y a la luz roja.', 25);

q('2.5', 3, 'La señal luminosa de una baliza roja se coloca sobre su soporte a una altura mínima de:',
  ['1,5 metros sobre el nivel de los carriles', '1 metro sobre el nivel de los carriles',
   '80 centímetros sobre el nivel de los carriles', '2 metros sobre el nivel de los carriles'], 0,
  'La Norma fija 1,5 metros como altura mínima sobre el nivel de los carriles, para que resulte visible desde la cabina con suficiente antelación. La baliza roja se compone además de un soporte reflectante.', 24);

q('2.5', 3, 'En la señalización de una zona de obras, el farol verde se sitúa aproximadamente:',
  ['150 metros después del final de la zona de obras', '150 metros antes del comienzo de la zona de obras',
   'Justo al final de la zona de obras', 'En el piñón de salida de la estación anterior'], 0,
  'El verde va unos 150 metros después del final, y el amarillo unos 150 metros antes del comienzo. Hay una excepción: si el final queda a menos de 150 metros del piñón de salida de la siguiente estación, el verde se coloca en ese piñón.', 36);

q('2.5', 3, 'Un conductor encuentra en el piñón del andén de la vía por la que circula un farol con luz roja intermitente sobre soporte reflectante. Esto indica:',
  ['Que hay personal trabajando en la franja de borde de andén (Zona A)',
   'El límite de un área de trabajo, que no puede rebasarse en ningún caso',
   'El inicio de una zona de obras', 'Una avería en la señalización fija'], 0,
  'Es el farol de indicación de parada en piñón por trabajos en la Zona A. A diferencia de la baliza roja, no supone prohibición absoluta: el conductor detiene el tren sin rebasarlo, hace sonar el silbato y reanuda a paso de hombre tras comprobar que no hay impedimento.', 25);

tema('2.6', 'Personal en la plataforma de vía durante el periodo de servicio',
'**Al encontrar un cartel avisador de precaución próxima**, el conductor deberá **seleccionar el modo M+ATP si circula en ATO**, para asegurar la detención del tren **sin rebasar el piñón de salida de la estación siguiente**.\n\n**Al circular en zona protegida por cartel precautorio por presencia de personal**, las normas son siete y van en orden:\n\n- **a)** Efectuará **ineludiblemente la parada ante el cartel precautorio, sin rebasarlo**.\n- **b)** Dará el **enterado** de la presencia de personal, **firmando en la Hoja de recogida de firmas o comunicándolo al PCC**.\n- **c)** **No iniciará la marcha** hasta ser **autorizado por el PCC** a rebasar el cartel **o haber recibido del responsable operativo el testigo piloto**. El testigo piloto se **entrega en la estación donde finalice el trayecto autorizado**.\n- **d)** Una vez autorizado, llevará el tren en **conducción marcha a la vista**.\n- **e)** Hará sonar **silbato o claxon** a la entrada de la zona protegida, **cuando aviste al personal u obstáculo**, y cuantas veces lo considere necesario.\n- **f)** **Extremará** las precauciones en **curvas, pendientes, tramos de una sola vía** y donde haya **escasa visibilidad**.\n- **g)** Ante la detección de una **luz roja** en la plataforma de vía, **detendrá el tren aproximadamente 50 metros antes**, y **no reanudará la marcha hasta que le sea retirada** y **sea autorizado por uno de los trabajadores** a los que protege; después circulará **a paso de hombre** hasta asegurarse de que **la cola del tren ha sobrepasado la zona de trabajo**.\n\nSiempre que las circunstancias lo permitan, la zona protegida por el cartel precautorio tendrá el **alumbrado de túnel encendido**.\n\n**Fuentes de luz ajenas al sistema de señalización.** Si el conductor detecta una fuente de luz que **no sea** uno de los faroles amarillo, azul o verde, ni corresponda a la iluminación habitual del túnel (pozos de bombeo o ventilación, galerías de cables), deberá:\n\n1. **Seleccionar M+ATP** si circula en ATO.\n2. En todo caso, circular en **marcha a la vista**.\n3. **Parar aproximadamente 50 metros antes** de la fuente de luz.\n4. **No reanudar** hasta que le sea retirada **y sea autorizado por uno de los trabajadores** a los que pueda proteger, **o se asegure de que puede hacerlo sin riesgo**.\n5. **Informar al PCC** si es posible.\n6. Si esa luz protege a personas trabajando, al reanudar lo hará **a paso de hombre** hasta asegurarse de que **la cola del tren ha rebasado el punto**.',
[
 { anverso: '¿Qué hay que hacer al encontrar un cartel avisador de precaución próxima circulando en ATO?', reverso: 'Seleccionar el modo M+ATP, para asegurar la detención sin rebasar el piñón de salida de la estación siguiente.' },
 { anverso: 'Ante un cartel precautorio por presencia de personal, ¿qué se hace primero?', reverso: 'Parar ineludiblemente ante él, sin rebasarlo, y dar el enterado firmando en la Hoja de recogida de firmas o comunicándolo al PCC.' },
 { anverso: '¿A qué distancia hay que parar ante una luz roja en la plataforma de vía?', reverso: 'Aproximadamente 50 metros antes.' },
 { anverso: 'Tras rebasar una luz roja autorizado, ¿cómo se circula y hasta cuándo?', reverso: 'A paso de hombre, hasta asegurarse de que la cola del tren ha sobrepasado la zona de trabajo.' },
 { anverso: '¿Dónde se entrega el testigo piloto?', reverso: 'En la estación donde finalice el trayecto autorizado.' }
], [31, 32, 33]);

q('2.6', 2, 'Un conductor que circula en modo ATO encuentra un cartel avisador de precaución próxima. Debe:',
  ['Seleccionar el modo de conducción M+ATP', 'Seleccionar el modo M+20',
   'Detener el tren inmediatamente ante el cartel', 'Circular a paso de hombre hasta la siguiente estación'], 0,
  'El cartel avisador obliga a pasar de ATO a M+ATP, para asegurar que el tren pueda detenerse sin rebasar el piñón de salida de la estación siguiente, donde estará el cartel precautorio. La parada obligatoria se produce ante el cartel precautorio, no ante el avisador.', 31);

q('2.6', 3, 'Ante un cartel precautorio por presencia de personal en la plataforma de vía, el conductor no iniciará la marcha hasta:',
  ['Ser autorizado por el PCC a rebasarlo o haber recibido del responsable operativo el testigo piloto',
   'Que se retire el cartel precautorio', 'Comprobar visualmente que no hay personal en la vía',
   'Que transcurran cinco minutos desde la parada'], 0,
  'Son dos vías alternativas: autorización del PCC o entrega del testigo piloto por el responsable operativo. Antes de eso, el conductor ha debido parar sin rebasar el cartel y dar el enterado firmando o comunicándolo al PCC.', 32);

q('2.6', 2, 'Ante la detección de una luz roja en la plataforma de vía, el conductor detendrá el tren:',
  ['Aproximadamente 50 metros antes de la misma', 'Aproximadamente 150 metros antes de la misma',
   'Inmediatamente, en el punto en que la avista', 'Justo delante de ella, sin rebasarla'], 0,
  'La distancia son unos 50 metros. Los 150 metros son la distancia de colocación de los faroles amarillo y verde respecto a una zona de obras, no una distancia de parada.', 32, { pag2: 33 });

q('2.6', 3, 'Un conductor detecta en el túnel una fuente de luz ajena al sistema de señalización, distinta de los faroles amarillo, azul y verde. Debe, entre otras cosas:',
  ['Seleccionar M+ATP si circula en ATO y circular en todo caso en marcha a la vista',
   'Mantener el modo ATO y avisar al PCC al llegar a la siguiente estación',
   'Circular a paso de hombre sin detenerse', 'Detener el tren y esperar instrucciones sin más actuación'], 0,
  'La Norma exige seleccionar M+ATP si va en ATO, circular en marcha a la vista en todo caso, parar unos 50 metros antes de la luz y no reanudar hasta que le sea retirada y sea autorizado, o asegurarse de que puede hacerlo sin riesgo. Además informará al PCC si le es posible.', 33);

q('2.6', 3, 'Tras ser autorizado a reanudar la marcha después de una luz roja que protege a trabajadores, el conductor circulará a paso de hombre:',
  ['Hasta asegurarse de que la cola del tren ha sobrepasado la zona de trabajo',
   'Hasta la siguiente estación', 'Durante 100 metros', 'Hasta que la cabeza del tren rebase el farol verde'], 0,
  'La referencia es la cola del tren, no la cabeza: la marcha lenta debe mantenerse hasta que el tren entero haya dejado atrás a los trabajadores. El farol verde es la referencia en las zonas de obras sin personal.', 33);

tema('2.7', 'Conducción por vías principales en el periodo fuera de servicio',
'**Regla general.** En el periodo fuera de servicio —que se **individualiza para cada línea** y **notifica el PCC a los conductores**— la circulación **en todas las vías** se hará de forma general en **conducción marcha a la vista**, con **dos excepciones**:\n\n- Los tramos donde se haya **autorizado la circulación sin restricción de velocidad**.\n- Las **áreas de trabajo**, donde se circulará **a paso de hombre y en modo M+20**, si el tren dispone de él.\n\n**Autorización del PCC.** Los trenes que deban moverse en este periodo lo harán **siempre autorizados por el PCC**, que indicará el **recorrido autorizado** y el **tipo de conducción**. Una vez comunicado el comienzo del periodo fuera de servicio, los trenes **se detendrán, si no lo estaban ya, en la primera estación por la que pasen** y solicitarán la autorización.\n\n**Cambios de sentido.** Si dentro del tramo autorizado un tren debe moverse en los dos sentidos, **cada cambio de sentido deberá ser autorizado por el PCC** si como consecuencia tuviera que **entrar en un área de seguridad o en un área de trabajo distinta** de aquella en la que está.\n\n**Señales.** La circulación se realizará **respetando el aspecto de las señales**. Si un conductor **no autorizado previamente** encuentra una señal con **indicación de parada absoluta** (en rojo, apagada, etc.), deberá **solicitar autorización para rebasarla**.\n\n**Entrada en áreas.** Es un procedimiento **en dos pasos**:\n\n1. Para entrar en un **área de seguridad**, el PCC **informa y autoriza**, y el tren circula en **marcha a la vista**.\n2. Al llegar al **final del área de seguridad**, para acceder al **área de trabajo** deberá ser **nuevamente autorizado** por el PCC, que le indicará circular **a paso de hombre y en modo M+20**, si el tren dispone de él.\n\n**Trenes y trabajadores con un mismo responsable.** Cuando en la plataforma de vía intervengan trenes junto a trabajadores **dependiendo ambos de un mismo responsable**, el movimiento de esos trenes **dentro de su área de trabajo** lo autoriza **dicho responsable**. Si en la misma área coinciden un tren de trabajo y equipos que **no dependen del mismo responsable**, los responsables **se coordinarán entre sí**.\n\n**Luz roja fuera de servicio.** Parar **unos 50 metros antes**, no reanudar hasta que **le sea retirada y le autorice uno de los trabajadores** protegidos, y entonces: reanudar **a paso de hombre**, llevar el tren con precaución para detenerlo ante cualquier trabajador u obstáculo, **hacer sonar silbato o claxon** al divisarlos, y **extremar** precauciones en curvas, pendientes, tramos de una sola vía y escasa visibilidad.\n\n**Farol de parada en piñón por trabajos en Zona A.** El conductor **detendrá el tren sin rebasarlo**, **hará sonar el silbato o claxon** y **reanudará a paso de hombre** tras comprobar que no existe impedimento.',
[
 { anverso: '¿Cómo se circula, con carácter general, en el periodo fuera de servicio?', reverso: 'En marcha a la vista, en todas las vías. Salvo tramos autorizados sin restricción, y áreas de trabajo, donde se va a paso de hombre y en M+20.' },
 { anverso: 'Al comunicar el PCC el comienzo del periodo fuera de servicio, ¿qué hacen los trenes?', reverso: 'Se detienen en la primera estación por la que pasen, si no lo estaban ya, y solicitan autorización al PCC.' },
 { anverso: '¿Cuántas autorizaciones hacen falta para pasar de un área de seguridad a un área de trabajo?', reverso: 'Dos: una para entrar en el área de seguridad, en marcha a la vista, y otra nueva para acceder al área de trabajo, a paso de hombre y en M+20.' },
 { anverso: 'Fuera de servicio, ¿qué hace un conductor no autorizado que encuentra una señal apagada?', reverso: 'Solicitar autorización para rebasarla: la señal apagada equivale a parada absoluta.' },
 { anverso: 'Si tren y trabajadores dependen del mismo responsable, ¿quién autoriza los movimientos dentro del área de trabajo?', reverso: 'Ese mismo responsable.' }
], [33, 34, 35]);

q('2.7', 2, 'En el periodo fuera de servicio, la circulación de los trenes en todas las vías se hará de forma general:',
  ['En conducción marcha a la vista', 'En modo ATO', 'A paso de hombre en todo caso', 'En modo M+20 en todo caso'], 0,
  'La regla general es marcha a la vista, con dos excepciones: los tramos autorizados sin restricción de velocidad, y las áreas de trabajo, donde se va a paso de hombre y en M+20 si el tren dispone de ese modo.', 33);

q('2.7', 3, 'Para que un tren pase de un área de seguridad a un área de trabajo durante el periodo fuera de servicio:',
  ['Necesita una nueva autorización del PCC, que le indicará circular a paso de hombre y en modo M+20',
   'Basta la autorización inicial de entrada al área de seguridad',
   'Debe solicitarlo al responsable operativo de la estación', 'No puede acceder en ningún caso'], 0,
  'El procedimiento es de dos pasos: una autorización para entrar en el área de seguridad, circulando en marcha a la vista, y otra distinta al llegar a su final para acceder al área de trabajo, ya a paso de hombre y en M+20.', 34);

q('2.7', 3, 'Una vez comunicado por el PCC el comienzo del periodo fuera de servicio, los trenes:',
  ['Se detendrán, si no lo estaban ya, en la primera estación por la que pasen y solicitarán autorización',
   'Continuarán su recorrido hasta el depósito o cochera de destino',
   'Cambiarán automáticamente al modo M+20', 'Deberán abatir los pantógrafos'], 0,
  'La Norma obliga a detenerse en la primera estación y pedir autorización, indicando el PCC el recorrido y el tipo de conducción. A partir de ese momento ningún movimiento se hace sin autorización.', 34);

q('2.7', 3, 'Durante el periodo fuera de servicio, cada cambio de sentido de marcha dentro del tramo autorizado deberá ser autorizado por el PCC:',
  ['Si como consecuencia el tren tuviera que entrar en un área de seguridad o en un área de trabajo distinta de la que está',
   'En todos los casos, aunque permanezca dentro de la misma área de trabajo ya autorizada',
   'Solo si el nuevo sentido obliga al tren a circular a contravía dentro del tramo',
   'Solo si el tren transporta trabajadores y cambia el sentido dentro del área autorizada'], 0,
  'La condición que activa la necesidad de nueva autorización es entrar en un área de seguridad o en un área de trabajo distinta. Los movimientos en ambos sentidos dentro de la misma área ya están cubiertos por la autorización previa.', 34);

q('2.7', 2, 'Ante un farol de indicación de parada en piñón por trabajos en la franja de borde de andén, el conductor:',
  ['Detendrá el tren sin rebasarlo, hará sonar el silbato o claxon y reanudará a paso de hombre tras comprobar que no hay impedimento',
   'Detendrá el tren 50 metros antes y esperará a que se lo retiren',
   'Reducirá a 30 km/h sin detenerse', 'Seleccionará el modo M+20 y continuará'], 0,
  'Se para sin rebasarlo, se avisa acústicamente y se reanuda a paso de hombre tras comprobar que no hay impedimento. La parada a 50 metros con espera a que se retire la señal corresponde a la luz roja, que sí es de prohibición absoluta.', 35);

tema('2.8', 'Zonas de obras sin presencia de personal',
'**Señalización, en el sentido normal de marcha:**\n\n1. **Cartel precautorio** (4.1.2.2) en el **piñón de salida de la estación inmediata anterior** a la zona de obras, o en el **acceso al túnel** en el caso de depósitos o cocheras.\n2. **Farol amarillo**, aproximadamente **150 metros antes** del comienzo de la zona.\n3. **Farol azul**, **al inicio** de la zona.\n4. **Farol verde**, aproximadamente **150 metros después del final**. **Excepción**: si ese final se localiza en una interestación a **menos de 150 metros** del piñón de salida de la siguiente estación, el verde se sitúa **en ese piñón**.\n\nLas zonas de obras a las que se accede **directamente desde un túnel de enlace** se señalizan con el cartel precautorio **4.1.2.3** (el retrorreflectante de 35 × 80 con «VELOCIDAD MÁXIMA 30 Km/h»).\n\n**Vías banalizadas.** En **sentido normal de circulación** se señalizan con los cuatro elementos anteriores. En **sentido contravía**, **solo** con los carteles precautorios 4.1.2.2 o 4.1.2.3, según proceda.\n\n**Actuación del conductor.** Al encontrar el cartel precautorio de zona de obras (4.1.2.2), deberá **seleccionar M+ATP si circula en ATO**. Después:\n\n- **Al llegar al farol amarillo**, disminuirá la velocidad de forma que **al pasar junto al farol azul** vaya a una **velocidad máxima de 30 km/h**, salvo que se indique expresamente una limitación inferior.\n- **Mantendrá esa velocidad hasta que la cabeza del tren sobrepase el farol verde.**\n\nSi el cartel es el del **túnel de enlace** (4.1.2.3), circulará en la línea de destino al paso por la zona de obras **a no más de 30 km/h**, salvo limitación inferior expresa, **hasta que la cabeza del tren sobrepase el farol verde**.\n\n**Circulación a contravía con obras.** Este es el punto crítico: **los faroles precautorios informan de la zona de obras solo en el sentido normal de circulación**; **no informan cuando se circula a contravía**. Por tanto, la circulación a contravía con obras se realizará **sin atender a los faroles** que puedan encontrarse, circulando a una **velocidad máxima de 30 km/h en toda la interestación**, salvo limitación inferior expresa.',
[
 { anverso: '¿A qué velocidad máxima hay que pasar junto al farol azul?', reverso: '30 km/h, salvo que se indique expresamente una limitación inferior.' },
 { anverso: '¿Hasta cuándo se mantiene la limitación de velocidad en una zona de obras?', reverso: 'Hasta que la cabeza del tren sobrepase el farol verde.' },
 { anverso: '¿Cómo se circula a contravía por una zona de obras?', reverso: 'Sin atender a los faroles precautorios, a un máximo de 30 km/h en toda la interestación, salvo limitación inferior expresa.' },
 { anverso: 'En vías banalizadas, ¿cómo se señaliza la zona de obras en sentido contravía?', reverso: 'Solo con los carteles precautorios 4.1.2.2 o 4.1.2.3, según proceda. Sin faroles.' },
 { anverso: '¿Dónde se coloca el farol verde si el final de la obra queda a menos de 150 m del piñón de salida siguiente?', reverso: 'En ese piñón de salida.' }
], [36, 37], ['secuencia-obras']);

q('2.8', 2, 'Al pasar junto al farol azul que marca el inicio de una zona de obras, el tren debe circular a una velocidad máxima de:',
  ['30 km/h, salvo limitación inferior expresa', '20 km/h', '5 km/h, a paso de hombre', '40 km/h'], 0,
  'El conductor empieza a reducir al llegar al farol amarillo, de modo que al pasar junto al azul ya vaya a 30 km/h como máximo, y mantiene esa velocidad hasta que la cabeza del tren rebase el farol verde.', 37);

q('2.8', 3, 'Cuando se circula a contravía por un tramo con obras:',
  ['No se atiende a los faroles precautorios y se circula a un máximo de 30 km/h en toda la interestación',
   'Se atiende a los faroles igual que en sentido normal', 'Se circula a paso de hombre en toda la interestación',
   'Está prohibida la circulación hasta que finalicen las obras'], 0,
  'Los faroles solo informan en el sentido normal de circulación. Por eso, a contravía se prescinde de ellos y la limitación de 30 km/h se extiende a toda la interestación, salvo que se indique expresamente una limitación inferior.', 37);

q('2.8', 3, 'La limitación de velocidad en una zona de obras se mantiene hasta que:',
  ['La cabeza del tren sobrepase el farol verde', 'La cola del tren sobrepase el farol verde',
   'El tren llegue a la siguiente estación', 'El tren rebase el farol azul'], 0,
  'La referencia es la cabeza del tren y el farol verde. Cuidado con la simetría: cuando hay personal trabajando la referencia es la cola del tren, porque hay que dejar atrás a las personas con el tren entero.', 37);

q('2.8', 3, 'En una vía banalizada, la zona de obras en sentido de circulación a contravía se señaliza:',
  ['Solo con los carteles precautorios correspondientes, sin faroles',
   'Con cartel precautorio y los tres faroles, igual que en sentido normal',
   'Únicamente con balizas rojas', 'No se señaliza en ese sentido'], 0,
  'En sentido normal se colocan el cartel y los faroles amarillo, azul y verde. En sentido contravía, la Norma prevé solo los carteles precautorios 4.1.2.2 o 4.1.2.3 según proceda, lo que es coherente con que a contravía no se atienda a los faroles.', 37);

q('2.8', 2, 'Al encontrar un cartel precautorio por existencia de zona de obras sin personal, el conductor que circula en ATO debe:',
  ['Seleccionar el modo de conducción M+ATP', 'Detener el tren ante el cartel sin rebasarlo',
   'Seleccionar el modo M+20', 'Dar el enterado firmando la Hoja de recogida de firmas'], 0,
  'Como no hay personal en la vía, no procede la parada obligatoria ni el enterado: eso corresponde al cartel precautorio por presencia de personal. Aquí basta con pasar de ATO a M+ATP y después regular la velocidad según los faroles.', 37);

tema('2.9', 'Alumbrado del túnel y circulación de vehículos auxiliares',
'**Alumbrado del túnel.** Está **encendido permanentemente en los sacos de maniobras** y **habitualmente apagado en el resto de la red**.\n\n**Tres situaciones que hay que saber de memoria**, porque son un código de señales con el alumbrado:\n\n1. **Alumbrado encendido en vías principales sin otra señalización.** El conductor deberá **llamar al PCC** para informarse de si hay alguna incidencia. Si **no fuera posible contactar**, circulará en **marcha a la vista hasta la siguiente estación**.\n2. **Tren detenido sin tracción en una interestación** y el alumbrado **se enciende y apaga tres o cuatro veces** de forma consecutiva y **luego se queda encendido** → deberá **abatir los pantógrafos**.\n3. **Tren detenido en una interestación con los pantógrafos abatidos** y el alumbrado **se apaga durante quince segundos** y **luego se queda encendido** → deberá **subir los pantógrafos**.\n\n> Mnemotécnica: **parpadeo = bajar** pantógrafos (van a cortar tensión). **Apagón de quince segundos = subir** pantógrafos (la tensión ha vuelto).\n\nAdemás, siempre que las circunstancias lo permitan, **la zona protegida por un cartel precautorio tendrá el alumbrado encendido**.\n\n**Circulación de vehículos auxiliares por vías principales.** Tanto en periodo de servicio como fuera de servicio, se realizará **siempre en conducción marcha a la vista**, salvo que exista una restricción mayor, y respetando la señalización existente.\n\n**Excepción.** En el **periodo de servicio**, si las condiciones lo permiten y para agilizar la marcha, el **PCC podrá autorizar la circulación sin la restricción de marcha a la vista**, de forma **individual para cada vehículo**. Esa autorización **solo vale para la línea** por la que se esté circulando en ese momento: si se cambia de línea, hace falta una **nueva autorización**.\n\n**Vehículos bi-viales.** Tanto en vías principales como secundarias, **la entrada y salida de la vía** deberá ser **siempre autorizada** por el **PCC** o por el **responsable operativo** del centro donde se encuentren.',
[
 { anverso: '¿Dónde está el alumbrado del túnel permanentemente encendido?', reverso: 'En los sacos de maniobras. En el resto de la red está habitualmente apagado.' },
 { anverso: 'Tren detenido sin tracción y el alumbrado parpadea tres o cuatro veces y se queda encendido: ¿qué hago?', reverso: 'Abatir los pantógrafos.' },
 { anverso: 'Tren detenido con pantógrafos abatidos y el alumbrado se apaga quince segundos y se queda encendido: ¿qué hago?', reverso: 'Subir los pantógrafos.' },
 { anverso: '¿Cómo circulan los vehículos auxiliares por vías principales?', reverso: 'Siempre en marcha a la vista, salvo restricción mayor. En periodo de servicio el PCC puede levantar esa restricción individualmente, solo para la línea en que se circula.' },
 { anverso: '¿Quién autoriza la entrada y salida de la vía de un vehículo bi-vial?', reverso: 'Siempre el PCC o el responsable operativo del centro donde se encuentre.' }
], [38]);

q('2.9', 3, 'Un tren está detenido sin tracción en una interestación y el alumbrado del túnel se enciende y apaga tres o cuatro veces consecutivas, quedando después encendido. El conductor deberá:',
  ['Abatir los pantógrafos del tren', 'Subir los pantógrafos del tren',
   'Aplicar el freno de estacionamiento', 'Evacuar el tren por la cabina delantera'], 0,
  'El parpadeo seguido de encendido fijo es la señal para abatir pantógrafos. La señal inversa —apagón de quince segundos y después encendido— es la que ordena subirlos. Confundirlas es el error típico de esta pregunta.', 38);

q('2.9', 3, 'Un tren detenido en una interestación con los pantógrafos abatidos observa que el alumbrado del túnel se apaga durante quince segundos y luego se queda encendido. Debe:',
  ['Subir los pantógrafos del tren', 'Mantener los pantógrafos abatidos y llamar al PCC',
   'Abatir de nuevo los pantógrafos', 'Circular en marcha a la vista hasta la siguiente estación'], 0,
  'El apagón de quince segundos seguido de encendido fijo indica que puede volver a subir los pantógrafos. Es la señal complementaria del parpadeo de tres o cuatro veces, que ordena abatirlos.', 38);

q('2.9', 2, 'Un conductor encuentra el alumbrado del túnel encendido en vías principales, sin ningún otro tipo de señalización. Debe:',
  ['Llamar al PCC para informarse de si hay alguna incidencia y, si no puede contactar, circular en marcha a la vista hasta la siguiente estación',
   'Detener el tren y esperar instrucciones', 'Abatir los pantógrafos por precaución',
   'Continuar con normalidad, porque el alumbrado no es una señal'], 0,
  'El alumbrado encendido fuera de los sacos de maniobras es anómalo y por eso obliga a consultar al PCC. La marcha a la vista hasta la siguiente estación es la medida subsidiaria cuando no se logra contactar.', 38);

q('2.9', 3, 'La autorización del PCC para que un vehículo auxiliar circule sin la restricción de marcha a la vista:',
  ['Solo es válida para la línea por la que se esté circulando; si se cambia de línea hace falta una nueva',
   'Es válida para toda la jornada y para cualquier línea', 'Solo puede concederse en el periodo fuera de servicio',
   'La concede el responsable operativo de la estación'], 0,
  'La autorización es individual para cada vehículo, solo cabe en el periodo de servicio y su validez se agota al cambiar de línea. Fuera de servicio no se contempla esa dispensa.', 38);

tema('2.10', 'Conducción por vías secundarias',
'**Regla general.** La circulación **en todas las vías secundarias** se realizará **siempre en conducción marcha a la vista**, de tal forma que **se pueda efectuar la detención del tren inmediatamente**, respetando además las indicaciones de precaución que pudieran existir.\n\n**Modos y velocidades:**\n\n- En **vías de enlace entre líneas y depósitos o cocheras**, en las de **unión entre líneas** y en los **sacos de maniobras**, **donde existan códigos de ATP**, la conducción deberá efectuarse en **M+ATP**. Si **no fuera posible** seleccionar M+ATP —por no estar operativo o porque el tren no disponga del sistema—, la **velocidad máxima será de 20 km/h**, salvo limitación inferior expresa.\n- En las **vías de depósitos y cocheras**, la circulación se efectuará **a ser posible en M+20** y, **en cualquier caso, sin sobrepasar los 20 km/h**.\n\n**Obligaciones acústicas y de parada:**\n\n- **Antes de entrar o salir** de cualquier **recinto cerrado** de cocheras o depósitos, se **detendrá el tren** y se **hará sonar el silbato o claxon ante la puerta**, como aviso al personal que pueda haber dentro o fuera.\n- **Antes de iniciar la marcha** con un tren estacionado, se emitirá una **señal acústica preventiva**.\n- Siempre que un tren deba **atravesar un pasillo peatonal** señalizado como tal, **se detendrá antes de invadirlo** y no reanudará hasta **confirmar que no hay circulación** por él. Si hay **personas próximas**, emitirá señal acústica antes de reanudar.\n\n**Movimiento de trenes estacionados.** Una vez estacionados en sacos de maniobras, vías de depósitos o cocheras, **no podrán moverse sin conocimiento y autorización del PCC o del responsable operativo**, si lo hubiera. Si el tren está **inmovilizado para mantenimiento**, hará falta **además** la autorización del **responsable del mantenimiento**. En todo caso se dará un **toque preventivo** antes de iniciar la marcha.\n\n> **Excluidas** de esa regla: las vías **no controladas por el responsable operativo** — vías de Talleres Centrales, de uso exclusivo de mantenimiento, naves de dresinas, etc.\n\n**Prohibición absoluta.** Está **terminantemente prohibido mover un tren** que tenga colocados en los pupitres de mando de las cabinas los **carteles de «Tren en proceso de mantenimiento»**.\n\nPara las operaciones de **lavado automático** se seguirán los procedimientos particulares establecidos para cada caso.',
[
 { anverso: '¿Cómo se circula por las vías secundarias?', reverso: 'Siempre en marcha a la vista, de forma que se pueda detener el tren inmediatamente.' },
 { anverso: '¿Qué modo se usa en vías de enlace y sacos de maniobras con códigos de ATP?', reverso: 'M+ATP. Si no es posible seleccionarlo, la velocidad máxima es de 20 km/h.' },
 { anverso: '¿Qué velocidad máxima rige en las vías de depósitos y cocheras?', reverso: '20 km/h, circulando a ser posible en modo M+20.' },
 { anverso: '¿Qué hay que hacer antes de entrar o salir de un recinto cerrado de cochera o depósito?', reverso: 'Detener el tren y hacer sonar el silbato o claxon ante la puerta.' },
 { anverso: '¿Qué autorizaciones hacen falta para mover un tren inmovilizado para mantenimiento?', reverso: 'La del PCC o el responsable operativo, y además la del responsable del mantenimiento.' },
 { anverso: '¿Qué cartel impide terminantemente mover un tren?', reverso: 'El de «Tren en proceso de mantenimiento» colocado en los pupitres de mando de las cabinas.' }
], [39, 40]);

q('2.10', 2, 'En las vías de depósitos y cocheras la circulación se efectuará:',
  ['A ser posible en modo M+20 y, en cualquier caso, sin sobrepasar los 20 km/h',
   'Siempre en modo M+ATP', 'A paso de hombre en todo caso', 'Sin restricción de velocidad si el recinto está vacío'], 0,
  'La Norma prefiere el M+20 pero fija el límite de 20 km/h como obligación absoluta, se disponga o no de ese modo. El M+ATP es el exigido en vías de enlace, de unión entre líneas y sacos de maniobras donde haya códigos de ATP.', 39);

q('2.10', 3, 'En un saco de maniobras donde existen códigos de ATP, si no es posible seleccionar el modo M+ATP:',
  ['La velocidad máxima de circulación será de 20 km/h, salvo limitación inferior expresa',
   'Queda prohibida la circulación', 'Se circulará a paso de hombre', 'Se circulará a un máximo de 30 km/h'], 0,
  'La Norma prevé ese supuesto —por no estar operativo el sistema o porque el tren no lo tenga— y lo resuelve con el límite de 20 km/h. Los 30 km/h corresponden a las zonas de obras y a la Llave Especial en vías principales.', 39);

q('2.10', 2, 'Antes de entrar o salir de cualquier recinto cerrado de cocheras o depósitos, el conductor:',
  ['Detendrá el tren y hará sonar el silbato o claxon ante la puerta',
   'Reducirá a paso de hombre sin detenerse', 'Solicitará autorización al PCC',
   'Encenderá el alumbrado del recinto'], 0,
  'La obligación es doble: parar y avisar acústicamente ante la puerta, como advertencia al personal que pueda estar dentro o fuera. La autorización del PCC se exige para mover un tren ya estacionado, que es otro supuesto.', 39);

q('2.10', 3, 'Para mover un tren que se encuentra inmovilizado para mantenimiento en una vía de depósito es necesaria la autorización:',
  ['Del PCC o del responsable operativo y, además, del responsable del mantenimiento',
   'Únicamente del responsable del mantenimiento', 'Únicamente del PCC',
   'Del Jefe de Sector de la estación más próxima'], 0,
  'Se acumulan dos autorizaciones. Y si el tren lleva colocados en los pupitres los carteles de «Tren en proceso de mantenimiento», moverlo está terminantemente prohibido, con autorización o sin ella.', 39, { pag2: 40 });

q('2.10', 2, 'Cuando un tren debe atravesar un pasillo peatonal señalizado como tal:',
  ['Se detendrá antes de invadirlo y no reanudará hasta confirmar que no hay circulación por el mismo',
   'Reducirá a paso de hombre sin necesidad de detenerse', 'Hará sonar el claxon y continuará la marcha',
   'Solicitará autorización al responsable operativo'], 0,
  'La parada previa es obligatoria y la reanudación exige confirmar que no hay circulación por el pasillo. Si además hay personas próximas, se emitirá señal acústica preventiva antes de reanudar.', 40);

tema('2.11', 'Acceso a la plataforma de vía: protecciones y boletín',
'**Regla general.** Queda **terminantemente prohibida la presencia de personal en la plataforma de vía**, **excepto el tránsito de personal por las playas de vías de depósitos y cocheras**. Solo puede acceder el personal **expresamente autorizado**.\n\n> **Excepción importante:** cuando el **PCC impida y/o paralice la circulación** de trenes en un tramo, **podrá autorizar el acceso a la plataforma dentro del mismo sin necesidad de adoptar ninguna otra medida de precaución**.\n\n**Elementos de protección obligatorios.** Antes de acceder, el personal deberá disponer y hacer uso de:\n\n1. **Prenda de señalización personal de alta visibilidad.**\n2. **Linterna que permita autoseñalizarse, con doble luz: blanca por delante y roja por detrás.** Los grupos de trabajo deberán portar **como mínimo dos linternas**.\n3. **Radioteléfono u otro medio de comunicación con el PCC, por cada grupo de trabajo.** Si el grupo tiene **más de tres trabajadores**, deberán disponer de **al menos dos equipos de comunicación**.\n\n**El Boletín de acceso a la plataforma de vía.** Durante el **periodo de servicio**, todo trabajador que necesite acceder deberá hacerlo **ineludiblemente autorizado por el PCC o por el responsable operativo** y **provisto del Boletín**.\n\nAntes de autorizar el acceso hay que **garantizar que no exista circulación simultánea por ambas vías** en los lugares donde vaya a haber personal.\n\n**Cuándo NO hace falta el Boletín.** Cuando el PCC autoriza el acceso **bajo la protección de un tren situado inmediatamente detrás** de los trabajadores autorizados **e impidiendo la circulación por la otra vía**.\n\n**Tramitación.** El trabajador solicita **primero autorización al PCC** y, concedida, solicita el Boletín al **responsable operativo** de la estación, depósito o cochera, que lo cumplimenta. El boletín **permanece en poder del trabajador** y debe **entregarse al responsable operativo del recinto por donde abandone la plataforma**. Si continúa hasta la siguiente estación, entrega el boletín allí y **solicita uno nuevo**, y así sucesivamente.\n\n**Auto-Shunt.** Donde esté implantada la maniobra de inversión de marcha en Auto-Shunt, **todos los trabajadores, sin excepción**, antes de bajar a la vía deberán solicitar la **desconexión de la función Auto-Shunt** y que se **haga constar en el Boletín** que ha sido desconectada.\n\n**Señalización de la zona de trabajo:**\n\n- **Equipos que trabajen de forma dispersa**: **balizas rojas**, colocadas de forma que el conductor pueda visualizarlas con antelación y **como mínimo a 100 metros del inicio de la zona de trabajo**. **Junto a las balizas rojas permanecerá un operario** con medio de comunicación.\n- **Equipos reducidos que trabajen agrupados**: pueden sustituirse las balizas rojas por **luces rojas**, en las mismas condiciones de visibilidad.\n- **Personal itinerante**: se **autoseñalizará con sus linternas** (luces rojas).\n\n**Otras obligaciones.** Solicitar la colocación de carteles avisadores y precautorios; solicitar el **encendido del alumbrado del túnel** en la zona; **restituir a su ubicación original** cualquier indicador de precaución ajeno que se hubiera modificado; y **comunicar al PCC o al responsable operativo** el término de los trabajos, la retirada del personal y la situación de disponibilidad de las instalaciones.',
[
 { anverso: '¿Cuál es la única presencia de personal permitida en plataforma de vía sin autorización expresa?', reverso: 'El tránsito de personal por las playas de vías de depósitos y cocheras.' },
 { anverso: '¿Cómo debe ser la linterna de autoseñalización?', reverso: 'De doble luz: blanca por delante y roja por detrás. Los grupos deben llevar al menos dos.' },
 { anverso: '¿Cuántos equipos de comunicación necesita un grupo de más de tres trabajadores?', reverso: 'Al menos dos.' },
 { anverso: '¿Cuándo no hace falta el Boletín de acceso a la plataforma de vía?', reverso: 'Cuando el PCC autoriza el acceso bajo la protección de un tren situado inmediatamente detrás de los trabajadores e impidiendo la circulación por la otra vía.' },
 { anverso: '¿A qué distancia mínima del inicio de la zona de trabajo se colocan las balizas rojas?', reverso: 'Como mínimo a 100 metros, y de forma que el conductor pueda visualizarlas con suficiente antelación.' },
 { anverso: '¿Qué hay que solicitar antes de bajar a la vía donde hay Auto-Shunt?', reverso: 'La desconexión de la función Auto-Shunt, haciéndolo constar en el Boletín de acceso.' }
], [43, 44, 45, 46]);

q('2.11', 2, 'La linterna de autoseñalización obligatoria para acceder a la plataforma de vía debe tener:',
  ['Doble luz: blanca por delante y roja por detrás', 'Luz roja intermitente únicamente',
   'Luz blanca de largo alcance', 'Doble luz: amarilla por delante y verde por detrás'], 0,
  'La linterna es de doble luz, blanca hacia delante y roja hacia atrás, y los grupos de trabajo deben portar al menos dos. Los colores amarillo, azul y verde corresponden a los faroles de precaución, que son señales fijas en la plataforma, no equipos personales.', 43);

q('2.11', 3, 'Un grupo de cinco trabajadores que va a acceder a la plataforma de vía deberá disponer de:',
  ['Al menos dos equipos de comunicación con el PCC', 'Un único radioteléfono para todo el grupo',
   'Un equipo de comunicación por trabajador', 'Al menos tres equipos de comunicación'], 0,
  'La regla general es un medio de comunicación por grupo, pero cuando el grupo supera los tres trabajadores se exigen al menos dos equipos. Con cinco personas, por tanto, dos como mínimo.', 43);

q('2.11', 3, 'No será necesario el Boletín de acceso a la plataforma de vía cuando:',
  ['El PCC autorice el acceso bajo la protección de un tren situado inmediatamente detrás de los trabajadores e impidiendo la circulación por la otra vía',
   'El acceso se realice en el periodo fuera de servicio',
   'El grupo de trabajo lleve dos linternas y dos radioteléfonos',
   'El responsable operativo esté presente en la zona de trabajo'], 0,
  'Esa es la única dispensa que recoge la Norma para el periodo de servicio: la protección física de un tren situado detrás, combinada con el bloqueo de la otra vía, sustituye al Boletín.', 44);

q('2.11', 3, 'Las balizas rojas que protegen a un equipo que trabaja de forma dispersa deben colocarse:',
  ['Como mínimo a 100 metros del inicio de la zona de trabajo, con un operario junto a ellas provisto de medio de comunicación',
   'Como mínimo a 50 metros del inicio de la zona de trabajo',
   'A 150 metros, igual que el farol amarillo', 'Justo en el inicio de la zona de trabajo'], 0,
  'Son 100 metros como mínimo, atendiendo además a las condiciones geométricas del tramo, y debe permanecer junto a ellas un operario con medio de comunicación. Los 150 metros son la distancia del farol amarillo en zonas de obras y los 50 metros la distancia de parada ante una luz roja.', 45);

q('2.11', 2, 'Donde esté implantada la maniobra de inversión de marcha en Auto-Shunt, antes de bajar a la vía todos los trabajadores deberán:',
  ['Solicitar la desconexión de la función Auto-Shunt y que se haga constar en el Boletín',
   'Avisar por megafonía a los viajeros del andén', 'Solicitar el corte de tensión de la catenaria',
   'Esperar a que finalice el periodo de servicio'], 0,
  'La Norma dice «todos los trabajadores, sin excepción». La razón es evidente: en Auto-Shunt un tren puede invertir la marcha sin conductor en las cabinas extremas, de modo que la protección habitual no bastaría.', 44, { pag2: 45 });

tema('2.12', 'Trabajos en depósitos y cocheras',
'**Playas de vías (8.1).** Antes de empezar hay que **solicitar autorización al responsable operativo del depósito o cochera** o, **en su defecto, al PCC**, **informándole del alcance y la afección** de los trabajos.\n\nTodo el personal deberá:\n\n- Disponer de los **elementos de protección obligatorios** del punto 7.1 —prenda de alta visibilidad, linterna de doble luz y medio de comunicación.\n- **Señalizar adecuadamente la zona** de trabajo para advertir de su presencia en la vía.\n- **Comunicar la finalización** de los trabajos al responsable operativo o, en su defecto, al PCC.\n\n**Interior de naves (8.2).** La autorización previa se exige **solo en aquellas zonas en las que pueda producirse la circulación de un tren o en las que se pudiera invadir su gálibo**. En esas zonas hay que **señalizar** y **comunicar la finalización** igual que en las playas de vías.\n\n**Vestimenta en el interior de naves.** **Todos** los trabajadores que desempeñen su actividad en el interior de naves de depósitos o cocheras deberán ir dotados de **prenda de alta visibilidad o ropa con señalización de bandas de material retrorreflectante**.\n\n> **Única excepción**: quienes **se desplacen por el interior de las naves transitando por las zonas de paso establecidas**. Si vas por el pasillo marcado, no hace falta; si trabajas allí, sí.\n\n**Prohibición de circulación por falta de visibilidad de los indicadores (cap. 11).** Durante el periodo de servicio **no se autorizará la circulación de trenes** cuando en el recorrido haya **personal trabajando en la plataforma de vía** y el conductor **no pase necesariamente por todos los puntos donde estén los indicadores de precaución** que protegen a ese personal.\n\nEl manual da tres ejemplos de cuándo ocurre eso:\n\n- Paso de trenes **de una a otra línea**.\n- Paso **de una línea a depósito o cochera**.\n- **Vueltas de trenes de una a otra vía**.\n\nTampoco se autorizará la circulación **por las vías de enlace entre líneas** cuando en ellas haya **personal autorizado trabajando**.',
[
 { anverso: '¿A quién se pide autorización para trabajar en la playa de vías de un depósito?', reverso: 'Al responsable operativo del depósito o cochera y, en su defecto, al PCC, informando del alcance y la afección de los trabajos.' },
 { anverso: '¿Quién debe llevar prenda de alta visibilidad en el interior de las naves?', reverso: 'Todos los que desempeñen su actividad allí. Se exceptúa solo a quienes se desplazan por las zonas de paso establecidas.' },
 { anverso: '¿Cuándo hace falta autorización para trabajar dentro de una nave?', reverso: 'Cuando la zona permita la circulación de un tren o se pueda invadir su gálibo.' },
 { anverso: '¿Por qué no se autoriza circular si el conductor no pasa por todos los indicadores de precaución?', reverso: 'Porque no vería la señalización que protege al personal. Pasa al ir de una línea a otra, de línea a depósito o en las vueltas de una vía a otra.' }
], [57, 58, 61]);

q('2.12', 2, 'Para realizar trabajos en la playa de vías de un depósito hay que solicitar autorización:',
  ['Al responsable operativo del depósito o cochera y, en su defecto, al PCC',
   'Únicamente al PCC', 'Al Jefe de Sector de la estación más próxima',
   'A la Comisión de programación'], 0,
  'El orden es responsable operativo primero y PCC en su defecto, informando del alcance y la afección. La Comisión de programación coordina la planificación previa, pero no concede la autorización de acceso.', 57);

q('2.12', 3, 'En el interior de las naves de depósitos y cocheras, la obligación de llevar prenda de alta visibilidad:',
  ['Alcanza a todos los que trabajen allí, salvo a quienes solo transiten por las zonas de paso establecidas',
   'Alcanza a todo el personal sin excepción alguna',
   'Solo se aplica durante el periodo de servicio',
   'Solo se aplica a quienes accedan a la plataforma de vía'], 0,
  'La excepción es estrecha y concreta: desplazarse por las zonas de paso establecidas. Quien trabaja dentro de la nave lleva prenda de alta visibilidad o ropa con bandas retrorreflectantes.', 57);

q('2.12', 3, 'Durante el periodo de servicio no se autorizará la circulación de trenes cuando haya personal en la plataforma y:',
  ['El conductor no pase necesariamente por todos los puntos donde están los indicadores de precaución que lo protegen',
   'El alumbrado del túnel esté apagado', 'El tren circule en modo ATO',
   'No se haya cumplimentado la Hoja de recogida de firmas'], 0,
  'El fundamento es que el conductor podría no ver la señalización que protege al personal. Ocurre al pasar de una línea a otra, de una línea a depósito o cochera, y en las vueltas de trenes de una vía a otra.', 61);

q('2.12', 2, 'La autorización previa para trabajos en el interior de una nave de depósito se exige:',
  ['En las zonas donde pueda producirse la circulación de un tren o se pudiera invadir su gálibo',
   'En cualquier punto del interior de la nave', 'Solo si los trabajos duran más de una hora',
   'Solo si intervienen empresas contratistas'], 0,
  'El criterio es el riesgo ferroviario: circulación posible o invasión del gálibo. En esas zonas se exige además señalizar y comunicar la finalización de los trabajos.', 57);

tema('2.13', 'Trabajos en zonas colindantes',
'**Qué incluye (cap. 9).** Quedan incluidos **exclusivamente** los trabajos que se realizan:\n\n- Entre los **límites de la plataforma de vía y los cerramientos exteriores**.\n- En **recintos que tienen comunicación directa con el túnel**.\n\n**Excepción:** los **andenes de estación**, que se regulan en el capítulo 10.\n\nTodo el personal deberá disponer de los **elementos de protección obligatorios** del punto 7.1.\n\n**Las cuatro obligaciones (9.1):**\n\n**a)** **Solicitar al PCC la autorización** correspondiente para la ejecución de los trabajos aprobados.\n\n**b) Delimitar previamente**, con medios adecuados —**separadores, vallas, cintas**—, **la línea de separación entre la plataforma de vía y las zonas colindantes**.\n\n> Esta es la regla de oro del capítulo: **si no se delimita, se considerará toda la zona como plataforma de vía**, y habrá que aplicar el régimen mucho más exigente del capítulo 7. La cinta no es un formalismo: es lo que decide qué normativa se aplica.\n\n**c)** El acceso se efectuará **sin invadir la plataforma de vía**. Si por **causa de fuerza mayor** fuera necesario acceder a través de ella, se adoptarán las medidas del punto **7.2 durante el periodo de servicio** o del punto **7.3 en el periodo fuera de servicio**.\n\n**d)** Durante la realización de los trabajos queda **terminantemente prohibido**:\n\n- **Cruzar o permanecer** en la plataforma de vía.\n- **Invadirla u ocuparla** con cualquier elemento, equipo o herramienta de trabajo, **incluyendo su espacio aéreo**.\n\n> Lo del **espacio aéreo** es lo que más se olvida: no basta con no pisar la vía, tampoco puede asomarse una herramienta, un brazo de andamio o un cable por encima de ella.',
[
 { anverso: '¿Qué es una zona colindante a efectos de estas Normas?', reverso: 'El espacio entre los límites de la plataforma de vía y los cerramientos exteriores, y los recintos con comunicación directa con el túnel. Los andenes van por el capítulo 10.' },
 { anverso: '¿Qué pasa si no se delimita la línea de separación con la plataforma de vía?', reverso: 'Se considera toda la zona como plataforma de vía y se aplican las medidas del capítulo 7, mucho más exigentes.' },
 { anverso: '¿Con qué se delimita esa línea de separación?', reverso: 'Con medios adecuados: separadores, vallas, cintas, etc.' },
 { anverso: '¿Qué prohíbe expresamente el apartado d)?', reverso: 'Cruzar o permanecer en la plataforma de vía, e invadirla u ocuparla con cualquier elemento, equipo o herramienta, incluyendo su espacio aéreo.' }
], [58]);

q('2.13', 3, 'Si al realizar trabajos en una zona colindante no se ha delimitado la línea de separación con la plataforma de vía:',
  ['Se considerará toda la zona como plataforma de vía y se aplicarán las medidas del capítulo 7',
   'Los trabajos podrán realizarse igualmente con las medidas del capítulo 9',
   'Bastará con que el PCC autorice verbalmente', 'Deberán suspenderse los trabajos hasta el día siguiente'], 0,
  'La delimitación previa con separadores, vallas o cintas es lo que permite aplicar el régimen del capítulo 9. Sin ella, todo el espacio pasa a tratarse como plataforma de vía, con boletín de acceso y todas las cautelas del capítulo 7.', 58);

q('2.13', 2, 'Durante los trabajos en zonas colindantes queda terminantemente prohibido invadir la plataforma de vía:',
  ['Con cualquier elemento, equipo o herramienta, incluyendo su espacio aéreo',
   'Solo con el cuerpo del trabajador', 'Salvo que el tramo esté sin circulación',
   'Salvo autorización del responsable operativo'], 0,
  'La prohibición cubre expresamente el espacio aéreo, de modo que ni una herramienta ni un elemento del andamio pueden asomar por encima de la vía, aunque nadie la pise.', 58);

q('2.13', 3, 'Los trabajos en los andenes de estación:',
  ['Quedan excluidos del capítulo de zonas colindantes y se regulan en el capítulo 10',
   'Se consideran zona colindante a todos los efectos',
   'Se consideran siempre trabajos en plataforma de vía',
   'No están regulados en estas Normas'], 0,
  'El capítulo 9 excluye expresamente los andenes y los remite al capítulo 10, que distingue entre Zona A y Zona B y establece un régimen propio según el periodo.', 58);

q('2.13', 2, 'Si por causa de fuerza mayor hay que acceder a una zona colindante a través de la plataforma de vía:',
  ['Se adoptarán las medidas del punto 7.2 en periodo de servicio o del 7.3 fuera de servicio',
   'Bastará con avisar al PCC por radioteléfono', 'No podrá hacerse en ningún caso',
   'Se hará únicamente con prenda de alta visibilidad'], 0,
  'El acceso a través de la plataforma activa el régimen completo del capítulo 7, con el Boletín de acceso y las medidas de protección que correspondan según el periodo.', 58);

tema('2.14', 'Trabajos en los andenes: Zonas A y B',
'A efectos de trabajos, el andén se divide en **Zona A** —la franja de borde de andén de unos **80 cm**, desde la banda amarilla hasta el borde— y **Zona B** —**todo el resto del andén**. En andenes centrales hay **dos franjas**, una por lado.\n\n## Durante el periodo de servicio (10.1)\n\n**Solo se pueden realizar trabajos en la Zona B.** La Zona A queda vedada.\n\nEn los trabajos que obliguen a desplazarse a lo largo del andén, **se procurará hacerlo en sentido contrario a la circulación de los trenes**, para verlos venir de frente.\n\n**Qué NO cuenta como trabajo en Zona A.** Las actividades que consistan en **comprobaciones rutinarias** y que **no requieran la utilización de equipos de trabajo ni herramientas**. En cualquier caso se realizarán **con la máxima atención a la circulación** y **minimizando el tiempo de permanencia**.\n\n## Durante el periodo fuera de servicio (10.2)\n\n**Si se invade la plataforma de vía** por los trabajadores o por equipos de trabajo (10.2.1), se considera **a todos los efectos trabajo en plataforma de vía** y se aplica el **capítulo 7**.\n\n**Trabajos en la Zona A (10.2.2).** Deberán **programarse en la Comisión de programación** y **figurar en el Documento de programación**.\n\n> Dos matices que se preguntan: la zona de andén donde se desarrollen **no tendrá la consideración de área de trabajo**; y estos trabajos son **incompatibles con las pruebas de circulación sin restricción de velocidad**, igual que los de plataforma de vía.\n\n**Las tres obligaciones del trabajador en Zona A (10.2.2.1):**\n\n**a)** El **responsable de los trabajos solicitará autorización al PCC** para el comienzo, **no iniciándolos hasta recibirla**.\n\n**b)** **Señalizar la zona colocando un farol de indicación de parada en piñón por trabajos en la franja de borde de andén, en los DOS piñones del andén** donde se vaya a trabajar.\n\n**c)** **Finalizar los trabajos como máximo e ineludiblemente a las 4:45 horas**, dejando las instalaciones en condiciones de circulación. Si por **fuerza mayor** fuese necesario continuar, **se avisará al PCC**.\n\n**Obligaciones del PCC (10.2.2.2).** **Autorizar** a los responsables el comienzo de los trabajos en Zona A **e informar a los conductores** de aquellas estaciones donde se esté trabajando en dicha zona.',
[
 { anverso: 'Durante el periodo de servicio, ¿en qué zona del andén se puede trabajar?', reverso: 'Solo en la Zona B. La Zona A, franja de borde de andén, queda vedada.' },
 { anverso: '¿En qué sentido conviene desplazarse al trabajar a lo largo del andén?', reverso: 'En sentido contrario a la circulación de los trenes.' },
 { anverso: '¿Qué actividades no cuentan como trabajo en Zona A?', reverso: 'Las comprobaciones rutinarias que no requieran equipos de trabajo ni herramientas, hechas con máxima atención y minimizando la permanencia.' },
 { anverso: '¿A qué hora hay que terminar ineludiblemente los trabajos en Zona A?', reverso: 'A las 4:45 horas, dejando las instalaciones en condiciones de circulación. Si hay que seguir por fuerza mayor, se avisa al PCC.' },
 { anverso: '¿Cuántos faroles de parada en piñón se colocan para trabajar en Zona A?', reverso: 'Dos, uno en cada piñón del andén donde se va a trabajar.' },
 { anverso: '¿Tiene la Zona A donde se trabaja consideración de área de trabajo?', reverso: 'No. Y además estos trabajos son incompatibles con las pruebas de circulación sin restricción de velocidad.' }
], [59, 60], ['zonas-anden']);

q('2.14', 2, 'Durante el periodo de servicio, los trabajos en andenes solo pueden realizarse:',
  ['En la Zona B', 'En la Zona A', 'En ambas zonas indistintamente',
   'En la Zona A, si se colocan faroles en los piñones'], 0,
  'Con trenes circulando, la franja de borde de andén queda vedada. Los faroles de parada en piñón son la señalización de los trabajos en Zona A, pero esos solo caben en el periodo fuera de servicio.', 59);

q('2.14', 3, 'Los trabajos en la franja de borde de andén (Zona A) deben finalizar:',
  ['Como máximo e ineludiblemente a las 4:45 horas', 'Antes del inicio del periodo de servicio, sin hora fija',
   'A las 5:30 horas', 'Cuando lo indique el responsable operativo de la estación'], 0,
  'La NIC fija una hora concreta: las 4:45, dejando las instalaciones en condiciones de circulación. Solo por fuerza mayor puede continuarse, y avisando al PCC.', 60);

q('2.14', 3, 'Para trabajar en la Zona A durante el periodo fuera de servicio hay que señalizar colocando:',
  ['Un farol de indicación de parada en piñón en los dos piñones del andén',
   'Una baliza roja en cada extremo de la zona de trabajo',
   'Un cartel precautorio en el piñón de salida de la estación anterior',
   'Un farol amarillo 150 metros antes'], 0,
  'Se colocan dos faroles, uno en cada piñón del andén. Las balizas rojas protegen equipos en la plataforma de vía, y el cartel precautorio y el farol amarillo pertenecen a la señalización de zonas de trabajo y de obras en la línea.', 60);

q('2.14', 3, 'Una comprobación rutinaria en la franja de borde de andén que no requiere herramientas:',
  ['No tiene consideración de trabajo en Zona A, pero se hace con máxima atención y minimizando la permanencia',
   'Tiene consideración de trabajo en Zona A a todos los efectos',
   'Requiere autorización previa del PCC en todo caso', 'Está prohibida en cualquier periodo'], 0,
  'La Norma excluye expresamente esas comprobaciones del régimen de trabajos en Zona A, precisamente porque no llevan equipos ni herramientas, pero mantiene la exigencia de atención y de reducir al mínimo el tiempo en la franja.', 59, { pag2: 60 });

q('2.14', 3, 'Los trabajos en Zona A durante el periodo fuera de servicio:',
  ['Deben programarse en la Comisión de programación y figurar en el Documento de programación',
   'Pueden improvisarse si el PCC lo autoriza en el momento',
   'No requieren autorización por no invadir la plataforma de vía',
   'Se consideran área de trabajo a todos los efectos'], 0,
  'Exigen programación previa, y además el responsable debe pedir autorización al PCC antes de empezar. La zona no tiene consideración de área de trabajo, lo que es un matiz distinto del de la programación.', 60);

tema('2.15', 'Acceso a la plataforma de vía del personal de operación',
'El acceso del personal de operación relacionado con la circulación se rige por los **capítulos 7, 8 y 9**, con **cuatro excepciones** (cap. 12).\n\n**12.1. Resolución de incidencias en trenes.** Una vez adoptadas las medidas de la NIC, quien acceda lo hará:\n\n- Protegido con la **linterna de dotación del tren** y la **prenda de señalización personal de alta visibilidad** obligatoria.\n- **Llevando consigo un medio de comunicación**, si lo hubiera.\n- **Solicitando previamente autorización al PCC**, **prioritariamente a través del radioteléfono**. El PCC **impedirá la circulación de trenes por la otra vía**.\n\n> **Sin comunicación con el PCC**: se extremarán las precauciones, **no accediendo a la plataforma hasta confirmar la detención del tren que pueda circular por la vía contraria**.\n\n**12.2. Sacos de maniobras SIN Auto-Shunt y cocheras.** Para el acceso y salida en las operaciones de **encierre y reposición de trenes** y en la **resolución de incidencias**:\n\n- Se utilizará la **prenda de señalización personal de alta visibilidad**.\n- Se solicitará previamente **autorización del responsable operativo de la estación o del PCC**.\n- El acceso o salida se hará, **hasta donde sea posible, por la vía contraria a la de entrada de los trenes de viajeros procedentes de la estación anterior**.\n- **No será necesaria la colocación de carteles precautorios.**\n\n**12.3. Sacos de maniobras CON Auto-Shunt.** Además de todo lo anterior, hay que **solicitar al responsable operativo la desconexión del Auto-Shunt** y el **Boletín de acceso a la plataforma de vía**, haciendo constar en él **que la función ha sido desconectada**.\n\nLa dispensa de carteles precautorios se limita aquí a las **operaciones de encierre y reposición** y a la **resolución de incidencias puntuales**, y **exclusivamente en esos casos**.\n\n> Los responsables operativos **tienen la obligación de desconectar el Auto-Shunt** en tres momentos: para el **encierre y reposición de trenes**, para la **resolución de incidencias**, y **a la finalización del periodo de servicio**.\n\n**12.4. Auxilio a trenes detenidos o incidencias en instalaciones.** Con **autorización previa del PCC**, que **impedirá la circulación en el tramo** donde se vaya a acceder. **Sin comunicación**, no se accede **hasta confirmar la detención de los trenes que puedan circular por ese tramo**.\n\nEn las **estaciones de cabecera de línea** donde sea necesario mantener la circulación **por un aparato de vía sin comprobación**, todas las actuaciones se realizarán **de forma coordinada con el PCC**, y **no se autorizará el movimiento de los trenes hasta confirmar que el personal está ubicado fuera del itinerario** que va a efectuar el tren autorizado.',
[
 { anverso: 'Para resolver una incidencia bajando a la vía, ¿con qué se protege el conductor?', reverso: 'Con la linterna de dotación del tren, la prenda de alta visibilidad y un medio de comunicación si lo hubiera, previa autorización del PCC por radioteléfono.' },
 { anverso: 'Sin comunicación con el PCC, ¿cuándo puede accederse a la plataforma?', reverso: 'Solo tras confirmar la detención del tren que pueda circular por la vía contraria.' },
 { anverso: '¿Por qué vía se accede a un saco de maniobras?', reverso: 'Hasta donde sea posible, por la vía contraria a la de entrada de los trenes de viajeros procedentes de la estación anterior.' },
 { anverso: '¿Hacen falta carteles precautorios para el encierre y reposición de trenes en un saco?', reverso: 'No. En esas operaciones y en la resolución de incidencias no es necesaria su colocación.' },
 { anverso: '¿En qué tres momentos debe el responsable operativo desconectar el Auto-Shunt?', reverso: 'Para el encierre y reposición de trenes, para la resolución de incidencias, y a la finalización del periodo de servicio.' },
 { anverso: 'En cabecera con aparato de vía sin comprobación, ¿cuándo se autoriza mover un tren?', reverso: 'Solo tras confirmar que el personal de la plataforma está fuera del itinerario que va a efectuar ese tren.' }
], [61, 62, 63]);

q('2.15', 3, 'Un conductor debe bajar a la vía para resolver una incidencia en su tren. Sin comunicación con el PCC:',
  ['No accederá hasta confirmar la detención del tren que pueda circular por la vía contraria',
   'Podrá acceder llevando linterna y prenda de alta visibilidad',
   'Deberá esperar tres minutos y acceder con precaución',
   'Accederá solo si el tren está en una interestación con alumbrado encendido'], 0,
  'La confirmación de que el tren de la vía contraria está detenido es la condición imprescindible. La linterna y la prenda son obligatorias, pero no sustituyen a esa garantía.', 61);

q('2.15', 3, 'El acceso a un saco de maniobras para el encierre de trenes se realizará, hasta donde sea posible:',
  ['Por la vía contraria a la de entrada de los trenes de viajeros procedentes de la estación anterior',
   'Por la vía de entrada de los trenes de viajeros', 'Por el centro de la entrevía',
   'Por el andén, sin pisar la plataforma'], 0,
  'Se camina por la vía por la que no van a llegar trenes de viajeros, que es la lógica de la medida. Y en estas operaciones no hace falta colocar carteles precautorios.', 62);

q('2.15', 2, 'Para acceder a un saco de maniobras que tiene implantado el Auto-Shunt, además de lo exigido con carácter general hay que:',
  ['Solicitar la desconexión del Auto-Shunt y el Boletín de acceso, haciendo constar en él la desconexión',
   'Solicitar un corte de tensión de catenaria', 'Colocar carteles precautorios en ambos piñones',
   'Esperar a la finalización del periodo de servicio'], 0,
  'La desconexión documentada en el Boletín es la garantía de que ningún tren invertirá la marcha sin conductor mientras haya personal en la vía.', 62);

q('2.15', 3, 'Los responsables operativos de estación están obligados a desconectar la función Auto-Shunt:',
  ['Para el encierre y reposición de trenes, para la resolución de incidencias y a la finalización del periodo de servicio',
   'Únicamente cuando lo solicite un trabajador que vaya a bajar a la vía',
   'Solo a la finalización del periodo de servicio', 'Cuando lo ordene el PCC'], 0,
  'Son tres momentos y la obligación es del responsable operativo, con independencia de que alguien se lo pida. La petición del trabajador que va a bajar a la vía es un supuesto añadido, no el único.', 62);

q('2.15', 3, 'En una estación de cabecera donde hay que mantener la circulación por un aparato de vía sin comprobación:',
  ['No se autorizará el movimiento de los trenes hasta confirmar que el personal está fuera del itinerario',
   'Se circulará a paso de hombre sin más requisitos', 'Queda prohibida toda circulación',
   'Bastará con colocar una baliza roja en el aparato'], 0,
  'Al no haber comprobación del aparato, la seguridad se traslada a la coordinación con el PCC y a la confirmación expresa de que nadie está en el itinerario del tren autorizado.', 63);

tema('2.16', 'Obligaciones comunes, suspensiones y disposiciones finales',
'**Anomalías con riesgo para la circulación (cap. 13).** Idéntico a lo que exige la NIC. Todo trabajador que observe una situación o accidente que **impida, dificulte o pueda suponer riesgo** para la circulación está obligado a:\n\n- **Avisar inmediatamente al PCC o al responsable operativo**, por el **medio más rápido disponible**, indicando **lugar, auxilios necesarios, si debe interrumpirse la circulación** y **las precauciones que a su juicio deban observarse**.\n- **Tomar las medidas a su alcance** para evitar o reducir las consecuencias.\n- **Detener a todo tren que pueda llegar con riesgo** a la zona, con los medios necesarios: **señales gestuales de emergencia**.\n\n**Obligaciones comunes a todos los trabajadores (cap. 14).**\n\n- Comunicar **lo antes posible** los **defectos de aplicación** de estas Normas y **su infracción**, **a sus superiores o a las personas facultadas para subsanar** inmediatamente los defectos o irregularidades.\n- Los **mandos intermedios** o equivalentes: **cumplir y hacer cumplir** las Normas, y **comunicar a sus superiores las faltas cometidas por el personal a su cargo**.\n- **Tarea común de todos**, cualquiera que sea su función: **cuidar del buen estado y funcionamiento de todos los elementos e instalaciones de seguridad** de su competencia, y **denunciar por el cauce establecido las irregularidades**.\n- Si como consecuencia de los trabajos se ocasiona **algún desperfecto** en el material móvil o en las instalaciones, hay que **ponerlo inmediatamente en conocimiento del responsable operativo** o, en su defecto, del **PCC**.\n\n**Tramos con suspensión de servicio (cap. 15).** Se aplica la **normativa del periodo fuera de servicio**: el punto **5.2.2 para la conducción** de trenes y el punto **7.3 para el acceso** a la plataforma de vía.\n\n**Comunicaciones (cap. 16).** Todas las telefónicas o radiadas siguen los protocolos del **Manual de estilo para las comunicaciones** vigente en cada momento.\n\n**Circunstancias no previstas (cap. 17).** **El PCC resolverá los casos urgentes no contemplados** en estas Normas, **aplicando criterios de seguridad y eficacia**.\n\n**Comisión Técnica de Seguimiento (cap. 18).** Se crea con la finalidad de la **actualización permanente** de las Normas, en función de las necesidades o cambios tecnológicos, y de **decidir sobre las propuestas de actualización recibidas**.\n\n**Instrucciones complementarias (cap. 19).** Los departamentos podrán establecerlas para el personal a su cargo, pero **en ningún caso podrán oponerse a lo establecido en estas Normas**.\n\n**Aplicación a otras empresas (cap. 20).** Las Normas se aplican también a **otras entidades o empresas, su personal y trabajadores autónomos** que desarrollen actividades en la Red, en cumplimiento de la obligación de **coordinación de actividades empresariales** prevista en la normativa de prevención de riesgos laborales. Las **contratistas y subcontratistas** deberán garantizar que sus trabajadores **han sido informados y conocen suficientemente** estas Normas.\n\n**Disposición derogatoria (cap. 21).** Estas Normas **sustituyen a las publicadas en junio de 2008** y a la **Circular de Dirección 1/2008**, de 29 de mayo de 2008. Quedan sin efecto cualesquiera otras normas internas de Metro que las contradigan.',
[
 { anverso: '¿A quién se comunican los defectos de aplicación o la infracción de estas Normas?', reverso: 'A los superiores o a las personas facultadas para subsanar inmediatamente los defectos o irregularidades, lo antes posible.' },
 { anverso: 'Si un trabajo causa un desperfecto en el material o las instalaciones, ¿qué se hace?', reverso: 'Ponerlo inmediatamente en conocimiento del responsable operativo o, en su defecto, del PCC.' },
 { anverso: '¿Quién resuelve los casos urgentes no previstos en las Normas?', reverso: 'El PCC, aplicando criterios de seguridad y eficacia.' },
 { anverso: '¿Para qué se crea la Comisión Técnica de Seguimiento?', reverso: 'Para la actualización permanente de las Normas y decidir sobre las propuestas de actualización recibidas.' },
 { anverso: '¿Pueden las instrucciones complementarias de un departamento contradecir las Normas?', reverso: 'En ningún caso.' },
 { anverso: '¿Se aplican estas Normas a las empresas contratistas?', reverso: 'Sí, por la obligación de coordinación de actividades empresariales. Y ellas deben garantizar que su personal las conoce.' }
], [64, 65, 66, 69, 70]);

q('2.16', 2, 'Los casos urgentes no contemplados en estas Normas los resuelve:',
  ['El PCC, aplicando criterios de seguridad y eficacia', 'La Comisión Técnica de Seguimiento',
   'La Dirección de Operación', 'El responsable operativo de la instalación afectada'], 0,
  'El capítulo 17 atribuye al PCC la resolución de lo urgente no previsto. La Comisión Técnica de Seguimiento se ocupa de otra cosa: de la actualización permanente de las Normas, que no es una decisión de urgencia.', 66);

q('2.16', 3, 'Las instrucciones complementarias que puedan dictar los departamentos:',
  ['En ningún caso podrán oponerse a lo establecido en estas Normas',
   'Prevalecen sobre las Normas para el personal a su cargo',
   'Deben ser aprobadas por el Consorcio Regional de Transportes',
   'Solo pueden dictarse durante el periodo fuera de servicio'], 0,
  'Pueden dictarse para una mejor aplicación de las Normas, pero quedan expresamente subordinadas a ellas. Es la misma lógica que en la NIC, que solo se modifica por Circulares de Dirección.', 69);

q('2.16', 3, 'En un tramo de línea con el servicio suspendido se aplicará:',
  ['La normativa del periodo fuera de servicio, tanto para la conducción como para el acceso a la plataforma',
   'La normativa del periodo de servicio, por seguir habiendo viajeros en la estación',
   'Únicamente la normativa de vías secundarias', 'Un régimen específico fijado por el responsable operativo'], 0,
  'El capítulo 15 remite al punto 5.2.2 para la conducción y al 7.3 para el acceso, ambos del régimen de fuera de servicio. Coincide con lo que establece la NIC para las interrupciones de servicio.', 66);

q('2.16', 2, 'Un desperfecto causado en las instalaciones como consecuencia de unos trabajos debe comunicarse:',
  ['Inmediatamente al responsable operativo correspondiente o, en su defecto, al PCC',
   'Al finalizar la jornada, mediante el parte de trabajo',
   'Solo si afecta a la circulación de trenes', 'A la Comisión Técnica de Seguimiento'], 0,
  'La comunicación es inmediata y el orden es responsable operativo primero, PCC en su defecto. No se condiciona a que el desperfecto afecte o no a la circulación.', 65);

q('2.16', 3, 'Estas Normas resultan de aplicación a las empresas contratistas y a los trabajadores autónomos que operan en la Red:',
  ['En cumplimiento de la obligación de coordinación de actividades empresariales de la normativa de prevención de riesgos laborales',
   'Solo si la obligación se incorpora expresamente como una cláusula de su contrato con Metro',
   'Solo durante el periodo fuera de servicio, cuando acceden a la plataforma de vía',
   'En ningún caso, porque las normas internas de Metro solo vinculan a su propia plantilla'], 0,
  'El fundamento es la coordinación de actividades empresariales prevista en la normativa de prevención. Además, las contratistas y subcontratistas deben garantizar que sus trabajadores han sido informados y conocen suficientemente estas Normas.', 69, { pag2: 70 });

module.exports = {
  parte: { parte: '2', titulo: 'Normas internas para la seguridad de los agentes',
           manual: 'Manual 2 del temario oficial', url_manual: M, color: '#d62d2d', epigrafes },
  preguntas
};
