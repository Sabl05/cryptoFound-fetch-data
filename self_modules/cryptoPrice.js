
const ccxt = require('ccxt')
let b = new ccxt.binance()

const price = getSymbols(b)

module.exports = price.l

async function getPrice(ccxt, b) {
    let exchange = getAllechanges(ccxt)
    let symbols = getSymbols(b)
    let price = []

    for (let i = 0; i < exchange.length; i++) {
        for (let j = 0; j < symbols.length; j++) {
            let tempExchangeId = exchange[i]
            let tempExchange = new ccxt[tempExchangeId]()
            await tempExchange.loadMarkets()
            price.push(tempExchange.market(symbols[j]))
        }
    }
    return price;
}


function getAllechanges(ccxt) {
    return ccxt.exchanges
}

async function getSymbols(b) {
    await b.loadMarkets()
    let symbols =  b.symbols 
    return symbols
}   

//lucid