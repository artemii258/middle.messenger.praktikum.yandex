export default {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'semistandard'],
	overrides: [],
	allow: ['functions'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		indent: 'off',
		'no-tabs': 0,
		'one-var': [2, { initialized: 'consecutive' }],
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'off'
	}
};
