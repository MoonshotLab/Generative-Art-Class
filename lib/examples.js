var path = require('path');
var Q = require('q');
var fs = require('fs');


// gather the .png and directory paths for each project containing
// both a .png and .pde
exports.getImages = function(){
  var deferred = Q.defer();
  var cwd = path.join(process.cwd(), 'public/processing-experiments');
  var examplePaths = [];

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
        if(example.image) examplePaths.push(example);
        if(i == dirs.length - 1) deferred.resolve(examplePaths);
      });
    });
  });

  return deferred.promise;
};
