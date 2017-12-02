const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const path           = require("path");
const mysql          = require('mysql');
const {DATABASE_URL,SECRET} = require('./config')
const port = 8080;

let server = {
    dog:'animal',
    test:[]
}
app.use(bodyParser.urlencoded({extended:true}))
app.get( '/', (req,res) => {
    res.sendFile((path.resolve(__dirname, '../test', 'index.html')))
})

app.get('/test/get', (req,res) => {
    res.send(server)
})
app.post('/test/:val', (req,res) => {
    console.log(  req.body, server)
    server = Object.assign({}, server, {
        test:[ ...server.test, ...req.body.test]
    })

    res.status(200).send(server)
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'jng',
    password: SECRET,
    database: DATABASE_URL
})

// connection.connect()

app.use(express.static(path.resolve(__dirname, '../test')));

app.listen(port, () => {
  console.log('We\'re live on ' + port);
});