
const ccxt = require('ccxt')
const changePrice = require("./changePriceInDataBase")
// let b = new ccxt.binance()

// const price = getPrice(ccxt, b)


// exchanges.forEach(element => {
    // if(element !== 'bitbns' || element != "aax"|| element !== 'latoken'|| element !== 'bitrue'|| element !== 'lbank') {
    //     console.log(element);
    //     price.push(ticker.getPrice(element))
    // }
    // console.log(element);
//     price.push(getPrice(element));
// });

async function getPrice(exchanges) {
    let price = []
    await Promise.all(exchanges.map(async (element) => {
        // let exchange = getAllechanges(ccxt)
        let exchange = new ccxt[element]({ enablefetchTicker: true, enableRateLimit: true})
        await exchange.loadMarkets()
        let symbols = await getSymbols(element)
        // let base = ['/USDT', '/BUSD', '/USDC', '/DAI', '/TUSD']
        
        // if (exchange.has['fetchTicker']) {
        //     console.log (await (exchange.fetchTicker ('BTC/USDT')))
        // }

        for await(let j of symbols) {
            try {   
                let temp = await (exchange.fetchTicker(j+'/USDT'))
                // price[j].push(symbols[j])
                // price[j].push(temp['last'])
                // price[j].push(temp['symbol'])
                // price[j].push(temp['percentage'])
                temp.pair = j
                temp.exchange = element
                price.push(temp)
                console.log(price);
            } catch (error) {
                // console.log('Error is: ' + error)
            }
        }
        // console.log(element); 
    }));

    changePrice.validateData(price)
    return price
}


function getAllechanges(ccxt) {
    return ccxt.exchanges
}

async function getSymbols(element) {
    const exchangeClass = ccxt[element]
    , b = new exchangeClass()
    await b.loadMarkets()
    let symbols =  b.codes 
    return symbols
} 

exports.getPrice = getPrice
