import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import requireTransform from 'vite-plugin-require-transform';
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    manualChunksPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
