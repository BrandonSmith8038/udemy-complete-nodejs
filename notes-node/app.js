<<<<<<< HEAD
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')
=======
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
>>>>>>> c14581a9ba8424847bb9c2fba92f93ab564438aa

const titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
<<<<<<< HEAD
}
=======
};
>>>>>>> c14581a9ba8424847bb9c2fba92f93ab564438aa

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
<<<<<<< HEAD
}
=======
};
>>>>>>> c14581a9ba8424847bb9c2fba92f93ab564438aa

const argv = yargs
  .command('add', 'Add A New Note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List All Notes')
  .command('read', 'Read A Single Note', {
<<<<<<< HEAD
    title: titleOptions,
  })
  .command('remove', 'Remove A Single Note',{
    title:titleOptions
  })
  .help()
  .argv
const command = argv._[0]

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  if (note != undefined) {
    console.log(`Note Added`)
    notes.logNote(note)
  }
  else {
    console.log('Please choose a unique title')
  }
}

else if (command === 'list') {
  const allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach(note => notes.logNote(note))
}

else if (command === 'read') {
  const note = notes.getNote(argv.title)
  if (note) {
    console.log(`Note Found`)
    notes.logNote(note)
  }
  else {
    console.log('Note Not Found')
  }

}

else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title)

  const message = noteRemoved ? 'Note was removed' : 'Note Not Found'
  console.log(message)
}

else {
  console.log('Command Not Recognized')
=======
    title: titleOptions
  })
  .command('remove', 'Remove A Single Note', {
    title: titleOptions
  })
  .help().argv;
const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note != undefined) {
    console.log(`Note Added`);
    notes.logNote(note);
  } else {
    console.log('Please choose a unique title');
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (note) {
    console.log(`Note Found`);
    notes.logNote(note);
  } else {
    console.log('Note Not Found');
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);

  const message = noteRemoved ? 'Note was removed' : 'Note Not Found';
  console.log(message);
} else {
  console.log('Command Not Recognized');
>>>>>>> c14581a9ba8424847bb9c2fba92f93ab564438aa
}
