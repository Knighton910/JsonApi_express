/**
 * @desc :example API Versioning
 * Version 1 of your API
 */
const express = require('express')
const apiV1 = express.Router()

apiV1.get('/timezone', (req, res) => {
    res.send('Sample response for /timezone')
})

apiV1.get('/all_timezones', (req, res) => {
    res.send('Sample response for /all_timezones')
})

module.exports = apiV1
