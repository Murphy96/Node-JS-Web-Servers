var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function(req,res){

    var x = url.parse(req.url,true);
    var ruta = "."+x.pathname;
    console.log(ruta);
    
    console.log(http.STATUS_CODES);
    
    fs.readFile(ruta,function(err,data){
        if(err){
            res.writeHead(404 , {'Content-Type':'text/plane'});
            return res.end('404 not found');
        }
        res.writeHead(200 , {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080,function(){
    console.log('el servidor escucha en puerto 8080');
});
