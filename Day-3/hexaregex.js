let str = 'FFFFFFF';
let pattern = /^[a-fA-F0-9]+$/g;

let res = str.match(pattern);

if(res) {
    console.log('valid decimal number');
} else {
    console.log('not a valid number');
}