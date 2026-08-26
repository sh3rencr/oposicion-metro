/* Parte 6 — Prevención de Riesgos Laborales. Manual de nivel básico (lectura fácil). */
'use strict';
const M = 'https://www.metromadrid.es/sites/default/files/empleo/descargables/6.Manual_PRL.pdf';
const { epigrafes, preguntas, tema, q } = require('./_util.js')(M, 'Manual 6 · PRL');

tema('6.1', 'Conceptos básicos: riesgo, prevención y salud',
'El vocabulario de este manual es el que se pregunta literalmente. Conviene distinguir bien términos que en el lenguaje corriente se usan casi como sinónimos.\n\n- **Riesgo**: una situación en la que se puede vivir un peligro. Significa que **hay posibilidades de que la situación de peligro ocurra**.\n- **Riesgo laboral**: la **posibilidad de que un trabajador sufra un daño** causado o relacionado con el trabajo.\n- **Factor de riesgo**: **todo lo que puede suponer un peligro** o afectar a la salud de un trabajador.\n- **Prevención**: **actividades y decisiones** que las empresas toman **en todas las áreas y tareas** para evitar o reducir los riesgos relacionados con el trabajo.\n- **Actividad preventiva**: **tareas que se realizan en la empresa** para conocer las condiciones de trabajo y los factores de riesgo **según las características de los trabajadores**, sus capacidades y sus necesidades.\n- **Condición de trabajo**: **cualquier característica del trabajo** que pueda tener consecuencias para la salud y la seguridad. Incluye los edificios, oficinas o talleres, las instalaciones, las máquinas, **la forma de organizar el trabajo** o los productos fabricados.\n- **Daño derivado del trabajo**: **enfermedad o lesión** que un trabajador sufre en su trabajo o **por motivo de** su trabajo.\n- **Salud**: **un estado de bienestar** de la persona que afecta al cuerpo, las emociones y las relaciones con otras personas. Es decir, un bienestar **físico, mental y social**. Se tiene salud cuando no se está enfermo **y** cuando uno se siente bien.\n\n**El orden de actuación ante un peligro.** Cuando en el trabajo hay un peligro para la salud, los pasos de la empresa son:\n\n1. **Eliminar el peligro.**\n2. Si no se puede, **estudiar los motivos** que lo provocan y proponer medidas:\n   - La **primera medida** es **evitar el peligro en su inicio**, es decir, en el lugar donde empieza.\n   - Cuando no se puede, **aplicar las soluciones de prevención que indica la ley**.\n\n**Costes de los problemas de salud en el trabajo:**\n\n- **Costes directos**: los pagos que las empresas hacen **a la Seguridad Social** para que esta se encargue del pago a los trabajadores que dejan de trabajar por accidente o enfermedad profesional.\n- **Costes indirectos**: el dinero que **pierde la empresa** porque el trabajador no produce, porque pierde clientes o porque hay que pagar a un sustituto. Son **difíciles de calcular**, pero **suelen ser mayores que los directos**.',
[
 { anverso: '¿Qué es el riesgo laboral?', reverso: 'La posibilidad de que un trabajador sufra un daño causado o relacionado con el trabajo.' },
 { anverso: '¿Qué tres dimensiones abarca la salud según el manual?', reverso: 'Física, mental y social. Se tiene salud cuando no se está enfermo y además uno se siente bien.' },
 { anverso: '¿Cuál es el primer paso ante un peligro para la salud en el trabajo?', reverso: 'Eliminarlo. Si no se puede, evitarlo en su inicio y, en último término, aplicar las soluciones de prevención que indica la ley.' },
 { anverso: '¿Qué costes son mayores, los directos o los indirectos?', reverso: 'Los indirectos suelen ser mayores, aunque son más difíciles de calcular.' },
 { anverso: '¿Qué es una condición de trabajo?', reverso: 'Cualquier característica del trabajo que pueda tener consecuencias para la salud y la seguridad: edificios, instalaciones, máquinas, la organización del trabajo o los productos.' }
], [9, 10, 13]);

q('6.1', 2, 'El riesgo laboral se define como:',
  ['La posibilidad de que un trabajador sufra un daño causado o relacionado con el trabajo',
   'Todo lo que puede suponer un peligro para la salud de un trabajador',
   'La lesión que un trabajador sufre en su puesto de trabajo',
   'El conjunto de actividades para evitar daños en el trabajo'], 0,
  'El riesgo laboral es una posibilidad de daño. Lo que puede suponer peligro es el factor de riesgo; la lesión efectiva es el accidente de trabajo; y el conjunto de actividades para evitarlo es la prevención.', 10);

q('6.1', 3, 'Según el manual, cuando hay un peligro para la salud en el trabajo, la empresa debe primero:',
  ['Eliminar el peligro', 'Evaluar el peligro y proponer medidas',
   'Entregar equipos de protección individual', 'Aplicar las soluciones que indica la ley'], 0,
  'La jerarquía es clara: primero eliminar. Solo si no puede eliminarse se estudian los motivos y se proponen medidas, empezando por evitarlo en su origen y recurriendo en último término a las soluciones legales de prevención.', 9);

q('6.1', 2, 'La salud, según el manual, es un estado de bienestar:',
  ['Físico, mental y social', 'Únicamente físico', 'Físico y mental',
   'Físico y económico'], 0,
  'El manual insiste en las tres dimensiones e incluye expresamente las relaciones con otras personas. Y añade un matiz: hay salud cuando no se está enfermo y además uno se siente bien.', 10);

q('6.1', 3, 'Respecto a los costes por problemas de salud en el trabajo:',
  ['Los indirectos son difíciles de calcular, pero suelen ser mayores que los directos',
   'Los directos son siempre mayores que los indirectos',
   'Los indirectos son los pagos a la Seguridad Social',
   'Ambos se calculan con la misma facilidad'], 0,
  'Los costes directos son los pagos a la Seguridad Social; los indirectos son la pérdida de producción, de clientes y el coste del sustituto. El manual subraya que estos últimos, pese a ser difíciles de calcular, suelen superar a los directos.', 13);

tema('6.2', 'Accidente de trabajo y enfermedad profesional',
'**Accidente de trabajo.** Una **lesión que tiene un trabajador en su cuerpo** y que ha sufrido **en su trabajo o como resultado de su trabajo**. Los accidentes de trabajo **indican que en la empresa hay malas condiciones de trabajo**.\n\n**Las cinco notas del accidente de trabajo:**\n\n1. **Ocurre de repente.**\n2. **Nadie desea que ocurra.**\n3. **Se podría evitar.**\n4. **Interrumpe el ritmo en el trabajo.**\n5. **Puede causar daños y lesiones a una persona.**\n\n**Accidente *in itinere*.** Los accidentes de trabajo que ocurren **cuando el trabajador va a su trabajo o vuelve a su casa del trabajo**. El manual pone como ejemplo el accidente con el coche al volver del trabajo por cansancio. También es accidente de trabajo, por ejemplo, **una insolación mientras se trabaja**.\n\n**Enfermedad profesional.** Enfermedad que tiene un trabajador **por el trabajo que realiza**, porque **está en contacto con materiales o sustancias que la provocan**. Dato clave: **solo son enfermedades profesionales las que reconoce la ley**. Ejemplos del manual: las enfermedades **respiratorias de los mineros** o la **sordera** por trabajos con mucho ruido.\n\n**Enfermedad relacionada con el trabajo.** La que sufre un trabajador **poco a poco y de forma lenta** por trabajar en situaciones con riesgo para la salud, por el lugar o por la forma de trabajo. Ejemplo: trabajar muy rápido y terminar con **estrés y ansiedad**.\n\n**Otras patologías relacionadas con el trabajo.** Dolencias o trastornos que afectan a **las emociones, la salud mental o las relaciones** de la persona: el estrés, la insatisfacción laboral o la **fatiga mental**, que es una sensación de cansancio para pensar.\n\n> El contraste que más cae: la **enfermedad profesional** está en una **lista legal cerrada** y viene de un contacto concreto; la **enfermedad relacionada con el trabajo** aparece **de forma lenta** y **no está tasada** por la ley.',
[
 { anverso: '¿Qué es un accidente in itinere?', reverso: 'El accidente de trabajo que ocurre cuando el trabajador va a su trabajo o vuelve a su casa desde el trabajo.' },
 { anverso: '¿Qué enfermedades son enfermedades profesionales?', reverso: 'Solo las que reconoce la ley, causadas por el contacto con materiales o sustancias propios del trabajo.' },
 { anverso: '¿En qué se diferencia la enfermedad relacionada con el trabajo?', reverso: 'Aparece poco a poco y de forma lenta por trabajar en situaciones de riesgo, y no está tasada por la ley.' },
 { anverso: '¿Qué es la fatiga mental?', reverso: 'Una sensación de cansancio para pensar. Se incluye entre las otras patologías relacionadas con el trabajo.' },
 { anverso: 'Enumera las cinco notas del accidente de trabajo.', reverso: 'Ocurre de repente; nadie desea que ocurra; se podría evitar; interrumpe el ritmo de trabajo; puede causar daños y lesiones.' }
], [11, 12]);

q('6.2', 2, 'Los accidentes que ocurren cuando el trabajador se desplaza de su casa al trabajo o del trabajo a su casa se denominan:',
  ['Accidentes in itinere', 'Accidentes en misión', 'Enfermedades relacionadas con el trabajo',
   'Incidentes laborales'], 0,
  'Son los accidentes in itinere, y el manual los incluye expresamente dentro de la categoría de accidentes de trabajo. La insolación sufrida mientras se trabaja también es accidente de trabajo, pero no in itinere.', 11);

q('6.2', 3, 'Una diferencia esencial entre la enfermedad profesional y la enfermedad relacionada con el trabajo es que:',
  ['Solo son enfermedades profesionales las que reconoce la ley',
   'La enfermedad profesional aparece siempre de forma lenta',
   'La enfermedad relacionada con el trabajo requiere contacto con sustancias tóxicas',
   'La enfermedad profesional no da derecho a prestación'], 0,
  'La enfermedad profesional está tasada por la ley y deriva del contacto con materiales o sustancias. La relacionada con el trabajo es la que aparece poco a poco por las condiciones o la forma de trabajo, como el estrés o la ansiedad, y no está en esa lista legal.', 12);

q('6.2', 2, 'Según el manual, ¿cuál de estas NO es una característica del accidente de trabajo?',
  ['Que sea previsible y esperado por la empresa', 'Que ocurra de repente',
   'Que se podría evitar', 'Que interrumpa el ritmo en el trabajo'], 0,
  'El manual enumera cinco notas: ocurre de repente, nadie desea que ocurra, se podría evitar, interrumpe el ritmo de trabajo y puede causar daños. Que sea previsible y esperado contradice precisamente la primera y la segunda.', 11);

q('6.2', 3, 'El estrés, la insatisfacción laboral y la fatiga mental se clasifican en el manual como:',
  ['Otras patologías relacionadas con el trabajo', 'Enfermedades profesionales',
   'Accidentes de trabajo', 'Factores de riesgo'], 0,
  'Son las «otras patologías relacionadas con el trabajo», que afectan a las emociones, la salud mental o las relaciones. Las enfermedades profesionales son solo las reconocidas por la ley, y ninguna de estas lo está.', 12);

tema('6.3', 'Las disciplinas preventivas',
'El manual define las **técnicas o especialidades** que integran la prevención. Cada una tiene un campo propio y es fácil confundirlas:\n\n| Disciplina | De qué se ocupa |\n|---|---|\n| **Seguridad en el trabajo** | Técnicas y formas de organizar las tareas para **eliminar o reducir el riesgo de accidentes de trabajo** |\n| **Higiene industrial** | Técnica para evitar accidentes y enfermedades profesionales **en el entorno de trabajo** (edificios, oficinas, talleres). Relacionada con el **uso de productos químicos** |\n| **Ergonomía** | Técnicas y materiales para que **el trabajo sea adecuado a la persona**: muebles, sillas, iluminación, altura de las pantallas, **manipulación de objetos pesados** y **movimientos repetitivos** |\n| **Psicosociología aplicada** | Estudia cómo **la organización del trabajo y el comportamiento de las personas** afectan a la salud: por ejemplo, un mal ambiente en el trabajo |\n| **Medicina del trabajo** | Medicina aplicada a situaciones de trabajo: **prevenir** problemas de salud, **curar** enfermedades o **rehabilitar** de daños |\n\n> Truco para no confundir **ergonomía** y **psicosociología**: la ergonomía trata de lo **físico y material** (la silla, la pantalla, el peso); la psicosociología, de lo **organizativo y relacional** (los turnos, el ambiente, el ritmo).\n\n**La Seguridad Social** es el organismo encargado de **pagar las pensiones de jubilación**, el **sueldo de los trabajadores cuando están enfermos** y las **ayudas cuando la empresa despide** a un trabajador.',
[
 { anverso: '¿De qué se ocupa la higiene industrial?', reverso: 'De evitar accidentes y enfermedades profesionales en el entorno de trabajo. Está relacionada con el uso de productos químicos.' },
 { anverso: '¿Qué disciplina se ocupa de la altura de las pantallas y de los movimientos repetitivos?', reverso: 'La ergonomía.' },
 { anverso: '¿Qué estudia la psicosociología aplicada a la prevención?', reverso: 'Cómo la organización del trabajo y el comportamiento de las personas afectan a la salud de los trabajadores.' },
 { anverso: '¿Qué tres cosas hace la medicina del trabajo?', reverso: 'Prevenir problemas de salud, curar enfermedades y rehabilitar de daños a los trabajadores.' }
], [12, 13]);

q('6.3', 2, 'La técnica que se ocupa de que el puesto de trabajo se adapte a la persona —mobiliario, iluminación, manipulación de cargas y movimientos repetitivos— es:',
  ['La ergonomía', 'La higiene industrial', 'La psicosociología aplicada', 'La seguridad en el trabajo'], 0,
  'La ergonomía trata la adaptación material y física del puesto. La psicosociología se ocupa de la organización del trabajo y el comportamiento; la higiene industrial, del entorno y los productos químicos.', 13);

q('6.3', 2, 'La higiene industrial está especialmente relacionada con:',
  ['El uso de productos químicos', 'El diseño de las sillas y mesas de trabajo',
   'Los turnos y el ritmo de trabajo', 'La rehabilitación de lesiones'], 0,
  'El manual vincula expresamente la higiene industrial al uso de productos químicos y al entorno de trabajo. La rehabilitación de lesiones corresponde a la medicina del trabajo.', 12);

q('6.3', 3, 'Un mal ambiente en el trabajo es un problema que estudia:',
  ['La psicosociología aplicada a la prevención de riesgos laborales', 'La ergonomía',
   'La medicina del trabajo', 'La seguridad en el trabajo'], 0,
  'El manual pone precisamente ese ejemplo al definir la psicosociología aplicada, que analiza cómo la organización del trabajo y el comportamiento de las personas afectan a la salud.', 13);

tema('6.4', 'El marco normativo: la Ley de Prevención de Riesgos Laborales',
'**Normas españolas que tocan la prevención:**\n\n- **La Constitución** reconoce el derecho de los trabajadores a **proteger su salud y su integridad física** en el trabajo.\n- **El Estatuto de los Trabajadores** incluye los principales derechos de los trabajadores, entre ellos el de proteger la salud y la integridad física. También establece que los trabajadores **deben cumplir las obligaciones de seguridad y salud** de su puesto.\n- **La Ley de Prevención de Riesgos Laborales, del año 1995**, es **la norma principal** que recoge todos los temas de salud y seguridad en el trabajo. Sirve para **aplicar en España la Directiva Marco** europea de salud y seguridad en el trabajo.\n\n**Contenido de la Ley por capítulos:**\n\n| Capítulo | Contenido |\n|---|---|\n| **1** | Objetivo final de la ley, dónde se aplica y **definiciones** |\n| **2** | Objetivos y actuaciones de las **Administraciones públicas**; crea la **Comisión Nacional de Seguridad y Salud en el Trabajo** |\n| **3** | **Derechos de los trabajadores** y **obligaciones de las empresas** |\n| **4** | Tipos de **servicios de prevención** en las empresas |\n| **5** | **Delegados de prevención** y **Comités de Seguridad y Salud** |\n| **6** | Obligaciones de **fabricantes, compradores y proveedores** de máquinas, equipos y herramientas |\n| **7** | **Sanciones** por no cumplir la ley |\n\n> Aviso: el texto del manual dice *«Esta ley tiene 6 capítulos»* y a continuación **enumera siete**. Es una errata del propio manual; no te dejes atrapar por ella. Lo que sí conviene saber es **qué contiene cada capítulo**.\n\n**Las tres reformas que menciona el manual:**\n\n- **2003**: obligación de que la prevención esté **incluida en todas las actividades y decisiones** de la empresa; necesidad de **planes de prevención** y de que los centros de trabajo tuvieran un **recurso preventivo**.\n- **2004**: cómo realizar la **coordinación** de la prevención **entre dos o más empresas** que trabajan en un mismo lugar.\n- **2009**: posibilidad de hacer un **plan de prevención más sencillo** en algunos tipos de empresas.\n\n**El Reglamento de los Servicios de Prevención, del año 1997**, explica en detalle: cómo hacer las **evaluaciones**, cómo **organizar** los servicios de prevención, cómo **vigilarlos** para comprobar que funcionan bien y **quiénes pueden trabajar** en ellos.',
[
 { anverso: '¿De qué año es la Ley de Prevención de Riesgos Laborales y qué norma europea aplica?', reverso: 'De 1995. Aplica en España la Directiva Marco europea de salud y seguridad en el trabajo.' },
 { anverso: '¿Qué capítulo de la Ley crea la Comisión Nacional de Seguridad y Salud en el Trabajo?', reverso: 'El capítulo 2, el de las Administraciones públicas.' },
 { anverso: '¿Qué capítulo regula los delegados de prevención y los Comités de Seguridad y Salud?', reverso: 'El capítulo 5.' },
 { anverso: '¿Qué aportó la reforma de 2004?', reverso: 'Cómo coordinar la prevención entre dos o más empresas que trabajan en un mismo lugar.' },
 { anverso: '¿De qué año es el Reglamento de los Servicios de Prevención?', reverso: 'De 1997.' }
], [14, 15, 16]);

q('6.4', 1, 'La norma principal en España sobre salud y seguridad en el trabajo es:',
  ['La Ley de Prevención de Riesgos Laborales de 1995', 'El Estatuto de los Trabajadores',
   'El Reglamento de los Servicios de Prevención de 1997', 'La Constitución'], 0,
  'La Ley de 1995 es la norma principal y traspone la Directiva Marco europea. La Constitución y el Estatuto reconocen el derecho, y el Reglamento de 1997 desarrolla en detalle los servicios de prevención.', 14);

q('6.4', 3, 'La Comisión Nacional de Seguridad y Salud en el Trabajo se crea en el capítulo de la Ley dedicado a:',
  ['Las Administraciones públicas', 'Los derechos de los trabajadores',
   'Los delegados de prevención y Comités de Seguridad y Salud', 'Las sanciones'], 0,
  'Es el capítulo 2, el que fija los objetivos y actuaciones de las Administraciones públicas y su colaboración. Los delegados de prevención y los Comités están en el capítulo 5.', 15);

q('6.4', 3, 'La reforma de la Ley de Prevención del año 2004 se refirió a:',
  ['La coordinación de la prevención entre dos o más empresas que trabajan en un mismo lugar',
   'La obligación de integrar la prevención en todas las decisiones de la empresa',
   'La posibilidad de un plan de prevención más sencillo en algunas empresas',
   'La creación de la figura del recurso preventivo'], 0,
  'La coordinación entre empresas es la reforma de 2004. La integración de la prevención y el recurso preventivo son de 2003, y el plan simplificado, de 2009.', 16);

q('6.4', 2, 'El Reglamento de los Servicios de Prevención de 1997 detalla, entre otras cosas:',
  ['Cómo hacer las evaluaciones y quiénes pueden trabajar en los servicios de prevención',
   'El importe de las sanciones por incumplimiento', 'Los derechos constitucionales de los trabajadores',
   'La composición del Comité de Seguridad y Salud'], 0,
  'El Reglamento regula cómo hacer las evaluaciones, cómo organizar y vigilar los servicios de prevención y quién puede trabajar en ellos. Las sanciones están en el capítulo 7 de la Ley y el Comité en el capítulo 5.', 16);

tema('6.5', 'Derechos de los trabajadores y su representación',
'**Los derechos del trabajador** en prevención, además de la protección adecuada de su salud y seguridad:\n\n- **Recibir información y cursos de formación** sobre prevención de riesgos laborales.\n- **Parar en el trabajo** cuando hay una **situación de peligro importante y que puede ocurrir en cualquier momento**.\n- **Opinar y participar** en temas de prevención. El empresario **debe pedir la opinión de los trabajadores con tiempo** para tomar decisiones de prevención.\n- **Tener controles médicos** para ver su salud relacionada con el trabajo.\n\n**Las dos formas de representación** que prevé la Ley:\n\n**1. Los delegados de prevención.** Representan a los trabajadores en los temas de prevención. **Son personas que ya son representantes de los trabajadores** en la empresa y se encargan de esos temas de forma concreta.\n\n- En empresas de **hasta 30 trabajadores** hay **un solo representante**, el **delegado de personal**, que **será también el delegado de prevención**.\n- En empresas de **más de 30 trabajadores** hay varios delegados de personal, y **ellos deciden entre sí quién será el delegado de prevención**.\n- El número de delegados de prevención **crece con el tamaño** de la empresa. Ejemplos del manual: **entre 50 y 100 trabajadores → 2 delegados**; **entre 1.000 y 2.000 → 5 delegados**; **más de 4.000 → 8 delegados**.\n\n**Tareas principales de los delegados de prevención:**\n\n- **Colaborar** con la empresa para mejorar las actividades de prevención y **proponer medidas**.\n- **Ayudar** a que los trabajadores cumplan las normas.\n- **Opinar** sobre decisiones que le proponga el empresario, como las actividades de prevención o el nombramiento de encargados de las medidas de emergencia.\n- **Vigilar** que todos cumplan las normas.\n\nUn delegado de prevención **puede proponer que una parte del trabajo pare** cuando hay peligro grave que puede ocurrir en cualquier momento y en un tiempo corto. Debe **escribir un informe** explicando por qué. El **empresario puede rechazar la propuesta, pero tiene que decir los motivos**.\n\n**2. El Comité de Seguridad y Salud.** Se reúnen **en un mismo número** los representantes de los trabajadores y del empresario. Es **obligatorio en empresas de más de 50 trabajadores**.\n\nSus **dos tareas principales**:\n\n- **Participar** en la creación de los planes de prevención, **ponerlos en marcha** y **revisar su funcionamiento** cada cierto tiempo.\n- **Proponer** a la empresa una mejora de las condiciones o la **corrección de fallos**.',
[
 { anverso: '¿A partir de cuántos trabajadores es obligatorio el Comité de Seguridad y Salud?', reverso: 'En empresas de más de 50 trabajadores. Se compone a partes iguales de representantes de los trabajadores y del empresario.' },
 { anverso: 'En una empresa de hasta 30 trabajadores, ¿quién es el delegado de prevención?', reverso: 'El delegado de personal, que es el único representante de los trabajadores.' },
 { anverso: '¿Cuántos delegados de prevención tiene una empresa de entre 50 y 100 trabajadores?', reverso: 'Dos.' },
 { anverso: '¿Puede un delegado de prevención parar el trabajo?', reverso: 'Puede proponer que una parte pare ante peligro grave e inminente, mediante informe escrito. El empresario puede rechazarlo, pero motivándolo.' },
 { anverso: '¿Cuáles son las dos tareas principales del Comité de Seguridad y Salud?', reverso: 'Participar en los planes de prevención, ponerlos en marcha y revisarlos; y proponer mejoras o la corrección de fallos.' }
], [21, 22, 23]);

q('6.5', 2, 'El Comité de Seguridad y Salud es obligatorio en las empresas de:',
  ['Más de 50 trabajadores', 'Más de 30 trabajadores', 'Más de 100 trabajadores', 'Más de 250 trabajadores'], 0,
  'El umbral son 50 trabajadores. Los 30 trabajadores son el límite que separa al delegado de personal único, que es a la vez delegado de prevención, de las empresas con varios delegados de personal.', 23);

q('6.5', 3, 'En una empresa de hasta 30 trabajadores, el delegado de prevención:',
  ['Es el delegado de personal, que es el único representante de los trabajadores',
   'Lo designa el empresario entre la plantilla', 'Se elige por votación entre todos los trabajadores',
   'No existe: solo hay Comité de Seguridad y Salud'], 0,
  'Con hasta 30 trabajadores hay un único representante, el delegado de personal, que asume también la condición de delegado de prevención. Por encima de 30, los delegados de personal deciden entre ellos quién lo será.', 21);

q('6.5', 3, 'Según los ejemplos del manual, una empresa de entre 1.000 y 2.000 trabajadores debe tener:',
  ['5 delegados de prevención', '2 delegados de prevención', '8 delegados de prevención', '3 delegados de prevención'], 0,
  'El manual da tres referencias: de 50 a 100 trabajadores, 2 delegados; de 1.000 a 2.000, 5 delegados; y más de 4.000, 8 delegados. La escala crece, pero mucho menos que proporcionalmente.', 22);

q('6.5', 3, 'Cuando un delegado de prevención propone paralizar parte del trabajo por peligro grave e inminente:',
  ['Debe escribir un informe explicando los motivos, y el empresario puede rechazarlo motivadamente',
   'La paralización es automática y el empresario no puede oponerse',
   'Debe solicitarlo a la Inspección de Trabajo', 'Solo puede proponerlo el Comité de Seguridad y Salud'], 0,
  'El delegado propone, con informe escrito; el empresario puede rechazarlo, pero está obligado a dar los motivos. La orden de paralización sin más trámite corresponde al inspector de trabajo, que es otra figura.', 23);

q('6.5', 2, 'Entre los derechos del trabajador en prevención figura:',
  ['Parar en el trabajo cuando hay una situación de peligro importante que puede ocurrir en cualquier momento',
   'Elegir libremente sus equipos de protección individual',
   'Rechazar los controles médicos en todo caso', 'Designar al servicio de prevención de la empresa'], 0,
  'El derecho a interrumpir la actividad ante peligro grave e inminente es uno de los cuatro que enumera el manual, junto con la información y formación, la participación y los controles médicos.', 21);

tema('6.6', 'Obligaciones del trabajador y principios de la acción preventiva',
'**Obligaciones del trabajador.** Los trabajadores deben preocuparse de **su seguridad y su salud y de las de las personas afectadas por sus tareas** o por tareas que no han hecho. Todo dependerá de **la formación que tengan** y de **las instrucciones del empresario**.\n\nLas obligaciones más importantes:\n\n- **Usar correctamente los medios** para hacer su trabajo: máquinas, equipos, herramientas, vehículos o sustancias peligrosas.\n- **Usar correctamente los equipos de protección individual.**\n- **Usar correctamente los dispositivos de seguridad** de máquinas, equipos, herramientas o vehículos. **No desconectar esos equipos de seguridad nunca.**\n- **Informar a sus jefes y compañeros** de situaciones peligrosas y de cómo prevenir los riesgos.\n- **Colaborar con las obligaciones que indican las autoridades.**\n- **Colaborar con el empresario y con los encargados de la prevención.**\n\n> Ese «**no desconectar nunca**» los dispositivos de seguridad enlaza directamente con la NIC de Metro, que prohíbe conducir con el hombre muerto o el ATP anulados sin autorización.\n\n**Obligaciones del empresario.** Debe proteger a los trabajadores e incluir todas las medidas y actividades necesarias. Para ello aplica los **principios generales de la acción preventiva**:\n\n1. **Evitar los riesgos.**\n2. **Conocer y evaluar** los riesgos que no se pueden evitar.\n3. **Frenar los riesgos desde el principio**, antes de que pueda darse la situación peligrosa.\n4. **Adaptar el puesto de trabajo al trabajador**: darle las herramientas adecuadas, evitar trabajos repetitivos.\n5. **Tener en cuenta los cambios y la mejora** en las técnicas, máquinas y herramientas.\n6. **Sustituir lo peligroso** por opciones sin peligro o con muy poco peligro.\n7. **Hacer planes de prevención** en todos los lugares y para todas las personas.\n8. **Dar más importancia a las medidas que protegen a todos los trabajadores a la vez** frente a las que solo protegen uno a uno.\n9. **Dar las instrucciones correctas** a los trabajadores.\n\n> El principio 8 es el que explica por qué la **protección colectiva va siempre antes que la individual**. El EPI es el último recurso, no el primero.',
[
 { anverso: '¿Cuál es el primer principio de la acción preventiva?', reverso: 'Evitar los riesgos. Solo los que no pueden evitarse se conocen y evalúan.' },
 { anverso: '¿Por qué la protección colectiva va antes que la individual?', reverso: 'Porque uno de los principios de la acción preventiva da más importancia a las medidas que protegen a todos los trabajadores a la vez que a las que protegen uno a uno.' },
 { anverso: '¿Puede un trabajador desconectar un dispositivo de seguridad de una máquina?', reverso: 'Nunca. Es una de sus obligaciones expresas: usarlos correctamente y no desconectarlos.' },
 { anverso: '¿De qué depende el alcance de las obligaciones del trabajador?', reverso: 'De la formación que tenga en estos temas y de las instrucciones que le dé el empresario.' }
], [24, 25]);

q('6.6', 2, 'El primero de los principios generales de la acción preventiva es:',
  ['Evitar los riesgos', 'Evaluar los riesgos', 'Sustituir lo peligroso por lo menos peligroso',
   'Dar las instrucciones correctas a los trabajadores'], 0,
  'La jerarquía empieza por evitar: solo los riesgos que no pueden evitarse se conocen y evalúan. Sustituir lo peligroso y dar instrucciones son principios posteriores de la misma lista.', 25);

q('6.6', 3, 'Uno de los principios de la acción preventiva establece que hay que dar más importancia a:',
  ['Las medidas que protegen a todos los trabajadores a la vez frente a las que protegen uno a uno',
   'Las medidas que protegen individualmente a cada trabajador',
   'Las medidas de menor coste económico', 'Las medidas que exige expresamente la ley'], 0,
  'Ese principio es el fundamento de que la protección colectiva preceda a la individual. El equipo de protección individual se reserva para cuando el riesgo es inevitable o no puede reducirse con medidas colectivas.', 25);

q('6.6', 2, 'Respecto a los dispositivos de seguridad de máquinas, equipos y vehículos, el trabajador debe:',
  ['Usarlos correctamente y no desconectarlos nunca', 'Desconectarlos solo si entorpecen la tarea',
   'Desconectarlos con autorización verbal del encargado', 'Revisarlos periódicamente y sustituirlos'], 0,
  'La obligación es tajante: usarlos de forma correcta y no desconectarlos nunca. La revisión y sustitución corresponde a la empresa, no al trabajador.', 24);

q('6.6', 3, 'El alcance de las obligaciones del trabajador en prevención depende de:',
  ['La formación que tenga en estos temas y de las instrucciones que le dé el empresario',
   'Su antigüedad en la empresa', 'El convenio colectivo aplicable',
   'El tamaño de la empresa'], 0,
  'El manual condiciona expresamente el deber del trabajador a su formación y a las instrucciones recibidas. Es coherente con que la formación e información sean, a su vez, un derecho del trabajador y una obligación del empresario.', 24);

tema('6.7', 'Organismos públicos de seguridad y salud en el trabajo',
'Los organismos pueden ser **nacionales, autonómicos, europeos e internacionales**. Sus funciones son variadas: **vigilar el cumplimiento** de las normas y **poner sanciones**, **dar formación e información**, o **asesorar**.\n\n**Organismos nacionales:**\n\n**Instituto Nacional de Seguridad y Salud en el Trabajo.** El organismo **especializado de la Administración General del Estado en cuestiones científicas y técnicas**. Sus tareas: **asesorar** para proponer normas; **organizar cursos**, dar información y **poner en marcha estudios**; **dar apoyo y colaborar con la Inspección de Trabajo**; colaborar con organismos internacionales; favorecer el **intercambio de información**; **apoyar** a los organismos de las comunidades autónomas; dar apoyo técnico; y **asesorar a la Comisión Nacional de Seguridad y Salud en el Trabajo**.\n\n**Inspección de Trabajo y Seguridad Social.** Se encarga de **vigilar que empresas y trabajadores cumplen** las normas. Sus tareas:\n\n- **Vigilar** el cumplimiento y **proponer sanciones**. Dato clave: **los inspectores proponen las sanciones, pero solo pueden aplicarlas las autoridades laborales**, es decir, el **Ministerio de Trabajo**.\n- **Informar y aconsejar** a empresas y trabajadores.\n- Hacer **informes que pidan los jueces** en casos de accidentes y enfermedades laborales.\n- **Informar al Ministerio de Trabajo** sobre los accidentes **mortales, muy graves y graves**.\n- **Comprobar** que los servicios de prevención cumplen sus obligaciones.\n- **Ordenar que los trabajadores paren** cuando el inspector cree que hay **riesgo grave** que puede suceder en cualquier momento y muy rápido.\n\n> Contrasta las dos potestades de parar: el **delegado de prevención propone** (y el empresario puede rechazar motivadamente); el **inspector ordena**.\n\n**Comisión Nacional de Seguridad y Salud en el Trabajo.** **Asesora a las Administraciones públicas** para proponer políticas de prevención. La integran representantes de las **comunidades autónomas, la Administración General del Estado, los sindicatos y los empresarios**. También **coordina** las actuaciones de las administraciones implicadas: **Trabajo, Sanidad e Industria**.\n\n**Fundación Estatal para la Prevención de Riesgos Laborales.** Propone acciones para mejorar la seguridad y salud **en pequeñas empresas**: informar, dar cursos y asesorar.\n\n**Organismos autonómicos.** Aplican las normas en el territorio de su comunidad. En la **Comunidad de Madrid** se llama **Instituto Regional de Seguridad y Salud en el Trabajo**. Sus funciones: **investigar accidentes de trabajo**, **dar cursos** y **asesorar**. Son los que tienen **una relación más cercana** con trabajadores y empresas en el día a día.',
[
 { anverso: '¿Quién propone las sanciones y quién las aplica?', reverso: 'Los inspectores de trabajo las proponen; solo las autoridades laborales, es decir, el Ministerio de Trabajo, pueden aplicarlas.' },
 { anverso: '¿Cómo se llama el organismo autonómico de la Comunidad de Madrid?', reverso: 'Instituto Regional de Seguridad y Salud en el Trabajo.' },
 { anverso: '¿Quiénes integran la Comisión Nacional de Seguridad y Salud en el Trabajo?', reverso: 'Representantes de las comunidades autónomas, de la Administración General del Estado, de los sindicatos y de los empresarios.' },
 { anverso: '¿A qué tipo de empresas se dirige la Fundación Estatal para la Prevención de Riesgos Laborales?', reverso: 'A las pequeñas empresas.' },
 { anverso: '¿Sobre qué accidentes informa la Inspección al Ministerio de Trabajo?', reverso: 'Sobre los mortales, muy graves y graves. Y sobre otros cuando lo cree necesario.' }
], [32, 33, 34, 35]);

q('6.7', 3, 'En relación con las sanciones por incumplimiento de las normas de prevención:',
  ['Los inspectores de trabajo las proponen, pero solo las aplican las autoridades laborales',
   'Los inspectores las proponen y las aplican directamente',
   'Las propone el delegado de prevención y las aplica la Inspección',
   'Las impone el Instituto Nacional de Seguridad y Salud en el Trabajo'], 0,
  'El manual separa las dos funciones: propuesta por el inspector y aplicación por la autoridad laboral, el Ministerio de Trabajo. El Instituto Nacional es un organismo científico-técnico y de asesoramiento, sin potestad sancionadora.', 33);

q('6.7', 2, 'El organismo autonómico de prevención de riesgos laborales de la Comunidad de Madrid se denomina:',
  ['Instituto Regional de Seguridad y Salud en el Trabajo',
   'Instituto Nacional de Seguridad y Salud en el Trabajo',
   'Inspección de Trabajo y Seguridad Social de Madrid',
   'Comisión Regional de Seguridad y Salud'], 0,
  'El manual cita expresamente el Instituto Regional de Seguridad y Salud en el Trabajo como ejemplo de organismo autonómico. El Instituto Nacional es el equivalente estatal.', 35);

q('6.7', 3, 'Un inspector de trabajo que aprecia un riesgo grave e inminente puede:',
  ['Ordenar que los trabajadores paren de trabajar', 'Proponer al empresario que paralice el trabajo',
   'Solicitar al juez la paralización', 'Comunicarlo al delegado de prevención para que este lo proponga'], 0,
  'El inspector ordena, no propone. Quien propone y puede ver rechazada su propuesta de forma motivada es el delegado de prevención: es la diferencia clave entre ambas figuras.', 33);

q('6.7', 2, 'El Instituto Nacional de Seguridad y Salud en el Trabajo es:',
  ['El organismo especializado de la Administración General del Estado en cuestiones científicas y técnicas',
   'El organismo encargado de vigilar y sancionar el incumplimiento de las normas',
   'El organismo que asesora a las Administraciones para proponer políticas de prevención',
   'La fundación que apoya a las pequeñas empresas'], 0,
  'Es el organismo científico-técnico estatal. Vigilar y sancionar corresponde a la Inspección; asesorar sobre políticas, a la Comisión Nacional; y el apoyo a pequeñas empresas, a la Fundación Estatal.', 32);

tema('6.8', 'Protección colectiva y protección individual',
'**Protección colectiva.** Es la que **protege a más de una persona a la vez**. Son las medidas que protegen de los riesgos **que no pueden evitarse ni hacerse menos importantes**. Se dividen en **dos tipos**:\n\n**1. Medidas de protección en el lugar de trabajo:**\n\n- **Ventilación general**: limpiar el aire de un sitio cerrado **facilitando que entre y salga el aire**. Es adecuada cuando los contaminantes son **poco peligrosos y hay poca cantidad**: oficinas y talleres.\n- **Ventilación localizada**: **aspirar el aire contaminado en el sitio donde está**, evitando que la contaminación se extienda. Ejemplo: los extractores de las cocinas.\n- **Barandillas**: de materiales **rígidos y resistentes**. Su altura es de **entre 90 y 100 centímetros**. Deben tener una **protección intermedia** y un **rodapié** que impida que un objeto del suelo caiga sobre alguien abajo.\n- **Redes de seguridad**: protegen de **caídas de altura**. Sus dos cuestiones más importantes son el **montaje correcto** y el **mantenimiento**.\n\n**2. Medidas de protección para los equipos de trabajo:**\n\n- **Resguardos**: partes de una máquina que funcionan como **barrera**: una tapa, una pantalla, una valla.\n- **Dispositivos de protección**: elementos de seguridad de las máquinas, solos o junto a un resguardo. Ejemplos: **botones de parada de emergencia**, botones de bloqueo de altura, o los sistemas que **impiden que la máquina arranque hasta que la tapa esté cerrada**.\n- **Interruptor diferencial**: **desconecta la electricidad de forma inmediata**, por ejemplo si alguien toca un enchufe con los dedos mojados.\n- **Encerramientos para máquinas ruidosas**: aislar la máquina para eliminar la molestia del ruido al resto.\n- **Protecciones incorporadas en andamios**: deben estar **nivelados** y llevar barandillas, protecciones intermedias y rodapiés.\n\n**Protección individual.** **Protege solo al trabajador que la utiliza.** Se emplea **cuando el riesgo es inevitable o imposible de reducir con medidas de protección colectiva**. Los equipos se conocen como **EPI**.\n\nLos EPI se clasifican de **tres maneras**:\n\n- **Por sus características**: equipo hecho para que **lo lleve puesto o lo sostenga** una persona, para protegerse de uno o varios riesgos.\n- **Por las categorías indicadas en la ley.**\n- **Por las partes del cuerpo que cubren.**\n\n> El orden lógico es siempre el mismo: **primero se evita el riesgo, luego se protege colectivamente y, solo en último lugar, individualmente**.',
[
 { anverso: '¿Qué altura deben tener las barandillas de protección?', reverso: 'Entre 90 y 100 centímetros. Además, protección intermedia y rodapié.' },
 { anverso: '¿Para qué sirve el rodapié de una barandilla?', reverso: 'Para impedir que un objeto que esté en el suelo caiga sobre una persona que se encuentre abajo.' },
 { anverso: '¿Qué diferencia hay entre ventilación general y localizada?', reverso: 'La general facilita que entre y salga el aire de todo el recinto; la localizada aspira el aire contaminado en el punto donde se genera.' },
 { anverso: '¿Cuándo se recurre a un equipo de protección individual?', reverso: 'Cuando el riesgo es inevitable o imposible de reducir con medidas de protección colectiva.' },
 { anverso: '¿Qué hace un interruptor diferencial?', reverso: 'Desconecta la electricidad de forma inmediata, por ejemplo ante un contacto con las manos mojadas.' },
 { anverso: '¿Cuáles son las dos cuestiones más importantes de una red de seguridad?', reverso: 'Su montaje correcto, es decir que esté bien sujeta, y su mantenimiento.' }
], [135, 136, 137, 138, 140, 141, 142]);

q('6.8', 2, 'La altura de las barandillas de protección debe ser de:',
  ['Entre 90 y 100 centímetros', 'Entre 70 y 80 centímetros', 'Entre 100 y 120 centímetros', 'Al menos 150 centímetros'], 0,
  'El manual da la referencia de 90 a 100 cm, aproximadamente la altura de la cintura de una persona un poco alta. Además deben llevar protección intermedia y rodapié.', 138);

q('6.8', 3, 'El elemento de una barandilla destinado a impedir que un objeto situado en el suelo caiga sobre una persona que está abajo es:',
  ['El rodapié', 'La protección intermedia', 'La red de seguridad', 'El resguardo'], 0,
  'El rodapié cumple esa función concreta. La protección intermedia evita que una persona se cuele por el hueco entre el pasamanos y el suelo, y el resguardo es una barrera de máquina.', 138);

q('6.8', 2, 'La ventilación localizada consiste en:',
  ['Aspirar el aire contaminado en el sitio donde está, para que la contaminación no se extienda',
   'Facilitar que entre y salga el aire de todo el recinto',
   'Encerrar la fuente de contaminación en un local aislado',
   'Filtrar el aire mediante equipos de protección individual'], 0,
  'La localizada actúa en el foco, como el extractor de una cocina. La general renueva el aire de todo el recinto y solo es adecuada cuando los contaminantes son poco peligrosos y escasos.', 137);

q('6.8', 3, 'Un trabajador debe utilizar un equipo de protección individual cuando:',
  ['El riesgo es inevitable o imposible de reducir con medidas de protección colectiva',
   'Lo prefiera a las medidas colectivas', 'Existe cualquier riesgo, con independencia de otras medidas',
   'La empresa no dispone de servicio de prevención'], 0,
  'El EPI es el último escalón. Los principios de la acción preventiva dan prioridad a las medidas que protegen a todos a la vez, de modo que la protección individual entra solo cuando el riesgo no puede evitarse ni reducirse colectivamente.', 141);

q('6.8', 3, '¿Cuál de los siguientes es un dispositivo de protección de un equipo de trabajo, y no un resguardo?',
  ['El botón de parada de emergencia de una máquina', 'Una tapa que cubre el mecanismo',
   'Una pantalla protectora', 'Una valla alrededor de la máquina'], 0,
  'Los resguardos son barreras físicas: tapas, pantallas o vallas. Los dispositivos de protección son elementos de seguridad como los botones de parada de emergencia, los de bloqueo o los sistemas que impiden el arranque con la tapa abierta.', 139);

tema('6.9', 'Emergencias: tipos, gravedad y documentos',
'**Qué es una emergencia.** Un **imprevisto o situación repentina e inesperada** que afecta a la seguridad y puede provocar **daños en las personas, los edificios, las máquinas o el medio ambiente**: un incendio, una explosión, una inundación.\n\n**Para qué sirven las medidas de emergencia:**\n\n- Dar una **respuesta rápida y adecuada**.\n- **Proteger o salvar** la seguridad de trabajadores y personas afectadas.\n- **Reducir los daños** a edificios, máquinas o medio ambiente.\n\n**Los tipos de emergencia, por su origen:**\n\n- **Por el negocio o actividad** de la empresa: fuego, explosión o vertido tóxico en una empresa química.\n- **Relacionadas con máquinas o tecnología**: un derrumbamiento en una obra, un accidente de tráfico de un camión.\n- **De la propia naturaleza**: terremotos, inundaciones, nevadas, rayos.\n- **Por la situación social o del país**: una amenaza de bomba, violencia en la calle.\n\n**Los tres grados de gravedad, de menos a más:**\n\n| Grado | Alcance | Ejemplo |\n|---|---|---|\n| **Conato de emergencia** | Lo resuelven **las personas del lugar con los medios que tienen** | Un extintor contra un fuego en una papelera |\n| **Emergencia parcial** | Afecta a **una parte** de la empresa; hay que pedir ayuda a **un grupo más preparado dentro de la empresa** | Un incendio en varios despachos, controlable **sin llamar a los bomberos** |\n| **Emergencia general** | Afecta a **toda** la empresa; puede obligar a **parar y salir del edificio**; hay que **pedir ayuda fuera** | Un incendio que exige llamar a **los bomberos y al 112** |\n\n**Los documentos:**\n\n- **Plan de Emergencias**: el documento que explica **por escrito el modo de actuación**: qué hacer, **qué personas se encargan** y **qué medios** tiene la empresa.\n- **Plan de Autoprotección**: cuando el negocio **puede tener riesgos fuera de la empresa**, o cuando la empresa tiene un **edificio grande con muchos trabajadores**. Contempla cómo actuar para reducir daños **dentro y fuera** de la empresa.\n- **Medidas de emergencia**: documento que detalla qué hacer en las situaciones de emergencia que pueden ocurrir.\n\n**Los pasos para organizarse:** estudiar los tipos de emergencia y su probabilidad; **escribir el Plan de Emergencias**; **dar formación e información** a los trabajadores; **revisar los recursos** (extintores, mangueras, botiquines); y **hacer simulacros**, es decir, **ensayos para que todos aprendan qué hacer**.',
[
 { anverso: '¿Qué es un conato de emergencia?', reverso: 'La situación que pueden resolver las personas del lugar con los medios que tienen, como apagar con un extintor un fuego en una papelera.' },
 { anverso: '¿Qué distingue a la emergencia general de la parcial?', reverso: 'La general afecta a toda la empresa, puede obligar a evacuar y exige pedir ayuda fuera. La parcial afecta a una parte y se resuelve con medios internos.' },
 { anverso: '¿Cuándo hace falta un Plan de Autoprotección?', reverso: 'Cuando la actividad puede generar riesgos fuera de la empresa, o cuando esta tiene un edificio grande con muchos trabajadores.' },
 { anverso: '¿Qué es un simulacro?', reverso: 'Un ensayo para que todos los trabajadores aprendan qué hacer en una situación de emergencia.' },
 { anverso: '¿Cuáles son los cuatro orígenes posibles de una emergencia?', reverso: 'La actividad de la empresa; las máquinas o la tecnología; la propia naturaleza; y la situación social o del país.' }
], [151, 152, 153, 154, 155, 156]);

q('6.9', 2, 'Una emergencia que afecta a una parte de la empresa y que puede controlarse pidiendo ayuda a un grupo más preparado dentro de ella, sin llamar a los bomberos, es:',
  ['Una emergencia parcial', 'Un conato de emergencia', 'Una emergencia general', 'Un simulacro'], 0,
  'La emergencia parcial afecta a una parte y requiere más tiempo, personas y medios, pero se resuelve internamente. El conato lo resuelven las personas del lugar con los medios que tienen, y la general obliga a pedir ayuda externa.', 155);

q('6.9', 3, 'Un incendio que obliga a llamar a los bomberos y al 112, con evacuación del edificio, se clasifica como:',
  ['Emergencia general', 'Emergencia parcial', 'Conato de emergencia', 'Emergencia externa'], 0,
  'La necesidad de ayuda exterior y la posible evacuación caracterizan a la emergencia general, el grado más alto de los tres que establece el manual.', 155);

q('6.9', 2, 'El documento que explica por escrito el modo de actuación en una emergencia, qué personas se encargan y qué medios tiene la empresa es:',
  ['El Plan de Emergencias', 'El Plan de Autoprotección', 'La evaluación de riesgos', 'El plan de prevención'], 0,
  'Ese es el Plan de Emergencias. El Plan de Autoprotección es un documento que puede integrarse en él y que se exige cuando la actividad puede generar riesgos fuera de la empresa o el edificio es grande y con muchos trabajadores.', 152);

q('6.9', 3, 'Un terremoto o una nevada se clasifican, por su origen, como emergencia:',
  ['De la propia naturaleza', 'Relacionada con máquinas o tecnología',
   'Por la actividad de la empresa', 'Por la situación social o del país'], 0,
  'El manual distingue cuatro orígenes: la actividad de la empresa, las máquinas o la tecnología, la propia naturaleza y la situación social o del país, donde encajarían una amenaza de bomba o la violencia en la calle.', 153);

tema('6.10', 'Primeros auxilios: el método PAS',
'**Qué son.** Los pasos y técnicas para ayudar a una persona que **sufre un accidente o tiene una enfermedad de repente**. Deben ser:\n\n- **Inmediatos**: se dan **en el momento** en que sucede.\n- **Limitados**: utilizan **solo algunas técnicas médicas**. **Los socorristas nunca sustituyen a los médicos.**\n- **Temporales**: duran **poco tiempo, solo hasta que llegan los médicos**.\n- **Hechos por socorristas** o personas formadas.\n\n**Consejos para dar primeros auxilios:** mantener la calma; **evitar que la gente rodee** a la persona; controlar la situación y tomar decisiones; **llamar a los servicios de emergencia**; **no mover a la persona** hasta ver su situación —**solo se le mueve cuando hay un peligro más importante**, como un incendio—; examinarla; calmarla; **cubrirla y mantenerla caliente**; moverla de forma correcta y en ambulancia; y **no darle medicamentos**.\n\n**El método PAS.** Tres pasos, en este orden: **P**roteger, **A**visar, **S**ocorrer.\n\n**Paso 1. Proteger.** Antes de tomar ninguna decisión, asegurarse de que **la persona accidentada y nosotros estamos fuera de peligro**. Con humo o escape de gas, protegerse nariz y boca. Con peligro eléctrico, **evitar el agua**: manos secas, evitar suelos mojados y **desconectar todos los enchufes posibles**.\n\n**Paso 2. Avisar.** Llamar a los servicios de emergencias. El teléfono es **el mismo para toda España: 112**. Hay que dar la información de forma correcta y clara: **desde dónde llamas** y **dónde ha sido el accidente**. Es importante **contestar todas las preguntas** y **no cortar la comunicación hasta que los médicos lo digan**.\n\n**Paso 3. Socorrer.** Hacer unas pequeñas comprobaciones: **¿Respira? ¿Sangra? ¿Está despierto y responde?** Y **tomar el pulso**, poniendo **dos dedos sobre el lado derecho del cuello**. Después de la llamada, se dan los primeros auxilios hasta que lleguen los servicios de emergencia.\n\n> Matiz del manual: aunque el orden es Proteger–Avisar–Socorrer, el texto precisa que **esas comprobaciones (respira, sangra, responde, pulso) hay que hacerlas antes de llamar**, porque los médicos preguntarán por ellas.\n\n**El socorrista.** Es quien atiende **en primer lugar** y hace de **persona de contacto** entre el accidentado y los médicos. La ley dice que **en una empresa tiene que haber socorristas, pero no dice cuántos**. Es **recomendable uno por cada 50 trabajadores**, y a veces **dos por cada 50** cuando hay máquinas o herramientas peligrosas. Además, **debe haber un responsable de emergencias**.\n\nPara calcular cuántos hacen falta se tiene en cuenta: el **número de trabajadores**, en **cuántos edificios** están repartidos, **qué tipos de trabajos** hay, los **turnos de trabajo**, **cuánto tardan en llegar** los servicios médicos y si hay **épocas con menos gente**.',
[
 { anverso: '¿Qué significan las siglas PAS?', reverso: 'Proteger, Avisar y Socorrer, en ese orden.' },
 { anverso: '¿Cuál es el teléfono de emergencias en toda España?', reverso: 'El 112.' },
 { anverso: '¿Cuándo se puede mover a una persona accidentada?', reverso: 'Solo cuando hay un peligro más importante, como un incendio. Si no, no se mueve hasta ver su situación.' },
 { anverso: '¿Se le pueden dar medicamentos a la persona accidentada?', reverso: 'No.' },
 { anverso: '¿Cuántos socorristas exige la ley en una empresa?', reverso: 'La ley obliga a que los haya, pero no dice cuántos. Es recomendable uno por cada 50 trabajadores, y dos por cada 50 si hay máquinas o herramientas peligrosas.' },
 { anverso: '¿Dónde se toma el pulso según el manual?', reverso: 'Poniendo dos dedos sobre el lado derecho del cuello.' }
], [210, 211, 212, 213, 214, 215]);

q('6.10', 1, 'Las siglas PAS, en primeros auxilios, corresponden a:',
  ['Proteger, Avisar y Socorrer', 'Prevenir, Atender y Sanar',
   'Parar, Alertar y Sostener', 'Proteger, Atender y Salvar'], 0,
  'El orden es Proteger, Avisar y Socorrer, y ese orden importa: protegerse primero evita convertirse en una segunda víctima, y avisar antes de socorrer pone en marcha la ayuda profesional cuanto antes.', 212);

q('6.10', 2, 'Ante una persona accidentada, la regla general es:',
  ['No moverla hasta ver su situación, salvo que exista un peligro más importante como un incendio',
   'Trasladarla de inmediato a un lugar cómodo', 'Moverla solo si está inconsciente',
   'Sentarla y darle agua'], 0,
  'El manual admite el movimiento únicamente cuando hay un peligro mayor. Entre los consejos figura además cubrir a la persona y mantenerla caliente, calmarla y no darle medicamentos.', 211);

q('6.10', 3, 'Según el manual, las comprobaciones de si respira, sangra, responde y tiene pulso deben hacerse:',
  ['Antes de llamar a los servicios de emergencia, porque los médicos preguntarán por ellas',
   'Después de que lleguen los servicios de emergencia', 'Solo si la persona está inconsciente',
   'Únicamente por personal sanitario'], 0,
  'El manual lo precisa expresamente: hay que hacer esas pruebas antes de llamar, porque los médicos preguntarán si está consciente, si respira y si tiene pulso. Tras la llamada se continúa con los primeros auxilios hasta que lleguen.', 214);

q('6.10', 2, 'Respecto al número de socorristas en una empresa, la ley:',
  ['Obliga a que los haya, pero no dice cuántos', 'Exige uno por cada 50 trabajadores',
   'Exige dos por cada 50 trabajadores', 'No obliga a tener socorristas'], 0,
  'La ley impone su existencia sin fijar número. Lo de uno por cada 50 trabajadores es una recomendación, que sube a dos por cada 50 cuando hay máquinas o herramientas peligrosas.', 215);

q('6.10', 3, 'En el paso «Proteger» ante un accidente con riesgo eléctrico, hay que:',
  ['Tener las manos secas, evitar suelos mojados y desconectar todos los enchufes posibles',
   'Retirar de inmediato a la víctima del punto de contacto',
   'Echar agua para enfriar la zona', 'Esperar a que llegue el 112 sin actuar'], 0,
  'Protegerse es siempre lo primero: manos secas, evitar el agua y cortar la corriente. Tocar a la víctima antes de eliminar el riesgo eléctrico convertiría al socorrista en una segunda víctima.', 213);

q('6.10', 2, 'Al llamar al 112, el manual indica que es importante:',
  ['Contestar todas las preguntas y no cortar la comunicación hasta que los médicos lo digan',
   'Colgar rápido para dejar la línea libre', 'Llamar solo si la persona está inconsciente',
   'Dar únicamente la dirección exacta y colgar'], 0,
  'El manual insiste en dar la información de forma correcta y clara —desde dónde se llama y dónde ha sido el accidente— y en no cortar la comunicación hasta que lo indiquen los servicios médicos.', 213);

tema('6.11', 'Riesgos eléctricos',
'**Contacto directo.** Ocurre cuando una persona **toca una parte de la instalación eléctrica**, por ejemplo un cable en mal estado. Dos reglas: **cuanto más dure el contacto, peor**, y **cuanto más intensa sea la corriente, peor**. La **tensión es mayor cuando entra en contacto con el agua**, de ahí el peligro de las manos húmedas.\n\n**Medidas frente al contacto directo:**\n\n- **Alejar** cables y enchufes de los lugares de trabajo y de paso.\n- Poner **barreras o protecciones**: pantallas, redes.\n- **Cubrir con aislantes** las partes con tensión.\n- Utilizar **tensiones de seguridad**, instalaciones que evitan la electrocución en sitios húmedos.\n\n**Contacto indirecto.** Ocurre cuando hay un **fallo en el aislamiento** de máquinas, piezas o lugares conectados a la electricidad.\n\n**Medidas frente al contacto indirecto:**\n\n- **Toma de tierra** para máquinas e instalaciones.\n- **Interruptor diferencial**, que **desconecta la corriente cuando detecta un fallo de aislamiento**.\n- **Doble aislamiento**, **lo más adecuado para herramientas eléctricas portátiles** como taladradoras o sierras: una protección de plástico que impide que un defecto del aparato afecte al trabajador. Lleva su propio símbolo.\n\n> La clave para distinguirlos: en el **directo** tocas algo que **debe** tener corriente; en el **indirecto**, algo que **no debería** tenerla pero la tiene por un fallo de aislamiento.\n\n**Arcos eléctricos.** Un arco es una **descarga de corriente** que aparece **en el aire**, **entre dos objetos** y **entre dos elementos conductores con diferente potencia** —por ejemplo entre un cable y una pieza metálica cercana. Puede producirse **por un fallo técnico o por un error humano**, como una herramienta que se cae. Genera **mucho calor**, **a veces una explosión** y **radiaciones peligrosas**.\n\nMedidas: retirar objetos conductores, ajustar los circuitos, **conectar y desconectar a distancia con controles remotos**, y si no es posible, **aumentar la separación** entre la zona de trabajo y las conexiones. Cuando nada de eso baste, **equipos de protección individual**: guantes, cascos con pantalla facial y ropa de protección.\n\n**Las cinco normas para trabajar en una instalación eléctrica** —el equivalente de las «cinco reglas de oro»:\n\n1. **Desconectar** todas las tomas de electricidad.\n2. **Evitar cualquier posibilidad de reconexión accidental**, por ejemplo bloqueando los aparatos que cortan la corriente.\n3. **Comprobar que no hay electricidad** antes de empezar.\n4. **Dejar en posición segura** cualquier cable o instalación que pueda tener corriente: con **toma de tierra** o **poniéndolo en cortocircuito**.\n5. **Señalizar la zona** de trabajo para impedir el paso de otras personas.',
[
 { anverso: '¿Qué diferencia hay entre contacto directo e indirecto?', reverso: 'Directo: tocas una parte de la instalación que sí tiene corriente. Indirecto: tocas algo que no debería tenerla, por un fallo de aislamiento.' },
 { anverso: '¿Qué protección es la más adecuada para herramientas eléctricas portátiles?', reverso: 'El doble aislamiento.' },
 { anverso: '¿Qué es un arco eléctrico?', reverso: 'Una descarga de corriente en el aire, entre dos objetos y entre dos elementos conductores con diferente potencia. Produce mucho calor, a veces explosión y radiaciones.' },
 { anverso: 'Enumera las cinco normas para trabajar en una instalación eléctrica.', reverso: 'Desconectar; evitar la reconexión accidental; comprobar que no hay tensión; dejar en posición segura con toma de tierra o cortocircuito; y señalizar la zona.' },
 { anverso: '¿Qué hace un interruptor diferencial?', reverso: 'Desconecta la corriente cuando detecta un fallo de aislamiento y hay peligro de electrocución.' }
], [54, 55, 56, 57]);

q('6.11', 3, 'El doble aislamiento es la medida de protección más adecuada para:',
  ['Las herramientas eléctricas portátiles, como taladradoras o sierras',
   'Las instalaciones fijas de alta tensión', 'Los locales húmedos',
   'Los trabajos con riesgo de arco eléctrico'], 0,
  'El manual lo señala expresamente para las portátiles: una protección de plástico que impide que un defecto del aparato alcance al trabajador. Para los locales húmedos la medida propia son las tensiones de seguridad.', 55);

q('6.11', 2, 'Tocar un cable en mal estado constituye un:',
  ['Contacto directo', 'Contacto indirecto', 'Arco eléctrico', 'Cortocircuito'], 0,
  'El contacto directo es con una parte de la instalación que efectivamente tiene tensión. El indirecto se produce con elementos que no deberían tenerla y la tienen por un fallo de aislamiento.', 54);

q('6.11', 3, '¿Cuál de estas NO es una de las cinco normas para trabajar en una instalación eléctrica?',
  ['Trabajar siempre acompañado de un segundo operario', 'Desconectar todas las tomas de electricidad',
   'Comprobar que no hay electricidad antes de empezar', 'Señalizar la zona de trabajo'], 0,
  'Las cinco son: desconectar, evitar la reconexión accidental, comprobar ausencia de tensión, dejar en posición segura mediante toma de tierra o cortocircuito, y señalizar. El acompañamiento no figura entre ellas.', 57);

q('6.11', 3, 'Un arco eléctrico puede producirse:',
  ['Por un fallo técnico o por un error de una persona, como la caída accidental de una herramienta',
   'Únicamente por un fallo del aislamiento de una máquina',
   'Solo en instalaciones de alta tensión', 'Solo cuando hay humedad en el ambiente'], 0,
  'El manual admite ambas causas y pone precisamente el ejemplo de la herramienta que cae. El fallo de aislamiento es la causa del contacto indirecto, que es otro riesgo distinto.', 56);

q('6.11', 2, 'Frente al contacto indirecto con la electricidad, una medida de protección es:',
  ['La toma de tierra de máquinas e instalaciones', 'Cubrir con aislantes las partes con tensión',
   'Alejar los cables de los lugares de paso', 'Utilizar tensiones de seguridad'], 0,
  'Toma de tierra, interruptor diferencial y doble aislamiento son las medidas frente al contacto indirecto. Cubrir con aislantes, alejar cables y usar tensiones de seguridad corresponden al contacto directo.', 55);

tema('6.12', 'Incendios: fuego, incendio y agentes extintores',
'**Fuego frente a incendio.** En ambos hay llamas, humo o las dos cosas, pero:\n\n| | Fuego | Incendio |\n|---|---|---|\n| Tamaño | **Pequeño** | **Grande** |\n| Alcance | En un **lugar concreto** | **Se extiende sin control** por muchos sitios |\n| Duración | **Poco tiempo** | **Más tiempo** |\n| Control | **Se puede controlar** | Puede **provocar muertes** y destruir edificios y zonas naturales |\n\n**Los cuatro elementos** que deben concurrir para que haya un incendio:\n\n1. **Combustible**: el material o sustancia que arde — gasolina, madera, gas butano.\n2. **Comburente**: la sustancia que permite que el combustible arda. El habitual es **el oxígeno del aire**. En un sitio sin aire no es posible hacer fuego.\n3. **Foco de ignición**: el lugar o la actividad donde se provoca el fuego — un fallo eléctrico, una chispa.\n4. **Reacción en cadena**: el enlace de un fuego con otro combustible y así sucesivamente hasta invadir todo un espacio.\n\n**Dos familias de medidas:**\n\n- **Prevención** → sirven para **evitar** los incendios.\n- **Protección** → sirven para **controlar** un incendio y **apagarlo**.\n\n**Medidas de prevención**, entre otras: guardar separados y alejados los productos combustibles o inflamables; usar **recipientes de cierre hermético** para restos inflamables; pedir **permisos de trabajo especiales** para mantener o reparar instalaciones por las que ha habido productos inflamables; **prohibir fumar y llevar mecheros**; alejar materiales de focos de calor; **comprobar al acabar la jornada que todo está desconectado**; no mezclar líquidos o gases de reacción desconocida; e **informar a otras empresas** que trabajen en el mismo edificio.\n\n**Medidas activas de protección:**\n\n- **Sistemas de detección y alarma**: pulsadores, detectores de humos.\n- **Sistemas de extinción**: bocas de incendio con mangueras, extintores, sistemas automáticos.\n\n**Los agentes extintores y para qué sirve cada uno.** Es la tabla que más se pregunta del tema:\n\n| Agente | Sólidos | Líquidos | Gases | Otros |\n|---|---|---|---|---|\n| **Agua a chorro** | Sí | — | — | — |\n| **Agua en spray** | Sí | Sí | — | — |\n| **Espuma** | Sí | Sí | — | — |\n| **Anhídrido carbónico** | Sí | Sí | — | — |\n| **Polvo tipo ABC** | Sí | Sí | **Sí** | — |\n| **Polvo tipo BC** | — | Sí | **Sí** | — |\n| **Polvo para metales** | — | — | — | Fuegos en **metales** |\n| **Productos específicos** | — | — | — | **Grasas y aceites de cocina** |\n\n> Regla práctica: el **único que sirve para las tres categorías** —sólidos, líquidos y gases— es el **polvo ABC**. El **agua a chorro** es el más limitado: **solo sólidos**.',
[
 { anverso: '¿Cuáles son los cuatro elementos necesarios para que haya un incendio?', reverso: 'Combustible, comburente (normalmente el oxígeno del aire), foco de ignición y reacción en cadena.' },
 { anverso: '¿Qué diferencia hay entre medidas de prevención y de protección frente a incendios?', reverso: 'Las de prevención sirven para evitar el incendio; las de protección, para controlarlo y apagarlo.' },
 { anverso: '¿Qué agente extintor sirve para sólidos, líquidos y gases?', reverso: 'El polvo tipo ABC.' },
 { anverso: '¿Para qué sirve el agua a chorro?', reverso: 'Solo para materiales sólidos, como la madera.' },
 { anverso: '¿Qué distingue un fuego de un incendio?', reverso: 'El fuego es pequeño, localizado, breve y controlable. El incendio es grande, se extiende sin control, dura más y puede causar muertes.' },
 { anverso: '¿Cuál es el comburente habitual?', reverso: 'El oxígeno que hay en el aire.' }
], [58, 59, 60, 61, 62]);

q('6.12', 2, 'El único agente extintor de la lista del manual que sirve para sólidos, líquidos y gases es:',
  ['El polvo tipo ABC', 'El polvo tipo BC', 'La espuma', 'El anhídrido carbónico'], 0,
  'El ABC cubre las tres categorías. El BC deja fuera los sólidos, y la espuma y el anhídrido carbónico sirven para sólidos y líquidos, pero no para gases.', 62);

q('6.12', 3, 'El agua a chorro está indicada para:',
  ['Materiales sólidos únicamente', 'Sólidos y líquidos', 'Líquidos y gases', 'Cualquier tipo de fuego'], 0,
  'Es el agente más limitado de la tabla: solo sólidos. El agua en spray amplía su uso a los líquidos, igual que la espuma y el anhídrido carbónico.', 62);

q('6.12', 2, 'El comburente en un incendio es:',
  ['La sustancia que permite que el combustible arda, habitualmente el oxígeno del aire',
   'El material o sustancia que arde', 'El lugar o actividad donde se provoca el fuego',
   'El enlace de un fuego con otro combustible'], 0,
  'El comburente permite la combustión, y el habitual es el oxígeno del aire. Lo que arde es el combustible, el punto de origen es el foco de ignición y la propagación es la reacción en cadena.', 58);

q('6.12', 3, 'Los detectores de humos y los pulsadores de alarma son:',
  ['Medidas activas de protección, de detección y alarma', 'Medidas de prevención frente a incendios',
   'Agentes extintores', 'Sistemas automáticos de extinción'], 0,
  'La protección se divide en detección y alarma —pulsadores y detectores— y extinción —bocas de incendio, extintores y sistemas automáticos. La prevención agrupa las medidas para que el incendio no llegue a producirse.', 61);

q('6.12', 3, 'Prohibir fumar y llevar mecheros cuando se accede a un lugar con materiales inflamables es una medida de:',
  ['Prevención frente a incendios', 'Protección frente a incendios',
   'Extinción', 'Detección y alarma'], 0,
  'La prevención busca evitar que el incendio se produzca, actuando sobre el foco de ignición. La protección entra en juego cuando el fuego ya existe, para controlarlo y apagarlo.', 59);

tema('6.13', 'Agentes químicos, físicos y biológicos',
'El tema de los **riesgos del entorno de trabajo** se organiza en tres familias de agentes: **químicos**, **físicos** y **biológicos**. En los tres casos el manual sigue el mismo esquema: qué son, cómo provocan daños, cómo se evalúan y qué medidas de prevención y control caben.\n\n**Qué es un agente químico.** Productos o sustancias presentes en el lugar de trabajo. Pueden ser:\n\n- **Gases**, como el butano.\n- **Sólidos**, como el polvo de la madera.\n- **Líquidos**, como el alcohol.\n\nUn trabajador puede encontrarlos como **materia prima** para fabricar un producto, como **producto** de la fábrica, o como **residuo** para tirar.\n\n**Exposición.** Cuando una persona ha tenido contacto con un agente químico, se dice que ha estado **expuesta**.\n\n**Las cuatro vías de entrada en el cuerpo:**\n\n1. **Por la respiración** — **es lo más habitual**: el agente está en el aire y el trabajador lo respira.\n2. **Por la piel** — al tocar un objeto contaminado, o por salpicadura o mancha. Puede ser por la piel, **por una herida o por los ojos**.\n3. **Por la boca** — al comer o beber líquidos contaminados. Suele pasar por **no lavarse las manos**, por comer o beber mientras se trabaja, o por morder o chupar un objeto contaminado.\n4. **Por una entrada profunda a través de la piel** — un pinchazo, un corte o una herida profunda. Los trabajadores deben **cubrirse las heridas**.\n\n**De qué dependen los efectos.** De **dos cuestiones**:\n\n- **De lo perjudicial que sea el agente**, es decir, de su toxicidad. Según ello puede ser **corrosivo** (destruye o quema la piel), **irritante**, **acumularse en los pulmones**, **asfixiar** al ocupar el lugar del aire limpio, **adormecer** —sensación que suele desaparecer al desaparecer el agente—, **producir alergia**, **producir cáncer, problemas genéticos o malformaciones**, o **afectar a órganos importantes** como el hígado o el riñón.\n- **Del tiempo de contacto**, y también de **la cantidad**: cuanta mayor cantidad y más tiempo, **más efectos perjudiciales**.\n\n**Etiquetado.** **Todos** los agentes químicos deben llevar **una etiqueta con la información sobre los efectos perjudiciales para la salud**.',
[
 { anverso: '¿Cuál es la vía de entrada más habitual de un agente químico?', reverso: 'La respiratoria: el agente está en el aire y el trabajador lo respira.' },
 { anverso: 'Enumera las cuatro vías de entrada de un agente químico.', reverso: 'Respiratoria, por la piel, por la boca y por entrada profunda a través de la piel (pinchazo, corte o herida profunda).' },
 { anverso: '¿De qué dos cuestiones dependen los efectos de un agente químico?', reverso: 'De lo tóxico que sea el agente y del tiempo y la cantidad de la exposición.' },
 { anverso: '¿En qué tres estados puede presentarse un agente químico?', reverso: 'Gas, sólido y líquido.' },
 { anverso: '¿Qué significa que un agente químico sea corrosivo?', reverso: 'Que destruye o quema la piel cuando entra en contacto con ella.' }
], [83, 84, 85]);

q('6.13', 2, 'La vía de entrada más habitual de los agentes químicos en el cuerpo es:',
  ['La respiratoria', 'La dérmica', 'La digestiva', 'La parenteral, por pinchazo o corte'], 0,
  'El manual señala expresamente la respiración como la más habitual, porque el agente está en el aire del puesto de trabajo. Las otras tres son la piel, la boca y la entrada profunda a través de una herida.', 84);

q('6.13', 3, 'Que un trabajador ingiera un agente químico por no lavarse las manos antes de comer corresponde a la vía:',
  ['Por la boca', 'Por la piel', 'Por la respiración', 'Por entrada profunda a través de la piel'], 0,
  'El manual pone precisamente ese ejemplo al describir la vía por la boca, junto con comer o beber mientras se trabaja y morder o chupar un objeto contaminado.', 84);

q('6.13', 3, 'Un agente químico que destruye o quema la piel al entrar en contacto con ella se describe como:',
  ['Corrosivo', 'Irritante', 'Asfixiante', 'Alergénico'], 0,
  'El corrosivo destruye o quema; el irritante solo irrita. El asfixiante actúa ocupando el lugar del aire limpio y el alergénico provoca reacciones como problemas respiratorios o erupciones.', 85);

q('6.13', 2, 'Todos los agentes químicos deben llevar:',
  ['Una etiqueta con la información sobre sus efectos perjudiciales para la salud',
   'Un certificado del servicio de prevención', 'Una ficha de vigilancia de la salud',
   'Una autorización de la autoridad sanitaria'], 0,
  'El etiquetado con los efectos sobre la salud es obligatorio para todos ellos, y es la primera fuente de información del trabajador sobre lo que está manejando.', 85);

tema('6.14', 'Carga de trabajo, fatiga e insatisfacción laboral',
'**Carga de trabajo.** El **conjunto de esfuerzos físicos y mentales** que hace un trabajador **durante su jornada**.\n\n> Dos ideas contra el prejuicio habitual: la carga de trabajo **no es solo esfuerzo físico** —también mental—, y **no es necesariamente algo malo**. Será buena o mala según **la cantidad de tareas, su dificultad y el tiempo disponible**, y también según **el entrenamiento y la preparación** de la persona.\n\n**Carga física.** Los **tres tipos de movimientos** que hace una persona en el trabajo:\n\n1. **Mover el cuerpo o alguna de sus partes** — andar, correr.\n2. **Transportar o mover otros objetos** — levantar algo con los brazos, alcanzar un objeto.\n3. **Mantener la postura del cuerpo** — brazos levantados, estar de pie.\n\nAl realizarlos, el cuerpo se activa: cambian **los músculos, el latido del corazón, la respiración y la tensión nerviosa**.\n\nDentro de la carga física el manual estudia los **esfuerzos físicos**, la **postura de trabajo**, la **manipulación de cargas** y los **movimientos repetitivos**.\n\n**Recomendaciones para evitar una carga mental excesiva:** mensajes **sencillos y claros** al dar las tareas; **formación adecuada**; facilitar la realización de las tareas organizando bien el puesto; **organizar el trabajo con descansos** en los que el trabajador pueda **irse del puesto** o **elegir cuándo hacerlos**; **dar posibilidades de participar** en otros temas cuando las tareas son repetitivas y simples; y **facilitar el cambio de puesto** cuando no hay margen de mejora.\n\n**La fatiga.** Es un **efecto de la carga de trabajo**. Sucede cuando se ha trabajado un tiempo **sin poder descansar lo suficiente** para volver a hacer el mismo trabajo. Con fatiga, **la capacidad de trabajar es menor**.\n\n> La fatiga es **una llamada de atención del cuerpo**: avisa de que necesita descanso para seguir.\n\n| | **Fatiga normal** | **Fatiga crónica** |\n|---|---|---|\n| Cuándo | Tras un día de mucho trabajo | Carga **muy alta y continua**, sin poder recuperarse |\n| Síntomas | Cansancio, sueño, **dificultad para estar atento**, **movimientos torpes** | Facilidad para **enfadarse**, **depresión**, falta de energía, **dolor de cabeza y mareos**, dificultad para dormir, **falta de ganas de comer** |\n| Recuperación | **Se recupera con descanso** o alternando tareas duras con sencillas | **NO se recupera con una pausa o un descanso** |\n| Alcance | Aparece en el trabajo o al terminar | Los síntomas **duran después de la jornada** y se notan **al levantarse al día siguiente**. Provoca **más absentismo** y problemas personales y familiares |\n\n**Insatisfacción laboral.** La **sensación personal de descontento con el trabajo**. La **satisfacción** depende de cómo es el trabajo **y de cómo es el trabajador**. La **personalidad** marca el límite de cada uno, y en ella influyen **otras experiencias laborales previas, la vida personal, la edad y la formación**.',
[
 { anverso: '¿Qué es la carga de trabajo?', reverso: 'El conjunto de esfuerzos físicos y mentales que hace un trabajador durante su jornada.' },
 { anverso: '¿Cuáles son los tres tipos de movimientos de la carga física?', reverso: 'Mover el cuerpo o partes de él; transportar o mover objetos; y mantener la postura.' },
 { anverso: '¿Qué diferencia esencial hay entre fatiga normal y crónica?', reverso: 'La normal se recupera con descanso; la crónica no se recupera con una pausa y sus síntomas persisten al día siguiente.' },
 { anverso: 'Nombra tres síntomas de la fatiga crónica.', reverso: 'Facilidad para enfadarse, depresión, falta de energía, dolor de cabeza y mareos, dificultad para dormir o falta de apetito.' },
 { anverso: '¿Qué es la fatiga, según el manual?', reverso: 'Un efecto de la carga de trabajo y una llamada de atención del cuerpo, que avisa de que necesita descansar.' },
 { anverso: '¿De qué depende la satisfacción laboral?', reverso: 'De cómo es el trabajo y de cómo es el trabajador. En la personalidad influyen sus experiencias previas, su vida personal, su edad y su formación.' }
], [115, 116, 125, 126, 127, 128]);

q('6.14', 2, 'La diferencia esencial entre la fatiga normal y la fatiga crónica es que:',
  ['La normal se recupera con descanso y la crónica no se recupera con una pausa o un descanso',
   'La normal afecta al cuerpo y la crónica solo a la mente',
   'La crónica solo aparece en trabajos nocturnos', 'La normal no reduce la capacidad de trabajo'], 0,
  'La recuperabilidad es el criterio. En la crónica, además, los síntomas persisten después de la jornada y se notan al levantarse al día siguiente, y aumentan el absentismo y los problemas personales.', 126, { pag2: 127 });

q('6.14', 3, '¿Cuál de estos NO es un síntoma que el manual atribuya a la fatiga crónica?',
  ['Movimientos torpes durante la jornada', 'Facilidad para enfadarse',
   'Dolor de cabeza y mareos', 'Falta de ganas de comer'], 0,
  'Los movimientos torpes se enumeran entre los síntomas de la fatiga normal, junto con el cansancio, el sueño y la dificultad para estar atento. Los otros tres corresponden a la crónica.', 126, { pag2: 127 });

q('6.14', 3, 'Los tres tipos de movimientos que componen la carga física son:',
  ['Mover el cuerpo o partes de él, transportar o mover objetos, y mantener la postura',
   'Levantar, empujar y arrastrar', 'Esfuerzos, posturas y movimientos repetitivos',
   'Carga estática, dinámica y mixta'], 0,
  'Esos son los tres tipos de movimiento. Los esfuerzos, la postura, la manipulación de cargas y los movimientos repetitivos son los cuatro aspectos que el manual estudia dentro de la carga física, que es otra clasificación.', 116);

q('6.14', 2, 'Según el manual, la carga de trabajo:',
  ['Incluye tanto el esfuerzo físico como el mental, y no es necesariamente algo malo',
   'Se refiere exclusivamente al esfuerzo físico', 'Es siempre perjudicial para la salud',
   'Solo se mide en puestos con manipulación de cargas'], 0,
  'El manual corrige expresamente los dos prejuicios: que la carga es solo física y que es siempre negativa. Será buena o mala según la cantidad de tareas, su dificultad, el tiempo disponible y la preparación de la persona.', 115);

q('6.14', 3, 'Entre las recomendaciones para evitar una carga mental excesiva figura:',
  ['Organizar el trabajo con descansos en los que el trabajador pueda irse del puesto o elegir cuándo hacerlos',
   'Aumentar el ritmo para terminar antes la jornada',
   'Concentrar todas las tareas complejas al final del turno',
   'Reducir la formación para simplificar las tareas'], 0,
  'El manual insiste en descansos que permitan abandonar el puesto o elegir el momento. Y va en dirección contraria a reducir la formación: precisamente pide cursos adecuados a las tareas que la persona debe hacer.', 125);

tema('6.15', 'La vigilancia de la salud',
'**Qué es.** Todas las **pruebas médicas y análisis** que los médicos hacen a los trabajadores **por el tipo de trabajo que hacen**. Sirve tanto **individualmente** como para el **conjunto** de la plantilla, y el trabajador **debe saber en qué consisten** las pruebas.\n\n> Dato importante: **la Ley de Prevención no dice qué pruebas hay que hacer**. Es **el Ministerio de Sanidad** quien indica **cuáles son las pruebas o medidas y con qué frecuencia**. Lo que sí exige la ley es que la vigilancia sea **lo menos molesta posible**.\n\n**Los dos motivos principales**: **localizar los problemas de salud** de los trabajadores y **ver si las medidas preventivas son útiles y funcionan**.\n\n**Objetivos individuales:** reconocer con tiempo la aparición de problemas de salud —**detección precoz**— y **localizar los puestos** que pueden sufrir más esos riesgos.\n\n**Objetivos colectivos:** estudiar y conocer el estado de salud de los trabajadores, **llamar la atención sobre posibles situaciones de riesgo** y **conocer el plan de prevención y proponer cambios**.\n\n**Las siete características.** Es la lista que hay que llevarse memorizada:\n\n1. **Garantizada por el empresario.**\n2. **Específica**: solo relacionada con los riesgos del puesto. Si el riesgo es el ruido, la prueba es una **audiometría**.\n3. **Voluntaria, pero obligatoria en algunos casos.**\n4. **Confidencial.**\n5. **Prolongada en el tiempo.**\n6. **Documentada**, es decir, por escrito.\n7. **Gratuita para el trabajador.**\n\n**Cuándo es obligatoria.** En **tres supuestos**:\n\n- Cuando **la ley lo dice** para riesgos específicos o actividades muy peligrosas: enfermedades profesionales, **trabajadores nocturnos** y trabajadores con riesgos concretos.\n- Cuando es **necesario un reconocimiento para ver si las condiciones de trabajo tienen efectos sobre la salud**. Requiere **informe de los representantes de los trabajadores**.\n- Cuando el **estado de salud del trabajador puede ser un peligro para él mismo o para otras personas**. También requiere **informe de los representantes**.\n\n**Confidencialidad.** Los resultados **solo los pueden conocer el propio trabajador, los servicios médicos que hicieron las pruebas y las autoridades sanitarias**. El empresario **no puede conocer los resultados sin permiso del trabajador**: solo tiene derecho a **dos informaciones**:\n\n1. **Si la salud del trabajador es adecuada para el puesto.**\n2. **Si hay que incluir o añadir medidas de protección o prevención.**\n\n**Prolongada en el tiempo.** Continúa **incluso después de que el trabajador se vaya de la empresa** cuando el trabajo tenga efectos que duren o aparezcan mucho después: radiaciones peligrosas, **amianto**.\n\n**Gratuita.** La paga la empresa. Las pruebas **pueden hacerse dentro de la jornada**; si se hacen fuera, **hay que descontarlo del tiempo de trabajo**.\n\n**Las pruebas:**\n\n- **Control biológico**: estudia los efectos de productos químicos contaminantes — análisis de sangre u orina.\n- **Exámenes sistemáticos de salud**: pruebas concretas para reconocer con antelación un problema — **audiometrías** para el oído, **espirometrías forzadas** para la respiración.',
[
 { anverso: '¿Quién determina qué pruebas de vigilancia de la salud hay que hacer y con qué frecuencia?', reverso: 'El Ministerio de Sanidad. La Ley de Prevención no las concreta, solo exige que sean lo menos molestas posible.' },
 { anverso: 'Enumera las siete características de la vigilancia de la salud.', reverso: 'Garantizada por el empresario, específica, voluntaria (con excepciones), confidencial, prolongada en el tiempo, documentada y gratuita.' },
 { anverso: '¿Qué dos informaciones puede recibir el empresario?', reverso: 'Si la salud del trabajador es adecuada para el puesto, y si hay que añadir medidas de protección o prevención.' },
 { anverso: '¿En qué tres casos la vigilancia de la salud es obligatoria?', reverso: 'Cuando lo dice la ley por riesgos específicos o actividades peligrosas; cuando hace falta comprobar los efectos de las condiciones de trabajo; y cuando el estado de salud puede ser un peligro para él o para otros.' },
 { anverso: '¿Qué prueba corresponde al riesgo de ruido?', reverso: 'La audiometría.' },
 { anverso: 'Si las pruebas se hacen fuera de la jornada laboral, ¿qué ocurre?', reverso: 'Hay que descontar ese tiempo del tiempo de trabajo. La vigilancia es gratuita y la paga la empresa.' }
], [166, 167, 168, 169, 170, 171]);

q('6.15', 3, 'La vigilancia de la salud es, con carácter general:',
  ['Voluntaria para el trabajador, aunque obligatoria en determinados casos',
   'Obligatoria siempre', 'Voluntaria en todo caso, sin excepciones',
   'Obligatoria solo para los trabajadores nocturnos'], 0,
  'La regla es la voluntariedad, con tres excepciones: cuando la ley lo impone por riesgos específicos, cuando hay que comprobar los efectos de las condiciones de trabajo, y cuando el estado de salud puede ser un peligro para el propio trabajador o para terceros.', 168);

q('6.15', 3, 'De los resultados de la vigilancia de la salud, el empresario solo tiene derecho a conocer:',
  ['Si la salud del trabajador es adecuada para el puesto y si hay que añadir medidas de prevención',
   'El diagnóstico completo, para poder adaptar el puesto',
   'Los resultados de las pruebas, pero no el diagnóstico', 'Nada en absoluto'], 0,
  'Son exactamente esas dos informaciones. Los resultados solo los conocen el trabajador, los servicios médicos que hicieron las pruebas y las autoridades sanitarias, salvo que el trabajador autorice otra cosa.', 169);

q('6.15', 2, 'Que la vigilancia de la salud sea «específica» significa que:',
  ['Solo se relaciona con los riesgos del trabajador en su puesto y lugar de trabajo',
   'Solo la realizan médicos especialistas', 'Solo se aplica a trabajadores especialmente sensibles',
   'Solo cubre las enfermedades profesionales reconocidas por la ley'], 0,
  'La especificidad vincula la prueba al riesgo concreto: si el riesgo es el ruido, la prueba es una audiometría. No es un reconocimiento médico general.', 168);

q('6.15', 3, 'La vigilancia de la salud puede prolongarse después de que el trabajador abandone la empresa:',
  ['Cuando el trabajo tenga efectos que duren o aparezcan mucho tiempo después, como con radiaciones o amianto',
   'Solo si el trabajador lo solicita expresamente', 'En ningún caso',
   'Solo durante el año siguiente a la baja'], 0,
  'Es una de las siete características: prolongada en el tiempo. El manual cita las radiaciones peligrosas y el amianto como ejemplos de exposiciones cuyos efectos aparecen a muy largo plazo.', 169);

q('6.15', 2, 'Las pruebas y revisiones de vigilancia de la salud:',
  ['Las paga la empresa, y si se hacen fuera de la jornada hay que descontar ese tiempo del trabajo',
   'Las paga el trabajador y se realizan fuera de la jornada',
   'Las paga la Seguridad Social', 'Se realizan siempre fuera de la jornada laboral'], 0,
  'La gratuidad para el trabajador es una de las siete características, y el manual añade que el tiempo empleado fuera de jornada se descuenta del tiempo de trabajo.', 169);

tema('6.16', 'La organización preventiva',
'**Qué es.** La **forma que tiene una empresa de realizar el trabajo preventivo**. Al elegirla, la empresa debe decidir **quiénes se encargan** de la prevención y su vigilancia, y **qué tareas y responsabilidades** tiene cada persona.\n\n**Los tres grandes tipos:**\n\n- Con **medios propios** — es parte de la empresa.\n- Con **medios externos** — contratar a una empresa especializada.\n- **Mixta** — combinación de ambas.\n\n**Con medios propios**, los responsables pueden ser:\n\n**1. El propio empresario**, si cumple **cuatro condiciones**:\n\n- Empresa de **hasta 10 trabajadores**. También **hasta 25** si **todos están en el mismo centro de trabajo**.\n- Que las actividades **no sean especialmente peligrosas** —la ley enumera algunas, como producir productos venenosos o fabricar explosivos.\n- Que el empresario **esté de forma habitual en el centro de trabajo**.\n- Que **tenga la formación adecuada**.\n\n**2. Trabajadores designados.** Pueden dedicar **todo o parte de su tiempo** a la prevención. La empresa nombra los que sean necesarios según su tamaño y actividad. Las tareas que les resulten complicadas las hará **un servicio de prevención propio o externo**.\n\n**3. Servicio de prevención propio o mancomunado.** El **propio** es un departamento de la empresa. El **mancomunado** es la **unión de varias empresas con la misma actividad o en una misma zona**. Ambos **se dedican solo a la prevención**: **no pueden realizar otro tipo de actividad** para la empresa, y deben tener el personal y los medios materiales necesarios.\n\n**Con medios externos**, la **única opción es un servicio de prevención ajeno**: una empresa dedicada a la prevención que no pertenece a la tuya. **Necesita autorización de la administración pública** para funcionar. Cuando se contrata uno, **es mejor que un trabajador propio esté en contacto con él** y se encargue de algunas tareas.\n\n**La organización preventiva por tamaño de empresa:**\n\n| Tamaño | Opciones posibles |\n|---|---|\n| **1 a 10** | Empresario · designados · propio o mancomunado · ajeno |\n| **11 a 25** | Empresario **solo si hay un único centro de trabajo** · designados · propio o mancomunado · ajeno |\n| **26 a 250** | Designados · propio o mancomunado · ajeno |\n| **251 a 500** | Designados · propio o mancomunado (**obligatorio** si la actividad es especialmente peligrosa o lo ordenan las autoridades) · ajeno |\n| **Más de 500** | Propio o mancomunado (**obligatorio siempre**) · ajeno |\n\n> Fíjate en los dos saltos: a partir de **26 trabajadores el empresario ya no puede asumirla**, y a partir de **500 el servicio propio o mancomunado es obligatorio siempre**.\n\n**El recurso preventivo.** Un **medio para afrontar la prevención**, formado por personas y por las tareas que pueden realizar. Puede estar formado por:\n\n- Uno o varios **trabajadores designados**, del **servicio de prevención propio** o de un **servicio ajeno** contratado.\n- Uno o varios **trabajadores asignados**: trabajadores que **no forman parte de un servicio de prevención ni son designados**, pero **tienen formación y capacidad** en prevención.\n\nEn ambos casos deben ser **suficientes para vigilar** que se cumplen las actividades preventivas y **tener los medios necesarios**. Una empresa con recurso preventivo **debe tener también una organización preventiva**. Las empresas cuya actividad se considera de **peligro o riesgo especial** —por ejemplo trabajos en altura con riesgo de caída— **tienen la obligación de tener recurso preventivo**.',
[
 { anverso: '¿Hasta cuántos trabajadores puede el propio empresario asumir la prevención?', reverso: 'Hasta 10; y hasta 25 si todos están en el mismo centro de trabajo. Además, actividad no peligrosa, presencia habitual y formación adecuada.' },
 { anverso: '¿Qué es un servicio de prevención mancomunado?', reverso: 'La unión de varias empresas de la misma actividad o de una misma zona, que asume la prevención de todas ellas.' },
 { anverso: '¿A partir de cuántos trabajadores es obligatorio el servicio propio o mancomunado?', reverso: 'Siempre a partir de más de 500. Entre 251 y 500 solo es obligatorio si la actividad es especialmente peligrosa o lo ordenan las autoridades.' },
 { anverso: '¿Qué necesita un servicio de prevención ajeno para funcionar?', reverso: 'Autorización de la administración pública.' },
 { anverso: '¿Qué es un trabajador asignado?', reverso: 'Un trabajador que no forma parte del servicio de prevención ni es designado, pero tiene formación y capacidad en prevención. Puede integrar el recurso preventivo.' },
 { anverso: '¿Pueden los servicios de prevención hacer otras tareas para la empresa?', reverso: 'No. Se dedican solo a la prevención de riesgos laborales.' }
], [185, 186, 187, 188, 189, 190, 192]);

q('6.16', 3, 'El propio empresario puede asumir la actividad preventiva en empresas de hasta 25 trabajadores:',
  ['Solo cuando todos los trabajadores están en el mismo centro de trabajo',
   'En todo caso, si tiene formación adecuada', 'Solo si la empresa tiene varios centros',
   'Nunca: el límite son 10 trabajadores en cualquier caso'], 0,
  'El límite general son 10 trabajadores, y se amplía a 25 con la condición del centro de trabajo único. A ello se suman la actividad no peligrosa, la presencia habitual del empresario y su formación adecuada.', 186);

q('6.16', 3, 'En una empresa de más de 500 trabajadores, la organización preventiva:',
  ['Debe contar siempre con un servicio de prevención propio o mancomunado',
   'Puede recaer en trabajadores designados', 'Puede recaer únicamente en un servicio ajeno',
   'Puede recaer en el propio empresario si tiene formación'], 0,
  'Por encima de 500 el servicio propio o mancomunado es obligatorio, y puede complementarse con un ajeno. Los trabajadores designados dejan de ser opción a partir de ese umbral.', 189);

q('6.16', 2, 'Un servicio de prevención mancomunado es:',
  ['La unión de varias empresas de la misma actividad o de una misma zona para asumir la prevención de todas',
   'Un departamento interno de una única empresa',
   'Una empresa externa autorizada por la administración',
   'Un grupo de trabajadores designados de distintos departamentos'], 0,
  'Lo mancomunado es la puesta en común entre varias empresas. El departamento interno es el servicio propio, y la empresa externa autorizada es el servicio ajeno.', 187);

q('6.16', 3, 'Los trabajadores «asignados» que pueden formar parte de un recurso preventivo son:',
  ['Trabajadores que no pertenecen al servicio de prevención ni son designados, pero tienen formación y capacidad',
   'Los trabajadores designados por la empresa para la prevención',
   'El personal del servicio de prevención ajeno', 'Los delegados de prevención'], 0,
  'Es la segunda vía para constituir el recurso preventivo, junto a los designados o el personal de los servicios de prevención. Los delegados de prevención son representantes de los trabajadores, una figura distinta.', 190);

q('6.16', 2, 'Los servicios de prevención, propios o mancomunados:',
  ['Se dedican solo a la prevención y no pueden realizar otro tipo de actividad para la empresa',
   'Pueden compaginar la prevención con otras funciones si la empresa es pequeña',
   'Dependen jerárquicamente del Comité de Seguridad y Salud',
   'Necesitan autorización de la administración pública'], 0,
  'La dedicación exclusiva es una exigencia expresa. La autorización de la administración se exige a los servicios ajenos, no a los propios ni a los mancomunados.', 187);

tema('6.17', 'El plan de prevención, la evaluación y la planificación',
'**El plan de prevención de riesgos laborales.** Un documento que contiene:\n\n- **Identificación de la empresa**: nombre, actividad, número de centros de trabajo y de trabajadores, características de los centros y tipos de puesto.\n- **La organización de la empresa**: departamentos y jefes, con sus **funciones, responsabilidades y forma de comunicarse** en materia de prevención.\n- **La forma de organizar la producción.**\n- **La organización de la prevención**: el tipo de organización preventiva y los **órganos de representación**.\n- **Los objetivos y las metas** en prevención.\n- **Las personas, el dinero y los medios** disponibles para la prevención.\n\n**Quién lo aprueba y quién lo aplica.** Lo **aprueban los responsables de la empresa** y **todos los departamentos deben ponerlo en marcha**. Los trabajadores **deben conocerlo y colaborar** en su cumplimiento. Debe ser **fácil de encontrar** y la empresa debe entregarlo a **las autoridades de Trabajo o de la Seguridad Social y a los representantes de los trabajadores cuando lo pidan**.\n\n> En las empresas de **menos de 50 trabajadores** el plan **puede ser más sencillo**, adaptado a la actividad y al tamaño.\n\nPara aplicar el plan, las **dos tareas principales** son la **evaluación de riesgos** y la **planificación de la actividad preventiva**.\n\n**La evaluación de riesgos.** Estudia y valora **los riesgos que no han podido evitarse** y los que **aún existen**. Es lo que da a la empresa información para decidir cómo prevenirlos.\n\nQué hay que evaluar: las **características de los centros**, las **instalaciones**, los **equipos de trabajo**, los **agentes químicos, físicos y biológicos** y la **forma de organización del trabajo**.\n\nHay que tener en cuenta además si el trabajador es **especialmente sensible** —menores de edad, mujeres embarazadas, personas con discapacidad— y todo lo que pueda perjudicar a una **trabajadora embarazada o que amamanta**.\n\nEl empresario **debe hablar con los representantes de los trabajadores o con los propios trabajadores** para acordar la forma más adecuada de evaluar.\n\n**El resultado de la evaluación** es un documento que dirá:\n\n1. **Cuáles son los elementos peligrosos.**\n2. **Qué trabajadores pueden sufrir riesgos** por ellos.\n3. **Cuál es el nivel de riesgo**: hay riesgos **graves**, los más importantes, y **leves**, los menos.\n4. **Qué decisiones hay que tomar** para reducir el riesgo en ese puesto y para ese trabajador.\n\n> Regla que se pregunta: si en un puesto **ya evaluado** un trabajador sufre un accidente o un problema de salud, **hay que volver a hacer la evaluación**.\n\n**La planificación de la actividad preventiva.** Consiste en **poner en marcha las tareas necesarias** para eliminar o reducir un riesgo detectado en la evaluación. Se materializa en un **plan de acción**: la lista de tareas, con **qué personas se encargan, qué medios se utilizan, cuánto dinero hay disponible** y **la prioridad de las acciones**, de más a menos importante.\n\n**Los dos tipos de tareas preventivas:**\n\n- **Medidas materiales**: decisiones para eliminar o reducir los riesgos desde el principio, y para reducirlos cuando hay accidentes o emergencias. Incluyen la entrega de **equipos de protección individual**.\n- **Formación e información**: que los trabajadores conozcan los riesgos, las medidas y el uso de los medios de protección. Se concreta en las **instrucciones de trabajo** para los equipos y tareas más peligrosas, y en la **señalización de prevención**.',
[
 { anverso: '¿Qué dos tareas principales sirven para aplicar el plan de prevención?', reverso: 'La evaluación de riesgos y la planificación de la actividad preventiva.' },
 { anverso: '¿Qué riesgos estudia la evaluación de riesgos?', reverso: 'Los que no han podido evitarse y los que aún existen en el trabajo.' },
 { anverso: '¿Qué ocurre si en un puesto ya evaluado un trabajador sufre un accidente?', reverso: 'Hay que volver a hacer la evaluación.' },
 { anverso: '¿En qué empresas puede el plan de prevención ser más sencillo?', reverso: 'En las de menos de 50 trabajadores, adaptado a su actividad y tamaño.' },
 { anverso: '¿Qué debe incluir el plan de acción de la planificación preventiva?', reverso: 'Qué personas se encargan, qué medios se usan, cuánto dinero hay disponible y la prioridad de las acciones.' },
 { anverso: '¿Quiénes son trabajadores especialmente sensibles?', reverso: 'Por ejemplo, menores de edad, mujeres embarazadas y personas con discapacidad.' }
], [192, 193, 194, 195, 196]);

q('6.17', 2, 'La evaluación de riesgos laborales estudia y valora:',
  ['Los riesgos que no han podido evitarse y los que aún existen en el trabajo',
   'Todos los riesgos posibles, se hayan evitado o no',
   'Únicamente los riesgos que ya han causado accidentes',
   'Solo los riesgos graves'], 0,
  'La evaluación llega después de intentar evitar: se ocupa de lo que no pudo eliminarse. Ese orden es coherente con los principios de la acción preventiva, cuyo primer mandato es evitar los riesgos.', 194);

q('6.17', 3, 'Si en un puesto de trabajo ya evaluado un trabajador sufre un accidente o un problema de salud:',
  ['Hay que volver a hacer la evaluación', 'Basta con revisar el plan de acción',
   'Solo procede una nueva evaluación si el accidente es grave',
   'Se mantiene la evaluación anterior y se refuerzan los equipos de protección'], 0,
  'El manual lo establece sin condicionarlo a la gravedad: el accidente demuestra que la evaluación no captó el riesgo, de modo que hay que rehacerla.', 195);

q('6.17', 3, 'En el resultado de la evaluación de riesgos, el nivel de riesgo se expresa distinguiendo entre riesgos:',
  ['Graves y leves', 'Altos, medios y bajos', 'Evitables e inevitables', 'Tolerables e intolerables'], 0,
  'El manual usa esa distinción binaria: graves, los más importantes, y leves, los menos. Junto al nivel, el documento identifica los elementos peligrosos, los trabajadores expuestos y las decisiones a tomar.', 195);

q('6.17', 2, 'El plan de prevención puede ser más sencillo en las empresas de:',
  ['Menos de 50 trabajadores', 'Menos de 10 trabajadores', 'Menos de 25 trabajadores', 'Menos de 250 trabajadores'], 0,
  'El umbral son 50 trabajadores. Coincide con el umbral a partir del cual es obligatorio el Comité de Seguridad y Salud, lo que ayuda a recordarlo.', 193);

q('6.17', 3, 'Las instrucciones de trabajo y la señalización de prevención son ejemplos de:',
  ['Tareas preventivas de formación e información', 'Medidas materiales',
   'Documentos del plan de prevención', 'Técnicas de vigilancia de la salud'], 0,
  'Los dos tipos de tareas preventivas son las medidas materiales —que incluyen los equipos de protección individual— y la formación e información, donde encajan las instrucciones de trabajo y la señalización.', 197);

tema('6.18', 'Los equipos de emergencia y el simulacro',
'El conjunto de trabajadores encargados de afrontar las emergencias forma los **equipos de actuación o brigadas de emergencias**. Su número y organización dependen del tipo de empresa.\n\n| Figura | Función | Tamaño |\n|---|---|---|\n| **Jefe de emergencia** | **Principal responsable** hasta que llega ayuda de fuera. **Decide cuándo evacuar.** Debe estar **siempre localizable** | — |\n| **Jefe de intervención** | Principal responsable **en el lugar** de la emergencia; organiza a las personas allí | — |\n| **Equipos de primera intervención** | Formados para actuar contra incendios y emergencias pequeñas, del tipo que se apaga con un extintor | **Al menos 2 trabajadores** |\n| **Equipos de segunda intervención** | **Más formación**; entran cuando la primera intervención **no puede controlar** la emergencia | — |\n| **Equipos de primeros auxilios** | Atienden a heridos o personas que necesitan atención inmediata | — |\n| **Equipos de alarma y evacuación** | Organizan la evacuación por las salidas de emergencia | **2 o 3 trabajadores** |\n\n> **La pregunta clásica**: quien **comprueba que nadie se queda sin salir** es el **equipo de alarma y evacuación**, no el jefe de emergencia. Ese equipo además **ayuda a sacar a los heridos** junto con los de primeros auxilios, e **informa al Jefe de emergencia del resultado de la evacuación en el punto de encuentro**, así como de cualquier incidencia.\n\n**Distingue las dos jefaturas**: el **Jefe de emergencia** manda en el conjunto y decide la evacuación; el **Jefe de intervención** manda **en el punto** donde está ocurriendo.\n\n**Centro de comunicaciones.** Es **recomendable** que exista uno **en un lugar seguro**. Allí estará el **Jefe de emergencias**, desde donde podrá contactar con los equipos de actuación y con la ayuda externa.\n\n**El simulacro.** Es un **ensayo**. Sirve para:\n\n- **Saber cómo actuar y reaccionar** ante una emergencia.\n- **Observar los fallos** y buscar mejoras.\n- **Comprobar que las medidas funcionan**: luces de emergencia, extintores.\n\nEs importante que **todos actúen como en una emergencia real**. **La frecuencia depende del tipo de empresa y su actividad**: el manual **no fija una periodicidad obligatoria**, así que desconfía de cualquier opción que diga «al menos uno al año».\n\n**Primeros auxilios: de quién es la responsabilidad.** Organizar los primeros auxilios en la empresa para actuar en una emergencia es **responsabilidad de la empresa**, no de las administraciones públicas ni de los trabajadores.\n\n**Las constantes vitales** son **la respiración y el pulso, junto con que la persona esté despierta**. Las tres cosas, no solo dos.',
[
 { anverso: '¿Quién comprueba que nadie se queda sin salir en una evacuación?', reverso: 'El equipo de alarma y evacuación.' },
 { anverso: '¿Qué diferencia hay entre el Jefe de emergencia y el Jefe de intervención?', reverso: 'El de emergencia es el máximo responsable hasta que llega ayuda externa y decide cuándo evacuar; el de intervención manda en el lugar concreto de la emergencia.' },
 { anverso: '¿De cuántas personas consta un equipo de primera intervención y uno de alarma y evacuación?', reverso: 'Primera intervención, al menos 2. Alarma y evacuación, 2 o 3.' },
 { anverso: '¿Con qué frecuencia hay que hacer simulacros?', reverso: 'El manual no fija periodicidad: depende del tipo de empresa y de su actividad.' },
 { anverso: '¿A qué llamamos constantes vitales?', reverso: 'A la respiración y el pulso, junto con que la persona esté despierta.' },
 { anverso: '¿De quién es la responsabilidad de organizar los primeros auxilios en la empresa?', reverso: 'De la empresa.' }
], [158, 159, 160]);

q('6.18', 2, 'Comprobar que nadie se queda sin salir durante una evacuación corresponde a:',
  ['El equipo de alarma y evacuación', 'El jefe de emergencia',
   'El jefe del servicio de prevención', 'El equipo de primeros auxilios'], 0,
  'Es una función expresa del equipo de alarma y evacuación, que además ayuda a sacar a los heridos e informa al Jefe de emergencia en el punto de encuentro. El jefe de emergencia decide cuándo evacuar, pero no hace el recuento.', 159);

q('6.18', 3, 'El principal responsable en el lugar concreto donde ocurre la emergencia es:',
  ['El jefe de intervención', 'El jefe de emergencia',
   'El coordinador del equipo de primera intervención', 'El jefe del servicio de prevención'], 0,
  'El jefe de intervención manda en el punto de la emergencia. El jefe de emergencia es el máximo responsable del conjunto hasta que llega ayuda externa y quien decide la evacuación.', 158);

q('6.18', 3, 'Un equipo de alarma y evacuación está formado por:',
  ['2 o 3 trabajadores', 'Al menos 2 trabajadores', 'Un mínimo de 5 trabajadores',
   'Un único trabajador designado'], 0,
  'Son grupos de 2 o 3. El «al menos 2» corresponde a los equipos de primera intervención, que es la otra cifra de este apartado y se confunde con facilidad.', 159);

q('6.18', 3, 'Respecto a la frecuencia de los simulacros, el manual establece que:',
  ['Depende del tipo de empresa y de su actividad', 'Debe hacerse al menos uno al año en toda empresa',
   'Debe hacerse uno cada seis meses', 'Solo son obligatorios en empresas de más de 50 trabajadores'], 0,
  'El manual no fija periodicidad y la remite al tipo de empresa y actividad. La afirmación de que todas las empresas deben hacer al menos un simulacro anual figura como falsa en el propio cuestionario del manual.', 160);

q('6.18', 2, 'Las constantes vitales comprenden:',
  ['La respiración y el pulso, junto con que la persona esté despierta',
   'La respiración y el pulso únicamente', 'El pulso y que la persona esté despierta',
   'La respiración y que la persona esté despierta'], 0,
  'Son las tres cosas a la vez. Las opciones que dejan fuera una de ellas son precisamente los distractores que plantea el cuestionario del propio manual.', 214);

q('6.18', 2, 'Organizar los primeros auxilios en la empresa para actuar en una emergencia es responsabilidad de:',
  ['La empresa', 'Las administraciones públicas', 'Los trabajadores', 'El servicio de prevención ajeno'], 0,
  'La responsabilidad organizativa recae en la empresa. Los trabajadores tienen deberes de colaboración y los socorristas actúan, pero la organización corresponde al empresario.', 223);

tema('6.19', 'Condiciones de seguridad, agentes físicos y biológicos',
'**Peligros de las condiciones de seguridad y su medida preventiva.** El manual los empareja así, y es material de examen directo:\n\n| Peligro | Medida preventiva |\n|---|---|\n| **Caídas desde una altura** | Colocar **protecciones en huecos y paredes** por donde puedan caer objetos o personas |\n| **Caídas en el suelo** | Que los **suelos no sean resbaladizos** y que los trabajadores lleven **calzado adecuado** |\n| **Atropellos con vehículos** | Que los **pasillos para trabajadores y vehículos sean distintos** y estén bien señalizados |\n| **Choque contra objetos inmóviles** | **Señalizar correctamente esquinas y obstáculos fijos**, por ejemplo dónde están los extintores |\n\n**Adaptar el trabajo a la persona, no al revés.** Es falso decir que la actividad preventiva estudia las características de los trabajadores **para adaptarlos a las condiciones de trabajo**. El principio de la acción preventiva es el contrario: **adaptar el puesto de trabajo al trabajador**.\n\n**Agentes físicos.** Al evaluar sus efectos perjudiciales hay que tener en cuenta **tres cosas**:\n\n1. El **tipo** de agente físico.\n2. La **cantidad o intensidad** del agente.\n3. El **tiempo** que el trabajador ha estado en contacto con él.\n\n> Quedarse solo en el tipo y la intensidad es el error que plantea el propio cuestionario del manual: **el tiempo de exposición cuenta siempre**.\n\n**Agentes biológicos.** Son **microbios: bacterias y virus**. No son los animales ni las plantas, aunque puedan ser su vehículo.\n\n**Medidas de prevención y control del riesgo biológico**, entre otras:\n\n- **Limpiar y desinfectar** lugares y equipos de trabajo.\n- **Vigilar la salud** del trabajador según las recomendaciones de los médicos.\n\n**Protección colectiva frente a individual: la lista que hay que saber clasificar.**\n\n| Colectiva | Individual (EPI) |\n|---|---|\n| **Resguardo** | **Cinturón de seguridad** |\n| **Interruptor diferencial** | **Mascarilla** |\n| **Ventilación localizada** | Guantes, casco, botas, gafas |\n| Barandillas, redes de seguridad, encerramientos | Ropa de protección |\n\n**La carga mental no es la capacidad del trabajador.** Es falso definirla como «la capacidad de un trabajador para hacer tareas intelectuales». La carga mental es **el esfuerzo mental que exige el trabajo**, no la aptitud de quien lo hace.\n\n**Sobre la vigilancia de la salud**, dos precisiones del propio cuestionario:\n\n- La **detección precoz** consiste en **reconocer con tiempo la aparición de problemas de salud**, **no** en estudiar los efectos de los contaminantes químicos —eso es el **control biológico**.\n- La vigilancia de la salud **no está más relacionada con detectar problemas que con evaluar las medidas preventivas**: sirve **para ambas cosas por igual**.\n\n**Sobre los servicios de prevención propios.** Sus trabajadores **sí tienen dedicación exclusiva**: no pueden dedicarse a otras tareas ajenas a la prevención. Y **sí es posible** crear **servicios mancomunados** para varias empresas de un mismo lugar, como un edificio o un centro comercial.',
[
 { anverso: '¿Qué medida previene los atropellos con vehículos?', reverso: 'Que los pasillos para trabajadores y para vehículos sean distintos y estén correctamente señalizados.' },
 { anverso: '¿Qué tres factores se tienen en cuenta al evaluar un agente físico?', reverso: 'El tipo de agente, su cantidad o intensidad, y el tiempo de exposición del trabajador.' },
 { anverso: '¿Qué son los agentes biológicos?', reverso: 'Microbios: bacterias y virus.' },
 { anverso: 'Clasifica: resguardo, mascarilla, interruptor diferencial, cinturón de seguridad y ventilación localizada.', reverso: 'Colectivas: resguardo, interruptor diferencial y ventilación localizada. Individuales: mascarilla y cinturón de seguridad.' },
 { anverso: '¿Es la carga mental la capacidad del trabajador para tareas intelectuales?', reverso: 'No. Es el esfuerzo mental que exige el trabajo, no la aptitud de quien lo realiza.' },
 { anverso: '¿Tienen dedicación exclusiva los trabajadores de un servicio de prevención propio?', reverso: 'Sí. No pueden dedicarse a tareas ajenas a la prevención.' }
], [45, 88, 102, 135, 141]);

q('6.19', 2, '¿Cuál de estos NO es un medio de protección colectiva?',
  ['El cinturón de seguridad', 'El resguardo de una máquina',
   'El interruptor diferencial', 'La ventilación localizada'], 0,
  'El cinturón de seguridad es un equipo de protección individual, igual que la mascarilla. Resguardo, interruptor diferencial y ventilación localizada protegen a más de una persona a la vez.', 135, { pag2: 141 });

q('6.19', 3, 'Al evaluar los efectos perjudiciales de un agente físico hay que tener en cuenta:',
  ['El tipo de agente, su cantidad o intensidad y el tiempo de exposición',
   'El tipo de agente y su cantidad o intensidad, solamente',
   'Únicamente el tiempo de exposición', 'Solo el tipo de agente físico'], 0,
  'Los tres factores. Dejar fuera el tiempo de exposición es el error que plantea expresamente el cuestionario del propio manual.', 88);

q('6.19', 2, 'Los agentes biológicos son:',
  ['Microbios, como bacterias y virus', 'Animales, como perros o serpientes',
   'Plantas', 'Cualquier ser vivo presente en el lugar de trabajo'], 0,
  'El manual los identifica con los microbios: bacterias y virus. Animales y plantas figuran como distractores en su propio cuestionario.', 102);

q('6.19', 3, 'La medida preventiva adecuada frente al riesgo de choque contra objetos inmóviles es:',
  ['Señalizar correctamente esquinas y obstáculos fijos',
   'Colocar protecciones en huecos y paredes', 'Que los suelos no sean resbaladizos',
   'Separar los pasillos de trabajadores y vehículos'], 0,
  'Cada peligro tiene su medida: huecos y paredes protegen de las caídas de altura; los suelos antideslizantes, de las caídas al suelo; y la separación de pasillos, de los atropellos.', 45);

q('6.19', 3, 'Es FALSO afirmar que la actividad preventiva:',
  ['Estudia las características de los trabajadores para adaptarlos a las condiciones de trabajo',
   'Estudia las condiciones de trabajo y los factores de riesgo',
   'Tiene en cuenta las capacidades y necesidades de los trabajadores',
   'Se realiza en la empresa para conocer los factores de riesgo'], 0,
  'La relación es la inversa: se adapta el puesto de trabajo al trabajador, no el trabajador a las condiciones. Es uno de los principios generales de la acción preventiva.', 10);

q('6.19', 3, 'Respecto a los servicios de prevención, es FALSO que:',
  ['Los trabajadores de un servicio de prevención propio puedan dedicarse también a otras tareas ajenas a la prevención',
   'Los servicios ajenos necesiten autorización de la administración pública',
   'Puedan crearse servicios mancomunados para varias empresas de un mismo edificio',
   'El servicio propio sea un departamento de la empresa'], 0,
  'La dedicación es exclusiva: los servicios de prevención no pueden realizar otro tipo de actividad para la empresa. Las otras tres afirmaciones son correctas.', 187);

module.exports = {
  parte: { parte: '6', titulo: 'Prevención de Riesgos Laborales',
           manual: 'Manual 6 del temario oficial · nivel básico', url_manual: M, color: '#0a9aa0', epigrafes },
  preguntas
};
