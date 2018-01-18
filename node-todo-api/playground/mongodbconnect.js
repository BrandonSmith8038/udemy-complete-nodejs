const MongoClient =  require('mongodb').MongoClient

MongoClient.connect('mongodb://cowboy8038:Nascar8038@ds127801.mlab.com:27801/complete-nodejs-todolist', (err, db) => {
  if(err){
    return console.log('Unable to Connect To DB')
  }
  console.log('Connected To MongoDB server')
  
  // db.collection('Todos').insertOne({
    
  //   'text': 'Something To Do',
  //   'completed': 'false'
    
  // }, (err, result) => {
    
  //   if(err){
  //     return console.log('Unable to insert todo', err)
  //   }
    
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })
  
  db.collection('Users').insertOne({
    'name': 'Brandon',
    'age': 32,
    'location': 'Goodyear, AZ'
  }, (err, result) => {
    if(err){
      return console.log('Unable to add user', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })
  
  db.close()
})