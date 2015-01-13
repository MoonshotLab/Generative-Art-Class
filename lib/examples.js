var path = require('path');
var fs = require('fs');
var references = [];


// gather the .png and directory paths for each project containing
// both a .png and .pde
var buildReferences = function(){
  var cwd = path.join(process.cwd(), 'public/processing-experiments');

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
