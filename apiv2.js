const express = require('express')
const apiV2 = express.Router()

apiV2.get('/timezone', (req, res) => {
    res.send('API 2: super cool new response for /timezone')
})

module.exports = apiV2
