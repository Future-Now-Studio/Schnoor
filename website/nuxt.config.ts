export default defineNuxtConfig({
  compatibilityDate: '2025-03-13',

  experimental: {
    viewTransition: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'de' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: 'https://cloud.ccm19.de/app.js?apiKey=06cd01fef0d5405811628f562181a5c3e2dd42e02809b05f&domain=69c27873bfcbfb93bb074e12',
          referrerpolicy: 'origin',
          async: true,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
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
      'Rechtsanwalt Philipp Schnoor aus Hamburg. Spezialisiert auf Mietrecht und Strafrecht – mit umfangreicher Erfahrung im Verkehrsrecht.',
    defaultLocale: 'de',
  },

  ogImage: { enabled: false },

  image: {
    quality: 80,
    format: ['webp', 'jpg'],
  },

  nitro: {
    preset: 'netlify',
    externals: {
      inline: ['resend'],
    },
    prerender: {
      routes: ['/', '/mietrecht', '/strafrecht', '/verkehrsrecht', '/kontakt', '/datenschutz', '/impressum'],
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/mietrecht': { prerender: true },
    '/strafrecht': { prerender: true },
    '/verkehrsrecht': { prerender: true },
    '/kontakt': { prerender: true },
    '/datenschutz': { prerender: true },
    '/impressum': { prerender: true },
  },

  runtimeConfig: {
    googlePlaceId: '',
    googleApiKey: '',
    resendApiKey: '',
    contactEmail: '',
  },

  build: {
    transpile: ['@phosphor-icons/vue'],
  },

  vite: {
    resolve: {
      alias: {
        'unenv/dist/runtime/runtime/mock/empty.mjs': 'unenv/dist/runtime/mock/empty.mjs',
      },
    },
  },
})
