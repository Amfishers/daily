// class MyPlugin {
//     // 构造方法
//     constructor(options) {
//         console.log('MyPlugin constructor:', options)
//     }
//     // 应用函数
//     apply (compiler) {
//         compiler.hooks.initialize.tap('MyPlugin', compilation => {
//             console.log("webpack 构建过程开始！")
//         })
//     }
// }
// module.exports = MyPlugin

function FileListPlugin (options) { }

FileListPlugin.prototype.apply = function (compiler) {
    compiler.plugin('emit', function (compilation, callback) {
        // 在生成文件中，创建一个头部字符串：
        var filelist = 'In this build:\n\n'

        // 遍历所有编译过的资源文件，
        // 对于每个文件名称，都添加一行内容。
        for (var filename in compilation.assets) {
            filelist += ('- ' + filename + '\n')
        }

        // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
        compilation.assets['filelist.md'] = {
            source: function () {
                return filelist
            },
            size: function () {
                return filelist.length
            }
        }

        callback()
    })
}

module.exports = FileListPlugin