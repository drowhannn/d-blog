// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['diff', 'ts', 'js', 'css', 'java', 'groovy', 'sql', 'xml', 'json'],
    },
  },
  nitro:{
    prerender:{
      routes : ['/sitemap.xml']
    }
  }
})
