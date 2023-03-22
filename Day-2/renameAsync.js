const fs = require('fs');

fs.rename('message.txt', 'messege.txt', (err) => {
    if(err) {
        throw err;
    }

    console.log('file renamed sucessfully');
})