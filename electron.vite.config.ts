import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          splash: resolve(__dirname, 'src/renderer/splash.html'),
          index: resolve(__dirname, 'src/renderer/index.html'),
          splashpng: resolve(__dirname, 'src/renderer/splash.png')
        }
      }
    }
  }
})
