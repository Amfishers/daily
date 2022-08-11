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
type Shape1 = Circle | Square

const getAre1 = (shape: Shape1) : number => {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2
        
        case 'square':
            return shape.sideLength ** 2
    }
    
}