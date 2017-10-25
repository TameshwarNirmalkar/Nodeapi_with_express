const router = require('express').Router();
const four0four = require('./utils/404')();
const fs = require('file-system');
const path = require("path");
console.log('Path paramater ', require("path").join(__dirname, "/routes"), '\n' );

fs.recurseSync(path.join(__dirname, "/routes/"), function(filepath, relative, filename) {
    if (!filename) return;
    router.use('/', require('./routes/' + filename));
});
// fs.readdirSync(__dirname + '/').forEach(function(file) {
//     if (file.match(/\.js$/) !== null && file !== 'index.js') {
//       var name = file.replace('.js', '');
//       exports[name] = require('./' + file);
//     }
// });

//Catch all route
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;
