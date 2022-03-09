const babel = require('@babel/core')
const traverse = require('@babel/traverse').default

const code = `const a = 1, b = 2
function add(foo, bar) {
  console.log(a, b)
  return () => {
    const a = '1' // 新增了一个变量声明
    return a + (foo + bar)
  }
}`

// 用于获取唯一的标识符
const getUid = () => {
    let uid = 0
    return () => `_${(uid++) || ''}`
  }
  
  const ast = babel.parseSync(code)
  traverse(ast, {
    FunctionDeclaration(path) {
      // 获取第一个参数
      const firstParam = path.get('params.0')
      if (firstParam == null) {
        return
      }
      console.log('path', path)
  
    //   const currentName = firstParam.node.name
    //   const currentBinding = path.scope.getBinding(currentName)
    //   const gid = getUid()
    //   let sname
  
    //   // 循环找出没有被占用的变量名
    //   while(true) {
    //     sname = gid()
  
    //     // 1️⃣首先看一下父作用域是否已定义了该变量
    //     if (path.scope.parentHasBinding(sname)) {
    //       continue
    //     }
  
    //     // 2️⃣ 检查当前作用域是否定义了变量
    //     if (path.scope.hasOwnBinding(sname)) {
    //       // 已占用
    //       continue
    //     }
  
    //     //  再检查第一个参数的当前的引用情况,
    //     // 如果它所在的作用域定义了同名的变量，我们也得放弃
    //     if (currentBinding.references > 0) {
    //       let findIt = false
    //       for (const refNode of currentBinding.referencePaths) {
    //         if (refNode.scope !== path.scope && refNode.scope.hasBinding(sname)) {
    //           findIt = true
    //           break
    //         }
    //       }
    //       if (findIt) {
    //         continue
    //       }
    //     }
    //     break
    //   }
  
    //   // 开始替换掉
    //   const i = t.identifier(sname)
    //   currentBinding.referencePaths.forEach(p => p.replaceWith(i))
    //   firstParam.replaceWith(i)
    },
  })
  
//   console.log(generate(ast).code)