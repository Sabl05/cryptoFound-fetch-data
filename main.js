"use strict";

(async function main() { 
    const price = require("./self_modules/cryptoPrice")
    const exchanges = ['binance',
                        'bitfinex',
                        'bitmex',
                        'bybit',
                        'coinbase',
                        'exmo',
                        'ftx',
                        'gateio',
                        'hitbtc',
                        'huobi',
                        'kraken',
                        'kucoin',
                        'mexc',
                        'okcoin',
                        'okex',
                        'poloniex',
                        'yobit']
    price.getPrice(exchanges);
    // const exchanges = require("./self_modules/exchanges")
    // const changePrice = require("./self_modules/changePriceInDataBase")

    // changePrice.validateData(price)
    
    // main()
}) ();