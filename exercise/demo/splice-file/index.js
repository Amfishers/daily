const Koa = require('koa')
const Router = require('koa-router')
const server = require('koa-static')
const multiparty = require('multiparty')

const path = require('path')

const app = new Koa()
const router = new Router()

app.use(router.routes())
app.use(server(path.join(__dirname, '/public')))

router.post('/upload', async (ctx) => {
    const form = new multiparty.Form({
        uploadDir: 'temp'
    })
    console.log('ctx', ctx)

    form.parse(ctx.req)

    form.on('file', () => {
        console.log('上传成功')
    })

    ctx.response.body = 'uploaded successed'
})

app.listen(3020, () => {
    console.log('服务器启动，监听 3020 端口')
})