let myarr = ['tushar','Madhukar','Gage'];
console.log(myarr);
console.log(myarr.length);

let arr = new Array(3);
arr = [1,2,3,4,5];
let arr1 = new Array(2,5,7);
console.log(arr);
console.log(arr1);


//Push method in array

let vowels = ['a','e','i','o'];
console.log(vowels);
vowels.push('u');
console.log(vowels);
vowels.pop();
console.log(vowels);


//unshift method in array
let nzarray = [1,4,55,6,7];
nzarray.unshift(10);
console.log(nzarray);
nzarray.shift();
console.log(nzarray);
nzarray.reverse();
console.log(nzarray);

nzarray.sort();
console.log("sorted array"+ nzarray.sort());

//splice method
//splice method to add element
nzarray.splice(2,2,'java','node');
console.log(nzarray);

// slice method to remove Element
nzarray.splice(2,2);
console.log(nzarray);


let newArray = [2,6,7,8,9,3,7];
newArray.sort()
let concatres  = newArray.concat(nzarray);
console.log(concatres);

let position = newArray.indexOf(6);
console.log(`This is position ${position}`);
let lastIndex = newArray.lastIndexOf(7);
console.log(`Last index is ${lastIndex}`);