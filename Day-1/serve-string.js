const http = require('http');
let host = '127.0.0.1';
let port = 3001;

let server = http.createServer((request,response) => {
    response.writeHead(200,{'content-type':'text/plain'});
    response.write('Hello wolf');
    response.write('Tushar is boy');
    response.end();
});

server.listen(port,host,(error) => {
    if(error) {
        return console.log(error);
    }
    return console.log('server is listening' + port + host);
})