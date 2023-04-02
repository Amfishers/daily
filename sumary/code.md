### 继承
```Javascript
function SuperType (name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
    console.log(this.name)
}

function ChildType (name) {
    SuperType.call(this, name)
}


function O () {}
O.prototype = SuperType.prototype
ChildType.prototype = new O()

```

### new

```Javascript

function myNew () {
    const obj = new Object()
    const Con = [].prototype.shift(arguments)
    obj.__proto__ = Con.prototype
    const res = Con.apply(obj, arguments)
    return typeof res === 'object' ? res : obj
}


Function.prototype.myCall = function (context, ...args) {
    context = context || window

    const fn = new Symbol()

    context.fn = this

    const result = context.fn(args)

    delete context.fn

    return result
}


Function.prototype.myBind = function (context) {
    const self = this
    const args = Array.prototype.slice.call(arguments, 1)

    var mF = function () {
        const _args = Array.prototype.slice.call(arguments)
        return mF.apply(this instanceof mF ? this : context, args.concat(_args))
    }

    function NF = function () {}
    NF.prototype = this.prototype
    mF.prototype = new NF()

    return mF
}

function curry (fn, ...args) {
    const length = fn.length
    if (args.length > length) {
        return fn(args.slice(0, length))
    }

    return (..._args) => curry(fn, ...args, ..._args)
}

```

