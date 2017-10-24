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
const adminref = require('../data/adminref.json');

// Get all countries
router.get('/adminref/v0/public/portalNotification', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(adminref);
});

module.exports = router;

