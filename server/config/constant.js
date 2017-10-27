const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const JSON_SERVER_PORT = process.env.JSONSERVER || 3006;
const BASE_ADDRESS = 'http://'+HOST+':'+PORT;
const JSON_SERVER_ADDRESS = 'http://'+HOST+':'+JSON_SERVER_PORT;
module.exports = {
    "PORT": PORT,
    "HOST": HOST,
    "BASE_ADDRESS": BASE_ADDRESS,
    "HEADERS": [{
        name: 'content-type',
        value: 'application/json'
    }],
    "JSON_SERVER_PORT": JSON_SERVER_PORT,
    "JSON_SERVER_ADDRESS": JSON_SERVER_ADDRESS
};