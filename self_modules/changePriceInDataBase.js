let db = require('./db')

function validateData(data) {
  // var exchange = "binance"
  var query = "DELETE FROM crypto_currency;"
  // var query = ""
  for (let element of data) {
    element['pair']         = validateUndefinedValue(element['pair'])
    element['symbol']       = validateUndefinedValue(element['symbol'])
    element['last']         = validateUndefinedValueFloat(element['last'])
    element['percentage']   = validateUndefinedValue(element['percentage'])
    element['quoteVolume']  = validateUndefinedValueFloat(element['quoteVolume'])
    element['exchange']     = validateUndefinedValue(element['exchange'])

    query += "INSERT INTO crypto_currency(symbol, pair, price, price_24h, vol, exchange)" +
    "VALUES('"+ element['pair'] +"', '"+ element['symbol'] +"', "+ element['last'] +", '"+ element['percentage'] +"', "+ element['quoteVolume'] +", '"+ element['exchange'] +"');"
  }

  return insertData(query)
}

function insertData(query) {
    db.query(
        query,
        (err, res) => {
          console.log(err, res);
          db.end();
        }
    );
}

function validateUndefinedValue(value) {
  switch (value) {
    case undefined:
      value = null
      break;
  }

  return value
}

function validateUndefinedValueFloat(value) {
  switch (value) {
    case undefined:
      value = 0.00
      break;
  }

  return value
}


// function deleteData() {
//     db.query("DELETE FROM crypto_currency;", 
//     (err, res) => {
//       console.log(err, res);
//       // db.end();
//     });
// }

exports.validateData = validateData