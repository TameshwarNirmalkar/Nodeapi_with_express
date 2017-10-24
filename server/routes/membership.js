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
const membership = require('../data/membership.json');

// UserData Service
router.get('/membership/v0/userAccounts/me/memberships', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(membership.me);
});

router.get('/membership/v0/organizations/:orgId/memberships', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(membership[req.params.orgId]);
});

module.exports = router;
