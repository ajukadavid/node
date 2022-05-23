const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    const person = {
        name: 'Alex',
        email: 'alex@gmail.com',
        job: 'designer'
    }

    res.end(JSON.stringify(person))
})

server.listen(3000, '127.0.0.1')