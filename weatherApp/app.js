/*const yargs = require('yargs')

const geocode = require('./geocode/geocode')
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

geocode.geocodeAdress(argv.address,(errorMessage, results) => {
  if(errorMessage){
  console.log(errorMessage)
  } else {
  console.log(JSON.stringify(results, undefined, 2))
  }
})

*/
const request = require('request')

request({
  url: 'https://api.darksky.net/forecast/e04f6c49479e2bfa1c849fcd48d6d6e1/33.443341151,-112.4091489',
  json: true
},(error, response, body) => {
  if(!error && response.statusCode === 200){
    console.log(body.currently.temperature)
  } else {
    console.log('Unable To Fetch The Weather')
  }
})