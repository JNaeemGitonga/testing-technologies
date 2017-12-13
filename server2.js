const http = require('http')
const url = require('url')
const PORT = 8080;
const fs = require('fs')

function handleRequest(req,res) {
    // res.end('working' + req.url)
    // var urlParts = url.parse(req.url)

    // switch(urlParts.pathname) {
    //     case '/':
    //         displayRoot(urlParts.pathname, req, res) 
    //         break;
    //     case '/portfolio':
    //         displayPortfolio(urlParts.pathname, req, res)
    //         break;
    //     case '/edit':
    //         console.log('display edit')
    //         break;
    //     default:
    //         display404(urlParts.pathname, req, res)

    // }

    fs.readFile('index.html', (err,data) => {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
    }) 
}

function display404(url,req,res) {
    var res404 = `
    <html>
        <body>
            <p>page not found</p>
        </body>
    </html>
    `

    res.writeHead(404, {'Content-Type':'text/html'})
    res.end(res404)
}

function displayPortfolio(url,req,res) {
    var myPortfolio = `
    <html>
        <body>
            <h1>myGreat Work</h1>
            <p>Look My work</p>
        </body>
    </html>
    `

    res.writeHead(404, {'Content-Type':'text/html'})
    res.end(myPortfolio)
}

function displayRoot(url,req,res) {
    var myHTML =`
        <html>
            <body>
                <h1>My page</h1>
                <a href='/portfolio'>Portfolio</a>
            </body>
        </html>
    `
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(myHTML)
}
const server = http.createServer(handleRequest)

server.listen(PORT, function() {
    console.log('server listening on : http://localhost:', PORT)
})