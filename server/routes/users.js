/**
 * Created by e062110 on 6/17/16.
 */
const router = require('express').Router();
const statusCode = require('../utils/helpers.js').statusCodes;
const _ = require('lodash');

//////////
// Data //
//////////
const user = require('../data/membership.json');

// UserData Service
router.get('/users/me/memberships/clientIds/:clientId', function (req, res, next) {

    console.log('Request - Params', req.params);
    console.log('Request - Query', req.query);
    console.log('Request - Body', req.body);

    res.status(statusCode.OK).send(user.me);
});

module.exports = router;
