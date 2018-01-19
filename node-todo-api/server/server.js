const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose')
const {Todo} = require("./models/todos") 
const {User} = require("./models/users")

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
  

const port = process.env.PORT || 3000
const ip = process.env.IP

app.listen(port, ip, () => console.log(`App started on port ${port}`))



module.exports = {app}


