'use strict';

var express = require('express');
var fs = require('fs');
var app = express();

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
  fs.readFile(__dirname + '/index.html', 'utf8', function(err, text) {
    res.send(text);
  });
});

app.listen(3000);
console.log('Server listening on port 3000');
