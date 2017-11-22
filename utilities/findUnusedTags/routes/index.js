/* eslint-disable */
const express = require('express')
const router = express.Router()
const translationController = require('../controllers/translationController')

// Do work here
router.get('/', translationController.processTextBundles)

module.exports = router
