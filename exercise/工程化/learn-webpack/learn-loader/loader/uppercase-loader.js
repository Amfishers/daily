module.exports = function (str) {
    if (str) {
        console.log('--- uppercase-loader input: ', str)
        str = str.charAt(0).toUpperCase() + str.slice(1)
        console.log('--- uppercase-loader out: ', str)
    }
    // return str
    // 这里为什么要这么写？因为直接返回转换后的字符串会报语法错误，
    // 这么写import后转换成可以使用的字符串
    return `module.exports = '${str}'`
}