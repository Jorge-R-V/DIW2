import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        calculadora: resolve(__dirname, 'calculadora.html'),
        camara: resolve(__dirname, 'camara.html'),
        comoFunciona: resolve(__dirname, 'como-funciona.html'),
      },
    },
  },
})
