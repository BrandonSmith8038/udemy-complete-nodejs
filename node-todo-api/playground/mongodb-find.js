//const MongoClient =  require('mongodb').MongoClient
const {MongoClient, ObjectID} =  require('mongodb')

const obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://cowboy8038:Nascar8038@ds127801.mlab.com:27801/complete-nodejs-todolist', (err, db) => {
  if(err){
    return console.log('Unable to Connect To DB')
  }
  console.log('Connected To MongoDB server')
  
  db.collection('Todos').find().toArray().then(docs => {
    console.log('Todos\'s')
    console.log(JSON.stringify(docs, undefined, 2))
  }, err => console.log('Unable to fetch todo\'s', err))
  
  
 /* db.collection('Todos').find({
    _id: new ObjectID('5a60a6f37d99ba25ade68efa')
  }).toArray().then(docs => {
    console.log('Todos\'s')
    console.log(JSON.stringify(docs, undefined, 2))
  }, err => console.log('Unable to fetch todo\'s', err))*/
  
  // db.collection('Todos').find().count().then(count => {
  //   console.log('Todos\'s')
  //   console.log(`Todos Count: ${count}`)
  // }, err => console.log('Unable to fetch todo\'s', err))
  
  db.collection('Users').find({name: 'Amber'}).toArray().then(docs => {
    console.log('Todos\'s')
    console.log(JSON.stringify(docs, undefined, 2))
  }, err => console.log('Unable to fetch todo\'s', err))
  
  //db.close()
})