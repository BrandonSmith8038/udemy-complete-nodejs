const express = require('express');
const hbs = require('hbs')

const app = express();

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  /*res.send({
    name: 'Brandon',
    likes: ['Coding', 'Technolgy', 'Rodeo']
  });*/
  res.render('home', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to my awesome express site'
  })
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  })
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
