const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const { port, dbUri } = require('./config/environment')

const app = express()
mongoose.connect(dbUri)

app.use(bodyParser.json())
app.use('/api', routes)
app.use(errorHandler)
app.use(express.static(`${__dirname}/dist`))

app.listen(port, () => console.log('Cabins are loaded on port 4000'))
