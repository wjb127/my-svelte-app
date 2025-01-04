import adapter from '@sveltejs/adapter-vercel';
import { preprocessMeltUI } from '@melt-ui/pp';
import sequence from 'svelte-sequential-preprocessor';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib'
		}
	},
	preprocess: sequence([preprocess(), preprocessMeltUI()])
};

export default config;
