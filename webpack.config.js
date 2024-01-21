const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
	{
		entry: ['./_src/coloris/coloris.js','./_src/date.js','./_src/common.js'],
		output: {
			filename: 'tools.js',
			path: path.resolve(__dirname, 'assets/js'),
		},
		optimization: {
			minimizer: [new TerserPlugin({
				extractComments: false,
			})],
		},
	},
	{
		entry: ['./_src/fontkit.min.js'],
		output: {
			filename: 'fontkit.min.js',
			path: path.resolve(__dirname, 'assets/js'),
		},
		optimization: {
		  minimize: false,
		},
	},
	{
		entry: ['./_src/nepalify.production.min.js'],
		output: {
			filename: 'nepalify.production.min.js',
			path: path.resolve(__dirname, 'assets/js'),
		},
		optimization: {
		  minimize: false,
		},
	},
];