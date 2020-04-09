const icrushLoaderPlugin = require('icrush/webpack/icrush-loader-plug');
const resolve = require('path').resolve;

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'build/main.js',
        chunkFilename: 'build/bundle.[name].[chunkhash].js'
    },
    optimization: {
        concatenateModules: true
    },
    module: {
        rules: [{
            test: /\.iCrush$/,
            loader: ['icrush/webpack/icrush-loader.js', {
                loader: resolve(__dirname, '../insert.js'),
                options: {
                    // 调用插入钩子标签名称
                    hook: "insert-html"
                }
            }]
        }, {
            test: /\.js$/,
            //只在src文件夹下查找
            include: [resolve(__dirname, 'src')],
            //不会去查找的路径
            exclude: /node_modules/,
            // 把Babel编译过的文件缓存起来
            loader: "babel-loader?cacheDirectory=.babel-cache"
        }, {
            test: /\.(css|scss)$/,
            loader: ['style-loader', 'icrush/webpack/icrush-style-loader.js', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    publicPath: "../",
                    name: "build/[path][name].[ext]",
                    context: "src/asset",
                    limit: 5000
                }
            }]
        }]
    },
    plugins: [
        new icrushLoaderPlugin()
    ]
};
