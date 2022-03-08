import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
	entry: './src/index.ts',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(path.dirname('dist'))
	},
	module: {
		rules: [
			{
				test: /.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		})
	]
};
