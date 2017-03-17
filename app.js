var express = require('express')
var app = express()
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'test'
});
connection.connect();


app.get('/:table/:id', function (req, res) {
	var id = req.params.id;

connection.query('SELECT * FROM test WHERE id = ?', [id], function(err, results) {
    if (err) {
      res.sendStatus(500);
    } else {
    	output = JSON.stringify(results);
    	newStr = output.substring(1, output .length-1);
    	newoutput = newStr.replace(/\"/g,'');
      res.json('Status GET ' + newoutput);
    }
  });

  	
})

app.put('/', function (req, res) {
  res.send('Status PUT')
})

app.post('/', function (req, res) {
  res.send('Status POST')
})

app.delete('/', function (req, res) {
  res.send('Status DELETE')
})

app.listen(3000, function () {
  console.log('API Server Running on Port 3000')
})