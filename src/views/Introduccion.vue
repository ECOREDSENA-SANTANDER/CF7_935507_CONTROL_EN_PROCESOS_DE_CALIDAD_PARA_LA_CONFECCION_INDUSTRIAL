<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center
      .col-lg-7
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-5
        p Una vez se conoce cuáles son los defectos es importante clasificar los niveles para las actividades de inspección y determinar las diferentes acciones a definir para mejorar o mantener la calidad de la producción de las prendas. Los resultados de las inspecciones se deben presentar en informes donde se logren visualizar y calcular indicadores que permitan medir los resultados.
        p Las siete herramientas de calidad son las técnicas básicas usadas en el control de calidad, su propósito es analizar, medir y controlar, conforme a las fases de #[em Six Sigma]; permiten conocer las causas de los defectos y así establecer acciones correctivas y de mejora de la calidad. Estas herramientas mediante el uso de tablas y diagramas permiten observar de manera concreta los problemas.

    //.row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
