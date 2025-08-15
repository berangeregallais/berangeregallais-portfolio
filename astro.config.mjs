import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://berangeregallais.com',
  base: '/',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },

  build: {
    format: 'directory'
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  }
});