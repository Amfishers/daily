class ReplaceStr {
    // 构造方法
    constructor(options) {
        console.log('ReplaceStr constructor:', options)
    }
    // 应用函数
    apply (compiler) {
        compiler.plugin('emit', (compilation, callback) => {
            console.log("webpack 构建过程开始！")
            for (const filePathName in compilation.assets) {
                console.log('filePathName', filePathName)
                if (/\.js$/g.test(filePathName)) {

                    let content = compilation.assets[filePathName].source() || ''
                    let target = 'echo'
                    content = content.replace(/fisher/ig, target)

                    console.log('content', content)

                    compilation.assets[filePathName] = Object.assign(compilation.assets[filePathName], {
                        source () {
                            return content
                        }
                    })
                }
            }
            callback()
        })
    }
}
module.exports = ReplaceStr