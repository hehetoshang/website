import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  publicDir: 'public',
  server: {
    proxy: {
      '/docs': 'http://localhost:5174',
    },
  },
})
