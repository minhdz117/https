var fs = require('fs');
var http = require('http');
var https = require('https');
var path = require('path');
var options = {
  key: fs.readFileSync(path.resolve('dist/ssl/keys/ca.key')),
  cert: fs.readFileSync(path.resolve('dist/ssl/keys/ca.crt'))
};
var express = require('express');
var app = express();

// your express configuration here
app.get('/', function (req, res) {
  res.send('hello world')
})
var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(8080);
httpsServer.listen(8443);