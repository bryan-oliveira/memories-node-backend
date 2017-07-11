//************************************************************
//* Memories API Server
//************************************************************

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/userModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/memories');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// On 404 send error message
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/userRoutes');
routes(app);

app.listen(port);


console.log('Memories API server started on: ' + port);