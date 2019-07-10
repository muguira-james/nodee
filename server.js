'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

var row = ""

var mysql = require("mysql");
// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "db",
  user: "magoo",
  password: "mysql",
  database: "mybooks"
});
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');

});
// con.end(function(err) {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
//   if(err) console.log('err: ', err);
//   else console.log('Terminated done: ');
// });

// App
const app = express();
app.get('/', (req, res) => {

    var rows = ""
    var query = "create table customers (idd INT PRIMARY KEY auto_increment, name VARCHAR(255)) ; "
    var ins = 'insert into customers (name) value ("james")' 
    var sel = 'select * from customers'
    con.query(query, function(err, result) {
    console.log("result -> tables created")
    })
    con.query(ins, function(err, result) {
        if (err) {
            console.log("err-->", err)
        } else {
            console.log("ins result -->", result)
        }
        
    })
    con.query(sel, function(err, rows, dbrows) {
        if (err) {
            console.log("select err-->", err)
        }
        // row = rows[0]
        var rowItems = ""
        rows.forEach(function(item) {
          rowItems  += `<td>${item.name}</td>`
        })
        console.log(rowItems)
        // console.log("len-->", rows.length, "row-->", row, "dbrows-->", dbrows)
        res.send('<h1>Hello world</h1><h2>people in the list</h2><table><tr><th>names</th></tr>' + rowItems + '</tr></table>');
    })
   
    
  
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);