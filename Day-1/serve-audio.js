const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    res.writeHead(200,{"content-type":"audio/wav"});
    fs.exists('mixkit-arcade-retro-game-over-213.js', (exists) => {
        if(exists) {
            var rstream = fs.createReadStream('mixkit-arcade-retro-game-over-213.js');
            rstream.pipe(res);
        } else {
            res.end('error is in the file');
        }
    })
    

}).listen(3000);