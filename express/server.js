const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

app.use((req,res,next) => {
    
    let date = new Date().toString()
    let log = {
        date,
        method:req.method,
        url:req.url
    }
    
    fs.appendFile('server.log', JSON.stringify(log) + '\n', err => {
        if(err) console.log(err)
    })
    next()
})
/*
    the middleware below will stop all request and render the maintainence page
        because next() isn't called.
    KNOW: middleware is excecuted in the order that you call app.use()
        so in the case of localhost:3000/page.html if you want it to not render when visited
        you will need to place  line 34 under the maintainence app.use()  

*/
app.use((req,res,next) => {
    res.sendFile(path.join(__dirname + '/public/maintainence.html'))
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    res.send({
        name:'Jaha',
        profession:'software engineer'
    })
})

app.get('/about', (req,res) => {
    res.send('<h2>About Page</h2>')
})

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'shit got fucked up'
    })
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})