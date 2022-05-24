"use strict";

(async function main() { 
    const price = await require("./self_modules/cryptoPrice")
    // const exchanges = require("./self_modules/exchanges")
    const changePrice = require("./self_modules/changePriceInDataBase")

    changePrice.validateData(price)
    
    // main()
}) ();