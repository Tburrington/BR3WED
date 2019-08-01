const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const yelpController = require('./controllers/yelpController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

/* Create a route for when a particular location is searched */

app.use('/build', express.static(path.resolve(__dirname, 'bundle.js')));

app.use('/images', express.static(path.resolve(__dirname, 'images')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
})

app.get('/home/:location', yelpController.getCoffeeShops, (req, res) => {
    // console.log(res.locals.coffeeShops);


    res.status(200).json(res.locals.coffeeShops);

})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;