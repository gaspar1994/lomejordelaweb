<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Acerca de"
      subtitle="Conoce mas de nosotros"
      image="/uploads/home-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Lo mejor de la Web</h3>
          <p>
            
              ¡Bienvenidos a nuestra página de videos deportivos! Aquí encontrarás una amplia variedad de contenido deportivo, desde partidos en vivo y resúmenes de juegos hasta entrevistas con jugadores y entrenadores. También tenemos tutoriales y consejos para mejorar tu rendimiento en distintos deportes.
<br><br>
Nuestro objetivo es brindar a los aficionados al deporte la mejor experiencia posible, y para ello contamos con un equipo de profesionales que se encarga de seleccionar y editar el contenido más interesante y de calidad. Además, nuestra plataforma está diseñada para ser fácil de usar y accesible desde cualquier dispositivo.
<br><br>
Si eres un apasionado del deporte, no puedes dejar de visitar nuestra página. ¡Te aseguramos que encontrarás mucho material interesante y divertido!
<br><br>
<div align="center"><img src="https://image.jimcdn.com/app/cms/image/transf/dimension=715x10000:format=png/path/s69e2c96da401cd47/image/i636ef2db36ed52f2/version/1572744882/image.png" border="1" alt="Este es el ejemplo de un texto alternativo" width="400" height="300">          
</div>          </p>
          
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Ultimos Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
