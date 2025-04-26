import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import jest from 'eslint-plugin-jest'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
	{ ignores: ['dist/', 'node_modules/'] },
	{
		files: [
			'src/*.{js,mjs,cjs,ts,jsx,tsx}',
			'tests/**/*.{.js,.ts,.jsx.tsx}'
		],
		plugins: { js },
		extends: ['js/recommended']
	},
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: { globals: globals.node }
	},
	tseslint.configs.recommended,
	{
		files: [
			'tests/**/*.{js,ts,jsx,tsx}',
			'src/**/*.{test,spec}.{js,ts,jsx,tsx}'
		],
		...jest.configs['flat/recommended'],
		rules: {
			...jest.configs['flat/recommended'].rules,
			'jest/prefer-expect-assertions': 'off'
		}
	},
	{
		rules: {}
	},
	eslintPluginPrettierRecommended
])
