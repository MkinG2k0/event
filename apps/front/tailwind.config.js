/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: {
				dark: 'var(--text-dark)',
				medium: 'var(--text-medium)',
				light: 'var(--text-light)',
				'divider-dark': 'var(--divider-dark)',
				'divider-medium': 'var(--divider-medium)',
				'divider-light': 'var(--divider-light)',
				'block-dark': 'var(--block-dark)',
				'block-medium': 'var(--block-medium)',
				'block-light': 'var(--block-light)',
			},
		},
	},
	plugins: [],
}
