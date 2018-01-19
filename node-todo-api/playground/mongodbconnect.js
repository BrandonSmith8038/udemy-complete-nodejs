//const MongoClient =  require('mongodb').MongoClient
const {MongoClient, ObjectID} =  require('mongodb')

MongoClient.connect('mongodb://cowboy8038:Nascar8038@ds127801.mlab.com:27801/complete-nodejs-todolist', (err, db) => {
  if(err){
    return console.log('Unable to Connect To DB')
  }
  console.log('Connected To MongoDB server')
  
  db.collection('Todos').insertOne({
    
    'text': 'Todo Item 2',
    'completed': 'True'
    
  }, (err, result) => {
    
    if(err){
      return console.log('Unable to insert todo', err)
    }
    
    console.log(JSON.stringify(result.ops, undefined, 2))
  })
  
  /*db.collection('Users').insertOne({
    'name': 'Amber',
    'age': 33,
    'location': 'Amarillo, TX'
  }, (err, result) => {
    if(err){
      return console.log('Unable to add user', err)
    }
    console.log(result.ops[0]._id.getTimestamp())
  })*/
  
  db.close()
})