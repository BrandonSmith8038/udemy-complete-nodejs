const yargs = require('yargs')
const axios = require('axios')
const key = require('./key')

const apiKey = key.keys.forcast

const argv = yargs
  .options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv

const encodedAddress = argv.address
const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeURL).then((response) => {
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find that address')
  }
  console.log(response.data)
}).catch(err => {
  if(err.code === 'ENOTFOUND'){
    console.log('Unable To Connect To API Service')
  } else {
    console.log(err.message)
  }
})
