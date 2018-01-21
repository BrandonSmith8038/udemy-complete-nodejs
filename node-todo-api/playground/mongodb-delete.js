//const MongoClient =  require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect(
  'mongodb://cowboy8038:Nascar8038@ds127801.mlab.com:27801/complete-nodejs-todolist',
  (err, db) => {
    if (err) {
      return console.log('Unable to Connect To DB');
    }
    console.log('Connected To MongoDB server');

    //Delete Many
    /*db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then(result => {
    console.log(`Deleted ${result} todo's`)
  })*/
    //Delete One
    //db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then(result => console.log(result))

    //Find One and Delete
    //db.collection('Todos').findOneAndDelete({completed: false}).then(result => console.log(result))

    //Chanllenge - Find and Delete duplicate user
    db
      .collection('Users')
      .findOneAndDelete({
        _id: new ObjectID('5a61a6de8487702ad5c0189e')
      })
      .then(result => console.log(result));

    //db.close()
  }
);
