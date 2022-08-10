tsc 编译时会报错，但是默认情况会输出文件，所以还是需要开发者比 TS 更清楚你的代码。

可以使用 noEmitOnError 参数，遇到报错不会更新代码
你的 hello.ts 文件，然后运行 tsc:

```
tsc --noEmitOnError hello.ts
```

你会发现 hello.js 并不会得到更新。
