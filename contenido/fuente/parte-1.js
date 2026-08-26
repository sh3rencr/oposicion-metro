/* Parte 1 — Conocimientos específicos sobre Metro de Madrid
   Fuente única: Manual 1 del temario oficial (julio 2026). */
'use strict';
const M = 'https://www.metromadrid.es/sites/default/files/empleo/descargables/1._Conocimientos_espec%C3%ADficos_sobre_Metro_de_Madrid.pdf';
const url = p => M + '#page=' + p;
const txt = p => 'Manual 1 · Conocimientos específicos · pág. ' + p;

const cuenta = {};
function q(ep, dif, enunciado, opciones, correcta, explicacion, pag, extra) {
  extra = extra || {};
  cuenta[ep] = (cuenta[ep] || 0) + 1;
  return {
    id: 'p-' + ep + '-' + String(cuenta[ep]).padStart(2, '0'),
    epigrafe: ep, dificultad: dif, enunciado: enunciado, opciones: opciones,
    correcta: correcta, explicacion: explicacion,
    fuente: url(pag), fuente_texto: txt(pag) + (extra.pag2 ? '-' + extra.pag2 : ''),
    volatil: !!extra.volatil, fecha_dato: extra.fecha || '2026-07'
  };
}

const epigrafes = [];
const preguntas = [];
function tema(id, titulo, resumen, fichas, pags) {
  epigrafes.push({ id: id, titulo: titulo, resumen_md: resumen, fichas: fichas,
                   fuentes: pags.map(url) });
}

/* ══════════════════════════ 1.1 ══════════════════════════ */
tema('1.1', 'Qué es Metro de Madrid: naturaleza y misión',
'**Metro de Madrid, S.A.** es una **empresa pública** integrada en el **Consorcio Regional de Transportes de Madrid**, organismo que el manual sitúa como creado en **1986** para agrupar los esfuerzos de las instituciones públicas y privadas del transporte público, con el fin de coordinar **servicios, redes y tarifas**.\n\nSu **Administración tutelar** es la **Comunidad de Madrid**, que además es su **accionista mayoritario desde diciembre de 2011**.\n\nTiene tres funciones principales:\n\n- La **explotación** de las líneas de la red en funcionamiento.\n- La **planificación y mejora de la calidad** del servicio de transporte.\n- El **mantenimiento y optimización** de las instalaciones de la red.\n\nLa **Misión** declarada es: *«Ser la principal solución de movilidad en la región de Madrid, proporcionando un servicio público de calidad, eficiente y comprometido con el cliente, al tiempo que potenciamos la seguridad, la sostenibilidad y la innovación»*.\n\nEsa misión se articula en **tres pilares estratégicos**, que conviene saber enumerar de carrerilla:\n\n1. **Servicio público** — ser referente en transporte sostenible y eje vertebrador de la movilidad multimodal.\n2. **Eficiencia en la gestión** — uso eficiente de los recursos, orientación a resultados, mejora continua e innovación.\n3. **Experiencia de cliente** — evolucionar hacia un modelo de movilidad inteligente y personalizada en todas las etapas del viaje.\n\nEn materia de **certificaciones**, dos datos muy preguntables:\n\n- Metro de Madrid es la **primera compañía de transporte metropolitano** que ha certificado **toda su red** según la norma europea **UNE-EN 13816** de calidad del servicio en el transporte público de viajeros, y una de las primeras del sector en Europa.\n- Está certificada en **ISO 14001** (medio ambiente) **desde el año 2005**.\n\nPor volumen, el manual señala que transporta **más de dos millones de clientes** diarios en día laborable.',
[
 { anverso: '¿Cuáles son los tres pilares estratégicos de Metro de Madrid?', reverso: 'Servicio público, eficiencia en la gestión y experiencia de cliente.' },
 { anverso: '¿Qué norma europea de calidad tiene certificada Metro de Madrid en toda su red?', reverso: 'La UNE-EN 13816. Fue la primera compañía de transporte metropolitano en conseguirlo para toda su red.' },
 { anverso: '¿Desde qué año está Metro de Madrid certificada en ISO 14001?', reverso: 'Desde 2005.' },
 { anverso: '¿Desde cuándo es la Comunidad de Madrid accionista mayoritario de Metro?', reverso: 'Desde diciembre de 2011.' },
 { anverso: '¿Cuál es la Administración tutelar de Metro de Madrid?', reverso: 'La Comunidad de Madrid.' }
], [7, 8]);

preguntas.push(
 q('1.1', 1, 'Metro de Madrid, S.A. es:',
   ['Una empresa pública integrada en el Consorcio Regional de Transportes de Madrid',
    'Un organismo autónomo dependiente del Ayuntamiento de Madrid',
    'Una sociedad privada concesionaria del servicio',
    'Una dirección general de la Consejería de Transportes'],
   0,
   'El manual la define como empresa pública integrada en el CRTM, con la Comunidad de Madrid como Administración tutelar. No depende del Ayuntamiento, ni es una concesionaria privada, ni forma parte orgánica de una Consejería: es una sociedad anónima de capital público.', 7),

 q('1.1', 2, 'Los tres pilares estratégicos en los que se articula la Misión de Metro de Madrid son:',
   ['Servicio público, eficiencia en la gestión y experiencia de cliente',
    'Seguridad, sostenibilidad e innovación',
    'Servicio público, seguridad y accesibilidad',
    'Calidad, eficiencia y digitalización'],
   0,
   'Los pilares son servicio público, eficiencia en la gestión y experiencia de cliente. Cuidado con el distractor «seguridad, sostenibilidad e innovación»: esas tres palabras aparecen en el enunciado de la Misión, pero como aspectos que se potencian, no como los pilares en los que se articula.', 7),

 q('1.1', 2, 'Metro de Madrid está certificada según la norma europea UNE-EN 13816, que se refiere a:',
   ['La calidad del servicio en el transporte público de viajeros',
    'La gestión ambiental',
    'La seguridad y salud en el trabajo',
    'La accesibilidad universal de las instalaciones'],
   0,
   'La UNE-EN 13816 es la norma europea de calidad del servicio en el transporte público de personas viajeras, y Metro fue la primera compañía de transporte metropolitano en certificar toda su red con ella. La gestión ambiental corresponde a la ISO 14001, que Metro también tiene desde 2005, pero es otra norma distinta.', 8),

 q('1.1', 3, '¿Desde qué año está Metro de Madrid certificada en la norma ISO 14001?',
   ['2005', '2011', '1986', '2015'], 0,
   'El manual fija la certificación ISO 14001 en el año 2005. El 2011 es el año en que la Comunidad de Madrid pasó a ser accionista mayoritario, y 1986 es el año que el manual da para la creación del Consorcio: son fechas del mismo capítulo que se prestan a confusión.', 8),

 q('1.1', 3, 'Según la Misión de Metro de Madrid, la empresa aspira a ser:',
   ['La principal solución de movilidad en la región de Madrid',
    'La red de metro más extensa de Europa',
    'El operador de transporte más rentable de España',
    'El referente mundial en innovación ferroviaria'],
   0,
   'La Misión literal habla de «ser la principal solución de movilidad en la región de Madrid». Las otras opciones apuntan a extensión, rentabilidad o innovación, que son aspectos que aparecen en otros puntos del manual pero no en la formulación de la Misión.', 7)
);

/* ══════════════════════════ 1.4 ══════════════════════════ */
tema('1.4', 'Compromisos de calidad: la Carta de Servicios',
'Metro resume sus compromisos cuantificables con el cliente en una **Carta de Servicios**. Son cifras concretas y por eso material de test de primer orden. Conviene memorizar el patrón: **casi todo va al 95 %**, y lo que no, hay que saberlo aparte.\n\n**Ocupación de los trenes.** Al menos el **95 %** de los clientes que viajen en hora punta lo harán con una ocupación **igual o inferior a 4 clientes/m²**.\n\n**Accesibilidad.** Al menos el **95 %** de los clientes encontrarán disponibles para su uso las instalaciones de accesibilidad.\n\n**Información.** Los clientes dispondrán en las estaciones de información sobre la oferta básica (planos, horarios, intervalos), permanentemente actualizada, con una valoración de **8 o superior** en una escala de 0 a 10. El **100 % de las estaciones** dispone de esta información. Además, al menos el **95 %** dispondrá de información actualizada, en trenes y estaciones, cuando haya incidencias.\n\n**Tiempo.** Al menos el **95 %** de los clientes esperarán en andén **menos tiempo del intervalo máximo ofertado**.\n\n**Atención al cliente.** Trato con valoración de **8,5 o superior** (escala 0-10) en los Centros de Atención al Cliente, Oficinas de gestión y CIAC. Y al menos el **95 %** de quienes reclaman obtendrán respuesta personalizada en un plazo **no superior a 13 días hábiles**.\n\n**Confort.** Limpieza de trenes y estaciones con valoración de **7 o superior**.\n\n**Seguridad.** El **100 %** de los trenes equipados con **sistemas de protección automática de la marcha**, y más del **99,99 %** de los clientes viajando en condiciones de protección frente a agresiones.\n\n**Compensaciones.** El cliente tiene derecho a la devolución del importe del billete —o a un título igual o similar, **excluidos los abonos**— siempre que **no haya realizado el viaje** y además concurra alguna de estas circunstancias:\n\n- **Suspensión del servicio.**\n- Intervalo entre trenes **superior a 15 minutos** en trayectos cuyo Cuadro Horario prevé intervalos **inferiores a 7 min 30 s**.\n- Intervalo entre trenes **superior a 20 minutos** en trayectos cuyo intervalo previsto es **igual o superior a 7 min 30 s**.',
[
 { anverso: '¿Qué ocupación máxima se compromete Metro a que tenga el 95 % de los viajes en hora punta?', reverso: '4 clientes por metro cuadrado o menos.' },
 { anverso: '¿En qué plazo máximo se responde a una reclamación, y en qué porcentaje de casos?', reverso: 'No más de 13 días hábiles, para al menos el 95 % de quienes reclaman.' },
 { anverso: '¿Qué valoración mínima se compromete Metro a obtener en limpieza y cuál en atención al cliente?', reverso: 'Limpieza: 7 o superior. Atención al cliente: 8,5 o superior. Ambas en escala de 0 a 10.' },
 { anverso: '¿Cuándo hay derecho a devolución por intervalo excesivo entre trenes?', reverso: 'Si el intervalo supera 15 min cuando el previsto era menor de 7 min 30 s, o si supera 20 min cuando el previsto era igual o mayor de 7 min 30 s. Y siempre que no se haya realizado el viaje.' },
 { anverso: '¿Qué porcentaje de trenes están equipados con sistemas de protección automática de la marcha?', reverso: 'El 100 %.' }
], [9, 10, 11, 12]);

preguntas.push(
 q('1.4', 2, 'Según la Carta de Servicios, Metro se compromete a que al menos el 95 % de los clientes que viajen en hora punta lo hagan con una ocupación igual o inferior a:',
   ['4 clientes/m²', '2 clientes/m²', '6 clientes/m²', '8 clientes/m²'], 0,
   'El compromiso fija 4 clientes por metro cuadrado como ocupación máxima para el 95 % de los viajes en hora punta. Las otras cifras son del mismo orden de magnitud pero no son las que recoge la Carta de Servicios.', 9),

 q('1.4', 2, 'El plazo máximo comprometido para dar respuesta personalizada a una reclamación es de:',
   ['13 días hábiles', '30 días naturales', '10 días hábiles', '15 días hábiles'], 0,
   'La Carta de Servicios fija 13 días hábiles, y lo hace para al menos el 95 % de las reclamaciones. Es una cifra poco redonda y precisamente por eso cae en examen: no la confundas con los 10 o 15 días de otros procedimientos administrativos.', 10),

 q('1.4', 3, 'En la Carta de Servicios, la valoración mínima comprometida en la escala de 0 a 10 es de 8,5 para:',
   ['La atención al cliente en los Centros de Atención al Cliente, Oficinas de gestión y CIAC',
    'La limpieza de trenes y estaciones',
    'La información sobre la oferta básica del servicio',
    'La disponibilidad de las instalaciones de accesibilidad'],
   0,
   'El 8,5 corresponde al trato recibido en atención al cliente. La información sobre la oferta básica se compromete a 8 o superior, y la limpieza a 7 o superior. La accesibilidad no se mide con una escala de valoración, sino con un porcentaje de disponibilidad del 95 %.', 10),

 q('1.4', 3, 'Un viajero no ha realizado su viaje y el intervalo entre trenes ha sido de 17 minutos, en un trayecto cuyo Cuadro Horario prevé intervalos inferiores a 7 minutos y 30 segundos. ¿Tiene derecho a compensación?',
   ['Sí, porque el intervalo ha superado los 15 minutos previstos para ese supuesto',
    'No, porque el umbral en todos los casos son 20 minutos',
    'No, porque la compensación solo procede si se suspende el servicio',
    'Sí, pero únicamente si es portador de un abono'],
   0,
   'Para trayectos con intervalo previsto inferior a 7 min 30 s, el umbral que da derecho a compensación son 15 minutos, de modo que 17 minutos lo supera. Los 20 minutos son el umbral del otro supuesto, cuando el intervalo previsto es igual o superior a 7 min 30 s. La suspensión del servicio es solo una de las tres circunstancias posibles. Y los abonos están precisamente excluidos de la compensación.', 12),

 q('1.4', 1, 'El compromiso de que el 100 % de los trenes estén equipados con sistemas de protección automática de la marcha figura en la Carta de Servicios bajo el epígrafe:',
   ['Seguridad', 'Confort', 'Tiempo', 'Accesibilidad'], 0,
   'Ese compromiso aparece bajo el epígrafe de Seguridad, junto al de que más del 99,99 % de los clientes viajen protegidos frente a agresiones. Confort se refiere a la limpieza, Tiempo a la espera en andén y Accesibilidad a la disponibilidad de las instalaciones.', 11)
);

/* ══════════════════════════ 1.5 ══════════════════════════ */
tema('1.5', 'Estructura: órganos de gobierno y de gestión',
'La toma de decisiones en Metro de Madrid se estructura en **cuatro órganos**, y el manual los separa en dos categorías. Esa separación es la clave del epígrafe:\n\n**Dos órganos de gobierno:**\n\n- **Junta General de Accionistas**\n- **Consejo de Administración**\n\n**Dos órganos de gestión:**\n\n- **Comité de Dirección**\n- **Comité Ejecutivo**\n\n**Junta General de Accionistas.** Decide sobre modificación de los estatutos, nombramiento y destitución de administradores, censura de la gestión social, aprobación de las cuentas y aplicación del resultado, designación de auditores de cuentas, y transformación, fusión o escisión de la Sociedad. Está formada por responsables de la **Comunidad de Madrid**, accionista mayoritario desde diciembre de 2011.\n\n**Consejo de Administración.** Le corresponde la **gestión y administración** de la Sociedad. Ostenta su **representación** y tiene los poderes más amplios para gestionar los intereses sociales. Aprueba la **estructura orgánica** de la compañía. **Formula las cuentas anuales** y el informe de gestión, y propone la aplicación del resultado. Además revisa periódicamente los **riesgos de Cumplimiento Normativo**.\n\n> Matiz importante: el Consejo **formula** las cuentas anuales; la Junta las **aprueba**. Es una distinción societaria clásica y un distractor perfecto.\n\n**Comité Ejecutivo.** Conoce todos los aspectos vinculados a la actividad y adopta las decisiones oportunas, o las eleva al Consejo si exceden su competencia. **Propone al Consejo la estrategia** de la Compañía. Controla el cumplimiento del **presupuesto económico** y realiza las **contrataciones** de productos y servicios en los términos autorizados por el Consejo.\n\n**Comité de Dirección.** Conoce los aspectos fundamentales de la actividad para la toma de decisiones y traslada las propuestas al Consejo de Administración. **Concreta la estrategia a corto plazo** mediante objetivos corporativos y departamentales anuales. Se le someten la estrategia, los planes y proyectos corporativos, el control del presupuesto anual, el seguimiento de los riesgos corporativos y la evolución de la demanda y la calidad. **Se reúne quincenalmente** en convocatoria ordinaria.',
[
 { anverso: '¿Cuáles son los dos órganos de gobierno y los dos de gestión de Metro de Madrid?', reverso: 'Gobierno: Junta General de Accionistas y Consejo de Administración. Gestión: Comité de Dirección y Comité Ejecutivo.' },
 { anverso: '¿Qué órgano formula las cuentas anuales y cuál las aprueba?', reverso: 'Las formula el Consejo de Administración; las aprueba la Junta General de Accionistas.' },
 { anverso: '¿Con qué periodicidad se reúne el Comité de Dirección en convocatoria ordinaria?', reverso: 'Quincenalmente.' },
 { anverso: '¿Qué órgano concreta la estrategia a corto plazo mediante objetivos anuales?', reverso: 'El Comité de Dirección.' },
 { anverso: '¿Qué órgano ostenta la representación de la Sociedad?', reverso: 'El Consejo de Administración.' }
], [12, 13, 14]);

preguntas.push(
 q('1.5', 2, 'La estructura de toma de decisiones de Metro de Madrid se compone de:',
   ['Dos órganos de gobierno y dos órganos de gestión',
    'Tres órganos de gobierno y uno de gestión',
    'Un órgano de gobierno y tres de gestión',
    'Dos órganos de gobierno y tres de gestión'],
   0,
   'Son cuatro órganos repartidos a partes iguales: gobierno (Junta General de Accionistas y Consejo de Administración) y gestión (Comité de Dirección y Comité Ejecutivo). La confusión habitual es contar los cuatro sin distinguir a qué categoría pertenece cada uno.', 12),

 q('1.5', 3, '¿Qué órgano formula las cuentas anuales y el informe de gestión?',
   ['El Consejo de Administración', 'La Junta General de Accionistas', 'El Comité Ejecutivo', 'El Comité de Dirección'], 0,
   'El Consejo de Administración formula las cuentas anuales y el informe de gestión, y propone la aplicación del resultado. La Junta General es la que aprueba las cuentas y la aplicación del resultado: formular y aprobar son actos distintos y de órganos distintos.', 13),

 q('1.5', 2, 'El Comité de Dirección se reúne en convocatoria ordinaria:',
   ['Quincenalmente', 'Semanalmente', 'Mensualmente', 'Trimestralmente'], 0,
   'El manual precisa que el Comité de Dirección se reúne quincenalmente en convocatoria ordinaria. Es el único órgano del que el manual da una periodicidad concreta, lo que lo convierte en pregunta casi obligada.', 14),

 q('1.5', 3, 'La designación de las personas auditoras de cuentas corresponde a:',
   ['La Junta General de Accionistas', 'El Consejo de Administración', 'El Comité Ejecutivo', 'La Comunidad de Madrid directamente'], 0,
   'La designación de auditores figura entre las funciones de la Junta General de Accionistas, junto con la modificación de estatutos, el nombramiento y destitución de administradores y la aprobación de cuentas. El Consejo gestiona y administra, pero no designa a los auditores.', 12),

 q('1.5', 2, '¿Qué órgano propone al Consejo de Administración la estrategia de la Compañía, incluidos los planes y proyectos corporativos?',
   ['El Comité Ejecutivo', 'El Comité de Dirección', 'La Junta General de Accionistas', 'La Dirección de Recursos Humanos'], 0,
   'Es el Comité Ejecutivo quien propone al Consejo la estrategia de la Compañía. El Comité de Dirección traslada propuestas al Consejo y concreta la estrategia a corto plazo en objetivos anuales, pero la propuesta estratégica formal corresponde al Ejecutivo.', 13)
);


/* ══════════════════════════ 1.2 ══════════════════════════ */
tema('1.2', 'Líneas y estaciones de la red',
'La red que explota Metro de Madrid no es solo el metro convencional.\n\nSegún el manual, la red la completan **12 líneas**, el **Ramal Ópera – Príncipe Pío** y una línea de **Metro Ligero (ML1)**.\n\nTres definiciones que conviene tener clavadas:\n\n- **Línea**: el trayecto que recorren los trenes entre la cabecera y el final de línea. Se compone de estaciones e interestaciones.\n- **Interestación**: el tramo situado entre dos estaciones.\n- **Estación**: el lugar donde habitualmente hacen parada los trenes y se admiten viajeros.\n\nLa **denominación de cada línea** responde al formato *«Cabecera de línea – Final de línea»*.\n\nOjo con el **Ramal**: no es una línea, se cuenta aparte de las 12. Y el **Metro Ligero ML1** sí forma parte de la red explotada por Metro de Madrid, a diferencia de ML2 y ML3, que corresponden a Metro Ligero Oeste y en las que Metro de Madrid **no participa**.\n\nDentro del CRTM operan además otras empresas de transporte ferroviario metropolitano, y conviene no mezclarlas: **Metro de Madrid, S.A.**, **Transportes Ferroviarios de Madrid (T.F.M.)** —el tramo Puerta de Arganda–Arganda del Rey— y **Metro Ligero Línea 1 (ML1)**, cuya explotación corre a cargo de Metro de Madrid.',
[
 { anverso: '¿Cuántas líneas, ramales y líneas de metro ligero componen la red de Metro de Madrid?', reverso: '12 líneas + el Ramal Ópera–Príncipe Pío + una línea de Metro Ligero (ML1).' },
 { anverso: '¿Qué es una interestación?', reverso: 'El tramo situado entre dos estaciones.' },
 { anverso: '¿Qué formato sigue la denominación de una línea?', reverso: '«Cabecera de línea – Final de línea».' },
 { anverso: '¿En qué líneas de metro ligero NO participa Metro de Madrid?', reverso: 'En ML2 y ML3 (Metro Ligero Oeste). Sí explota la ML1.' }
], [18, 80]);

preguntas.push(
 q('1.2', 1, 'Según el temario oficial, ¿qué es una interestación?',
   ['El tramo situado entre dos estaciones', 'La estación en la que confluyen dos o más líneas',
    'El punto donde finaliza el andén y comienza el túnel', 'La estación cabecera de una línea'], 0,
   'El manual define la interestación como el tramo situado entre dos estaciones, y define la línea como el conjunto de estaciones e interestaciones. El punto donde acaba el andén es el piñón. La estación donde confluyen varias líneas es una estación de correspondencia.', 18),

 q('1.2', 2, 'De acuerdo con el manual oficial, la red de Metro de Madrid la completan actualmente:',
   ['12 líneas, el Ramal Ópera–Príncipe Pío y una línea de Metro Ligero (ML1)',
    '13 líneas, el Ramal Ópera–Príncipe Pío y tres líneas de Metro Ligero',
    '12 líneas y tres líneas de Metro Ligero, sin ramales',
    '11 líneas, dos ramales y una línea de Metro Ligero (ML1)'], 0,
   'El manual indica 12 líneas, el Ramal Ópera–Príncipe Pío y una línea de Metro Ligero, la ML1. El Ramal se cuenta aparte de las 12, y de las tres líneas de Metro Ligero de la región solo la ML1 forma parte de la red explotada por Metro de Madrid.', 18, { volatil: true }),

 q('1.2', 2, '¿A qué responde el formato con el que se denomina cada línea de Metro de Madrid?',
   ['«Cabecera de línea – Final de línea»', 'Al número de orden de su inauguración',
    'Al color con el que se representa en el plano de la red', 'Al distrito por el que discurre la mayor parte de su trazado'], 0,
   'El manual señala expresamente que la denominación de la línea responde al formato «Cabecera de línea – Final de línea». El número y el color son identificadores adicionales, pero no la denominación.', 18),

 q('1.2', 3, '¿En cuál de estas líneas de metro ligero NO participa Metro de Madrid, S.A.?',
   ['ML2 y ML3', 'ML1', 'Solo ML3', 'Participa en todas'], 0,
   'Metro de Madrid se encarga de la explotación de la ML1. Las líneas ML2 y ML3 corresponden a Metro Ligero Oeste, en la que el manual precisa que Metro de Madrid no participa.', 80),

 q('1.2', 3, 'Transportes Ferroviarios de Madrid (T.F.M.) explota el tramo comprendido entre:',
   ['Puerta de Arganda y Arganda del Rey', 'Colonia Jardín y Puerta de Boadilla',
    'La Granja y Hospital Infanta Sofía', 'Hospital del Henares y Barrio del Puerto'], 0,
   'T.F.M. corresponde al tramo Puerta de Arganda–Arganda del Rey. Colonia Jardín–Puerta de Boadilla es la ML3; La Granja–Hospital Infanta Sofía es MetroNorte; y Hospital del Henares–Barrio del Puerto es MetroEste.', 80)
);

/* ══════════════════════════ 1.3 ══════════════════════════ */
tema('1.3', 'Instalaciones de la estación y accesibilidad',
'Una estación se organiza en **vestíbulo** y **andén**.\n\nEl **vestíbulo** es la zona donde los usuarios **adquieren y validan** su título de transporte. Contiene máquinas automáticas expendedoras, elementos de peaje (torniquetes de control de paso) e interfonos.\n\nLos **interfonos amarillos** son puntos de información desde los que cualquier usuario contacta con el **Jefe de Sector** de la estación. Todas las estaciones cuentan con ellos.\n\nEn vestíbulos y andenes hay **plafones de información** que incluyen de forma permanente: plano de la red, plano zonal, tarifas y horarios. El **Reglamento de Viajeros** aparece **solo en vestíbulos**: ese matiz es material de pregunta.\n\nEn la zona de **andén** hay interfonos, megafonía, plafones, teleindicadores, y puede haber cuartos técnicos, de baja tensión, de limpieza o de enclavamientos.\n\nEl **piñón** es el punto donde finaliza el andén y comienza la interestación.\n\nElementos de **accesibilidad**, con datos concretos que caen en examen:\n\n- **Pavimento de borde de andén de botones**: señalización **amarilla**, de botones, que marca la distancia mínima de espera (una huella).\n- **Pintura fotoluminiscente** sobre el borde de andén.\n- **Pavimento de señalización de máquinas automáticas**: bandas antideslizantes de color **naranja** en el frontal de las máquinas.\n- **Pavimento ranurado** de escaleras fijas y ascensores: señalización podotáctil **amarilla**, que indica un cambio de nivel.\n- **Pulsadores** de apertura de puertas mampara: a la derecha de la puerta, a una altura **máxima de 115 cm**, con pictograma.\n- **Braille** en la parte inferior de los pasamanos de las escaleras fijas.\n- **Suplementos en borde de andén**: elevación del borde coincidiendo con la primera puerta, para trenes dotados de rampa.\n- **Apoyos isquiáticos** con cartel señalizador, que permiten descansar sin sentarse.',
[
 { anverso: '¿De qué color es el pavimento de botones del borde del andén y qué indica?', reverso: 'Amarillo. Marca la distancia mínima de seguridad para esperar al tren (una huella).' },
 { anverso: '¿A qué altura máxima se colocan los pulsadores de las puertas mampara?', reverso: '115 cm.' },
 { anverso: '¿Qué información aparece SOLO en los vestíbulos y no en los andenes?', reverso: 'El Reglamento de Viajeros.' },
 { anverso: '¿Con quién contactas a través de un interfono amarillo?', reverso: 'Con el Jefe de Sector de la estación.' },
 { anverso: '¿Qué es el piñón?', reverso: 'El punto donde finaliza el andén y comienza la interestación.' },
 { anverso: '¿De qué color son las bandas del pavimento que señaliza las máquinas automáticas?', reverso: 'Naranja.' }
], [23, 24, 25, 26, 27, 28]);

preguntas.push(
 q('1.3', 1, 'El vestíbulo de una estación se define como la zona donde los usuarios:',
   ['Adquieren y validan su título de transporte', 'Esperan la llegada del tren en la zona señalizada',
    'Acceden directamente a la plataforma de vía', 'Solicitan la devolución del importe de su billete'], 0,
   'El manual define el vestíbulo como la zona donde los usuarios adquieren y validan su título de transporte, y por eso alberga las máquinas automáticas y los elementos de peaje. La espera del tren ocurre en el andén y las devoluciones se gestionan en los Centros de Atención al Cliente.', 23),

 q('1.3', 2, 'El pavimento de botones situado en el borde del andén es de color:',
   ['Amarillo, y marca la distancia mínima de espera del tren', 'Naranja, y marca la distancia mínima de espera del tren',
    'Amarillo, y señala la ubicación de las máquinas automáticas', 'Blanco fotoluminiscente, y señala la salida de emergencia'], 0,
   'El pavimento de botones del borde de andén es amarillo y delimita la distancia mínima de seguridad para esperar el tren, equivalente a una huella. El naranja corresponde a las bandas que señalizan el frontal de las máquinas automáticas: no mezcles los dos colores.', 26, { pag2: 27 }),

 q('1.3', 3, 'Los pulsadores que permiten la apertura automática de las puertas mampara se colocan a una altura máxima de:',
   ['115 cm', '90 cm', '130 cm', '150 cm'], 0,
   'El manual fija la altura máxima de estos pulsadores en 115 cm, pensada para que resulten accesibles desde una silla de ruedas. Se sitúan además a la derecha de la puerta y van identificados con un pictograma.', 28),

 q('1.3', 3, 'De los siguientes contenidos de los plafones de información, ¿cuál aparece únicamente en los vestíbulos?',
   ['El Reglamento de Viajeros', 'El plano de la red', 'El plano zonal', 'Las tarifas'], 0,
   'El manual enumera el contenido permanente de los plafones y precisa entre paréntesis que el Reglamento de Viajeros figura solo en vestíbulos. El plano de la red, el plano zonal, las tarifas y los horarios están tanto en vestíbulos como en andenes.', 25),

 q('1.3', 2, 'En la estructura de una estación, el piñón es:',
   ['El punto donde finaliza el andén y comienza la interestación', 'El engranaje de tracción del bogie de la unidad tren',
    'El elemento de peaje que controla el paso de viajeros', 'El cuarto técnico situado al final del andén'], 0,
   'El piñón es el punto donde acaba el andén y empieza la interestación; en algunas estaciones hay una puerta que obstaculiza ese paso. El elemento de peaje es el torniquete de control de paso.', 25),

 q('1.3', 1, 'A través de los interfonos amarillos instalados en las estaciones, el usuario contacta con:',
   ['El Jefe de Sector de la estación', 'El Puesto de Control Central (PCC)',
    'El Centro de Atención al Cliente', 'El maquinista del próximo tren'], 0,
   'El manual indica que a través de los interfonos amarillos, o puntos de información, cualquier usuario puede ponerse en contacto con el Jefe de Sector de la estación. El PCC gestiona la circulación y no atiende directamente al viajero por este medio.', 24),

 q('1.3', 3, 'Los apoyos isquiáticos instalados en las estaciones sirven para:',
   ['Permitir el descanso de las personas sin necesidad de sentarse',
    'Señalizar el borde del andén a personas con baja visión',
    'Sujetar el pasamanos de las escaleras fijas',
    'Elevar el borde del andén frente a la primera puerta del tren'], 0,
   'Los apoyos isquiáticos, con su cartel señalizador, permiten descansar sin llegar a sentarse. La elevación del borde de andén frente a la primera puerta es el suplemento de borde de andén, que es otro elemento distinto, pensado para el embarque en silla de ruedas.', 28)
);

/* ══════════════════════════ 1.6 ══════════════════════════ */
tema('1.6', 'Recintos: atención al cliente, PCC y sede social',
'**Centros de Atención al Cliente.** Metro dispone de ellos en las estaciones de **Sol, Ópera y Plaza de Castilla**. Allí se obtiene información general, se formulan **Reclamaciones Oficiales** y se adquieren productos oficiales. Horario: **de 7:00 a 22:00 de lunes a viernes**, y **de 10:00 a 22:00 sábados, domingos y festivos**, los **365 días del año**.\n\n**Centro Interactivo de Atención al Cliente (CIAC).** Ubicado en la estación de **Alto del Arenal**. Permite contactar por canales habituales (teléfono, fax, correo electrónico) y multimedia. Horario **de 7 a 23 h, 365 días al año**. Teléfono **900 444 404**.\n\n**Puesto de Control Central (PCC).** Situado también en la estación de **Alto del Arenal**, es el centro estratégico desde donde se gestiona, controla y supervisa permanentemente el servicio. Sus **áreas operativas**:\n\n- **Control de Tráfico de Trenes**: regulación y control del tráfico, gestión de incidencias en la circulación y **control de la seguridad de trabajos en vía**.\n- **Control de Energía**: gestión de la alimentación de alta tensión, control de la distribución de tracción y servicios auxiliares, gestión de incidencias, control de consumos y facturación, y **ejecución de los cortes de tensión** para realizar trabajos.\n- **Información al Viajero**: elabora, emite y gestiona los mensajes, y controla el estado de las instalaciones de información.\n- **Gestión de Información de Explotación**: registro y control de incidencias, información de explotación y averías de trenes, y control del personal del Puesto de Mando.\n- **Control de Instalaciones de Estaciones**: supervisión y telemando, coordinación de recursos en incidencias, soporte al personal de línea, control de peaje, venta con pago electrónico y recaudación.\n- **Protección Civil y Seguridad**: gestión de emergencias, solicitud de recursos externos, control de alarmas anti-intrusión y telemando de instalaciones contra incendios y salidas de emergencia.\n\n**Sede social.** Junto a Plaza de Castilla, en la **Avenida de Asturias nº 4**. Es el edificio corporativo, donde está la práctica totalidad del personal administrativo y la dirección de la compañía.',
[
 { anverso: '¿En qué estaciones hay Centro de Atención al Cliente?', reverso: 'Sol, Ópera y Plaza de Castilla.' },
 { anverso: '¿Dónde está el Puesto de Control Central y dónde el CIAC?', reverso: 'Los dos en la estación de Alto del Arenal.' },
 { anverso: '¿Cuál es el teléfono del CIAC y su horario?', reverso: '900 444 404, de 7 a 23 h, los 365 días del año.' },
 { anverso: '¿Qué área del PCC ejecuta los cortes de tensión para realizar trabajos?', reverso: 'El área de Control de Energía.' },
 { anverso: '¿Dónde está la sede social de Metro de Madrid?', reverso: 'Avenida de Asturias nº 4, junto a Plaza de Castilla.' }
], [31, 32, 33]);

preguntas.push(
 q('1.6', 2, 'Los Centros de Atención al Cliente de Metro de Madrid se encuentran en las estaciones de:',
   ['Sol, Ópera y Plaza de Castilla', 'Sol, Nuevos Ministerios y Avenida de América',
    'Ópera, Atocha y Plaza de Castilla', 'Sol, Alto del Arenal y Ópera'], 0,
   'Son tres: Sol, Ópera y Plaza de Castilla. Alto del Arenal aparece en el mismo capítulo, pero por albergar el CIAC y el Puesto de Control Central, no un Centro de Atención al Cliente.', 31),

 q('1.6', 2, 'El Puesto de Control Central (PCC) de Metro de Madrid está situado en la estación de:',
   ['Alto del Arenal', 'Plaza de Castilla', 'Sol', 'Nuevos Ministerios'], 0,
   'El PCC está en la estación de Alto del Arenal, la misma que alberga el Centro Interactivo de Atención al Cliente. Plaza de Castilla es donde se sitúa la sede social, en la Avenida de Asturias nº 4.', 32),

 q('1.6', 3, 'El horario de los Centros de Atención al Cliente los sábados, domingos y festivos es:',
   ['De 10:00 a 22:00 horas', 'De 7:00 a 22:00 horas', 'De 9:00 a 21:00 horas', 'De 7:00 a 23:00 horas'], 0,
   'De lunes a viernes abren de 7:00 a 22:00, y los sábados, domingos y festivos de 10:00 a 22:00, los 365 días del año. El horario de 7 a 23 h es el del CIAC, que es un centro distinto.', 31),

 q('1.6', 3, 'Dentro del PCC, la ejecución de los cortes de tensión para la realización de trabajos corresponde al área de:',
   ['Control de Energía', 'Control de Tráfico de Trenes', 'Control de Instalaciones de Estaciones', 'Protección Civil y Seguridad'], 0,
   'El área de Control de Energía gestiona la alimentación de alta tensión y ejecuta los cortes de tensión para trabajos. El área de Control de Tráfico de Trenes sí se ocupa del control de la seguridad de trabajos en vía, que es lo que hace fácil confundir ambas.', 32),

 q('1.6', 3, 'El control de alarmas anti-intrusión y el telemando de las instalaciones contra incendios corresponde, dentro del PCC, al área de:',
   ['Protección Civil y Seguridad', 'Control de Instalaciones de Estaciones',
    'Gestión de Información de Explotación', 'Control de Energía'], 0,
   'El área de Protección Civil y Seguridad gestiona emergencias e incidencias, solicita recursos externos y controla las alarmas anti-intrusión y las instalaciones contra incendios y salidas de emergencia. Control de Instalaciones de Estaciones se ocupa del telemando de estaciones, del peaje y de la recaudación.', 33),

 q('1.6', 1, 'El teléfono del Centro Interactivo de Atención al Cliente (CIAC) es:',
   ['900 444 404', '900 400 444', '012', '010'], 0,
   'El manual da el 900 444 404 para el CIAC, ubicado en Alto del Arenal y operativo de 7 a 23 h los 365 días del año. El 012 aparece en el manual en otro contexto: para pedir cita previa en las Oficinas de Gestión de la Tarjeta de Transporte Público.', 31)
);

/* ══════════════════════════ 1.7 ══════════════════════════ */
tema('1.7', 'Depósitos y cocheras',
'Ambos son recintos donde **se estacionan los trenes**, pero no hacen lo mismo. La diferencia está en las tareas:\n\n- **Depósitos**: estacionamiento y labores de **reparación, mantenimiento y limpieza**.\n- **Cocheras**: estacionamiento y labores de **mantenimiento y limpieza**. **Sin reparación**.\n\nMetro cuenta actualmente con **11 depósitos** y **8 cocheras**.\n\n**Los 11 depósitos y su línea:**\n\n| Depósito | Nº | Conecta con |\n|---|---|---|\n| Ventas | 2 | Línea 2 |\n| Canillejas | 4 | Líneas 5 y 7 |\n| Aluche | 5 | Línea 5 |\n| Fuencarral | 6 | Línea 10 |\n| Sacedal | 7 | Línea 9 |\n| Laguna | 8 | Línea 6 |\n| Hortaleza | 9 | Superficie: L4. Subterráneo: L1 y ML1 |\n| Cuatro Vientos | 10 | Líneas 10 y 11 |\n| Loranca | 11 | Línea 12 |\n| Valdecarros | 12 | Línea 1 |\n| Villaverde | 13 | Línea 3 |\n\n> Fíjate en que la numeración **no es correlativa desde el 1**: empieza en el 2 y llega al 13, con huecos. Y **Hortaleza (9)** es el único con dos espacios, uno en superficie y otro subterráneo.\n\n**Las 8 cocheras y su línea:**\n\n- **Moncloa** → línea 3\n- **Ciudad Universitaria** → línea 6\n- **Universidad Rey Juan Carlos** → línea 12\n- **Puerta de Arganda** → línea 9\n- **Miguel Hernández** → línea 1\n- **El Bercial** → línea 12\n- **Argüelles** → línea 4\n- **Arganzuela/Planetario** → línea 6\n\nHay dos pares que se repiten de línea: **línea 12** (Universidad Rey Juan Carlos y El Bercial) y **línea 6** (Ciudad Universitaria y Arganzuela/Planetario).',
[
 { anverso: '¿Qué diferencia hay entre un depósito y una cochera?', reverso: 'En los depósitos se hacen reparación, mantenimiento y limpieza. En las cocheras solo mantenimiento y limpieza: no se repara.' },
 { anverso: '¿Cuántos depósitos y cuántas cocheras tiene Metro de Madrid?', reverso: '11 depósitos y 8 cocheras.' },
 { anverso: '¿Qué depósito consta de dos espacios, uno en superficie y otro subterráneo?', reverso: 'Hortaleza (Depósito 9). El de superficie conecta con la L4; el subterráneo con la L1 y la ML1.' },
 { anverso: '¿Con qué líneas conecta el Depósito 4, de Canillejas?', reverso: 'Con las líneas 5 y 7.' },
 { anverso: '¿A qué línea sirven las cocheras de Universidad Rey Juan Carlos y El Bercial?', reverso: 'Las dos a la línea 12.' }
], [33, 34, 35, 36]);

preguntas.push(
 q('1.7', 2, 'La diferencia entre un depósito y una cochera en Metro de Madrid es que:',
   ['En los depósitos se realizan también labores de reparación, y en las cocheras no',
    'En las cocheras se estacionan los trenes y en los depósitos no',
    'Las cocheras están siempre en superficie y los depósitos en subterráneo',
    'En los depósitos no se realizan labores de limpieza'], 0,
   'En ambos se estacionan trenes. La diferencia que marca el manual está en las tareas: los depósitos hacen reparación, mantenimiento y limpieza; las cocheras solo mantenimiento y limpieza. La ubicación en superficie o subterráneo no es el criterio de distinción.', 33, { pag2: 35 }),

 q('1.7', 2, '¿Cuántos depósitos y cuántas cocheras existen actualmente en Metro de Madrid?',
   ['11 depósitos y 8 cocheras', '8 depósitos y 11 cocheras', '13 depósitos y 8 cocheras', '11 depósitos y 12 cocheras'], 0,
   'El manual indica 11 depósitos y 8 cocheras. El 13 despista porque es el número más alto de la serie de depósitos (Villaverde, Depósito 13), pero la numeración no es correlativa y no coincide con el total.', 33, { pag2: 35, volatil: true }),

 q('1.7', 3, 'El Depósito 9, de Hortaleza, presenta la particularidad de que:',
   ['Consta de dos espacios: el de superficie conecta con la línea 4 y el subterráneo con la línea 1 y la ML1',
    'Es el único depósito que no está conectado a ninguna línea',
    'Es el único que da servicio simultáneamente a las líneas 5 y 7',
    'Comparte instalaciones con la cochera de Argüelles'], 0,
   'Hortaleza es el único depósito con dos espacios diferenciados: superficie conectada con la L4, y subterráneo conectado con la L1 y la ML1. El depósito que conecta con las líneas 5 y 7 es Canillejas, el Depósito 4.', 34),

 q('1.7', 3, 'La cochera de Arganzuela/Planetario está destinada al estacionamiento de trenes de la línea:',
   ['6', '3', '12', '1'], 0,
   'Arganzuela/Planetario sirve a la línea 6, igual que la cochera de Ciudad Universitaria. Moncloa sirve a la 3, Miguel Hernández a la 1, y Universidad Rey Juan Carlos y El Bercial a la 12.', 36),

 q('1.7', 3, 'El Depósito 6, de Fuencarral, se encuentra conectado directamente con la línea:',
   ['10', '6', '9', '1'], 0,
   'Fuencarral, Depósito 6, conecta con la línea 10. Es un caso en el que el número del depósito no coincide con el número de la línea, algo que ocurre en la mayoría de ellos y que conviene no dar por hecho.', 34)
);

/* ══════════════════════════ 1.8 ══════════════════════════ */
tema('1.8', 'Infraestructura de la red: gálibos, ancho de vía y túnel',
'Metro de Madrid explota dos tipos de ferrocarril: **metro pesado** (convencional) y **metro ligero**. Cada uno tiene infraestructura y normativa de circulación propias.\n\n**Sentido de circulación.** La circulación se hace en **vía doble**, con un sentido preestablecido para cada una:\n\n- **Metro pesado: por la izquierda.**\n- **Metro ligero: por la derecha.**\n- Excepción en ambos: los tramos de vía donde se permita la circulación en ambos sentidos.\n\n**Ancho de vía.** Aquí la trampa es que las dos cifras se parecen muchísimo:\n\n- Metro pesado: **1.445 mm**\n- Metro ligero: **1.435 mm**\n\n**Gálibos** (solo en metro pesado). Según las dimensiones máximas de los vehículos:\n\n| Gálibo | Anchura | Líneas | Series de trenes |\n|---|---|---|---|\n| **Estrecho** | 230 cm | 1, 2, 3, 4, 5 y Ramal | 2000 y 3000 |\n| **Ancho** | 280 cm | 6, 7, 8, 9, 10, 11 y 12 | 5000, 6000, 7000, 8000 y 9000 |\n\n> Actualmente **todos los proyectos nuevos** se realizan para trenes de **gálibo ancho**.\n\n**Captación de corriente de tracción.** Mediante **línea aérea**:\n\n- Metro pesado: **600 V cc o 1.500 V cc**, según las líneas.\n- Metro ligero: **750 V cc**.\n\n**El túnel.** Para diseñar la sección se tienen en cuenta, además de las dimensiones del tren:\n\n- En la **bóveda**, los anclajes para sustentar la línea aérea.\n- En el **paramento**, bandejas o perchas para cables de alta y baja tensión, señalización y comunicaciones, y las **señales luminosas** de control de la circulación.\n- Si las características lo permiten, **pasillos laterales de evacuación de 75 cm de ancho**.\n\nEn el diseño de una línea, el punto de partida es el **tipo de material móvil** que va a circular por ella. A partir de ahí se aplican especificaciones como la dimensión transversal del túnel, la longitud de las estaciones, las rampas, pendientes y radios de curva máximos, la capacidad de depósitos y cocheras, y los enlaces con otras líneas.',
[
 { anverso: '¿Por qué lado circula el metro pesado y por cuál el metro ligero?', reverso: 'Metro pesado por la izquierda; metro ligero por la derecha. Salvo tramos habilitados para ambos sentidos.' },
 { anverso: '¿Cuál es el ancho de vía en metro pesado y en metro ligero?', reverso: '1.445 mm en metro pesado y 1.435 mm en metro ligero.' },
 { anverso: '¿Qué anchura tiene el gálibo estrecho y qué líneas lo usan?', reverso: '230 cm. Líneas 1, 2, 3, 4, 5 y el Ramal. Trenes de las series 2000 y 3000.' },
 { anverso: '¿Qué anchura tiene el gálibo ancho y qué series circulan por él?', reverso: '280 cm. Series 5000, 6000, 7000, 8000 y 9000, en las líneas 6 a 12.' },
 { anverso: '¿A qué tensión se capta la corriente de tracción?', reverso: '600 V cc o 1.500 V cc en metro pesado, según la línea; 750 V cc en metro ligero.' },
 { anverso: '¿Qué anchura tienen los pasillos laterales de evacuación del túnel?', reverso: '75 centímetros, cuando las características del túnel lo permiten.' }
], [39, 40, 41]);

preguntas.push(
 q('1.8', 2, 'En metro pesado la circulación se realiza por la izquierda. En metro ligero:',
   ['Por la derecha', 'También por la izquierda', 'Por la izquierda solo en túnel', 'No hay sentido preestablecido'], 0,
   'El manual establece que en metro pesado se circula por la izquierda y en metro ligero por la derecha, con la misma salvedad en ambos casos: los tramos donde se permita la circulación en los dos sentidos. Es una de las diferencias más preguntables entre ambos sistemas.', 39),

 q('1.8', 3, 'El ancho de vía en metro pesado y en metro ligero es, respectivamente:',
   ['1.445 mm y 1.435 mm', '1.435 mm y 1.445 mm', '1.668 mm y 1.435 mm', '1.445 mm y 1.500 mm'], 0,
   'Son 1.445 mm en metro pesado y 1.435 mm en metro ligero: diez milímetros de diferencia y el orden importa. La opción invertida es el error clásico. El ancho de 1.668 mm es el ibérico de la red convencional de Renfe, ajeno a este temario.', 39),

 q('1.8', 2, 'Las líneas 1, 2, 3, 4, 5 y el Ramal Ópera–Príncipe Pío corresponden a:',
   ['Gálibo estrecho, de 230 cm, con trenes de las series 2000 y 3000',
    'Gálibo ancho, de 280 cm, con trenes de las series 5000 a 9000',
    'Gálibo estrecho, de 280 cm, con trenes de la serie 8000',
    'Gálibo ancho, de 230 cm, con trenes de la serie 3000'], 0,
   'Esas líneas son de gálibo estrecho, 230 cm, y se explotan con trenes de las series 2000 y 3000. El gálibo ancho, de 280 cm, corresponde a las líneas 6 a 12 y a las series 5000, 6000, 7000, 8000 y 9000. Las dos parejas cifra-serie van siempre juntas.', 39, { pag2: 40 }),

 q('1.8', 3, 'La captación de corriente de tracción en metro ligero se realiza mediante línea aérea a:',
   ['750 V cc', '600 V cc', '1.500 V cc', '380 V ca'], 0,
   'El metro ligero trabaja a 750 V cc. En metro pesado la captación es a 600 V cc o 1.500 V cc según las líneas. Los 380 V de corriente alterna trifásica son una de las salidas del convertidor estático del tren, no la tensión de captación.', 40),

 q('1.8', 3, 'Cuando las características del túnel lo permiten, se diseñan pasillos laterales de evacuación de:',
   ['75 centímetros de ancho', '50 centímetros de ancho', '1 metro de ancho', '80 centímetros de ancho'], 0,
   'El manual fija 75 cm de ancho para los pasillos laterales de evacuación. Los 80 cm son la anchura aproximada de la Zona A o franja de borde de andén, un dato del mismo capítulo que se presta a confusión.', 41),

 q('1.8', 2, 'Actualmente, todos los proyectos de nuevas líneas se realizan para trenes de:',
   ['Gálibo ancho', 'Gálibo estrecho', 'Metro ligero', 'Gálibo mixto'], 0,
   'El manual indica expresamente que todos los proyectos se realizan ya para trenes de gálibo ancho, es decir, 280 cm. El gálibo estrecho pervive en las líneas más antiguas, de la 1 a la 5 y el Ramal.', 40)
);

/* ══════════════════════════ 1.9 ══════════════════════════ */
tema('1.9', 'Estación, andén, zonas A y B, y plataforma de vía',
'Definiciones literales del manual. Son de las que se preguntan palabra por palabra.\n\n**Estación.** Conjunto de instalaciones preparado para que los viajeros puedan **subir y bajar de los trenes**. Sus **límites son los piñones** de entrada y salida.\n\n**Piñón.** Punto donde **finaliza el andén y comienza la interestación**. En las estaciones donde hay una puerta que obstaculiza el paso a la interestación, se considera piñón a ese punto.\n\n**Interestación.** Trayecto comprendido entre el **piñón de salida** de una estación y el **piñón de entrada** de la siguiente.\n\n**Andén.** Zona de la estación a lo largo de la vía, de **anchura variable** y con la altura conveniente para facilitar el acceso a los trenes. Sus límites son también los piñones de entrada y salida.\n\n**Las dos zonas del andén** (a efectos de la Normativa Interna de Circulación):\n\n- **Zona A — franja de borde de andén.** Franja de **aproximadamente 80 cm** de anchura, que va desde el comienzo de la **banda amarilla** del andén hasta el **borde** que delimita el inicio de la plataforma de vía. En los **andenes centrales hay dos franjas**, una por cada lado.\n- **Zona B.** **Todo el andén excluyendo la Zona A.**\n\n**Plataforma de vía.** Estructura donde se asientan las vías. Su extensión depende de dónde esté:\n\n- En **túnel**: delimitada por la sección del propio túnel.\n- A **cielo abierto**: la zona que abarca todas las vías, **ampliada en 3 metros** desde los carriles exteriores, salvo que exista un elemento separador (aceras, viales, setos).\n- En **estaciones**: la zona comprendida entre los andenes, o entre el andén y el paramento lateral.',
[
 { anverso: '¿Cuáles son los límites de una estación?', reverso: 'Los piñones de entrada y de salida.' },
 { anverso: '¿Qué anchura aproximada tiene la Zona A y desde dónde hasta dónde va?', reverso: 'Unos 80 cm, desde el comienzo de la banda amarilla hasta el borde del andén.' },
 { anverso: '¿Qué es la Zona B del andén?', reverso: 'Todo el andén excluyendo la Zona A.' },
 { anverso: '¿Cuántas franjas de borde de andén hay en un andén central?', reverso: 'Dos, una por cada lado.' },
 { anverso: 'A cielo abierto, ¿hasta dónde llega la plataforma de vía?', reverso: 'Abarca todas las vías, ampliada en 3 metros desde los carriles exteriores, salvo que haya un elemento separador.' }
], [41, 42, 43]);

preguntas.push(
 q('1.9', 2, 'La Zona A del andén, o franja de borde de andén, tiene una anchura aproximada de:',
   ['80 cm', '75 cm', '1 metro', '50 cm'], 0,
   'La Zona A mide aproximadamente 80 cm y va desde el comienzo de la banda amarilla hasta el borde del andén. Los 75 cm corresponden al ancho de los pasillos laterales de evacuación del túnel: son dos medidas del mismo manual muy próximas entre sí.', 42),

 q('1.9', 1, 'La Zona B del andén se define como:',
   ['Todo el andén excluyendo la Zona A', 'La zona situada entre la vía y la banda amarilla',
    'La zona de acceso desde el vestíbulo', 'La franja de 3 metros desde los carriles exteriores'], 0,
   'La Zona B es todo el andén salvo la Zona A. La zona entre la vía y la banda amarilla es precisamente la Zona A. Y los 3 metros desde los carriles exteriores definen la plataforma de vía a cielo abierto, no una zona del andén.', 42),

 q('1.9', 3, 'En un andén central existirán:',
   ['Dos franjas de borde de andén, una por cada lado', 'Una única franja de borde de andén',
    'Tres zonas: A, B y C', 'Ninguna franja, por estar protegido con mamparas'], 0,
   'El manual precisa que en los andenes centrales existirán dos franjas de borde de andén, una por cada lado, ya que hay vía a ambos lados. Solo se distinguen dos zonas, A y B, en cualquier tipo de andén.', 42),

 q('1.9', 3, 'A cielo abierto, la plataforma de vía comprende la zona que abarca todas las vías, ampliada desde los carriles exteriores en:',
   ['3 metros', '1,5 metros', '5 metros', '80 centímetros'], 0,
   'Son 3 metros desde los carriles exteriores, salvo que la plataforma esté delimitada por algún elemento separador como aceras, viales o setos. En túnel la plataforma queda delimitada por la propia sección del túnel, sin medida añadida.', 43),

 q('1.9', 2, 'La interestación es el trayecto comprendido entre:',
   ['El piñón de salida de una estación y el piñón de entrada de la siguiente',
    'Los dos piñones de una misma estación',
    'El final del andén y la primera señal luminosa',
    'Dos señales consecutivas que protegen un cantón'], 0,
   'La interestación va del piñón de salida de una estación al piñón de entrada de la siguiente. Los dos piñones de una misma estación delimitan la propia estación y su andén. El tramo entre dos señales consecutivas es el cantón, un concepto de señalización distinto.', 42)
);

/* ══════════════════════════ 1.10 ══════════════════════════ */
tema('1.10', 'Clasificación y numeración de las vías',
'**Clasificación de las vías**, según el manual:\n\n- **Vías principales**: las destinadas a la **circulación de trenes con viajeros**.\n- **Vías secundarias**: **todas las restantes** — sacos de maniobras, túneles de enlace, vías de depósitos o cocheras, etc.\n- **Vías de pruebas**: una **vía secundaria** dotada de las instalaciones necesarias para realizar **pruebas dinámicas** con los trenes.\n- **Vías banalizadas**: las provistas de señalización y enclavamiento que permiten la circulación de trenes **en uno y otro sentido, indistintamente**.\n\n> Fíjate en que la vía de pruebas **es un tipo de vía secundaria**, no una cuarta categoría independiente.\n\n**Numeración de las vías principales.** Se identifican tomando como referencia el **origen convencional** establecido para cada línea:\n\n- **Vía I**: la recorrida por los trenes **alejándose** del origen convencional.\n- **Vía II**: la recorrida por los trenes **acercándose** al origen convencional.\n\n**Vía I en cada línea:**\n\n| Línea | Vía I |\n|---|---|\n| 1 | Pinar de Chamartín → Valdecarros |\n| 2 | Las Rosas → Cuatro Caminos |\n| 3 | El Casar → Moncloa |\n| 4 | Pinar de Chamartín → Argüelles |\n| 5 | Alameda de Osuna → Casa de Campo |\n| 6 | Circular. **Vía interior** |\n| 7 | 7B: Hospital de Henares → Estadio Metropolitano · 7A: Estadio Metropolitano → Pitis |\n| 8 | Nuevos Ministerios → Aeropuerto T-4 |\n| 9 | 9B: Arganda del Rey → Puerta de Arganda · 9A: Puerta de Arganda → Paco de Lucía |\n| 10 | 10B: Hospital Infanta Sofía → Tres Olivos · 10A: Tres Olivos → Puerta del Sur |\n| 11 | Plaza Elíptica → La Fortuna |\n| 12 | Circular. **Vía interior** |\n| Ramal | Ópera → Príncipe Pío |\n| ML-1 | Las Tablas → Pinar de Chamartín |\n\nLas dos **líneas circulares**, la **6** y la **12 (MetroSur)**, son el caso especial: en ellas la vía I es la **vía interior**, porque no hay un extremo del que alejarse.',
[
 { anverso: '¿Qué es una vía principal?', reverso: 'La destinada a la circulación de trenes con viajeros. Todas las demás son secundarias.' },
 { anverso: '¿Qué es una vía banalizada?', reverso: 'La provista de señalización y enclavamiento que permite circular en uno y otro sentido indistintamente.' },
 { anverso: '¿Cómo se distinguen la vía I y la vía II?', reverso: 'Vía I: los trenes se alejan del origen convencional de la línea. Vía II: se acercan a él.' },
 { anverso: '¿Cuál es la vía I en las líneas circulares 6 y 12?', reverso: 'La vía interior.' },
 { anverso: '¿De qué tipo de vía es una vía de pruebas?', reverso: 'Es una vía secundaria, dotada de instalaciones para pruebas dinámicas con trenes.' }
], [44, 45]);

preguntas.push(
 q('1.10', 1, 'Las vías destinadas a la circulación de trenes con viajeros se denominan:',
   ['Vías principales', 'Vías secundarias', 'Vías banalizadas', 'Vías de servicio'], 0,
   'Las vías principales son las destinadas a la circulación de trenes con viajeros. Las secundarias son todas las restantes: sacos de maniobras, túneles de enlace, vías de depósitos y cocheras. Banalizada se refiere a otra cosa: a que permita circular en ambos sentidos.', 44),

 q('1.10', 2, 'Una vía de pruebas es, según el manual:',
   ['Una vía secundaria dotada de instalaciones para realizar pruebas dinámicas con los trenes',
    'Una vía principal reservada a los trenes de trabajo',
    'Una cuarta categoría de vía, independiente de las principales y secundarias',
    'Cualquier vía banalizada de un depósito'], 0,
   'El manual la define expresamente como una vía secundaria con las instalaciones necesarias para pruebas dinámicas. No es una categoría aparte ni una vía principal: es un subtipo dentro de las secundarias.', 44),

 q('1.10', 2, 'La vía I de una línea es la recorrida por los trenes:',
   ['Alejándose del origen convencional de la línea', 'Acercándose al origen convencional de la línea',
    'En sentido ascendente de numeración de estaciones', 'Siempre en el sentido de las agujas del reloj'], 0,
   'La vía I es la que recorren los trenes alejándose del origen convencional establecido para la línea, y la vía II la que recorren acercándose a él. La numeración de estaciones y el sentido horario no intervienen en la definición.', 45),

 q('1.10', 3, 'En las líneas 6 y 12, que son circulares, la vía I es:',
   ['La vía interior', 'La vía exterior', 'La que circula en sentido horario', 'No existe distinción entre vía I y vía II'], 0,
   'En las dos líneas circulares de la red, la 6 y la 12 (MetroSur), el manual establece que la vía I es la vía interior. Al no haber cabecera ni final de línea, el criterio de alejarse del origen no puede aplicarse y se sustituye por el de interior/exterior.', 45),

 q('1.10', 3, 'En la línea 8, la vía I es la recorrida en el sentido:',
   ['Nuevos Ministerios hacia Aeropuerto T-4', 'Aeropuerto T-4 hacia Nuevos Ministerios',
    'Nuevos Ministerios hacia Pitis', 'Barajas hacia Nuevos Ministerios'], 0,
   'En la línea 8 la vía I va de Nuevos Ministerios hacia Aeropuerto T-4. El sentido contrario sería la vía II. Pitis pertenece a la línea 7A, no a la 8.', 45)
);

/* ══════════════════════════ 1.11 ══════════════════════════ */
tema('1.11', 'Cantones, circuitos de vía y sistemas de bloqueo',
'La circulación por vías principales se caracteriza por disponer de **bloqueo automático** y **ATP**. Ambos tienen el mismo objeto: garantizar la seguridad manteniendo entre los trenes la distancia necesaria para que **no se produzcan alcances ni choques**, y limitando la velocidad máxima en función del trazado, de la situación del tren anterior y de las circunstancias del momento.\n\n**La cadena de conceptos**, de mayor a menor:\n\n- Las líneas se dividen en tramos llamados **cantones**, **protegidos o limitados por dos señales consecutivas**.\n- Cada cantón está formado por **uno o varios circuitos de vía**, que los trenes van **ocupando y liberando** a su paso.\n- La apertura y cierre de las señales, y la ocupación y liberación de los circuitos de vía, los controlan los **enclavamientos**.\n\n**Aspectos de la señal con cantón ocupado.** Mientras un cantón está ocupado por un tren, la señal de entrada permanece en:\n\n- **Rojo**: prohíbe el acceso a **cualquier tren**.\n- **M-Roja**: prohíbe el acceso **solo a los trenes que no estén protegidos por el sistema ATP**.\n\n**Los tres sistemas de bloqueo:**\n\n**A. Bloqueo automático.** Permite una circulación segura mediante la vigilancia permanente que realiza el enclavamiento de señales sobre los circuitos de vía. El enclavamiento controla la actuación de las señales que protegen los cantones y envía órdenes e informaciones de ATP a los equipos de a bordo.\n\n**B. Bloqueo telefónico.** Permite circular con seguridad mediante **órdenes radiadas o escritas**, en cuatro casos:\n\n1. Avería en los enclavamientos que impide el bloqueo automático.\n2. **Auxiliar a trenes detenidos.**\n3. Circular por un **cantón ocupado**.\n4. Circular **a contravía** por un tramo sin señalización.\n\n**C. Bloqueo por ocupación o acantonamiento.** Se emplea en dos supuestos:\n\n- Ante un tren que **no garantiza el correcto shuntado** de los circuitos de vía. El PCC bloquea el acceso de cualquier otro tren por detrás, **en la estación anterior** al punto donde esté el tren acantonado.\n- Ante un tren que necesita **movimientos hacia delante y hacia atrás**, o que **ocupa indistintamente las dos vías**. El PCC bloquea el acceso a la zona, normalmente mediante **dos puntos kilométricos o puntos singulares** que la delimiten.',
[
 { anverso: '¿Qué es un cantón?', reverso: 'Un tramo de línea protegido o limitado por dos señales consecutivas, formado por uno o varios circuitos de vía.' },
 { anverso: '¿Qué diferencia hay entre el aspecto rojo y el M-Roja?', reverso: 'El rojo prohíbe el paso a cualquier tren. El M-Roja solo a los trenes que no estén protegidos por ATP.' },
 { anverso: '¿Cuáles son los tres sistemas de bloqueo?', reverso: 'Bloqueo automático, bloqueo telefónico y bloqueo por ocupación o acantonamiento.' },
 { anverso: '¿En qué cuatro casos se usa el bloqueo telefónico?', reverso: 'Avería de enclavamientos, auxilio a trenes detenidos, circular por cantón ocupado y circular a contravía por tramo sin señalización.' },
 { anverso: '¿Qué controla los enclavamientos?', reverso: 'La apertura y cierre de las señales y la ocupación y liberación de los circuitos de vía.' }
], [46, 47, 48]);

preguntas.push(
 q('1.11', 2, 'Un cantón es un tramo de línea:',
   ['Protegido o limitado por dos señales consecutivas', 'Comprendido entre dos estaciones consecutivas',
    'Delimitado por dos puntos kilométricos', 'Formado por un único circuito de vía siempre'], 0,
   'El cantón está protegido o limitado por dos señales consecutivas y puede estar formado por uno o varios circuitos de vía, no necesariamente uno. El tramo entre dos estaciones es la interestación, y los puntos kilométricos se usan para delimitar zonas de acantonamiento.', 46),

 q('1.11', 3, 'Cuando una señal presenta el aspecto M-Roja, prohíbe el acceso al cantón:',
   ['Solo a los trenes que no estén protegidos por el sistema ATP', 'A todos los trenes sin excepción',
    'Solo a los trenes de trabajo y vehículos auxiliares', 'Solo a los trenes que circulen a contravía'], 0,
   'La distinción es fina y muy preguntable: el aspecto rojo prohíbe el acceso a cualquier tren, mientras que el M-Roja lo prohíbe únicamente a aquellos que no estén protegidos por ATP. Un tren con ATP operativo sí puede rebasar una M-Roja bajo las condiciones del sistema.', 46),

 q('1.11', 2, '¿Cuál de estos NO es uno de los sistemas de bloqueo que recoge el manual?',
   ['Bloqueo por enclavamiento manual', 'Bloqueo automático', 'Bloqueo telefónico', 'Bloqueo por ocupación o acantonamiento'], 0,
   'Los sistemas son tres: automático, telefónico y por ocupación o acantonamiento. El «bloqueo por enclavamiento manual» no existe como tal: el enclavamiento es el dispositivo que hace posible el bloqueo automático, no un sistema de bloqueo aparte.', 46),

 q('1.11', 3, 'El bloqueo telefónico se utiliza, entre otros casos, para:',
   ['Auxiliar a trenes detenidos', 'Sustituir al ATP en la conducción en modo ATO',
    'Regular el intervalo entre trenes en hora punta', 'Autorizar el acceso de personal a la plataforma de vía'], 0,
   'Los cuatro casos del bloqueo telefónico son: avería de enclavamientos, auxilio a trenes detenidos, circulación por cantón ocupado y circulación a contravía por tramo sin señalización. La regulación del intervalo es función del Control de Tráfico del PCC, y el acceso de personal a la vía se tramita por otros procedimientos.', 47),

 q('1.11', 3, 'Ante un tren que no garantiza el correcto shuntado de los circuitos de vía, el PCC establece el acantonamiento bloqueando el acceso de cualquier otro tren que circule por detrás:',
   ['En la estación anterior al punto donde se encuentre el tren acantonado',
    'En la estación siguiente al punto donde se encuentre el tren acantonado',
    'En toda la línea, hasta que el tren salga de servicio',
    'Mediante dos puntos kilométricos que delimiten la zona'], 0,
   'Para el tren que no shunta correctamente, el bloqueo se establece en la estación anterior a su posición. La delimitación mediante dos puntos kilométricos o puntos singulares corresponde al otro supuesto de acantonamiento: el del tren que hace movimientos hacia delante y hacia atrás o que ocupa las dos vías.', 47, { pag2: 48 })
);

/* ══════════════════════════ 1.12 ══════════════════════════ */
tema('1.12', 'El sistema ATP: funciones y frenado de emergencia',
'**ATP** significa **Protección Automática del Tren**. El manual le atribuye **dos funciones**, y conviene saberlas separadas:\n\n1. **Garantizar** que la circulación se realiza siempre bajo las **condiciones de seguridad impuestas por los enclavamientos**.\n2. **Supervisar permanentemente la velocidad** de circulación, aplicando **frenado de emergencia** si se rebasa la velocidad máxima permitida en cada circuito de vía.\n\nEl sistema **supervisa la conducción**: advierte al maquinista del momento en que conviene aplicar el **freno de servicio**, o aplica él mismo el **freno de emergencia** si se incumplen las consignas.\n\n**Los cinco casos de frenado de emergencia.** El ATP frena en emergencia cuando se produce:\n\n1. **Rebase de señales en rojo.**\n2. **Rebase de la velocidad máxima permitida.**\n3. **Aproximación indebida a otro tren.**\n4. **Pérdida de comprobación de un elemento de vía** (aguja, calzo, etc.).\n5. **Runback**: cuando el tren se **desplaza en sentido contrario a la posición del inversor de marcha** de la cabina de mando.\n\nEse quinto caso, el *runback*, es el que más se olvida y por eso el que más cae.\n\n**Sistemas de ATP.** La conducción de trenes dotados de ATP puede realizarse con tres sistemas:\n\n- **ATP con códigos de velocidad (CV)**\n- **ATP distancia objetivo (DO)**\n- **ATP control de tren basado en comunicaciones (CBTC)**\n\nY cada uno de esos tres sistemas admite los **cuatro modos de conducción**: ATO, MANUAL+ATP, MANUAL+20 y Llave Especial.\n\nEl **equipo de ATP/ATO** a bordo recibe información del tren y de la vía para velar por su seguridad: controla la velocidad adecuándola a las condiciones de la vía, evita accidentes como rebases de señales en rojo y alcances, y **comprueba el sentido de dirección** que ha de seguir el tren.',
[
 { anverso: '¿Cuáles son las dos funciones del sistema ATP?', reverso: 'Garantizar que se circula bajo las condiciones de seguridad de los enclavamientos, y supervisar permanentemente la velocidad aplicando freno de emergencia si se rebasa la máxima.' },
 { anverso: 'Enumera los cinco casos en que el ATP aplica el freno de emergencia.', reverso: 'Rebase de señal en rojo; rebase de velocidad máxima; aproximación indebida a otro tren; pérdida de comprobación de un elemento de vía; y runback.' },
 { anverso: '¿Qué es el runback?', reverso: 'Que el tren se desplace en sentido contrario a la posición del inversor de marcha de la cabina de mando. Provoca frenado de emergencia.' },
 { anverso: '¿Cuáles son los tres sistemas de ATP?', reverso: 'Códigos de velocidad (CV), distancia objetivo (DO) y control de tren basado en comunicaciones (CBTC).' },
 { anverso: '¿Qué freno avisa el ATP al maquinista que aplique, y cuál aplica él mismo?', reverso: 'Le advierte de cuándo conviene aplicar el freno de servicio; aplica por sí mismo el freno de emergencia.' }
], [48, 49]);

preguntas.push(
 q('1.12', 1, 'Las siglas ATP corresponden a:',
   ['Protección Automática del Tren', 'Automatismo de Tracción Programada',
    'Aviso de Tren en Paso', 'Control Automático de Tráfico Ferroviario'], 0,
   'ATP es la Protección Automática del Tren. Conviene no confundirlo con ATO, que es la conducción automática, ni con CBTC, que es uno de los sistemas en que puede implementarse el ATP.', 48),

 q('1.12', 3, '¿Cuál de las siguientes situaciones NO provoca el frenado de emergencia por parte del sistema ATP?',
   ['La apertura de puertas con el tren detenido en estación', 'El rebase de una señal en rojo',
    'La aproximación indebida a otro tren', 'La pérdida de comprobación de una aguja'], 0,
   'Los cinco supuestos que recoge el manual son: rebase de señales en rojo, rebase de la velocidad máxima permitida, aproximación indebida a otro tren, pérdida de comprobación de un elemento de vía y runback. La apertura de puertas en estación no figura entre ellos.', 48),

 q('1.12', 3, 'En el contexto del sistema ATP, se denomina «runback» a la situación en que:',
   ['El tren se desplaza en sentido contrario a la posición del inversor de marcha de la cabina de mando',
    'El tren rebasa la velocidad máxima permitida en un circuito de vía',
    'El maquinista no responde al dispositivo de hombre muerto',
    'El tren pierde la captación de corriente en el pantógrafo'], 0,
   'El runback es el desplazamiento del tren en sentido contrario al que marca el inversor de marcha, y provoca frenado de emergencia. El rebase de velocidad es otro de los cinco supuestos, pero se enuncia por separado.', 48),

 q('1.12', 2, 'Los sistemas con los que puede realizarse la conducción de trenes dotados de ATP son:',
   ['Códigos de velocidad, distancia objetivo y control basado en comunicaciones',
    'ATO, Manual+ATP, Manual+20 y Llave Especial',
    'Bloqueo automático, telefónico y por acantonamiento',
    'Gálibo estrecho y gálibo ancho'], 0,
   'Los tres sistemas son CV (códigos de velocidad), DO (distancia objetivo) y CBTC (control de tren basado en comunicaciones). ATO, Manual+ATP, Manual+20 y Llave Especial no son sistemas, sino los cuatro modos de conducción que admite cada uno de esos sistemas.', 49),

 q('1.12', 2, 'Cuando el sistema ATP detecta que conviene reducir la marcha, lo primero que hace es:',
   ['Advertir al maquinista del momento en que es conveniente aplicar el freno de servicio',
    'Aplicar directamente el freno de emergencia en todos los casos',
    'Cortar la tracción y abrir el disyuntor',
    'Solicitar autorización al Puesto de Control Central'], 0,
   'El manual describe que el ATP supervisa la conducción advirtiendo al maquinista de cuándo conviene aplicar el freno de servicio, y solo aplica el freno de emergencia por sí mismo en caso de incumplimiento de las consignas. Primero avisa; el frenado automático es la consecuencia de no atender.', 48)
);

/* ══════════════════════════ 1.13 ══════════════════════════ */
tema('1.13', 'Los cuatro modos de conducción',
'Existen **cuatro modos de conducción**, y cada uno tiene un uso típico y unos límites de velocidad propios. Esta es probablemente la tabla más rentable de todo el manual.\n\n| Modo | Necesita códigos ATP | Quién fija la velocidad | Uso normal |\n|---|---|---|---|\n| **ATO** | Sí | El sistema ATO | Líneas con ATO operativo |\n| **MANUAL+ATP** | Sí | El maquinista | Líneas sin ATO operativo |\n| **MANUAL+20** | No | Limitado a 20 km/h | Vías secundarias |\n| **Llave Especial** | No (ATP anulado) | El maquinista | Avería del ATP o situaciones degradadas |\n\n**Conducción en modo ATO.** Requiere **presencia de códigos de ATP**, que el tren capta y que le transmiten la **velocidad objetivo**. La velocidad del tren y la **parada en la siguiente estación** las controla el sistema ATO. Es el modo normal en las líneas donde este sistema esté operativo.\n\n**Conducción en modo MANUAL+ATP (M+ATP).** También requiere códigos de ATP, que transmiten la **velocidad objetivo** y la **velocidad máxima de seguridad**, que no se puede rebasar. **La velocidad la establece el maquinista**, de acuerdo con las señales, ajustándose a la velocidad objetivo. Si supera la velocidad máxima de seguridad, el tren aplica **automáticamente el freno de emergencia**. Es el modo normal en las líneas donde el ATO no esté operativo.\n\n**Conducción en modo MANUAL+20 (M+20).** Modo del propio sistema ATP del tren que, **con independencia del aspecto de las señales y de la existencia de códigos en la vía**, limita la velocidad a **20 km/h**, frenando en emergencia si se rebasa. Es el modo normal de circulación **por vías secundarias** (depósitos, cocheras, túneles de enlace), en las que hay que **extremar la precaución al paso por agujas y calzos**.\n\n**Conducción en modo Llave Especial.** Se usa cuando, **por avería del sistema ATP**, no es posible utilizarlo, o al circular en otras **situaciones degradadas**. Requiere **desconectar el ATP** mediante una llave o conmutador. Al seleccionarlo **se anula el sistema ATP del tren**, de modo que **no hay límite máximo de velocidad ni frenado de emergencia ante el rebase de señales en rojo**: todo depende de la actuación del maquinista, que deberá regular la velocidad según la señalización y la parte de vía que visualiza.\n\n> Dato crítico: la conducción **por vías principales en modo Llave Especial** se realiza **sin sobrepasar los 30 km/h**, salvo que el PCC indique otras condiciones.',
[
 { anverso: '¿Cuáles son los cuatro modos de conducción?', reverso: 'ATO, MANUAL+ATP, MANUAL+20 y Llave Especial.' },
 { anverso: '¿A qué velocidad limita el modo MANUAL+20 y dónde se usa normalmente?', reverso: 'A 20 km/h. Es el modo normal por vías secundarias: depósitos, cocheras y túneles de enlace.' },
 { anverso: 'En modo Llave Especial, ¿a qué velocidad máxima se circula por vías principales?', reverso: 'Sin sobrepasar los 30 km/h, salvo que el PCC indique otras condiciones.' },
 { anverso: '¿Qué ocurre con el ATP al seleccionar el modo Llave Especial?', reverso: 'Se anula. No hay límite máximo de velocidad ni frenado de emergencia ante el rebase de señales en rojo.' },
 { anverso: 'En modo MANUAL+ATP, ¿quién establece la velocidad del tren?', reverso: 'El maquinista, ajustándose a la velocidad objetivo y sin rebasar la velocidad máxima de seguridad.' },
 { anverso: '¿Qué controla el sistema en modo ATO?', reverso: 'La velocidad del tren y la parada en la siguiente estación.' }
], [49, 50]);

preguntas.push(
 q('1.13', 2, 'El modo de conducción MANUAL+20 limita la velocidad del tren a:',
   ['20 km/h', '30 km/h', '20 km/h solo si las señales están en rojo', '40 km/h'], 0,
   'El modo M+20 limita a 20 km/h con independencia del aspecto de las señales y de que existan o no códigos en la vía, y frena en emergencia si se rebasa. Los 30 km/h son el límite de la conducción en Llave Especial por vías principales: son dos cifras distintas de dos modos distintos.', 50),

 q('1.13', 2, 'El modo MANUAL+20 es el que se utiliza normalmente para circular por:',
   ['Vías secundarias: depósitos, cocheras y túneles de enlace', 'Vías principales con ATO averiado',
    'Vías banalizadas en ambos sentidos', 'Vías de pruebas exclusivamente'], 0,
   'El manual señala que M+20 es el modo normal de circulación por vías secundarias, donde además hay que extremar la precaución al paso por agujas y calzos. En vías principales sin ATO operativo el modo normal es MANUAL+ATP.', 50),

 q('1.13', 3, 'Al seleccionar el modo de conducción Llave Especial:',
   ['Se anula el sistema ATP, por lo que no hay límite máximo de velocidad ni frenado de emergencia ante señales en rojo',
    'El ATP sigue activo pero limita la velocidad a 20 km/h',
    'El sistema ATO toma el control de la parada en estación',
    'Se activa automáticamente el bloqueo telefónico'], 0,
   'La Llave Especial desconecta el ATP mediante llave o conmutador: desaparece el límite máximo de velocidad y el frenado de emergencia por rebase de señales en rojo, y toda la responsabilidad recae en el maquinista. El modo que mantiene el ATP activo limitando a 20 km/h es el M+20.', 50),

 q('1.13', 3, 'La conducción por vías principales en modo Llave Especial se realiza sin sobrepasar:',
   ['30 km/h, salvo que el PCC indique otras condiciones', '20 km/h en todo caso',
    '40 km/h, salvo autorización del Jefe de Sector', 'La velocidad máxima de la línea'], 0,
   'El límite es de 30 km/h por vías principales en Llave Especial, y solo el PCC puede indicar otras condiciones de circulación. Los 20 km/h corresponden al modo M+20, que es un modo diferente.', 50),

 q('1.13', 2, 'En el modo de conducción ATO, ¿qué controla el sistema?',
   ['La velocidad del tren y la parada en la siguiente estación', 'Únicamente la velocidad máxima de seguridad',
    'Solo la apertura y cierre de puertas', 'El itinerario a seguir en las agujas'], 0,
   'En ATO el sistema controla tanto la velocidad del tren como la parada en la siguiente estación, a partir de los códigos de ATP que capta. La velocidad máxima de seguridad como límite que no puede rebasarse es un concepto propio del modo MANUAL+ATP, donde conduce el maquinista.', 49),

 q('1.13', 3, 'En modo MANUAL+ATP, si el tren supera la velocidad máxima de seguridad:',
   ['El tren aplica de forma automática el freno de emergencia', 'El sistema emite un aviso acústico sin actuar sobre el freno',
    'El PCC ordena la detención del tren', 'El tren pasa automáticamente a modo MANUAL+20'], 0,
   'En M+ATP el maquinista fija la velocidad ajustándose a la velocidad objetivo, pero si rebasa la velocidad máxima de seguridad el tren aplica por sí mismo el freno de emergencia. No hay cambio automático de modo ni intervención previa del PCC.', 50)
);

/* ══════════════════════════ 1.14 ══════════════════════════ */
tema('1.14', 'Nociones de vía: carril, traviesas y balasto',
'La **vía** es el trazado donde se asientan los **carriles**, que sujetos a las **traviesas** forman el camino por el que circulan los trenes.\n\n**El carril** es el elemento resistente que recibe directamente las cargas de las ruedas. Tiene **tres funciones**:\n\n1. **Resistir y transmitir** las cargas del material rodante a los demás elementos de la vía.\n2. **Guiar** los vehículos y dar **adhesión** suficiente para el frenado y la aceleración.\n3. **Conducir corriente eléctrica y señalización.**\n\n**Partes del carril:**\n\n- **Cabeza**: parte superior, que se utiliza como elemento de **rodadura**.\n- **Alma**: la parte de **menor espesor**, que une la cabeza con el patín.\n- **Patín**: la **base**, de anchura mayor que la cabeza, con la superficie inferior plana para apoyarse en las traviesas.\n\nLa **sujeción del carril se realiza en el patín**, a ambos lados del mismo.\n\n**La rueda** del vehículo ferroviario tiene dos partes que conviene distinguir:\n\n- **Llanta**: la parte metálica exterior, **torneada en forma cónica**, que se desliza sobre el carril.\n- **Pestaña**: la parte **sobresaliente por el interior**, que **guía** la rueda por los carriles e **impide que el tren se salga de la vía**.\n\n**Traviesa.** Elemento de madera u hormigón colocado **transversalmente al eje de la vía**, que sostiene los carriles y hace de nexo de unión entre ellos y el balasto.\n\n**Tacos de hormigón.** Transmiten y reparten los esfuerzos de los carriles al hormigón, sirviendo de apoyo y fijación y evitando desplazamientos del carril en cualquier sentido. **El taco de hormigón es el equivalente a la traviesa.**\n\n**Balasto.** Grava o piedra machacada que, formando una capa, se extiende sobre la explanación para asentar y sujetar las traviesas. Además, proporciona una **base drenante** lo bastante estable como para mantener la alineación de la vía con un mínimo de mantenimiento.',
[
 { anverso: '¿Cuáles son las tres partes del carril?', reverso: 'Cabeza (rodadura), alma (la de menor espesor) y patín (la base, donde se sujeta).' },
 { anverso: '¿En qué parte del carril se realiza la sujeción?', reverso: 'En el patín, a ambos lados.' },
 { anverso: '¿Qué parte de la rueda impide que el tren se salga de la vía?', reverso: 'La pestaña, que sobresale por la parte interna y guía la rueda.' },
 { anverso: '¿Cuáles son las dos funciones del balasto?', reverso: 'Asentar y sujetar las traviesas, y proporcionar una base drenante estable que mantenga la alineación de la vía.' },
 { anverso: '¿Qué elemento es el equivalente a la traviesa en vía sobre hormigón?', reverso: 'El taco de hormigón.' }
], [53, 54, 55]);

preguntas.push(
 q('1.14', 2, 'La parte del carril de menor espesor, que une la cabeza con el patín, se denomina:',
   ['Alma', 'Pestaña', 'Contracarril', 'Espadín'], 0,
   'El alma es la parte de menor espesor del carril y une la cabeza (rodadura) con el patín (base). La pestaña es una parte de la rueda, no del carril, y el espadín y el contracarril pertenecen a los aparatos de vía.', 53),

 q('1.14', 2, 'La sujeción del carril se realiza:',
   ['En el patín, a ambos lados del mismo', 'En la cabeza, mediante grapas superiores',
    'En el alma, con bridas atornilladas', 'Directamente sobre el balasto'], 0,
   'El manual precisa que la sujeción se realiza en el patín y a ambos lados. La cabeza es la superficie de rodadura y no puede llevar sujeciones, y el balasto sostiene las traviesas, no el carril directamente.', 54),

 q('1.14', 2, 'La parte sobresaliente de la rueda por su cara interna, que la guía por los carriles e impide que el tren descarrile, es:',
   ['La pestaña', 'La llanta', 'El patín', 'El contracarril'], 0,
   'La pestaña guía la rueda e impide que el tren se salga de la vía. La llanta es la parte metálica exterior, torneada en forma cónica, que se desliza sobre el carril. El contracarril cumple una función de guiado parecida, pero es un elemento de la vía instalado en las agujas, no de la rueda.', 54),

 q('1.14', 3, 'Además de asentar y sujetar las traviesas, el balasto tiene como objetivo:',
   ['Proporcionar una base drenante estable que mantenga la alineación de la vía',
    'Conducir la corriente de retorno hacia la subestación',
    'Aislar eléctricamente el carril de la plataforma',
    'Amortiguar el ruido de las ruedas en el interior del túnel'], 0,
   'El manual señala expresamente el objetivo de proporcionar una base drenante suficientemente estable como para mantener la alineación de la vía con un mínimo de mantenimiento. La conducción de corriente es una función del carril, no del balasto.', 55),

 q('1.14', 1, 'Los tacos de hormigón cumplen en la vía la función equivalente a:',
   ['Las traviesas', 'El balasto', 'El contracarril', 'Las toperas'], 0,
   'El manual afirma literalmente que el taco de hormigón es el equivalente a las traviesas: transmite y reparte los esfuerzos de los carriles al hormigón, sirviendo de apoyo y fijación y evitando desplazamientos del carril.', 54, { pag2: 55 })
);

/* ══════════════════════════ 1.15 ══════════════════════════ */
tema('1.15', 'Aparatos de vía: agujas, diagonales y bretelles',
'Los **aparatos de vía** tienen por objeto realizar el **desdoblamiento o cruce de vías**.\n\n**Cambio de aguja (desvío).** Permite a los vehículos cambiar de una vía a otra. Sus partes:\n\n- **Espadín**: el **extremo afilado** de la aguja, que se desplaza hasta entrar en contacto con el carril adyacente o contraaguja. Al extremo afilado se le llama **punta** y al opuesto **talón**.\n- **Contraaguja**: la parte de la vía donde **se acopla el espadín**.\n- **Cruzamiento o corazón**: la pieza **donde se juntan las dos vías**.\n- **Contracarril**: sirve para **guiar las ruedas a su paso por el cruzamiento**.\n\n**Posiciones de la aguja:**\n\n- **Recta**: permite al tren circular por la misma vía.\n- **Desvío**: el tren cambia de vía.\n\n**Tomar de punta o de talón.** Si el tren pasa por la parte más afilada de los espadines, **toma la aguja de punta**. Si lo hace por el extremo contrario, la **toma de talón**.\n\n**Diagonal (o escape).** Para unir **dos vías adyacentes y paralelas** se combinan **dos agujas**, formando lo que se conoce como escape o diagonal. Cada aguja la acciona un **motor eléctrico**, y ambas se mueven **de forma conjuntada a la misma posición** (recta o desvío).\n\n**Bretelle.** Es la **unión de dos diagonales cruzadas**. Consta de **cuatro agujas**, accionadas por **un motor eléctrico cada una**.\n\n**Haz de vías.** Conjunto de vías formadas por desdoblamiento de una o varias vías. En los depósitos, el conjunto de haces de vías se denomina **playa de maniobras**.\n\n**Tipos de agujas:**\n\n- **Agujas eléctricas**: se mueven mediante motor eléctrico, **telemandadas desde el PCC** o **localmente** desde el enclavamiento de la estación o depósito. Ante avería pueden accionarse **manualmente con una manivela** introducida en el propio motor. Existen **4 tipos de manivela**: **G** (grande, motores ERICSSON), **M** (mediana, ERICSSON), **P** (pequeña, DIMETRONIC) y **E** (pequeña, electrohidráulicos ADTRANZ).\n- **Agujas manuales**: solo quedan **dos modelos**, **Willians Fija** y **Ramapo**.',
[
 { anverso: '¿Cómo se llaman los dos extremos del espadín de una aguja?', reverso: 'El extremo afilado es la punta; el opuesto, el talón.' },
 { anverso: '¿Qué es un bretelle y de cuántas agujas consta?', reverso: 'La unión de dos diagonales cruzadas. Consta de cuatro agujas, con un motor eléctrico cada una.' },
 { anverso: '¿Cuántas agujas forma una diagonal o escape, y cómo se mueven?', reverso: 'Dos agujas, accionadas cada una por un motor eléctrico y movidas de forma conjuntada a la misma posición.' },
 { anverso: '¿Cuáles son los cuatro tipos de manivela para accionar agujas eléctricas?', reverso: 'G y M para motores ERICSSON (grande y mediana), P para DIMETRONIC (pequeña) y E para electrohidráulicos ADTRANZ (pequeña).' },
 { anverso: '¿Cómo se llama el conjunto de haces de vías de un depósito?', reverso: 'Playa de maniobras.' },
 { anverso: '¿Qué elemento guía las ruedas a su paso por el cruzamiento?', reverso: 'El contracarril.' }
], [55, 56, 57, 58, 59, 60, 61]);

preguntas.push(
 q('1.15', 2, 'En un cambio de aguja, la pieza donde se juntan las dos vías se denomina:',
   ['Cruzamiento o corazón', 'Contraaguja', 'Espadín', 'Contracarril'], 0,
   'El cruzamiento, también llamado corazón, es la pieza donde se juntan las dos vías. La contraaguja es la parte donde se acopla el espadín, y el contracarril guía las ruedas precisamente a su paso por el cruzamiento, pero no es el cruzamiento en sí.', 56),

 q('1.15', 3, 'Un bretelle está formado por:',
   ['Cuatro agujas, con un motor eléctrico cada una', 'Dos agujas accionadas por un único motor',
    'Dos agujas con un motor cada una', 'Tres agujas y un cruzamiento central'], 0,
   'El bretelle es la unión de dos diagonales cruzadas, de modo que suma cuatro agujas, cada una con su propio motor eléctrico. Las dos agujas con un motor cada una forman una diagonal o escape, que es la mitad de un bretelle.', 59),

 q('1.15', 2, 'Cuando un tren pasa por la parte más afilada de los espadines, se dice que toma la aguja:',
   ['De punta', 'De talón', 'A la recta', 'Al desvío'], 0,
   'Pasar por la parte afilada es tomar la aguja de punta; hacerlo por el extremo contrario es tomarla de talón. Recta y desvío no describen cómo pasa el tren, sino la posición en que está la aguja.', 57),

 q('1.15', 3, 'La manivela de tipo P, de tamaño pequeño, corresponde a motores eléctricos de la marca:',
   ['DIMETRONIC', 'ERICSSON', 'ADTRANZ', 'Willians'], 0,
   'La manivela P es pequeña y para motores DIMETRONIC. Las manivelas G y M, grande y mediana, son para motores ERICSSON, y la E, también pequeña, para los electrohidráulicos ADTRANZ. Willians es un modelo de aguja manual, no una marca de motor.', 60),

 q('1.15', 2, 'Los dos únicos modelos de agujas de accionamiento manual que existen actualmente son:',
   ['Willians Fija y Ramapo', 'ERICSSON y DIMETRONIC', 'Diagonal y bretelle', 'Recta y desvío'], 0,
   'Los dos modelos de aguja manual son Willians Fija y Ramapo. ERICSSON y DIMETRONIC son fabricantes de los motores de las agujas eléctricas, y diagonal y bretelle son disposiciones de agujas, no modelos de accionamiento manual.', 61),

 q('1.15', 3, 'En los depósitos, el conjunto de haces de vías recibe el nombre de:',
   ['Playa de maniobras', 'Saco de maniobras', 'Haz de transferencia', 'Topera'], 0,
   'El conjunto de haces de vías de un depósito es la playa de maniobras. El saco de maniobras es una vía secundaria de otro tipo, y la topera es el elemento de protección situado donde finaliza una vía.', 59)
);

/* ══════════════════════════ 1.16 ══════════════════════════ */
tema('1.16', 'Calces y toperas: elementos de protección',
'Dos elementos con una finalidad parecida —evitar un accidente— pero con un funcionamiento **opuesto**. Es su contraste lo que se pregunta.\n\n**El calce.** Es un **elemento de protección** cuya misión fundamental es **provocar el descarrilamiento** de un vehículo que, **sin autorización previa, invada una vía principal**, con el fin de **evitar un posible alcance**.\n\nConsta de **una o dos cuñas metálicas** situadas sobre los carriles, de manera que las ruedas del tren se **suben por encima de ellas** y eso provoca que se salgan de la vía.\n\nSe instalan en:\n\n- Las **vías de transferencia** de los depósitos y cocheras con la línea.\n- Los **túneles de enlace entre líneas**.\n\n> La lógica es contraintuitiva y por eso cae: el calce **hace descarrilar a propósito**. Se prefiere un descarrilamiento controlado en una vía secundaria a un choque contra un tren con viajeros en la vía principal.\n\n**La topera.** Es un elemento de protección que se sitúa **donde finaliza la vía**, con el fin de que **ningún vehículo se salga de ella**.\n\nSe construye con distintos materiales: puede ser un **armazón metálico o de madera**, o un **muro de hormigón**. A cualquiera de ellos se le instalan unos **topes a la altura del gancho de acoplamiento o *anticlimber*** del tren.\n\n**En resumen:**\n\n| | Dónde | Qué hace |\n|---|---|---|\n| **Calce** | Vías de transferencia de depósitos y cocheras, y túneles de enlace | **Provoca** el descarrilamiento |\n| **Topera** | Donde **finaliza** la vía | **Impide** que el vehículo se salga |',
[
 { anverso: '¿Cuál es la misión fundamental del calce?', reverso: 'Provocar el descarrilamiento de un vehículo que invada una vía principal sin autorización, para evitar un posible alcance.' },
 { anverso: '¿Dónde se instalan los calces?', reverso: 'En las vías de transferencia de depósitos y cocheras con la línea, y en los túneles de enlace entre líneas.' },
 { anverso: '¿De qué consta un calce?', reverso: 'De una o dos cuñas metálicas situadas sobre los carriles, por las que las ruedas se suben y descarrilan.' },
 { anverso: '¿Qué es una topera y dónde se sitúa?', reverso: 'Un elemento de protección situado donde finaliza la vía, para que ningún vehículo se salga de ella.' },
 { anverso: '¿A qué altura se instalan los topes de una topera?', reverso: 'A la altura del gancho de acoplamiento o anticlimber del tren.' }
], [61, 62]);

preguntas.push(
 q('1.16', 2, 'La misión fundamental del calce es:',
   ['Provocar el descarrilamiento de un vehículo que invada una vía principal sin autorización previa',
    'Impedir que un vehículo se salga de la vía al final de la misma',
    'Frenar progresivamente un tren que ha perdido el sistema de frenado',
    'Inmovilizar un tren estacionado en pendiente'], 0,
   'Aunque suene contradictorio, el calce está para hacer descarrilar. Provoca el descarrilamiento del vehículo que invade una vía principal sin autorización, y así evita un alcance con un tren de viajeros. El elemento que impide que un vehículo se salga al final de la vía es la topera.', 61),

 q('1.16', 2, 'Los calces se instalan en:',
   ['Las vías de transferencia de depósitos y cocheras con la línea, y en los túneles de enlace entre líneas',
    'Todas las vías principales, cada 500 metros', 'Las toperas de final de vía',
    'Los andenes de las estaciones de cabecera'], 0,
   'El manual concreta esas dos ubicaciones: vías de transferencia de depósitos y cocheras con la línea, y túneles de enlace entre líneas. Son precisamente los puntos por los que un vehículo podría invadir indebidamente una vía principal.', 61),

 q('1.16', 3, 'Los topes de una topera se instalan a la altura:',
   ['Del gancho de acoplamiento o anticlimber del tren', 'Del patín del carril',
    'Del pantógrafo', 'Del borde del andén'], 0,
   'Los topes se sitúan a la altura del gancho de acoplamiento o anticlimber, que es la parte del tren preparada para absorber un impacto frontal. El pantógrafo está en el techo y el patín es una parte del carril.', 62),

 q('1.16', 1, 'Un calce consta de:',
   ['Una o dos cuñas metálicas situadas sobre los carriles', 'Un muro de hormigón armado',
    'Un motor eléctrico y una manivela de accionamiento', 'Dos agujas movidas de forma conjuntada'], 0,
   'El calce está formado por una o dos cuñas metálicas colocadas sobre los carriles: las ruedas se suben por encima y descarrilan. El muro de hormigón es una de las formas constructivas de la topera, y el motor con manivela pertenece a las agujas eléctricas.', 61)
);

/* ══════════════════════════ 1.17 ══════════════════════════ */
tema('1.17', 'Material móvil: la unidad tren y su numeración',
'**Unidad tren.** Es el **mínimo conjunto que tiene autonomía propia**, es decir, que puede **moverse por sí mismo**. Está formada por **dos, tres, cuatro o seis coches**, según el tipo de material, **permanentemente acoplados**.\n\nLos **coches extremos** disponen de **cabina** con los aparatos de control y mando necesarios para la conducción.\n\n**Numeración de los coches.** Todos los coches llevan una numeración que indica el **tipo de material, la serie y su número de orden**. Según su terminación se les llama **PAR** o **IMPAR**. A esa numeración le precede **siempre una letra**:\n\n- **M** → coche **MOTOR** (con cabina de conducción)\n- **R** → coche **REMOLQUE** (sin cabina)\n- **S** → coche **MOTOR SIN CABINA** (motor intermedio)\n\n**Tren.** En general, cualquier vehículo o conjunto de vehículos ferroviarios acoplados que forman una **unidad circulatoria** destinada al transporte de viajeros, materiales o a la realización de trabajos.\n\n**Tren de trabajo.** El que se utiliza para el transporte de materiales o equipos de trabajo, realización de pruebas, etc., ya sean vehículos auxiliares o **cualquier otro tipo de material móvil, incluido el destinado habitualmente al transporte de viajeros**.\n\n**Vehículos auxiliares.** Los destinados específicamente al transporte de materiales, equipos de trabajo, o propiamente a la realización de trabajos.\n\n**Vehículos bi-viales.** Dentro de los auxiliares, los que **pueden circular por las vías y desplazarse fuera de ellas** para realizar trabajos.\n\n**Los dos grandes grupos de trenes de viajeros** son **gálibo estrecho** (230 cm: series 2000 y 3000) y **gálibo ancho** (280 cm: series 5000, 6000, 7000, 8000 y 9000). Los trenes de las líneas de **Metro Ligero no se incluyen** en ninguno de esos dos grupos.',
[
 { anverso: '¿Qué es una unidad tren?', reverso: 'El mínimo conjunto con autonomía propia, que puede moverse por sí mismo. Formado por 2, 3, 4 o 6 coches permanentemente acoplados.' },
 { anverso: '¿Qué indican las letras M, R y S delante del número de un coche?', reverso: 'M: motor con cabina. R: remolque, sin cabina. S: motor sin cabina (intermedio).' },
 { anverso: '¿Qué es un vehículo bi-vial?', reverso: 'Un vehículo auxiliar que puede circular por las vías y también desplazarse fuera de ellas para realizar trabajos.' },
 { anverso: '¿Puede un tren de viajeros ser un tren de trabajo?', reverso: 'Sí. El tren de trabajo se define por su uso, e incluye expresamente material destinado habitualmente al transporte de viajeros.' }
], [65, 66]);

preguntas.push(
 q('1.17', 2, 'Una unidad tren se define como:',
   ['El mínimo conjunto que tiene autonomía propia y puede moverse por sí mismo',
    'El conjunto de todos los coches estacionados en un depósito',
    'Cualquier coche dotado de cabina de conducción',
    'Dos trenes acoplados entre sí para dar servicio en hora punta'], 0,
   'La unidad tren es el mínimo conjunto con autonomía propia, formado por dos, tres, cuatro o seis coches permanentemente acoplados según el tipo de material. Un solo coche con cabina no es una unidad tren si no puede circular por sí mismo.', 65),

 q('1.17', 2, 'En la numeración de los coches, la letra «S» indica que se trata de un coche:',
   ['Motor sin cabina de conducción', 'Remolque sin cabina de conducción',
    'Motor con cabina de conducción', 'De servicio auxiliar'], 0,
   'La S corresponde al coche motor sin cabina, es decir, un motor intermedio. La M es el motor con cabina y la R el remolque sin cabina. Las tres letras se confunden con facilidad: la clave es que S y M son ambos motores, y lo que las separa es la cabina.', 65),

 q('1.17', 3, 'Se denominan vehículos bi-viales aquellos que:',
   ['Pueden circular por las vías y desplazarse fuera de ellas para realizar trabajos',
    'Pueden circular indistintamente por vía I y vía II', 'Están dotados de dos cabinas de conducción',
    'Pueden captar corriente a 600 V y a 1.500 V'], 0,
   'Los bi-viales son vehículos auxiliares capaces de circular por la vía y también fuera de ella. Circular indistintamente por ambas vías tiene que ver con las vías banalizadas, y captar a dos tensiones corresponde a los trenes bitensión.', 66),

 q('1.17', 3, 'Un tren destinado habitualmente al transporte de viajeros que se emplea para realizar pruebas:',
   ['Se considera tren de trabajo', 'Sigue siendo tren de viajeros a todos los efectos',
    'Pasa a considerarse vehículo auxiliar', 'Se considera vehículo bi-vial'], 0,
   'El manual define el tren de trabajo por su uso e incluye expresamente cualquier tipo de material móvil, incluido el destinado habitualmente al transporte de viajeros. Los vehículos auxiliares son los destinados específicamente a transporte de materiales o realización de trabajos, que es otra categoría.', 65)
);

/* ══════════════════════════ 1.18 ══════════════════════════ */
tema('1.18', 'Las series de trenes y sus composiciones',
'**Gálibo estrecho (230 cm).**\n\n**Serie 2000.** Compuestos por **dos coches** (unidad tren), en dos grandes familias, **2000-A** y **2000-B**. Llevan un número identificativo con la letra **M** si es motor de tracción o **R** si es remolque (ejemplo: **R-2175 / M-2176**), siendo el **número impar siempre el más bajo**. Ese número va impreso en la **parte superior, a ambos lados de la cabina**. Circulan normalmente por las **líneas 1 y 5**.\n\n**Serie 3000.** Dos subseries:\n\n- **Subserie 1**: unidades de **seis coches** inseparables, composición **M1-R1-S1-S2-R2-M2**, destinadas preferentemente a las **líneas 3 y 5**.\n- **Subserie 2**: unidades de **cuatro coches**, composición **M-R-S-M**, destinadas preferentemente a las **líneas 2, 4 y el Ramal**.\n\n**Gálibo ancho (280 cm).**\n\n**Serie 5000.** **Dos coches**, ambos motores (**M-M**). Circula por las **líneas 6 y 9A**.\n\n**Serie 6000.** **Tres coches** (trío): dos motores y un remolque (**M-R-M**). Coches **diáfanos con pasillos de intercirculación**. Circula por la **línea 9B**.\n\n**Serie 7000.** **Seis coches** inseparables, composición **M1-R1-S1-S2-R2-M2**. Circula por las **líneas 9A y 10A**.\n\n**Serie 8000.** La más repartida. Puede circular en:\n\n- **M1-R1-S1-S2-R2-M2** → línea 6\n- **M-S-R-M** → líneas 8 y 10B\n- **M-R-M monotensión** → líneas 10B y 12 (ocasionalmente 7B, 10A y 11)\n- **M-R-M bitensión** → líneas 9A y 10A\n\n**Serie 9000.** Dos configuraciones:\n\n- **Seis coches**, composición **M-R-S-S-R-M**, preferentemente en **7A, 9A y 10A**.\n- **Tres coches**, composición **M-R-M**, preferentemente en **7B y 12**.\n\n**Metro Ligero «Citadis».** Vehículo modular; se ha elegido una **unidad articulada de cinco cajas**, ampliable a siete. Tensión de catenaria **750 V cc**. Los **ocho vehículos** asignados a Metros Ligeros de Madrid van **dotados de ATP** para circulación en túnel y **numerados del 128 al 135**.',
[
 { anverso: '¿Cuántos coches tiene una unidad de la serie 2000 y por qué líneas circula?', reverso: 'Dos coches. Normalmente por las líneas 1 y 5.' },
 { anverso: '¿Cuál es la composición de la subserie 1 de la serie 3000?', reverso: 'Seis coches inseparables: M1-R1-S1-S2-R2-M2. Preferentemente líneas 3 y 5.' },
 { anverso: '¿Qué serie está formada por dos coches, ambos motores?', reverso: 'La serie 5000 (M-M). Circula por las líneas 6 y 9A.' },
 { anverso: '¿Qué serie tiene coches diáfanos con pasillos de intercirculación?', reverso: 'La serie 6000, en composición de trío M-R-M, en la línea 9B.' },
 { anverso: '¿Cómo van numerados los vehículos Citadis de Metro Ligero y cuántos son?', reverso: 'Ocho vehículos, numerados del 128 al 135, con ATP para circular en túnel.' },
 { anverso: 'En la serie 2000, ¿cuál de los dos números es el más bajo?', reverso: 'El impar. Por ejemplo R-2175 / M-2176.' }
], [66, 67, 68, 69, 70, 71]);

preguntas.push(
 q('1.18', 2, 'Los trenes de la serie 5000 están compuestos por:',
   ['Dos coches, ambos motores (M-M)', 'Tres coches: dos motores y un remolque (M-R-M)',
    'Seis coches inseparables (M1-R1-S1-S2-R2-M2)', 'Cuatro coches en composición M-R-S-M'], 0,
   'La serie 5000 son dos coches, ambos motores, y circula por las líneas 6 y 9A. El trío M-R-M corresponde a la serie 6000, los seis coches inseparables a las series 3000 subserie 1 y 7000, y la composición de cuatro M-R-S-M a la subserie 2 de la 3000.', 68),

 q('1.18', 3, 'La característica de tener coches diáfanos con pasillos de intercirculación entre ellos corresponde a la serie:',
   ['6000', '5000', '2000', '3000'], 0,
   'La serie 6000, en composición de trío M-R-M, tiene los coches diáfanos con pasillos de intercirculación, y circula en la línea 9B. Es el único caso en que el manual destaca expresamente esa característica.', 69),

 q('1.18', 3, 'En la serie 2000, dado el ejemplo R-2175 / M-2176:',
   ['El número impar es siempre el más bajo', 'El número par es siempre el más bajo',
    'El coche motor lleva siempre el número impar', 'Ambos coches comparten el mismo número'], 0,
   'El manual precisa que el número impar es siempre el más bajo. En el ejemplo, el 2175 corresponde al remolque y el 2176 al motor, de modo que en este caso el motor lleva el par: no hay una regla que asocie el motor a los impares.', 67),

 q('1.18', 2, 'Los vehículos Citadis de Metro Ligero asignados a Metros Ligeros de Madrid:',
   ['Son ocho y van numerados del 128 al 135', 'Son cinco y van numerados del 1 al 5',
    'Son ocho y van numerados del 100 al 107', 'Son doce y comparten numeración con la serie 9000'], 0,
   'Son ocho vehículos, numerados del 128 al 135, dotados de ATP para poder circular en túnel. Las cinco cajas que a veces se confunden con el número de vehículos son en realidad los módulos articulados de cada unidad.', 71),

 q('1.18', 3, 'La composición M-R-S-M, de cuatro coches, corresponde a la subserie 2 de la serie 3000 y está destinada preferentemente a:',
   ['Las líneas 2, 4 y el Ramal', 'Las líneas 3 y 5', 'Las líneas 6 y 9A', 'Las líneas 7A, 9A y 10A'], 0,
   'La subserie 2 de la 3000, de cuatro coches, va preferentemente a las líneas 2, 4 y el Ramal. La subserie 1, de seis coches, va a las líneas 3 y 5. Todas son líneas de gálibo estrecho, que es lo que hace fácil confundirlas entre sí.', 68),

 q('1.18', 3, 'Dentro de la serie 8000, la composición M-R-M bitensión está asignada a las líneas:',
   ['9A y 10A', '10B y 12', '8 y 10B', '6'], 0,
   'La 8000 en M-R-M bitensión va a las líneas 9A y 10A. La monotensión, con la misma composición de tres coches, va a 10B y 12. La composición M-S-R-M corresponde a las líneas 8 y 10B, y la de seis coches a la línea 6.', 70)
);

/* ══════════════════════════ 1.19 ══════════════════════════ */
tema('1.19', 'Equipos y aparatos principales de la unidad tren',
'**Pantógrafo.** Situado normalmente en el **techo del coche «M» par**. Transmite a los coches la tensión del **hilo de trabajo** (600 V o 1.500 V de corriente continua) para el funcionamiento de los equipos eléctricos. Para **elevarlo** hay un circuito neumático que llena de aire comprimido un cilindro; **un muelle lo abate cuando falta presión neumática**.\n\n> Detalle importante: el pantógrafo **sube con aire y baja por muelle**. Así, ante una pérdida de presión, cae solo.\n\n**Batería.** Situada en los **bajos de algunos coches**, con ubicación variable según el tipo de tren. Sirve para **poner en servicio la unidad tren**. Además **sustituye al convertidor estático** en caso de avería de este, suministrando una tensión de unos **110 V cc**, con una **toma intermedia para los circuitos de 24 V cc**.\n\n**Convertidor estático.** Transforma la corriente procedente del hilo de trabajo (600 o 1.500 V cc) en otros voltajes: **380 V ca trifásica, 400 V ca trifásica, 220 V ca, 110 V cc y 24 V cc**.\n\n**Compresor principal.** Suministra **aire comprimido a los coches** de la unidad para los distintos circuitos neumáticos: freno, pantógrafo, suspensión neumática, etc.\n\n**Compresor auxiliar.** Instalado en los coches «M» con pantógrafo, en los bajos o en el armario auxiliar de la cabina. Produce aire comprimido **exclusivamente para elevar el pantógrafo** cuando no hay presión suficiente en el circuito al poner el tren en servicio.\n\n**Disyuntor.** Instalado en los bajos de los coches «M» con pantógrafo, protegido por un cofre. Es un **interruptor automático** que, ante **sobreintensidad o cortocircuito**, **aísla el equipo de tracción** de la tensión del hilo de trabajo, evitando daños.\n\n**Equipo de ATP/ATO.** Recibe información del tren y de la vía para velar por la seguridad, aplicando el freno de emergencia si no se cumplen los requisitos. Controla la velocidad, evita rebases de señales en rojo y alcances, y **comprueba el sentido de dirección** del tren.\n\n**Ganchos de acople móvil.** En los **extremos de la unidad tren**. Enganche **automático** que permite el acoplamiento eléctrico, neumático y mecánico **entre unidades**, y su desacople.\n\n**Ganchos de acople fijo.** **Entre coche y coche** de la misma unidad. Enganche **semipermanente**. Solo los separa el **personal de mantenimiento**.',
[
 { anverso: '¿Cómo se eleva y cómo se abate el pantógrafo?', reverso: 'Se eleva con aire comprimido; un muelle lo abate cuando falta presión neumática.' },
 { anverso: '¿Qué tensión suministra la batería y para qué sirve?', reverso: 'Unos 110 V cc, con toma intermedia de 24 V cc. Sirve para poner en servicio la unidad tren y sustituye al convertidor estático si este se avería.' },
 { anverso: '¿Cuál es la función del disyuntor?', reverso: 'Ante sobreintensidad o cortocircuito, aísla el equipo de tracción de la tensión del hilo de trabajo.' },
 { anverso: '¿Para qué sirve el compresor auxiliar?', reverso: 'Exclusivamente para producir aire y elevar el pantógrafo cuando no hay presión suficiente al poner el tren en servicio.' },
 { anverso: '¿Qué diferencia hay entre los ganchos de acople móvil y los de acople fijo?', reverso: 'El móvil va en los extremos de la unidad y une unidades entre sí; el fijo va entre coche y coche de la misma unidad y solo lo separa mantenimiento.' },
 { anverso: '¿Dónde se sitúa normalmente el pantógrafo?', reverso: 'En el techo del coche «M» par.' }
], [71, 72, 73, 74, 75]);

preguntas.push(
 q('1.19', 3, 'El pantógrafo de la unidad tren:',
   ['Se eleva mediante aire comprimido y lo abate un muelle cuando falta presión neumática',
    'Se eleva mediante un muelle y lo abate el aire comprimido',
    'Se acciona eléctricamente desde el convertidor estático',
    'Se eleva y se abate manualmente desde el techo del coche'], 0,
   'El circuito neumático llena de aire un cilindro que mantiene elevado el pantógrafo, y un muelle se encarga de abatirlo cuando falta presión. El diseño es deliberado: ante una pérdida de aire, el pantógrafo baja solo. La opción invertida es el error clásico.', 71),

 q('1.19', 2, 'El disyuntor de la unidad tren tiene como función:',
   ['Aislar el equipo de tracción de la tensión del hilo de trabajo ante sobreintensidad o cortocircuito',
    'Transformar la tensión del hilo de trabajo en otros voltajes',
    'Suministrar aire comprimido al circuito de freno',
    'Elevar el pantógrafo cuando falta presión'], 0,
   'El disyuntor es un interruptor automático que protege el equipo de tracción aislándolo ante sobreintensidades o cortocircuitos. La transformación de voltajes la hace el convertidor estático, y el aire lo suministran los compresores.', 74),

 q('1.19', 3, 'La batería de la unidad tren suministra, en caso de avería del convertidor estático, una tensión de:',
   ['Unos 110 V cc, con una toma intermedia para los circuitos de 24 V cc',
    '600 V cc', '380 V de corriente alterna trifásica', '220 V de corriente alterna'], 0,
   'La batería suministra unos 110 V cc con toma intermedia de 24 V cc. Los 380 V ca trifásica y los 220 V ca son salidas del convertidor estático, y los 600 V cc son una de las tensiones del hilo de trabajo.', 72),

 q('1.19', 2, 'El compresor auxiliar de la unidad tren produce aire comprimido:',
   ['Exclusivamente para la elevación del pantógrafo', 'Para todos los circuitos neumáticos del tren',
    'Únicamente para el circuito de freno', 'Para la suspensión neumática y las puertas'], 0,
   'El compresor auxiliar sirve exclusivamente para elevar el pantógrafo cuando no hay presión suficiente al poner el tren en servicio. El que alimenta todos los circuitos neumáticos (freno, pantógrafo, suspensión) es el compresor principal.', 73),

 q('1.19', 3, 'Los ganchos de acople fijo, situados entre coche y coche de una misma unidad tren:',
   ['Son un enganche semipermanente que solo separa el personal de mantenimiento',
    'Son un enganche automático que el maquinista puede desacoplar desde la cabina',
    'Se sitúan en los extremos de la unidad tren',
    'Solo permiten el acoplamiento mecánico, no el eléctrico ni el neumático'], 0,
   'El acople fijo es semipermanente, une los coches de una misma unidad y el manual advierte expresamente que solo lo separa el personal de mantenimiento. El automático y desacoplable es el acople móvil, que va en los extremos de la unidad y une unidades entre sí.', 75),

 q('1.19', 2, 'El convertidor estático transforma la corriente del hilo de trabajo en:',
   ['380 V ca trifásica, 400 V ca trifásica, 220 V ca, 110 V cc y 24 V cc',
    'Únicamente 110 V cc y 24 V cc', '600 V cc y 1.500 V cc', '750 V cc para el metro ligero'], 0,
   'El convertidor produce esa gama completa de tensiones a partir de los 600 o 1.500 V cc del hilo de trabajo. Los 110 y 24 V cc son solo dos de las salidas, y coinciden además con lo que da la batería, lo que hace atractiva la opción incompleta.', 72)
);

/* ══════════════════════════ 1.20 ══════════════════════════ */
tema('1.20', 'Zonas y coronas tarifarias',
'En el sistema de transporte público existen **8 zonas tarifarias (coronas)**:\n\n- **6 para la Comunidad de Madrid**: **A, B1, B2, B3, C1 y C2**.\n- **2 para Castilla-La Mancha**: **E1 y E2**.\n\n**Cada zona incluye a las anteriores.** Así, la corona B2 incluye A, B1 y B2. Con dos excepciones:\n\n- Los **abonos interzonales**, que solo son válidos en las zonas a las que se refiere el título.\n- Los **abonos E1 y E2**, que **no son válidos para trayectos internos** dentro de la propia zona ni entre ellas. Es decir, **no se puede viajar de E1 a E1, ni de E1 a E2**.\n\n**Zona A.** Es la zona central. Permite viajar en Metro por todas las líneas del área metropolitana, en **todas las líneas de la EMT excepto la línea 203 Exprés Aeropuerto**, en Cercanías Renfe entre las estaciones incluidas, y en el **Metro Ligero ML1** (Pinar de Chamartín–Las Tablas).\n\n**Zona B.** Se divide en **B1, B2 y B3**, que amplían la validez de la zona A a esas coronas y a más servicios: autobuses urbanos e interurbanos y cercanías de esas coronas.\n\n**Zona C.** Se divide en **C1 y C2**, con las que se abarca **la totalidad de la Comunidad de Madrid**.\n\n**Zonas tarifarias de la red de Metro:**\n\n| Ámbito | Zona |\n|---|---|\n| **MetroMadrid** (zona metropolitana, incluye ML1) | A |\n| **T.F.M.** Puerta de Arganda – Arganda del Rey | A – B3 |\n| **MetroSur** (línea 12 y Joaquín Vilumbrales) | B1 – B2 |\n| **MetroNorte** Hospital Infanta Sofía – La Granja | B1 |\n| **MetroEste** Hospital del Henares – Barrio del Puerto | B1 |\n| **ML2** Colonia Jardín – Estación de Aravaca | B1 |\n| **ML3** Colonia Jardín – Puerta de Boadilla | B1 – B2 |\n\n> **La Fortuna** (línea 11): para acceder a la red por esta estación se necesita un **título válido MetroSur o superior**.',
[
 { anverso: '¿Cuántas zonas tarifarias hay y cómo se reparten?', reverso: '8 en total: 6 de la Comunidad de Madrid (A, B1, B2, B3, C1, C2) y 2 de Castilla-La Mancha (E1 y E2).' },
 { anverso: '¿Qué línea de la EMT queda excluida de la zona A?', reverso: 'La línea 203 Exprés Aeropuerto.' },
 { anverso: '¿Por qué son especiales las zonas E1 y E2?', reverso: 'Sus abonos no valen para trayectos internos dentro de la propia zona ni entre ellas: no se puede ir de E1 a E1 ni de E1 a E2.' },
 { anverso: '¿Qué zonas tarifarias abarcan la totalidad de la Comunidad de Madrid?', reverso: 'Las coronas C1 y C2.' },
 { anverso: '¿Qué título hace falta para entrar a la red por La Fortuna (L11)?', reverso: 'Un título válido MetroSur o superior.' }
], [79, 80, 81]);

preguntas.push(
 q('1.20', 2, 'El sistema de transporte público de la Comunidad de Madrid cuenta con:',
   ['8 zonas tarifarias: 6 de la Comunidad de Madrid y 2 de Castilla-La Mancha',
    '6 zonas tarifarias, todas de la Comunidad de Madrid',
    '8 zonas tarifarias, todas de la Comunidad de Madrid',
    '5 zonas tarifarias: A, B, C, D y E'], 0,
   'Son 8 coronas: A, B1, B2, B3, C1 y C2 para la Comunidad de Madrid, más E1 y E2 para Castilla-La Mancha. Quedarse en 6 es olvidar las dos zonas manchegas, que es el error más frecuente.', 79),

 q('1.20', 3, 'Los abonos de las zonas E1 y E2 presentan la particularidad de que:',
   ['No son válidos para trayectos internos dentro de la propia zona ni entre ellas',
    'Incluyen todas las zonas anteriores, como el resto de coronas',
    'Solo son válidos en Metro, no en autobús',
    'Tienen una validez de 365 días en lugar de 30'], 0,
   'La regla general es que cada zona incluye a las anteriores, pero E1 y E2 son la excepción: no valen para trayectos internos dentro de la misma zona ni entre ellas. El manual pone el ejemplo de que no se puede viajar de E1 a E1 ni de E1 a E2.', 79),

 q('1.20', 2, 'La zona A permite viajar en todas las líneas de la EMT excepto:',
   ['La línea 203 Exprés Aeropuerto', 'Las líneas nocturnas', 'Las líneas interurbanas', 'La línea circular C1'], 0,
   'La única exclusión que recoge el manual es la línea 203 Exprés Aeropuerto. Las interurbanas no son de la EMT, y las nocturnas sí están incluidas en la zona A.', 79),

 q('1.20', 3, 'MetroSur, que comprende la línea 12 y la estación de Joaquín Vilumbrales, corresponde a las zonas tarifarias:',
   ['B1 y B2', 'B1 únicamente', 'A y B3', 'B2 y B3'], 0,
   'MetroSur es B1-B2. La zona B1 sola corresponde a MetroNorte y MetroEste; A-B3 es el ámbito de T.F.M. (Puerta de Arganda–Arganda del Rey). Joaquín Vilumbrales pertenece a la línea 10 pero tarifariamente va con MetroSur.', 80),

 q('1.20', 3, 'Para acceder a la red por la estación de La Fortuna, de la línea 11, se necesita:',
   ['Un título válido MetroSur o superior', 'Un título de zona A',
    'Un suplemento específico de línea 11', 'Un título de MetroOeste'], 0,
   'El manual advierte con un asterisco que para acceder a la red por La Fortuna hace falta un título válido MetroSur o superior, pese a que la línea 11 discurre por el municipio de Madrid. Es una excepción concreta y por eso muy preguntable.', 80)
);

/* ══════════════════════════ 1.21 ══════════════════════════ */
tema('1.21', 'Tarjetas de transporte público: personal, MULTI e infantil',
'Los títulos se cargan en **tarjetas sin contacto**, de dos tipos: **PERSONAL** y **ANÓNIMA (MULTI)**.\n\nAmbas usan **el mismo soporte** y pueden contener hasta un **máximo de 3 títulos** distintas. Se distinguen en que la **anónima no tiene número de TTP, ni datos personales, ni foto**. Las dos tienen una **garantía de 3 años** para sustitución gratuita si son defectuosas por causas no imputables al usuario.\n\n**Tarjeta PERSONAL.** Personal e **intransferible**; lleva impresos nombre, apellidos, fotografía y números identificativos. **Caduca a los 10 años** de su emisión. Su chip guarda el **perfil** (edad) y el **colectivo** (familia numerosa, discapacidad). **Precio: 4 euros**, y cada usuario puede tener **una única tarjeta**. Se solicita:\n\n- **Por internet**, en la web del CRTM, recibiéndola en el domicilio en **7 a 15 días hábiles**.\n- **Con cita previa** (teléfono **012** o web) en las **Oficinas de Gestión**, donde se entrega **en el momento** y le hacen allí la foto.\n\n**Tarjeta ANÓNIMA (MULTI).** Recargable, **multipersonal**, con **duración de diez años**. Se adquiere en **máquinas automáticas** de Metro y Metro Ligero y en la **red de estancos y puntos de venta autorizados**. **Precio: 2,50 euros**, salvo que la primera carga sea un **título turístico**, en cuyo caso el importe de la tarjeta es **0**. Las **Oficinas de Gestión no comercializan** estas tarjetas.\n\n**Perfiles por edad:**\n\n| Perfil | Edad |\n|---|---|\n| Sin título | Menores de **4 años** |\n| Infantil | Desde 4 hasta cumplir **7** |\n| Joven | Hasta cumplir **26** |\n| Normal | Desde 26 hasta cumplir **65** |\n| Abono +65 | A partir de **65** |\n\n**Colectivos (descuentos), acumulables entre sí:**\n\n- Familia Numerosa **General**: **20 %**\n- Familia Numerosa **Especial**: **50 %**\n- Personas con **discapacidad ≥ 65 %**: **20 %**\n\n**Tarjeta Infantil.** No recargable, **de color verde**, para viajeros **de 4 a 6 años** (hasta cumplir 7), válida en toda la Comunidad de Madrid (**C2**). Tarjeta y activación **gratuitas**; las reediciones por robo, extravío o deterioro imputable al usuario cuestan **6 euros**. Los niños de 4 a 6 años que **no la porten deben adquirir un título** para acceder a la red.\n\n**Tarjeta Azul.** Para empadronados en el municipio de Madrid con determinados requisitos de edad o discapacidad y **límite de renta**. Se solicita en el **Ayuntamiento de Madrid** y sirve **solo** en Metro (zona A), **ML1** y **EMT**.\n\n**App «Mi Tarjeta Transporte».** Permite cargar y validar desde el móvil. Requiere **NFC, Android 9.0 o superior y Google Wallet**. Digitalizar la tarjeta física **la bloquea automáticamente**, y una misma TTP **no puede estar activa en dos móviles a la vez**.',
[
 { anverso: '¿Cuántos títulos caben en una tarjeta de transporte público?', reverso: 'Hasta un máximo de tres, tanto en la personal como en la MULTI.' },
 { anverso: '¿Cuánto cuesta la tarjeta personal y cuánto la MULTI?', reverso: 'La personal 4 euros; la MULTI 2,50 euros (gratis si la primera carga es un título turístico).' },
 { anverso: '¿Cuánto duran la tarjeta personal y la MULTI?', reverso: 'La personal caduca a los 10 años de su emisión; la MULTI también tiene una duración de diez años.' },
 { anverso: '¿Qué descuentos hay por colectivo y son acumulables?', reverso: 'Familia numerosa general 20 %, especial 50 %, discapacidad ≥65 % un 20 %. Sí son acumulables.' },
 { anverso: '¿De qué color es la Tarjeta Infantil y para qué edades sirve?', reverso: 'Verde. Desde los 4 años hasta cumplir los 7, válida en toda la Comunidad de Madrid (C2).' },
 { anverso: '¿Qué requisitos técnicos pide la app Mi Tarjeta Transporte?', reverso: 'NFC, Android 9.0 o superior y Google Wallet.' }
], [82, 83, 84, 86, 97, 99]);

preguntas.push(
 q('1.21', 2, 'Una tarjeta de transporte público, sea personal o anónima, puede contener como máximo:',
   ['3 títulos distintos', '1 título', '2 títulos', '5 títulos'], 0,
   'Ambos tipos de tarjeta usan el mismo soporte y admiten hasta tres títulos. Conviene recordar además que el Suplemento de Aeropuerto no ocupa hueco propio, por ser una característica que se añade a un título suplementable.', 82),

 q('1.21', 2, 'El precio de una tarjeta de transporte público personal nueva es de:',
   ['4 euros', '2,50 euros', '6 euros', 'Gratuita'], 0,
   'La personal cuesta 4 euros y cada usuario puede tener una única tarjeta. Los 2,50 euros corresponden a la tarjeta anónima MULTI, y los 6 euros a las reediciones de la Tarjeta Infantil por causas imputables al usuario.', 84, { volatil: true }),

 q('1.21', 3, 'Si la primera carga de una tarjeta MULTI es un título turístico, el precio de la tarjeta será de:',
   ['0 euros, porque va incluido en el precio del título turístico', '2,50 euros, como siempre',
    '4 euros', '1,50 euros'], 0,
   'El manual precisa que cuando la primera carga es un título turístico, el importe de la tarjeta queda incluido en el precio de venta del propio título, de modo que el coste de la tarjeta es cero.', 86, { volatil: true }),

 q('1.21', 3, 'Los descuentos por familia numerosa de categoría especial y por discapacidad igual o superior al 65 % son, respectivamente:',
   ['50 % y 20 %, y son acumulables', '50 % y 20 %, pero no son acumulables',
    '20 % y 50 %, y son acumulables', '30 % y 30 %, y no son acumulables'], 0,
   'Familia numerosa general un 20 %, especial un 50 %, y discapacidad igual o superior al 65 % un 20 %. El manual señala expresamente que estos descuentos son acumulables entre sí.', 83),

 q('1.21', 3, 'Un niño de 5 años que no porta la Tarjeta Infantil:',
   ['Debe adquirir un título de transporte para poder acceder a la red',
    'Puede viajar gratuitamente en cualquier caso por ser menor de 7 años',
    'Debe viajar acompañado de un adulto con abono',
    'Puede solicitar la tarjeta al Jefe de Sector en la propia estación'], 0,
   'El manual es explícito: los viajeros de entre 4 y 6 años inclusive que no porten la Tarjeta Infantil deben adquirir un título. Quienes viajan sin título son los menores de 4 años. La tarjeta se solicita en la web del CRTM o en las Oficinas de Gestión con cita previa.', 99),

 q('1.21', 2, 'La Tarjeta Azul es de utilización exclusiva en:',
   ['Metro de Madrid (zona A), Metro Ligero ML1 y EMT', 'Toda la Comunidad de Madrid hasta la zona C2',
    'Metro de Madrid únicamente', 'Metro, EMT y Cercanías Renfe en zona A'], 0,
   'La Tarjeta Azul, que se solicita a través del Ayuntamiento de Madrid, sirve solo en Metro (zona A), ML1 y EMT. Cercanías Renfe queda fuera, aunque opere en la misma zona A.', 97),

 q('1.21', 3, 'Al digitalizar una tarjeta de transporte física en la app Mi Tarjeta Transporte:',
   ['La tarjeta física queda bloqueada automáticamente', 'Ambas quedan operativas de forma simultánea',
    'La tarjeta física conserva solo los títulos ya cargados', 'Se pierde el saldo de los títulos cargados'], 0,
   'La digitalización conlleva el bloqueo automático de la tarjeta física. Además, una misma TTP no puede estar activa en dos móviles a la vez, aunque sí puede transferirse a otro activando la misma cuenta de Google Wallet.', 93)
);

/* ══════════════════════════ 1.22 ══════════════════════════ */
tema('1.22', 'Los abonos',
'Los **abonos** son títulos **personales e intransferibles** que permiten un **número ilimitado de viajes** dentro de su ámbito de validez **espacial** (zonales o interzonales) y **temporal** (**30 días** o **anual**, salvo el **Abono +65, que dura 365 días**). Se cargan en una **Tarjeta de Transporte Público Personal**.\n\n**Modalidades por edad:**\n\n- **Tarjeta Infantil** — de 4 a 6 años (hasta cumplir 7).\n- **Abono 30 días «Joven 7-14»** — entre 7 y 14 años.\n- **Abono Joven** — desde los 7 hasta cumplir 26.\n- **Abono Normal** — desde los 26 hasta cumplir 65.\n- **Abono Transportes +65** — a partir de 65 años. **No tiene diferenciación de zonas**: sirve en cualquier zona de la Comunidad de Madrid.\n- **Tarjeta Azul** — por empadronamiento en Madrid, edad o discapacidad y límite de renta.\n\nPara todos los abonos **excepto la Tarjeta Azul** existen modalidades con descuento para familias numerosas (20 % general, 50 % especial) y discapacidad ≥ 65 % (20 %), **acumulables**.\n\n**Abono Transportes +65.** Al introducir en una máquina una TTP personal con perfil anterior, aparece una pantalla para cambiar de modalidad; si el viajero acepta, la máquina pide la fecha de nacimiento y carga el título. La carga es válida durante los **365 días siguientes, con independencia de la fecha de la primera utilización**.\n\n**Abono «Joven 7-14».** Título **gratuito** de 30 días para personas de **entre 7 y 14 años**, permitiendo la **última carga el día que se cumplen 15**. Es **válido hasta la zona C2 incluida**, y es **compatible** con títulos Sencillos, 10 viajes y Suplemento de Aeropuerto. Como solo llega a C2, quien necesite llegar a E2 debe usar el **30 días Joven Tarifa Plana**; para pasar de uno a otro **hay que agotar** el título en vigor.\n\n**Regla de los 10 días.** Para los abonos de 30 días, una vez realizada la carga se dispone de **10 días para comenzar a usarla**. Transcurridos esos 10 días, **si el título no ha sido validado, los días comienzan a descontarse igualmente**.\n\n**Abono anual.** El CRTM acordó **suspender la venta de títulos anuales particulares**, manteniendo la comercialización del abono anual **a empresas**.\n\nLa tarjeta **no es retornable**: no se devuelve su importe.',
[
 { anverso: '¿Cuánto dura el Abono Transportes +65 y desde cuándo cuenta?', reverso: '365 días desde la carga, con independencia de la fecha de la primera utilización.' },
 { anverso: '¿Cuántos días hay para empezar a usar un abono de 30 días recién cargado?', reverso: '10 días. Pasados esos 10 días, aunque no se haya validado, los días empiezan a descontarse.' },
 { anverso: '¿Hasta qué zona es válido el abono Joven 7-14 y qué coste tiene?', reverso: 'Hasta la zona C2 incluida, y es gratuito.' },
 { anverso: '¿Qué abono no tiene diferenciación de zonas?', reverso: 'El Abono Transportes +65: sirve en cualquier zona de la Comunidad de Madrid.' },
 { anverso: '¿Qué ocurrió con el abono anual para particulares?', reverso: 'El CRTM acordó suspender su venta; se mantiene solo el abono anual a empresas.' }
], [86, 87, 89, 96]);

preguntas.push(
 q('1.22', 2, 'La duración del Abono Transportes +65 es de:',
   ['365 días desde la carga, con independencia de la fecha de primera utilización',
    '30 días desde la primera validación', 'Un año natural, de enero a diciembre',
    'Indefinida mientras se mantengan los requisitos'], 0,
   'El +65 dura 365 días contados desde la carga, y el manual subraya que es independiente de cuándo se use por primera vez. Es la excepción al esquema general de 30 días o anual del resto de abonos.', 89),

 q('1.22', 3, 'Tras cargar un abono de 30 días, el usuario dispone de un plazo para empezar a utilizarlo de:',
   ['10 días; transcurridos, los días comienzan a descontarse aunque no se haya validado',
    '30 días, sin que se descuente nada hasta la primera validación',
    '15 días, tras los cuales el título caduca',
    'No hay plazo: el abono empieza a contar siempre con la primera validación'], 0,
   'Son 10 días de margen. Pasados esos 10 días sin validar, los días del abono empiezan a descontarse igualmente. Es una regla concreta que sorprende y por eso cae con frecuencia.', 89),

 q('1.22', 2, 'El abono «Joven 7-14»:',
   ['Es gratuito, de 30 días, y válido hasta la zona C2 incluida',
    'Es gratuito y válido hasta la zona E2', 'Tiene un descuento del 50 % y es válido en zona A',
    'Solo puede cargarse en una tarjeta MULTI'], 0,
   'Es un título gratuito de 30 días para personas de entre 7 y 14 años, válido hasta C2. Quien necesite llegar hasta E2 debe recurrir al 30 días Joven Tarifa Plana. Se carga en TTP personal, no en MULTI.', 89, { volatil: true }),

 q('1.22', 3, 'El abono «Joven 7-14» permite realizar la última carga:',
   ['El día en que la persona cumple 15 años', 'El día en que la persona cumple 14 años',
    'El último día del mes en que cumple 14 años', 'Hasta cumplir los 26 años'], 0,
   'El manual precisa que permite la última carga el día en que se cumplen los 15 años. A partir de ahí el usuario pasa al Abono Joven ordinario, que se extiende hasta cumplir los 26.', 89),

 q('1.22', 2, '¿Qué abono no establece diferenciación de zonas tarifarias?',
   ['El Abono Transportes +65', 'El Abono Joven', 'El Abono Normal', 'La Tarjeta Infantil'], 0,
   'El +65 puede utilizarse en cualquiera de las zonas de la Comunidad de Madrid sin distinción. El Joven y el Normal sí se contratan por zona, y la Tarjeta Infantil es válida hasta C2, que es un ámbito concreto y no una ausencia de zonificación.', 87)
);

/* ══════════════════════════ 1.23 ══════════════════════════ */
tema('1.23', 'Títulos sencillos, 10 viajes, suplemento y turístico',
'**Título Sencillo.** Permite **un único viaje** por el tramo o zona elegida **el día de su adquisición**. Son válidos **exclusivamente para la jornada Metro** en la que se realizó la carga; los cargados **a partir de las 12 de la noche hasta el cierre del servicio** valen también la **jornada siguiente**.\n\n**Título 10 Viajes.** Permite **10 viajes** en cualquier trayecto **dentro de la zona tarifaria** a la que pertenece.\n\n**Combinado.** Permite viajar **entre estaciones de distintas zonas** de la red ferroviaria metropolitana (MetroMadrid con ML1, T.F.M., MetroSur, MetroNorte, MetroEste y MetroOeste con ML2 y ML3).\n\n**Nombres propios que hay que saber:**\n\n- El título **10 viajes de MetroMadrid (zona A)** se llama **Metrobús**.\n- El título **Sencillo de MetroMadrid (zona A)** se llama **Sencillo Metro zona A**.\n\n**Sencillo Metro zona A: precio por tramos.** Es un sencillo **por tramos**, asociado al **número de estaciones del itinerario más corto posible**, **con independencia del número de transbordos**, entre la estación de origen y la de destino:\n\n- Hasta **cinco estaciones**: precio base de **1,50 €**.\n- Cada estación de más: **+0,10 €**.\n- Trayectos de **10 o más estaciones**: **2 €**.\n\n**Suplemento Aeropuerto.** Lo abonan los viajeros cuyo **origen o destino** sea **Aeropuerto T1-T2-T3 o Aeropuerto T4**. Quedan **exentos** los portadores de **Abonos** (Anual, 30 días, Turístico, Tarjeta Azul, Tarjeta Infantil) y los titulares de la **tarjeta AENA**.\n\n> El Suplemento Aeropuerto **no es un título de transporte**: es una **característica que se añade** a los títulos suplementables (Sencillo Zona A, Sencillo Combinado, Sencillo Corte de Servicio Metro, Metrobús y 10 Viajes Combinado). Por eso **no ocupa hueco propio** en la tarjeta, y debe ir siempre acompañado de alguno de ellos.\n\n**Título Turístico.** Título **personal e intransferible** cargado en soporte **TTP MULTI**, que permite **desplazamientos ilimitados** en los servicios de la zona elegida durante un periodo determinado. **No tiene caducidad** y **empieza a descontar días a partir de la primera validación**. Al ser personal, los torniquetes lo rechazan por **antipassback** en validaciones múltiples. Las tarjetas MULTI expedidas con Título Turístico **no tienen coste**.\n\n- **Duraciones**: 1, 2, 3, 4, 5 y 7 días naturales.\n- **Tipos por edad**: **Normal** e **Infantil** (menores de 11 años, al **50 %** del precio).\n- **Zonas**: **Zona A** (coincide prácticamente con el término municipal de Madrid; no incluye la línea Exprés Aeropuerto de la EMT) y **Zona T** (toda la cobertura geográfica de los abonos; **no válido en los servicios regionales de Renfe Operadora**).',
[
 { anverso: '¿Cómo se llama el título de 10 viajes de la zona A?', reverso: 'Metrobús.' },
 { anverso: '¿Cómo se calcula el precio del Sencillo Metro zona A?', reverso: 'Por tramos, según el número de estaciones del itinerario más corto posible, con independencia de los transbordos. Hasta 5 estaciones el precio base; +0,10 € por estación de más; desde 10 estaciones, precio máximo.' },
 { anverso: '¿Es el Suplemento Aeropuerto un título de transporte?', reverso: 'No. Es una característica que se añade a un título suplementable, y no ocupa hueco propio en la tarjeta.' },
 { anverso: '¿Quién está exento de pagar el Suplemento Aeropuerto?', reverso: 'Los portadores de abonos (Anual, 30 días, Turístico, Tarjeta Azul, Tarjeta Infantil) y los titulares de la tarjeta AENA.' },
 { anverso: '¿Cuándo empieza a contar el Título Turístico?', reverso: 'A partir de la primera validación. El título no tiene caducidad.' },
 { anverso: '¿Qué descuento tiene el Abono Turístico Infantil y hasta qué edad?', reverso: 'El 50 % del precio del Normal, para menores de 11 años.' }
], [90, 91, 92, 93]);

preguntas.push(
 q('1.23', 1, 'El título de 10 viajes de MetroMadrid, zona A, recibe el nombre de:',
   ['Metrobús', 'Sencillo Metro zona A', 'Combinado', 'Abono Transportes'], 0,
   'El 10 viajes de la zona A se llama Metrobús, y permite viajar en Metro o en las líneas de la EMT de zona A, excepto la Exprés Aeropuerto. El Sencillo Metro zona A es el título de viaje único de esa misma zona.', 90),

 q('1.23', 3, 'El precio del Sencillo Metro zona A se determina en función de:',
   ['El número de estaciones del itinerario más corto posible, con independencia de los transbordos',
    'El número de transbordos que realice el viajero',
    'El tiempo total de duración del trayecto',
    'El número de zonas tarifarias que se atraviesen'], 0,
   'Es un sencillo por tramos ligado al número de estaciones del itinerario más corto posible, y el manual subraya expresamente que los transbordos no influyen. Hasta cinco estaciones se aplica el precio base, y desde diez el máximo.', 90),

 q('1.23', 2, 'El Suplemento Aeropuerto:',
   ['No es un título de transporte, sino una característica que se añade a títulos suplementables',
    'Es un título de transporte independiente que ocupa hueco propio en la tarjeta',
    'Solo puede cargarse en tarjetas personales', 'Es obligatorio para todos los viajeros, sin excepción'], 0,
   'El manual insiste en que el Suplemento no es un título: es una característica añadida a un título suplementable, por lo que no ocupa hueco propio en la tarjeta y debe ir siempre acompañado de uno de ellos. Además, los portadores de abonos y de tarjeta AENA están exentos.', 91, { pag2: 92 }),

 q('1.23', 3, 'Un viajero con Abono de 30 días que sale de la estación Aeropuerto T4:',
   ['Está exento de abonar el Suplemento Aeropuerto', 'Debe abonar el Suplemento Aeropuerto igualmente',
    'Debe abonar la mitad del Suplemento', 'Solo está exento si además tiene tarjeta AENA'], 0,
   'Los portadores de abonos —Anual, 30 días, Turístico, Tarjeta Azul y Tarjeta Infantil— están exentos del Suplemento, igual que los titulares de la tarjeta AENA. La exención por abono es independiente de tener o no tarjeta AENA.', 91),

 q('1.23', 3, 'El Título Turístico empieza a descontar días:',
   ['A partir de la primera validación', 'Desde el momento de la compra',
    'A los 10 días de la carga si no se ha usado', 'El primer día natural del mes siguiente'], 0,
   'El Título Turístico no tiene caducidad y empieza a descontar días a partir de la primera validación. La regla de los 10 días es propia de los abonos de 30 días, no del turístico.', 92),

 q('1.23', 2, 'El Abono Turístico Infantil es válido para niños:',
   ['Menores de 11 años, y su precio es el 50 % del Normal', 'Menores de 7 años, y es gratuito',
    'De 4 a 6 años, con un 50 % de descuento', 'Menores de 14 años, con un 20 % de descuento'], 0,
   'El Turístico Infantil es para menores de 11 años y cuesta la mitad que el Normal. Las edades de 4 a 6 años corresponden a la Tarjeta Infantil, que es un título distinto y gratuito.', 92),

 q('1.23', 3, 'El Título Turístico de Zona T no es válido en:',
   ['Los servicios regionales de Renfe Operadora', 'Las líneas de la EMT',
    'El Metro Ligero ML2 y ML3', 'Los autobuses interurbanos'], 0,
   'La Zona T comprende toda la cobertura geográfica de los abonos, con la excepción expresa de los servicios regionales de Renfe Operadora. La exclusión de la línea Exprés Aeropuerto de la EMT corresponde en cambio a la Zona A.', 93)
);

/* ══════════════════════════ 1.24 ══════════════════════════ */
tema('1.24', 'Metro en cifras',
'El capítulo 2 del manual abre con una infografía de datos generales. **Todas estas cifras están fechadas: actualizadas el 18 de mayo de 2026.** Son el ejemplo perfecto de dato volátil, así que apréndelas sabiendo que pueden cambiar.\n\n| Dato | Cifra |\n|---|---|\n| **Empleados** | **7.272** |\n| **Estaciones** | **303** |\n| **Kilómetros de red** | **296,78** |\n| **Escaleras mecánicas** | **1.710** |\n| **Interfonos** | **5.524** |\n| **Ascensores** | **578** |\n| **Viajeros en 2025** | **736.874.032** |\n| **Máquinas de venta** | **1.238** |\n| **Teleindicadores** | **2.427** |\n| **Coches** | **2.067** |\n| **Cámaras de seguridad** | **9.685** |\n\n**Cómo memorizarlas sin volverse loco.** Agrúpalas por orden de magnitud:\n\n- **Centenares**: 303 estaciones, 296,78 km, 578 ascensores.\n- **Millares bajos**: 1.238 máquinas de venta, 1.710 escaleras, 2.067 coches, 2.427 teleindicadores.\n- **Millares altos**: 5.524 interfonos, 7.272 empleados, 9.685 cámaras.\n- **Y una cifra aparte**: **736.874.032 viajeros** en 2025, es decir, unos **737 millones**.\n\n> Dos parejas que se confunden con facilidad: **303 estaciones** frente a **296,78 km** —números parecidos y magnitudes distintas— y **2.067 coches** frente a **2.427 teleindicadores**.\n\nRecuerda además que la red la componen **12 líneas**, el **Ramal Ópera–Príncipe Pío** y la **ML1**, y que las **líneas 6 y 12 son circulares**, con la vía I como **vía interior (Andén I)**.',
[
 { anverso: '¿Cuántas estaciones y cuántos kilómetros de red tiene Metro de Madrid?', reverso: '303 estaciones y 296,78 km de red (dato de 18 de mayo de 2026).' },
 { anverso: '¿Cuántos empleados tiene Metro de Madrid?', reverso: '7.272.' },
 { anverso: '¿Cuántos viajeros transportó Metro en 2025?', reverso: '736.874.032, unos 737 millones.' },
 { anverso: '¿Cuántos coches y cuántos teleindicadores hay?', reverso: '2.067 coches y 2.427 teleindicadores.' },
 { anverso: '¿Cuántos ascensores y cuántas escaleras mecánicas hay?', reverso: '578 ascensores y 1.710 escaleras mecánicas.' },
 { anverso: '¿A qué fecha están actualizadas las cifras del manual?', reverso: 'Al 18 de mayo de 2026.' }
], [17]);

preguntas.push(
 q('1.24', 3, 'Según el manual, el número de estaciones de la red de Metro de Madrid es de:',
   ['303', '296', '283', '312'], 0,
   'Son 303 estaciones, dato actualizado a 18 de mayo de 2026. El 296 despista porque es muy parecido a los 296,78 km de red, que es una magnitud distinta.', 17, { volatil: true, fecha: '2026-05' }),

 q('1.24', 3, 'La longitud de la red de Metro de Madrid es de:',
   ['296,78 km', '303 km', '287,4 km', '324,5 km'], 0,
   'La cifra es 296,78 km. Cuidado con confundirla con las 303 estaciones: son dos datos contiguos en la infografía y de valor numérico muy próximo.', 17, { volatil: true, fecha: '2026-05' }),

 q('1.24', 3, 'El número de empleados de Metro de Madrid asciende a:',
   ['7.272', '5.524', '9.685', '2.067'], 0,
   'Son 7.272 empleados. Los 5.524 son interfonos, los 9.685 cámaras de seguridad y los 2.067 coches: los cuatro son cifras de millares de la misma infografía.', 17, { volatil: true, fecha: '2026-05' }),

 q('1.24', 3, 'El número de viajeros transportados en 2025 fue de:',
   ['736.874.032', '636.874.032', '836.874.032', '73.687.403'], 0,
   'Fueron 736.874.032 viajeros, es decir, unos 737 millones. Es la única cifra de la infografía en el orden de los cientos de millones, lo que ayuda a fijarla.', 17, { volatil: true, fecha: '2026-05' }),

 q('1.24', 3, 'Los coches y los teleindicadores de la red son, respectivamente:',
   ['2.067 y 2.427', '2.427 y 2.067', '2.067 y 1.238', '1.710 y 2.427'], 0,
   'Son 2.067 coches y 2.427 teleindicadores. Los 1.238 son máquinas de venta y los 1.710 escaleras mecánicas. Las cuatro rondan los dos millares, así que conviene fijar el orden.', 17, { volatil: true, fecha: '2026-05' }),

 q('1.24', 3, 'El número de ascensores de la red es de:',
   ['578', '1.710', '5.524', '303'], 0,
   'Son 578 ascensores. Los 1.710 son escaleras mecánicas y los 5.524 interfonos: los tres son elementos de instalaciones y se confunden con facilidad entre sí.', 17, { volatil: true, fecha: '2026-05' })
);

module.exports = {
  parte: {
    parte: '1',
    titulo: 'Conocimientos específicos sobre Metro de Madrid',
    manual: 'Manual 1 del temario oficial',
    url_manual: M,
    color: '#0a6cc4',
    epigrafes: epigrafes
  },
  preguntas: preguntas
};
