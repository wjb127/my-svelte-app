import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x'
		}),
		alias: {
			$lib: './src/lib'
		}
	},
	preprocess: vitePreprocess(),
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: ''
				}
			}
		}
	}
};

export default config;
