import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  
  base: '/',

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/global.scss';`
      }
    }
  },

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
