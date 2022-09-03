import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8282,
    watch: { usePolling: true }
  },

  plugins: [vue()],

  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./', import.meta.url)) },
      { find: '~', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: 'assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      { find: 'public', replacement: fileURLToPath(new URL('./public', import.meta.url)) }
    ]
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/node_modules/bootstrap/scss/functions";
          @import "@/node_modules/bootstrap/scss/variables";
          @import "@/node_modules/bootstrap/scss/mixins";
          @import "@/node_modules/bootstrap/scss/utilities";
        `
      },
    },
  },


})
