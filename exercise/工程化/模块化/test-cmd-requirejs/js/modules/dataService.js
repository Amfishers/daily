define(function () {
    let msg = 'www.baidu.com'
    function getMsg () {
        return msg.toUpperCase()
    }
    return { getMsg }
})