const router = require('express').Router();
const statusCode = require('../utils/helpers.js').statusCodes;
const log = require('../utils/helpers.js').logRequest;
const request = require('request');
const rp = require('request-promise');
// const bodyParser = require('body-parser');
const Promise = require('bluebird');
// const PromiseInstance = Promise.promisify();
// const blueBirdPromiseAll = Promise.all;
const _ = require('lodash');
const APP_CONSTANT = require('../config/constant.js');

///////////
// Debug //
///////////
const debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
// const business = require('../data/business.json');

router.get('/business/v0/business/customerRanges', function (req, res) {
    if (debug) log(req);
    // request({
    //     method: 'GET',
    //     uri: APP_CONSTANT.JSON_SERVER_ADDRESS + '/customerRanges',
    //     headers: APP_CONSTANT.HEADERS
    // }, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         res.status(statusCode.OK).send(JSON.parse(body));
    //     } else {
    //         res.status(statusCode.InternalServerError).send("Internal Server Error", error);
    //     }
    // })
    rp(APP_CONSTANT.JSON_SERVER_ADDRESS + '/customerRanges').then(
        (response) => res.status(statusCode.OK).send( JSON.parse(response) )
    )    
});

router.get('/business/v0/business/categories', function (req, res) {
    if (debug) log(req);
    // res.status(statusCode.OK).send(business.categories);
    // request({
    //     method: 'GET',
    //     uri: APP_CONSTANT.JSON_SERVER_ADDRESS + '/categories',
    //     headers: APP_CONSTANT.HEADERS
    // }, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         res.status(statusCode.OK).send(JSON.parse(body));
    //     } else {
    //         res.status(statusCode.InternalServerError).send("Internal Server Error", error);
    //     }
    // })
    rp(APP_CONSTANT.JSON_SERVER_ADDRESS + '/categories').then( 
        (rs) => res.status(statusCode.OK).send(JSON.parse(rs))
    ).catch(function (err) {
        (er) => res.status(er.code).send(JSON.parse(er))
    });
});

module.exports = router;