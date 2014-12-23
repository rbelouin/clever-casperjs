var express = require('express');
var exec = require('child_process').exec;

var app = express();

app.get('/', function(req, res) {
  exec('./start.sh', function(error, stdout, stderr) {
    if(error || stderr) {
      res.send(error || stderr);
    }
    else {
      res.send(
        '<!DOCTYPE HTML>'+
        '<html lang="en">'+
        '  <head>'+
        '    <meta charset="UTF-8">'+
        '    <title>CasperJS demo</title>'+
        '  </head>'+
        '  <body>'+
        '    <h1>CasperJS demo</h1>'+
        '    <p>' + stdout + '</p>'+
        '    <a href="https://github.com/rbelouin/clever-casperjs"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>'+
        '  </body>'+
        '</html>'
      );
    }
  });
});

app.listen(8080);
console.log("Listening to port 8080…");
