import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import antdvFix from 'vite-plugin-antdv-fix'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import path from 'path'
import eslint from 'vite-plugin-eslint'
import htmlMinify from './vite-plugin-html'

function resolve(dir) {
  return path.join(__dirname, dir)
}
const config = defineConfig({
  server: {
    host: '0.0.0.0',
    proxy: {}
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import "${resolve('src/style/_variables.less')}";`
        }
      }
    }
  },
  resolve: {
    extensions: ['.vue', '.js'],
    preserveSymlinks: true,
    alias: {
      '@': resolve('src')
    }
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    target: 'chrome61',
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash:8].js',
        chunkFileNames: 'js/[name]-[hash:8].js',
        assetFileNames(chunkInfo) {
          if (chunkInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash:8][extname]'
          }
          return 'assets/[hash:8][extname]'
        },
        manualChunks(id) {
          if (/node_modules\/vue-echarts/.test(id)) {
            return 'chunk-echarts'
          } else if (/node_modules/.test(id)) {
            return 'chunk-vendors'
          }
        }
      }
    }
  },
  plugins: [vue(), antdvFix(), vueJsx(), eslint(), htmlMinify()]
})
export default config
