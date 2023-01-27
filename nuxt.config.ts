// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  vite: {
    plugins: [eslintPlugin()],
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' },
        { name: 'og:title', content: '오지 메타테그' },
        { name: 'og:description', content: '오지 디스크립션' },
      ],
    },
  },
});
