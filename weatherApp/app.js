const request = require('request')
const yargs = require('yargs')


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

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true,
}, (error, response, body) => {
  if(error){
    console.log('Unable to connect to Google Services')
  } else if(body.status === 'ZERO_RESULTS') {
    console.log('Unable find that adress')
  } else if (body.status === 'OK') {
    console.log('Address', JSON.stringify(body.results[0].formatted_address, undefined, 2))
    console.log('LATTITUDE', JSON.stringify(body.results[0].geometry.location.lat, undefined, 2))
    console.log('LONGTITUDE', JSON.stringify(body.results[0].geometry.location.lng, undefined, 2))
  }
})