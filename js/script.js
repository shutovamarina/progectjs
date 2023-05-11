'use strict';

const arr = [1, 26, 13, 6, 18];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
/* arr[99] = 0;
console.log(arr.length);
console.log(arr);
 */
/* arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива`)
}) */
/* 
arr.pop();

console.log(arr); */
/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* for (let value of arr) {
    console.log(value);
} */

/* const str = prompt("", "");
const products = str.split(",");
products.sort();
console.log(products.join('; ')); */