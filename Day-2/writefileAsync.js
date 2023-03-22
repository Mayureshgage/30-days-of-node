const fs = require('fs');
let content = "salesforce commmerce cloud developer"

fs.writeFile('message.txt',content,(err) => {
    if(err) {
        throw err;

        console.log('its saved');
    }
})