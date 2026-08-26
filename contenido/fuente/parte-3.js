/* Parte 3 — Normativa Interna de Circulación (NIC) de Metro de Madrid. */
'use strict';
const M = 'https://www.metromadrid.es/sites/default/files/empleo/descargables/3.Normativa_Interna_de_Circulacion.pdf';
const { epigrafes, preguntas, tema, q } = require('./_util.js')(M, 'Manual 3 · NIC');

tema('3.1', 'Objeto, ámbito y modificación de la NIC',
'**Objeto (art. 1.1.1).** Establecer las normas necesarias para **regular la circulación de manera eficaz y segura**, tanto por la **Red principal** de Metro **como por la secundaria**.\n\n**Ámbito (art. 1.1.2).** Se aplica en **toda la Red operada por Metro**, **excepto** en las explotaciones que tengan **Normativa propia**. Es de **obligado cumplimiento** para todos los trabajadores de Metro **que intervengan en la circulación de trenes**.\n\nQuedan **fuera** las dependencias e instalaciones **cuando permanezcan cerradas a la explotación**, y el personal que trabaje en ellas en esas circunstancias. **La Dirección publicará** el momento a partir del cual quedan o no en explotación.\n\n> Compara con las Normas de seguridad de los agentes (manual 2): su ámbito subjetivo es más amplio, porque alcanza también a quienes realizan **trabajos en zonas colindantes y andenes** o **acceden a la plataforma de vía**. La NIC se dirige a quienes **intervienen en la circulación**.\n\n**Modificación (art. 1.2.1).** Las normas de la NIC **únicamente se podrán modificar o ampliar por Circulares de Dirección**, que, **una vez publicadas, forman parte y quedan integradas en ella**.\n\n**Distribución y conservación (art. 1.2.2).** La NIC se publica por el **sistema de hojas intercambiables**, para facilitar su sustitución por otras que recojan rectificaciones, anulaciones o ampliaciones. La Dirección, **a través de las distintas jefaturas**, asegurará la distribución y entrega de la NIC y de las comunicaciones que puedan modificarla a todos los afectados.',
[
 { anverso: '¿Cuál es el objeto de la NIC?', reverso: 'Regular la circulación de manera eficaz y segura, tanto por la Red principal como por la secundaria.' },
 { anverso: '¿Cómo puede modificarse o ampliarse la NIC?', reverso: 'Únicamente por Circulares de Dirección, que una vez publicadas quedan integradas en ella.' },
 { anverso: '¿Por qué sistema se publica la NIC?', reverso: 'Por el sistema de hojas intercambiables, para facilitar su sustitución.' },
 { anverso: '¿A quién obliga la NIC?', reverso: 'A todos los trabajadores de Metro que intervengan en la circulación de trenes por la Red.' }
], [23, 24]);

q('3.1', 2, 'La Normativa Interna de Circulación únicamente puede modificarse o ampliarse mediante:',
  ['Circulares de Dirección', 'Acuerdo del Consejo de Administración', 'Instrucciones del PCC',
   'Resolución del Consorcio Regional de Transportes'], 0,
  'El artículo 1.2.1 reserva esa facultad a las Circulares de Dirección, que una vez publicadas quedan integradas en la propia NIC. El PCC aplica y hace cumplir la Normativa, pero no puede modificarla.', 24);

q('3.1', 3, 'La NIC se publica por el sistema de hojas intercambiables porque:',
  ['Facilita su sustitución por otras que recojan rectificaciones, anulaciones o ampliaciones',
   'Permite repartir la Normativa por capítulos entre departamentos',
   'Evita tener que distribuirla al personal de nueva incorporación',
   'Es el formato exigido por el Consorcio Regional de Transportes'], 0,
  'El artículo 1.2.2 justifica el sistema precisamente por la facilidad de sustitución de hojas. De hecho, el manual incorpora un control de cambios con códigos ACT que identifican las páginas actualizadas.', 24);

q('3.1', 2, 'El ámbito de aplicación de la NIC alcanza a:',
  ['Toda la Red operada por Metro, excepto las explotaciones que tengan Normativa propia',
   'Únicamente a las vías principales', 'Solo a la Red principal, no a la secundaria',
   'A toda la Red sin excepción alguna'], 0,
  'La excepción de las explotaciones con Normativa propia es la misma que figura en las Normas de seguridad de los agentes. Y el objeto de la NIC abarca expresamente tanto la Red principal como la secundaria.', 23);

tema('3.2', 'Autoridad del PCC y obligaciones de los trabajadores',
'**El PCC es el máximo responsable de la explotación del servicio (art. 2.1.1).** Ejerce el **mando funcional y jerárquico** sobre **todos los trabajadores con responsabilidad en la circulación**, así como sobre los **equipos de mantenimiento de material móvil e instalaciones** en todo lo relativo a la circulación.\n\n**Intervención (art. 2.1.2).** El PCC se encarga de la **supervisión, control y regulación** de la circulación, con el auxilio de sus herramientas (**CTC**, sistemas automáticos de regulación), **mediante la transmisión de órdenes** a los conductores y al resto del personal con responsabilidad sobre la circulación.\n\nAdemás, es competencia del PCC **velar por el cumplimiento de la NIC**, tanto en normalidad como en situaciones especialmente sensibles: control y coordinación de los trabajos en la plataforma de vía, autorización de acceso de personas a la misma, y establecimiento de precauciones y medidas de seguridad en **circulación degradada**.\n\n**Delegación (art. 2.1.3).** Cuando el PCC **no pueda asumir** la autoridad que le confiere la NIC, esta será asumida:\n\n1. Por los **responsables operativos** ubicados en las líneas, estaciones, depósitos o cocheras, si los hubiere.\n2. **En su defecto, por los conductores de los trenes.**\n\n> Esa cadena de suplencia —PCC → responsable operativo → conductor— es una de las preguntas clásicas del título 2.\n\n**Obligaciones de los trabajadores (art. 2.2.1).** Todo trabajador que intervenga en una operación o maniobra **cumplirá las normas** de la NIC. Y **tiene obligación de comunicar lo antes posible al PCC y a su superior inmediato** los posibles **defectos en la aplicación** de las normas o su **incumplimiento**, así como de cualquier otra medida de seguridad.\n\n**Obligaciones de los mandos (art. 2.2.2).** Deben **exigir el cumplimiento estricto**, y **asesorar, inspeccionar y vigilar** las actuaciones de su personal en cuanto a la interpretación correcta de las normas, el uso correcto de los medios y documentos, y el buen uso y conservación del material móvil e instalaciones.\n\n**Funciones no delegables (art. 2.2.3).** Las funciones de circulación **que afecten a la seguridad** serán ejercidas por quien las tenga a su cargo y **no serán delegables**, salvo que esté **expresamente autorizado por orden superior**.',
[
 { anverso: '¿Quién es el máximo responsable de la explotación del servicio?', reverso: 'El PCC, que ejerce mando funcional y jerárquico sobre todos los trabajadores con responsabilidad en la circulación.' },
 { anverso: 'Si el PCC no puede asumir su autoridad, ¿quién la asume?', reverso: 'Los responsables operativos de líneas, estaciones, depósitos o cocheras, y en su defecto los conductores de los trenes.' },
 { anverso: '¿A quién hay que comunicar un incumplimiento de la NIC?', reverso: 'Al PCC y al superior inmediato, lo antes posible.' },
 { anverso: '¿Son delegables las funciones de circulación que afectan a la seguridad?', reverso: 'No, salvo autorización expresa por orden superior.' }
], [27, 28]);

q('3.2', 2, 'Cuando el PCC no pueda asumir la autoridad que le confiere la NIC, esta será asumida por:',
  ['Los responsables operativos y, en su defecto, por los conductores de los trenes',
   'Los conductores de los trenes en primer término', 'La Dirección de Operación',
   'El personal de las estaciones en todo caso'], 0,
  'El artículo 2.1.3 fija ese orden de suplencia: primero los responsables operativos ubicados en líneas, estaciones, depósitos o cocheras si los hubiere, y solo en su defecto los conductores.', 27);

q('3.2', 3, 'Un trabajador detecta un incumplimiento de la NIC. Debe comunicarlo:',
  ['Lo antes posible al PCC y a su superior inmediato', 'Únicamente a su superior inmediato',
   'Únicamente al PCC', 'Al finalizar su jornada, mediante la Hoja de ruta'], 0,
  'El artículo 2.2.1 impone la doble comunicación, al PCC y al superior inmediato, y además lo antes posible. La Hoja de ruta sirve para registrar horarios, recorridos y anomalías del tren, no para canalizar incumplimientos normativos.', 28);

q('3.2', 3, 'Las funciones de circulación que afecten a la seguridad:',
  ['No son delegables, salvo autorización expresa por orden superior',
   'Son siempre delegables en otro trabajador habilitado',
   'Pueden delegarse con la simple comunicación al PCC',
   'Solo son delegables en situaciones de circulación degradada'], 0,
  'El artículo 2.2.3 establece que las ejerce quien las tiene a su cargo y que no son delegables, con la única salvedad de una autorización expresa por orden superior.', 28);

q('3.2', 2, 'El mando funcional y jerárquico del PCC alcanza:',
  ['A todos los trabajadores con responsabilidad en la circulación y a los equipos de mantenimiento en lo relativo a la circulación',
   'Solo a los conductores de trenes', 'Solo al personal de estaciones y depósitos',
   'A toda la plantilla de Metro de Madrid'], 0,
  'El artículo 2.1.1 incluye expresamente a los equipos de mantenimiento de material móvil e instalaciones, pero solo «en todo lo relativo a la circulación». No es un mando general sobre toda la plantilla.', 27);

tema('3.3', 'Transmisión de órdenes y actitud durante el servicio',
'**Notificaciones (art. 2.3.1).** Quien tenga que hacer una notificación o dar una orden relativa a la circulación lo hará **sin intermediarios**, por comunicación **verbal, telefónica, radiada o escrita**.\n\n- Cuando se imparta una **orden verbal, radiada o telefónica**, **se hará repetir por el receptor** para comprobar que ha sido entendida.\n- Para las órdenes por escrito se procurará usar **los impresos establecidos**.\n- Las comunicaciones entre el PCC y los conductores se realizarán **prioritariamente por radiotelefonía de trenes** y, en su defecto, mediante la **telefonía selectiva de los piñones** de las estaciones. Si no están operativos, otros medios: telefonía automática de estaciones, telefonía móvil, etc.\n- **Se grabarán todas las conversaciones con el PCC**, ya sean por radiotelefonía, telefonía selectiva o telefonía automática.\n\nTodas las comunicaciones telefónicas o radiadas seguirán el **Manual de estilo para las comunicaciones** en vigor.\n\n**Toma de servicio (art. 2.4.1).** A la **hora y lugar determinados**, con el **uniforme y dotación** establecidos y en las condiciones requeridas, **manteniéndolas hasta finalizar**. Deberán **informar al superior jerárquico** y, **en el caso del personal de operación, al PCC** si no fuera posible hacerlo a aquel.\n\n**Abandono de servicio (art. 2.4.2).** Ningún trabajador abandonará su puesto **sin permiso de su superior**. Si por **fuerza mayor o para evitar un peligro** tuviera que hacerlo sin autorización, **no lo hará hasta después de adoptar las medidas necesarias que garanticen la seguridad**. Quien conozca el abandono de otro trabajador con funciones en la circulación **tomará las medidas de protección** que su buen criterio aconseje y **avisará de inmediato al PCC y a su superior**.\n\n**Atención debida (art. 2.4.3).** Prohibiciones expresas:\n\n- **Dormir** durante el servicio.\n- **Ingerir bebidas alcohólicas** y consumir **medicamentos, drogas o estimulantes** que puedan afectar a la lucidez.\n- El uso de **medios audiovisuales, juegos, medios escritos** y cualquier dispositivo ajeno al puesto, así como **aparatos de telefonía para asuntos ajenos al servicio**.\n- Usar los **sistemas de comunicación internos** para conversaciones particulares.\n- Toda **actuación o manipulación que impida la correcta visualización** de pilotos, pantallas e indicadores.\n\nSi por **enfermedad, medicación u otra circunstancia** no pudieran prestar servicio con la atención o seguridad debidas, **lo pondrán de inmediato en conocimiento de sus superiores**.\n\n**Permanencia indebida (art. 2.4.6).** En cabinas de conducción, cuartos técnicos y dependencias de circulación **solo podrá permanecer el personal adscrito y el expresamente autorizado**.\n\n**Actitud (art. 2.4.7).** En situaciones de **anormalidad** del servicio, procurarán **transmitir tranquilidad y confianza** a los viajeros y al resto del personal.',
[
 { anverso: '¿Qué hay que hacer al impartir una orden verbal, radiada o telefónica?', reverso: 'Hacerla repetir por el receptor, para comprobar que se ha entendido.' },
 { anverso: '¿Qué medio es prioritario para comunicar el PCC con los conductores?', reverso: 'La radiotelefonía de trenes; en su defecto, la telefonía selectiva de los piñones de las estaciones.' },
 { anverso: '¿Se graban las comunicaciones con el PCC?', reverso: 'Sí, todas: por radiotelefonía, telefonía selectiva o telefonía automática.' },
 { anverso: 'Si hay que abandonar el puesto por fuerza mayor sin autorización, ¿qué se hace antes?', reverso: 'Adoptar las medidas necesarias que garanticen la seguridad.' },
 { anverso: '¿Quién puede permanecer en una cabina de conducción?', reverso: 'Solo el personal adscrito a la misma y el expresamente autorizado.' }
], [29, 30, 31, 32]);

q('3.3', 2, 'Cuando se imparte una orden verbal, radiada o telefónica relativa a la circulación:',
  ['Se hará repetir por el receptor para comprobar que ha sido entendida',
   'Deberá confirmarse después por escrito en todo caso',
   'Bastará con que el receptor acuse recibo con un «recibido»',
   'Deberá transmitirse siempre a través del responsable operativo'], 0,
  'La repetición por el receptor es la garantía que exige el artículo 2.3.1, conforme al Manual de estilo para las comunicaciones. Además, la Normativa exige que las órdenes se den sin intermediarios.', 29);

q('3.3', 3, 'Las comunicaciones entre el PCC y los conductores de los trenes se realizarán prioritariamente:',
  ['A través de la radiotelefonía de trenes', 'Mediante la telefonía selectiva de los piñones de las estaciones',
   'Mediante telefonía móvil', 'A través de la megafonía de la estación'], 0,
  'El orden es: radiotelefonía de trenes en primer lugar y, en su defecto, telefonía selectiva de los piñones. Solo si ninguno está operativo se recurre a telefonía automática de estaciones, telefonía móvil u otros medios.', 29);

q('3.3', 2, 'Un conductor que, por medicación prescrita, no puede prestar servicio con la atención debida:',
  ['Deberá ponerlo de inmediato en conocimiento de sus superiores',
   'Podrá conducir siempre que informe al PCC al inicio del trayecto',
   'Deberá abandonar su puesto sin más trámite', 'Solo debe comunicarlo si se trata de medicación no prescrita'], 0,
  'El artículo 2.4.3 obliga a comunicarlo de inmediato a los superiores, y lo hace con independencia de que la causa sea enfermedad, medicación o cualquier otra circunstancia. Abandonar el puesto sin permiso está prohibido por el artículo 2.4.2.', 31);

q('3.3', 3, 'Un trabajador conoce que otro con funciones en la circulación ha abandonado el servicio. Debe:',
  ['Tomar las medidas de protección que su buen criterio le aconseje y avisar de inmediato al PCC y a su superior',
   'Limitarse a comunicarlo al finalizar su jornada', 'Sustituirlo en sus funciones sin más trámite',
   'Comunicarlo únicamente a su superior jerárquico'], 0,
  'El artículo 2.4.2 impone las dos cosas: actuar protegiendo la circulación según su criterio, y avisar de inmediato tanto al PCC como al superior.', 30);

q('3.3', 2, 'En las cabinas de conducción está prohibido, entre otras cosas:',
  ['Usar aparatos de telefonía para asuntos ajenos al servicio',
   'Consultar la Hoja de ruta durante la marcha', 'Utilizar los espejos retrovisores en estaciones en curva',
   'Llevar prenda de alta visibilidad'], 0,
  'El artículo 2.4.3 prohíbe medios audiovisuales, juegos, medios escritos y telefonía para asuntos ajenos, además de cualquier manipulación que impida ver pilotos, pantallas e indicadores. La prenda de alta visibilidad es precisamente un elemento obligatorio de dotación del tren.', 31);

tema('3.4', 'Señalización: tipos, prioridad y averías',
'**Objeto (art. 3.1.1).** El objetivo de la señalización es **regular la circulación de trenes con seguridad**, y deberá ser **perceptible por los conductores en el sentido de la circulación**.\n\n**Obediencia (art. 3.1.2).** Todo trabajador deberá **obedecer estrictamente y de inmediato** las órdenes de la señalización, salvo las excepciones de la propia NIC o las que **pueda establecer el PCC en casos puntuales**.\n\n**Los ocho tipos de señalización (art. 3.1.3):**\n\n1. Señales **gestuales de emergencia**\n2. Señales **fijas ferroviarias**\n3. **Indicadores luminosos**\n4. Señales **de los trenes**\n5. Señales **acústicas**\n6. Señales **fijas de tracción eléctrica**\n7. **Otras señales**\n8. **Carteles**\n\n**Orden de prioridad (art. 3.1.4).** De mayor a menor:\n\n1. Las **señales gestuales de emergencia**.\n2. La **señalización circunstancial** mediante indicadores luminosos o carteles que **modifiquen la utilización normal de la vía**.\n3. Las **señales fijas ferroviarias** y las **señales de limitación de velocidad**.\n\n> Que las señales gestuales estén por encima de todo tiene sentido: son las que utiliza cualquier persona que ve un peligro inminente.\n\n**Varias señales en un mismo lugar (art. 3.1.5).** Si el conductor encuentra varias señales o carteles en el mismo punto:\n\n- Si sus órdenes son **compatibles**, **las obedecerá todas**.\n- Si son **contradictorias**, obedecerá **la indicación más restrictiva**.\n\n**Averías (art. 3.1.6).** Quien detecte una avería o irregularidad en la señalización o en los aparatos de vía, **aunque sea momentánea**, deberá comunicarlo **de inmediato al PCC o al responsable operativo**. Si fuera posible y necesario por suponer un riesgo, **permanecerá junto a la señal o aparato averiado** para avisar a los conductores afectados.\n\n**Señales gestuales de emergencia (art. 3.2.1).** Se realizan **agitando ostensiblemente cualquier objeto, luminoso o no, o los brazos**, de manera que el conductor perciba la posible existencia de peligro y efectúe la **parada inmediata**. Se utilizarán **exclusivamente en caso de emergencia**.',
[
 { anverso: '¿Qué señalización tiene la máxima prioridad?', reverso: 'Las señales gestuales de emergencia.' },
 { anverso: 'Si dos señales en un mismo lugar dan órdenes contradictorias, ¿cuál se obedece?', reverso: 'La indicación más restrictiva. Si son compatibles, se obedecen todas.' },
 { anverso: '¿Cómo se hace una señal gestual de emergencia?', reverso: 'Agitando ostensiblemente cualquier objeto, luminoso o no, o los brazos, para que el conductor pare de inmediato. Solo en caso de emergencia.' },
 { anverso: '¿Qué hacer al detectar una avería momentánea en la señalización?', reverso: 'Comunicarlo de inmediato al PCC o al responsable operativo y, si es posible y hay riesgo, permanecer junto a la señal para avisar a los conductores.' }
], [35, 36, 37]);

q('3.4', 2, 'El orden de prioridad de la señalización establece en primer lugar:',
  ['Las señales gestuales de emergencia',
   'Las señales fijas ferroviarias', 'Las señales de limitación de velocidad',
   'Los indicadores luminosos que modifiquen la utilización normal de la vía'], 0,
  'Las gestuales de emergencia encabezan el orden, seguidas de la señalización circunstancial que modifica la utilización normal de la vía, y en tercer lugar las señales fijas ferroviarias y las de limitación de velocidad.', 36);

q('3.4', 3, 'Si un conductor encuentra en un mismo lugar dos carteles con órdenes contradictorias:',
  ['Obedecerá la indicación más restrictiva', 'Obedecerá el que esté colocado a mayor altura',
   'Solicitará instrucciones al PCC antes de continuar', 'Obedecerá el más reciente'], 0,
  'El artículo 3.1.5 resuelve el conflicto con el criterio de la indicación más restrictiva. Si las órdenes son compatibles, en cambio, deben obedecerse todas.', 36);

q('3.4', 2, 'Las señales gestuales de emergencia:',
  ['Se realizan agitando ostensiblemente cualquier objeto, luminoso o no, o los brazos, y se usan exclusivamente en caso de emergencia',
   'Solo pueden realizarse con una linterna de luz roja',
   'Solo puede realizarlas el responsable operativo de la estación',
   'Indican al conductor que reduzca la velocidad a paso de hombre'], 0,
  'Cualquier objeto sirve, luminoso o no, e incluso los brazos, y el efecto que persiguen es la parada inmediata del tren, no una simple reducción de velocidad. Su uso queda reservado a las emergencias.', 37);

q('3.4', 3, 'Un trabajador detecta una irregularidad momentánea en un aparato de vía. Deberá:',
  ['Comunicarlo de inmediato al PCC o al responsable operativo, aunque sea momentánea',
   'Anotarlo en la Hoja de ruta al finalizar el servicio',
   'Comunicarlo solo si se repite', 'Repararlo si dispone de los medios'], 0,
  'El artículo 3.1.6 incluye expresamente las averías momentáneas. Además, si fuera posible y necesario por suponer riesgo para la circulación, el trabajador permanecerá junto a la señal o aparato para avisar a los conductores.', 36);

tema('3.5', 'Señales fijas ferroviarias: tipos y denominación',
'Son **señales semafóricas luminosas instaladas de forma permanente**, adosadas a pared o columna, sobre poste vertical o directamente sobre el suelo, compuestas por **uno o varios focos** y por **una placa con su identificación**.\n\n**Según su ubicación:**\n\n- **De estación**: ubicadas **generalmente en los piñones** de las estaciones.\n- **Intermedias**: en el tramo **entre dos estaciones**.\n- **De maniobra**: en **vías secundarias** o en vías principales, para **proteger el movimiento de los cambios de agujas o calzos**.\n\n**Según su funcionamiento, cinco tipos:**\n\n| Tipo | Cómo funciona | Placa |\n|---|---|---|\n| **Automáticas** | Abren o cierran condicionadas por la situación de los trenes o el estado de la siguiente señal | Letra **«A»** + código alfanumérico |\n| **Mandadas** | Además de lo anterior, pueden mandarse desde el **CTC** o desde un **mando local** | Letra **«M»** + código alfanumérico |\n| **Repetidoras** | Informativas: **repiten la información** de una automática o mandada **antes de llegar a ella**, cuando esta no tiene suficiente distancia de visibilidad | Letra **«R»** + código de la señal repetida |\n| **No rebasables** | Indican **parada absoluta**; **no deben rebasarse salvo autorización del PCC**. Un solo foco rojo | Letras **«NR»** |\n| **Indicadoras de posición de aguja** | Informativas: indican la **posición de una aguja que va a tomarse de punta** | **«S Ag»** + número de la aguja |\n\n**La señal repetidora** consta de **dos focos**: el superior contiene una **«R» que luce en blanco sobre fondo negro y está permanentemente encendida**; el inferior es **rojo y se ilumina cuando la señal de la que informa indica parada absoluta**.\n\n**La señal indicadora de posición de aguja** consta de **dos focos con una flecha que puede lucir en blanco o en verde sobre fondo negro**. La posición de la aguja viene indicada **por el sentido que indica la flecha**.\n\n**Señales que autorizan más de un itinerario.** La indicación del itinerario autorizado se representa indistintamente:\n\n- Por una **señal vertical seguida de una señal indicadora de posición de agujas**, o\n- Por una señal formada por **dos focos horizontales y otro u otros debajo** (señales **triangulares y en «L» invertida**), en cuyo caso el **foco rojo luce cuando la señal está cerrada** y los **focos laterales lucen de acuerdo al itinerario autorizado**.\n\n**Señales fuera de servicio (art. 3.3.6).** Se **cubrirán con una funda opaca de color gris**. Esto indica que **no tendrán influencia sobre la circulación** y **deben ser franqueadas sin ningún trámite especial**.',
[
 { anverso: '¿Qué letra lleva la placa de una señal automática y cuál la de una mandada?', reverso: '«A» la automática y «M» la mandada, ambas con código alfanumérico.' },
 { anverso: '¿Cómo es una señal repetidora?', reverso: 'Dos focos: el superior con una «R» blanca sobre fondo negro permanentemente encendida, y el inferior rojo, que se ilumina cuando la señal repetida indica parada absoluta.' },
 { anverso: '¿Qué indica una señal con placa «NR»?', reverso: 'Que es no rebasable: parada absoluta, y no debe rebasarse salvo autorización del PCC. Consta de un solo foco rojo.' },
 { anverso: '¿Qué significa una señal cubierta con funda opaca gris?', reverso: 'Que está fuera de servicio, no influye en la circulación y debe franquearse sin trámite especial.' },
 { anverso: '¿Dónde se ubican las señales de maniobra?', reverso: 'En vías secundarias o en vías principales, para proteger el movimiento de los cambios de agujas o calzos.' },
 { anverso: '¿Qué indica la señal «S Ag»?', reverso: 'La posición de una aguja que va a tomarse de punta, mediante una flecha que luce en blanco o en verde.' }
], [38, 39, 40, 44]);

q('3.5', 2, 'Una señal ferroviaria cuya placa lleva las letras «NR» es:',
  ['Una señal no rebasable, que indica parada absoluta y solo se rebasa con autorización del PCC',
   'Una señal repetidora', 'Una señal de nueva regulación',
   'Una señal indicadora de posición de aguja'], 0,
  'Las señales no rebasables constan de un solo foco rojo e indican parada absoluta. La repetidora lleva placa con «R» y la de posición de aguja con «S Ag».', 40);

q('3.5', 3, 'En una señal repetidora, el foco superior:',
  ['Contiene una «R» que luce en blanco sobre fondo negro y está permanentemente encendida',
   'Es rojo y se ilumina cuando la señal repetida indica parada absoluta',
   'Muestra una flecha blanca o verde según la posición de la aguja',
   'Permanece apagado salvo que la señal repetida esté cerrada'], 0,
  'El superior es la «R» blanca, siempre encendida. El foco inferior es el rojo, que se ilumina cuando la señal de la que informa indica parada absoluta. Invertir los dos focos es el error habitual.', 40);

q('3.5', 3, 'Las señales ferroviarias que por cualquier circunstancia no estuvieran en servicio:',
  ['Se cubrirán con una funda opaca de color gris y deberán franquearse sin trámite especial',
   'Se cubrirán con una funda opaca de color rojo y no podrán rebasarse',
   'Se mantendrán encendidas en aspecto rojo', 'Se retirarán físicamente de la vía'], 0,
  'La funda opaca gris es el signo convencional de señal fuera de servicio: no influye en la circulación y se franquea sin ningún trámite. No debe confundirse con una señal apagada, que sí se considera en su aspecto más restrictivo.', 44);

q('3.5', 2, 'Las señales de maniobra se ubican:',
  ['En vías secundarias o en vías principales, para proteger el movimiento de los cambios de agujas o calzos',
   'Siempre en los piñones de las estaciones', 'Únicamente en el tramo entre dos estaciones',
   'Exclusivamente en los sacos de maniobras'], 0,
  'La clasificación por ubicación es: de estación (generalmente en los piñones), intermedias (entre dos estaciones) y de maniobra, que protegen los movimientos de agujas o calzos y pueden estar tanto en vías secundarias como en principales.', 38);

q('3.5', 3, 'Una señal mandada se diferencia de una automática en que:',
  ['Además de abrir o cerrar condicionada por los trenes, puede mandarse desde el CTC o desde un mando local',
   'No depende en absoluto de la situación de los trenes', 'Consta siempre de un solo foco rojo',
   'Repite la información de otra señal anterior'], 0,
  'La mandada mantiene el automatismo y añade la posibilidad de mando desde el CTC o local; por eso lleva placa con «M». Repetir la información de otra señal es propio de las repetidoras, con placa «R».', 39);

tema('3.6', 'Aspectos de las señales ferroviarias',
'Los aspectos que pueden presentar las señales y su significado:\n\n| Aspecto | Significado |\n|---|---|\n| **Rojo** | **Parada absoluta.** Solo se rebasa en las condiciones del art. 3.3.5 |\n| **M-Roja de estación** | «M» en rojo sobre fondo negro, en el **piñón de una estación**: parada absoluta para los trenes que **no** circulen en **ATO o M+ATP**; **autoriza el rebase** a los que sí |\n| **M-Roja de interestación** | «M» en rojo sobre fondo negro **y foco verde simultáneo de forma intermitente**, en interestación: mismo efecto |\n| **Amarillo** | **Anuncio de parada** por encontrarse la próxima señal en rojo. **Autoriza el rebase con prevención.** Suele situarse para autorizar el paso a un **túnel de enlace** con otra línea |\n| **Verde** | **Vía libre.** Autoriza el rebase |\n| **Blanco** | **Vía libre.** Autoriza el rebase |\n| **Morado** (o azul) | **Autoriza el rebase con precaución en conducción marcha a la vista**, por entrada a una zona **sin señalización** o en la que **pueden existir obstáculos** en la vía (parachoques, trenes estacionados, etc.) |\n\n> Dos aspectos distintos —**verde** y **blanco**— significan lo mismo: vía libre. Y el **morado** es el único que impone marcha a la vista.\n\n**Diferencia entre las dos M-Rojas.** El efecto es idéntico; lo que cambia es **dónde están y cómo se presentan**: la de estación va en el piñón y es solo la «M» roja; la de interestación añade un **foco verde intermitente simultáneo**.\n\n**Prevalencia (art. 3.3.4).** Las indicaciones de **las señales ferroviarias prevalecerán, en cualquier caso, sobre las que establezca el sistema de protección (ATP)**.\n\n**Señales apagadas o dudosas.** **Excepto las señales de posición de aguja**, toda señal ferroviaria **apagada o con indicación dudosa se considerará que presenta su aspecto más restrictivo**, actuando el conductor en consecuencia.',
[
 { anverso: '¿Qué significa el aspecto morado o azul de una señal?', reverso: 'Autoriza el rebase con precaución en marcha a la vista, por entrada a zona sin señalización o donde puede haber obstáculos.' },
 { anverso: '¿Qué dos aspectos indican vía libre?', reverso: 'El verde y el blanco.' },
 { anverso: '¿Qué significa el aspecto amarillo?', reverso: 'Anuncio de parada porque la próxima señal está en rojo. Autoriza el rebase con prevención.' },
 { anverso: '¿Qué diferencia hay entre la M-Roja de estación y la de interestación?', reverso: 'El efecto es el mismo. La de interestación añade un foco verde intermitente simultáneo a la «M» roja.' },
 { anverso: '¿Prevalece la señal ferroviaria o el ATP?', reverso: 'La señal ferroviaria, en cualquier caso.' },
 { anverso: '¿Cómo se interpreta una señal apagada o dudosa?', reverso: 'Como si presentara su aspecto más restrictivo. Se exceptúan las señales de posición de aguja.' }
], [41, 42, 43]);

q('3.6', 3, 'El aspecto morado o azul de una señal ferroviaria:',
  ['Autoriza el rebase con precaución en conducción marcha a la vista, por entrada a una zona sin señalización o con posibles obstáculos',
   'Indica parada absoluta', 'Indica vía libre sin restricciones',
   'Anuncia que la próxima señal está en rojo'], 0,
  'El morado es el único aspecto que impone circular en marcha a la vista, precisamente porque se entra en zonas sin señalización o donde puede haber parachoques o trenes estacionados. El anuncio de parada por próxima señal en rojo es el amarillo.', 42);

q('3.6', 2, '¿Cuáles de estos aspectos indican vía libre?',
  ['El verde y el blanco', 'Solo el verde', 'El verde y el amarillo', 'El blanco y el morado'], 0,
  'Tanto el verde como el blanco indican vía libre y autorizan el rebase. El amarillo autoriza el rebase pero con prevención, y el morado con precaución en marcha a la vista.', 42);

q('3.6', 3, 'Ante una señal con aspecto M-Roja situada en el piñón de una estación, un tren que circula en modo M+20:',
  ['Debe efectuar parada absoluta, porque no circula en ATO ni en M+ATP',
   'Puede rebasarla, porque el M+20 también está protegido por ATP',
   'Puede rebasarla a paso de hombre', 'Debe cambiar a modo Llave Especial para rebasarla'], 0,
  'La M-Roja autoriza el rebase únicamente a los trenes que circulan en ATO o M+ATP. Cualquier otro modo, incluido el M+20, encuentra en ella una parada absoluta.', 41);

q('3.6', 3, 'En caso de discrepancia entre la indicación de una señal ferroviaria y la del sistema de protección ATP:',
  ['Prevalece, en cualquier caso, la indicación de la señal ferroviaria',
   'Prevalece la del ATP, por ser un sistema automático', 'Se aplica siempre la más restrictiva de las dos',
   'El conductor debe detenerse y consultar al PCC'], 0,
  'El artículo 3.3.4 es tajante: las indicaciones de las señales ferroviarias prevalecen en cualquier caso sobre las del ATP. No se trata de aplicar la más restrictiva, sino de dar preferencia a la señal.', 43);

q('3.6', 3, 'Una señal ferroviaria apagada se considera:',
  ['Que presenta su aspecto más restrictivo, salvo que sea una señal de posición de aguja',
   'Fuera de servicio, por lo que puede franquearse sin trámite',
   'Que presenta aspecto verde, por defecto', 'Averiada, sin efecto sobre la circulación'], 0,
  'La señal apagada equivale al aspecto más restrictivo, con la única excepción de las de posición de aguja. No hay que confundirla con la señal cubierta por funda opaca gris, que sí está fuera de servicio y se franquea sin trámite.', 43);

tema('3.7', 'Rebase de señales en rojo, apagadas o dudosas',
'**Regla general (art. 3.3.5).** Las señales que se encuentren **en rojo, apagadas o con indicación dudosa** solamente se podrán rebasar **con autorización del PCC o de los responsables operativos**.\n\n**Si no hay comunicación con el PCC**, el conductor detenido ante una señal en esas condiciones procederá así:\n\n**Si está en una estación:**\n\n- **Permanecerá en la misma** y **recabará la presencia del responsable operativo** con los medios de que pueda disponer.\n\n**Si está en una interestación**, y **no** se trata de una señal **No Rebasable (NR)** ni de una señal situada **a contravía**:\n\n- Cuando transcurran **tres minutos desde la detención**, **continuará la marcha a paso de hombre** hasta:\n  - la **siguiente señal**, donde actuará según el aspecto que presente, **o**\n  - la **siguiente estación**,\n- **comprobando que la posición de los aparatos de vía durante el recorrido se corresponde con el itinerario que está realizando**.\n\n> Tres condiciones simultáneas para poder aplicar la regla de los tres minutos: **estar en interestación**, que **no sea NR** y que **no sea a contravía**. Si falla alguna, hay que esperar autorización.\n\n**Excepción: las señales repetidoras apagadas.** Podrán **rebasarse sin autorización del PCC**, aunque **se deberá considerar que la señal de la que es repetidora presenta el aspecto rojo**.\n\n> Es decir: la repetidora apagada no bloquea, pero obliga a comportarse como si lo que anuncia estuviera en rojo.',
[
 { anverso: '¿Quién puede autorizar el rebase de una señal en rojo, apagada o dudosa?', reverso: 'El PCC o los responsables operativos.' },
 { anverso: 'Sin comunicación con el PCC y detenido ante una señal en rojo en una estación, ¿qué se hace?', reverso: 'Permanecer en la estación y recabar la presencia del responsable operativo con los medios disponibles.' },
 { anverso: '¿Cuántos minutos hay que esperar en interestación antes de continuar, y cómo?', reverso: 'Tres minutos desde la detención, y luego a paso de hombre hasta la siguiente señal o estación, comprobando los aparatos de vía.' },
 { anverso: '¿En qué dos casos NO se aplica la regla de los tres minutos?', reverso: 'Si la señal es No Rebasable (NR) o si está situada a contravía.' },
 { anverso: '¿Puede rebasarse una señal repetidora apagada?', reverso: 'Sí, sin autorización del PCC, pero considerando que la señal de la que es repetidora presenta aspecto rojo.' }
], [43]);

q('3.7', 3, 'Un conductor está detenido en una interestación ante una señal en rojo, sin comunicación con el PCC. No es una señal NR ni está a contravía. Deberá:',
  ['Esperar tres minutos desde la detención y continuar a paso de hombre hasta la siguiente señal o estación',
   'Esperar cinco minutos y continuar en marcha a la vista',
   'Permanecer detenido indefinidamente hasta recuperar la comunicación',
   'Rebasarla de inmediato a paso de hombre'], 0,
  'La NIC fija tres minutos y marcha a paso de hombre, comprobando además que la posición de los aparatos de vía se corresponde con el itinerario. En la siguiente señal actuará según el aspecto que presente.', 43);

q('3.7', 3, 'La regla de esperar tres minutos y continuar a paso de hombre NO se aplica cuando:',
  ['La señal es No Rebasable (NR) o está situada a contravía',
   'El tren circula en modo M+ATP', 'El tren transporta viajeros',
   'La detención se produce de noche'], 0,
  'Son las dos excepciones expresas del artículo 3.3.5, además de exigirse que la detención sea en interestación: en estación el conductor permanece y recaba la presencia del responsable operativo.', 43);

q('3.7', 2, 'Una señal repetidora apagada:',
  ['Podrá rebasarse sin autorización del PCC, considerando que la señal de la que es repetidora presenta aspecto rojo',
   'No podrá rebasarse en ningún caso', 'Se considerará fuera de servicio y sin efecto',
   'Obliga a esperar tres minutos antes de continuar'], 0,
  'Es la excepción expresa que recoge la NIC. La repetidora es informativa, de modo que su apagado no bloquea la marcha, pero obliga a asumir lo peor sobre la señal que anuncia.', 43);

q('3.7', 2, 'Detenido en una estación ante una señal apagada y sin comunicación con el PCC, el conductor:',
  ['Permanecerá en la estación y recabará la presencia del responsable operativo',
   'Esperará tres minutos y continuará a paso de hombre',
   'Rebasará la señal en marcha a la vista', 'Retrocederá hasta la estación anterior'], 0,
  'En estación no cabe la regla de los tres minutos: hay que permanecer y buscar al responsable operativo, que es quien puede autorizar el rebase en ausencia del PCC.', 43);

tema('3.8', 'Indicadores luminosos fijos: los carteles de regulación',
'Los **indicadores luminosos fijos** son señales **informativas** que, situadas en ciertos tramos de la Red (túnel, estaciones, depósitos o cocheras), indican **circunstancias significativas relacionadas con la circulación**.\n\n**Los carteles de regulación** están situados en el **piñón de algunas estaciones** e informan a los conductores de trenes de viajeros mediante una **cuenta atrás del tiempo que resta para la salida**.\n\n**Los cinco aspectos que presentan:**\n\n| Aspecto | Cuándo aparece |\n|---|---|\n| **Indicación de parada** | Cuando el tiempo de parada en la estación es **superior a 30 segundos** |\n| **Tiempo que resta para iniciar la salida** | Cuando el tiempo de parada es **inferior a 30 segundos**: indica los segundos que faltan |\n| **Tren fuera del margen de regulación** | El conductor debe efectuar la salida **tan pronto como lo autorice la señal ferroviaria** |\n| **Tren retrasado** | El tiempo de retraso respecto al plan de regulación, **en color rojo** |\n| **Sistema de regulación desconectado** | Cuando el sistema está desconectado |\n\n**Los umbrales que hay que memorizar:**\n\n- **30 segundos**: por encima, indicación de parada; por debajo, cuenta atrás en segundos.\n- **10 segundos**: cuando la cuenta atrás alcanza los 10 segundos, la indicación **empieza a parpadear** para advertir al conductor de que **se prepare para iniciar la salida** al llegar a «0».\n- **60 segundos de retraso**: cuando el retraso alcanza los 60 segundos, la indicación **empieza a parpadear**.\n- **99 segundos de retraso**: si el retraso **supera los 99 segundos**, aparece la **letra «R» parpadeando en rojo**.\n\n> Fíjate en que el parpadeo aparece en dos contextos distintos: a los **10 segundos** de la cuenta atrás para salir, y a los **60 segundos** de retraso acumulado.',
[
 { anverso: '¿Cuándo muestra el cartel de regulación la indicación de parada?', reverso: 'Cuando el tiempo de parada en la estación es superior a 30 segundos.' },
 { anverso: '¿A qué valor empieza a parpadear la cuenta atrás para la salida?', reverso: 'A los 10 segundos, para que el conductor se prepare para salir al llegar a «0».' },
 { anverso: '¿Qué ocurre en el cartel cuando el retraso alcanza los 60 segundos?', reverso: 'La indicación de retraso, que se muestra en rojo, empieza a parpadear.' },
 { anverso: '¿Y si el retraso supera los 99 segundos?', reverso: 'Aparece la letra «R» parpadeando en rojo.' },
 { anverso: '¿Qué debe hacer el conductor si el cartel indica «tren fuera del margen de regulación»?', reverso: 'Efectuar la salida tan pronto como lo autorice la señal ferroviaria.' }
], [47, 48]);

q('3.8', 2, 'El cartel de regulación muestra la indicación de parada cuando el tiempo de parada en la estación es:',
  ['Superior a 30 segundos', 'Inferior a 30 segundos', 'Superior a 60 segundos', 'Superior a 10 segundos'], 0,
  'Por encima de 30 segundos se muestra la indicación de parada; por debajo, el cartel pasa a indicar en segundos el tiempo que resta para iniciar la marcha.', 47);

q('3.8', 3, 'La cuenta atrás del cartel de regulación empieza a parpadear cuando alcanza:',
  ['Los 10 segundos', 'Los 30 segundos', 'Los 5 segundos', 'Los 60 segundos'], 0,
  'A los 10 segundos comienza el parpadeo, para que el conductor se prepare a iniciar la salida al llegar a cero. Los 60 segundos son el umbral de parpadeo, pero de la indicación de retraso, que es otra cosa.', 48);

q('3.8', 3, 'Si el tiempo de retraso de un tren respecto al plan de regulación supera los 99 segundos, el cartel muestra:',
  ['La letra «R» parpadeando en rojo', 'El número 99 fijo en rojo',
   'La indicación de tren fuera del margen de regulación', 'El sistema de regulación desconectado'], 0,
  'Por encima de 99 segundos el cartel no puede representar la cifra y muestra la «R» parpadeando en rojo. Entre 60 y 99 segundos muestra el número parpadeando.', 48);

q('3.8', 2, 'La indicación de «tren fuera del margen de regulación» significa que el conductor debe:',
  ['Efectuar la salida de la estación tan pronto como lo autorice la señal ferroviaria',
   'Permanecer detenido hasta recibir una nueva consigna',
   'Reducir la velocidad en la siguiente interestación', 'Comunicar la incidencia al PCC antes de salir'], 0,
  'Fuera del margen de regulación no hay cuenta atrás que respetar: la salida se produce en cuanto la señal ferroviaria lo autorice. El cartel es informativo y no sustituye a la señal.', 48);

tema('3.9', 'Habilitaciones, prácticas y circulaciones especiales',
'**Habilitación (art. 4.1.1).** Para conducir **cualquier tren, de viajeros o de trabajo**, se deberá estar en posesión de la **correspondiente habilitación**, salvo en los casos del artículo 4.1.4.\n\nLas habilitaciones pueden ser:\n\n- **Generales**: para **todo tipo de material móvil y vías**.\n- **Limitadas**: para un tipo de material móvil **y/o** para un tipo de vías.\n\n**Prácticas de conducción (art. 4.1.2).** Los trabajadores **aún no habilitados** solo podrán conducir **para la realización de prácticas**, y **siempre bajo la supervisión de un trabajador habilitado**.\n\nQuien imparta las prácticas, **como responsable del tren**, deberá estar **atento en todo momento** a la actuación de quien practica, para **evitar y corregir** cualquier actuación incorrecta. Y **no dejará bajo ningún concepto que los practicantes vayan solos en la cabina de mando**.\n\n**Acceso y salida de los conductores (art. 4.1.3).** El acceso, el tránsito entre coches y la salida de los trenes se efectuará **cuando estos se encuentren completamente parados**, quedando **terminantemente prohibido hacerlo en movimiento**.\n\n> **Excepción:** el **tránsito entre coches** en aquellos trenes **que tienen pasillo de intercomunicación** entre coches.\n\n**Circulaciones especiales (art. 4.1.4).** Si por causas especiales (pruebas, etc.) fuera necesario que conduzca una persona **capacitada pero sin la preceptiva habilitación**, deberá ir **acompañada por un trabajador habilitado**.\n\nEse trabajador habilitado deberá **informar al conductor del trazado de la línea y de las actuaciones a realizar** en cumplimiento de la NIC y de las Normas Internas para la Seguridad de los Agentes. El conductor **regulará su velocidad** de acuerdo con las condiciones del tren, la parte de vía que visualiza y **las directrices del trabajador habilitado que le acompaña**.',
[
 { anverso: '¿Qué tipos de habilitación para conducir existen?', reverso: 'Generales, para todo tipo de material móvil y vías, y limitadas, para un tipo de material móvil y/o de vías.' },
 { anverso: '¿Puede un practicante ir solo en la cabina de mando?', reverso: 'No, bajo ningún concepto. Siempre bajo supervisión de un trabajador habilitado.' },
 { anverso: '¿Cuándo puede accederse o salirse de un tren?', reverso: 'Solo cuando esté completamente parado. Se exceptúa el tránsito entre coches en trenes con pasillo de intercomunicación.' },
 { anverso: 'En una circulación especial, ¿qué debe hacer el trabajador habilitado que acompaña?', reverso: 'Informar al conductor del trazado de la línea y de las actuaciones a realizar según la NIC y las Normas de seguridad de los agentes.' }
], [69, 70]);

q('3.9', 2, 'Las habilitaciones para conducir trenes pueden ser:',
  ['Generales, para todo tipo de material móvil y vías, o limitadas a un tipo de material móvil y/o de vías',
   'Únicamente generales', 'De viajeros o de trabajo, según el tipo de tren',
   'Provisionales o definitivas'], 0,
  'La NIC distingue habilitaciones generales y limitadas, y estas últimas pueden acotarse por tipo de material móvil, por tipo de vías o por ambos. La distinción entre trenes de viajeros y de trabajo no genera habilitaciones distintas: ambos exigen habilitación.', 69);

q('3.9', 3, 'Durante las prácticas de conducción, el trabajador que las imparte:',
  ['No dejará bajo ningún concepto que los practicantes vayan solos en la cabina de mando',
   'Puede ausentarse de la cabina si el practicante ya domina el trayecto',
   'Solo debe intervenir si el practicante comete un error grave',
   'No asume responsabilidad sobre el tren, que recae en el practicante'], 0,
  'La prohibición es absoluta y sin matices. Además, quien imparte las prácticas es el responsable del tren y debe estar atento en todo momento para evitar y corregir cualquier actuación incorrecta.', 69);

q('3.9', 3, 'El tránsito entre coches con el tren en movimiento:',
  ['Está permitido únicamente en los trenes que tienen pasillo de intercomunicación entre coches',
   'Está terminantemente prohibido en todos los casos',
   'Está permitido si el tren circula a menos de 20 km/h', 'Requiere autorización del PCC'], 0,
  'La regla general prohíbe acceso, tránsito y salida con el tren en movimiento, pero la NIC exceptúa expresamente el tránsito entre coches en los trenes dotados de pasillo de intercomunicación.', 69, { pag2: 70 });

q('3.9', 2, 'Una persona capacitada para conducir pero sin la preceptiva habilitación puede hacerlo en una circulación especial:',
  ['Acompañada por un trabajador habilitado, que le informará del trazado y de las actuaciones a realizar',
   'Con la sola autorización del PCC', 'En ningún caso',
   'Únicamente en vías secundarias y a paso de hombre'], 0,
  'El artículo 4.1.4 permite esa circulación con acompañamiento de un trabajador habilitado, que informa del trazado y de las actuaciones exigidas por la NIC y por las Normas de seguridad de los agentes.', 70);

tema('3.10', 'Conducción: dotación, comprobaciones y cabina',
'**Dotación de los conductores (art. 4.2.1).** Al menos, **las llaves o útiles necesarios** para el acceso a las cabinas de conducción y a los elementos del tren.\n\n**Dotación de los trenes (art. 4.2.3).** Excepto en los **vehículos auxiliares de tracción diésel** (dresinas, etc.), en las cabinas deberán disponerse, además de los elementos propios de conducción:\n\n- **Linterna portátil para uso de emergencia.**\n- **Prenda de señalización personal de alta visibilidad**, para cuando el conductor precise bajar a la plataforma de vía.\n\nCualquier falta se pondrá en conocimiento del **PCC o del responsable operativo**.\n\n**Comprobación antes de salir a línea (art. 4.2.2).** Antes de iniciar la marcha, el conductor deberá **comprobar el funcionamiento de los sistemas de frenado**. Durante el trayecto se comprobará el **funcionamiento de la tracción y la eficacia del frenado**.\n\nSi se detecta una deficiencia, se **notificará al PCC o al responsable operativo** y se procederá según sus indicaciones. Si **no hay comunicación** y se considera que el tren **no está en condiciones**, **se desistirá de incorporarlo a la línea** y se notificará lo antes posible por el medio más rápido disponible.\n\n**Cabina de conducción (art. 4.2.4).** En condiciones normales **siempre se conducirá por la cabina de cabeza** del tren según el sentido de circulación. Si por avería de los mandos u otras causas no fuese posible, **se situará en la cabina de cabeza un trabajador habilitado**, responsable de **controlar la marcha con medios acústicos y visuales**, **mandar detener el tren** cuando las circunstancias lo requieran y **contribuir él mismo a su detención** si fuera posible.\n\n> Se **exceptúan** de esa norma la maniobra de **inversión de marcha en Auto-Shunt** y los **retrocesos de trenes** en las condiciones autorizadas.\n\n**Sentido de circulación (art. 4.2.5).** En vías principales con doble vía, la circulación será **normalmente por la izquierda**. Excepciones: los **tramos banalizados**, las **maniobras de inversión de marcha** y los **casos excepcionales expresamente autorizados por el PCC**.\n\n**Anulación de dispositivos de seguridad (art. 4.2.7).** **No se conducirán trenes con un sistema de seguridad anulado u ocultado** —seta de emergencia, **hombre muerto**, ATP, freno neumático condenado— **sin autorización del PCC o del responsable operativo**. Si el tren está en vía principal, **no hay comunicación** y por **fuerza mayor** fuera necesario anular uno, se hará **por el tiempo mínimo indispensable**, informando al PCC en cuanto sea posible.\n\n**Hoja de ruta (art. 4.2.17).** Salvo que exista un sistema automático que la sustituya, los conductores cumplimentarán una **Hoja de ruta** con **horarios, recorrido y anomalías** observadas. Al finalizar la jornada, la entregarán donde determine la Dirección.\n\n**Relevo (art. 4.2.16).** El conductor **saliente comunicará al entrante** cualquier **avería o desperfecto** del tren y cualquier otra circunstancia de interés, incluidas las **situaciones degradadas** que afecten a la circulación.',
[
 { anverso: '¿Qué dos elementos de dotación debe haber en la cabina, además de los propios de conducción?', reverso: 'Linterna portátil para emergencia y prenda de señalización de alta visibilidad. Se exceptúan los vehículos auxiliares diésel.' },
 { anverso: '¿Qué debe comprobar el conductor antes de iniciar la marcha?', reverso: 'El funcionamiento de los sistemas de frenado. Durante el trayecto, la tracción y la eficacia del frenado.' },
 { anverso: 'Si no puede conducirse desde la cabina de cabeza, ¿qué se hace?', reverso: 'Se sitúa allí un trabajador habilitado que controla la marcha con medios acústicos y visuales, manda detener y contribuye a la detención si es posible.' },
 { anverso: '¿Puede conducirse con el hombre muerto anulado?', reverso: 'Solo con autorización del PCC o del responsable operativo. Sin comunicación y por fuerza mayor, por el tiempo mínimo indispensable e informando en cuanto sea posible.' },
 { anverso: '¿Qué se anota en la Hoja de ruta?', reverso: 'Horarios y recorrido realizado con cada tren y las anomalías observadas, más cualquier observación relevante.' },
 { anverso: '¿Qué excepciones tiene la norma de conducir desde la cabina de cabeza?', reverso: 'La inversión de marcha en Auto-Shunt y los retrocesos de trenes en las condiciones autorizadas.' }
], [71, 72, 73, 78]);

q('3.10', 2, 'Antes de iniciar la marcha, el conductor deberá comprobar:',
  ['El funcionamiento de los sistemas de frenado', 'El funcionamiento de la tracción únicamente',
   'La presión del circuito de pantógrafo', 'El estado de las puertas y su bloqueo'], 0,
  'La comprobación previa es de los sistemas de frenado. La tracción y la eficacia del frenado se comprueban durante el trayecto, que es un momento distinto que la NIC diferencia expresamente.', 71);

q('3.10', 3, 'Cuando por avería de los mandos no sea posible conducir desde la cabina de cabeza:',
  ['Se situará en ella un trabajador habilitado que controlará la marcha y mandará detener el tren cuando sea preciso',
   'El tren no podrá moverse en ningún caso', 'Bastará con circular a paso de hombre',
   'Se conducirá desde la cabina de cola sin más requisitos'], 0,
  'La NIC exige un trabajador habilitado en la cabina de cabeza, con medios acústicos y visuales, capaz de ordenar la detención y de contribuir a ella. Se exceptúan la inversión de marcha en Auto-Shunt y los retrocesos autorizados.', 72);

q('3.10', 3, 'Conducir un tren con el dispositivo de «hombre muerto» anulado:',
  ['Requiere autorización del PCC o del responsable operativo',
   'Está terminantemente prohibido en cualquier circunstancia',
   'Es libre siempre que se circule a paso de hombre', 'Solo requiere anotarlo en la Hoja de ruta'], 0,
  'El artículo 4.2.7 exige autorización. Solo en vía principal, sin comunicación y por fuerza mayor cabe anular un dispositivo, y entonces por el tiempo mínimo indispensable e informando al PCC en cuanto sea posible.', 73);

q('3.10', 2, 'Los elementos de dotación obligatorios en la cabina, además de los propios de conducción, son:',
  ['Linterna portátil de emergencia y prenda de señalización de alta visibilidad',
   'Extintor y botiquín', 'Radioteléfono y Hoja de ruta', 'Manivela de accionamiento de agujas y calzos'], 0,
  'La NIC exige linterna portátil de emergencia y prenda de alta visibilidad para cuando el conductor deba bajar a la plataforma de vía. Se exceptúan los vehículos auxiliares de tracción diésel, como las dresinas.', 71, { pag2: 72 });

q('3.10', 3, 'En el relevo de conductores, el saliente comunicará al entrante:',
  ['Cualquier avería o desperfecto del tren y las situaciones degradadas que afecten a su circulación',
   'Únicamente el número de tren asignado', 'Solo las incidencias que consten ya en la Hoja de ruta',
   'Nada: la información se transmite exclusivamente a través del PCC'], 0,
  'El artículo 4.2.16 exige comunicar averías, desperfectos y cualquier circunstancia de interés, informando además si la circulación se ve afectada por alguna de las situaciones degradadas previstas en la Normativa.', 78);

tema('3.11', 'Detención en estaciones y actuación de puertas',
'**Detención en las estaciones (art. 4.2.8).** Los trenes **en servicio de viajeros** deberán efectuar la detención en **todas las estaciones**, para la subida y bajada, **independientemente del aspecto que presenten las señales**. Si no hay indicación en contra, la detención será **por el tiempo mínimo necesario**. Los conductores deberán detener los trenes **sin sobrepasar los límites establecidos**.\n\n**Detención fuera de los puntos de parada (art. 4.2.9).** Los trenes en servicio de viajeros **no deben detenerse fuera de los puntos designados**, salvo que la detención venga impuesta por:\n\n- La **señalización**,\n- Los **sistemas de protección de tren (ATP)**,\n- La necesidad de **evitar un accidente**, o\n- **Indicación del PCC**.\n\n**Actuación de puertas (art. 4.2.10).** Salvo emergencia o autorización preceptiva del PCC, la subida y bajada de viajeros se realizará **exclusivamente en las estaciones y desde los andenes habilitados**.\n\n**Secuencia de apertura y cierre.** El conductor abrirá o autorizará la apertura **cuando el tren haya quedado total y correctamente detenido** en los puntos de parada. En estaciones con **acceso por ambos lados**:\n\n1. Abrirá **primero** las puertas del lateral predeterminado para la **salida** de viajeros.\n2. **A continuación**, las de **entrada**.\n3. **El cierre se realizará en ese mismo orden.**\n\nMientras el tren esté detenido en espera de iniciar la salida, **se deberá permitir el acceso y la salida** de viajeros.\n\n**Antes de cerrar.** Cuando proceda iniciar la marcha o al recibir la indicación de cerrar puertas, el conductor **se asegurará** mediante los medios disponibles —**espejos retrovisores, monitores de TV**— o por **inspección visual desde la puerta lateral de la cabina**, de que los viajeros han terminado de salir y entrar. Pondrá **especial atención** en circunstancias excepcionales: **parada en curva, días de escasa visibilidad, viajeros con discapacidad**.\n\nA continuación **advertirá a los viajeros mediante un toque corto de silbato** y cerrará las puertas. Una vez comprobado, mediante **nueva inspección visual** y **verificación en el dispositivo de seguridad de puertas**, que **han quedado todas cerradas y sin incidente**, **iniciará la marcha**.\n\n**Durante el recorrido.** Las puertas deberán permanecer **cerradas y bloqueadas** entre estaciones. Si el conductor recibe alguna **indicación de incidencia con las puertas** —pérdida de by-pass de tracción por avería o por actuación sobre el desbloqueador—, deberá **detener el tren inmediatamente**, notificarlo al PCC, **investigar la causa** y, si es posible, **resolverla**, informando y actuando según las indicaciones del PCC.',
[
 { anverso: '¿Debe pararse en todas las estaciones aunque la señal esté en verde?', reverso: 'Sí. Los trenes en servicio de viajeros paran en todas las estaciones con independencia del aspecto de las señales.' },
 { anverso: '¿En qué orden se abren las puertas en una estación con acceso por ambos lados?', reverso: 'Primero las del lateral de salida de viajeros y a continuación las de entrada. El cierre sigue el mismo orden.' },
 { anverso: '¿Qué hace el conductor justo antes de cerrar las puertas?', reverso: 'Comprobar con espejos, monitores o inspección visual que han terminado de salir y entrar, y advertir con un toque corto de silbato.' },
 { anverso: '¿Qué se comprueba antes de iniciar la marcha tras cerrar?', reverso: 'Mediante nueva inspección visual y el dispositivo de seguridad de puertas, que todas han quedado cerradas y sin incidente.' },
 { anverso: 'Si aparece una incidencia con las puertas en marcha, ¿qué se hace?', reverso: 'Detener el tren inmediatamente, notificar al PCC, investigar la causa y, si es posible, resolverla, actuando según las indicaciones del PCC.' },
 { anverso: '¿En qué cuatro casos puede detenerse un tren de viajeros fuera de los puntos de parada?', reverso: 'Por imposición de la señalización, del ATP, para evitar un accidente o por indicación del PCC.' }
], [73, 74, 75]);

q('3.11', 2, 'Los trenes en servicio de viajeros deberán detenerse en todas las estaciones:',
  ['Independientemente del aspecto que presenten las señales', 'Salvo que la señal presente aspecto verde',
   'Salvo indicación en contra del sistema de regulación', 'Solo si hay viajeros esperando en el andén'], 0,
  'La obligación de parada comercial es independiente de la señalización: una señal en verde autoriza el rebase, pero no exime de detenerse para la subida y bajada de viajeros.', 73);

q('3.11', 3, 'En una estación con acceso por ambos lados del tren, el conductor abrirá:',
  ['Primero las puertas del lateral predeterminado para la salida de viajeros y a continuación las de entrada',
   'Primero las de entrada y luego las de salida', 'Ambos laterales simultáneamente',
   'Solo el lateral de salida, hasta que el andén quede despejado'], 0,
  'Primero salida y después entrada, y el cierre se realiza en ese mismo orden. La lógica es evacuar el tren antes de admitir nuevos viajeros.', 74);

q('3.11', 3, 'Antes de cerrar las puertas, el conductor advertirá a los viajeros mediante:',
  ['Un toque corto de silbato', 'Un aviso por megafonía interior', 'Un doble toque de claxon',
   'El parpadeo de las luces del coche'], 0,
  'La NIC concreta el toque corto de silbato como advertencia previa al cierre. Recuerda además que el Reglamento de Viajeros vincula el toque de silbato al cierre inminente y a la prohibición de entrar y salir.', 75);

q('3.11', 3, 'Si durante el recorrido entre estaciones el conductor recibe una indicación de incidencia con las puertas:',
  ['Deberá detener el tren inmediatamente y notificarlo al PCC',
   'Continuará hasta la siguiente estación y allí lo revisará',
   'Reducirá a paso de hombre hasta el final del trayecto', 'Anotará la incidencia en la Hoja de ruta'], 0,
  'La detención es inmediata. Después se notifica al PCC, se investiga la causa y, si es posible, se resuelve, actuando conforme a las indicaciones que dé el PCC.', 75);

q('3.11', 2, 'Un tren en servicio de viajeros puede detenerse fuera de los puntos de parada designados cuando:',
  ['La detención venga impuesta por la señalización, por el ATP, para evitar un accidente o por indicación del PCC',
   'Lo solicite un viajero por el interfono', 'El conductor aprecie retraso en el plan de regulación',
   'En ningún caso'], 0,
  'Son esos cuatro supuestos los que recoge el artículo 4.2.9. Fuera de ellos, la detención fuera de punto de parada no está permitida en servicio de viajeros.', 74);

tema('3.12', 'Identificación de trenes y personal con responsabilidad en la circulación',
'**Autorización de circulación (art. 4.3.1).** La circulación de cualquier tren deberá ser **autorizada de forma expresa y previa**:\n\n- Para los **trenes de viajeros**, por la **Autoridad competente** — actualmente el **Consorcio Regional de Transportes de Madrid**.\n- Para los **vehículos auxiliares**, por el **departamento competente de Metro**.\n\nEn el documento de autorización deben reflejarse las circunstancias que requieran medidas especiales: **defectos de shuntado** de circuitos de vía, **limitaciones de velocidad intrínsecas** del tren, etc. **El PCC deberá disponer de una copia.**\n\n**Matrícula (art. 4.3.2).** Todo coche o vehículo que forme parte de un tren estará identificado con un **código de matrícula exclusivo**: **no pueden existir dos con el mismo número**.\n\n**Número de tren (art. 4.3.3).** Todo tren que salga a circular por vías principales, **además** de las matrículas de sus coches, deberá estar identificado con un **número de tren**, que **conservará mientras permanezca en la línea** y que **solamente podrá modificar el PCC**.\n\n- Deberá estar **siempre visible en los dos frontales** de los extremos del tren: placa física, cartel luminoso u otro método.\n- Deberá ser **conocido y memorizado en todo momento por el conductor**.\n- Si no hay chapas ni visualización posible, **el PCC indicará el número** y el conductor deberá **conocerlo, memorizarlo y transmitirlo** a quien le releve.\n- **En ningún caso circularán en una línea dos trenes con el mismo número.**\n\n**Creación de trenes (art. 4.3.4).** Cuando un tren entra en un **circuito de vía de transferencia** entre cochera o depósito y la línea, el **CTC** crea un tren y le asigna un **número por defecto**, que **solo el PCC** puede modificar para asignarle el definitivo. Conductores y responsables operativos **comprobarán fehacientemente** que el número que se coloca coincide con el indicado por el PCC.\n\n**Responsabilidad en la conducción (art. 4.4.1).** Recae en **el conductor**. Quien, debidamente autorizado, tome los mandos, **asume a todos los efectos las funciones y responsabilidades del conductor**.\n\nEl conductor **deberá delegar** la conducción, siempre que estén **debidamente habilitados y lo soliciten expresamente**, en:\n\n- **Mandos de la Línea.**\n- **Instructores en funciones de formación autorizados por el PCC.**\n- **Otros de rango superior.**\n\nEn todos los casos, **se deberá informar al PCC**.\n\n**Responsabilidad en la seguridad (art. 4.4.2).** El conductor es responsable de la **seguridad de la marcha**, de su **correcta conducción** y de la **conservación del material asignado**, así como de las **averías y accidentes debidos a negligencia**.\n\nCuando las señales **no se perciban claramente**, **reducirá la marcha** y, si es necesario, **se detendrá** para comprobar sus indicaciones. Detendrá el tren **de inmediato** ante indicios de peligro: **resistencia imprevista a la marcha, ruidos, vía interceptada, descarrilamiento, caída de una persona a la vía, insuficiencia de gálibo**. En cualquier caso, **informará inmediatamente al PCC**.\n\nSi el tren **sufre un golpe de cualquier índole**, dará aviso inmediato y **desistirá de mover el tren** hasta que sea **revisado y autorizado su movimiento** por el PCC o el responsable operativo.\n\n**Mando local del enclavamiento (art. 4.4.4).** En condiciones normales el control lo tiene el **PCC por medio del CTC**, pudiendo ceder el control al responsable operativo de la estación. El personal de estaciones **no podrá accionar el cuadro de mando local sin autorización del PCC**, **salvo** las situaciones en que, **para evitar accidentes**, sea imprescindible **tomar el control local con el mando de emergencia**.\n\n**Urgencia (art. 4.4.5).** En caso de **urgente necesidad**, a instancia de un responsable operativo, **todo el personal habilitado para conducir deberá hacerlo**, aunque tenga que **desatender provisionalmente otras funciones**, siempre que estas no afecten a la seguridad.',
[
 { anverso: '¿Quién autoriza la circulación de los trenes de viajeros?', reverso: 'La Autoridad competente, actualmente el Consorcio Regional de Transportes de Madrid. Los vehículos auxiliares, el departamento competente de Metro.' },
 { anverso: '¿Quién puede modificar el número de un tren?', reverso: 'Solamente el PCC.' },
 { anverso: '¿En quiénes debe delegar el conductor la conducción si lo solicitan?', reverso: 'Mandos de la Línea, instructores en funciones de formación autorizados por el PCC y otros de rango superior, siempre habilitados. Y se informa al PCC.' },
 { anverso: 'Si un tren sufre un golpe, ¿qué hace el conductor?', reverso: 'Avisar de inmediato al PCC o al responsable operativo y desistir de mover el tren hasta que sea revisado y se autorice su movimiento.' },
 { anverso: '¿Cuándo puede el personal de estación tomar el mando local del enclavamiento sin autorización?', reverso: 'Solo cuando, para evitar accidentes, sea imprescindible tomar el control local con el mando de emergencia.' },
 { anverso: '¿Qué debe hacer el conductor si no percibe claramente una señal?', reverso: 'Reducir la marcha y, si es necesario, detenerse para comprobar sus indicaciones.' }
], [80, 81, 83, 84]);

q('3.12', 3, 'La autorización previa para la circulación de los trenes de viajeros corresponde a:',
  ['La Autoridad competente, actualmente el Consorcio Regional de Transportes de Madrid',
   'El Puesto de Control Central', 'El departamento competente de Metro de Madrid',
   'La Dirección de Operación'], 0,
  'Para los trenes de viajeros la autorización es del CRTM; para los vehículos auxiliares, del departamento competente de Metro. El PCC no autoriza, pero debe disponer de una copia del documento de autorización.', 80);

q('3.12', 2, 'El número de tren asignado a un tren que circula por vías principales:',
  ['Solamente podrá ser modificado por el PCC y deberá ser memorizado por el conductor',
   'Puede modificarlo el responsable operativo de la estación', 'Coincide con la matrícula del coche de cabeza',
   'Solo es obligatorio en los trenes de viajeros'], 0,
  'Solo el PCC puede modificarlo, el conductor debe conocerlo y memorizarlo en todo momento, y debe estar visible en los dos frontales del tren. Es distinto de la matrícula, que identifica a cada coche individualmente.', 81);

q('3.12', 3, 'El conductor deberá delegar la conducción del tren, si están habilitados y lo solicitan expresamente, en:',
  ['Mandos de la Línea, instructores en funciones de formación autorizados por el PCC y otros de rango superior',
   'Cualquier compañero habilitado que viaje en el tren', 'El responsable operativo de la estación',
   'Nadie: la conducción es indelegable'], 0,
  'Esos son los tres supuestos del artículo 4.4.1, y en todos ellos debe informarse al PCC. Quien toma los mandos asume a todos los efectos las funciones y responsabilidades del conductor.', 83);

q('3.12', 2, 'Cuando un tren sufre un golpe de cualquier índole, el conductor:',
  ['Dará aviso inmediato y desistirá de mover el tren hasta que sea revisado y autorizado su movimiento',
   'Continuará hasta la siguiente estación y allí lo comunicará', 'Lo anotará en la Hoja de ruta al final del servicio',
   'Podrá continuar si no aprecia daños visibles'], 0,
  'El artículo 4.4.2 obliga a avisar de inmediato al PCC o al responsable operativo y a no mover el tren hasta que se revise y se autorice el movimiento. No queda al criterio del conductor apreciar si hay daños.', 84);

q('3.12', 3, 'El personal de las estaciones podrá accionar el cuadro de mando local del enclavamiento sin autorización del PCC:',
  ['Solo cuando, para evitar accidentes, sea imprescindible tomar el control local con el mando de emergencia',
   'Siempre que el PCC no responda a la llamada', 'Nunca, bajo ninguna circunstancia',
   'Cuando lo indique el responsable operativo de la estación'], 0,
  'Es la única excepción a la regla general de que el control lo tiene el PCC por medio del CTC. La justificación es evitar accidentes, no la simple falta de respuesta del PCC.', 84);

q('3.12', 3, 'En caso de urgente necesidad, a instancia de un responsable operativo:',
  ['Todo el personal habilitado para conducir deberá hacerlo, aunque desatienda provisionalmente otras funciones que no afecten a la seguridad',
   'Solo podrán conducir quienes tengan habilitación general',
   'Deberá solicitarse autorización previa al PCC en todo caso',
   'Solo conducirán quienes estén de servicio en ese momento'], 0,
  'El artículo 4.4.5 impone ese deber a todo el personal habilitado, con el único límite de que las funciones que desatienda no afecten a la seguridad de los trenes, las instalaciones o las personas.', 85);

tema('3.13', 'Circulación por vías secundarias y estacionamiento',
'**Conducción (art. 4.6.1).** En **todas** las vías secundarias se circula **siempre en marcha a la vista**, de forma que **se pueda detener el tren inmediatamente**.\n\n- En **vías de enlace** entre líneas y depósitos o cocheras, **vías de unión entre líneas** y **sacos de maniobras** **donde existan códigos de ATP** → modo **M+ATP**. Si no es posible seleccionarlo, **máximo 20 km/h**.\n- En **vías de depósitos y cocheras** → **a ser posible M+20**, y en todo caso **sin sobrepasar 20 km/h**.\n\n**Cabina.** Siempre que sea posible se conduce **por la cabina de cabeza**. Si no, se sitúa allí un **trabajador habilitado** que controla la marcha y **manda detener**. **Ambas reglas quedan sin efecto** cuando la inversión de marcha se hace en **Auto-Shunt** en los sacos de maniobras.\n\n**Otras obligaciones del artículo:**\n\n- Verificar durante el movimiento que están **libres las zonas delimitadas por los piquetes de entrevía**.\n- **Detener y hacer sonar el silbato** ante la puerta antes de entrar o salir de un recinto cerrado.\n- **Señal acústica preventiva** antes de iniciar la marcha con un tren estacionado.\n- Con algún elemento **en deficiente estado**, especial cuidado, **deteniendo el tren** si se detecta riesgo e informando.\n- Si **dos trenes se mueven en la misma vía**, se respeta la señalización; **si no la hay, cada maniobra se hace sucesivamente**.\n- Ante un **pasillo peatonal**, detenerse antes de invadirlo.\n- Al **pasar de una zona a otra con distinta tensión de tracción**, detenerse **delante de la señal fija indicadora de cambio de tensión** y **pedir autorización** para rebasarla. No hace falta detenerse si ya se tenía autorización previa.\n- Con un vehículo **que no garantiza el shuntado**, no se autoriza ninguna otra maniobra que recorra su itinerario **hasta confirmar su liberación**.\n\n**Estacionamiento (art. 4.6.2).** Un tren queda estacionado cuando **se retira del servicio o no está previsto su desplazamiento**. Al estacionar se lleva una **marcha lo bastante lenta** para no ocasionar alcances, rebasar calzos, golpear parachoques o salirse a zonas sin hilo de trabajo.\n\n> En todo tren estacionado debe quedar aplicado el **freno de estacionamiento de todos los vehículos de la composición**. En los **vehículos auxiliares clásicos**, además, debe quedar **la inversión del tren de forma que los motores actúen como freno eléctrico en sentido contrario a la pendiente**.\n\nNo se deja el tren **invadiendo la zona entre el piquete de entrevía y la aguja** sin autorización; si por incidencia quedara así, se informa.\n\n**Acoplamiento (art. 4.6.3).** Uno de los trenes estará **detenido y frenado**, y el otro **realizará la aproximación a paso de hombre**. Si se dispone de ella, se usa la **marcha de acoplamiento**.\n\n**Vía de pruebas (art. 4.6.5).** Estará **señalizada y delimitada** para prevenir una invasión accidental, y su circulación la **autoriza el PCC o el responsable operativo**. Cuando se usa como tal, **queda exceptuada** de la obligación general de marcha a la vista del apartado a).',
[
 { anverso: '¿Cómo se aproxima un tren a otro para acoplarse?', reverso: 'Uno detenido y frenado; el otro se aproxima a paso de hombre, usando la marcha de acoplamiento si dispone de ella.' },
 { anverso: '¿Qué freno debe quedar aplicado en un tren estacionado?', reverso: 'El freno de estacionamiento de todos los vehículos de la composición.' },
 { anverso: '¿Qué se hace al pasar de una zona a otra con distinta tensión de tracción?', reverso: 'Detenerse ante la señal fija indicadora de cambio de tensión y pedir autorización para rebasarla, salvo que ya se tuviera autorización previa.' },
 { anverso: 'Si dos trenes se mueven en la misma vía sin señalización, ¿qué se hace?', reverso: 'Cada maniobra se efectúa sucesivamente, una después de otra.' },
 { anverso: '¿Qué particularidad tiene la vía de pruebas?', reverso: 'Queda exceptuada de la obligación de marcha a la vista cuando se usa como tal, aunque se respeta la señalización. La autoriza el PCC o el responsable operativo.' }
], [93, 94, 95, 96]);

q('3.13', 3, 'Para acoplar dos trenes, la maniobra se realiza:',
  ['Con uno de ellos detenido y frenado, y el otro aproximándose a paso de hombre',
   'Con ambos en movimiento lento y convergente', 'A un máximo de 20 km/h',
   'Solo con autorización de la Autoridad competente'], 0,
  'La NIC exige que uno esté detenido y frenado y que el otro se aproxime a paso de hombre, usando la marcha de acoplamiento si el material dispone de ella.', 96);

q('3.13', 3, 'En un tren que queda estacionado debe aplicarse el freno de estacionamiento:',
  ['De todos los vehículos de la composición', 'Únicamente del coche de cabeza',
   'De los coches motores solamente', 'Solo si la vía tiene pendiente'], 0,
  'La exigencia alcanza a todos los vehículos de la composición. En los vehículos auxiliares clásicos se añade además dejar la inversión del tren para que los motores actúen como freno eléctrico en sentido contrario a la pendiente.', 95);

q('3.13', 3, 'Al llegar a una señal fija indicadora de cambio de tensión de tracción, el conductor:',
  ['Detiene el tren delante de ella y solicita autorización para rebasarla, salvo que ya la tuviera',
   'La rebasa a paso de hombre sin más trámite', 'Abate los pantógrafos y continúa por inercia',
   'Solicita al PCC un corte de tensión'], 0,
  'La regla es detenerse ante la señal y pedir autorización al responsable operativo o al PCC. Solo se exime de la parada quien ya contase con autorización previa para rebasarla.', 94);

q('3.13', 2, 'La obligación de conducir por la cabina de cabeza en vías secundarias queda sin efecto cuando:',
  ['La inversión de marcha se realiza en Auto-Shunt en los sacos de maniobras',
   'El tren circula en modo M+20', 'El recorrido es inferior a 100 metros',
   'Lo autoriza el responsable operativo del depósito'], 0,
  'El apartado c) del artículo 4.6.1 deja sin efecto tanto la obligación de marcha a la vista como la de conducir desde la cabina de cabeza cuando la inversión se hace en Auto-Shunt, que es precisamente una maniobra sin conductor en las cabinas extremas.', 93);

q('3.13', 3, 'Si dos trenes deben moverse por la misma vía y no existe señalización:',
  ['Se efectuará cada maniobra sucesivamente', 'Se circulará simultáneamente a paso de hombre',
   'Tendrá preferencia el tren de viajeros', 'Solo podrá moverse uno de ellos durante toda la jornada'], 0,
  'Cuando hay señalización se respeta; cuando no la hay, la NIC impone secuenciar: una maniobra después de la otra, nunca en paralelo.', 94);

tema('3.14', 'Situaciones degradadas: qué son y qué procedimientos hay',
'**Definición (art. 4.7.1).** Son situaciones degradadas todas aquellas que, **por avería de los sistemas o por incidencias en la explotación, modifican las condiciones normales de circulación**.\n\n**Las seis situaciones degradadas:**\n\n1. **Anulación del modo M+ATP** por avería de ese sistema.\n2. **Averías de la señalización** que impiden el bloqueo automático.\n3. **Auxilio a trenes detenidos.**\n4. **Circulación por un cantón ocupado** en los sistemas de protección que no lo permiten.\n5. **Circulación a contravía** por un tramo sin señalización.\n6. **Circulación de un servicio de lanzadera** por una única vía sin señales.\n\n**Los siete procedimientos específicos** que se establecen para circular con seguridad:\n\n- Autorización para **anular la conducción en modo M+ATP**.\n- Bloqueo telefónico **por averías de la señalización** (concesión de vía para rebasar señales en rojo o apagadas).\n- Bloqueo telefónico **para auxiliar a trenes detenidos**.\n- Bloqueo telefónico **para circular por un cantón ocupado**.\n- Bloqueo telefónico **para circular detrás de un tren que no garantiza el shuntado**.\n- Bloqueo telefónico **para circular a contravía** por tramo sin señalización.\n- Establecimiento de un **servicio de lanzadera** por una única vía sin señales.\n\n**Anular el modo M+ATP (art. 4.7.2).** En caso de avería de los sistemas de ATP, el **PCC podrá autorizar el cambio a M+20 o a Llave Especial**.\n\nEl protocolo de comunicación es siempre el mismo y **se pregunta mucho**:\n\n1. El **PCC deberá identificarse**.\n2. Notificará **con total precisión y sin lugar a dudas** el tramo de vía en que se autoriza el cambio de modo.\n3. El **conductor deberá identificarse** y **confirmar la comprensión del mensaje mediante la repetición del mismo**.\n\n> Esa secuencia —**identificarse las dos partes y repetir el mensaje**— se repite en todos los procedimientos degradados. Si una pregunta te ofrece una opción donde alguien no se identifica o no repite, es falsa.\n\n**Corte urgente de tensión de catenaria (art. 5.1.12).** En casos de urgencia ante una situación de riesgo, **cualquier trabajador, previa identificación, podrá solicitar directamente al PCC** un corte de tensión, **indicando el motivo**. El PCC **evaluará la petición** y, si procede, efectuará el corte **por el medio más rápido posible**.',
[
 { anverso: 'Enumera las seis situaciones degradadas.', reverso: 'Anulación del M+ATP por avería; averías de señalización que impiden el bloqueo automático; auxilio a trenes detenidos; circulación por cantón ocupado; contravía por tramo sin señalización; y servicio de lanzadera por vía única sin señales.' },
 { anverso: 'Ante avería del ATP, ¿a qué modos puede autorizar el PCC?', reverso: 'A M+20 o a Llave Especial.' },
 { anverso: '¿Cuál es el protocolo de comunicación en situaciones degradadas?', reverso: 'Se identifican las dos partes, el PCC notifica con total precisión, y el conductor confirma repitiendo el mensaje.' },
 { anverso: '¿Quién puede pedir un corte urgente de tensión de catenaria?', reverso: 'Cualquier trabajador, previa identificación, directamente al PCC e indicando el motivo. El PCC evalúa y, si procede, lo ejecuta por el medio más rápido.' }
], [97, 98, 132]);

q('3.14', 2, 'Se consideran situaciones degradadas aquellas que:',
  ['Por avería de los sistemas o por incidencias en la explotación modifican las condiciones normales de circulación',
   'Obligan a suspender totalmente el servicio de la línea',
   'Se producen únicamente durante el periodo fuera de servicio',
   'Requieren siempre la intervención de servicios de emergencia externos'], 0,
  'La definición del artículo 4.7.1 abarca tanto averías de sistemas como incidencias de explotación, y lo que las caracteriza es que alteran las condiciones normales, no que obliguen a suspender el servicio.', 97);

q('3.14', 3, 'En caso de avería de los sistemas de ATP, el PCC podrá autorizar el cambio del modo de conducción a:',
  ['M+20 o Llave Especial', 'ATO o M+ATP', 'Únicamente Llave Especial', 'Únicamente M+20'], 0,
  'El artículo 4.7.2 permite ambos. ATO y M+ATP quedan descartados precisamente porque requieren códigos de ATP, que es el sistema averiado.', 97);

q('3.14', 3, 'En los procedimientos de circulación degradada, la confirmación del conductor se realiza:',
  ['Identificándose y repitiendo el mensaje recibido', 'Con un simple «recibido»',
   'Firmando un boletín al llegar a la siguiente estación', 'Mediante confirmación posterior por escrito'], 0,
  'La repetición del mensaje es la garantía de comprensión que exige la NIC, y va precedida de la identificación de ambas partes. Es el mismo criterio del artículo 2.3.1 sobre transmisión de órdenes.', 98);

q('3.14', 2, '¿Cuál de estas NO figura entre las situaciones degradadas del artículo 4.7.1?',
  ['La circulación por vías de depósitos y cocheras', 'El auxilio a trenes detenidos',
   'La circulación a contravía por un tramo sin señalización',
   'La circulación de un servicio de lanzadera por una única vía sin señales'], 0,
  'Circular por depósitos y cocheras es circulación ordinaria por vías secundarias, regulada en el capítulo 4.6. Las otras tres sí son de las seis situaciones degradadas.', 97);

q('3.14', 3, 'Un trabajador detecta una situación de riesgo y necesita un corte urgente de tensión de catenaria:',
  ['Puede solicitarlo directamente al PCC, previa identificación e indicando el motivo',
   'Debe canalizarlo a través del responsable operativo de la estación',
   'Solo puede solicitarlo el conductor del tren afectado',
   'Debe esperar a que el PCC lo detecte por el telemando'], 0,
  'El artículo 5.1.12 habilita a cualquier trabajador, sin filtros jerárquicos, con dos requisitos: identificarse e indicar el motivo. El PCC evalúa la petición y, si procede, ejecuta el corte por el medio más rápido posible.', 132);

tema('3.15', 'La concesión de vía y el Boletín de doble precaución',
'**Cuándo se usa (art. 4.7.3).** En caso de **avería del bloqueo automático**, la circulación puede mantenerse mediante **bloqueo telefónico y concesión de vía**, autorizando a los conductores a **rebasar señales en rojo o apagadas** mediante un **Boletín de doble precaución**, que puede comunicarse **por medio radioeléctrico o por escrito**.\n\n**Qué autoriza.** La concesión de vía puede establecerse **para uno o varios cantones** y autoriza a circular **sin respetar el aspecto de las señales fijas ferroviarias** del tramo autorizado.\n\n**Hasta dónde llega.** Como máximo, **hasta la estación anterior al punto donde se encuentra localizado el tren que precede** en ese tramo al tren al que se concede vía.\n\n**Cómo se circula.** Salvo otra indicación, **en marcha a la vista en todo el recorrido autorizado**, prestando **especial atención al paso por agujas y calzos** y **comprobando que su posición corresponde con el itinerario** que se está realizando.\n\n**Concesión de vía realizada por el PCC.** El procedimiento es en dos tiempos:\n\n1. **Primero, localizar al tren precedente.** El PCC emite una llamada solicitando la localización. El conductor aludido **se identifica y comunica su localización con total precisión**. Si hay **contradicción** con la información del **CTC**, se le **pide nuevamente que confirme**. Si persiste la duda, **hay que esperar a que el tren llegue a la primera estación o punto singular** y pueda confirmarla.\n2. **Después, conceder vía.** El PCC se identifica y notifica con total precisión **qué señal se autoriza a rebasar**, **hasta dónde es válida la concesión**, **el modo de conducción** y **las medidas de precaución** aplicables. El conductor se identifica y **repite el mensaje**. Cuando el PCC considera que está perfectamente enterado, **da la orden de proceder**.\n\n**Concesión por el responsable operativo de una estación.** Cuando no es posible la comunicación entre el PCC y los trenes. Se notifica **por escrito** mediante el **Boletín de doble precaución**, que el conductor debe **comprobar en el momento de su recepción** y **conservar**. Al final de la jornada **entrega los boletines a un responsable operativo para su envío al PCC**.\n\nUna vez concedida vía al primer tren, se procura que **la estación desde la que se concede sea la más próxima a la de la avería**, salvo que convenga un trayecto más amplio.\n\n**Concesión de vía mixta.** En caso de **avería en las comunicaciones**: el PCC puede pedir la localización de un tren **a las estaciones**, o un responsable operativo puede pedirla **y facilitársela el PCC** por radioteléfono. En estos casos **el PCC sustituye a una de las dos estaciones**, y en el Boletín figura **«PCC» como estación que concede** y **la identificación del PCC como número de documento**.\n\n**Información a la línea.** En el periodo de servicio, si la avería persiste tras la primera concesión, **se informa a toda la línea y a los trenes**, indicando el tramo afectado por el bloqueo telefónico.',
[
 { anverso: '¿Qué documento se usa para autorizar el rebase de señales en rojo por avería del bloqueo automático?', reverso: 'El Boletín de doble precaución, comunicable por medio radioeléctrico o por escrito.' },
 { anverso: '¿Hasta dónde puede llegar como máximo una concesión de vía?', reverso: 'Hasta la estación anterior al punto donde está localizado el tren que precede al que se concede vía.' },
 { anverso: '¿Cómo se circula con concesión de vía?', reverso: 'En marcha a la vista en todo el recorrido, con especial atención a agujas y calzos, comprobando que su posición corresponde al itinerario.' },
 { anverso: '¿Qué hace el PCC antes de conceder vía?', reverso: 'Confirmar la localización del tren precedente. Si hay contradicción con el CTC, pide de nuevo confirmación; si persiste la duda, espera a que llegue a una estación o punto singular.' },
 { anverso: '¿Qué se pone en el Boletín en una concesión de vía mixta?', reverso: '«PCC» como estación que concede y la identificación del PCC como número de documento.' },
 { anverso: '¿Qué hace el conductor con el Boletín de doble precaución?', reverso: 'Comprobar los datos al recibirlo, conservarlo, y entregarlo al final de la jornada a un responsable operativo para su envío al PCC.' }
], [98, 99, 100, 101]);

q('3.15', 2, 'El documento mediante el que se autoriza a un conductor a rebasar señales en rojo o apagadas por avería del bloqueo automático es:',
  ['El Boletín de doble precaución', 'El Boletín de acceso a la plataforma de vía',
   'El testigo piloto', 'La Hoja de recogida de firmas'], 0,
  'El Boletín de doble precaución materializa la concesión de vía. El Boletín de acceso a la plataforma autoriza a bajar a la vía, y la Hoja de recogida de firmas registra el enterado de la presencia de personal.', 98);

q('3.15', 3, 'Una concesión de vía puede establecerse como máximo:',
  ['Hasta la estación anterior al punto donde se encuentra el tren que precede',
   'Hasta el final de la línea', 'Hasta la siguiente señal, en todo caso',
   'Durante un máximo de tres cantones'], 0,
  'El límite lo marca la posición del tren precedente, y por eso el PCC debe confirmarla antes de conceder. Puede abarcar uno o varios cantones, sin un número fijo.', 99);

q('3.15', 3, 'Si al solicitar la localización de un tren hay contradicción entre lo que dice el conductor y lo que refleja el CTC, el PCC:',
  ['Pide nuevamente al conductor que confirme su localización y, si persiste la duda, espera a que llegue a una estación o punto singular',
   'Da por buena la información del CTC, que es automática',
   'Da por buena la información del conductor', 'Suspende la circulación en toda la línea'], 0,
  'La NIC no privilegia ninguna de las dos fuentes: obliga a repreguntar y, si la duda persiste, a esperar a que el tren pueda confirmar su posición en una estación o punto singular de la línea.', 99);

q('3.15', 3, 'Salvo indicación en contra, la circulación con Boletín de doble precaución se realiza:',
  ['En marcha a la vista en todo el recorrido autorizado, con especial atención a agujas y calzos',
   'A paso de hombre en todo el recorrido', 'En modo M+20', 'A un máximo de 30 km/h'], 0,
  'Marcha a la vista, y con una cautela añadida: comprobar que la posición de agujas y calzos se corresponde con el itinerario que se está realizando, ya que no se está respetando el aspecto de las señales.', 99);

q('3.15', 3, 'En una concesión de vía mixta, en el Boletín de doble precaución figurará como estación que concede:',
  ['PCC, y como número de documento la identificación del PCC', 'La estación más próxima a la avería',
   'La estación de origen del tren', 'No se cumplimenta ese campo'], 0,
  'En la concesión mixta el PCC sustituye a una de las dos estaciones, y así se refleja documentalmente. Se recurre a ella cuando hay avería en las comunicaciones y una de las partes no puede contactar directamente con el tren.', 101);

tema('3.16', 'Auxilio a trenes detenidos y circulación por cantón ocupado',
'**Auxilio a un tren detenido (art. 4.7.4).** El orden importa: **primero se habla con el tren detenido, después con el que va a auxiliar**.\n\n1. El **PCC se identifica** e **informa al conductor del tren detenido** de que se le va a enviar un tren de auxilio o remolque, **ordenándole que permanezca inmovilizado**. El conductor se identifica y **repite el mensaje**.\n2. El PCC se identifica y notifica al conductor del tren que va a auxiliar **qué señal se le autoriza a rebasar, si la hay, o qué maniobra debe realizar**, **el motivo**, el **modo de conducción** y las **medidas de precaución**. El conductor se identifica y **repite**.\n3. Cuando el PCC lo considera perfectamente enterado, **da la orden de proceder**.\n\nSalvo indicación en contra, la circulación se realiza en **marcha a la vista**.\n\n> **Regla crítica:** si **no ha sido posible establecer comunicación con el tren detenido** y aun así hay que enviar el de auxilio, este circulará **a paso de hombre**. Lo mismo ocurre cuando la concesión la hace el **responsable operativo de una estación** mediante Boletín de doble precaución: como no se ha podido contactar previamente con el tren detenido, **el de auxilio va a paso de hombre**. En ese caso **no es necesaria la localización del tren anterior**, y en el boletín se indica como motivo **«Auxiliar al tren nº __»**.\n\n**Circulación por un cantón ocupado (art. 4.7.5).** Además del auxilio, el PCC puede autorizarla **excepcionalmente** en **dos casos**:\n\n- **a)** Para **maniobras de inversión de marcha** que requieran rebasar la señal de salida de una estación en rojo o apagada.\n- **b)** Cuando un **tren de trabajo** deba **operar conjuntamente** con el que ocupa el cantón, o **entre dos puntos kilométricos distintos** de los ocupados por este.\n\nSalvo indicación en contra, se circula en **marcha a la vista**.\n\nCuando es para **operar conjuntamente**, hay un paso final que no se olvida: una vez que el tren autorizado **confirma su situación en la zona de trabajo y el contacto** con el conductor del tren acantonado, el PCC **comunica a este la anulación de la orden de permanecer inmovilizado**.\n\nCuando es para operar **entre puntos kilométricos distintos**, como el PCC ya conoce la posición del tren acantonado, **no necesita ninguna otra operación previa**.\n\n**Trenes que no garantizan el shuntado (art. 4.7.6).** Todo tren que **no garantice el shuntado** de circuitos de vía y deba circular por **vías principales o túneles de enlace** deberá hacerlo **permanentemente acantonado por el PCC**.\n\nAl tren que vaya a circular detrás, el PCC le indica que **solo podrá hacerlo bajo su autorización y exclusivamente hasta la estación o punto que se le indique**, donde **deberá permanecer detenido hasta recibir nueva orden**. Antes de autorizar, **el PCC confirma la localización del tren acantonado**. El modo de conducción indicado **no deberá ser ATO**.\n\n**Contravía por tramo sin señalización (art. 4.7.7).** El PCC puede autorizar una inversión de marcha circulando a contravía por un tramo sin señalización, para **resolver incidencias o como medida de regulación**. Para ello debe **asegurarse de que el tramo está libre** e **impedir que cualquier otro tren acceda**. Si en el itinerario **hubiese trabajadores en la plataforma de vía**, el PCC **advertirá de la circulación a contravía a los trabajadores** y **al conductor de su presencia**.',
[
 { anverso: 'En un auxilio, ¿con quién habla primero el PCC?', reverso: 'Con el conductor del tren detenido, para ordenarle que permanezca inmovilizado. Después con el que va a auxiliar.' },
 { anverso: 'Si no hay comunicación con el tren detenido, ¿cómo circula el tren de auxilio?', reverso: 'A paso de hombre.' },
 { anverso: '¿En qué dos casos excepcionales se autoriza circular hacia un cantón ocupado?', reverso: 'Para maniobras de inversión de marcha que exijan rebasar la señal de salida en rojo, y para que un tren de trabajo opere con el tren acantonado o entre puntos kilométricos distintos.' },
 { anverso: '¿Cómo debe circular un tren que no garantiza el shuntado?', reverso: 'Permanentemente acantonado por el PCC, si va por vías principales o túneles de enlace.' },
 { anverso: 'Al tren que circula detrás de uno acantonado, ¿qué modo NO se le puede indicar?', reverso: 'El modo ATO.' },
 { anverso: 'Antes de autorizar contravía por tramo sin señalización con trabajadores en la vía, ¿qué hace el PCC?', reverso: 'Advertir de la circulación a contravía a los trabajadores, y advertir al conductor de la presencia de estos.' }
], [102, 103, 104, 105, 106, 107]);

q('3.16', 3, 'Antes de conceder vía al tren que va a auxiliar a otro detenido, el PCC:',
  ['Informa al conductor del tren detenido y le ordena que permanezca inmovilizado',
   'Localiza al tren que precede al detenido', 'Solicita autorización al responsable operativo',
   'Corta la tensión de catenaria en el tramo'], 0,
  'El primer paso es siempre asegurar que el tren detenido no se mueva. Solo después se autoriza al tren de auxilio, indicándole señal a rebasar o maniobra, motivo, modo de conducción y precauciones.', 102);

q('3.16', 3, 'Si no es posible establecer comunicación con el tren detenido y aun así hay que enviar el tren de auxilio, este circulará:',
  ['A paso de hombre', 'En marcha a la vista', 'En modo M+20', 'A un máximo de 30 km/h'], 0,
  'Al no poder garantizar que el tren detenido permanezca inmovilizado, se extrema la cautela: paso de hombre. Es la misma regla cuando la concesión la hace un responsable operativo por escrito, porque tampoco se ha contactado antes con el tren detenido.', 102);

q('3.16', 3, 'Un tren que no garantiza el shuntado de circuitos de vía y debe circular por vías principales:',
  ['Deberá hacerlo permanentemente acantonado por el PCC',
   'Podrá circular con normalidad si va en marcha a la vista',
   'Solo podrá circular en el periodo fuera de servicio', 'Deberá ser remolcado por otro tren'], 0,
  'El acantonamiento permanente es la medida prevista, porque el sistema no detecta su ocupación. Al tren que circule detrás se le autoriza solo hasta un punto concreto y con un modo de conducción que no puede ser ATO.', 105);

q('3.16', 2, 'La circulación hacia un cantón ocupado puede autorizarse excepcionalmente para:',
  ['Maniobras de inversión de marcha que requieran rebasar la señal de salida en rojo o apagada',
   'Recuperar el retraso acumulado en hora punta', 'Adelantar a un tren más lento',
   'Cualquier maniobra, si lo autoriza el responsable operativo'], 0,
  'Son dos supuestos tasados: la inversión de marcha que exige rebasar la señal de salida, y el tren de trabajo que opera con el acantonado o entre puntos kilométricos distintos. Además del auxilio a trenes detenidos, que se regula aparte.', 103);

q('3.16', 3, 'Cuando un tren de trabajo entra en un cantón ocupado para operar conjuntamente con el tren acantonado, el PCC anula la orden de permanecer inmovilizado:',
  ['Una vez que el tren autorizado confirma su situación en la zona de trabajo y el contacto con el conductor del tren acantonado',
   'En el mismo momento de autorizar la entrada', 'Cuando el tren de trabajo abandona el cantón',
   'Nunca: la orden se mantiene hasta el final del servicio'], 0,
  'La anulación llega solo cuando hay confirmación de situación y de contacto entre ambos conductores. Hasta ese momento, el tren acantonado sigue obligado a permanecer inmovilizado.', 105);

tema('3.17', 'Interrupciones del servicio y avería de un tren',
'**Interrupciones de servicio (art. 5.1.1).** Cuando un incidente impide la circulación en un punto kilométrico, el **PCC establece un servicio provisional** y, desde ese momento, **la línea se explota en uno o más tramos independientes**.\n\n> Toda interrupción que no afecte a la totalidad de la línea supone una **redefinición temporal de su topología**: los tramos resultantes **pasan a explotarse como si fueran líneas independientes**, y **las estaciones donde se establece el límite pasan a funcionar como cabeceras de línea**.\n\nPCC y responsables operativos toman las medidas para que **no circule ningún tren por los tramos interrumpidos**, **salvo los trenes que vayan a trabajar en ellos**, que quedan sujetos a **la normativa del periodo fuera de servicio**.\n\n**Avería o incidencia de un tren (art. 5.1.2).** El conductor lo **comunica de inmediato al PCC** y sigue sus instrucciones. Si el tren no puede reanudar la marcha por sus medios, **solicita un tren de auxilio o remolque**, cuyo envío gestiona el PCC **una vez confirmada la inmovilización** del tren detenido.\n\nSi después de pedir el auxilio el tren **recupera las condiciones** para reanudar la marcha, el conductor **lo comunicará al PCC antes de iniciarla** y seguirá sus instrucciones.\n\n**Las tres velocidades del remolque** —el dato numérico más preguntable del título 5:\n\n| Situación | Velocidad máxima |\n|---|---|\n| Remolque **por acoplamiento** de otros trenes | **30 km/h** |\n| Remolque **mediante barrón** | **10 km/h** |\n| Conducción por vías principales en **Llave Especial** | **30 km/h** |\n\nEn los tres casos, salvo que el PCC establezca otras condiciones.\n\n**Circulación con un sistema degradado.** Si el tren debe circular con algún sistema **degradado (ATP, freno, etc.) o en deficiente estado**, el conductor **adecuará la velocidad** a esas circunstancias **y al perfil de vía**, de forma que pueda **asegurar la detención ante cualquier peligro**: señales de parada absoluta, carteles precautorios por personal en la vía, curvas, pendientes.\n\n**Detención accidental (art. 5.1.3).** Siempre que sea preciso detener un tren, **se procurará hacerlo en las estaciones**. Cuando sea inevitable detenerse en interestación, se escogerá, si es posible, **un lugar con las mejores condiciones de seguridad** para viajeros, trabajadores y tren, **y que facilite la posterior reanudación de la marcha**.\n\n**Cortes de suministro eléctrico (art. 5.1.11).** Ante una interrupción de la corriente de tracción, el conductor:\n\n1. **Pone el regulador de marcha en posición cero.**\n2. **Aprovecha la inercia** del tren, en la medida de lo posible, **para detenerse en una estación**.\n3. **Informa inmediatamente** al PCC o al responsable operativo.\n\nSi el corte **supera los diez minutos**, a iniciativa del PCC o del propio conductor, **este conectará el freno de estacionamiento**.\n\nAl restablecerse el suministro, informa al PCC y sigue sus instrucciones. **Si no puede comunicar, esperará dos minutos** y reanudará la circulación **en marcha a la vista** hasta la siguiente señal o estación.',
[
 { anverso: 'Cuando se interrumpe el servicio en un punto, ¿qué pasa con las estaciones límite?', reverso: 'Pasan a funcionar como cabeceras de línea, y los tramos resultantes se explotan como líneas independientes.' },
 { anverso: '¿A qué velocidad máxima se remolca por acoplamiento y a cuál con barrón?', reverso: 'Por acoplamiento, 30 km/h. Con barrón, 10 km/h. Salvo que el PCC indique otras condiciones.' },
 { anverso: '¿Dónde se procura detener un tren cuando es preciso?', reverso: 'En las estaciones. Si es inevitable hacerlo en interestación, en el lugar con mejores condiciones de seguridad y que facilite reanudar la marcha.' },
 { anverso: 'Ante un corte de corriente de tracción, ¿qué hace el conductor?', reverso: 'Pone el regulador a cero, aprovecha la inercia para parar en una estación e informa de inmediato.' },
 { anverso: 'Si el corte de corriente supera los diez minutos, ¿qué hay que hacer?', reverso: 'Conectar el freno de estacionamiento, a iniciativa del PCC o del propio conductor.' },
 { anverso: 'Restablecida la corriente y sin comunicación con el PCC, ¿cuánto se espera?', reverso: 'Dos minutos, y luego se reanuda en marcha a la vista hasta la siguiente señal o estación.' }
], [125, 126, 127, 131, 132]);

q('3.17', 3, 'Si es necesario remolcar un tren mediante barrón, la velocidad no sobrepasará:',
  ['10 km/h', '30 km/h', '20 km/h', '5 km/h'], 0,
  'El barrón impone el límite más restrictivo: 10 km/h. El remolque mediante acoplamiento de otros trenes admite hasta 30 km/h. Ambos, salvo que el PCC establezca otras condiciones.', 126);

q('3.17', 3, 'Si un corte de suministro de corriente de tracción se prolonga más de diez minutos:',
  ['El conductor conectará el freno de estacionamiento', 'El conductor abatirá los pantógrafos',
   'Se evacuará el tren por la plataforma de vía', 'Se solicitará automáticamente un tren de auxilio'], 0,
  'Los diez minutos son el umbral para aplicar el freno de estacionamiento, a iniciativa del PCC o del propio conductor. El abatimiento de pantógrafos responde a otra señal: el parpadeo del alumbrado del túnel.', 132);

q('3.17', 3, 'Restablecido el suministro eléctrico y sin poder comunicar con el PCC, el conductor:',
  ['Esperará dos minutos y reanudará en marcha a la vista hasta la siguiente señal o estación',
   'Esperará tres minutos y reanudará a paso de hombre',
   'Reanudará inmediatamente en las condiciones anteriores', 'Permanecerá detenido hasta recuperar la comunicación'], 0,
  'Aquí son dos minutos y marcha a la vista. No hay que confundirlo con los tres minutos y paso de hombre del rebase de señal en rojo sin comunicación, que es otro supuesto distinto.', 132);

q('3.17', 2, 'Cuando una interrupción de servicio no afecta a toda la línea:',
  ['Los tramos resultantes se explotan como líneas independientes y las estaciones límite pasan a ser cabeceras',
   'Se suspende el servicio en la línea completa', 'Se establece circulación a contravía en todo el trayecto',
   'Los trenes circulan a paso de hombre por toda la línea'], 0,
  'La NIC lo describe como una redefinición temporal de la topología de la línea. Por los tramos interrumpidos solo pueden circular los trenes que vayan a trabajar en ellos, sujetos a la normativa del periodo fuera de servicio.', 125);

q('3.17', 3, 'Un conductor que ha solicitado tren de auxilio consigue que su tren recupere las condiciones para circular. Debe:',
  ['Comunicarlo al PCC antes de iniciar la marcha y atenerse a sus instrucciones',
   'Reanudar la marcha y comunicarlo en la siguiente estación',
   'Esperar en todo caso a que llegue el tren de auxilio', 'Comunicarlo solo si el auxilio aún no ha salido'], 0,
  'La comunicación es previa a iniciar la marcha, sin excepciones, porque el PCC puede tener ya un tren de auxilio circulando bajo una autorización especial hacia ese punto.', 126);

tema('3.18', 'Detención anormal en interestación y evacuación de viajeros',
'**Detención anormal (art. 5.1.4).** Siempre que un tren deba permanecer detenido en interestación por anormalidad y no pueda continuar, **se informa al PCC** y se siguen sus instrucciones.\n\n**Si no hay comunicación con el PCC**, el protocolo es:\n\n1. **Asegurar la inmovilización** del tren aplicando el **freno de servicio y el freno de estacionamiento**.\n2. **Señalizarse encendiendo los pilotos en cabeza.**\n3. **En cualquier caso**, realizar **señales luminosas con la linterna del tren u otro medio** (faros, luz de cabina) **para detener al tren que pudiera circular por la vía contraria**.\n\n**Actuación ante un tren detenido en vía contraria (art. 5.1.5).** Cuando un conductor detecte en vía contraria un tren detenido **con los pilotos encendidos**, o señales luminosas hechas desde el tren o desde la plataforma:\n\n- **Detendrá el tren sin rebasar la cabeza del tren detenido** o la señalización existente en la plataforma.\n- Tanto si se detuvo antes de rebasarlas como si **por motivos inevitables y justificados** las rebasó, **antes de reiniciar la marcha se asegurará**, comunicando con el PCC **o con el conductor del tren detenido**, de que **puede realizar el cruce**.\n- El cruce se llevará a cabo **en todo caso con precaución, a paso de hombre**.\n\n**Evacuación de viajeros por la plataforma de vía (art. 5.1.6).** Cuando sea necesario evacuar andando por la vía, se adoptan **las medidas de protección del artículo 5.1.4** para impedir que un tren de la otra vía rebase el tren averiado.\n\n- **Con comunicación con el PCC**: el conductor sigue **en todo momento sus instrucciones**, que se corresponderán con las normas del **Plan de Autoprotección**, e informa puntualmente de cualquier situación anómala.\n- **Sin comunicación**: si el conductor considera que hay que abandonar el tren —**por haber transcurrido un tiempo excesivo o por existir riesgo para los viajeros**—, **tras comprobar la detención del tren que pudiera circular por la otra vía**, **dirigirá la evacuación** conforme al **Plan de Autoprotección**. Informará al PCC en cuanto sea posible.\n\n**Alumbrado.** Siempre que el PCC detecte la detención anormal de un tren, **realizará las gestiones para encender el alumbrado del túnel** en esa interestación, si es posible.\n\n**Desacople en marcha (art. 5.1.10).** El conductor **avisa inmediatamente al PCC**, que determina las medidas. Si no es posible comunicar, **adopta las medidas del artículo 5.1.4** —inmovilización, pilotos y señales luminosas— e informa en cuanto pueda.',
[
 { anverso: 'Sin comunicación con el PCC y detenido en interestación, ¿qué tres cosas hace el conductor?', reverso: 'Inmoviliza con freno de servicio y de estacionamiento; enciende los pilotos en cabeza; y hace señales luminosas para detener al tren de la vía contraria.' },
 { anverso: 'Al ver un tren detenido en vía contraria con los pilotos encendidos, ¿qué se hace?', reverso: 'Detenerse sin rebasar la cabeza del tren detenido o la señalización, y no cruzar hasta asegurarse con el PCC o con su conductor. El cruce, a paso de hombre.' },
 { anverso: '¿Con qué documento se dirige una evacuación de viajeros por la vía?', reverso: 'Con las normas del Plan de Autoprotección.' },
 { anverso: 'Sin comunicación, ¿qué justifica evacuar el tren?', reverso: 'Que haya transcurrido un tiempo excesivo o que exista riesgo para los viajeros. Y antes hay que comprobar la detención del tren de la otra vía.' },
 { anverso: '¿Qué gestiona el PCC al detectar una detención anormal?', reverso: 'El encendido del alumbrado del túnel en esa interestación, si es posible.' }
], [127, 128]);

q('3.18', 3, 'Un tren queda detenido en interestación sin comunicación con el PCC. Tras inmovilizarlo, el conductor debe:',
  ['Encender los pilotos en cabeza y hacer señales luminosas para detener al tren de la vía contraria',
   'Bajar a la vía a colocar una baliza roja', 'Evacuar de inmediato a los viajeros',
   'Esperar tres minutos y continuar a paso de hombre'], 0,
  'La inmovilización se completa con freno de servicio y de estacionamiento, y la señalización con pilotos en cabeza más señales luminosas hacia la vía contraria. La evacuación solo procede si pasa un tiempo excesivo o hay riesgo para los viajeros.', 127);

q('3.18', 3, 'Al detectar en vía contraria un tren detenido con los pilotos encendidos, el conductor detendrá su tren:',
  ['Sin rebasar la cabeza del tren detenido o la señalización existente en la plataforma',
   'A 50 metros de la cabeza del tren detenido', 'En la estación anterior',
   'Solo si recibe indicación del PCC'], 0,
  'La referencia es la cabeza del tren detenido o la señalización de la plataforma. Y aunque por motivos inevitables se hubieran rebasado, hay que asegurarse antes de reiniciar de que se puede cruzar, haciéndolo siempre a paso de hombre.', 127);

q('3.18', 2, 'El cruce con un tren detenido en la vía contraria se realiza:',
  ['Con precaución y a paso de hombre en todo caso', 'En marcha a la vista',
   'A un máximo de 20 km/h', 'A la velocidad normal, una vez autorizado'], 0,
  'La NIC no deja margen: en todo caso, a paso de hombre. La autorización previa del PCC o del conductor del tren detenido no exime de esa cautela.', 127);

q('3.18', 3, 'Sin comunicación con el PCC, un conductor puede decidir evacuar su tren por la plataforma de vía:',
  ['Si ha transcurrido un tiempo excesivo o existe riesgo para los viajeros, tras comprobar la detención del tren de la otra vía',
   'En cuanto lo soliciten los viajeros', 'Nunca sin autorización expresa del PCC',
   'Solo si el tren ha sufrido un incendio'], 0,
  'Esos son los dos motivos que recoge el artículo, y la comprobación de que el tren de la otra vía está detenido es requisito previo. La evacuación se dirige conforme al Plan de Autoprotección, informando al PCC en cuanto sea posible.', 128);

q('3.18', 2, 'Ante un desacople en marcha sin comunicación con el PCC, el conductor:',
  ['Adopta las medidas de la detención anormal: inmovilización, pilotos en cabeza y señales luminosas',
   'Vuelve a acoplar las unidades por sus propios medios', 'Continúa hasta la siguiente estación',
   'Evacúa a los viajeros de inmediato'], 0,
  'El artículo 5.1.10 remite expresamente al 5.1.4. Reacoplar por medios propios no está previsto: el PCC es quien determina las medidas cuando hay comunicación.', 131);

tema('3.19', 'Tirador de alarma, rebase del piñón y avería de ATP tras M-Roja',
'**Tirador de alarma (art. 5.1.7).** Dos escenarios:\n\n- **Si el tren NO se detiene**, porque actúa el **sistema inhibidor del freno de emergencia**: el conductor **se comunica con los viajeros por los interfonos**, pregunta las causas y **valora si debe detenerse de inmediato o es preferible continuar hasta la primera estación**, informando de ello al PCC.\n- **Si el tren SÍ se frena en emergencia**: lo comunica al PCC y, **con el tren detenido**, averigua las circunstancias y adopta las medidas necesarias.\n\nEn **ambos casos**, si la utilización **no estuviera justificada**, **tomará los datos del viajero para tramitar la infracción**. Resuelta la incidencia, notificará al PCC que continúa la marcha **y el motivo** del accionamiento.\n\n**Avería de ATP tras salir con M-Roja (art. 5.1.8).** Si un tren queda detenido en interestación por avería del ATP **habiendo salido de la estación con la señal en M-Roja**, lo comunica al PCC.\n\n**Sin comunicación**: **esperará tres minutos** y, si no ha podido continuar con el ATP conectado, **seleccionará el modo M+20** y se dirigirá **a paso de hombre** hasta la siguiente señal —donde actuará según su aspecto— o hasta la siguiente estación, **con la máxima precaución, puesto que puede haber otro tren detenido en la interestación**.\n\n**Rebase del piñón de salida al parar en estación (art. 5.1.9).** Todo gira alrededor del **50 % de la longitud del tren**.\n\n**a) Con comunicación con el PCC.** Si el rebase **no ha sido mayor del 50 %**, el PCC autoriza el retroceso. Antes debe confirmar:\n\n- Con **ATP de códigos de velocidad o Distancia Objetivo**: que el conductor confirma que no ha rebasado más del 50 % **y** que en el **CTC** se refleja la ocupación en el circuito de vía de andén.\n- Con **CBTC**: que en el tren se refleja la indicación **«Retroceso condicionado»** —indicativo de que no se ha rebasado más del 50 %— **y** la ocupación en el CTC. Además, se autoriza **previa inmovilización del tren siguiente fuera del andén**.\n\nEl retroceso se hace **siempre a paso de hombre**, **emitiendo señales acústicas insistentemente con el silbato durante todo el recorrido**, y **antes de iniciarlo el conductor informa a los viajeros** de que va a situar el tren correctamente en el andén.\n\n**b) Sin comunicación con el PCC.**\n\n- **Si tiene seguridad de no haber rebasado más del 50 %**: informa a los viajeros, **se cambia de cabina de mando** y sitúa el tren correctamente **circulando a contravía**, con **señales acústicas insistentes**.\n- **Si ha rebasado más del 50 % o desconoce cuánto**: informa a los viajeros de que no ha podido efectuar parada. Si **la señal autorizaba el rebase**, continúa hasta la siguiente estación. Si **estaba con indicación de parada o no está seguro**, informa y, **tras esperar tres minutos**, continúa **a paso de hombre** hasta la siguiente señal o estación.\n\nEn ambos casos lo pone en conocimiento del PCC **lo antes posible**, por radiotelefonía, telefonía selectiva o a través del personal de estaciones.',
[
 { anverso: 'Si se acciona un tirador de alarma y el tren no se detiene, ¿qué hace el conductor?', reverso: 'Hablar con los viajeros por los interfonos, preguntar la causa y valorar si para de inmediato o continúa hasta la primera estación, informando al PCC.' },
 { anverso: '¿Qué pasa si el accionamiento del tirador no estaba justificado?', reverso: 'El conductor toma los datos del viajero para tramitar la infracción.' },
 { anverso: '¿Cuál es el umbral que permite retroceder tras rebasar el piñón de salida?', reverso: 'No haber rebasado más del 50 % de la longitud del tren.' },
 { anverso: '¿Cómo se realiza el retroceso una vez autorizado?', reverso: 'Siempre a paso de hombre, con señales acústicas insistentes durante todo el recorrido, y avisando antes a los viajeros.' },
 { anverso: 'Sin comunicación y habiendo rebasado más del 50 %, con la señal en parada, ¿qué se hace?', reverso: 'Informar a los viajeros, esperar tres minutos y continuar a paso de hombre hasta la siguiente señal o estación.' },
 { anverso: '¿Qué indicación busca el PCC en un tren con CBTC para autorizar el retroceso?', reverso: '«Retroceso condicionado», que indica que no se ha rebasado más del 50 % de la longitud del tren.' }
], [128, 129, 130, 131]);

q('3.19', 3, 'El retroceso de un tren que ha rebasado el piñón de salida solo se autoriza si el rebase:',
  ['No ha sido mayor del 50 % de la longitud del tren', 'No ha sido mayor de 10 metros',
   'No ha superado la longitud de un coche', 'Se ha producido con la señal en verde'], 0,
  'El 50 % de la longitud del tren es el umbral, y el PCC debe confirmarlo además con la ocupación del circuito de vía de andén en el CTC o, en CBTC, con la indicación «Retroceso condicionado».', 129, { pag2: 130 });

q('3.19', 3, 'Una vez autorizado, el retroceso para situar el tren en el andén se realiza:',
  ['A paso de hombre y emitiendo señales acústicas insistentemente durante todo el recorrido',
   'En marcha a la vista y en silencio para no alarmar a los viajeros',
   'A un máximo de 20 km/h', 'Con el ATP desconectado'], 0,
  'Paso de hombre y silbato insistente durante todo el recorrido. Y antes de iniciarlo, el conductor informa a los viajeros de que va a situar el tren correctamente en el andén.', 130);

q('3.19', 3, 'Sin comunicación con el PCC, un conductor que tiene la seguridad de no haber rebasado más del 50 % de la composición:',
  ['Informa a los viajeros, se cambia de cabina y sitúa el tren circulando a contravía',
   'Espera tres minutos y continúa a paso de hombre', 'Retrocede desde la misma cabina',
   'Continúa hasta la siguiente estación sin más'], 0,
  'El cambio de cabina es lo que convierte el movimiento en una circulación a contravía y no en una marcha atrás. Los tres minutos y el paso de hombre corresponden al supuesto contrario: haber rebasado más del 50 % o desconocer cuánto.', 130);

q('3.19', 3, 'Un tren queda detenido en interestación por avería del ATP tras haber salido de la estación con la señal en M-Roja, y no hay comunicación con el PCC. El conductor:',
  ['Espera tres minutos, selecciona M+20 y se dirige a paso de hombre hasta la siguiente señal o estación',
   'Espera dos minutos y reanuda en marcha a la vista',
   'Selecciona Llave Especial y circula a 30 km/h', 'Permanece detenido hasta recuperar la comunicación'], 0,
  'Tres minutos, M+20 y paso de hombre, con máxima precaución porque puede haber otro tren detenido en la interestación: precisamente por eso la señal estaba en M-Roja. Los dos minutos y la marcha a la vista corresponden al restablecimiento tras un corte de corriente.', 129);

q('3.19', 2, 'Si un viajero acciona un tirador de alarma sin justificación:',
  ['El conductor tomará sus datos para tramitar la infracción', 'Se le impondrá el recargo de 80 euros en el acto',
   'Se avisará a la Inspección del CRTM para que lo sancione en el andén',
   'No procede actuación alguna'], 0,
  'La NIC prevé tomar los datos del viajero para tramitar la infracción, tanto si el tren se detuvo como si no. El recargo de 80 euros es otra cosa: el del Reglamento de Viajeros por viajar sin título válido.', 128);

tema('3.20', 'Accidentes: obligaciones generales y asistencia a viajeros',
'**Obligaciones de todos los trabajadores en caso de accidente (art. 5.2.1).** Cualquier trabajador que presencie un accidente, **incluso encontrándose fuera de servicio**, tiene la obligación de:\n\n- **Prestar la ayuda necesaria** a las personas afectadas o heridas.\n- **Colaborar** en la adopción de medidas para la **protección del tren o de la zona afectada**.\n- **Ponerse a disposición del conductor o del trabajador de mayor categoría profesional** allí existente, para prestar los servicios que requieran las circunstancias, **según su formación**.\n- **Informar al PCC o al responsable operativo** del recinto donde se encuentre.\n\n> El «incluso encontrándose fuera de servicio» es lo que convierte esto en pregunta: la obligación no depende de estar de turno.\n\n**Obligaciones ante una situación de riesgo para la circulación (art. 5.2.2).** Todo trabajador que observe una situación o accidente que **impida, dificulte o pueda suponer riesgo** para la circulación está obligado a:\n\n- **Avisar inmediatamente del peligro** al PCC o al responsable operativo, **por el medio más rápido disponible**, indicando **lugar, auxilios necesarios y si debe interrumpirse la circulación**, así como **las precauciones que a su juicio deban observarse**.\n- **Tomar las medidas a su alcance** para evitar o reducir las consecuencias.\n- **Detener a todo tren que pueda llegar con riesgo a la zona afectada**, empleando los medios necesarios, como las **señales gestuales de emergencia**.\n\n**Emergencias (art. 5.2.3).** Todos los trabajadores afectados por una emergencia, **incluso fuera de servicio**, deberán actuar conforme al **Plan de Autoprotección**.\n\n**Asistencia a viajeros accidentados o enfermos (art. 5.2.4).** Todos los trabajadores prestarán la ayuda necesaria, **solicitando al PCC la presencia de personal sanitario** si hace falta.\n\nSi la persona **viaja en un tren**:\n\n1. El conductor **procurará llegar hasta la primera estación**, donde quedará detenido.\n2. Lo **notificará al PCC lo antes posible** para que solicite la ayuda necesaria.\n3. Si es posible y hay personal de servicio en la estación, **se evacuará al viajero dejándolo a su cuidado**, pudiendo entonces **reanudar la marcha**.\n\n> **En ningún caso se abandonará a un viajero indispuesto sin que quede acompañado por personal de servicio o de una Autoridad competente.**',
[
 { anverso: '¿La obligación de auxiliar en un accidente depende de estar de servicio?', reverso: 'No. Alcanza a cualquier trabajador que lo presencie, incluso fuera de servicio.' },
 { anverso: '¿Qué hay que indicar al avisar de un riesgo para la circulación?', reverso: 'El lugar, los auxilios necesarios, si debe interrumpirse la circulación y las precauciones que a su juicio deban observarse.' },
 { anverso: '¿Qué se hace con un viajero que se indispone dentro del tren?', reverso: 'Llegar hasta la primera estación, detenerse, notificarlo al PCC y, si hay personal de servicio, dejarlo a su cuidado antes de reanudar.' },
 { anverso: '¿Puede dejarse solo a un viajero indispuesto?', reverso: 'En ningún caso. Debe quedar acompañado por personal de servicio o por una Autoridad competente.' },
 { anverso: '¿Con qué medio se detiene a un tren que se aproxima a una zona de riesgo?', reverso: 'Con los medios necesarios, como las señales gestuales de emergencia.' }
], [133, 134]);

q('3.20', 2, 'La obligación de prestar ayuda ante un accidente presenciado alcanza al trabajador:',
  ['Incluso encontrándose fuera de servicio', 'Solo si está de servicio',
   'Solo si tiene formación sanitaria', 'Solo si es el trabajador de mayor categoría presente'], 0,
  'La NIC lo dice expresamente. Lo que sí se modula por la formación de cada uno es el tipo de servicios que preste, poniéndose a disposición del conductor o del trabajador de mayor categoría allí presente.', 133);

q('3.20', 3, 'Al avisar de una situación de riesgo para la circulación, el trabajador debe indicar:',
  ['El lugar, los auxilios necesarios, si debe interrumpirse la circulación y las precauciones a observar',
   'Únicamente el punto kilométrico exacto', 'Solo el número de tren afectado',
   'Su nombre y categoría profesional'], 0,
  'El artículo 5.2.2 enumera esos cuatro elementos, e incluye expresamente el juicio del propio trabajador sobre las precauciones necesarias. Además debe tomar medidas a su alcance y detener a los trenes que puedan llegar a la zona.', 133);

q('3.20', 3, 'Un viajero se indispone dentro de un tren en marcha. El conductor:',
  ['Procurará llegar hasta la primera estación, se detendrá y lo notificará al PCC',
   'Detendrá el tren de inmediato en la interestación', 'Continuará el servicio con normalidad',
   'Evacuará el tren completo por la plataforma de vía'], 0,
  'La regla es llegar a la primera estación, no detenerse en interestación, para que la asistencia sanitaria pueda acceder. Y solo se reanuda la marcha si el viajero queda al cuidado del personal de servicio.', 134);

q('3.20', 2, 'Respecto a un viajero indispuesto, la NIC establece que:',
  ['En ningún caso se le abandonará sin que quede acompañado por personal de servicio o una Autoridad competente',
   'Puede dejarse en el andén si se avisa al 112', 'Debe permanecer en el tren hasta el final del trayecto',
   'Debe ser trasladado por el conductor hasta el vestíbulo'], 0,
  'La prohibición es absoluta. Es lo que condiciona que el conductor pueda o no reanudar la marcha tras dejar al viajero en la estación.', 134);

tema('3.21', 'Alcances, descarrilamientos, incendios, catenaria y arrollamientos',
'**Alcances a un parachoques o a otro tren (art. 5.2.5).** Los conductores implicados:\n\n1. **Inmovilizan los trenes afectados.**\n2. **Encienden los pilotos en cabeza.**\n3. Lo **ponen en conocimiento del PCC** o del responsable operativo.\n4. Después, **revisan el tren o trenes** observando **si hay algún viajero accidentado** y **si ocupa o no gálibo de la vía contraria**, e informan de nuevo.\n\n> **En ningún caso se intentará mover un tren que haya sufrido un alcance** hasta que **lo revise el personal de mantenimiento especializado y dé su conformidad**, porque puede tener algún elemento deteriorado.\n\n**Descarrilamientos (art. 5.2.6).** El conductor **detiene inmediatamente el tren** y **enciende los pilotos en cabeza**. Lo comunica al PCC. Si **no puede contactar**, realiza **señales luminosas con la linterna del tren u otro medio** para **detener al tren de la vía contraria**. Después revisa el tren: **viajeros accidentados** y **si ocupa gálibo de la vía contraria**.\n\n**Incendios en trenes (art. 5.2.7).** Comunicación **inmediata al PCC** y adopción de las medidas del **Plan de Autoprotección**.\n\n**Desperfectos en la catenaria (art. 5.2.8).** Ante un desperfecto o **elemento extraño** que pueda impedir el paso, el conductor **detiene el tren sin rebasarlo** y adopta las medidas a su alcance, **como avisar a los trenes que puedan circular en sentido contrario**, informando de inmediato al PCC.\n\n> **Queda terminantemente prohibido intentar eliminar los defectos o quitar los objetos sin efectuar el corte de tensión preceptivo.**\n\n**Arrollamiento de personas (art. 5.2.9).** Si se produce **o se sospecha** que se ha producido, el conductor **detiene el tren de inmediato y lo inmoviliza**, y **avisa inmediatamente al PCC indicando la gravedad**, o al responsable operativo si no puede contactar, para que se soliciten las **asistencias sanitarias**.\n\n**Los tres supuestos:**\n\n**a) Si la persona está con vida.** Se le prestan **los auxilios posibles**, recabando la ayuda necesaria.\n\n**b) Si está fallecida y el cadáver intercepta la circulación:**\n\n- **Con Autoridad Judicial presente**: se le solicita **autorización para la retirada**, y después puede reanudarse la marcha, salvo indicación en contra y **previa autorización del PCC**.\n- **Sin Autoridad Judicial y con personal de servicio**: se formaliza el **Acta de retirada de cadáveres**, haciendo constar **las circunstancias del arrollamiento y la filiación de los testigos** si los hubiera. Se retira el cadáver **de manera que quede lo más próximo posible al lugar que ocupaba**. Si es posible **dejar personal de servicio custodiándolo** hasta que llegue la Autoridad Judicial, el tren prosigue **previa autorización del PCC**. El Acta queda en poder de quien custodia y **se remite después al PCC** o a quien determine la Dirección.\n\n**c) Si está fallecida y el cadáver NO intercepta la circulación.** Si es posible dejar personal custodiándolo hasta que se presente la Autoridad Judicial, el tren **prosigue su marcha previa autorización del PCC**.',
[
 { anverso: 'Tras un alcance, ¿cuándo puede moverse el tren?', reverso: 'Nunca hasta que lo revise el personal de mantenimiento especializado y dé su conformidad.' },
 { anverso: '¿Qué dos cosas revisa el conductor tras un alcance o descarrilamiento?', reverso: 'Si hay algún viajero accidentado y si el tren ocupa o no gálibo de la vía contraria.' },
 { anverso: '¿Puede retirarse un objeto extraño de la catenaria?', reverso: 'Está terminantemente prohibido sin efectuar antes el corte de tensión preceptivo.' },
 { anverso: '¿Qué se hace ante la sospecha de un arrollamiento?', reverso: 'Lo mismo que ante un arrollamiento cierto: detener el tren de inmediato, inmovilizarlo y avisar al PCC indicando la gravedad.' },
 { anverso: '¿Dónde se deja el cadáver al retirarlo de la vía?', reverso: 'Lo más próximo posible al lugar que ocupaba.' },
 { anverso: '¿Qué documento se formaliza si no está presente la Autoridad Judicial?', reverso: 'El Acta de retirada de cadáveres, con las circunstancias del arrollamiento y la filiación de los testigos.' }
], [134, 135, 136, 137]);

q('3.21', 2, 'Tras un alcance a otro tren o a un parachoques, el tren afectado:',
  ['No se moverá hasta que lo revise el personal de mantenimiento especializado y dé su conformidad',
   'Podrá moverse a paso de hombre si no se aprecian daños',
   'Podrá moverse con autorización del PCC', 'Deberá retroceder hasta la estación anterior'], 0,
  'La prohibición es absoluta y no la levanta ni la ausencia de daños visibles ni la autorización del PCC: hace falta la conformidad del personal de mantenimiento especializado, porque puede haber elementos deteriorados no visibles.', 135);

q('3.21', 3, 'Ante un desperfecto o elemento extraño en la catenaria, el conductor:',
  ['Detiene el tren sin rebasarlo y avisa, quedando prohibido retirar el objeto sin corte de tensión',
   'Retira el objeto si puede alcanzarlo desde el techo del tren',
   'Continúa a paso de hombre hasta la siguiente estación',
   'Abate los pantógrafos y continúa por inercia'], 0,
  'La NIC lo prohíbe terminantemente: sin corte de tensión preceptivo no se toca nada. Entre las medidas a su alcance figura avisar a los trenes que puedan circular en sentido contrario.', 136);

q('3.21', 3, 'En un arrollamiento con la persona fallecida, el cadáver interceptando la circulación y sin Autoridad Judicial presente:',
  ['Se formaliza el Acta de retirada de cadáveres y se retira el cuerpo lo más próximo posible al lugar que ocupaba',
   'Se retira el cuerpo hasta el vestíbulo de la estación más próxima',
   'No puede retirarse el cuerpo bajo ningún concepto', 'Se espera a la Autoridad Judicial sin actuar'], 0,
  'Se levanta Acta, haciendo constar las circunstancias y la filiación de los testigos, y el cuerpo se deja lo más cerca posible del punto original para no alterar el lugar. La marcha se reanuda previa autorización del PCC y, si es posible, dejando personal custodiando.', 136, { pag2: 137 });

q('3.21', 2, 'Si un conductor sospecha que se ha producido un arrollamiento, aunque no esté seguro:',
  ['Detiene el tren de inmediato, lo inmoviliza y avisa al PCC indicando la gravedad',
   'Continúa hasta la siguiente estación y allí lo comprueba',
   'Solo actúa si algún viajero lo confirma', 'Informa al finalizar el servicio'], 0,
  'El artículo equipara la sospecha al hecho cierto: «se produzca o se sospeche que se ha producido». La actuación es la misma en ambos casos.', 136);

q('3.21', 3, 'Ante un descarrilamiento sin comunicación con el PCC, el conductor debe además:',
  ['Realizar señales luminosas con la linterna del tren u otro medio para detener al tren de la vía contraria',
   'Bajar a la vía a colocar una baliza roja', 'Evacuar de inmediato a los viajeros',
   'Intentar reencarrilar el tren'], 0,
  'La secuencia es detener, encender pilotos en cabeza y avisar; si no hay comunicación, señales luminosas hacia la vía contraria. Después revisa si hay viajeros accidentados y si ocupa gálibo de la otra vía.', 135);

module.exports = {
  parte: { parte: '3', titulo: 'Normativa Interna de Circulación (NIC)',
           manual: 'Manual 3 del temario oficial', url_manual: M, color: '#d99000', epigrafes },
  preguntas
};
