import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ecpcaps/',  // Replace with your repository name
  plugins: [react()],
  publicDir: 'public',
  build: {
    assetsDir: 'assets'
  }
})