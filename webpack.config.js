
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},

	resolve: {
		extensions: [".js", ".css", ".ts", ".scss"]
	},
	
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-react']
			}
		}]
	}
};