/*var obj = {
  name: 'Andrew'
}

var stringObj = JSON.stringify(obj)
console.log(typeof stringObj)
console.log(stringObj)*/

/*const personString = '{"name": "Brandon", "Age": 32}'
const person = JSON.parse(personString)
console.log(typeof person)
console.log(person)*/

const fs = require('fs');

const originalNote = {
  title: 'Some Title',
  body: 'Some Body'
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
