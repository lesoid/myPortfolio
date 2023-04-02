// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
   colorMode: {
     preference: 'sepia', // default value of $colorMode.preference
  //   fallback: 'light', // fallback value if not system preference found
  //   hid: 'nuxt-color-mode-script',
  //   globalName: '__NUXT_COLOR_MODE__',
  //   componentName: 'ColorScheme',
  //   classPrefix: '',
  //   classSuffix: '-mode',
  //   storageKey: 'nuxt-color-mode'
  },
  css: ['@/assets/main.css', '@/assets/styles/portfolio.scss'],
  app: {
    head: {
      script: [ { } ],
      link: [
        {
          rel: 'stylesheet',
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        },
		 { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  }
})
// export default {
//   buildModules: ['@nuxtjs/color-mode'],
//   css: ['@/assets/main.css']
// }