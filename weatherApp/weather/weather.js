const request = require('request');

const getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/e04f6c49479e2bfa1c849fcd48d6d6e1/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        callback('Unable To Get The Weather');
      }
    }
  );
};

module.exports = {
  getWeather
};
