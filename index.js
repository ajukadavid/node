const http = require('http')
const fs = require('fs')

const readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8')
const writeStream = fs.createWriteStream(__dirname + '/write-me.txt')

readStream.on('data', (chunk) => {
    console.log('new data recieved')
    console.log(chunk)
    writeStream.write(chunk)
}) 