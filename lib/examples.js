var path = require('path');
var archiver = require('archiver');
var _ = require('underscore');
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
        example.type      = dir.charAt(0);
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
  return _.groupBy(references, function(ref){
    return ref.type;
  });
};


exports.getReference = function(key){
  var returnValue = null;

  references.forEach(function(example){
    if(example.directory == key) returnValue = example;
  });

  return returnValue;
};


exports.getCode = function(key, next){
  var regex = /\/\*([\s\S]*?)\*\//g;
  var returnValue = null;
  var filePath = path.join(cwd, key, key + '.pde');

  fs.readFile(filePath, { encoding : 'utf8'}, function(err, contents){
    var cleaned = contents.replace(regex, '');
    var lines = cleaned.split('\n');
    lines.splice(0, 19);
    next(lines.join('\n'));
  });
};


exports.generateZip = function(key, next){
  var zipFilePath = 'tmp/' + new Date().getTime() + '.zip';
  var output = fs.createWriteStream(zipFilePath);
  var archive = archiver('zip');

  output.on('close', function(){
    next(zipFilePath);
  });

  archive.on('error', function(err){
    throw err;
  });

  archive.pipe(output);

  references.forEach(function(example){
    if(example.directory == key){
      archive.bulk([{
        expand  : true,
        cwd     : path.join(cwd, example.directory),
        src     : ['**/*'],
        dest    : zipFilePath
      }]).finalize();
    }
  });
};
