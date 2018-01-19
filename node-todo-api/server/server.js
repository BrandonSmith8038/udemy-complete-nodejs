const express = require('express')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todos') 
const {User} = require('./models/users')

const app = express()

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Todo\'s Api')
})

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  })
  
    todo.save().then(doc => {
      res.send(doc)
    }, e => {
      res.status(400).send(e)
    })
})

app.get('/todos', (req, res) => {
  Todo.find().then(todos => {
    res.send({todos})
  }, e => {
    res.status(400).send(e)
  })
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id
  
  if(!ObjectID.isValid(id)){
    res.send('ID is invalid')
  } else {
    Todo.findById(id).then(todo => {
      if(!todo){
        return res.send('No Todo found matching that ID')
      }
    res.send({todo})
  }, e => {
    res.status(400).send(e)
  })
  }
})

app.delete('/todos/:id',(req, res) => {
  const id = req.params.id
  
  if(!ObjectID.isValid(id)){
    return res.status(404)
  } else {
    Todo.findByIdAndRemove('5a61eab4f4c6883e7e0268ec').then(todo => {
      if(!todo){
        res.status(404)
      }
      res.send(todo)
    }, e => {
    res.status(404).send(e)
  })
  }
})
  

const port = process.env.PORT || 3000
const ip = process.env.IP

app.listen(port, ip, () => console.log(`App started on port ${port}`))



module.exports = {app}


