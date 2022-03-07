let uniq = require('uniq')
let m1 = require('./module1')
let m2 = require('./module2')
let m3 = require('./module3')

m1.foo()  // module1
m2()  // module2
m3.foo() // foo() module3
console.log(uniq(m3.arr)) // [1,2,3]