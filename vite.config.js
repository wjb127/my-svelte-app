import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		// CSS 처리 설정
		preprocessorOptions: {
			scss: {
				additionalData: ''
			}
		}
	}
}); 