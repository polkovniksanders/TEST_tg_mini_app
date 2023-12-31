import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/https://github.com/polkovniksanders/TEST_tg_mini_app/",
  base: "/TEST_tg_mini_app/",
  plugins: [react(), basicSsl()],
  build: {
    outDir: './docs'
  },
 // base: '/vite-boilerplate/'
});
