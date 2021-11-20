var express = require('express');
// var app = express.createServer();
var app = express();

app.get('/', function(req, res){
  res.send('Hello node.js');
});

app.listen(3000,'0.0.0.0');
