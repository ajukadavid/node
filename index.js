const http = require('http')
const fs = require('fs')

const readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8')

readStream.on('data', (chunk) => {
    console.log('new data recieved')
    console.log(chunk)
}) 