const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')



// 处理静态资源
// app.use('/public', express.static('public/'))
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('a user connected : ' + socket.id)
    socket.on('disconnect', () => {
        console.log('user disconnected : ' + socket.id)
    })

    socket.on('chat message', msg => {
        console.log(socket.id + ' say: ' + msg)
        io.emi('chat message', msg) // 发给了包括自己的人
        // socket.broadcast.emit('chat message', msg) // 发给了初自己之外的人
    })
})

app.get('/camera', (req, res) => {
    res.sendFile(__dirname + '/camera.html')
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

http.listen(9091, () => {
    console.log('listening on *: 9091')
})