let email = 'lizzie@yopmail.com';

let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let res = email.match(pattern);

if(res) {
    console.log('valid email address')
} else {
    console.log('invalid email address');
}