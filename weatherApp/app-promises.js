const yargs = require('yargs');
const axios = require('axios');
const key = require('./key');

const apiKey = key.keys.forcast;

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
  .alias('help', 'h').argv;

const encodedAddress = argv.address;
const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios
  .get(geocodeURL)
  .then(response => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address');
    }
    // console.log(response.data.results[0]);
    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/e04f6c49479e2bfa1c849fcd48d6d6e1/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    })
    return axios.get(weatherUrl).then(response => {
      const temperature = response.data.currently.temperature;
      const apparentTemperature = response.data.currently.apparentTemperature;

      console.log(
        `It's currently ${temperature}. It feels like ${apparentTemperature}`
      );
    });
  
  .catch(err => {
    if (err.code === 'ENOTFOUND') {
      console.log('Unable To Connect To API Service');
    } else {
      console.log(err.message);
    }
  });
