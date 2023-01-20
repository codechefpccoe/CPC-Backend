// Express Router
const express = require('express')
const app = express.Router()


app.get('/', (req, res) => {
    res.send('User API Request Page');
});


module.exports = app