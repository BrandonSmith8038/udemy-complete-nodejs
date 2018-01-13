const addNote = (title, body) => {
  console.log('Adding Note...', title, body)
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