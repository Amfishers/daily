const babel = require('@babel/core')
const traverse = require('@babel/traverse').default

var code = `console.log('hello word')`
const ast = babel.parseSync(code)

let depth = 0
traverse(ast, {
  enter(path) {
    console.log(`enter ${path.type}(${path.key})`)
    depth++
  },
  exit(path) {
    depth--
    console.log(`  exit ${path.type}(${path.key})`)
  }
})