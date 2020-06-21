const http = require('http');
const fs = require('fs');
const url = require('url');


const mine = {
    'html' : 'text/html',
    'css'  : 'text/css',
    'jpg'  : 'image/jpg',
    'pdf'  : 'application/pdf',
    'txt'  :  'text/plain',
    'ascii'  :  'text/plain',
    'ico'  : 'image/x-icon',
    'mp3'  : 'audio/mpeg3',
    'mp4'  : 'video/mp4',
    'json' : 'application/json'
};

const server = http.createServer(function(req,res){


    var x = url.parse(req.url,true);

    var path = "."+x.pathname;

    fs.access(path , fs.constants.F_OK , err=>{
        console.log(`${path} ${err ? "no existe" : "existe"}`);
    });

    
    fs.readFile(path,function(err,data){
        if(err){
            res.writeHead(404 , {'Content-Type':'text/plane'});
            return res.end('404 not found');
        }

        const vec = path.split('.');
        const extension = vec[vec.length-1];
        const minearchivo = mine[extension];
        console.log("cliente conenctado");
        res.writeHead(200 , {'Content-Type':minearchivo});
        res.write(data);
        return res.end();
    })

});

server.listen(8080,function(){
    console.log("escuchando en el puerto 8080");
}); 