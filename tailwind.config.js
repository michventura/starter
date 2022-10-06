/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./app/**/*.{ts,tsx}'],
	theme: {
		// fontWeight: {
		// 	light: '300',
		// 	normal: '400',
		// 	bold: '700',
		// },
		extend: {
			// fontFamily: {
			// 	sans: ['Regular', ...defaultTheme.fontFamily.sans],
			// 	heading: 'Bold, sans-serif',
			// 	light: 'Light, sans-serif',
			// },
			// colors: {
			// 	brand: {
			// 		DEFAULT: 'var(--clr-default)',
			// 		light: 'var(--clr-light)',
			// 		dark: 'var(--clr-dark)',
			// 	},
			// },
			// width: {
			// 	'1/7': '14.2857143%',
			// 	'2/7': '28.5714286%',
			// 	'3/7': '42.8571429%',
			// 	'4/7': '57.1428571%',
			// 	'5/7': '71.4285714%',
			// 	'6/7': '85.7142857%',
			// },
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				body: {
					fontFamily: theme('fontFamily.sans'),
				},
				// h1: { fontSize: theme('fontSize.2xl') },
				// h2: { fontSize: theme('fontSize.xl') },
				// h3: { fontSize: theme('fontSize.lg') },
			})
		}),
	],
}
