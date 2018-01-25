const socket = io()
    
socket.on('connect', () => {
  console.log('Connected to server')
})
    
socket.on('disconnect', () => {
  console.log('Disconnected from server')
})


socket.on('newMessage', message => {
  console.log('New Message', message)
  const messages = document.getElementById('messages')
  const li = document.createElement('li')
    
  li.className = 'list-group-item'
  li.appendChild(document.createTextNode(`${message.from}: ${message.text}`))
  
    
  messages.appendChild(li)  
    
})

const messageForm = document.getElementById('message-form');

messageForm.addEventListener('submit', (e) => {
  
  const message = document.getElementById('message')
  
  e.preventDefault()

  socket.emit('createMessage', {
    from: 'User',
    text: message.value
  }, () => {
    
  })
  
    message.value = ''
  
})