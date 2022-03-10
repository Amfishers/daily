module.exports = function (content, map, meta) {
    var callback = this.async()
    console.log('now - before:', Date.now())
    setTimeout(() => {
        console.log('--- async: ', content)
        console.log('now - after:', Date.now())
        callback(null, `123123`)
    }, 2000)
    return
}