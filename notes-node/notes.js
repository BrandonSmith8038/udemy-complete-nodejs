const fs = require("fs")

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch(e){
    return  []
  }
  
  
}

const saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
  let notes = fetchNotes()
  const note = {
    title,
    body
  }
  
  
  const duplicateNotes = notes.filter(note => note.title === title)
  if(duplicateNotes.length === 0){
    notes.push(note)
    saveNotes(notes)
    return note
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