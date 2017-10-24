/**
 * Created by e062110 on 11/22/16.
 */
const router = require('express').Router();
const statusCode = require('../utils/helpers.js').statusCodes;
const log = require('../utils/helpers.js').logRequest;
const _ = require('lodash');

///////////
// Debug //
///////////
const debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
const branding = require('../data/branding.json');
const brands = branding.brands;
const channels = branding.channels;
const origins = branding.originUrls;

// getAllBrands
router.get('/branding/v0/organizations/:orgId/brands', function (req, res) {
    if(debug) log(req);

    res.send(brands[req.params.orgId]);
});

// getBrand
router.get('/branding/v0/organizations/:orgId/brands/:brandingCode', function (req, res) {
    if(debug) log(req);

    const brand = _.find(brands[req.params.orgId].brands, function(i){
        return (i.brandingCode == req.params.brandingCode);
    });

    res.send(brand);
});

// addBrand
router.post('/branding/v0/organizations/:orgId/brands', function (req, res) {
    if(debug) log(req);

    req.body.brandingCode = Date.now().toString();
    brands[req.params.orgId].brands.push(req.body);

    res.status(statusCode.OK).send({});
});

// editBrand
router.put('/branding/v0/organizations/:orgId/brands/:brandingCode', function (req, res) {
    if(debug) log(req);

    brands[req.params.orgId].brands = _.reject(brands[req.params.orgId].brands, function(i){
        return i.brandingCode == req.params.brandingCode;
    });
    brands[req.params.orgId].brands.push(req.body);

    res.status(statusCode.OK).send({});
});

// getAllOriginUrls
router.get('/branding/v0/organizations/:orgId/originUrls', function (req, res) {
    if(debug) log(req);

    res.send(origins);
});

// addOriginUrls
router.post('/branding/v0/organizations/:orgId/originUrls', function (req, res) {
     if(debug) log(req);

    req.body.originUrlId = Date.now().toString();
    origins.originUrls.push(req.body);

    res.status(statusCode.OK).send({});
});

// deleteOriginUrls
router.delete('/branding/v0/organizations/:orgId/originUrls/:originUrlId', function (req, res) {
    if(debug) log(req);

    origins.originUrls = _.reject(origins.originUrls, function(i){
        return i.originUrlId == req.params.originUrlId;
    });

    res.status(statusCode.OK).send({});
});

//getAllChannels
router.get('/branding/v0/channels', function (req, res) {
    if(debug) log(req);

    res.send(channels);
});



module.exports = router;
