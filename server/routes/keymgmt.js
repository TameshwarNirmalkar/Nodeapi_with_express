const router = require('express').Router();
const log = require('../utils/helpers.js').logRequest;
const _ = require('lodash');

///////////
// Debug //
///////////
const debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
const keymgmt2 = require('../data/keymgmt2.json');

router.get('/keymgmt/v0/organizations/:orgId/keys', function (req, res) {
    if(debug) log(req);

    let keys = keymgmt2;

    if(req.query.environment){
        keys = _.filter(keys, function(key){
            return req.query.environment == key.environment;
        })
    }

    res.status(200).send(keys);
});

router.get('/keymgmt/v0/organizations/:orgId/keys/:keyId/sandbox-private-key/:fileName', function(req, res) {
    if(debug) log(req);

    const file = '../masterpass.parent.ui/server/utils/downloadTestFile.txt';
    res.download(file, req.params.fileName); // Set disposition and send it.
});

router.get('/keymgmt/v0/organizations/:orgId/keys/:keyId/signed-certificate/:fileName', function(req, res) {
    if(debug) log(req);
    // ?file-type={{fileType}

    res.status(200).send({});
});

router.post('/keymgmt/v0/organizations/:orgId/keys', function (req, res) {
    if(debug) log(req);

    res.status(200).send({});
});

router.put('/keymgmt/v0/organizations/:orgId/keys/:keyId', function (req, res) {
    if(debug) log(req);

    res.status(200).send({});
});

router.delete('/keymgmt/v0/organizations/:orgId/keys/:keyId', function (req, res) {
    if(debug) log(req);

    res.status(200).send({});
});

router.get('/keymgmt/v0/developers/me/key-links/legacy-keys-flag', function (req, res) {
    console.log('Request - Params', req.params);
    console.log('Request - Query', req.query);
    console.log('Request - Body', req.body);
    //res.status(404).send({});
    res.status(200).send({ "hasLegacyKeyLinks": true });
});

/*****************
 *  vv  OLD  vv  *
 *****************/
const keymgmt = require('../data/keymgmt.json');
const keyLinks = require('../data/keyLinks.json');
// KeyManagement Services
router.get('/keymgmt/v0/user/me/organizations', function(req, res) {
    res.status(200).send([
        {"id": "org1",
        "name": "First Org",
        "type": "MERCHANT"},
        {"id": "org2",
        "name": "Second Org",
        "type": "SERVICE_PROVIDER"}
    ]);
});

router.get('/keymgmt/v0/organizations/:orgId/keyLinks/:keyLinkAction', function (req, res) {
    if(debug) log(req);

    res.status(200).send({});
});

router.get('/keymgmt/v0/organizations/:orgId/developers', function (req, res) {
    if(debug) log(req);

    res.status(200).send(keymgmt[req.params.orgId]);
});

router.get('/keymgmt/v0/developers/:developerId/keyLinks', function (req, res) {
    if(debug) log(req);

    res.status(200).send(keyLinks);
});

router.get('/keymgmt/v0/developers/me/keys', function (req, res) {
    if(debug) log(req);

    res.status(200).send({});
});

router.get('/keymgmt/v0/developers/:mpUserId', function (req, res) {
    if(debug) log(req);

    res.status(200).send({});
});

router.get('/keymgmt/v0/tokenServices/requestToken', function (req, res) {
    if(debug) log(req);

    res.status(200).send({});
});

router.get('/keymgmt/v0/tokenServices/authVerifier', function (req, res) {
    if(debug) log(req);

    res.status(200).send({});
});

router.get('/keymgmt/v0/...', function (req, res) {
    if(debug) log(req);

    res.status(200).send({});
});

router.get('/keymgmt/v0/...', function (req, res) {
    if(debug) log(req);

    res.status(200).send({});
});



module.exports = router;
