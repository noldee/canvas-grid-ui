import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/index.ts', 'src/components/**/*.tsx'],
      exclude: ['src/main.tsx', 'src/Demo.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CanvasGridUI',
      formats: ['es', 'umd'],
      fileName: (format) => `canvas-grid-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'framer-motion'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'framer-motion': 'FramerMotion',
        },
        banner: '"use client";',
      },
    },
  },
});