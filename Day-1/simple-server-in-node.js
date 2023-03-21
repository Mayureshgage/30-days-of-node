const http = require('http');

let host = '127.0.0.1';
let port = 3000;
const server = http.createServer((request,response) => {
    response.writeHead(200, {"content-type":"text/plain"});
    console.log('This is server creation');
    response.end('Server is being created');
});

server.listen(port,host, (error) => {
    if(error) {
        console.log(error);
    }
    console.log(`server is listening ${host} and on port ${port}`);
})