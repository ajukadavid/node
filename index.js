const http = require('http')
const fs = require('fs')

const readStream = fs.createReadStream(__dirname + '/readme.txt')