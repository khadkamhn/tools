const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
	{
		entry: ['./_src/tippy.js/index.js','./node_modules/bootstrap/dist/js/bootstrap.bundle.js','./_src/coloris/coloris.js','./_src/date.js','./_src/common.js'],
		output: {
			filename: 'tools.js',
			path: path.resolve(__dirname, 'assets/js'),
		},
		optimization: {
			minimizer: [new TerserPlugin({
				extractComments: false,
			})],
		},
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'], // Needed for CSS imports like tippy.css
				},
			],
		},
	},
];