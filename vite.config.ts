import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(rootDir, './app')
		}
	},
	server: {
		port: 3002
	},
	plugins: [
		tanstackStart({
			srcDirectory: 'app',
			router: {
				generatedRouteTree: 'routeTree.gen.ts'
			}
		}),
		react({
			babel: {
				plugins: ['babel-plugin-react-compiler']
			}
		})
	]
})
