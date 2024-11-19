import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  // base: '/Botify/',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.jsx'), // Entry point for the web component
      name: 'Botify', // Global name for UMD build
      formats: ['es', 'umd'], // Support ES module and UMD formats
      fileName: (format) => `botimoz.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
