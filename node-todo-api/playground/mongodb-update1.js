//const MongoClient =  require('mongodb').MongoClient
const {MongoClient, ObjectID} =  require('mongodb')

const obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://cowboy8038:Nascar8038@ds127801.mlab.com:27801/complete-nodejs-todolist', (err, db) => {
  if(err){
    return console.log('Unable to Connect To DB')
  }
  console.log('Connected To MongoDB server')
  
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5a61a52f9a0ee22a519b55d4')
// },{
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then(result =>  console.log(result))
 
 //Challenge
 db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('5a61a50d70ec502a40cf7cf1')
 }, {
   $set: {
     location: 'Scottsdale, Arizona'
   },
   $inc: {
     age: 1
   }
 }, {
   returnOriginal: false
 }).then(result => console.log(result))
  
  //db.close()
})