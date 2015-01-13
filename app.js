var express = require('express');
var path = require('path');
var examples = require('./lib/examples');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index', { examples : examples.getReferences() });
});

app.get('/example/:directory', function(req, res){
  var ref = examples.getReference(req.params.directory);
  res.render('example', ref);
});

module.exports = app;
