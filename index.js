const express = require('express')
// BODYPARSER
const mongoose = require('mongoose')
const routes = require('./config/routes')

const app = express()
mongoose.connect('mongodb://localhost:27017/cabins-db')

app.use(routes)

app.listen(4000, () => console.log('Cabins are loaded on port 4000'))
