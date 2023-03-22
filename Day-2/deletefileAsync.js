const fs = require('fs');

fs.unlink('a.txt',(err) => {
    if(err) {
        throw err;
    }
    console.log('file delete in async');
})