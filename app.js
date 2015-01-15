var express = require('express');
var path = require('path');
var examples = require('./lib/examples');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
  res.render('index');
});


app.get('/examples', function(req, res){
  res.render('examples', { examples : examples.getReferences() });
});


app.get('/example/:directory', function(req, res){
  var example = examples.getReference(req.params.directory);
  examples.getCode(req.params.directory, function(code){
    example.codez = code;
    res.render('example', example);
  });
});


app.get('/zip/:example', function(req, res){
  examples.generateZip(req.params.example, function(zipFilePath){
    res.sendfile(zipFilePath);
  });
});


module.exports = app;
