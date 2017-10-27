var express = require('express');
var env = process.env.NODE_ENV;

var app = express(); // uncomment for without json-server

const jsonServer = require('json-server');
const Promise = require('bluebird');
const blueBirdPromiseAll = Promise.all;
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const _ = require('lodash'); 
const APP_CONSTANT = require('./server/config/constant.js'); 

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})


var config = require('./server/config/config.js');

require('./server/config/express')(app, config, env); //(app) pass without json-server

app.listen(config.port, function () {
    console.log('Express server listening on port http://localhost:' + config.port);
    console.log('NODE_ENV = ', env ,
        '\n__dirname = ' , __dirname ,
        '\nprocess.cwd = ' + process.cwd());
});