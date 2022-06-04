
const ccxt = require('ccxt')
let b = new ccxt.binance()

const price = getPrice(ccxt, b)

module.exports = price

async function getPrice(ccxt, b) {
    // let exchange = getAllechanges(ccxt)
    let exchange = new ccxt['binance']({ enableRateLimit: true })
    await exchange.loadMarkets()
    let symbols = await getSymbols(b)
    let price = []
    let base = ['/USDT', '/BUSD', '/USDC', '/DAI', '/TUSD']
    
    // if (exchange.has['fetchTicker']) {
    //     console.log (await (exchange.fetchTicker ('BTC/USDT')))
    // }

    for (let j = 0; j < symbols.length; j++) {
        try {   
            let temp = await (exchange.fetchTicker(symbols[j]+'/BUSD'))
            // price[j].push(symbols[j])
            // price[j].push(temp['last'])
            // price[j].push(temp['symbol'])
            // price[j].push(temp['percentage'])
            temp.pair = symbols[j]
            price.push(temp)
            console.log(price)   
        } catch (error) {
            console.log('Error is: ' + error)
        }
        
    }
    // console.log(price);

    return price
}


function getAllechanges(ccxt) {
    return ccxt.exchanges
}

async function getSymbols(b) {
    await b.loadMarkets()
    let symbols =  b.codes 
    return symbols
} 
