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
const fbu = require('../data/fbu.json');

// UserData Service
router.get('/fbu/v0/ui/organizations/:orgId/projects', function (req, res) {
    res.status(statusCode.OK).json(fbu.projects);
})

router.post('/fbu/v0/ui/organizations/:orgId/projects', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send({});
});

router.post('/fbu/v0/ui/organizations/:orgId/files', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send({});
});

router.post('/fbu/v0/ui/files/validation', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send({});
});

router.get('/fbu/v0/ui/organizations/:orgId/projects/:projectId/files', function(req, res) {
    res.status(statusCode.OK).json(fbu.files);
})

module.exports = router;
