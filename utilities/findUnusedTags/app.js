/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/index');

// create our Express app
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// After setting up the above middleware, we handle our own routes
app.use('/', routes);

// we export it so we can start the site in start.js
module.exports = app;
