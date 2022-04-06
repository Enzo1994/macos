const http = require('http')
const socketIo = require('socket.io')
const koa = require('koa2');
const port = 8888;

const app = new koa()

const server = http.createServer(app)
const io = socketIo.listen(server)  // 代表整个站点
io.sockets.on('connection', socket=> {  // 每次收到客户端连接都触发
    socket.on('join', room => {  // 
        socket.join(room)  // 把客户端加入房间, 两个房间要创建唯一标识，不能让两个人串了
        const myRoom = io.sockets.adapter.rooms[room]
        // Objec
    })
}) 
server.listen(port, 'localhost')