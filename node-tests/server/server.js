const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})



const port = process.env.PORT || 3000;
const ip = process.env.IP;

app.listen(port, ip, () => {
  console.log(`App started on port ${port}`);
});

module.exports.app = app