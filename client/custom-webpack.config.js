const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
	optimization: {
		concatenateModules: false,
		providedExports: false,
		usedExports: false,
	},
	plugins: [
		new MomentLocalesPlugin({
			localesToKeep: ['en', 'sk'],
		}),
	],
};
