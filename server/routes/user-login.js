/**
 * Created by e062110 on 7/7/16.
 */
/**
 * Created by e062110 on 6/17/16.
 */
const router = require('express').Router();
const log = require('../utils/helpers.js').logRequest;
//const _ = require('lodash');

///////////
// Debug //
///////////
const debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
const userLogin = require('../data/user-login.json');

// UserData Service
router.get('/user-login/mpass_userlogin.action?requestToken=', function (req, res) {
    if(debug) log(req);

    res.status(200).send(userLogin);
});

module.exports = router;
