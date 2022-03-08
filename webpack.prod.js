import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';

export default merge(common, {
	mode: 'production',
	output: {
		path: path.resolve('dist'),
		filename: '[name].[contenthash].bundle.js'
	},
	plugins: [new CleanWebpackPlugin()]
});
