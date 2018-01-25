const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const path = require('path')

const {generateMessage}  = require('./utils/message')
const publicPath = path.join(__dirname, '../public')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))



io.on('connection', socket => {
  console.log('New User Connected')
  
  socket.emit('newMessage', generateMessage('Admin', 'Welcome To The Chat App'))
  
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Has Joined'))
  
  socket.on('createMessage', (message, callback) => {
    console.log('New Message', message)
    io.emit('newMessage', generateMessage(message.from, message.text))
    callback('This is from the server')
    
    /*socket.broadcast.emit('createMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })*/
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
