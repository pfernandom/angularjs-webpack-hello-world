var webpack = require("webpack");

module.exports = {
	entry:{
		main: './src/app.js',
		vendor: ['angular']
	},
	output: {
		path: require("path").resolve("./dist"),
		filename: '[name].js',
		publicPath: "./dist/",
	},
	devtool : 'source-map',
	module: {
		loaders: [
			{ 
				test: /\.css$/, 
				loader: 'style!css' 
			},
			{
			  test: /\.scss$/,
			  loader: 'style!css!sass'
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query:{
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
			$: "jquery"
		}),
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity)
	]
}