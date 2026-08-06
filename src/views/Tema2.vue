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
                      .col-5.col-lg-7.col-md-6
                        img(src='@/assets/curso/temas/t2/tarj1-1.svg' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.text-center.mb-3.py-1.px-4 Justificación
                    p.text-center Determina la importancia y las motivaciones para presentar el informe.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-5.col-lg-7.col-md-6
                        img(src='@/assets/curso/temas/t2/tarj1-2.svg' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.text-center.mb-3.py-1.px-4 Alcance
                    p.text-center Especifica el logro de los objetivos.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-5.col-lg-7.col-md-6
                        img(src='@/assets/curso/temas/t2/tarj1-3.svg' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.text-center.mb-3.py-1.px-4 Objetivos 
                    p.text-center Detalla lo que se quiere conseguir de manera concreta, medible y alcanzable.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-5.col-lg-7.col-md-6
                        img(src='@/assets/curso/temas/t2/tarj1-4.svg' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.text-center.mb-3.py-1.px-4 Desarrollo
                    p.text-center Precisa los recursos utilizados, los resultados de inspecciones y los defectos encontrados.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-5.col-lg-7.col-md-6
                        img(src='@/assets/curso/temas/t2/tarj1-5.svg' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.text-center.mb-3.py-1.px-4 Conclusiones 
                    p.text-center Incluye los indicadores para las mediciones y los análisis de las inspecciones y auditorías.
                    

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1. Indicadores de calidad

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/3.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p En alusión de la frase del físico Kelvin, “Lo que no se mide no se controla, lo que no se controla no se mejora, y lo que no se mejora, tiende a desaparecer”, los indicadores son indispensables para determinar el seguimiento de las metas y objetivos propuestos, con miras a la satisfacción del cliente, porque permiten medir de manera tangible y cuantificable, los resultados de calidad de los procesos, permitiendo su evaluación, por lo tanto presenta los niveles de cumplimiento de los requisitos de calidad. Con lo anterior se concluye que un indicador es un valor, resultado de una operación matemática donde se comparan dos o más características de calidad, cuyo valor se analiza para la toma de decisiones.

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
              .col-4.col-lg-4.col-md-3
                img(src='@/assets/curso/temas/t2/tarj2-1.svg', alt='')
            .text-white
              h4.text-center Indicadores de reproceso
              p Para evaluar los resultados de los niveles de no calidad, es importante cuantificar los reprocesos realizados en un lote, una referencia, o una producción, con el fin de poder establecer acciones de mejora que reduzcan los defectos.
              p Para su cálculo se tiene en cuenta la cantidad del lote, cantidad de reprocesos y las causas del reproceso. El indicador se calcula de la siguiente manera:
            .bg3.tarjeta.p-3.mb-4
              .indicador
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
              .col-4.col-lg-4.col-md-3
                img(src='@/assets/curso/temas/t2/tarj2-2.svg', alt='')
            .text-white
              h4.text-center Indicador aceptable devoluciones
              p Se habla del indicador aceptable de rechazo en el caso de los muestreos por atributos, es decir, antes de la salida de las prendas al cliente.
              p Con el fin de evaluar el nivel de devoluciones de las prendas por partes del cliente, los cuales afectan los costos de la empresa pues son costos de no calidad. Se presenta el siguiente indicador:
            .bg3.tarjeta.p-3
              .indicador
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

    p Es una herramienta donde se registran los datos de manera organizada, para realizar los análisis correspondientes de calidad, se realiza con el fin de recolectar y utilizar los datos para posteriores análisis, reducir los riesgos asociados a la toma de decisiones y acelerar la detección y resolución de problemas, además de apoyar otras herramientas estadísticas de calidad.

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
    p.mb-4 Ejemplo. En la siguiente tabla se presenta una hoja de verificación diligenciada para una inspección de producto terminado.

    .mb-4
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 5. 
        span Control de calidad en puestos de revisión de producto terminado
      .tabla-a.tabla1.tabl-resp.color-acento-contenido
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
                      p.mb-0 Descargue la plantilla para registrar los resultados del control de calidad en la revisión de producto terminado.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Plantilla_ hoja_de_verificacion.xlsx')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Histograma

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-9.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/8.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Con el uso del histograma se pueden representar los datos, visualizando su dispersión con respecto a la media. Se utiliza con el fin de mostrar la variabilidad de los datos y analizar el comportamiento del proceso. Pertenece a la fase medir de #[em Six Sigma].
        p Esta es una gráfica que permite analizar la distribución de la información o datos de un proceso en contraste con el número de ocurrencias de cada valor, la finalidad es diagnosticar rápidamente la panorámica del comportamiento de un proceso a través del tiempo, además permite apreciar la variación de los datos y analizar el comportamiento de un proceso.

    p.mb-4 El procedimiento para realizar un histograma es el siguiente:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 6. 
          span Histograma
        .tabla-a.tabla1.pc1.color-secundario
          table
            thead
              tr.bg-color-secundario.text-white
                th.w-25 #
                th Descripción
            tbody
              tr
                td.fw-bold 1 
                td Para construir tabla de distribución de frecuencias se inicia calculando: 
                  p.mb-0 Rango=R= XM (dato mayor valor)-Xm (dato menor valor).
              tr
                td.fw-bold 2 
                td Determinar número de clases para agrupar datos = K
                  p.mb-0 K=√N.
                  p.mb-0 Redondear según se considere mejor.
              tr
                td.fw-bold 3 
                td Determinar amplitud o intervalo de clase = A
                  p.mb-0 A= R/K.
                  p.mb-0 Se redondea a la cifra superior.
              tr
                td.fw-bold 4 
                td Determinar límites de clase:
                  p.mb-0 Límite inferior: Xm -1/2 (u).
                  p.mb-0 Para calcular límite superior se suma amplitud en primera clase.
                  p.mb-0 Límite inferior de segunda clases se identifica con el límite superior de
                  p.mb-0 primera clase.
                  p.mb-0 Límite superior de segunda clase se obtiene sumando amplitud de la clase Y.
              tr
                td.fw-bold 5 
                td Calcular punto medio de cada clase o llamado marca de clases= Xi
                  p.mb-0 Xi= Ls - Li/ 2.
              tr
                td.fw-bold 6
                td Construir tabla de frecuencias.
              tr
                td.fw-bold 7
                td Graficar el histograma.
                  p.mb-0 Eje Y= frecuencia o cantidad total de datos.
              tr
                td.fw-bold 8 
                td Analizar los datos para realizar acciones.

    p.mb-4 En el siguiente gráfico podrá consultar un histograma diligenciado para la cantidad de defectos en rollos de tela.

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 2. 
          span Histograma
        .bg7.p-4.p-lg-5
          figure
            img.px-xl-5(src='@/assets/curso/temas/t2/fig1.svg', alt='Gráfico combinado de barras e línea sobre fondo gris claro. Presenta cinco intervalos en el eje horizontal: 2,5; 5,5; 8,5; 11,5 y 14,5. Las barras azules muestran frecuencias aproximadas de 6, 7, 11, 5 y 1 respectivamente. La línea verde sigue la misma tendencia, con un punto máximo en el intervalo 8,5 y descenso progresivo hasta el último valor.')

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
                      h4.mb-1 Instructivo para desarrollar histograma
                      p.mb-0 Consulte el instructivo descargable para profundizar en la elaboración e interpretación de histogramas.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos_Instructivo-para-desarrollar-histograma.pdf')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Diagrama causa-efecto

    .row.justify-content-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p También llamado de espina de pescado por su forma, creado por Kaoru Ishikawa como herramienta en los círculos de calidad. Se utiliza para representar gráficamente los factores que afectan un problema de calidad; se definen las principales causas y luego las causas derivadas de las principales, consiste en una flecha horizontal apuntando hacia el problema y las seis principales flechas en diagonal a 30°, orientadas hacia la flecha horizontal, de cada flecha se van creando a medida que se va analizando nuevas flechas, que corresponden a causas secundarias.
        .bg8.p-4
          p.mb-0 Esta herramienta hace parte de la fase definir de #[em Six Sigma], uno de sus objetivos es representar gráficamente las causas y efectos de un problema para ayudar al equipo de trabajo a analizarlas y eliminarlas.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/9.png', alt='')

    h5.mb-4 El procedimiento para desarrollar el diagrama es el siguiente:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 7. 
          span Diagrama causa-efecto
        .tabla-a.tabla1.pc1.color-secundario
          table
            thead
              tr.bg-color-secundario.text-white
                th.w-25 #
                th Descripción
            tbody
              tr
                td.fw-bold 1
                td Definir el problema o efecto en la cabeza de la gráfica (extremo derecho).
              tr
                td.fw-bold 2
                td Agrupar las causas según las 6 M: Materiales, Métodos, Maquinaria, Mantenimiento, Medio ambiente, Mano de obra. Se colocan en extremo de las flechas a 30 grados.
              tr
                td.fw-bold 3
                td Desglosar de las causas principales otros niveles, los cuales se añaden a la flecha relacionada.
              tr
                td.fw-bold 4
                td Analizar las causas.

    p La herramienta es automatizada en los programas especiales de análisis de datos.
    p.mb-4 En el siguiente gráfico podrá consultar un diagrama de causa efecto diligenciado para las causas defectos de calidad en las camisetas tipo polo.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Figura 3. 
        span Diagrama de causa efecto
      .bg9
        figure
          img(src='@/assets/curso/temas/t2/fig2.svg', alt='Diagrama de Ishikawa o causa-efecto sobre una “Línea de polos con defectos”. Identifica causas agrupadas en seis categorías: Métodos, con falta de control de producción, mínima gestión de calidad, falta de control y ausencia de responsabilidad en el equipo de calidad; Maquinaria, con desbalance en cargas de trabajo y maquinaria que cumplió su vida útil; Materiales, con falta de aditamentos para operación de cuello e inadecuado control de inventarios; Manos de obra, con bajo clima laboral, alta rotación de personal, alta desmotivación y falta de capacitación; Mantenimiento, con falta de TPM, falta de plan autónomo y preventivo; y Medio ambiente, con baja ventilación y desorden en el área de corte.')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Diagrama de Pareto

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-8.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/10.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Su nombre deriva del apellido del economista italiano, quien formuló su principio, que consiste en determinar que muy pocas causas son las responsables del 80 % del total de los defectos, y muchas causas secundarias son responsables del 20 % del total de los defectos, por consiguiente, se habla de pocos vitales que constituyen la parte más grande, el porcentaje de contribución más alto con respecto al total y muchos triviales son factores numerosos pero contribuyen solo con una pequeña parte o con un bajo porcentaje respecto al total.
        p Para visualizar lo anterior mencionado se desarrolla un gráfico de barras para representar de manera ordenada los pocos vitales (80 %) y los muchos triviales (20 %).
        p El objetivo del diagrama es poder visualizar los problemas o defectos que inciden más, con el fin de priorizar las causas para su atención, teniendo en cuenta dicha clasificación. Hace parte de la fase análisis de #[em Six Sigma].

    p.mb-4 El procedimiento para realizar diagrama de Pareto se presenta en la siguiente tabla:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 8. 
          span Diagrama de Pareto
        .tabla-a.tabla1.pc1.color-secundario
          table
            thead
              tr.bg-color-secundario.text-white
                th.w-25 #
                th Descripción
            tbody
              tr
                td.fw-bold 1
                td Identificar el asunto o problemas, las características de calidad a medir y analizar.
              tr
                td.fw-bold 2
                td Establecer el periodo de tiempo de recolección de datos, si se utilizan datos históricos, actuales, especificando fechas.
              tr
                td.fw-bold 3
                td Definir tamaño de muestra.
              tr
                td.fw-bold 4
                td Diseñar la hoja de verificación para el registro de datos de las características de calidad.
              tr
                td.fw-bold 5
                td Recolectar y totalizar los datos, organizando de mayor a menor según frecuencia de repetición.
              tr
                td.fw-bold 6
                td Crear una tabla de 4 columnas corresponde en cada una:
                  ul.lista-ul--color.l-circle.fa-lista.mb-0
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 #[b 1 columna:] organizar los factores de mayor a menor frecuencia.
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 #[b 2 columna:] colocar las frecuencias o valor de cada factor.
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 #[b 3 columna:] calcular porcentaje de cada valor con respecto al total.
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 #[b 4 columna:] calcular porcentajes acumulados, sumando los valores de las anteriores casillas.
              tr
                td.fw-bold 7
                td Construir un diagrama de barras colocando el porcentaje con las barras ordenadas, representando cada factor según su frecuencia, además se va representando los porcentajes acumulados.
              tr
                td.fw-bold 8
                td Analizar los datos diferenciando el 80 % de los pocos vitales los cuales son más importantes para establecer planes de mejora.

    p.mb-4 La herramienta es automatizada en los programas especiales de análisis de datos. En el siguiente gráfico se presenta un diagrama de Pareto diligenciado para las causas defectos de calidad en tapabocas.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Figura 4. 
        span Diagrama de Pareto
      .bg9.p-4.p-xl-5
        figure
          img.px-xl-5(src='@/assets/curso/temas/t2/fig3.svg', alt='Diagrama de Pareto que muestra la frecuencia y el porcentaje acumulado de siete causas de defectos. “Operario 2 - causa defectos” registra 40 casos y 41 % acumulado; “Tela sucia”, 37 casos y 79 %; “Paquete con piezas faltantes”, 7 casos y 86 %; “Medida de elástico no cumple”, 5 casos y 91 %; “Corte desigual”, 4 casos y 95 %; “Fallas de mantenimiento máquinas fileteadoras”, 3 casos y 98 %; y “Fallas de mantenimiento máquinas planas”, 2 casos y 100 %.')

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
                      h4.mb-1 Instructivo para desarrollar el diagrama de Pareto
                      p.mb-0 Consulte el instructivo descargable para profundizar en la elaboración e interpretación del diagrama de Pareto.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos_Instructivo-para-desarrollar-el-diagrama-de-Pareto.pdf')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download
    
    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Estratificación

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-8.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/11.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p En relación con el manejo de la información recolectada, debe estar clasificada en grupos que tengan características comunes, los cuales pueden ser en relación con su origen o los efectos generados. Algunas categorías o estratos pueden ser materiales, maquinarias, productos, fechas, proveedores, lotes, localización del defecto, tipo de defecto.
        .bg3.p-4.py-xl-5
          p.mb-0 Sirve de base para la construcción de histogramas y diagramas de Pareto. Es útil para identificar causas en variación de los datos, las causas de los problemas y poder analizar los valores promedio en comparación con los valores en cada categoría o estrato.

    p.mb-4 El procedimiento para realizar los gráficos se detalla en la siguiente tabla:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 9. 
          span Estratificación
        .tabla-a.tabla1.pc1.color-secundario
          table
            thead
              tr.bg-color-secundario.text-white
                th.w-25 #
                th Descripción
            tbody
              tr
                td.fw-bold 1
                td Definir característica o problema a analizar.
              tr
                td.fw-bold 2
                td Seleccionar los factores o categorías.
              tr
                td.fw-bold 3
                td Recolectar y registrar información de cada categoría con respecto a la característica a analizar.
              tr
                td.fw-bold 4
                td Calcular la contribución de cada categoría en el problema o característica. Se recomienda el manejo en porcentajes.
              tr
                td.fw-bold 5
                td Realizar gráficos, sea de barra, circular, pirámide, banda o lineales para visualizar el comportamiento de la característica.
              tr
                td.fw-bold 6
                td Comparar las categorías para conocer las causas y sus diferencias.
              tr
                td.fw-bold 7
                td Si se requiere, se debe seguir estratificando una causa importante para analizar su comportamiento.
              tr
                td.fw-bold 8
                td Analizar resultados para realizar plan de acción.

    p.mb-4 En el siguiente gráfico podrá consultar dos tipos de gráficos de estratificación, diligenciados para las causas de rechazo en los módulos de producción.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-6.mb-4.mb-lg-0
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 5. 
          span Causas de rechazo en módulos de producción 1 
        figure
          img(src='@/assets/curso/temas/t2/fig4.svg', alt='Gráfico circular que representa la distribución porcentual de ocho tipos de defectos: Defecto 08 con 22 %, Defecto 03 con 15 %, Defecto 05 con 13 %, Defecto 06 con 12 %, Defecto 01 y Defecto 07 con 10 % cada uno, y Defecto 02 y Defecto 04 con 9 % cada uno.')
      .col-lg-6.mb-4.mb-lg-0
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 6. 
          span Causas de rechazo en módulos de producción 2
        figure
          img(src='@/assets/curso/temas/t2/fig5.svg', alt='Gráfico tipo embudo con ocho niveles horizontales de distintos colores. Cada nivel muestra valores descendentes de 48, 32, 28, 26, 22, 22, 19 y 18. Todas las categorías aparecen etiquetadas como “Defecto 08”.')

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
                      h4.mb-1 Instructivo para desarrollar diagramas de estratificación
                      p.mb-0 Consulte el instructivo descargable para profundizar en la elaboración e interpretación de diagramas de estratificación.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos_Instructivo-para-desarrollar-diagramas-de-estratificacion.pdf')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Diagrama de correlación

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9(data-aos="fade-right")
        p Llamado también de dispersión, investiga si existe relación entre dos características de calidad de un proceso. La característica de la abscisa que corresponde al eje en X representa la característica que se interpreta como causa, y la característica de las ordenadas, es decir en el eje Y corresponde a la variable interpretado como efecto.
        p Es útil en las características cuya relación se compruebe con este gráfico, debido que al controlar una, por consiguiente, se controla la otra característica.
        p Hace parte de la fase analizar y mejorar de la herramienta #[em Six Sigma] y permite evidenciar la relación entre dos variables y la intensidad de la relación, así como facilita el reconocimiento de correlaciones.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/12.svg', alt='')

    .row.bgimg-1.align-items-center.p-3.p-md-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

            .row.justify-content-center.align-items-center       
              .col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/13.png', alt='')
              .col-lg-9
                p.mb-4 Los resultados de la correlación pueden ser:
                SlyderF.circl-arrow(columnas="col-md-6 col-lg-4")
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-6.col-md-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj3-1.png' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.text-center.mb-3.py-1.px-4 Correlación lineal positiva
                    p.text-center Al aumentar el valor de una característica se aumenta la otra.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-6.col-md-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj3-2.png' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.text-center.mb-3.py-1.px-4 Correlación lineal negativa
                    p.text-center Al aumentar el valor de una característica se disminuye la otra.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-6.col-md-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj3-3.png' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.text-center.mb-3.py-1.px-4 Correlación no lineal
                    p.text-center Existe relación entre las características de forma curva.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-6.col-md-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj3-4.png' alt='')
                    h4.bg-color-primario.w-fit.m-auto.text-white.text-center.mb-3.py-1.px-4 Sin correlación
                    p.text-center No existe relación alguna entre las características.

    p.mb-4 El procedimiento para realizar el diagrama se presenta en la siguiente tabla:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 10.
          span Diagrama de correlación
        .tabla-a.tabla1.pc1.color-secundario
          table
            thead
              tr.bg-color-secundario.text-white
                th.w-25 #
                th Descripción
            tbody
              tr
                td.fw-bold 1
                td Recolectar datos del comportamiento de las dos características en la hoja de cálculo.
              tr
                td.fw-bold 2
                td Trazar eje X y eje Y, teniendo en cuenta la escala para poder representar los datos.
              tr
                td.fw-bold 3
                td Graficar parejas de datos.
              tr
                td.fw-bold 4
                td Análisis de datos.

    p Estos gráficos se pueden realizar en la aplicación Microsoft Excel.
    p.mb-4 En el siguiente gráfico podrá consultar un diagrama de correlación diligenciado para las variables tiempo de capacitación y cantidad de defectos.

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 7. 
          span Diagrama dispersión tiempo capacitación y cantidad de defectos
        .bg9.p-4
          figure
            img(src='@/assets/curso/temas/t2/fig6.svg', alt='Gráfico de dispersión con eje horizontal “Tiempo entrenamiento” (0-200) y eje vertical “Cantidad defectos” (0-60). Los puntos muestran una relación inversa: a mayor tiempo de entrenamiento, menor cantidad de defectos. Los valores más altos de defectos (48-50) aparecen entre 30 y 35 horas de entrenamiento, mientras que los más bajos (10-13) se observan entre 180 y 190 horas.')

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
                      h4.mb-1 Instructivo para desarrollar el diagrama de correlación
                      p.mb-0 Consulte el instructivo descargable para profundizar en la elaboración e interpretación del diagrama de correlación.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos_Instructivo-para-desarrollar-diagrama-de-correlacion.pdf')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Gráfico de control

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-md-2.col-4.mb-3.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/14.png', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p.mb-0 Esta herramienta representa de manera organizada en el tiempo, datos que corresponden a los resultados de una característica de calidad en un periodo de tiempo. Con el fin de visualizar el comportamiento de la característica a medir del proceso, entre los límites de control establecidos para realizar seguimiento. Pertenece a la fase analizar y controlar de la herramienta #[em Six Sigma].

    p.mb-4 El gráfico comprende el eje X que corresponde al tiempo, el eje Y representa la característica medible. Además, contiene 3 líneas horizontales las cuales corresponde a:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .bg2.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-4.col-4
              img.px-xl-1(src='@/assets/curso/temas/t2/tarj4-1.svg', alt='')
            .col-lg-9.col-md-8.col-8
              p.mb-0 #[b LC:] Línea Central, es el promedio del proceso.
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .bg2.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-4.col-4
              img.px-xl-1(src='@/assets/curso/temas/t2/tarj4-2.svg', alt='')
            .col-lg-9.col-md-8.col-8
              p.mb-0 #[b LCS:] Límite de Control Superior.
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .bg2.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-4.col-4
              img.px-xl-1(src='@/assets/curso/temas/t2/tarj4-3.svg', alt='')
            .col-lg-9.col-md-8.col-8
              p.mb-0 #[b LCI:] Límite de Control Inferior.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/15.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p El espacio entre los límites marca el intervalo dentro del cual se espera que desarrolle el proceso evaluado. Los datos resultantes de la medición del desempeño del proceso en determinados periodos de tiempo se marcan con puntos y se unen en el gráfico, para realizar el análisis.
        p Además de visualizar el comportamiento del proceso en el tiempo la herramienta permite determinar el estado de control de un proceso, determinar las muestras que caen dentro o fuera de los límites de control, determinar las trayectorias anormales en un proceso estandarizado y ajustar el proceso.

    p.mb-4 Se pueden desarrollar gráficos de control por variables o atributos, los cuales son:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-4
              .col-4.col-md-6.col-lg-3
                img(src='@/assets/curso/temas/t2/tarj5-1.svg', alt='')
            .text-white
              h4.text-center Gráficos de control por variables
              ul.lista-ul.fa-lista.list-ico.mb-0
                li.mb-0
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Gráfico de medias: X.
                li.mb-0
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Gráfico de rangos: R.
                li.mb-0
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Gráficos de desviación estándar: S.
                li.mb-0
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Gráfico de medianas.
                li.mb-0
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Gráfico individual X.
          .col-md.tarjeta.bg4.p-4
            .row.justify-content-center.mb-4
              .col-4.col-md-6.col-lg-3
                img(src='@/assets/curso/temas/t2/tarj5-1.svg', alt='')
            .text-white
              h4.text-center Gráfico de control por atributos
              ul.lista-ul.fa-lista.list-ico.mb-0
                li.mb-0
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0  Gráfico de la proporción de unidades defectuosas: p.
                li.mb-0
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Gráfico de número de unidades defectuosas: np.
                li.mb-0
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Gráficos de número de defectos: c.
                li.mb-0
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Gráficos de número de defectos por unidad: u.
    
    p Los gráficos utilizados comúnmente son de medias y de rango de manera simultánea o los gráficos de medias y desviación estándar.
    p.mb-4 El procedimiento para realizar gráficos de control se presenta en la siguiente tabla:

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 11. 
        span Gráficos de control
      .tabla-a.tabla1.pc1.color-acento-contenido
        table
          thead
            tr.bg-color-secundario.text-white
              th.w-25 #
              th Descripción
          tbody
            tr
              td.fw-bold 1
              td Seleccionar la característica a analizar.
            tr
              td.fw-bold 2
              td Seleccionar que el tipo de gráfico de control sea por variables o por atributos.
            tr
              td.fw-bold 3
              td Definir los subgrupos, las cantidades y la frecuencia del muestreo. Se recomienda entre 4 a 6 subgrupos.
            tr
              td.fw-bold 4
              td Recolectar y registrar la información en la hoja de verificación correspondiente o tomar los datos previamente registrados y organizar en la tabla. Se recomienda entre 20 a 25 datos.
            tr
              td.fw-bold 5
              td Calcular el promedio de cada una de las muestras de los subgrupos.
            tr
              td.fw-bold 6
              td Calcular el rango de cada subgrupo: R
                p.mb-0 R= XM (Dato mayor)- Xm (dato menor).
            tr
              td.fw-bold 7
              td Calcular el promedio de los promedios, corresponde a la línea central del gráfico.
            tr
              td.fw-bold 8
              td Calcular el promedio de rangos, corresponde a la línea central de rangos.
            tr
              td.fw-bold 9
              td 
                p Calcular límites de control según formulas, utilizando constante en tablas desarrolladas para este tipo de gráficos, según número de muestra.
                p Para gráficos de medias:
                ul.lista-ul--color.l-circle.fa-lista
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 LCI= X (promedio de medias) - A2(constante según tablas) R(promedio de rangos).
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 LCI= X (promedio de medias) + A2(constante según tablas) R(promedio de rangos).
                p Para grafico de rangos:
                ul.lista-ul--color.l-circle.fa-lista
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 LCI= D3(constante según tablas) R(promedio de rangos).
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 LCS= D4(constante según tablas) R(promedio de rangos).
                p Para gráfico de desviación estándar:
                ul.lista-ul--color.l-circle.fa-lista.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 LCI= B5(constante según tablas) R(promedio de desviaciones).
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 LCS= B6(constante según tablas) R(promedio de desviaciones).
            tr
              td.fw-bold 10
              td Construir el gráfico, escoger escala, eje X y eje Y.
            tr
              td.fw-bold 11
              td Ubicar línea central, línea inferior de control, línea superior de control.
            tr
              td.fw-bold 12
              td Marcar y unir puntos con líneas rectas que corresponde a promedio de datos.
            tr
              td.fw-bold 13
              td Analizar gráfico, si los puntos fuera de control se deben a causas asignables o especiales.
            tr
              td.fw-bold 14
              td Definir acciones si el proceso se encuentra fuera de control.

    p Estos gráficos se pueden realizar en la aplicación Microsoft Excel.
    p.mb-4 En las siguientes imágenes podrá detallar gráficos de control de medias, rangos y desviación estándar, diligenciados para la cantidad de defectos en las referencias.       

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 8.
          span Gráficos de medias 
        .bg9.p-4.px-lg-5
          figure
            img.px-lg-5(src='@/assets/curso/temas/t2/fig7.svg', alt='Gráfico de medias titulado “X” con eje horizontal “Número de pedido” y eje vertical “Fracción defectuosa” (0-3). La línea verde de componentes defectuosos fluctúa entre 1,0 y 2,8, con picos cercanos a 2,8 y mínimos alrededor de 1,0. Se muestran límites de control: LCI en color naranja alrededor de 1,0 y LCS en gris alrededor de 2,6. Algunos puntos superan el límite superior de control, mientras la mayoría permanece dentro del rango establecido.')

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 9.
          span Gráficos de desviación estándar
        .bg9.p-4.px-lg-5
          figure
            img.px-lg-5(src='@/assets/curso/temas/t2/fig8.svg', alt='Gráfico de desviación estándar titulado “S” con eje horizontal correspondiente al número de pedido y eje vertical de 0 a 1,4. La línea verde de componentes defectuosos muestra variaciones entre 0 y 1,2, con un mínimo en 0 y un máximo cercano a 1,2 hacia el final de la serie. Se presentan límites de control: LCI en color naranja ubicado en 0 y LCS en gris alrededor de 1,25. Todos los valores permanecen dentro de los límites de control.')

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 10.
          span Gráficos de rangos
        .bg9.p-4.px-lg-5
          figure
            img.px-lg-5(src='@/assets/curso/temas/t2/fig9.svg', alt='Gráfico de rangos tipo R con línea verde de “Comp datos”, línea naranja de LCI en 0 y línea gris de LCS cerca de 3. Los valores fluctúan entre 0 y 3, con un punto mínimo en 0 y un máximo de 3 hacia el final de la serie.')

    .row.bgcolor-1.align-items-center.p-3.p-md-4(data-aos="fade-down")
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
                      h4.mb-1 Instructivo para desarrollar el diagrama de control
                      p.mb-0 Consulte el instructivo descargable para profundizar en la elaboración e interpretación del diagrama de control.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos_Instructivo-para-desarrollar-diagrama-de-control.pdf')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3. Plan de acciones de calidad

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-4.col-md-6.col-9.mb-3.mb-lg-0(data-aos="fade-right")
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
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/17.png', alt='')

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
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
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
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
                      .col-6.col-md-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-1.png' alt='')
                    p.text-center Establecer los tiempos para aplicarlas, lo cual debe ser en el menor tiempo posible.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-6.col-md-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-2.png' alt='')
                    p.text-center Minimizar las consecuencias de los problemas o defectos, por ejemplo, realizar descuento al cliente por los defectos de la prenda.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-6.col-md-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-3.png' alt='')
                    p.text-center Evaluar si es realmente necesario la aplicación de la acción.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-6.col-md-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-4.png' alt='')
                    p.text-center Diseñar acciones en equipo para obtener una solución acertada.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-6.col-md-8.col-lg-7
                        img(src='@/assets/curso/temas/t2/tarj6-5.png' alt='')
                    p.text-center Implementar plan de acción especifico de calidad, es decir realizar los cambios.
                  .tarjeta.bg1.p-4
                    .row.justify-content-center.mb-3
                      .col-6.col-md-8.col-lg-7
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
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/21.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Propuesta de acciones de mejora

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.d-none.d-lg-block(data-aos="fade-right")
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
