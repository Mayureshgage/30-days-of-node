const fs = require('fs');

let data = fs.readFileSync('message.txt');
console.log(data);