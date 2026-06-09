import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: ['safari >= 14', 'ios >= 14'],
      modernPolyfills: true,
    }),
  ],
  build: {
    target: ['es2020', 'safari14'],
  },
})
