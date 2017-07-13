//* ***********************************************************
//* Memories API Server
//* ***********************************************************

var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/memories')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


var routes = require('./api/routes/userRoutes')
routes(app)

// On 404 send error message
app.use(function (req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('Memories API server started on: ' + port)
