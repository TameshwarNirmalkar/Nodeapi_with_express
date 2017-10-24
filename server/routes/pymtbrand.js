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
const pymtbrand = require('../data/pymtbrand.json');

// Get all countries
router.get('/pymtbrand/v0/payment/paymentBrands', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(pymtbrand);
});

module.exports = router;

