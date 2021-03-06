<<<<<<< HEAD
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
  return fetchNotes()
}

const getNote = title => {
  let notes = fetchNotes()
  const filteredNotes = notes.filter(note => title === note.title)
  
  return filteredNotes[0]
}

const removeNote = title => {
  let notes = fetchNotes()
  let filteredNotes = notes.filter(note => title !== note.title)
  saveNotes(filteredNotes)
  
  return notes.length !== filteredNotes.length
}

const logNote = (note) => {
  console.log('------')
  console.log(`Title: ${note.title}`)
  console.log(`Body: ${note.body}`)
}
=======
const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };

  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const getNote = title => {
  let notes = fetchNotes();
  const filteredNotes = notes.filter(note => title === note.title);

  return filteredNotes[0];
};

const removeNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => title !== note.title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = note => {
  console.log('------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
>>>>>>> c14581a9ba8424847bb9c2fba92f93ab564438aa

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
<<<<<<< HEAD
}
=======
};
>>>>>>> c14581a9ba8424847bb9c2fba92f93ab564438aa
