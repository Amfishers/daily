/**
 * @基本类型
 */
const a : number = 1
const b : string = '1'
const c : boolean = true

// 下面两个都是表示一个意思
const d : Array<number> = [1,2,3]
const e : string[] = ['12', '2']

// 函数参数以及返回值类型定义
function getFavoriteNumber (num: number) : number {
    return 1 + num
}

/**
 * @对象类型
 */
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

function p (pt: { x: number, y: string}) {
    console.log(`xxx${pt.x}`)
    console.log(`yyy${pt.y}`)
}
p({x: 3, y: '7'})


/**
 * 可选属性
 */

function printName(obj: { first: string; last?: number}) {
    console.log(`${obj.first}${obj.last}`)
    console.log(`${obj.last?.toString()}`)
}
printName({ first: 'fisher'}) 
printName({ first: 'fisher', last: 123})


/**
 * 使用联合类型（Working with Union Types）
 * TypeScript 会要求你做的事情，必须对每个联合的成员都是有效的。举个例子，如果你有一个联合类型 string | number , 你不能使用只存在 string 上的方法：
 */
function printId (id: number | string) {
    console.log(id.toUpperCase()) // 这时会报错

    // 改成
    if (typeof id === 'string') {
        console.log(id.toUpperCase())
    }else {
        console.log(id)
    }
}

/**
 * 类型别名
 * 
 * 有的时候，一个类型会被使用多次，此时我们更希望通过一个单独的名字来引用它。
 * 所谓类型别名，顾名思义，一个可以指代任意类型的名字
 */

type Point = {
    x: number;
    y: string
}
type ID = number | string

function printCoord (pt: Point) {
    console.log(`${pt.x} is number and ${pt.y} is string`)
}
printCoord({x: 123, y: 'xxx'})



/**
 * 接口
 * 
 * 接口声明（interface declaration）是命名对象类型的另一种方式，跟类型别名差不都。
 * 不过接口更像是一个类，可以扩展。 而 类型别名声明之后本身无法添加新的属性
 */

// interface
interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}

const bear = getBear()
bear.name
bear.honey

// Type
// 通过交集扩展类型
// type Animal = {
//     name: string
// }

// type Bear = Animal & {
//     honey: boolean
// }

// const bear = getBear()
// bear.name
// bear.honey

// 其他差异
// - 在 TypeScript 4.2 以前，类型别名的名字可能会出现在报错信息中 (opens new window)，有时会替代等价的匿名类型（也许并不是期望的）。接口的名字则会始终出现在错误信息中。
// - 类型别名也许不会实现声明合并，但是接口可以(opens new window)
// - 接口可能只会被用于声明对象的形状，不能重命名原始类型(opens new window)
// - 接口通过名字使用的时候，他们的名字会总是出现在错误信息中，如果直接使用，则会出现原始结构


/**
 * 类型断言
 *  TypeScript 仅仅允许类型断言转换为一个更加具体或者更不具体的类型。
 */

 const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//  或者
//  const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

// 有的时候，这条规则会显得非常保守，阻止了你原本有效的类型转换。如果发生了这种事情，你可以使用双重断言，先断言为 any （或者是 unknown），然后再断言为期望的类型：

// const aaa = (expr as any) as T;  ???


/**
 * 字面量推断（Literal Inference）
 */
 declare function handleRequest(url: string, method: "GET" | "POST"): void;

 const req = { url: "https://example.com", method: "GET" };
 handleRequest(req.url, req.method);
 

 
 /**
  * strictNullChecks 关闭
  * 当 strictNullChecks (opens new window)选项关闭的时候，如果一个值可能是 null 或者 undefined，它依然可以被正确的访问，或者被赋值给任意类型的属性。这有点类似于没有空值检查的语言 (比如 C# ，Java) 。这些检查的缺少，是导致 bug 的主要源头，所以我们始终推荐开发者开启 strictNullChecks (opens new window)选项。
  */