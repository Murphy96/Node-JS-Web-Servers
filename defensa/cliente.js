// se debe instalar npm install 

const fs = require('fs')
const request = require('request')



const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

const url = 'http://localhost:8080/pub/img.jpg'
const path = './download/image.jpg'

download(url, path, () => {
  console.log('✅ Done!')
})
