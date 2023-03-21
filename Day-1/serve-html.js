const http = require('http');
const fs = require('fs');

var host = '127.0.0.1';
var port = 3002;

http.createServer((req,res) => {
    console.log(`on port ${port} and host is ${host}`);
    res.writeHead(200,{'content-type':'text/html'});
    fs.readFile('index.html',(error,data) => {
        if(error) {
            return console.log(error);
        }
        console.log("operation sucess");
        res.end();
    })
}).listen(3000);