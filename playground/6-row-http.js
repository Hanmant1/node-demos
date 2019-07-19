// build in node npm package i.e. http, https
// it is returning data in buffer format chunks not whole data, 
// we need to explicity convert into string and json format
// need to write extra event i.e. data, end, error etc
// data event call multiple time and once data end then end event will called.
// if error occured in request then error event will called.
const https = require('https');

const url = 'https://api.darksky.net/forecast/a180f59a5bedacb7ff8ccc3545034b63/40,-75';

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString(); // convert buffer to string
    });

    response.on('end', () => {
        console.log(JSON.parse(data));
    })

});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();
