define(function(require, factory) {
    const m1 = require('./module1')
    const m4 = require('./module4')
    m1.show()
    m4.show()
})