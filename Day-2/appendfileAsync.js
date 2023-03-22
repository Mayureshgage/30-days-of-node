const fs = require('fs');
let content = 'This is where i work';

fs.appendFile('message.txt', content , (err) => {
    if(err) {
        throw err;
    }
    console.log('Async file appended sucessfull');
})