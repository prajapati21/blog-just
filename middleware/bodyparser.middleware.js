const body = require("body-parser");
const urlEncoded = body.urlencoded({extended:false});
const jsonEncoded = body.json();

module.exports = { 
    urlEncoded : urlEncoded,
    jsonEncoded : jsonEncoded,
}