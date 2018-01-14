const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'Brandon',
    likes: ['Coding', 'Technolgy', 'Rodeo']
  });
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/bad', (req, res) => {
  res.send({
    data: {
      errorMessage: 'Unable to handle the request'
    }
  });
});

const port = process.env.PORT || 3000;
const ip = process.env.IP;

app.listen(port, ip, () => {
  console.log(`App started on port ${port}`);
});
