module.exports = function (str) {
    if (str) {
        console.log('--- reverse-loader input:', str)
        str = str.split('').reverse().join('')
        console.log('--- reverse-loader output:', str)
    }
    return str
}