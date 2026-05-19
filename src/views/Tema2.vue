<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Informes de calidad

    .bloque-texto-g.bg1.brt-60.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Los informes hacen parte del sistema de información de la empresa, se relacionan directamente con los procesos de calidad, con el sistema de comunicación con todas las áreas de la empresa, lo que permite realizar un adecuado seguimiento a los procesos de control de calidad y una adecuada toma de decisiones en la empresa.

    p Los informes de calidad son el resultado de las inspecciones y las auditorías, estos se presentan teniendo en cuenta la siguiente estructura:

    .row.bgimg-1.align-items-center.p-3.p-md-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

            .row.justify-content-center.align-items-center       
              .col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/2.png', alt='')
              .col-lg-9
                SlyderF.circl-arrow(columnas="col-md-6 col-lg-4")
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj1-1.svg' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.mb-3.py-1.px-4 Justificación
                    p.text-center Determina la importancia y las motivaciones para presentar el informe.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj1-2.svg' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.mb-3.py-1.px-4 Alcance
                    p.text-center Especifica el logro de los objetivos.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj1-3.svg' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.mb-3.py-1.px-4 Objetivos 
                    p.text-center Detalla lo que se quiere conseguir de manera concreta, medible y alcanzable.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj1-4.svg' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.mb-3.py-1.px-4 Desarrollo
                    p.text-center Precisa los recursos utilizados, los resultados de inspecciones y los defectos encontrados.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj1-5.svg' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.mb-3.py-1.px-4 Conclusiones 
                    p.text-center Incluye los indicadores para las mediciones y los análisis de las inspecciones y auditorías.
                    

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1. Indicadores de calidad

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/3.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p En alusión de la frase del físico Kelvin, “Lo que no se mide no se controla, lo que no se controla no se mejora, y lo que no se mejora, tiende a desaparecer”, los indicadores son indispensables para determinar el seguimiento de las metas y objetivos propuestos, con miras a la satisfacción del cliente, porque permiten medir de manera tangible y cuantificable, los resultados de calidad de los procesos, permitiendo su evaluación, por lo tanto muestra los niveles de cumplimiento de los requisitos de calidad. Con lo anterior se concluye que un indicador es un valor, resultado de una operación matemática donde se comparan dos o más características de calidad, cuyo valor se analiza para la toma de decisiones.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Las características de los indicadores son las siguientes:
        ul.lista-ul.fa-lista.list-ico.mb-0
          li
            img(src='@/assets/curso/temas/t2/ico-list.svg')
            span.mb-0 Realistas, es decir relacionados con las actividades actuales de calidad de la empresa.
          li
            img(src='@/assets/curso/temas/t2/ico-list.svg')
            span.mb-0 Representativos de un área o de la empresa y de fácil interpretación.
          li
            img(src='@/assets/curso/temas/t2/ico-list.svg')
            span.mb-0 Efectivos para que logren impacto.
          li
            img(src='@/assets/curso/temas/t2/ico-list.svg')
            span.mb-0 Accesibles a las personas involucradas en la ejecución del proceso.
          li
            img(src='@/assets/curso/temas/t2/ico-list.svg')
            span.mb-0 Sencillo de calcular y gestionar.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/4.png', alt='')

    p.mb-4 Los indicadores pueden ser generales, específicos o ponderados; el procedimiento para aplicarlos es:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/5.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        ol.lista-ol--cuadro.lista-ol--separador.fa-lista
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 1
            span.mb-0 Seleccionar los indicadores a establecer en los procesos críticos, es decir los más importantes o donde se encuentren niveles bajos de calidad.
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 2
            span.mb-0 Definir los datos a analizar del proceso.
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 3
            span.mb-0 Nombrar la persona responsable de gestionar el resultado, el indicador puede ser del proceso o del equipo de calidad, o de ambos.
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 4
            span.mb-0 Realizar el cálculo del indicador, especificar la periodicidad de realizarlo.
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 5
            span.mb-0 Utilizar gráficos para visualizar resultados del indicador.
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 6
            span.mb-0 Presentar en informes o publicar en carteleras de la empresa.

    .row.justify-content-center(data-aos="fade")
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-4
              .col-6.col-lg-4
                img(src='@/assets/curso/temas/t2/tarj2-1.svg', alt='')
            .text-white
              h4.text-center Indicadores de reproceso
              p Para evaluar los resultados de los niveles de no calidad, es importante cuantificar los reprocesos realizados en un lote, una referencia, o una producción, con el fin de poder establecer acciones de mejora que reduzcan los defectos.
              p Para su cálculo se tiene en cuenta la cantidad del lote, cantidad de reprocesos y las causas del reproceso. El indicador se calcula de la siguiente manera:
            .bg3.tarjeta.p-3.mb-4
              .indicador-reproceso
                span.label.fw-bold Indicador de reproceso
                span.equal =                
                .formula
                  .fraction
                    .top Unidades reprocesadas
                    .bottom Unidades del lote
                span.result.fw-bold x 100 %
            p.text-white Según las causas se pueden agrupar para conocer su incidencia en el total de los reprocesos.
          .col-md.tarjeta.bg4.p-4
            .row.justify-content-center.mb-4
              .col-6.col-lg-4
                img(src='@/assets/curso/temas/t2/tarj2-2.svg', alt='')
            .text-white
              h4.text-center Indicador aceptable devoluciones
              p Se habla del indicador aceptable de rechazo en el caso de los muestreos por atributos, es decir, antes de la salida de las prendas al cliente.
              p Con el fin de evaluar el nivel de devoluciones de las prendas por partes del cliente, los cuales afectan los costos de la empresa pues son costos de no calidad. Se presenta el siguiente indicador:
            .bg3.tarjeta.p-3
              .indicador-reproceso
                span.label.fw-bold Indicador devoluciones
                span.equal =                
                .formula
                  .fraction
                    .top Unidades devueltas (en un periodo)
                    .bottom Total, unidades entregadas (en un período)
                span.result.fw-bold x 100 %


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2. Técnicas de calidad: 7 herramientas de control de calidad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-4.mb-3.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/6.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p.mb-0 Con respecto a la gestión de calidad, se tienen técnicas básicas, las cuales consisten en medir las características utilizando la estadística, una vez se recopilan los datos, se analizan utilizando las herramientas para visualizar su variabilidad y poder soportar el proceso de toma de decisiones. A pesar de existir gran variedad de técnicas y herramientas las 7 básicas son:

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Hoja de verificación o chequeo

    p Es una herramienta donde se registran los datos de manera organizada, para realizar los análisis correspondientes de calidad, se realiza con el fin de recolectar y utilizar los datos para posteriores análisis, reducir los riesgos asociaos a la toma de decisiones y acelerar la detección y resolución de problemas, además de apoyar otras herramientas estadísticas de calidad.

    .row.justify-content-center.mb-4
      .col-lg-7
        .bg3.p-4.h-100
          p El procedimiento de elaboración es el siguiente:
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Definir la información requerida, los datos y sus características.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Definir la mejor presentación de los datos en un formato.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Utilizar símbolos, números, letras para registrar datos.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Realizar instructivo para dar a conocer el diligenciamiento de la hoja.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Crear tablas para resumir datos y clasificarlos para luego desarrollar gráficos para visualizar los resultados.
            li.mb-0
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Interpretar, analizar y aplicar la información según el objetivo planteado.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/7.png', alt='')

    p Se conocen con anterioridad las hojas de inspección de producto en proceso, inspección de producto terminado, inspección de trazo y corte, las cuales recopilan información en los procesos relacionados de los defectos presentados, pero se pueden crear otras, según las necesidades de cada proceso y las directrices de la empresa.
    p.mb-4 Ejemplo. En la siguiente tabla se observa una hoja de verificación diligenciada para una inspección de producto terminado.

    .mb-4
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 6. 
        span Control de calidad en puestos de revisión de producto terminado
      .tabla-a.color-acento-contenido
        table
          thead
            tr.bg-color-secundario
              th.text-white(colspan="9") Control de calidad en puestos de revisión de producto terminado
            tr.bg2
              th Fecha
              th Revisador
              th Producto
              th Color
              th Cantidad de la muestra
              th Unidades no conformes
              th % de unidades no conformes
              th Código de defecto
              th Observaciones     
          tbody.text-center
            tr
              td 5/10/2020
              td Flor Vaquero
              td Tapabocas
              td Celeste
              td 20
              td 2
              td 10 %
              td DO2
              td Elástico no cumple medida
            tr
              td 5/10/2020
              td Flor Vaquero
              td Tapabocas
              td Celeste
              td 20
              td 3
              td 15 %
              td DO1
              td Sin remates
            tr
              td 6/10/2020
              td Oscar Pérez
              td Tapabocas
              td Blanco
              td 20
              td 1
              td 5 %
              td DO1
              td Sin remates
            tr
              td 6/10/2020
              td Oscar Pérez
              td Polainas
              td Celeste
              td 30
              td 2
              td 7 %
              td DO3
              td Costuras torcidas
            tr
              td 7/10/2020
              td Gladys Saavedra
              td Polainas
              td Blanco
              td 30
              td 3
              td 10 %
              td DO1
              td Elástico no cumple medida
            tr
              td 7/10/2020
              td Gladys Saavedra
              td Polainas
              td Blanco
              td 30
              td 2
              td 7 %
              td DO3
              td Costuras torcidas
            tr
              td 7/10/2020
              td Flor Vaquero
              td Tapabocas
              td Celeste
              td 20
              td 1
              td 5 %
              td D20
              td Falta de simetría en prenses
            tr
              td 8/10/2020
              td Flor Vaquero
              td Tapabocas
              td Celeste
              td 20
              td 1
              td 5 %
              td D20
              td Falta de simetría en prenses
            tr
              td 8/10/2020
              td Gladys Saavedra
              td Polainas
              td Blanco
              td 30
              td 1
              td 3 %
              td DO3
              td Costuras torcidas
            tr
              td 9/10/2020
              td Oscar Pérez
              td Tapabocas
              td Celeste
              td 20
              td 2
              td 10 %
              td D20
              td Falta de simetría en prenses
            tr
              td 9/10/2020
              td Oscar Pérez
              td Tapabocas
              td Celeste
              td 20
              td 2
              td 10 %
              td D20
              td Falta de simetría en prenses
            tr
              td 9/10/2020
              td Oscar Pérez
              td Tapabocas
              td Celeste
              td 20
              td 1
              td 5 %
              td D20
              td Falta de simetría en prenses
            tr
              td 10/10/2020
              td Flor Vaquero
              td Tapabocas
              td Celeste
              td 20
              td 3
              td 15 %
              td D05
              td Costura suelta
            tr
              td 10/10/2020
              td Oscar Pérez
              td Polainas
              td Celeste
              td 30
              td 1
              td 3 %
              td D20
              td Falta de simetría en prenses

    .row.bgcolor-1.align-items-center.p-3.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/t1/cta.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.col-lg-10.col-md-8.mb-3.mb-sm-0.text-white
                      h4.mb-1 Plantilla Control de calidad en puestos de revisión de producto terminado
                      p.mb-0 La plantilla de esta herramienta la encuentra disponible en el material complementario.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Plantilla_ hoja_de_verificacion.xlsx')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 





    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 





    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 






    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 









    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 








    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 




    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3. Plan de acciones de calidad

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/16.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 El plan de calidad de acuerdo con la norma ISO 9001:2015 “Es una especificación de los procedimientos y recursos asociados a aplicar, cuándo deben aplicarse y quién tiene que aplicarlos a un objeto específico”. Esto para el cumplimiento de requisitos, con el fin de validar nuevos productos o procesos, para optimizar recursos o para implementar un sistema de calidad.
        .bg3.p-4
          p.mb-0 Una vez se han analizado las causas de los problemas o defectos; en el comportamiento de los procesos se requiere definir un plan donde se especifiquen los procedimientos, los recursos para lograr los cambios requeridos con el fin de mejorar la calidad, para ello es necesario definir quienes, cuándo, dónde y qué recursos se necesitan para intervenir el proceso o producto.

    .row.justify-content-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Los pasos para desarrollar un plan de calidad son:
        ol.lista-ol--cuadro.lista-ol--separador.fa-lista
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 1
            span.mb-0 Identificar las necesidades de un plan de calidad.
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 2
            span.mb-0 Especificar requisitos de calidad, recursos, especificaciones técnicas, normas.
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 3
            span.mb-0 Definir alcance y tiempos requeridos.
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 4
            span.mb-0 Estructurar el plan: recopilar documentación, asignar responsables, definir acciones.
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 5
            span.mb-0 Implementar plan.
          li    
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 6
            span.mb-0 Realizar seguimiento y mejoras.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/17.png', alt='')

    .row.justify-content-center.mb-4
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/18.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .bg5.p-4.h-100
          h5 Contenido de un plan de calidad:
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Alcance.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Entradas requeridas: requisitos del cliente, especificaciones técnicas, normativas.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Definir objetivos y metas.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Establecer responsabilidades.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Definir control de información: documentos, registros.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Definir recursos y su manejo.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Definir las acciones a desarrollar en los productos o en los procesos (diseño y desarrollo, compras, producción).
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Establecer los tiempos de las acciones.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Establecer seguimiento y mediciones: herramientas estadísticas de calidad, indicadores.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Especificar controles de producto no conforme.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Establecer auditorías.

    p.mb-5 Para establecer un plan de acción específico de calidad, y solucionar un problema o corregir un defecto es necesario, diseñar las acciones, definir los responsables y los tiempos de ejecución, así como el seguimiento para evaluar si se corrigió el problema definitivamente.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Acciones correctivas de calidad

    .row.justify-content-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Conforme la norma ISO 9001:2015 es "la acción para eliminar la causa de una No Conformidad y evitar que vuelva a ocurrir", por lo cual la acción debe eliminar las causas de la no conformidad al realizar las acciones necesarias que generen los cambios que mejoren la calidad, los cuales deben evaluarse.
        .bg6.p-4
          p.mb-0 Es importante comprender la diferencia entre acción correctiva y la corrección de la no conformidad; debido a que la segunda se refiere a corregir el defecto, sin corregir las causas que genera el problema.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/19.png', alt='')

    p.mb-4 Las acciones deben estar definidas en el plan de calidad una vez se realiza el análisis de los problemas o defectos con las herramientas de calidad.

    .row.bgimg-1.align-items-center.p-3.p-md-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

            .row.justify-content-center.align-items-center       
              .col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/20.png', alt='')
              .col-lg-9
                p.mb-4 Para aplicar las acciones correctivas se requiere:
                SlyderF.circl-arrow(columnas="col-md-6 col-lg-4")
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-1.png' alt='')
                    p.text-center Establecer los tiempos para aplicarlas, lo cual debe ser en el menor tiempo posible.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-2.png' alt='')
                    p.text-center Minimizar las consecuencias de los problemas o defectos, por ejemplo, realizar descuento al cliente por los defectos de la prenda.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-3.png' alt='')
                    p.text-center Evaluar si es realmente necesario la aplicación de la acción.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-4.png' alt='')
                    p.text-center Diseñar acciones en equipo para obtener una solución acertada.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-5.png' alt='')
                    p.text-center Implementar plan de acción especifico de calidad, es decir realizar los cambios.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-6.png' alt='')
                    p.text-center Realizar seguimiento de los cambios, evaluando los cambios.

    p.mb-4 Ejemplo. En la producción de camisetas se recibieron varias devoluciones debido a que se migró el color en el sesgo de escote y mangas, se detectó a partir del análisis que el problema era en un lote.

    .row.justify-content-center.mb-5
      .col-lg-7
        .bg5.p-4.h-100
          h5 Las acciones correctivas que se realizaron fueron:
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Recoger el lote del problema para que no se siguieran vendiendo.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Realizar inspecciones en todas las camisetas del lote.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Realizar pruebas de laboratorio en los textiles que se van a producir en los siguientes lotes.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Utilizar herramientas de control estadístico e indicadores.
            li
              img(src='@/assets/curso/temas/t2/ico-list.svg')
              span.mb-0 Analizar y realizar plan de acción.
      .col-lg-5
        img(src='@/assets/curso/temas/t2/21.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Propuesta de acciones de mejora

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/22.png', alt='')
      .col-lg-10(data-aos="fade-left")
        p Según norma ISO 9001:2015 el numeral de riesgos y oportunidades, habla de las acciones que se establezcan con el fin de lograr mejorar la calidad de la empresa, impactando en la planeación, aumentando indicadores de eficiencia o eficacia de las actividades del sistema de gestión de calidad.
        p Las acciones de mejora también deben estar estructuradas, dentro del plan de calidad, en donde se describan las acciones, los responsables y las fechas para implementarlas.

    p.mb-4 Los pasos para realizar las acciones de mejora son los siguientes:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/23.svg', alt='')
      .col-lg-7.pe-lg-0
        .bg3.p-4.h-100
          ul.lista-ul.fa-lista.list-ico.mb-0
            li.mb-0
              img(src='@/assets/curso/temas/t2/ico-list2.svg')
              span.mb-0 Analizar los riesgos de los procesos.
            li.mb-0
              img(src='@/assets/curso/temas/t2/ico-list2.svg')
              span.mb-0 Analizar los indicadores de los procesos.
            li.mb-0
              img(src='@/assets/curso/temas/t2/ico-list2.svg')
              span.mb-0 Establecer la auditoría al sistema.
            li.mb-0
              img(src='@/assets/curso/temas/t2/ico-list2.svg')
              span.mb-0 Recopilar las no conformidades.
            li.mb-0
              img(src='@/assets/curso/temas/t2/ico-list2.svg')
              span.mb-0 Análisis de los problemas o defectos.
            li.mb-0
              img(src='@/assets/curso/temas/t2/ico-list2.svg')
              span.mb-0 Implementación de las acciones de mejora según plan específico o de acción de calidad.
            li.mb-0
              img(src='@/assets/curso/temas/t2/ico-list2.svg')
              span.mb-0 Realizar seguimiento de las acciones.
            li.mb-0
              img(src='@/assets/curso/temas/t2/ico-list2.svg')
              span.mb-0 Evaluar el sistema de calidad con mecanismos como evaluar la satisfacción del cliente, sea interno o externo. Las evaluaciones deben ser frecuentes para conocer la mejora de la calidad en la eficiencia y eficacia de la empresa.
      .col-lg-2.ps-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/24.png', alt='')

    p Es importante considerar que los problemas y defectos que se presentan en una empresa son oportunidades de mejora, las acciones que se emprendan deben impactar directamente en lograr los objetivos de calidad.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
