const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast');
const app = express();
const port = process.env.PORT || 3000;
//Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setting handlers engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// setting static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Hanmant Jankar',
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Hanmant Jankar',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some help text',
        title: 'Help',
        name: 'Hanmant Jankar',
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Hanmant jankar',
        errorMessage: 'Help article not found'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must to provide address term'
        });
    }

    console.log(req.query.address);
    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error: error });
        }
        forcast(latitude, longitude, (e, { summary, apparentTemperature, precipProbability }) => {
            if (e) {
                return res.send({ error: e });
            }
            console.log(location);
            const forecast = summary + " It is currently " + apparentTemperature + " degree out. There is a " + precipProbability + " % chance of rain.";
            res.send({
                forecast: forecast,
                location: location,
                address: req.query.address
            })
        });
    });
});

app.get('/product', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must to provide search term"
        });
    }

    console.log(req.query.search);
    res.send({
        products: []
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Hanmant jankar',
        errorMessage: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up port' + port);
});
