define(function (require, exports, module) {
    var data = 'amfishers.com'

    function show () {
        console.log('module1 show()' + data)
    }

    exports.show = show
})