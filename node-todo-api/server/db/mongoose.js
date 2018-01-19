const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://cowboy8038:Nascar8038@ds127801.mlab.com:27801/complete-nodejs-todolist')

module.exports = ({mongoose})