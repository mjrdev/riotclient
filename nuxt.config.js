export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'riotclient',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  ssr: false,

  router: {
    base: '/riotclient-recreated/'
  },

  target: 'static',

  generate: {
    dir: 'dist'
  },
}
