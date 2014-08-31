var express = require('express'),
    server  = express();

var port    = process.env.PORT || 3000;

server.use('/', express.static(__dirname+"/src/"));

server.listen(port, function(){
  console.log("Server up and running and killing demons on port " + port);
})
