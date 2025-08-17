import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins:  [
  react({
    jsxImportSource: '@emotion/react', // Better Emotion support
    babel: {
      plugins: ['@emotion/babel-plugin'] // Optimized MUI styles
    }
  })
],
  base: '/',
  build: {
  rollupOptions: {
    external: ['react', 'react-dom'], // Only externalize these if needed
    output: {
      globals: {
        react: 'React', // Only needed for CDN loading
        'react-dom': 'ReactDOM'
      }
    }
  }
}
});