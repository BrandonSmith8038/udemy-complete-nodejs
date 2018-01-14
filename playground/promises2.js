const request = require('request');

const geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject('Unable to connect to Google Services');
        } else if (body.status === 'ZERO_RESULTS') {
          reject('Unable find that adress');
        } else if (body.status === 'OK') {
          resolve({
            address: body.results[0].formatted_address,
            lattitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        }
      }
    );
  });
};

geocodeAddress('16277 W. Jackson Goodyear AZ')
  .then(result => console.log(result))
  .catch(err => console.log(err));
