import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '.',
    emptyOutDir: false  // important - stops it wiping your source files
  }
});