const http = require('http')
const fs = require('fs')

const readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8')
const writeStream = fs.createWriteStream(__dirname + '/write-me.txt')

readStream.pipe(writeStream)