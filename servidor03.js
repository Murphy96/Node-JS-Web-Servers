var http = require('http');

var fs = require('fs');
var url = require('url');
const server = http.createServer(function(req,res){

    var x = url.parse(req.url,true);
    var path = "."+x.pathname;

    fs.readFile(path,function(err,data){
        if(err){
            res.writeHead(404 , {'Content-Type':'text/plane'});
            return res.end('404 not found');
        }
        res.writeHead(200 , {'Content-Type':'application/json'});
        res.write(data);
        return res.end();
    })
});

server.listen(8080,function(){
    console.log('escuchando en el puerto 8080');
})