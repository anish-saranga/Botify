import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";


export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  define: {
    'process.env': {},
  },
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
        manualChunks: undefined,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
