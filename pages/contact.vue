<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Contactanos"
      subtitle="La mejor forma de ponerte en contacto con nosotros"
      image="/uploads/home-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Hola
              </p>
              <p class="subtitle">
                ¿Como podemos ayudarte?
              </p>
              <figure class="image is-1by1 ">
                <opti-image
                  :src="require('~/assets/uploads/contact-person.jpg').src"
                  :srcset="
                    require('~/assets/uploads/contact-person.jpg').srcSet
                  "
                />
              </figure>
              <br />
              <div class="content">
                
                <p>
                  Si tienes alguna pregunta, sugerencia o simplemente quieres decir hola, no dudes en ponerte en contacto con nosotros a través de nuestro formulario de contacto o a través de nuestras redes sociales. Estaremos encantados de ayudarte en todo lo que necesites.
<br><br>
También puedes suscribirte a nuestro boletín de noticias para recibir actualizaciones sobre nuestras últimas noticias y eventos. ¡Esperamos escuchar de ti pronto!
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <contact-form />
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Ultimos Posts
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  components: { ContactForm }
}
</script>
