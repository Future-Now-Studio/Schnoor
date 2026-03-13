export default defineNuxtConfig({
  compatibilityDate: '2025-03-13',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'de' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/scss/main.scss'],

  modules: ['@nuxtjs/seo', '@nuxt/image'],

  site: {
    url: 'https://schnoor-rechtsanwalt.de',
    name: 'Philipp Schnoor - Rechtsanwalt & Strafverteidiger Hamburg',
    description:
      'Rechtsanwalt Philipp Schnoor in Hamburg. Spezialisiert auf Mietrecht, Strafrecht und Verkehrsrecht. Kompetente Rechtsberatung mit persönlichem Engagement.',
    defaultLocale: 'de',
  },

  ogImage: { enabled: false },

  image: {
    quality: 80,
    format: ['webp', 'jpg'],
  },

  nitro: {
    prerender: {
      routes: ['/', '/mietrecht', '/strafrecht', '/verkehrsrecht', '/kontakt'],
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/mietrecht': { prerender: true },
    '/strafrecht': { prerender: true },
    '/verkehrsrecht': { prerender: true },
    '/kontakt': { prerender: true },
  },
})
