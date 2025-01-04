import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  
  base: '/',

  css: {
    preprocessorOptions: {
      scss: {
        // SCSS 파일 전역 추가
        additionalData: `@import './src/lib/styles/global.scss';`
      }
    },
    // CSS 모듈 클래스 네이밍 정의 (Hydration 문제 방지)
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },

  build: {
    // CSS 파일 및 JavaScript 번들링 확인을 위해 소스맵 활성화
    sourcemap: true
  },

  server: {
    // 개발 서버에서 정적 파일 제공 설정
    fs: {
      allow: ['src']
    }
  }
});
