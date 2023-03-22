const fs = require('fs');
fs.unlinkSync('b.txt');
console.log('file deleted in synchronous');