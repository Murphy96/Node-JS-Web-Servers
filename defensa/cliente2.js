var http = require('http');
var fs = require('fs');

// una variable donde necesitamos la url y el destino, cb es una funcion que se ejecutara si todo sale OK
var download = function(url, dest, cb) {
  // creamos el archivo
  var file = fs.createWriteStream(dest);
  // obtenemos el archivo con el modulo http
  http.get(url, function(response) {
    
    response.pipe(file);

    file.on('finish', function() {
      file.close(cb);
    });
  });
}


console.log('descargando archivo');
// ejemplo de ejecucion en terminal:
// node cliente2.js http://localhost:8080/doc/json.json
var url = (process.argv[2]);
console.log(url);
const vec = url.split('/');
const path = './download/'+vec[vec.length-1];
download(url, path, () => {
  console.log('✅ Done!')
})
