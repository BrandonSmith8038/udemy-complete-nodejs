//const MongoClient =  require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb');

const users = [
  {
    name: 'Brandon',
    age: 32,
    location: 'Scottsdale'
  },
  {
    name: 'Amber',
    age: 32,
    location: 'Goodyear'
  },
  {
    name: 'Kynlee',
    age: '12',
    location: 'Texas'
  },
  {
    name: 'Lily',
    age: 4,
    location: 'Arizona'
  },
  {
    name: 'Laysa',
    age: 9,
    location: 'Phoenix'
  }
];

const todos = [
  {
    text: 'Todo Item 1',
    completed: false,
    _creator: '5a6474d9d164c86d7ab3b927'
  },
  {
    text: 'Todo Item 2',
    completed: true,
    _creator: '5a6474d9d164c86d7ab3b927'
  },
  {
    text: 'Todo Item 3',
    completed: false,
    _creator: '5a6474d9d164c86d7ab3b927'
  },
  {
    text: 'Todo Item 4',
    completed: true,
    _creator: '5a6476ca0e0a14af7a88f4c7'
  },
  {
    text: 'Todo Item 5',
    completed: false,
    _creator: '5a6476ca0e0a14af7a88f4c7'
  }
];

function addUsers() {
  MongoClient.connect(
    'mongodb://cowboy8038:Nascar8038@ds127801.mlab.com:27801/complete-nodejs-todolist',
    (err, db) => {
      if (err) {
        return console.log('Unable to Connect To DB');
      }
      console.log('Connected To MongoDB server');

      users.forEach(user => {
        db.collection('Users').insertOne(
          {
            name: user.name,
            age: user.age,
            location: user.location
          },
          (err, result) => {
            if (err) {
              return console.log('Unable to add user', err);
            }
            console.log(result.ops[0]._id.getTimestamp());
          }
        );
      });

      db.close();
    }
  );
}

function addTodos() {
  MongoClient.connect(
    'mongodb://cowboy8038:Nascar8038@ds127801.mlab.com:27801/complete-nodejs-todolist',
    (err, db) => {
      if (err) {
        return console.log('Unable to Connect To DB');
      }
      console.log('Connected To MongoDB server');

      todos.forEach(todo => {
        db.collection('todos').insertOne(
          {
            text: todo.text,
            completed: todo.completed,
            _creator: todo._creator
          },
          (err, result) => {
            if (err) {
              return console.log('Unable to add Todo', err);
            }
            console.log(result.ops[0]._id.getTimestamp());
          }
        );
      });

      db.close();
    }
  );
}

function addSingleUser(name, age, location) {
  MongoClient.connect(
    'mongodb://cowboy8038:Nascar8038@ds127801.mlab.com:27801/complete-nodejs-todolist',
    (err, db) => {
      if (err) {
        return console.log('Unable to Connect To DB');
      }
      console.log('Connected To MongoDB server');

      db.collection('Users').insertOne(
        {
          name,
          age,
          location
        },
        (err, result) => {
          if (err) {
            return console.log('Unable to add user', err);
          }
          console.log(result);
        }
      );
      db.close();
    }
  );
}

//addUsers()
addTodos();
//addSingleUser('Brandon', 32, 'Arizona')
