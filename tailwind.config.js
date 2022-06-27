/** @type {import('tailwindcss').Config} */


module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'logo' : ['Righteous', 'cursive'],
				'description' : ['Roboto Mono', 'monospace'],
				
			},
			colors: {
				'neon-blue' : '#00C5C8',
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar-hide'),
		require('@tailwindcss/typography'),
	],
};
