const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todos');
const { User } = require('./models/users');
const { authenticate } = require('./middleware/authenticate');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Todo's Api");
});

app.post('/todos', authenticate, (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    _creator: req.user._id
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get('/todos', authenticate, (req, res) => {
  Todo.find({
      _creator: req.user._id
  }).then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get('/todos/:id', authenticate, (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.send('ID is invalid');
  } else {
    Todo.findOne({
      _id: id,
      _creator: req.user._id
    }).then(
      todo => {
        if (!todo) {
          return res.send('No Todo found matching that ID');
        }
        res.send({ todo });
      },
      e => {
        res.status(400).send(e);
      }
    );
  }
});

app.delete('/todos/:id', authenticate, async (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404);
  } else {
    try {
      
      const todo = await Todo.findOneAndRemove({
      _id: id,
      _creator: req.user.id
    })
      if (!todo) {
          res.status(404);
        }
      
      res.send(todo);
    
    } catch(e){
      res.status(404).send(e);
    }
  }
});

app.patch('/todos/:id', authenticate, (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404);
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findOneAndUpdate(
    {
      _id: id,
      _creator: req.user.id
    },
    {
      $set: body
    },
    {
      new: true
    }
  )
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.post('/users', async (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);
  
  try {
    await user.save()
    const token = await user.generateAuthToken();
    res.header('x-auth', token).send(user);
  } catch(e) {
    res.status(400).send(e)
  }
  
});

app.post('/users/login', async (req, res) => {
  try {
    const body = _.pick(req.body, ['email', 'password']);
    const user = await User.findByCredentials(body.email, body.password)
    const token = await user.generateAuthToken()
    res.header('x-auth', token).send(user);
  } catch(e){
     res.status(400).send();
  }
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.delete('/users/me/token', authenticate, async (req, res) => {
  try{
    await req.user.removeToken(req.token)
    res.status(200).send()
  } catch(e){
    res.status(400).send()
  }
})


const port = process.env.PORT || 3000;
const ip = process.env.IP;

app.listen(port, ip, () => console.log(`App started on port ${port}`));

module.exports = { app };
