const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	prefix: '',
	important: true, // to overwride angular material
	content: ['./src/**/*.{html,ts,scss}'],
	darkMode: 'class', // or 'media' or 'class'
	corePlugins: {
		preflight: false,
	},
	theme: {
		fontFamily: {
			sans: ['sans-serif', 'Poppins'],
			serif: ['sans-serif', 'Poppins'],
		},
		backgroundColor: (theme) => ({
			...colors,
		}),
		screens: {
			xs: '475px',
			...defaultTheme.screens,
		},
		flex: {
			...defaultTheme.flex,
			0.5: '0.5 0.5 0%',
			2: '2 2 0%',
			3: '3 3 0%',
		},
		extend: {
			colors: {
				primary: '#25aedd',
				'primary-medium': '#2196F3',
				'primary-color-dark': '#058ADB',

				danger: '#E84E40',
				success: '#53C432',
				'primary-secondary': '#d7edff',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')], //
};
