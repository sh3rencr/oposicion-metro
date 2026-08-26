/* Parte 7 — Conocimientos generales sobre el Consorcio Regional de Transportes de Madrid (junio 2026). */
'use strict';
const M = 'https://www.metromadrid.es/sites/default/files/empleo/descargables/7.Conocimientos_generales_CRMT.pdf';
const { epigrafes, preguntas, tema, q } = require('./_util.js')(M, 'Manual 7 · CRTM');

tema('7.1', 'Naturaleza, creación y competencias del CRTM',
'El **Consorcio Regional de Transportes de Madrid (CRTM)** se creó mediante la **Ley 5/1985**, como **organismo público** que **concentra las competencias en materia de transporte regular de viajeros** en la Comunidad de Madrid.\n\n> Matiz que conviene tener localizado: el manual de conocimientos específicos sobre Metro (manual 1) sitúa la creación del organismo **en 1986**. La Ley es de 1985 y el organismo echó a andar después. Si la pregunta cita una norma, la respuesta es **Ley 5/1985**.\n\n**Qué coordina.** Todos los modos de **transporte público regular de viajeros** de la región:\n\n- **Metro de Madrid**\n- **EMT de Madrid** y otros **autobuses urbanos** de la región\n- **Autobuses interurbanos**\n- **Metros Ligeros** y **Tranvía de Parla**\n- **Cercanías ferroviarias**\n\n**Qué hace.** Realiza un **seguimiento permanente de la oferta y de la demanda**, garantizando la calidad del servicio y la atención a los ciudadanos. Planifica las **infraestructuras y servicios** de transporte público y opera un **sistema tarifario integrado**.\n\n**Atención presencial.** Se canaliza a través de las **Oficinas de Gestión**.\n\n**Sede social.** **Avenida de Asturias, 4.**\n\n> Curiosidad que da lugar a confusión: el manual 1 sitúa también la **sede social de Metro de Madrid** en la Avenida de Asturias nº 4, junto a Plaza de Castilla. Ambos manuales dan esa dirección para su respectiva entidad.',
[
 { anverso: '¿Qué norma creó el CRTM?', reverso: 'La Ley 5/1985.' },
 { anverso: '¿Qué modos de transporte coordina el CRTM?', reverso: 'Metro, EMT y otros autobuses urbanos, autobuses interurbanos, Metros Ligeros, Tranvía de Parla y Cercanías ferroviarias.' },
 { anverso: '¿Dónde está la sede social del CRTM y cómo se canaliza la atención presencial?', reverso: 'Avenida de Asturias, 4. La atención presencial, a través de las Oficinas de Gestión.' },
 { anverso: '¿Qué tipo de transporte concentra las competencias del CRTM?', reverso: 'El transporte regular de viajeros en la Comunidad de Madrid.' }
], [3]);

q('7.1', 1, 'El Consorcio Regional de Transportes de Madrid (CRTM) se creó mediante:',
  ['La Ley 5/1985', 'El Decreto 49/1987', 'La Ley 6/2025', 'La Ley 16/1987, de Ordenación de los Transportes Terrestres'], 0,
  'El manual del CRTM señala que el organismo se creó mediante la Ley 5/1985. El Decreto 49/1987 aprueba el Reglamento de Viajeros, otra norma del temario que conviene no confundir. La Ley 6/2025 es la de Presupuestos de la Comunidad que ampara esta convocatoria.', 3);

q('7.1', 2, 'Entre los modos de transporte que coordina el CRTM se encuentra:',
  ['El Tranvía de Parla', 'El AVE de Madrid a Sevilla', 'Los autobuses discrecionales de turismo',
   'Los servicios regionales de Renfe Operadora'], 0,
  'El manual enumera Metro, EMT y otros autobuses urbanos, autobuses interurbanos, Metros Ligeros, Tranvía de Parla y Cercanías ferroviarias. El CRTM coordina transporte regular de viajeros: los servicios de alta velocidad y los discrecionales quedan fuera, y los regionales de Renfe están expresamente excluidos del abono turístico Zona T.', 3);

q('7.1', 2, 'La atención al cliente presencial del CRTM se canaliza a través de:',
  ['Las Oficinas de Gestión', 'Los Centros de Atención al Cliente de Metro',
   'El Centro Interactivo de Atención al Cliente (CIAC)', 'Las máquinas automáticas de las estaciones'], 0,
  'Las Oficinas de Gestión son el canal presencial del CRTM. Los Centros de Atención al Cliente y el CIAC son instalaciones de Metro de Madrid, no del Consorcio.', 3);

q('7.1', 3, 'El CRTM se define como el organismo público que concentra las competencias en materia de:',
  ['Transporte regular de viajeros en la Comunidad de Madrid',
   'Toda clase de transporte terrestre en la Comunidad de Madrid',
   'Infraestructuras ferroviarias de la Comunidad de Madrid',
   'Transporte de viajeros y mercancías de la Comunidad de Madrid'], 0,
  'La definición es precisa: transporte regular de viajeros. Queda fuera el transporte de mercancías y también el transporte discrecional, que no es regular.', 3);

tema('7.2', 'Órganos de gobierno: el Consejo de Administración',
'El CRTM está dirigido por un **Consejo de Administración**, que ejerce sus funciones **directamente o a través de una Comisión Delegada**.\n\n**Composición:**\n\n| Puesto | Procedencia |\n|---|---|\n| **Presidente** | Comunidad de Madrid |\n| **Vicepresidente** | Ayuntamiento de Madrid |\n| **17 vocales** | Ver desglose |\n| **Con voz pero sin voto** | Renfe-Cercanías |\n| **Director-Gerente** | — |\n| **Secretario** | — |\n\n**Desglose de los 17 vocales:**\n\n- **6** de la **Comunidad de Madrid**\n- **1** del **Ayuntamiento de Madrid**\n- **2** de la **Administración del Estado**\n- **3** de **Ayuntamientos adheridos**\n- **2** de **sindicatos**\n- **2** de **asociaciones empresariales**\n- **1** de **asociaciones de consumidores y usuarios**\n\n> Regla mnemotécnica: **6 – 1 – 2 – 3 – 2 – 2 – 1**. Suma 17.\n\n**Nombramientos.** El **Presidente**, que lo es también del Consorcio, se nombra **por el Consejo de Gobierno**, **entre los vocales que representan a la Comunidad de Madrid**. El **Vicepresidente** lo nombra el **Consejo de Administración**, **entre los vocales que representan a los Ayuntamientos consorciados**.\n\n> Fíjate en la asimetría: al Presidente lo nombra un órgano **externo** (el Consejo de Gobierno de la Comunidad); al Vicepresidente lo nombra el **propio Consejo de Administración**.\n\nRecuerda además que el **Director Gerente del CRTM** es el órgano competente para **incoar y resolver los procedimientos sancionadores** del Reglamento de Viajeros, y que el **Consejo de Administración del CRTM** es quien puede **modificar la cuantía del recargo extraordinario**.',
[
 { anverso: '¿Cuántos vocales tiene el Consejo de Administración del CRTM y cómo se reparten?', reverso: '17: 6 Comunidad de Madrid, 1 Ayuntamiento de Madrid, 2 Administración del Estado, 3 Ayuntamientos adheridos, 2 sindicatos, 2 asociaciones empresariales y 1 asociaciones de consumidores.' },
 { anverso: '¿Quién asiste al Consejo de Administración con voz pero sin voto?', reverso: 'Renfe-Cercanías.' },
 { anverso: '¿Quién nombra al Presidente del CRTM y de entre quiénes?', reverso: 'El Consejo de Gobierno, entre los vocales que representan a la Comunidad de Madrid.' },
 { anverso: '¿Quién nombra al Vicepresidente del CRTM y de entre quiénes?', reverso: 'El Consejo de Administración, entre los vocales que representan a los Ayuntamientos consorciados.' },
 { anverso: '¿A través de qué órgano puede ejercer sus funciones el Consejo de Administración?', reverso: 'A través de una Comisión Delegada.' }
], [6]);

q('7.2', 2, 'En el Consejo de Administración del CRTM, ¿quién participa con voz pero sin voto?',
  ['Renfe-Cercanías', 'El Director-Gerente', 'Las asociaciones de consumidores y usuarios', 'La Administración del Estado'], 0,
  'El manual indica expresamente que Renfe-Cercanías asiste con voz pero sin voto. Las asociaciones de consumidores tienen 1 vocal con voto y la Administración del Estado 2. El Director-Gerente y el Secretario figuran aparte en la composición.', 6);

q('7.2', 3, 'De los 17 vocales del Consejo de Administración del CRTM, ¿cuántos corresponden a la Comunidad de Madrid y cuántos a los Ayuntamientos adheridos, respectivamente?',
  ['6 y 3', '3 y 6', '6 y 2', '5 y 3'], 0,
  'El reparto es 6 – 1 – 2 – 3 – 2 – 2 – 1: Comunidad de Madrid, Ayuntamiento de Madrid, Administración del Estado, Ayuntamientos adheridos, sindicatos, asociaciones empresariales y asociaciones de consumidores. Por tanto, 6 y 3.', 6);

q('7.2', 3, 'El Presidente del CRTM es nombrado:',
  ['Por el Consejo de Gobierno, entre los vocales que representan a la Comunidad de Madrid',
   'Por el Consejo de Administración, entre los vocales de los Ayuntamientos consorciados',
   'Por el Consejo de Administración, entre los vocales de la Comunidad de Madrid',
   'Directamente por la Consejería de Transportes'], 0,
  'Al Presidente lo nombra el Consejo de Gobierno de entre los vocales de la Comunidad de Madrid. La opción de que lo nombre el Consejo de Administración entre los vocales de los Ayuntamientos describe el nombramiento del Vicepresidente, no el del Presidente.', 6);

q('7.2', 2, 'El Consejo de Administración del CRTM ejerce sus funciones:',
  ['Directamente o a través de una Comisión Delegada', 'Exclusivamente en pleno',
   'A través del Director-Gerente en todo caso', 'Mediante comisiones sectoriales por modo de transporte'], 0,
  'El manual precisa que puede actuar directamente o a través de una Comisión Delegada. El Director-Gerente forma parte de la composición del Consejo, pero no es el cauce ordinario de ejercicio de sus funciones.', 6);

q('7.2', 3, 'El número total de vocales del Consejo de Administración del CRTM es:',
  ['17', '15', '19', '21'], 0,
  'Son 17 vocales, además del Presidente, el Vicepresidente, el Director-Gerente, el Secretario y Renfe-Cercanías con voz pero sin voto. Conviene no sumar a esas figuras dentro del cómputo de vocales.', 6);

tema('7.3', 'Planificación de los servicios de transporte',
'El CRTM es el **responsable de la programación coordinada** de los servicios de transporte de viajeros —**Metro, Metros Ligeros, autobuses urbanos de Madrid y de otros municipios, y autobuses interurbanos**— así como de la **tramitación de autorizaciones y concesiones**.\n\nA tal fin le corresponde:\n\n- La **definición de la programación de la oferta** de servicios y el **seguimiento y análisis de la evolución de la demanda**.\n- La **inspección, seguimiento y supervisión** del cumplimiento de las obligaciones de los **indicadores de calidad**.\n- La **elaboración de planos, horarios, avisos, desvíos y modificaciones**, así como su **señalización en estaciones, paradas y vehículos**.\n- El **análisis y desarrollo coordinado** con los distintos operadores de transporte y con otras instituciones y organismos de **promoción y acciones en materia de accesibilidad**.\n\n> Un dato que sorprende y por eso se pregunta: los **planos y horarios** que ves en una estación de Metro los elabora el **CRTM**, no Metro de Madrid. Metro se ocupa de que estén expuestos y actualizados; el Consorcio, de elaborarlos.\n\nEsto encaja con el Reglamento de Viajeros, cuyo artículo 1 encarga al Consorcio velar por que los usuarios sean informados de las características de prestación de los servicios **bien directamente, bien a través de Metro de Madrid**.',
[
 { anverso: '¿Quién elabora los planos, horarios, avisos y desvíos, y su señalización?', reverso: 'El CRTM.' },
 { anverso: '¿Quién inspecciona y supervisa el cumplimiento de los indicadores de calidad?', reverso: 'El CRTM.' },
 { anverso: 'Además de programar los servicios, ¿qué otra función administrativa tiene el CRTM?', reverso: 'La tramitación de autorizaciones y concesiones.' }
], [7]);

q('7.3', 2, 'La elaboración de los planos, horarios, avisos y desvíos, así como su señalización en estaciones y vehículos, corresponde a:',
  ['El CRTM', 'Metro de Madrid, S.A.', 'Cada operador en su ámbito', 'La Consejería de Transportes'], 0,
  'Es una función expresa del CRTM dentro de la planificación de los servicios. Metro se ocupa de exponer y mantener actualizada esa información en sus instalaciones, pero quien la elabora es el Consorcio.', 7);

q('7.3', 2, 'La inspección, seguimiento y supervisión del cumplimiento de las obligaciones de los indicadores de calidad corresponde a:',
  ['El CRTM', 'El propio operador, mediante autoevaluación',
   'La entidad certificadora de la norma UNE-EN 13816', 'El Director-Gerente de cada operador'], 0,
  'El manual atribuye esa función al CRTM dentro de la planificación de los servicios de transporte. La certificación UNE-EN 13816 es una acreditación externa de calidad de Metro, distinta de la supervisión que ejerce el Consorcio.', 7);

q('7.3', 3, 'Además de la programación coordinada de los servicios, el CRTM tiene encomendada:',
  ['La tramitación de autorizaciones y concesiones', 'La contratación del personal de los operadores',
   'La construcción material de las infraestructuras', 'La fijación del convenio colectivo del sector'], 0,
  'El manual menciona expresamente la tramitación de autorizaciones y concesiones. La contratación de personal corresponde a cada operador, y el convenio colectivo se negocia en el ámbito laboral de cada empresa.', 7);

tema('7.4', 'Gestión comercial, atención al cliente e infraestructuras',
'**Gestión comercial y atención al cliente.** Entre los principales objetivos del CRTM están **potenciar el uso del transporte público**, la **comunicación coordinada** a nivel de sistema y la **atención al usuario**. Para ello se encarga de:\n\n- La **comercialización de títulos de transporte**, incluyendo la gestión de acuerdos, la **política comercial** de los títulos y el **control y seguimiento de las ventas**.\n- La **tramitación y contestación de las quejas y sugerencias** de los usuarios del transporte público.\n- La **información sobre el transporte público** (información, expedición de títulos, sanciones, etc.) a través de los diversos canales de atención al cliente.\n\n**Planificación de infraestructuras, estudios y proyectos.** Como **autoridad responsable de la planificación** de las infraestructuras y servicios de transporte público en la Comunidad de Madrid, el CRTM desempeña, entre otras:\n\n- La **redacción, informe y supervisión** de los **estudios previos, estudios de viabilidad, anteproyectos y proyectos** de infraestructuras y servicios.\n- El desarrollo del **Plan Estratégico de Movilidad Sostenible** vigente en la Comunidad de Madrid, que con un **horizonte de 12 años (2013-2025)** contempla la realización de **más de 200 programas**, englobados en **12 medidas**.\n- La **coordinación mediante acuerdo** con los organismos que desarrollen programas que incidan sobre las infraestructuras y servicios: planes de movilidad urbana sostenible, planes de transporte a centros de trabajo, planeamiento urbanístico y ordenación del territorio.\n- La realización de **estudios, encuestas y trabajos de campo** para conocer mejor la movilidad, y la colaboración en **proyectos nacionales e internacionales**.\n\n> Del Plan Estratégico conviene retener los tres números: **12 años de horizonte (2013-2025)**, **más de 200 programas** y **12 medidas**. Es la pregunta numérica típica de este bloque, y además es un dato **fechado**: conviene comprobar si sigue vigente ese plan.',
[
 { anverso: '¿Quién comercializa los títulos de transporte y fija su política comercial?', reverso: 'El CRTM.' },
 { anverso: '¿Quién tramita y contesta las quejas y sugerencias de los usuarios del transporte público?', reverso: 'El CRTM.' },
 { anverso: '¿Qué horizonte y qué contenido tiene el Plan Estratégico de Movilidad Sostenible?', reverso: '12 años (2013-2025), más de 200 programas englobados en 12 medidas.' },
 { anverso: '¿Qué documentos técnicos redacta, informa y supervisa el CRTM?', reverso: 'Estudios previos, estudios de viabilidad, anteproyectos y proyectos de infraestructuras y servicios de transporte público.' }
], [8]);

q('7.4', 3, 'El Plan Estratégico de Movilidad Sostenible vigente en la Comunidad de Madrid contempla:',
  ['Más de 200 programas englobados en 12 medidas, con un horizonte de 12 años (2013-2025)',
   'Más de 100 programas englobados en 20 medidas, con horizonte 2020',
   '12 programas englobados en 200 medidas, con horizonte 2013-2025',
   'Más de 200 medidas englobadas en 12 programas, sin horizonte definido'], 0,
  'Los tres datos son: horizonte de 12 años (2013-2025), más de 200 programas y 12 medidas. Cuidado con la opción que invierte programas y medidas, que es el distractor más eficaz de esta pregunta.', 8, { volatil: true, fecha: '2026-06' });

q('7.4', 2, 'La comercialización de los títulos de transporte, incluida su política comercial y el seguimiento de ventas, corresponde a:',
  ['El CRTM', 'Cada operador de transporte', 'Metro de Madrid para los títulos de Metro',
   'La red de estancos y puntos de venta autorizados'], 0,
  'Es una función del CRTM dentro de su gestión comercial. Los estancos y puntos de venta son canales de distribución, pero la política comercial y el control de ventas los lleva el Consorcio, que además es quien aprueba los títulos en vigor.', 8);

q('7.4', 2, 'La tramitación y contestación de las quejas y sugerencias de los usuarios del transporte público corresponde a:',
  ['El CRTM', 'Metro de Madrid, a través del CIAC', 'La Consejería de Transportes',
   'El Ayuntamiento de Madrid en su término municipal'], 0,
  'El manual del CRTM le atribuye la tramitación y contestación de quejas y sugerencias. Es coherente con el Reglamento de Viajeros, cuyo artículo 2.f) reconoce el derecho a recibir contestación del Consorcio en plazo inferior a un mes.', 8);

q('7.4', 3, 'Como autoridad responsable de la planificación de infraestructuras, el CRTM redacta, informa y supervisa:',
  ['Estudios previos, estudios de viabilidad, anteproyectos y proyectos',
   'Únicamente los proyectos constructivos definitivos', 'Los pliegos de contratación de obra',
   'Las licencias urbanísticas municipales'], 0,
  'El manual enumera esos cuatro tipos de documento, que cubren el ciclo completo desde el estudio previo hasta el proyecto. Las licencias urbanísticas son competencia municipal, aunque el CRTM se coordina con el planeamiento urbanístico.', 8);

tema('7.5', 'El organigrama del CRTM',
'El organigrama del Consorcio se estructura a partir de la **Dirección-Gerencia**. De ella dependen:\n\n- La **Dirección de Relaciones Externas**.\n- La **Dirección de Planificación Estratégica y Explotación**.\n- La **Secretaría General**.\n\n**De la Dirección de Planificación Estratégica y Explotación** dependen **cuatro coordinadores**:\n\n1. **Coordinador de infraestructuras**\n2. **Coordinador de desarrollo y estrategia**\n3. **Coordinador de operativa de redes**\n4. **Coordinador económico-administrativo y medio ambiente**\n\n**De la Secretaría General** dependen **dos divisiones**:\n\n- **División de Presupuestos y tesorería**, de la que a su vez depende la **Subdirección Comercial**.\n- **División de Coordinación Administrativa**.\n\n**Las áreas.** En el nivel inferior se sitúan las áreas operativas:\n\n| Ámbito | Áreas |\n|---|---|\n| **Infraestructuras** | Estudios y Proyectos · Accesibilidad |\n| **Desarrollo y estrategia** | Información sobre Servicios y Señalización · Centro de Gestión 24 h CITRAM · Sistemas |\n| **Operativa de redes** | Metro y Metros Ligeros · Autobuses Urbanos de Madrid · Transportes Interurbanos y Urbanos de Otros Municipios · Explotación de Intercambiadores |\n| **Presupuestos y tesorería** | Comercial · Gestión Financiera |\n| **Coordinación Administrativa** | Régimen Jurídico, Contratación y RR. HH. · Calidad y Atención al Cliente |\n\n> Dos detalles que suelen preguntarse: el **Centro de Gestión 24 h** se llama **CITRAM**, y el **Área de Calidad y Atención al Cliente** cuelga de la **Secretaría General**, no de la Dirección de Planificación.',
[
 { anverso: '¿Qué tres órganos dependen directamente de la Dirección-Gerencia del CRTM?', reverso: 'La Dirección de Relaciones Externas, la Dirección de Planificación Estratégica y Explotación y la Secretaría General.' },
 { anverso: '¿Cuántos coordinadores dependen de la Dirección de Planificación Estratégica y Explotación y cuáles?', reverso: 'Cuatro: infraestructuras, desarrollo y estrategia, operativa de redes, y económico-administrativo y medio ambiente.' },
 { anverso: '¿Qué dos divisiones dependen de la Secretaría General?', reverso: 'La División de Presupuestos y tesorería —de la que depende la Subdirección Comercial— y la División de Coordinación Administrativa.' },
 { anverso: '¿Cómo se llama el Centro de Gestión 24 horas del CRTM?', reverso: 'CITRAM.' },
 { anverso: '¿De qué depende el Área de Calidad y Atención al Cliente?', reverso: 'De la División de Coordinación Administrativa, dentro de la Secretaría General.' }
], [7]);

q('7.5', 2, 'De la Dirección-Gerencia del CRTM dependen directamente:',
  ['La Dirección de Relaciones Externas, la de Planificación Estratégica y Explotación, y la Secretaría General',
   'Los cuatro coordinadores', 'Las dos divisiones de la Secretaría General',
   'El Consejo de Administración'], 0,
  'Ese es el primer nivel del organigrama. Los cuatro coordinadores cuelgan de la Dirección de Planificación, y las dos divisiones de la Secretaría General. El Consejo de Administración es el órgano de gobierno, por encima de la estructura ejecutiva.', 7);

q('7.5', 3, 'El Centro de Gestión 24 horas del CRTM se denomina:',
  ['CITRAM', 'CRTM 24', 'CIAC', 'PCC'], 0,
  'CITRAM es el Área de Centro de Gestión 24 h, dentro del ámbito de desarrollo y estrategia. El CIAC y el PCC son instalaciones de Metro de Madrid, no del Consorcio.', 7);

q('7.5', 3, 'La Subdirección Comercial del CRTM depende de:',
  ['La División de Presupuestos y tesorería', 'La División de Coordinación Administrativa',
   'El Coordinador de operativa de redes', 'La Dirección de Relaciones Externas'], 0,
  'Cuelga de la División de Presupuestos y tesorería, dentro de la Secretaría General. Es una dependencia poco intuitiva, y por eso preguntable.', 7);

q('7.5', 3, '¿Cuál de estas áreas NO depende del Coordinador de operativa de redes?',
  ['Área de Estudios y Proyectos', 'Área de Metro y Metros Ligeros',
   'Área de Autobuses Urbanos de Madrid', 'Área de Explotación de Intercambiadores'], 0,
  'Estudios y Proyectos pertenece al ámbito de infraestructuras, junto con Accesibilidad. Las otras tres sí corresponden a la operativa de redes.', 7);

tema('7.6', 'Las Oficinas de Gestión',
'Las **Oficinas de Gestión** son el canal de **atención presencial** del CRTM. Se reparten entre **Madrid capital** y **otros municipios**.\n\n**En Madrid**, hay oficina en: **Aeropuerto T2**, **Aeropuerto T4**, **Atocha**, **Avenida de América**, **EMT Oficinas** (calle Cerro de la Plata, 4), **Méndez Álvaro** (Estación Sur de Autobuses), **Moncloa Intercambiador**, **Nuevos Ministerios**, **Plaza de Castilla**, **Príncipe Pío**, **Ríos Rosas** (plaza Descubridor Diego de Ordás, 3) y **Sol**.\n\n**Dos oficinas con régimen especial**, y son las que se prestan a pregunta:\n\n- **Aeropuerto T4**: **solo resuelve incidencias y vende tarjetas turísticas**. No hace el resto de trámites.\n- **Ríos Rosas**: en ella se realizan **todos los trámites** referidos a la Tarjeta de Transporte Público y, **además**, la **gestión de las tarjetas retiradas por la inspección** y la **emisión de certificados de titularidad**.\n\n**En otros municipios** hay oficinas en: **Alcalá de Henares**, **Alcobendas**, **Alcorcón Central**, **Aranjuez**, **Collado Villalba**, **Coslada Central**, **Fuenlabrada Central**, **Getafe Central**, **Leganés Central**, **Móstoles Central**, **Parla** y **Torrejón de Ardoz**.\n\n> Muchas de ellas se ubican en **estaciones de Cercanías** —Alcalá de Henares, Collado Villalba, Torrejón de Ardoz— o en **estaciones de autobuses**, como Aranjuez.\n\n**Los horarios** varían entre oficinas y son **datos muy volátiles**: los del manual van de las 7 a las 22 h en las grandes estaciones y de 8 a 20 h en las del aeropuerto. **No merece la pena memorizarlos**; sí conviene saber **qué oficinas existen** y **las dos particularidades** de T4 y Ríos Rosas.',
[
 { anverso: '¿Qué particularidad tiene la Oficina de Gestión del Aeropuerto T4?', reverso: 'Solo resuelve incidencias y vende tarjetas turísticas.' },
 { anverso: '¿Qué trámites especiales se hacen en la oficina de Ríos Rosas?', reverso: 'Todos los referidos a la Tarjeta de Transporte Público y, además, la gestión de tarjetas retiradas por la inspección y la emisión de certificados de titularidad.' },
 { anverso: 'Nombra cinco Oficinas de Gestión de Madrid capital.', reverso: 'Por ejemplo: Sol, Atocha, Nuevos Ministerios, Plaza de Castilla, Príncipe Pío, Moncloa Intercambiador, Avenida de América, Méndez Álvaro, Ríos Rosas, Aeropuerto T2 y T4.' },
 { anverso: '¿Dónde suelen ubicarse las oficinas de otros municipios?', reverso: 'En estaciones de Cercanías, como Alcalá de Henares, Collado Villalba o Torrejón de Ardoz, o en estaciones de autobuses, como Aranjuez.' }
], [4, 5]);

q('7.6', 3, 'La Oficina de Gestión del Aeropuerto T4 se caracteriza porque:',
  ['Solo resuelve incidencias y vende tarjetas turísticas', 'Realiza todos los trámites de la Tarjeta de Transporte Público',
   'Es la única que emite certificados de titularidad', 'Solo atiende a viajeros con abono anual'], 0,
  'Es una limitación expresa del manual. La oficina que realiza todos los trámites, más las tarjetas retiradas por inspección y los certificados de titularidad, es la de Ríos Rosas.', 4);

q('7.6', 3, 'La gestión de las tarjetas retiradas por la inspección y la emisión de certificados de titularidad se realizan en la Oficina de Gestión de:',
  ['Ríos Rosas', 'Sol', 'Atocha', 'Plaza de Castilla'], 0,
  'Ríos Rosas concentra esos dos trámites especiales, además de todos los referidos a la Tarjeta de Transporte Público. Es el dato más distintivo del listado de oficinas.', 4);

q('7.6', 2, '¿Cuál de estas NO es una Oficina de Gestión del CRTM en Madrid capital?',
  ['Alto del Arenal', 'Nuevos Ministerios', 'Príncipe Pío', 'Moncloa Intercambiador'], 0,
  'Alto del Arenal alberga el Puesto de Control Central y el CIAC de Metro de Madrid, pero no una Oficina de Gestión del Consorcio.', 4);

module.exports = {
  parte: { parte: '7', titulo: 'Consorcio Regional de Transportes de Madrid (CRTM)',
           manual: 'Manual 7 del temario oficial', url_manual: M, color: '#cf3d7d', epigrafes },
  preguntas
};
