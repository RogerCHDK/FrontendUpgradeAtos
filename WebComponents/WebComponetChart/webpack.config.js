const HTMLWebPack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    output:{
		clean:true
	},
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader","sass-loader"],
            },
            {
                test: /styles\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
				test: /\.(png|jpg|gif|svg)$/,
				use: [
				{
					loader: 'file-loader',
				}
				],
			},
        ]
    },
    optimization: {

    },
    plugins:[
        new HTMLWebPack({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
			filename: '[name].css',
			ignoreOrder: false
		}),
        new CopyPlugin({
		    patterns: [
		    { from: 'src/assets', to: 'assets/' },
			],
		}),
    ]
}