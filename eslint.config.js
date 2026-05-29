import js from '@eslint/js'
import globals from 'globals'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		ignores: ['dist/**', 'node_modules/**', 'legacy/**', 'src/**', 'app/routeTree.gen.ts']
	},
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['app/**/*.{ts,tsx}', 'scripts/**/*.mjs', 'vite.config.ts'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y
		},
		settings: {
			'jsx-a11y': {
				linkComponents: [
					{
						name: 'Link',
						linkAttribute: 'to'
					}
				]
			}
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			...jsxA11y.flatConfigs.recommended.rules,
			'jsx-a11y/anchor-is-valid': [
				'error',
				{
					components: ['Link'],
					specialLink: ['to'],
					aspects: ['invalidHref', 'preferButton']
				}
			]
		}
	}
)
