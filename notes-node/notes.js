const fs = require("fs")

const addNote = (title, body) => {
  let notes = []
  const note = {
    title,
    body
  }
  
  try {
    const notesString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(notesString)
  } catch(e){
    
  }
  
  const duplicateNotes = notes.filter(note => note.title === title)
  if(duplicateNotes.length === 0){
    notes.push(note)
  
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
  } else {
    console.log('Please Choose A Unique Title')
  }
}

const getAll = () => {
  console.log('Getting All Notes...')
}

const getNote = title => {
  console.log(title)
}

const removeNote = title => {
  console.log(`Removing ${title}....`)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}