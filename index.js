const express = require('express')

const app = express()

app.get('/', (req, res) => {
res.send('Home page')
})
app.get('/profile/:num', (req, res) => {
    console.log(req.params)
    

    res.send('profile id is ' + req.params.num)
    })

app.listen(3000)