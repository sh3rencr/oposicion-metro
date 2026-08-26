/* Parte 5 — Código Ético en Metro de Madrid (abril de 2017). */
'use strict';
const M = 'https://www.metromadrid.es/sites/default/files/empleo/descargables/5.Codigo_Etico_Metro_de_Madrid.pdf';
const { epigrafes, preguntas, tema, q } = require('./_util.js')(M, 'Manual 5 · Código Ético');

tema('5.1', 'Objeto, ámbito de aplicación y valores',
'El Código Ético es de **abril de 2017** y se estructura en **cinco capítulos y 24 artículos**.\n\n**Artículo 1. Objeto.** Establece los **valores y comportamientos** que deben guiar cómo los profesionales de Metro desempeñan sus funciones e interactúan con los usuarios, con las empresas proveedoras y contratistas, y con la propia Compañía. Constituye la base sobre la que construir la **cultura corporativa**, y define las **pautas de conducta** que todos deben aplicar en su trabajo diario.\n\n**Artículo 2. Ámbito de aplicación.** Se aplica a **los miembros del Consejo de Administración y a todo el personal de Metro**, incluido su Consejo de Dirección y estructura directiva, **con independencia del cargo, puesto o funciones** que desempeñen. Todos deben colaborar en construir una cultura corporativa ética y de cumplimiento.\n\n**Artículo 3. Misión.** La cultura desarrollada debe contribuir a la misión de Metro: **ser la opción de movilidad preferente en la región de Madrid, proporcionando un servicio público de transporte basado en la calidad y la eficiencia**.\n\n> Ojo: esta formulación de la misión **no es idéntica** a la del manual de conocimientos específicos, que habla de «ser la principal solución de movilidad». Son dos documentos distintos; responde según el manual por el que se pregunte.\n\n**Artículo 4. Los tres valores de Metro**, conforme a sus Estatutos Sociales:\n\n- **a) Servicio público**: situar a quienes usan los servicios y a los ciudadanos en general **en el centro** de las acciones y decisiones.\n- **b) Profesionalidad**: responder de forma **eficaz, en equipo**, utilizando las habilidades y los recursos disponibles para alcanzar los mejores resultados.\n- **c) Integridad**: actuar de forma **honesta y transparente**, conforme a estándares de ética profesional y al marco normativo aplicable.\n\n> No confundas los **tres valores** del Código Ético (servicio público, profesionalidad, integridad) con los **tres pilares estratégicos** del manual 1 (servicio público, eficiencia en la gestión, experiencia de cliente). Solo comparten el primero.',
[
 { anverso: '¿Cuáles son los tres valores de Metro según el Código Ético?', reverso: 'Servicio público, profesionalidad e integridad.' },
 { anverso: '¿A quién se aplica el Código Ético?', reverso: 'A los miembros del Consejo de Administración y a todo el personal, incluido el Consejo de Dirección y la estructura directiva, sea cual sea su cargo.' },
 { anverso: '¿Dónde se asientan los valores de Metro?', reverso: 'En sus Estatutos Sociales.' },
 { anverso: '¿Cómo define la integridad el Código Ético?', reverso: 'Actuar de forma honesta y transparente, conforme a estándares de ética profesional y al marco normativo aplicable.' }
], [5]);

q('5.1', 1, 'Los tres valores en los que Metro asienta sus principios de actuación y de conducta son:',
  ['Servicio público, profesionalidad e integridad', 'Servicio público, eficiencia en la gestión y experiencia de cliente',
   'Calidad, seguridad y sostenibilidad', 'Transparencia, legalidad y eficacia'], 0,
  'El artículo 4 del Código Ético fija servicio público, profesionalidad e integridad, de conformidad con los Estatutos Sociales. La opción de servicio público, eficiencia en la gestión y experiencia de cliente son los tres pilares estratégicos del manual de conocimientos específicos: comparten solo el primer elemento.', 5);

q('5.1', 2, 'El Código Ético es de aplicación a:',
  ['Los miembros del Consejo de Administración y a todo el personal, con independencia del cargo que ocupen',
   'Únicamente al personal directivo', 'Al personal de atención al cliente y de circulación',
   'A todo el personal, salvo a los miembros del Consejo de Administración'], 0,
  'El artículo 2 incluye expresamente a los miembros del Consejo de Administración y a todo el personal, incluido el Consejo de Dirección y la estructura directiva, sin distinción de cargo, puesto o funciones.', 5);

q('5.1', 3, 'Según el artículo 4, el valor de la «profesionalidad» consiste en:',
  ['Responder de forma eficaz, en equipo, utilizando habilidades y recursos para alcanzar los mejores resultados',
   'Actuar de forma honesta y transparente conforme al marco normativo',
   'Situar a los usuarios y ciudadanos en el centro de las decisiones',
   'Cumplir con los estándares de calidad de la Carta de Servicios'], 0,
  'Esa es la definición literal de profesionalidad. Actuar de forma honesta y transparente corresponde a la integridad, y situar a los usuarios en el centro es el valor de servicio público. Los tres se confunden con facilidad porque se enuncian de forma parecida.', 5);

tema('5.2', 'Principios generales de actuación (art. 5)',
'El artículo 5 enumera **catorce principios** (de la a a la n) a los que los empleados deben adecuar su conducta profesional:\n\n- **a)** Hacer del **servicio público la seña de identidad** de los profesionales de Metro.\n- **b)** Estar siempre **a la altura de la confianza** que depositan quienes usan sus servicios.\n- **c)** Ser **responsables, ágiles y eficientes** en la ejecución de funciones.\n- **d)** Enfocar la actividad hacia la **calidad y la innovación**.\n- **e)** Ser **leales** a Metro y asumir sus retos como propios.\n- **f)** **Trabajar en equipo** y compartir conocimientos, información y recursos.\n- **g)** **Valorar y escuchar** otras opiniones y aportaciones.\n- **h)** **Valorar y reconocer el esfuerzo.**\n- **i)** Mantener con el resto de profesionales una relación **basada en el respeto**.\n- **j)** Adoptar decisiones **analizando si son conformes** a la legalidad vigente, a los principios del Código y a la Política de Responsabilidad Corporativa.\n- **k)** **Cuestionar** aquello que no sea conforme al Código y **buscar soluciones**.\n- **l)** Cumplir las **políticas internas y procedimientos** adoptados para prevenir comportamientos contrarios al Código.\n- **m)** Ser **responsables de las acciones y decisiones** adoptadas.\n- **n)** **No permitir que intereses personales interfieran** en las responsabilidades profesionales.\n\n> El apartado **k)** es más exigente de lo que parece: no basta con no incumplir, hay **obligación activa de cuestionar** lo que no sea conforme al Código. Y el **n)** es la puerta de entrada al régimen de conflictos de interés del artículo 11.',
[
 { anverso: '¿Qué obliga a hacer el principio k) del artículo 5?', reverso: 'Cuestionar aquello que no sea conforme al Código Ético y buscar soluciones que cumplan sus principios.' },
 { anverso: '¿Qué hay que analizar antes de adoptar una decisión, según el principio j)?', reverso: 'Si es conforme a la legalidad vigente, a los principios del Código Ético y a la Política de Responsabilidad Corporativa.' },
 { anverso: '¿Qué principio prohíbe que los intereses personales interfieran en el trabajo?', reverso: 'El n), último de los principios generales de actuación.' }
], [5, 6]);

q('5.2', 2, 'Entre los principios generales de actuación del artículo 5 figura el de:',
  ['Cuestionar aquello que no sea conforme al Código Ético y buscar soluciones',
   'Abstenerse de opinar sobre las decisiones de los superiores',
   'Comunicar a los medios cualquier irregularidad detectada',
   'Priorizar la rentabilidad económica sobre la calidad del servicio'], 0,
  'El apartado k) impone un deber activo de cuestionar lo que no se ajuste al Código y buscar soluciones. Comunicar irregularidades a los medios sería contrario al artículo 10, que reserva la portavocía a las personas designadas oficialmente.', 6);

q('5.2', 3, 'Según el artículo 5, al adoptar decisiones los empleados deben analizar si son conformes a:',
  ['La legalidad vigente, los principios del Código Ético y la Política de Responsabilidad Corporativa',
   'La legalidad vigente y las instrucciones del superior jerárquico',
   'El convenio colectivo y las Instrucciones Internas de Contratación',
   'Los estándares de la Carta de Servicios'], 0,
  'El apartado j) enumera esos tres referentes. Las instrucciones del superior no bastan: el artículo 24.5 advierte expresamente que nadie puede ampararse en una orden de un superior manifiestamente contraria al Código.', 6);

tema('5.3', 'Prestación de servicios: calidad, seguridad ferroviaria y gestión eficiente',
'**Artículo 6. Calidad del servicio.** Los empleados deberán:\n\n- Aplicar la **Guía de Buenas Prácticas** en las relaciones con quienes usen los servicios.\n- Ser **diligentes** en la atención de quejas, reclamaciones y sugerencias, aplicando los procedimientos y protocolos de Metro.\n- Asegurar que la información expuesta en **estaciones, trenes y redes sociales** está convenientemente **actualizada**.\n- Facilitar toda la información sobre la oferta de servicio, asegurando que sea **clara, precisa y veraz**.\n\n**Artículo 7. Seguridad ferroviaria.** Tres principios de actuación:\n\n- **a)** Cumplir con las medidas de **protección ciudadana** y con las normas de **prevención y salud** para velar por la seguridad de clientes y personal.\n- **b)** **No permitir** comportamientos o actuaciones que puedan provocar daños a personas o instalaciones.\n- **c)** Considerar **en todo momento** la aplicación de la normativa, los procedimientos y los controles de seguridad ferroviaria como un **requisito indispensable** para prestar el servicio.\n\n**Artículo 8. Gestión eficiente.** Metro será eficiente en la gestión de recursos, adquiriendo bienes y contratando servicios tomando en consideración el **coste económico** y asegurando el **nivel de calidad y seguridad requerido**, y organizando el trabajo para que **el tiempo empleado en el proceso completo sea el menor posible**.\n\nLos empleados deberán:\n\n- Velar por conseguir la **mayor concurrencia posible** de empresas proveedoras.\n- **Analizar los procesos** y la forma de trabajar para mejorar el servicio al cliente interno con menos tiempo y recursos.\n- **Sustentar cualquier decisión de compra o inversión en un análisis de costes**, buscando la alternativa más eficiente.',
[
 { anverso: '¿Qué guía deben aplicar los empleados en su relación con los clientes?', reverso: 'La Guía de Buenas Prácticas.' },
 { anverso: '¿Cómo debe ser la información que se facilita sobre la oferta de servicio?', reverso: 'Clara, precisa y veraz.' },
 { anverso: 'Según el artículo 7, ¿qué consideración tienen la normativa y los controles de seguridad ferroviaria?', reverso: 'La de requisito indispensable para prestar el servicio, en todo momento.' },
 { anverso: '¿En qué debe sustentarse cualquier decisión de compra o inversión?', reverso: 'En un análisis de los costes de la actividad, buscando la alternativa más eficiente.' }
], [6, 7]);

q('5.3', 2, 'Según el artículo 6, la información que los empleados faciliten sobre la oferta de servicio debe ser:',
  ['Clara, precisa y veraz', 'Breve, amable y suficiente', 'Completa, escrita y firmada', 'Oficial, sellada y verificable'], 0,
  'La formulación literal del Código es clara, precisa y veraz. El mismo artículo obliga además a mantener actualizada la información expuesta en estaciones, trenes y redes sociales.', 6);

q('5.3', 3, 'El artículo 7 del Código Ético califica la aplicación de la normativa y los controles de seguridad ferroviaria como:',
  ['Un requisito indispensable para prestar el servicio', 'Una recomendación de buenas prácticas',
   'Una obligación exclusiva del personal de circulación', 'Un criterio subordinado a la puntualidad del servicio'], 0,
  'El apartado c) del artículo 7 emplea la expresión «requisito indispensable», y lo hace sin excepciones ni matices de oportunidad. La seguridad no se pondera frente a la puntualidad: es condición previa del servicio.', 6);

q('5.3', 2, 'Dentro de la gestión eficiente, los empleados deben velar por:',
  ['Conseguir la mayor concurrencia posible de empresas proveedoras',
   'Adjudicar preferentemente a proveedores ya conocidos', 'Reducir el número de licitadores para agilizar los procesos',
   'Aceptar siempre la oferta de menor precio'], 0,
  'El artículo 8 pide la mayor concurrencia posible, para que los proveedores ofrezcan su mejor precio y servicio. El precio más bajo no es el criterio automático: el propio artículo exige asegurar el nivel de calidad y seguridad requerido.', 7);

tema('5.4', 'Contratación responsable e imagen de Metro',
'**Artículo 9. Contratación responsable.** Metro ajustará su actuación a **seis principios**: **publicidad, confidencialidad, igualdad, concurrencia, transparencia y no discriminación**. Además, aplicará las **prohibiciones de contratar** que resulten aplicables.\n\nLos empleados deberán:\n\n- Tomar en consideración las **Instrucciones Internas de Contratación** de Metro.\n- **No conceder trato preferente o de favor** a un contratista por razones personales, de amistad o de cualquier índole.\n- Mientras un proceso de licitación permanezca abierto, adoptar todas las cautelas para **reducir al mínimo imprescindible el contacto** con las empresas interesadas.\n- Tratar con **atención, respeto y diligencia** a quienes muestren interés, informándoles con rapidez y transparencia.\n- Observar el cumplimiento de los acuerdos respecto a **alcance, indicadores, plazos, precios y calidad**.\n- **Proteger la información confidencial** de proveedores y contratistas **como si fuera de Metro**.\n\n**Artículo 10. Imagen de Metro.** Las funciones de **portavocía** o las declaraciones públicas en nombre de Metro son **responsabilidad exclusiva de las personas designadas oficialmente** para ello.\n\nLos empleados deberán:\n\n- **Cuidar su imagen** y formas de actuar, sabiendo lo que supone representar a Metro.\n- Velar por que su proceder **no dañe la imagen y reputación**, **no utilizar el nombre y la marca** para usos distintos de los permitidos, y **no comparecer públicamente como portavoz sin autorización previa**.\n- Ser **especialmente cuidadosos** en las intervenciones en las que se les reconozca públicamente como personal de Metro, **incluidas las realizadas en redes sociales**: no facilitar informaciones que no respondan a la realidad, ni hacer manifestaciones o difundir informaciones parciales que **deliberadamente** dañen la imagen o reputación de la Compañía.',
[
 { anverso: '¿Cuáles son los seis principios de la contratación en Metro?', reverso: 'Publicidad, confidencialidad, igualdad, concurrencia, transparencia y no discriminación.' },
 { anverso: '¿Cómo debe tratarse la información confidencial de proveedores y contratistas?', reverso: 'Como si fuera información confidencial de la propia Metro.' },
 { anverso: '¿Quién puede hacer declaraciones públicas en nombre de Metro?', reverso: 'Solo las personas designadas oficialmente para la portavocía en cada momento.' },
 { anverso: '¿Qué cautela hay que tomar durante una licitación abierta?', reverso: 'Reducir al mínimo imprescindible el contacto con las empresas interesadas en el proceso.' }
], [7]);

q('5.4', 3, 'Los principios a los que Metro ajusta su actuación en materia de contratación son:',
  ['Publicidad, confidencialidad, igualdad, concurrencia, transparencia y no discriminación',
   'Publicidad, concurrencia, eficacia y economía', 'Legalidad, jerarquía, publicidad y eficiencia',
   'Igualdad, mérito, capacidad y publicidad'], 0,
  'El artículo 9 enumera esos seis. Llama la atención que junto a la publicidad y la transparencia aparezca la confidencialidad: no son contradictorias, porque la confidencialidad protege la información sensible de los licitadores.', 7);

q('5.4', 2, 'Mientras un proceso de licitación permanece abierto, los empleados deben:',
  ['Reducir al mínimo imprescindible el contacto con las empresas interesadas',
   'Mantener reuniones periódicas con todos los licitadores', 'Suspender toda comunicación con el exterior',
   'Comunicar el estado del proceso a las empresas que lo soliciten'], 0,
  'El artículo 9 exige adoptar las cautelas necesarias para reducir el contacto al mínimo imprescindible. No es una prohibición absoluta de comunicación, pero sí una restricción activa mientras dura la licitación.', 7);

q('5.4', 2, 'Respecto a las intervenciones en redes sociales en las que se reconozca al empleado como personal de Metro, el Código Ético exige:',
  ['Ser especialmente cuidadoso, sin facilitar informaciones que no respondan a la realidad ni dañar deliberadamente la reputación',
   'Abstenerse por completo de usar redes sociales', 'Solicitar autorización previa para cada publicación',
   'Identificarse siempre como empleado de Metro'], 0,
  'El artículo 10 menciona expresamente las redes sociales y pide un cuidado especial, pero no prohíbe su uso ni exige autorización para cada publicación. Lo que sí requiere autorización previa es comparecer públicamente como portavoz de Metro.', 7);

tema('5.5', 'Conflictos de interés, regalos y prevención de la corrupción',
'**Artículo 11. Conflictos de interés y actividades externas.** Metro, como empresa cuyo capital está **participado íntegramente por la Comunidad de Madrid**, adoptará las medidas necesarias para cumplir con la **Ley 53/1984, de 26 de diciembre, de Incompatibilidades del Personal al Servicio de las Administraciones Públicas**.\n\nLos empleados deberán:\n\n- **Identificar** las situaciones de conflicto entre su deber y otros intereses.\n- Ser transparentes y **comunicar** los conflictos de interés, **reales o que puedan percibirse como tales**.\n- **Abstenerse de participar** en procesos de decisión en los que puedan interferir intereses personales de índole familiar, económica o de otro tipo.\n- **No utilizar su posición** para obtener, directa o indirectamente, ventajas o beneficios personales o materiales, para sí o para un tercero.\n- **Respetar el régimen de incompatibilidades.**\n- **Poner en conocimiento de la empresa cualquier actividad profesional adicional** que realicen, para que se evalúe su posible incompatibilidad.\n\n**Artículo 12. Regalos e invitaciones.** Los empleados, **cualquiera que sea su área de actividad o nivel jerárquico**, **no podrán aceptar u ofrecer** regalos o invitaciones, **salvo muestras de cortesía habitual conforme a la práctica social generalmente aceptada**.\n\nSi se recibe un regalo que no se ajusta a eso, se procederá a **devolverlo a su remitente**. Y si **no fuera viable devolverlo**, **Metro se hará cargo de él** para su **exposición pública** en la Compañía, o bien su **entrega a otros organismos** (donación a museo, obra social, etc.).\n\n**Artículo 13. Prevención de la corrupción.** Metro impulsará:\n\n- **a)** El **rechazo de cualquier forma de corrupción**, incluyendo el **soborno y la extorsión**.\n- **b)** La **máxima transparencia** en todas sus actuaciones, especialmente con proveedores y contratistas.\n- **c)** El cumplimiento de las políticas y procedimientos desarrollados a tal fin.\n\n**Artículo 14. Protección de datos.** Los empleados deberán **guardar el debido secreto profesional** respecto de los datos personales a los que accedan por su trabajo y **no revelar información a personas que no participen en su tratamiento**, aplicando las medidas y procedimientos establecidos por Metro.',
[
 { anverso: '¿Qué ley de incompatibilidades cita el Código Ético?', reverso: 'La Ley 53/1984, de 26 de diciembre, de Incompatibilidades del Personal al Servicio de las Administraciones Públicas.' },
 { anverso: '¿Qué se hace con un regalo que no puede devolverse?', reverso: 'Metro se hace cargo de él para exponerlo públicamente en la Compañía o entregarlo a otros organismos: donación a museo, obra social, etc.' },
 { anverso: '¿Qué regalos e invitaciones sí pueden aceptarse?', reverso: 'Solo las muestras de cortesía habitual conforme a la práctica social generalmente aceptada.' },
 { anverso: '¿Hay que comunicar los conflictos de interés solo cuando son reales?', reverso: 'No. También los que puedan percibirse como tales.' },
 { anverso: '¿Qué formas de corrupción menciona expresamente el artículo 13?', reverso: 'El soborno y la extorsión.' }
], [7, 8]);

q('5.5', 2, 'Respecto a los regalos e invitaciones, el Código Ético establece que los empleados:',
  ['No podrán aceptarlos ni ofrecerlos, salvo muestras de cortesía habitual conforme a la práctica social aceptada',
   'Podrán aceptarlos siempre que no superen un valor de 50 euros',
   'Podrán aceptarlos si los comunican a su responsable directo',
   'Solo tienen prohibido aceptarlos si provienen de licitadores'], 0,
  'El artículo 12 no fija un umbral económico ni admite la comunicación como vía de convalidación: la única excepción es la muestra de cortesía habitual según la práctica social generalmente aceptada. Y la prohibición alcanza a cualquier nivel jerárquico.', 7);

q('5.5', 3, 'Cuando no sea viable devolver un regalo a su remitente:',
  ['Metro se hará cargo de él para su exposición pública o su entrega a otros organismos',
   'El empleado podrá conservarlo previa comunicación', 'Se destruirá en presencia de un responsable',
   'Se sorteará entre la plantilla'], 0,
  'El artículo 12.3 prevé que Metro se haga cargo del regalo, ya sea para exponerlo públicamente en la Compañía o para entregarlo a otros organismos, mencionando la donación a museo u obra social como ejemplos.', 7);

q('5.5', 3, 'La obligación de comunicar un conflicto de interés alcanza:',
  ['Tanto a los conflictos reales como a los que puedan percibirse como tales',
   'Solo a los conflictos reales y acreditados', 'Solo a los de naturaleza económica',
   'Solo a los que afecten a procesos de contratación'], 0,
  'El artículo 11 incluye expresamente los conflictos «ya sea real o que pueda percibirse como tal». La apariencia de conflicto se trata igual que el conflicto efectivo, porque erosiona la misma confianza.', 7);

q('5.5', 2, 'Metro adopta medidas para cumplir con la Ley 53/1984 porque:',
  ['Su capital está participado íntegramente por la Comunidad de Madrid',
   'Es una entidad de derecho público', 'Así lo exige el convenio colectivo',
   'Lo impone la Ley de Ordenación de los Transportes Terrestres'], 0,
  'El artículo 11.2 vincula expresamente la aplicación de la ley de incompatibilidades a la condición de Metro como empresa de capital íntegramente participado por la Comunidad de Madrid. Metro es una sociedad anónima, no una entidad de derecho público.', 7);

tema('5.6', 'Relaciones entre la empresa y el empleado',
'**Artículo 15. Igualdad y diversidad.** Metro promoverá un entorno de trabajo justo y garantizará la **igualdad entre hombres y mujeres** en el trato y en el **acceso al empleo, la promoción laboral y la formación profesional**. Los empleados deben **facilitar la integración** de las personas con diversidad funcional y **rechazar cualquier forma de discriminación** por nacimiento, origen racial o étnico, género, orientación sexual, religión o convicciones, opinión, ideología, diversidad funcional, edad o cualquier otra condición personal o social.\n\n**Artículo 16. Prevención del acoso.** Los empleados **evitarán y denunciarán** el **acoso sexual, laboral o por razón de cualquier otra condición**, aplicando los mecanismos que establezca la legislación.\n\n> Fíjate en el doble deber: no basta con **evitar**; también hay obligación de **denunciar**.\n\n**Artículo 17. Conciliación y derechos sindicales.** Metro cumplirá la legislación laboral, el convenio colectivo y los contratos; promoverá las medidas de **conciliación** de la vida personal, familiar y laboral; y **respetará el derecho a asociarse** y pertenecer a la organización sindical que se considere. Los empleados deben **rechazar prácticas antisindicales**, respetando también el derecho **a no integrarse en ninguna** organización sindical.\n\n**Artículo 18. Salud y seguridad.** Metro fomentará un entorno de trabajo apto para desarrollar la actividad de forma segura y saludable, y los empleados aplicarán **siempre** las normas establecidas.\n\n**Artículo 19. Selección y promoción interna.** Los órganos de selección deben **reconocer los méritos y el potencial** de los candidatos, según las necesidades de la empresa y el perfil del puesto, **respetando el principio de igualdad**. Cuando las **relaciones personales o familiares** puedan interferir (procesos de selección, evaluaciones, promociones), hay que **comunicarlo al responsable directo o a la División de Recursos Humanos**.\n\n**Artículo 20. Uso de los bienes y recursos.** Uso responsable de instalaciones, materiales, equipos y servicios; uso responsable y profesional de la tecnología de comunicaciones corporativas; y aplicar siempre los procedimientos relativos a la **custodia y protección del efectivo** y al **buen uso de los títulos de transporte**.\n\n**Artículo 21. Uso, protección y comunicación de la información.** Los empleados deberán: **nunca revelar información corporativa** a personas ajenas salvo que las funciones lo requieran; **nunca obtener información por medios no lícitos**; **no almacenar información no laboral** en los sistemas de Metro **ni información de la empresa en sistemas ajenos**; **no acceder a información de áreas o departamentos ajenos** a las funciones propias; **comunicar cualquier brecha** o debilidad en los controles de acceso; y **no usar la información obtenida para beneficio propio o de terceros**.',
[
 { anverso: '¿Qué doble deber impone el artículo 16 respecto al acoso?', reverso: 'Evitarlo y denunciarlo, aplicando los mecanismos que establezca la legislación.' },
 { anverso: 'Si una relación familiar puede interferir en un proceso de selección, ¿qué hay que hacer?', reverso: 'Comunicarlo al responsable directo o a la División de Recursos Humanos.' },
 { anverso: '¿Protege el Código el derecho a NO sindicarse?', reverso: 'Sí. Junto al derecho a asociarse, obliga a respetar el derecho a no integrarse en ninguna organización sindical.' },
 { anverso: '¿Puede almacenarse información de Metro en sistemas ajenos a la empresa?', reverso: 'No. Y tampoco información no relacionada con la actividad laboral en los sistemas de Metro.' },
 { anverso: '¿En qué ámbitos garantiza Metro la igualdad entre hombres y mujeres?', reverso: 'En el trato y en el acceso al empleo, la promoción laboral y la formación profesional.' }
], [9, 10]);

q('5.6', 2, 'El artículo 16 del Código Ético establece que los empleados, respecto del acoso, deberán:',
  ['Evitarlo y denunciarlo', 'Únicamente evitarlo', 'Comunicarlo solo si son las víctimas',
   'Ponerlo en conocimiento exclusivamente de su superior jerárquico'], 0,
  'El deber es doble y no se limita a la propia víctima: evitar y denunciar el acoso sexual, laboral o por razón de cualquier otra condición o circunstancia personal o social.', 9);

q('5.6', 3, 'Un empleado que participa en un proceso de selección en el que concurre un familiar debe:',
  ['Comunicar la circunstancia a su responsable directo o a la División de Recursos Humanos',
   'Abstenerse sin necesidad de comunicarlo', 'Continuar si considera que puede ser imparcial',
   'Comunicarlo únicamente al Área de Cumplimiento Normativo'], 0,
  'El artículo 19 exige comunicar la circunstancia al responsable directo o a la División de Recursos Humanos. El Área de Cumplimiento Normativo y Transparencia es el canal para dudas de interpretación del Código y para informar de incumplimientos, que es otra vía.', 9);

q('5.6', 3, 'En materia de derechos sindicales, el Código Ético obliga a respetar:',
  ['Tanto el derecho a sindicarse como el derecho a no integrarse en ninguna organización sindical',
   'Únicamente el derecho a pertenecer a un sindicato', 'La afiliación obligatoria al sindicato mayoritario',
   'La neutralidad sindical de todo el personal'], 0,
  'El artículo 17 protege ambas caras: el derecho a asociarse y pertenecer al sindicato que se considere, y el derecho de los profesionales a no integrarse en ninguno. También obliga a rechazar prácticas antisindicales.', 9);

q('5.6', 2, 'Respecto al almacenamiento de información, el artículo 21 prohíbe:',
  ['Almacenar información no laboral en los sistemas de Metro y almacenar información de la empresa en sistemas ajenos',
   'Únicamente almacenar información personal en los equipos corporativos',
   'Almacenar cualquier información en servidores propios de Metro',
   'Utilizar el correo corporativo para comunicaciones internas'], 0,
  'La prohibición es doble y simétrica: ni información ajena a la actividad laboral dentro de los sistemas de Metro, ni información de la empresa fuera de ellos. El artículo añade además la prohibición de acceder a información de departamentos ajenos a las funciones propias.', 10);

tema('5.7', 'Responsabilidad corporativa, transparencia y aplicación del Código',
'**Artículo 22. Responsabilidad corporativa.** Todos deben trabajar alineados con el compromiso con el **desarrollo sostenible**, entendido como la contribución al **progreso económico, social y medioambiental** de la sociedad. La política de responsabilidad corporativa se desarrolla en **tres líneas de actuación**:\n\n1. **Negocio responsable**\n2. **Cultura inclusiva**\n3. **Gestión medioambiental**\n\nY los empleados deben contribuir al cumplimiento de los estándares de la **Carta de Servicios**, actuar contra cualquier discriminación, hacer un **uso racional y eficiente** de los recursos, y transmitir los principios de sostenibilidad a compañeros, proveedores, contratistas y clientes.\n\n**Artículo 23. Transparencia.** Metro debe velar por el **equilibrio** entre el principio de transparencia y el deber de proteger la información confidencial, el secreto profesional y el derecho a la intimidad. Como gestor de recursos públicos, debe dar acceso a los ciudadanos y a las administraciones a los contenidos elaborados o adquiridos en el ejercicio de sus funciones, **salvo que resulte aplicable algún límite legal**. Debe hacer **publicidad activa** de su información institucional, organizativa, económica, presupuestaria y estadística.\n\nLos empleados deben cumplir la **Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno**, y procurar que la información transmitida sea **comprensible, completa y veraz**.\n\n**Artículo 24. Cumplimiento del Código.** Es de **obligado cumplimiento** para el Consejo de Administración y todo el personal, **empezando por la Dirección**, que le dará **máxima prioridad**.\n\n- La **Dirección** es responsable de su **difusión y promoción** en sus Áreas y Servicios.\n- El Código queda **publicado en la Intranet Corporativa**.\n- Las **dudas** de interpretación se consultan con el **responsable directo** o, si las circunstancias lo requieren, con el **Área de Cumplimiento Normativo y Transparencia**.\n- **Nadie, con independencia de su posición, está autorizado para solicitar que se contravenga el Código.** Y ningún empleado podrá justificar una conducta contraria **amparándose en su desconocimiento ni en una orden de un superior jerárquico manifiestamente contraria** al Código.\n- Los empleados tienen **obligación de informar** al equipo de Cumplimiento Normativo y Transparencia de cualquier posible incumplimiento o mala práctica.\n- La inobservancia **podrá ser objeto de medidas disciplinarias**.',
[
 { anverso: '¿Cuáles son las tres líneas de la política de responsabilidad corporativa?', reverso: 'Negocio responsable, cultura inclusiva y gestión medioambiental.' },
 { anverso: '¿Puede alegarse desconocimiento del Código Ético o una orden del superior?', reverso: 'No. Ni el desconocimiento ni una orden de un superior manifiestamente contraria al Código justifican una conducta contraria a él.' },
 { anverso: '¿Dónde se publica el Código Ético y con quién se consultan las dudas?', reverso: 'En la Intranet Corporativa. Las dudas, con el responsable directo o con el Área de Cumplimiento Normativo y Transparencia.' },
 { anverso: '¿Qué ley de transparencia cita el Código?', reverso: 'La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno.' },
 { anverso: '¿Cómo debe ser la información que se transmite, interna y externamente?', reverso: 'Comprensible, completa y veraz.' }
], [11, 12]);

q('5.7', 2, 'Las tres líneas de actuación de la política de responsabilidad corporativa de Metro son:',
  ['Negocio responsable, cultura inclusiva y gestión medioambiental',
   'Servicio público, profesionalidad e integridad', 'Calidad, eficiencia y transparencia',
   'Progreso económico, social y medioambiental'], 0,
  'El artículo 22 nombra negocio responsable, cultura inclusiva y gestión medioambiental. El progreso económico, social y medioambiental es la definición de desarrollo sostenible que da el mismo artículo, no las líneas de actuación.', 11);

q('5.7', 3, 'Un empleado recibe de su superior jerárquico una orden manifiestamente contraria al Código Ético. Según el artículo 24:',
  ['No puede justificar una conducta contraria al Código amparándose en esa orden',
   'Debe cumplirla y comunicarlo después a Recursos Humanos',
   'Debe cumplirla si la orden consta por escrito',
   'Puede cumplirla si el superior asume la responsabilidad'], 0,
  'El artículo 24.5 es tajante: nadie está autorizado a pedir que se contravenga el Código, y ningún empleado puede ampararse ni en el desconocimiento ni en una orden de un superior manifiestamente contraria. La orden no traslada la responsabilidad.', 12);

q('5.7', 2, 'Las dudas sobre la interpretación o aplicación del Código Ético se consultan con:',
  ['El responsable directo o, si las circunstancias lo requieren, con el Área de Cumplimiento Normativo y Transparencia',
   'La División de Recursos Humanos', 'El Comité de Dirección', 'La representación sindical'], 0,
  'El artículo 24.4 fija esos dos interlocutores, en ese orden. La División de Recursos Humanos aparece en el Código, pero en el artículo 19, para comunicar relaciones personales que puedan interferir en procesos de selección.', 12);

q('5.7', 3, 'El Código Ético queda publicado en:',
  ['La Intranet Corporativa', 'El Boletín Oficial de la Comunidad de Madrid',
   'La web pública de Metro de Madrid', 'El tablón de anuncios de cada dependencia'], 0,
  'El artículo 24.3 indica la Intranet Corporativa, coherente con que sus destinatarios sean el Consejo de Administración y el personal de Metro, no el público general.', 12);

module.exports = {
  parte: { parte: '5', titulo: 'Código Ético en Metro de Madrid',
           manual: 'Manual 5 del temario oficial', url_manual: M, color: '#7a41c4', epigrafes },
  preguntas
};
