var walleAws = require('zefti-walle-aws');
var languageProcessor = require('zefti-language-processor');

module.exports = function(dependencies){
  var routeProcessor = function(req, res, next){

  };

  return routeProcessor;
};



//walle/create/aws/environment {foo:'bar'}
//walle/create/aws/s3bucket  {name:'abc'}
//walle/regress/qa
//walle/deploy/qa {hash: '32jo1jeo192jej12pe9j1p'}
//walle/deploy/prod {type:'latest'}