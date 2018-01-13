console.clear()
console.log('starting app')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')

const res = notes.add(9,10)
console.log('Notes.Add', res)

/*const user = os.userInfo()

fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`, (err) => {
  if(err){
    console.log('Unable to write to file')
  }
})*/