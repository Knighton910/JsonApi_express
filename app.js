const express = require('express')
const logger = require('morgan')

const apiV1 = require('./apiv1.js')
const apiV2 = require('./apiv2.js')

const app = express()

// 3rd party 🎉 Logger middleware
app.use(logger('tiny'))

/**
 * @desc :example api versioning routes
 * how to use versioning in your apis
 */
app.use('/v1', apiV1)
app.use('/v2', apiV2)

/**
 * @desc :example Route-Handler for hits to this EndPoint
 * It check the Request params for input & send info back
 * in the form of Json
 */
app.get('/random/:min/:max/:word', (req, res) => {
    const min = parseInt(req.params.min)
    const max = parseInt(req.params.max)
    const greeting = req.params.word

    if (isNaN(min) || isNaN(max)) {
        res.status(400)
        res.json({ error: 'Bad request.' })
        return
    }

    const result = Math.round(Math.random() * (max - min) + min)
    // playing with
    res.json({
        result: result,
        word: greeting,
    })
})

/**
 * @desc :example for api C.R.U.D operations
 */
app.get('/', (req, res) => {
    res.end('you just send a GET request, friend')
})

app.post('/', (req, res) => {
    res.send('a POST request? nice')
})

app.put('/', (req, res) => {
    res.send("i don't see a lot of PUT request anymore")
})

app.delete('/', (req, res) => {
    res.send('oh my, a DELETE?')
})

app.listen(3000, () => console.log('App is running @ port 3000'))
