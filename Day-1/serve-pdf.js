const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    res.writeHead(200,{"content-type":"application/pdf"});
    fs.readFile('B2CCommerceDeveloper_certificate.pdf',(error,data) => {
        if(error) {
            return console.log(error);
        } else {
            res.write(data);
            res.end();
        }
    })
}).listen(3000);