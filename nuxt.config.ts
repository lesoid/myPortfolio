// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  css: ['@/assets/main.css', '@/assets/styles/portfolio.scss'],
  app: {
    head: {
      script: [ { } ],
      link: [
        {
          rel: 'stylesheet',
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        },
      ]
    }
  }
})
// export default {
//   buildModules: ['@nuxtjs/color-mode'],
//   css: ['@/assets/main.css']
// }