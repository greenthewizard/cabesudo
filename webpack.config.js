const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/')
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		open: true,
		overlay: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			filename: './index.html',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test:/\.scss$/,
				use: [
					{ loader:'style-loader' },
					{ loader:'css-loader' },
					{ loader: 'sass-loader' }
				]
			},
			{
				test:/\.(jpeg|jpg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: './img'
						}
					} 
				]
			}
		]
	}
};