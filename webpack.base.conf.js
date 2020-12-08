const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
    assets: 'assets/'
};

const PAGE_DIR = `${PATHS.src}/pug/pages/`;
const PAGES = fs.readdirSync(PAGE_DIR).filter(filename => filename.endsWith('.pug'));

module.exports = {
    // BASE config
    externals: {
        paths: PATHS
    },

    entry: {
        app: PATHS.src
    },

    output: {
        filename: `${PATHS.assets}/js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {path: './postcss.config.js'}
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                    }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            '~': './',
            vue$: 'vue/dist/vue.js'
        }
    },

    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.dist}/${PATHS.assets}img` },
                { from: `${PATHS.src}/static`, to: `${PATHS.dist}/` }
            ]
        }),

        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGE_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`
        })),

        new SvgSpritemapPlugin(`${PATHS.src}/${PATHS.assets}svg/*.svg`, {
            output: {
                filename: './assets/svg/sprite.svg'
            },
            sprite: {
                prefix: false,
                generate: {
                    title: false
                }
            }
        })
    ]
};
