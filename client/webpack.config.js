'use strict';

const webpack = require('webpack');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
	// WARNING: MUST set the 'mode' manually because it isn't done by NX/NG cli
	mode,
	module: {
		rules: [
			{
				test: /\.m?js/,
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { importLoaders: 1 },
					},
					{
						loader: 'postcss-loader',
					},
				],
			},
		],
	},
	plugins: [
		// add custom plugins here
	],
};
