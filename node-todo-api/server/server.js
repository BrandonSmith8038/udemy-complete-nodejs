const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://cowboy8038:Nascar8038@ds127801.mlab.com:27801/complete-nodejs-todolist')

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
})

const secondTodo = new Todo({
  text: 'Eat Dinner',
  completed: true,
  completedAt: new Date().getDate()
})

secondTodo.save().then(doc => {
  console.log('Saved Todo', doc)
}, e => console.log('Unable To Save Todo'))