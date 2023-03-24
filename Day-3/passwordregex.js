let pass = 'Test@123world';
let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
let res = pass.match(pattern);
if(res) {
    console.log('password is valid');
} else {
    console.log('password is not valid');
}