import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	root: path.resolve(rootDir, 'legacy'),
	publicDir: path.resolve(rootDir, 'public'),
	esbuild: {
		include: /src\/.*\.js$/,
		loader: 'jsx'
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				'.js': 'jsx'
			}
		}
	},
	server: {
		port: 3003
	},
	plugins: [
		{
			name: 'legacy-js-as-jsx',
			enforce: 'pre',
			async transform(code, id) {
				if (!id.includes('/src/') || !id.endsWith('.js')) {
					return null
				}

				return transformWithEsbuild(code, id, {
					loader: 'jsx',
					jsx: 'automatic'
				})
			}
		},
		react()
	],
	resolve: {
		alias: {
			'@legacy': path.resolve(rootDir, 'src')
		}
	}
})
