/**
 * Created by e062110 on 6/17/16.
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
const business = require('../data/business.json');

// Todo: Move to its own end-point
router.get('/business/v0/business/customerRanges', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(business.customerRanges);
});

// Returns R4 data currently
router.get('/business/v0/business/categories', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(business.categories);
});

module.exports = router;
