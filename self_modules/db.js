const { Client } = require('pg')
const client = new Client({
  user: 'pguser',
  host: 'localhost',
  database: '_CRYPTO_CURRENCY_',
  password: '123',
  port: 5432,
})
client.connect(function(err) {
  if (err) {throw err}
  console.log("Connected!");
});

module.exports = client