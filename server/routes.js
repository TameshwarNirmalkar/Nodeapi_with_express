const router = require('express').Router();
const four0four = require('./utils/404')();
const fs = require('file-system');
const path = require("path");

fs.recurseSync(path.join(__dirname, "/routes/"), function(filepath, relative, filename) {
    if (!filename) return;
    router.use('/', require('./routes/' + filename));
});

//Catch all route
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;
