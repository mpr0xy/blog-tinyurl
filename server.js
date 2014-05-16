var restify = require('restify');
var apps = require('./apps');

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());



server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

server.get('/tinyurl', apps.tinyurl);


server.get(/\/?.*/, restify.serveStatic({
  directory: './static',
  default: 'index.html'
}));

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});