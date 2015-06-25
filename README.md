# zefti-walle-server
Zefti Walle Server


Zefti Walle Server takes commands via its api and delivers them to either other Walle clients or executes them itself.

Zefti Walle Server takes commands in the following form:

/walle/action/class1/class2/classN/subject

examples:
/walle/create/aws/s3/bucket
/walle/run/report/dau


To instantiate Walle::
1. Require walle server
var zeftiWalleServer = require('zefti-walle-server');

2. Pass in Walle dependencies (requires an internal walle database)
var walleServer = zeftiWalleServer.routeProcessor(dependencies);

3. Pass in connector libraries
var walleAws = require('zefti-walle-aws');
walleServer.use(walleAws);

4.
var incoming = walleServer.incoming
app.post('/walle/*', function(req, res, next){
  incoming(req, res, next)
});