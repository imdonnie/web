const express = require('express');
const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.post('/test', function(request, response){
    console.log(request.body.test);
    console.log('hello');
    response.jsonp('hello');
});

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port;
    console.log("Server start on %s:%s", host, port);
});