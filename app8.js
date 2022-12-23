//http module

const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('Welcome to Our Homepage!!')
    }
    if (req.url==='/about'){
        res.end('Here is about me')
    }
    

})

server.listen(5000)