import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
	base: '',
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		lib: {
			entry: {
				index: path.resolve(import.meta.dirname, 'src/index.js'),
				'theme-switcher': path.resolve(import.meta.dirname, 'src/theme-switcher.js')
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
