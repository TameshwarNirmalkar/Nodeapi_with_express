/**
 * Created by e062110 on 8/1/16.
 */

const router = require('express').Router();
const statusCode = require('../utils/helpers.js').statusCodes;
const log = require('../utils/helpers.js').logRequest;
//const _ = require('lodash');

///////////
// Debug //
///////////
const debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
const acquirers = require('../data/acquirer.json');

// Get all countries
router.get('/acquirer/v0/acquirers', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(acquirers);
});

module.exports = router;

