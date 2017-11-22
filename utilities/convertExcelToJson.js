var node_xj = require("xls-to-json");
node_xj({
    input: "locale/textBundle.xls",                     // input xls
    output: "../client/locale/en_US/textBundle.json",   // output json
    sheet: "en_US"                                      // specific sheetname
}, function(err, result) {
    if(err) {
        console.error(err); // eslint-disable-line no-console
    } else {
        console.log(result); // eslint-disable-line no-console
    }
});
