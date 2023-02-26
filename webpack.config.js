const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PugPlugin = require('pug-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	mode: 'development',
	entry: './src/ts/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js',
		clean: true
	},
	cache: false,
	devServer: {
		port: 3000,
		open: true,
		hot: true,
		static: {
			directory: path.join(__dirname, 'dist')
		},
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				type: 'asset',
				generator: {
					filename: 'images/[name][ext]'
				}
			},
			{
				test: /\.pug$/,
				loader: PugPlugin.loader
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['postcss-preset-env']]
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									corejs: 3,
									useBuiltIns: 'usage'
								}
							]
						]
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			inject: 'body',
			scriptLoading: 'blocking',
			alwaysWriteToDisk: true
		}),
		new HtmlWebpackHarddiskPlugin({
			outputPath: path.resolve(__dirname, 'dist')
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css'
		})
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			context: './src',
		// 			from: 'assets/**/*.+(png|svg|jpg|jpeg|gif|ico|json)',
		// 			to: path.resolve(__dirname, 'dist')
		// 		}
		// 	]
		// })
	],
	optimization: {
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin({
				test: /.css$/,
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: { removeAll: true }
						}
					]
				}
			}),
			new ImageMinimizerPlugin({
				test: /\.(jpe?g|png|gif|svg)$/i,
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: ['imagemin-gifsicle', 'imagemin-mozjpeg', 'imagemin-optipng', 'imagemin-svgo']
					}
				},
				loader: false
			})
		]
	}
};
