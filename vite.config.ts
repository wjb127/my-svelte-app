import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],

  css: {
    preprocessorOptions: {
      scss: {
        // 글로벌 SCSS 파일을 포함할 경우
        additionalData: `@import './src/styles/global.scss';`
      }
    }
  },

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
