### 下载文档

```
//下载一个链接
function download(link, name) {
    if(!name){
            name=link.slice(link.lastIndexOf('/') + 1)
    }
    let eleLink = document.createElement('a')
    eleLink.download = name
    eleLink.style.display = 'none'
    eleLink.href = link
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
}
//下载excel
download('http://111.229.14.189/file/1.xlsx')

```

### 自定义下载一些内容

```
/**
 * 浏览器下载静态文件
 * @param {String} name 文件名
 * @param {String} content 文件内容
 */
function downloadFile(name, content) {
    if (typeof name == 'undefined') {
        throw new Error('The first parameter name is a must')
    }
    if (typeof content == 'undefined') {
        throw new Error('The second parameter content is a must')
    }
    if (!(content instanceof Blob)) {
        content = new Blob([content])
    }
    const link = URL.createObjectURL(content)
    download(link, name)
}
//下载一个链接
function download(link, name) {
    if (!name) {//如果没有提供名字，从给的Link中截取最后一坨
        name =  link.slice(link.lastIndexOf('/') + 1)
    }
    let eleLink = document.createElement('a')
    eleLink.download = name
    eleLink.style.display = 'none'
    eleLink.href = link
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
}

```

使用方法：

```
downloadFile('1.txt','lalalallalalla')
downloadFile('1.json',JSON.stringify({name:'hahahha'}))
```

### 提供一个图片链接，点击下载

图片、pdf 等文件，浏览器会默认执行预览，不能调用 download 方法进行下载，需要先把图片、pdf 等文件转成 blob，再调用 download 方法进行下载，转换的方式是使用 axios 请求对应的链接

```
//可以用来下载浏览器会默认预览的文件类型，例如mp4,jpg等
import axios from 'axios'
//提供一个link，完成文件下载，link可以是  http://xxx.com/xxx.xls
function downloadByLink(link,fileName){
    axios.request({
        url: link,
        responseType: 'blob' //关键代码，让axios把响应改成blob
    }).then(res => {
	const link=URL.createObjectURL(res.data)
        download(link, fileName)
    })

}
```

注意：会有同源策略的限制，需要配置转发

### 防抖

在一定时间间隔内，多次调用一个方法，只会执行一次.
这个方法的实现是从 Lodash 库中 copy 的

```
/**
 *
 * @param {*} func 要进行debouce的函数
 * @param {*} wait 等待时间,默认500ms
 * @param {*} immediate 是否立即执行
 */
export function debounce(func, wait=500, immediate=false) {
    var timeout
    return function() {
        var context = this
        var args = arguments

        if (timeout) clearTimeout(timeout)
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout
            timeout = setTimeout(function() {
                timeout = null
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(function() {
                func.apply(context, args)
            }, wait)
        }
    }
}
```

### 节流

```
/**
 * 节流，多次触发，间隔时间段执行
 * @param {Function} func
 * @param {Int} wait
 * @param {Object} options
 */
export function throttle(func, wait=500, options) {
    //container.onmousemove = throttle(getUserAction, 1000);
    var timeout, context, args
    var previous = 0
    if (!options) options = {leading:false,trailing:true}

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime()
        timeout = null
        func.apply(context, args)
        if (!timeout) context = args = null
    }

    var throttled = function() {
        var now = new Date().getTime()
        if (!previous && options.leading === false) previous = now
        var remaining = wait - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            func.apply(context, args)
            if (!timeout) context = args = null
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining)
        }
    }
    return throttled
}
```

第三个参数还有点复杂，options

leading，函数在每个等待时延的开始被调用，默认值为 false
trailing，函数在每个等待时延的结束被调用，默认值是 true

可以根据不同的值来设置不同的效果：

leading-false，trailing-true：默认情况，即在延时结束后才会调用函数
leading-true，trailing-true：在延时开始时就调用，延时结束后也会调用
leading-true, trailing-false：只在延时开始时调用

### cleanObject

```
export const isFalsy = (value) => (value === 0 ? false : !value);

export const isVoid = (value) =>
  value === undefined || value === null || value === "";

export const cleanObject = (object) => {
  // Object.assign({}, object)
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
```

使用

```
let res=cleanObject({
    name:'',
    pageSize:10,
    page:1
})
console.log("res", res) //输入{page:1,pageSize:10}

```

### 获取后缀名

使用场景：上传文件判断后缀名

```
/**
 * 获取文件后缀名
 * @param {String} filename
 */
 export function getExt(filename) {
    if (typeof filename == 'string') {
        return filename
            .split('.')
            .pop()
            .toLowerCase()
    } else {
        throw new Error('filename must be a string type')
    }
}
```

例子： getExt("1.mp4") //->mp4

### 复制内容到剪贴板

```
export function copyToBoard(value) {
    const element = document.createElement('textarea')
    document.body.appendChild(element)
    element.value = value
    element.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy')
        document.body.removeChild(element)
        return true
    }
    document.body.removeChild(element)
    return false
}

```

使用方式:
//如果复制成功返回 true
copyToBoard('lalallala')

原理：

创建一个 textare 元素并调用 select()方法选中
document.execCommand('copy')方法，拷贝当前选中内容到剪贴板。

### 休眠多少毫秒

```
/**
 * 休眠xxxms
 * @param {Number} milliseconds
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

//使用方式
const fetchData=async()=>{
	await sleep(1000)
}
```

### 生成随机字符串

```
/**
 * 生成随机id
 * @param {*} length
 * @param {*} chars
 */
export function uuid(length, chars) {
    chars =
        chars ||
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    length = length || 8
    var result = ''
    for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]
    return result
}
```

使用方式
//第一个参数指定位数，第二个字符串指定字符，都是可选参数，如果都不传，默认生成 8 位
uuid()

### 简单的深拷贝

```
/**
 *深拷贝
 * @export
 * @param {*} obj
 * @returns
 */
export function deepCopy(obj) {
    if (typeof obj != 'object') {
        return obj
    }
    if (obj == null) {
        return obj
    }
    return JSON.parse(JSON.stringify(obj))
}
```

缺陷：只拷贝对象、数组以及对象数组，对于大部分场景已经足够

### 数组去重

```
/**
 * 数组去重
 * @param {*} arr
 */
export function uniqueArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The first parameter must be an array')
    }
    if (arr.length == 1) {
        return arr
    }
    return [...new Set(arr)]
}
```

### 对象转化为 FormData 对象

```
/**
 * 对象转化为formdata
 * @param {Object} object
 */

 export function getFormData(object) {
    const formData = new FormData()
    Object.keys(object).forEach(key => {
        const value = object[key]
        if (Array.isArray(value)) {
            value.forEach((subValue, i) =>
                formData.append(key + `[${i}]`, subValue)
            )
        } else {
            formData.append(key, object[key])
        }
    })
    return formData
}
```

使用场景：上传文件时我们要新建一个 FormData 对象，然后有多少个参数就 append 多少次，使用该函数可以简化逻辑
使用方式：

```
let req={
    file:xxx,
    userId:1,
    phone:'15198763636',
    //...
}
fetch(getFormData(req))
```

### 保留到小数点以后 n 位

```
// 保留小数点以后几位，默认2位
export function cutNumber(number, no = 2) {
    if (typeof number != 'number') {
        number = Number(number)
    }
    return Number(number.toFixed(no))
}
```

使用场景：JS 的浮点数超长，有时候页面显示时需要保留 2 位小数

### 重复时间校验

```
// 两个时间段时间是否重叠
isOverlapping (startDate1, endDate1, startDate2, endDate2) {
    // isSameOrBefore
    return moment(startDate1).isBefore(endDate2) && moment(startDate2).isBefore(endDate1)
},
```

记忆：

```
|        |    |     |
--------------------
s1       s2   e1   e2
```

这样就算是重叠了
