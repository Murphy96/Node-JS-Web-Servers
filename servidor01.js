var http = require('http');


var server = function(req,res){
    res.writeHead(200 , {'Content-Type':'text/plane'});
    res.write('saludos desde el servidor');
    //console.log(req.connection.remotePort);
    res.end();

};


http.createServer(server).listen(8080,function(){
    console.log('servidor escucha con el puerto 8080');
});