const express = require('express');
const app = express();
var multer = require('multer');
var bodyParser = require('body-parser');

app.use(express.static('/'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp'}).array('image'));

app.get('/test', function(request, response){
    response.snedFile(__dirname + 'myself.html');
});

app.post('/test', function(request, response){
    console.log(request.body);
    // console.log('hello');
    response.jsonp('hello');

});

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port;
    console.log("Server start on %s:%s", host, port);
});