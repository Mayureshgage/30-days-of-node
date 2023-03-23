const fs = require('fs');

let str = fs.readFileSync('data.txt').toString();
var pattern = /man/gim;
var myarray = str.match( pattern );
var len = myarray.length;
console.log("Occurrences of pattern in the string is : " + len);