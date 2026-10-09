import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	base: '',
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		lib: {
			entry: {
				index: path.resolve(__dirname, 'src/index.js'),
				'theme-switcher': path.resolve(__dirname, 'src/theme-switcher.js')
			},
			formats: ['es']
		},
		rollupOptions: {
			output: {
				entryFileNames: '[name].js'
			}
		}
	}
});
