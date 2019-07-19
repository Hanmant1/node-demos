const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast');

const address = process.argv[2];
if (!address) {
   console.log('Please provide an address');
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log('Error ' + error);
        }
        forcast(latitude, longitude, (error, {summary, apparentTemperature, precipProbability}) => {
            if (error) {
                return console.log('Error' + error);
            }
            console.log(location);
            console.log(summary + " It is currently " + apparentTemperature + " degree out. There is a " + precipProbability + " % chance of rain.");
        });
    });
}