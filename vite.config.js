import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    base: '/madebymel/',  // replace with your actual repo name
    outDir: '.',
    emptyOutDir: false  // important - stops it wiping your source files
  }
});

