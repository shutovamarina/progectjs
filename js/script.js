"use strict";
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('все сыты');
} else {
    console.log('мы уходим');
}



console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);


console.log(1 && 2 && 3);


console.log(!1 && 2 || !3);


console.log(25 || null && !3);


console.log(NaN || null || !3 || undefined || 5);


console.log(NaN || null && !3 && undefined || 5);


console.log(5 === 5 && 3 > 1 || 5);

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!')
}