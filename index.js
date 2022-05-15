const fs = require('fs')

const text = fs.readFileSync('readme.txt', 'utf-8')

fs.writeFileSync('write.txt', text)