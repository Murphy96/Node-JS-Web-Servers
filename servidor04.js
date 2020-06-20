const http = require('http');
const fs = require('fs');


const server = http.createServer(function(req,res){


    let img = __dirname+'/pub/pdf.pdf';

    fs.access(img , fs.constants.F_OK , err=>{
        console.log(`${img} ${err ? "no existe" : "existe"}`);
    });

    
    fs.readFile(img,function(err,data){
        if(err){
            res.writeHead(404 , {'Content-Type':'text/plane'});
            return res.end('404 not found');
        }
        res.writeHead(200 , {'Content-Type':'application/pdf'});
        res.write(data);
        return res.end();
    })

});

server.listen(8080,function(){
    console.log("escuchando en el puerto 8080");
}); 