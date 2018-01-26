const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const path = require('path')

const {generateMessage}  = require('./utils/message')
const {generateLocationMessage} = require('./utils/message')
const {isRealString} = require('./utils/validation')
const {Users} = require('./utils/users')

const publicPath = path.join(__dirname, '../public')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const users = new Users()

app.use(express.static(publicPath))



io.on('connection', socket => {
  console.log('New User Connected')
  
  socket.on('join', (params, callback) => {
    if(!isRealString(params.name) || !isRealString(params.room)){
      return callback('Name and room name are required')
    } else {
      socket.join(params.room)
      
      users.removeUser(socket.id)
      users.addUser(socket.id, params.name, params.room)
      
      io.to(params.room).emit('updateUserList', users.getUserList(params.room))
      
      socket.emit('newMessage', generateMessage('Admin', 'Welcome To The Chat App'))
  
      socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined`))
      callback()
    }
  })
  
  socket.on('createMessage', (message, callback) => {
    console.log('New Message', message)
    io.emit('newMessage', generateMessage(message.from, message.text))
    callback()
  })
  
  socket.on('createLocationMessage', coords => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))  
  })
  
  socket.on('disconnect', () => {
    const user = users.removeUser(socket.id)
    
    if(user){
      io.to(user.room).emit('updateUserList', users.getUserList(user.room))
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left the room`))
    }
    
  })
})




const port = process.env.PORT || 3000
const ip = process.env.IP

server.listen(port, ip, () => {
  console.log(`App started on port ${port}`)
})
