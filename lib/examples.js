var path = require('path');
var AdmZip = require('adm-zip');
var fs = require('fs');

var cwd = path.join(process.cwd(), 'public/processing-experiments');
var references = [];

// gather the .png and directory paths for each project containing
// both a .png and .pde
var buildReferences = function(){

  var getExample = function(dir, next){
    var fullDirPath = path.join(cwd, dir);
    var example = {};

    fs.readdir(fullDirPath, function(err, files){
      if( files &&
          files.indexOf(dir + '.png') != -1 &&
          files.indexOf(dir + '.pde') != -1 )
      {
        example.directory = dir;
        example.image     = dir + '.png';
      }

      next(example);
    });
  };

  fs.readdir(cwd, function(err, dirs){
    dirs.forEach(function(dir, i){
      getExample(dir, function(example){
        if(example.image) references.push(example);
      });
    });
  });
}();


exports.getReferences = function(){
  return references;
};


exports.getReference = function(key){
  var returnValue = null;

  references.forEach(function(example){
    if(example.directory == key) returnValue = example;
  });

  return returnValue;
};


exports.generateZip = function(key, next){
  var zip = new AdmZip();

  var build = function(example){
    var dir = path.join(cwd, example.directory);
    fs.readdir(dir, function(err, files){
      files.forEach(function(file){
        zip.addLocalFile(path.join(dir, file));
      });

      var filePath = 'tmp/' + new Date().getTime() + '.zip';
      zip.writeZip(filePath);
      next(filePath);
    });
  };

  references.forEach(function(example){
    if(example.directory == key) build(example);
  });
};
