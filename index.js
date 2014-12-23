var express = require('express');
var exec = require('child_process').exec;

var app = express();

app.get('/', function(req, res) {
  exec('./start.sh', function(error, stdout, stderr) {
    if(error || stderr) {
      res.send(error || stderr);
    }
    else {
      res.send(stdout);
    }
  });
});

app.listen(8080);
console.log("Listening to port 8080…");
