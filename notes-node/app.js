console.clear()
console.log('starting app')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')
const _ = require('lodash')

const res = notes.add(9,10)
console.log('Notes.Add', res)

console.log('Lodash', _.isString('Brandon'))
console.log('Lodash', _.isString(true))


let filteredArray = _.uniq(['1','2','1','3','4','3'])
console.log('Lodash Unique', filteredArray)

/*const user = os.userInfo()

fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`, (err) => {
  if(err){
    console.log('Unable to write to file')
  }
})*/