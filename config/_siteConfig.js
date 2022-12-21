/**
 * CMS Configuration
 * Alter 'netlify' in the import statment below to one of the following:
 * netlify
 */
import theCMS from '../cms/netlify/cms'

/**
 * General Site configurations
 */
export default {
  siteName: 'Lo Mejor de la Web',
  tagline: 'Los mejores videos de todo internet',
  featureImage: 'https://media.istockphoto.com/id/1318700745/es/foto/pared-negra-como-fondo-para-el-dise%C3%B1o-y-la-publicidad.jpg?s=612x612&w=0&k=20&c=jj5GZ_FZF8Xjr_HYVNXf0xOAW6u3JRqVJ5V-Ws62HgA=',
  logo: 'logo-component', // 'logo-component', // or '/logo.svg' for regular image
  googleAnalytics: {
    on: true,
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  mainMenu: [
    {
      name: 'Acerca de',
      link: '/about'
    },
    {
      name: 'Contacto',
      link: '/contact'
    },
    {
      name: 'Categorias',
      link: '/categories'
    },
    {
      name: 'Notas',
      link: 'https://github.com/danielkellyio/awake-template',
      target: '_blank'
    },
    
  ],
  hero: {
    theme: 'dark' // options: mist, light, dark
  },

  // Main Layout/Style
  layout: {
    width: 'contained', // Options: contained, full
    theme: 'one-column' // Options: one-column, sidebar-right, sidebar-left
  },

  // Card Layout
  cards: {
    imageDimensions: '2x1', // Options: 1x1, 5x4, 4x3, 3x2, 5x3, 16x9, 2x1, 3x1, 4x5, 3x4, 2x3, 3x5, 9x16
    theme: 'boxes' // Options: boxes, grid, image-grid
  },

  // Disqus
  disqus: {
    on: true,
    loadingStrategy: 'button', // Options: onload, lazy, button
    siteShortName: 'blog-danielkelly-io' // 'blog-danielkelly-io'
  },

  // Newsletter Subscribe
  newsletter: {
    on: true,
    heading: 'Suscribete a nuestro Newsletter',
    btnText: 'Suscribete',
    // Can be the form action on a mail chimp form, a hubspot form,
    // or any other url you want to post the form data to
    mailchimp: {
      on: true,
      formAction:
        'https://danielkelly.us3.list-manage.com/subscribe/post?u=d3c2e762b66a2353d0bc29bf3&amp;id=2abeaa06e0'
    },
    custom: {
      on: false,
      formAction: ''
    }
  },

  // Categories
  categories: {
    on: true,
    perPage: 6,
    imageDimensions: null, // See card.imageDimensions (can be unique for categories if set here)
    theme: null // See card.theme (can be unique for categories if set here)
  },

  // Posts
  posts: {
    on: true,
    theme: null, // See card.theme (can be unique for posts if set here)
    imageDimensions: null, // See card.imageDimensions (can be unique for posts if set here)
    displayAuthor: true,
    date: {
      display: true
    },
    perRow: 3,
    perPage: 6
  }
}

export const CMS = theCMS
