const moment = require('moment')

const generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  }
}

const generateLocationMessage = (from, lat, long) => {
  return {
    from,
    url: `https://google.com/maps/?q=${lat},${long}`,
    createdAt: moment().valueOf()
    
  }
}

module.exports = {generateMessage, generateLocationMessage}