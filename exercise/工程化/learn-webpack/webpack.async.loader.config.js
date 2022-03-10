const path = require('path')

module.exports = {
    entry: {
        app: './learn-loader/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'     //确保文件资源能够在 http://localhost:3000 下正确访问
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: [
                    './learn-loader/async-loader/index.js'
                ]
            }
        ]
    }
}