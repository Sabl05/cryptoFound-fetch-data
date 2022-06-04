const ccxt = require('ccxt')
const exchanges = getAllexchange(ccxt)
module.exports = exchanges

function getAllexchange(ccxt) {
    return ccxt.exchanges
}