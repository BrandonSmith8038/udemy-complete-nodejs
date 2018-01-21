const { mongoose } = require('./../server/db/mongoose');
const { ObjectID } = require('mongodb');
const { Todo } = require('./../server/models/todos');
const { User } = require('./../server/models/users');

// const id = 'a61d576c6723f3be344f377'

// if(!ObjectID.isValid(id)){
//   console.log('Id Not Valid')
// }

/*Todo.find({
  _id: id
}).then(todos => {
  if(!todos){
    return console.log('Todos Not Found')
  }
   console.log('Todos', todos)
})

Todo.findOne({
  _id: id
}).then(todo => {
  if(!todo){
    return console.log('Todo Not Found')
  }
   console.log('Todo', todo)
})*/

/*Todo.findById(id).then(todoById => {
  if(!todoById){
    return console.log('Todo Not Found')
  }
  console.log('Find By ID', todoById)
}).catch(e => console.log(e))
*/

const id = '6a61b6c250fa94c12dea20a1';

if (!ObjectID.isValid(id)) {
  return console.log('This Is Not A Valid ID');
} else {
  User.findById(id)
    .then(user => {
      if (!user) {
        return console.log('User Not Found');
      }
      console.log('User: ', user);
    })
    .catch(e => console.log(e));
}
