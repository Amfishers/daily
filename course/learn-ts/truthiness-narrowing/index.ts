/**
 * 类型收窄
 */

 function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) {
            // Object is possibly 'null'.
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }

/**
 * 可辨别联合
 */

 interface Shape {
    kind: "circle" | "square"
    radius?: number
    sideLength?: number
}

function getArea (shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
        // Object is possibly 'undefined'.
    }
}
// 可以改成
interface Circle {
    kind: 'circle',
    radius: number
}
interface Square {
    kind: 'square';
    sideLength: number
}
interface Triangle {
    kind: 'triangle',
    sideLength: number
}
type Shape1 = Circle | Square | Triangle

// 穷尽检查（Exhaustiveness checking）
// never

const getAre1 = (shape: Shape1) : number => {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2
        
        case 'square':
            return shape.sideLength ** 2

        default:
            const _exhuastCheck: never = shape
            // Type 'Triangle' is not assignable to type 'never'.
            return _exhuastCheck
    }
    
}
// 这一点没明白？：
// 因为 TypeScript 的收窄特性，执行到 default 的时候，类型被收窄为 Triangle，但因为任何类型都不能赋值给 never 类型，这就会产生一个编译错误。通过这种方式，你就可以确保 getArea 函数总是穷尽了所有 shape 的可能性。
console.log(getAre1({kind: 'triangle', sideLength: 2}))