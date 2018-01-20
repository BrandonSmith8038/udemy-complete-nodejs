const {mongoose} = require('./../server/db/mongoose')
const {ObjectID} = require('mongodb')
const {Todo} = require('./../server/models/todos')
const {User} = require('./../server/models/users')

/*Todo.remove({}).then(result => {
  console.log(result)
})*/

//Todo.findOneAndRemove({})

Todo.findByIdAndRemove('5a61eab4f4c6883e7e0268eb').then(todo => {
  console.log(todo)
})
