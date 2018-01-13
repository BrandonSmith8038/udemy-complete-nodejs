console.log('starting app')

const fs = require('fs')
const _ = require('lodash')

const notes = require('./notes.js')

console.log(process.argv)

const command = process.argv[2]
console.log('Command', command)

if(command === 'add'){
  console.log('Adding New Note')
} else if (command === 'list'){
  console.log('Listing All Notes')
} else if(command === 'read'){
  console.log('Fetching Note')
} else if (command === 'remove'){
  console.log('Removing Notes')
} else {
  console.log('Command Not Recognized')
}
