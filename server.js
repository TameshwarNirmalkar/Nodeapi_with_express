var express = require('express');
var env = process.env.NODE_ENV;

var app = express();



var config = require('./server/config/config.js');

require('./server/config/express')(app, config, env);

app.listen(config.port, function () {
    console.log('Express server listening on port ' + config.port);
    console.log('NODE_ENV = ', env ,
        '\n__dirname = ' , __dirname ,
        '\nprocess.cwd = ' + process.cwd());
});