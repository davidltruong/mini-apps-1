const express = require('express')
const mysql = require('mysql');
const app = express()
const port = 3000

let db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'checkout'
});



app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/checkout', (req, res) => {
  let obj = req.body;
  db.connect(function(err) {
    if (err) {
      console.error('error connecting', err);
      return;
    }
    console.log('connected to mysql');
  });
  var query = `('${obj.name}', '${obj.email}', '${obj.password}', '${obj.address1}', '${obj.address2}', '${obj.city}', '${obj.state}', ${obj.zipcode}, '${obj.cc}', '${obj.expire}', ${obj.cvv}, ${obj.billingzip})`
  db.query(`INSERT INTO checkout () VALUES ${query};`)
  res.send('Done')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

//create table checkout (name varchar(255), email varchar(255), password varchar(255), address1 varchar(255), address2 varchar(255), city varchar(255), state varchar(255), zipcode int(11), cc varchar(255), expire varchar(255), cvv int(11), billingzip int(11));