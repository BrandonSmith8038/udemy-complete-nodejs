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
    
  li.appendChild(document.createTextNode(`${message.from}: ${message.text}`))
  
    
  messages.appendChild(li)  
    
})

socket.on('newLocationMessage', message => {
  const messages = document.getElementById('messages')
  const li = document.createElement('li')
  const link = document.createElement('a')
  
  link.setAttribute('href', message.url)
  link.setAttribute('target', '_blank')
  link.innerHTML = `My Current Location`
  li.appendChild(document.createTextNode('From: '))
  li.appendChild(link)
  messages.appendChild(li)
  
})

const messageForm = document.getElementById('message-form');
const locationButton = document.getElementById('send-location')

messageForm.addEventListener('submit', (e) => {
  
  const message = document.getElementById('message')
  
  e.preventDefault()

  socket.emit('createMessage', {
    from: 'User',
    text: message.value
  }, () => {
    
    message.value = ''
  })
  
  
})

locationButton.addEventListener('click', () => {
  if(!navigator.geolocation){
    return alert('Geolocation Not Supported By Your Browser')
  }
  
  locationButton.disabled = true
  locationButton.innerHTML = 'Searching'
  
  navigator.geolocation.getCurrentPosition(position => {
    locationButton.disabled = false
    locationButton.innerHTML = 'Send Location'
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
      
    })
  }, () => {
    alert('Unable To Fetch Location')
    locationButton.disabled = false
    locationButton.innerHTML = 'Send Location'
  })
})