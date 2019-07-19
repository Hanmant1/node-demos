const request = require('request');

const forcast = (lat, long, callback) => {
    //darksky API
    const url = 'https://api.darksky.net/forecast/a180f59a5bedacb7ff8ccc3545034b63/' + lat + ',' + long;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                "summary": body.daily.data[0].summary,
                "apparentTemperature": body.currently.apparentTemperature,
                "precipProbability": body.currently.precipProbability
            });
        }
    });
}

module.exports = forcast;