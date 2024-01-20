const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: ['./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', './source/coloris/coloris.js', './source/js/common.js', './source/js/date.js'],
  output: {
    filename: 'tools.js',
    path: path.resolve(__dirname, './'),
  },
  mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					mangle: false,
					keep_fnames: true,
					keep_classnames: true,
					format: {
						comments: false,
					}
				},
				extractComments: false,
			}),
		],
	},
  watch: false,
};
