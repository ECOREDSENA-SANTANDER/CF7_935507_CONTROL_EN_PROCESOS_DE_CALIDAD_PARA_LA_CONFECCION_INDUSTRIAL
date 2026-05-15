<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p Permite comprender la clasificación de defectos, los indicadores y los informes de calidad, así como el uso de tablas militares y las principales herramientas de control de calidad. También aborda la aplicación de las siete herramientas básicas de calidad, entre ellas el histograma, el diagrama de Pareto, causa-efecto, estratificación, correlación y gráficos de control. Además, desarrolla habilidades para calcular indicadores, elaborar planes de muestreo por aceptación, analizar resultados, diseñar hojas de verificación y formular planes, acciones correctivas y propuestas de mejora orientadas al fortalecimiento de la calidad.  

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis “Clasificación de defectos e informes de calidad”, dividido en dos ramas principales: clasificación de defectos e informes de calidad. Incluye niveles y ubicación del defecto, uso de tablas militares, indicadores y técnicas de calidad, herramientas de control, planes de acción y propuestas de mejora.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
