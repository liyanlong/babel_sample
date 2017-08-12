// if you want read more serve-staitc package, 
// please access https://github.com/expressjs/serve-static

var serveStatic = require('serve-static');
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  serveStatic('./docs')(req, res, function () {
    try {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.end(fs.readFileSync('./docs/index.html'))
    } catch(e) {
      res.end('<p>404 Not Found</p>');
    }
  })
}).listen(3030, '0.0.0.0')

console.log(`\nListening at http://0.0.0.0:3030\n`);
