import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$components: path.resolve('./src/lib/components'),
			$styles: path.resolve('./src/lib/styles'),
			$utils: path.resolve('./src/lib/utils')
		}
	},
	css: {
		preprocessorOptions: {
			includePaths: [path.resolve('./src')]
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}) satisfies UserConfig;
