const ccxt = require('ccxt')
const exchanges = getAllechanges(ccxt)
module.exports = exchanges

function getAllechanges(ccxt) {
    return ccxt.exchanges
}