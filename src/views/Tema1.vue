<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Clasificación de defectos
        
    .bloque-texto-g.bg1.brt-60.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Los errores presentados en las operaciones y en los procesos realizados con cada prenda, se deben catalogar, con el fin de realizar los análisis necesarios y así corregir de forma rápida, creando estrategias que generen cambios concretos al ir directamente a la operación y al proceso a ajustar. La empresa puede generar el listado de defectos en donde se diferencien los niveles de estos con el fin de aceptar o rechazar las prendas que comprenden un lote.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Nivel del defecto

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Una vez se desarrolla una referencia, se determinan sus especificaciones. En el proceso de producción estas pueden variar y se deben establecer tolerancias con las cuales se permita un margen y se admitan dichas variaciones.
        .bg1.p-4
          p.mb-0 Es así como se hacen necesarios los estándares de calidad para poder evaluar los niveles de calidad de una característica cualitativa o cuantitativa a las cuales corresponden tributos o variables respectivamente.

    p.mb-4 En relación con lo anterior, para evaluar la calidad de las prendas se deben establecer niveles de defectos para poder medir el Nivel de Calidad Límite (NCL), teniendo claro todos los defectos que se pueden presentar en una prenda y el nivel del defecto máximo para así decidir si se acepta o se rechaza la muestra o el lote.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-primario" data-aos="fade")
      .row.justify-content-center(titulo="Defecto menor")
        .col-lg-6.col-11.mb-4.mb-md-0
          p Es la discrepancia que existe del estándar, pero a su vez no afecta la capacidad de uso de la prenda, se puede incurrir en costos pequeños y adicionar operaciones para corregir el defecto, estos causan insatisfacción en el cliente. Algunos de los errores más comunes son las costuras sin pulir, es decir hebras de hilos sin cortar; también los colores de los hilos tienen un tono un poco diferente al especificado. Si el defecto no se corrige de la mejor forma se convierte en defecto mayor.
        .col-lg-5.col-md-9.col-11
          img(src='@/assets/curso/temas/t1/acord1-1.png', alt='')
      .row.justify-content-center(titulo="Defecto mayor")
        .col-lg-6.col-11.mb-4.mb-md-0
          p Los defectos mayores causan que la prenda no funcione de acuerdo con su diseño, provocan que los productos no puedan ser vendidos y se incurren en costos para su reproceso. Algunos ejemplos comunes son agujeros, discrepancias en medidas que causen asimetrías como una manga más larga que otra. En el caso que no se pueda realizar la óptima corrección el defecto se convertirá en crítico.
        .col-lg-5.col-md-9.col-11
          img(src='@/assets/curso/temas/t1/acord1-2.png', alt='')
      .row.justify-content-center(titulo="Defecto crítico")
        .col-lg-6.col-11.mb-4.mb-md-0
          p Los defectos críticos, son considerados inseguros y/o peligrosos al usarse y pueda lastimar al consumidor, además reducen la confianza en el uso de la prenda y se incurre en un alto costo en reprocesos o es muy difícil poder recuperar la funcionalidad de esta. Un ejemplo que se puede presentar es un alfiler en la prenda.
        .col-lg-5.col-md-9.col-11
          img(src='@/assets/curso/temas/t1/acord1-3.png', alt='')

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
                      h4.mb-1 Niveles de defectos.
                      p.mb-0 Puede observar la clasificación de defectos en el material complementario. 
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos_Niveles-de-defectos.pdf')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Ubicación del defecto

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-md-2.col-4.mb-3.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/3.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p.mb-0 Para establecer la causa del defecto, es primordial ubicar el lugar donde se presentó el defecto, de allí la importancia de la trazabilidad en el proceso de confección de las prendas.

    p.mb-4 Teniendo en cuenta las áreas y los puntos de control en la planta de confección se clasifica la ubicación del defecto para así mismo establecer responsabilidades y conforme a lo mencionado definir las acciones de mejora.

    TabsC.color-acento-botones(data-aos="fade")
      .row.justify-content-center.py-4.py-md-5(titulo="Patronaje")        
        .col-lg-4.col-md-7.col-9.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t1/tabs1-1.png', alt='')
        .col-lg-7.col-11
          p.mb-4 Interpretar de forma incorrecta el diseño y desarrollar con las transformaciones, son deficiencias en las piezas, que causan defectos, en su mayoría pueden ser denominados defectos mayores en las prendas, algunos se pueden observar en la siguiente tabla:
          .mb-0
            .titulo-sexto.color-secundario.mb-3
              h5 Tabla 1. 
              span Causas de defectos en patronaje
            .tabla-a.color-acento-contenido
              table
                thead
                  tr.bg-color-secundario
                    th.text-white(colspan="2") Causas de defectos en patronaje
                  tr.bg2
                    th Causas de defectos
                    th Descripción defectos
                tbody
                  tr
                    td Escalado de piezas.
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Pieza no corresponde a las medidas de la talla.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Pieza no concuerda en longitud entre ellas al unir.
                  tr
                    td Simetría de piezas.
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Longitud de piezas diferentes.
                  tr
                    td Márgenes de costuras.
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Medidas de la prenda no corresponden a la talla.
                  tr
                    td Cantidad de piezas.
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Pendientes de piezas para ensamblar.
                  tr
                    td Identificación de piezas.
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Hilos de tela no corresponden.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Ensamble de piezas no corresponde.
      .row.justify-content-center.py-4.py-md-5(titulo="Corte")        
        .col-lg-11.col-11
          p.mb-4 En cada actividad del proceso de corte se pueden presentar defectos, algunas veces la responsabilidad de SU presencia puede compartirse con el proceso anterior de patronaje, las acciones pueden ser correctivas en el área de confección. Algunos defectos se pueden observar en la siguiente tabla:
          .mb-0
            .titulo-sexto.color-secundario.mb-3
              h5 Tabla 2.
              span Defectos en área de trazo y corte
            .tabla-a.color-acento-contenido
              table
                thead
                  tr.bg-color-secundario
                    th.text-white(colspan="2") Defectos en área de trazo y corte
                  tr.bg2
                    th Actividades de corte
                    th Defectos
                tbody
                  tr
                    td Trazo
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Cantidad de piezas no corresponde.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Hilos de tela diferentes al especificado.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 El ancho de trazo no corresponde al ancho útil de la tela.
                  tr
                    td Extendido
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 No se cumplió tiempo de reposo y presentó encogimiento en el textil.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Arrugas y quiebres.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 No se alinean capas, las piezas quedan incompletas.
                  tr
                    td Corte
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 No se corta por el trazo, por tanto, las piezas quedan más por dentro del margen trazado lo que ocasiona que las piezas serán más pequeñas y se alteran las medidas o el diseño.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Si el colchón no se presionó con pinzas o pesas, se corre y las piezas no corresponden en forma o medidas.
                  tr
                    td Etiquetado
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 La identificación no corresponde, se pueden saltar piezas y por tanto consecutivos, en el caso de diferentes rollos, las prendas serán de diferente tono entre sus piezas.
                  tr
                    td Paqueteo
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Mal amarre se pueden resbalar piezas pequeñas que se pierden y pueden faltar en el momento de confección.
      .row.justify-content-center.py-4.py-md-5(titulo="Confección")        
        .col-lg-4.col-md-7.col-9.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t1/tabs1-2.png', alt='')
        .col-lg-7.col-11
          p La gran cantidad de mano de obra en este proceso aumenta la variabilidad de la prenda y se requieren altos controles para evitar la presencia de defectos, con el fin de retener las piezas, prendas en proceso o prendas terminadas. Se deben tener en cuenta las áreas de visibilidad de la prenda para clasificar de esta forma los tipos de defectos, por consiguiente, se tiene área visible, menos visible y no visible, en donde a mayor visibilidad se debe considerar el rechazo de la prenda.
          p.mb-4 Algunos defectos que se presentan en confección son: saltos de costura, costuras recogidas, costuras sueltas, costuras torcidas, costuras con remates nudosos.
          a.anexo(:href="obtenerLink('/downloads/Anexos_Niveles-de-defectos.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p.mb-0 #[b Anexo.] Puede observar los niveles de visibilidad para la clasificación de defectos en el material complementario. Niveles de defectos.
      .row.justify-content-center.py-4.py-md-5(titulo="Materia prima e insumos")        
        .col-lg-4.col-md-7.col-9.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t1/tabs1-3.png', alt='')
        .col-lg-7.col-11
          p.mb-4 En la recepción de materia prima e insumos se pueden detectar los siguientes defectos como se muestra en la tabla:
          .mb-0
            .titulo-sexto.color-secundario.mb-3
              h5 Tabla 3.
              span Causas de defectos en patronaje
            .tabla-a.color-acento-contenido
              table
                thead
                  tr.bg-color-secundario
                    th.text-white(colspan="2") Defectos en materia prima e insumos
                  tr.bg2
                    th Materia prima o insumos
                    th Defectos
                tbody
                  tr
                    td Materia prima
                    td 
                      .row.justify-content-center
                        .col-lg-5
                          ul.lista-ul--color.l-circle.fa-lista.mb-0
                            li.mb-0
                              i.fas.fa-circle
                              span.mb-0 Suciedades.
                            li.mb-0
                              i.fas.fa-circle
                              span.mb-0 Orificios.
                            li.mb-0
                              i.fas.fa-circle
                              span.mb-0 Motas.
                        .col-lg-7
                          ul.lista-ul--color.l-circle.fa-lista.mb-0
                            li.mb-0
                              i.fas.fa-circle
                              span.mb-0 Neps.
                            li.mb-0
                              i.fas.fa-circle
                              span.mb-0 Fibras de otro color.
                            li.mb-0
                              i.fas.fa-circle
                              span.mb-0 Tela mareada.
                  tr
                    td Insumos
                    td 
                      ul.lista-ul--color.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Suciedades.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Orificios.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Medidas no corresponden.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Colores no corresponden para que coordinen con el textil o especificaciones.


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Uso de tablas militares

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-8.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Durante la segunda guerra mundial, Dodge y Roaming desarrollaron la técnica de muestreo de aceptación, aplicada a las balas. El plan estándar de muestreo que contiene el procedimiento y las tablas se nombra MIL STD 105D, aunque en el año de 1995 se rediseñó y cambio su nombre a ANSI/ASOCZ1.4, pero se sigue refiriendo a lo mismo. La norma ISO 2859 estandariza los procedimientos de muestreo por aceptación, en las inspecciones por atributos, donde se aplican las tablas militares y por lo tanto los NCA o AQL.
        .bg3.p-4
          p.mb-0 Para realizar un plan de muestreo por atributos, simple, doble o múltiple es importante tener en cuenta la cantidad de cada lote, y la clasificación de los defectos, sean menores, mayores y críticos, para establecer el nivel de aceptación de la prenda. Además, se debe definir el nivel de inspección, se utiliza el general que corresponde al normal del tipo II. Los niveles especiales de inspección se utilizan en pruebas de laboratorio destructivas o en productos defectuosos.

    p.mb-4 A continuación se observa la tabla militar estándar.

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 4.
        span Tabla militar
      .tabla-a.color-acento-contenido.tabl1
        table
          thead
            tr.bg-color-secundario.text-white
              th Tamaño de lote
              th(colspan="3") Nivel general
              th(colspan="4") Nivel especial
            tr.bg2
              th Desde - hasta
              th I
              th II
              th III
              th S1
              th S2
              th S3
              th S4
          tbody
            tr
              td 2-8
              td A
              td A
              td B
              td A
              td A
              td A
              td A
            tr
              td 9-15
              td A
              td B
              td C
              td A
              td A
              td A
              td A
            tr
              td 16-25
              td B
              td C
              td D
              td A
              td A
              td B
              td B
            tr
              td 26-50
              td C
              td D
              td E
              td A
              td B
              td B
              td C
            tr
              td 51-90
              td C
              td E
              td F
              td B
              td B
              td C
              td C
            tr
              td 91-150
              td D
              td F
              td G
              td B
              td B
              td C
              td D
            tr
              td 151-280
              td E
              td G
              td H
              td B
              td C
              td D
              td E
            tr
              td 281-500
              td F
              td H
              td J
              td B
              td C
              td D
              td E           
            tr
              td 501-1200
              td G
              td J
              td K
              td C
              td C
              td E
              td F
            tr
              td 1201-3200
              td H
              td K
              td L
              td C
              td D
              td E
              td G
            tr
              td 3201-10.000
              td J
              td L
              td M
              td C
              td D
              td E
              td G
            tr
              td 10.001-35.000
              td K
              td M
              td N
              td C
              td D
              td E
              td H
            tr
              td 35.001-150.000
              td L
              td N
              td P
              td D
              td E
              td G
              td J
            tr
              td 150.001-500.000
              td M
              td P
              td Q
              td D
              td E
              td G
              td J
            tr
              td 500.001 y más
              td N
              td Q
              td R
              td D
              td E
              td H
              td K

    p.mb-4 En la tabla siguiente se observa la distribución para los niveles de aceptación AQL.

    .mb-4(data-aos="fade-down")
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 5.
        span Niveles de aceptación AQL
      figure
        img(src='@/assets/curso/temas/t1/tabla5.svg', alt='')

    p.mb-4 A continuación se mencionan los pasos necesarios para el uso de tablas militares para realizar un plan estándar de muestreo, de acuerdo con lo indicado en la norma ISO 2859.

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Paso 1") 
            .col-12
              p Con la tabla # 1 seleccionar la fila según el tamaño del lote.
          .row(numero="2" titulo="Paso 2") 
            .col-12
              p Según la fila elegida, se asigna el nivel en la columna de inspección general conforme a:
              ul.lista-ul--color.fa-lista.l-circle.color-secundario.mb-0
                li.mb-1
                  i.fas.fa-circle
                  span.mb-0 #[b I:] Reducida o baja, es permisiva, tamaño de muestra pequeña.
                li.mb-1
                  i.fas.fa-circle
                  span.mb-0 #[b II:] Normal o general, tamaño de muestras es mayor.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 #[b III:] Rigorosa, estricta o severa, tamaño de muestra es más grande.
          .row(numero="3" titulo="Paso 3") 
           .col-12
              p Teniendo la letra resultado del cruce de tamaño de lote y nivel de inspección, que corresponde a un código, se procede en tabla #2 a seleccionar columna de tamaño de muestra según columna de código.
          .row(numero="4" titulo="Paso 4") 
            .col-12
              p Teniendo los niveles de aceptación de los defectos, en donde conviene establecer:
              ul.lista-ul--color.fa-lista.l-circle.color-secundario.mb-0
                li.mb-1
                  i.fas.fa-circle
                  span.mb-0 #[b Defectos menores] NCA entre 2,5% a 4%, depende del valor del producto, es decir NCA es alto.
                li.mb-1
                  i.fas.fa-circle
                  span.mb-0 #[b Defectos mayores] NCA entre 1,5% a 2,5%, término medio de NCA.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 #[b Defectos críticos] NCA entre 0% a 0,65%, bajo NCA.
          .row(numero="5" titulo="Paso 5") 
            .col-12
              p Una vez ubicado en columna el nivel de aceptación se cruza con el tamaño de la muestra, donde se concluye el número de las unidades con las que el lote es aceptado o rechazado.
          .row(numero="6" titulo="Paso 6") 
            .col-12
              p Cuando se selecciona una inspección reducida y un lote es rechazado se procede a cambiar el nivel de inspección a normal.
          .row(numero="7" titulo="Paso 7") 
            .col-12
              p En el caso de estar realizando nivel de inspección normal y dos lotes de cinco no son aceptados, por ejemplo, se debe cambiar el nivel de inspección a rigurosa, pero en caso contrario si las inspecciones de cinco lotes seguidos son aceptadas se puede seguir con el mismo nivel de inspección.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/5.png', alt='')

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
                      h4.mb-1 Uso de tablas militares MIL STD 105D.
                      p.mb-0 Para conocer algunos ejemplos del uso de las tablas militares revise en el material complementario. 
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos_Uso-de-tablas-militares-MIL-STD-105D.pdf')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema1',
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
