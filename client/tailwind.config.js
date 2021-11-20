const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	prefix: '',
	important: true, // to overwride angular material
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['./src/**/*.{html,ts}'],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
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
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
