let uniq = require('uniq')
let m1 = require('./module1')
let m2 = require('./module2')
let m3 = require('./module3')

// m1.foo()  // module1
// m2()  // module2
// m3.foo() // foo() module3
// console.log(uniq(m3.arr)) // [1,2,3]
var cobj = m1.obj
console.log('cobj1', cobj)
cobj.name = 'echo'
console.log('cobj2', cobj)
var c = m1.count
console.log('c1', c)
m1.addCount()
console.log('c2', c)
var z = m1.showCount()
console.log('z',z)
