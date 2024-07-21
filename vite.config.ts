import { fileURLToPath, URL } from 'node:url'
<<<<<<< HEAD

=======
import VueSetupExtend from  'vite-plugin-vue-setup-extend'
>>>>>>> 838ec6ce43753faff6d469438ff8b37fdf62df3d
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
<<<<<<< HEAD
=======
    VueSetupExtend()
>>>>>>> 838ec6ce43753faff6d469438ff8b37fdf62df3d
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
