import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Establece el directorio de salida para los archivos generados por la construcción
    outDir: 'build/client',  // Aquí defines el directorio donde se generarán los archivos finales
    rollupOptions: {
      input: {
        main: 'index.html',  // Archivos de entrada (por lo general, el archivo HTML principal)
      },
    },
  },
});
