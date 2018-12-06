const app = require('express');

app.post('/test', function(request, response){
    console.log(request.body);
});

var server = app.listen(8080, funciton(){
    var host = server.address().address
    var port = server.address().port;
    console.log("Server start on %S %S", host, port);
});