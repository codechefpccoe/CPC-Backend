// Express Router
const express = require('express')
const app = express.Router()


app.get('/', (req, res) => {
    res.send('Event Page');
});


module.exports = app