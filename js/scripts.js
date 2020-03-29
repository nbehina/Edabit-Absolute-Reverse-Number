
/* For defining the revInt variable I got help from this website:
https://stackoverflow.com/questions/44771147/reverse-an-integer-in-javascript */

function absRevInt(n) {
var revInt = parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
 return Math.abs(revInt);
}

console.log(absRevInt(-531));
console.log(absRevInt(426));


