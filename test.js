// "use strict";

// const ccxt      = require ('ccxt')
// const asTable   = require ('as-table')
// const log       = require ('ololog').configure ({ locate: false })

// require ('ansicolor').nice

// //-----------------------------------------------------------------------------

// process.on ('uncaughtException',  e => { log.bright.red.error (e); process.exit (1) })
// process.on ('unhandledRejection', e => { log.bright.red.error (e); process.exit (1) })

// //-----------------------------------------------------------------------------

// let test = async function (exchange) {

//     try {

//         await exchange.loadMarkets ()
//         log (exchange.id.green, 'loaded', exchange.symbols.length.toString ().bright.green, 'symbols')

//     } catch (e) {

//         if (e instanceof ccxt.DDoSProtection) {
//             log.bright.yellow (exchange.id, '[DDoS Protection] ' + e.message)
//         } else if (e instanceof ccxt.RequestTimeout) {
//             log.bright.yellow (exchange.id, '[Request Timeout] ' + e.message)
//         } else if (e instanceof ccxt.AuthenticationError) {
//             log.bright.yellow (exchange.id, '[Authentication Error] ' + e.message)
//         } else if (e instanceof ccxt.ExchangeNotAvailable) {
//             log.bright.yellow (exchange.id, '[Exchange Not Available] ' + e.message)
//         } else if (e instanceof ccxt.ExchangeError) {
//             log.bright.yellow (exchange.id, '[Exchange Error] ' + e.message)
//         } else if (e instanceof ccxt.NetworkError) {
//             log.bright.yellow (exchange.id, '[Network Error] ' + e.message)
//         } else {
//             throw e 
//         }
//     }
// }

// //-----------------------------------------------------------------------------

// // let exchanges = []

// async function main () {

//     // instantiate all exchanges
//     await Promise.all (ccxt.exchanges.map (async id => {
//         let exchange = new (ccxt)[id] ()
//         exchanges.push (exchange)
//         await test (exchange)
//     }))

//     let succeeded = exchanges.filter (exchange => exchange.markets ? true : false).length.toString ().bright.green
//     let failed = exchanges.filter (exchange => exchange.markets ? false : true).length
//     let total = ccxt.exchanges.length.toString ().bright.white
//     let numSymbols = 0;
//     exchanges.map (exchange => {
//         numSymbols += exchange.symbols ? exchange.symbols.length : 0;
//     })
//     log (numSymbols, 'symbols from', succeeded, 'of', total, 'exchanges loaded', ('(' + failed + ' errors)').red)

// }

// main ()

// (async function main() { 
//     const ccxt = require('ccxt')
//     let b = new ccxt.binance()

//     await b.loadMarkets()
//     let symbols =  b.codes 
//     console.log(symbols);
// }) ();




// const exchanges = ['binance',
//                         'bitfinex',
//                         'bitmex',
//                         'bybit',
//                         'coinbase',
//                         'exmo',
//                         'ftx',
//                         'gateio',
//                         'hitbtc',
//                         'huobi',
//                         'kraken',
//                         'kucoin',
//                         'mexc',
//                         'okcoin',
//                         'okex',
//                         'poloniex',
//                         'yobit']


let x = 'dsadasdsa'

x = validateUndefinedValue(x)
console.log(x);

function validateUndefinedValue(value) {
    switch (value) {
      case undefined:
        value = null
        break;
    }

    return value
}