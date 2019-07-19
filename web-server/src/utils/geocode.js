const request = require('request');

const geocode = (address, callback) => {
    // Mapbox API
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaGFubWFudDEiLCJhIjoiY2p5NzJrZms3MG16YTNnazl0YTZudjJ4byJ9.4pKrAJAhP7zqe8_pcgZesA';

    request({ url, json: true }, (error, { body } ) => {
        if (error) {
            callback('unable to connect to location service', undefined);
        } else if (body.features.length === 0) {
            console.log('unable to find location, Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;