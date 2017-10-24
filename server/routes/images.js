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
const images = require('../data/images.json');

// Get all countries
router.post('/images/v0/organizations/:orgId/logos', function (req, res) {
    if(debug) log(req);

    res
    .append('Access-Control-Expose-Headers', 'location')
    .append('location', images.location)
    .status(statusCode.OK)
    .send(images);
});

module.exports = router;
