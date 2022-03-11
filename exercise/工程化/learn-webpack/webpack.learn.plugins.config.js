const path = require('path')
const MyExampleWebpackPlugin = require('./learn-plugins/MyPlugins')

module.exports = {
    entry: {
        app: './learn-plugins/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'     //确保文件资源能够在 http://localhost:3000 下正确访问
    },
    plugins: [
        new MyExampleWebpackPlugin({ name: 'fisher' })
    ]
}