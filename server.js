//* ***********************************************************
//* Memories API Server
//* ***********************************************************
require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/memories');

// killing App Softly :D
const killingAppSoftly = () => {
  process.exit(0);
};

// do something when app is closing
process.once('exit', () => {
  console.log('Normal node exit... terminating server.');
  killingAppSoftly();
});

// catches uncaught exceptions
process.once('uncaughtException', (err) => {
  console.log(`Uncaught exception occoured... ${err}. terminating server.`);
  killingAppSoftly();
});

// catches ctrl+c event
process.once('SIGINT', () => {
  console.log('CTRL+C pressed... terminating server.');
  killingAppSoftly();
});

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// routes
const indexRoutes = require('./api/routes/indexRoutes');
const memoryRoutes = require('./api/routes/memoryRoutes');
const userRoutes = require('./api/routes/userRoutes');

indexRoutes(app);
memoryRoutes(app);
userRoutes(app);


// On 404 send error message
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

app.listen(port);

console.log(`Memories API server started on: ${port}`);

module.exports = app;
