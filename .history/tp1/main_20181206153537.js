const express = require('express');
const app = express();

app.post('/test', function(request, response){
    console.log(request.body);
    console.log(;hello);
    return 'hello';
});

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port;
    console.log("Server start on %s:%s", host, port);
});