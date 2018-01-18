const geocodeAdress = (address, callback) => {
<<<<<<< HEAD
  const request = require('request')
  
  const encodedAddress = address
  
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true,
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to Google Services')
    } else if(body.status === 'ZERO_RESULTS') {
      callback('Unable find that adress')
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lattitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    }
  })
}

module.exports = {
  geocodeAdress
}
=======
  const request = require('request');

  const encodedAddress = address;

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback('Unable to connect to Google Services');
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable find that adress');
      } else if (body.status === 'OK') {
        callback(undefined, {
          address: body.results[0].formatted_address,
          lattitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};

module.exports = {
  geocodeAdress
};
>>>>>>> c14581a9ba8424847bb9c2fba92f93ab564438aa
