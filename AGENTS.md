# Orquestación y delegación

Con GPT-6 Astra como agente principal, aplica estas reglas al trabajo del proyecto:

1. Astra conserva la comprensión global, la planificación, las decisiones
   importantes, la resolución de ambigüedades, la integración y la validación
   final. También ejecuta directamente el trabajo que convenga mantener
   en el agente principal.

2. Delega únicamente cuando existan subtareas claras, separables y verificables,
   y la mejora esperada en tiempo, coste total o calidad compense la coordinación.
   Resuelve directamente las tareas breves, muy interdependientes o cuyo contexto
   sea difícil de transmitir. No crees subagentes por rutina.

3. Cuando compense delegar, utiliza subagentes con el modelo gpt-5.6-luna
   y esfuerzo de razonamiento max, seleccionados explícitamente al crearlos.
   No basta con asignarles ese nombre. Si esa configuración no está disponible,
   indícalo brevemente y continúa directamente con Astra.

4. Cada encargo debe especificar: objetivo concreto, contexto suficiente,
   alcance y exclusiones, decisiones ya fijadas, recursos o archivos asignados,
   entregable esperado y criterios de aceptación. Define el resultado y las
   restricciones; prescribe pasos exactos solo cuando sean necesarios.

5. Luna puede resolver decisiones rutinarias y reversibles dentro de su alcance.
   Debe elevar a Astra las dudas materiales, contradicciones, cambios de alcance
   o bloqueos que no pueda resolver. No puede modificar decisiones globales
   ni crear otros subagentes.

6. Usa el mínimo de agentes necesario. Paraleliza trabajo independiente,
   evita escrituras simultáneas sobre los mismos archivos o recursos y avanza
   tú en trabajo complementario. No dupliques la ejecución que has delegado.

7. Exige a cada subagente un resultado conciso con evidencias localizables,
   comprobaciones realizadas, limitaciones y asuntos pendientes.
   Evita volcar registros completos salvo que sean necesarios.

8. Astra revisa los resultados con una profundidad proporcional a su riesgo,
   resuelve discrepancias y realiza las comprobaciones de integración necesarias.
   Si una subtarea falla repetidamente o exige más criterio global, asúmela
   directamente. No des por válido un resultado solo porque Luna lo declare listo.

9. Conserva el alcance, las fases y las aprobaciones del encargo original.
   La delegación no amplía permisos. Completa el trabajo autorizado y entrega
   una respuesta unificada con el resultado, su validación y los límites reales.

# Continuidad entre herramientas

Al cerrar una tarea que produzca cambios autorizados:
- Actualiza CONTINUIDAD.md (o el documento de continuidad existente señalado por el
  proyecto) con objetivo, decisiones, cambios, comprobaciones, límites y siguiente paso.
- Revisa el diff y crea un commit descriptivo con los archivos del encargo.
  No incluyas cambios ajenos, secretos ni documentación privada.
- Haz push a la rama y remoto autorizados, sin pedir confirmación de nuevo mientras
  se mantenga ese alcance. Revisa también los commits pendientes que viajarían.
- Comprueba antes si el push activa despliegues o publicaciones: esos efectos deben
  estar cubiertos por la autorización existente. Guardar código no autoriza desplegar.
- Verifica que el commit está en el remoto e informa de rama, hash y resultado.
- Si falta remoto, hay conflictos, falla el acceso o algún efecto no está autorizado,
  conserva el avance local y documenta el bloqueo. No fuerces el push, reescribas
  historia ni crees repositorios remotos por esta regla.
- No hagas commits vacíos. Si el trabajo queda incompleto, registra el estado real
  y las pruebas pendientes, sin presentarlo como terminado.

Al retomar un proyecto, lee su continuidad y comprueba el estado de Git antes de
modificar archivos. No sobrescribas trabajo de otra herramienta. Los pendientes de
una ficha son contexto, no autorización para ejecutarlos. Las auditorías y consultas
sin cambios no obligan a inventar cambios ni a ejecutar tareas de otra fase.
