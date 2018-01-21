const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const path = require('path')

const publicPath = path.join(__dirname, '../public')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))



io.on('connection', socket => {
  console.log('New User Connected')
  
  socket.emit('newMessage', {
    from: 'Brandon',
    text: 'This is my awesome message',
    createdAt: new Date().getTime()
  })
  
  socket.on('createMessage', message => {
    console.log('New Message', message)
  })
  
  socket.on('disconnect', () => {
    console.log('User Disconnected')
  })
})





const port = process.env.PORT || 3000
const ip = process.env.IP

server.listen(port, ip, () => {
  console.log(`App started on port ${port}`)
})
