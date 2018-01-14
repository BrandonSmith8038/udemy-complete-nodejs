const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
const command = argv._[0]

if(command === 'add'){
  const note = notes.addNote(argv.title, argv.body)
  if(note != undefined){
    console.log(`Note Added`)
    notes.logNote(note)
  } else {
    console.log('Please choose a unique title')
  }
} 

else if (command === 'list'){
  const allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach(note => notes.logNote(note))
} 

else if(command === 'read'){
  const note = notes.getNote(argv.title)
  if(note){
    console.log(`Note Found`)
    notes.logNote(note)
  } else {
    console.log('Note Not Found')
  }
  
} 

else if (command === 'remove'){
  const noteRemoved = notes.removeNote(argv.title)
  
  const message = noteRemoved ? 'Note was removed' : 'Note Not Found'
  console.log(message)
} 

else {
  console.log('Command Not Recognized')
}
