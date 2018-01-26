function scrollToBottom() {
  //Selectors
  const messages = $('#messages')
  const newMessage = $(messages).children('li:last-child')

  //Heights
  const clientHeight = messages.prop('clientHeight')
  const scrollTop = messages.prop('scrollTop')
  const scrollHeight = messages.prop('scrollHeight')
  const newMessageHeight = newMessage.innerHeight()
  const lastMessageHeight = newMessage.prev().innerHeight()
  
  
  if(clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight){
    messages.scrollTop(scrollHeight)
  }
}

const socket = io()
    
socket.on('connect', () => {
  console.log('Connected to server')
})
    
socket.on('disconnect', () => {
  console.log('Disconnected from server')
})


socket.on('newMessage', message => {
  
  const formattedTime = moment(message.createdAt).format('h:mm a')
  const messages = document.getElementById('messages')
  const template = document.getElementById('message-template').textContent
  const li = document.createElement('li')
  li.className = 'message'
  
  const html = Mustache.render(template,{
    text: message.text,
    from: message.from,
    createdAt: formattedTime
  })
  
  
  
    li.innerHTML = html
    messages.appendChild(li)
    scrollToBottom()
})

socket.on('newLocationMessage', message => {
  /*const formattedTime = moment(message.createdAt).format('h:mm a')
  
  const messages = document.getElementById('messages')
  const li = document.createElement('li')
  const link = document.createElement('a')
  
  link.setAttribute('href', message.url)
  link.setAttribute('target', '_blank')
  link.innerHTML = `My Current Location`
  li.appendChild(document.createTextNode(`${formattedTime} User `))
  li.appendChild(link)
  messages.appendChild(li)*/
  
  const formattedTime = moment(message.createdAt).format('h:mm a')
  const messages = document.getElementById('messages')
  const template = document.getElementById('location-message-template').textContent
  const li = document.createElement('li')
  li.className = 'message'
  
  const html = Mustache.render(template,{
    url: message.url,
    from: message.from,
    createdAt: formattedTime
  })
  
  
  
    li.innerHTML = html
    messages.appendChild(li)
    scrollToBottom()
  
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