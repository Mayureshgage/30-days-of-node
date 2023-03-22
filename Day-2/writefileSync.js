const fs = require('fs');
let content = 'Oracle commerce cloud';

fs.writeFileSync('message.txt',content);
console.log('written file synchronously');