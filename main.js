"use strict";

(async function() { 
    const price = require("./self_modules/cryptoPrice")
    console.log( await price);
}) ();