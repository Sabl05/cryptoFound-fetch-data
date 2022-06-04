const db = require('./db')

function validateData(data) {
  var exchange = "binance"
  var query = "DELETE FROM crypto_currency;"
  // var query = ""
  data.forEach(element => {
    query += "INSERT INTO crypto_currency(symbol, pair, price_24h, vol, exchange, price)" +
    "VALUES('"+ element['pair'] +"', '"+ element['symbol'] +"', '"+ element['percentage'] +"', "+ element['quoteVolume'] +", '"+ exchange +"', "+ element['last'] +");"
  })

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

// function deleteData() {
//     db.query("DELETE FROM crypto_currency;", 
//     (err, res) => {
//       console.log(err, res);
//       // db.end();
//     });
// }

exports.validateData = validateData