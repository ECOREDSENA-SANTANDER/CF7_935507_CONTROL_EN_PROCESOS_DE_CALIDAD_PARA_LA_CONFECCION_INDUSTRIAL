<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Clasificación de defectos e informes de calidad',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los aprendices sobre los conceptos relacionados con la clasificación de defectos, niveles de calidad, ubicación del defecto, uso de tablas militares para planes de muestreo, informes e indicadores de calidad, herramientas básicas de control de calidad, análisis de datos, gráficos de calidad, planes de acción, acciones correctivas y acciones de mejora aplicadas al control de calidad en confección industrial. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito de clasificar los defectos en las prendas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar niveles de defectos para aceptar o rechazar prendas y definir acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar los controles de calidad durante el proceso productivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar los informes de calidad por observaciones verbales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la trazabilidad de los procesos de confección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué es un defecto menor según la clasificación de calidad en confección?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es una discrepancia del estándar que no afecta la capacidad de uso de la prenda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Es una condición insegura que puede lastimar al consumidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es una falla que impide totalmente la venta de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es un defecto que siempre obliga a rechazar todo el lote.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿En qué consiste un defecto mayor en una prenda de vestir?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una falla que no genera insatisfacción en el cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una diferencia leve en el tono del hilo que no requiere revisión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una falla que hace que la prenda no funcione según su diseño y requiera reproceso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una condición exclusiva de las pruebas de laboratorio destructivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'De los siguientes, ¿cuál es un ejemplo de defecto crítico en confección?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hebras de hilo sin cortar en una costura interna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un tono de hilo ligeramente diferente al especificado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un alfiler dejado dentro de la prenda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una etiqueta con información comercial incompleta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Por qué es importante ubicar el defecto por áreas en el informe de calidad?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite establecer trazabilidad, responsabilidades y acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque elimina la necesidad de clasificar los defectos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque reemplaza el uso de tablas militares.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque evita registrar información en los informes de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Para definir un plan de muestreo usando tablas militares es necesario conocer:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El tamaño del lote, la clasificación de defectos y el nivel de aceptación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo el color de la prenda y el nombre del operario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente el precio del producto terminado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La publicidad, el empaque y la exhibición comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'En las tablas militares para control de calidad, el nivel de inspección II corresponde:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'A una inspección normal o general.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'A una inspección destructiva de laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'A una inspección reducida o baja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'A una inspección sin tamaño de muestra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Si un lote es rechazado en el plan de muestreo, la normativa sugiere:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar el nivel de inspección a normal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar el registro del lote rechazado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aceptar automáticamente el siguiente lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender todos los indicadores de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuáles son las partes principales de un informe de calidad?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Justificación, alcance, objetivos, desarrollo y conclusiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseño, patronaje, corte, confección y empaque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Materiales, insumos, telas, hilos y botones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ventas, publicidad, precio, cliente y descuentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Un indicador de calidad se define como:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un valor obtenido al comparar características de calidad para apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una opinión subjetiva que no requiere datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un listado de prendas sin relación con el proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una ficha técnica usada solo para diseñar la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cómo se calcula el porcentaje de reproceso en un proceso de confección?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Unidades reprocesadas divididas entre unidades del lote, multiplicado por 100 %.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Unidades vendidas divididas entre unidades compradas, multiplicado por 100 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costo del hilo dividido entre costo de la tela.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de operarios dividido entre máquinas disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'Las hojas de verificación o chequeo sirven para:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para registrar datos organizadamente y realizar análisis de calidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para reemplazar todos los gráficos estadísticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para eliminar la toma de decisiones basada en datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para aceptar lotes sin inspección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'El histograma es una herramienta de calidad que permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mostrar la distribución y variabilidad de los datos de un proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Identificar únicamente las causas principales y secundarias de un problema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clasificar los defectos en menores, mayores y críticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir responsables y fechas del plan de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El diagrama de causa y efecto o espina de pescado ayuda a identificar:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los factores que afectan un problema de calidad y sus posibles causas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La distribución de frecuencias de una variable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La aceptación o rechazo de un lote según tablas militares.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La fórmula para calcular devoluciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'El Diagrama de Pareto se basa en el principio de:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los pocos vitales que generan la mayor parte de los defectos y los muchos triviales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La relación entre dos variables ubicadas en los ejes X y Y.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La línea central y los límites de control del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La muestra física de la referencia a producir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'La estratificación en control de calidad consiste en:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar la información en grupos con características comunes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Calcular el rango de una tabla de frecuencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar únicamente las unidades devueltas por el cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las categorías de análisis del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'El diagrama de dispersión permite analizar:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Si existe relación entre dos características de calidad de un proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de unidades aceptadas en una tabla militar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El orden de las operaciones de una hoja de ruta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La diferencia entre defecto menor y defecto crítico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'El gráfico de control por atributos está compuesto por:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Línea central, límite de control superior y límite de control inferior.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo barras ordenadas de mayor a menor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente causas agrupadas en las seis M.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rótulo, cuerpo, dibujos y glosario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'Un plan de acción enfocado en calidad debe contener:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Procedimientos, recursos, responsables, tiempos, seguimiento y mediciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo el nombre comercial de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente el número de operarios de la planta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación de documentos, registros y auditorías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cuál es el objetivo de una acción correctiva en calidad?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la causa de una no conformidad y evitar que vuelva a ocurrir.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Corregir el defecto sin revisar sus causas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aceptar productos no conformes sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender el uso de herramientas de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
