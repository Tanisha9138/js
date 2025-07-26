// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10

console.log(val1);

let val2;
val2 = null ?? 10

console.log(val2);

let val3;
val3 = undefined ?? 15

console.log(val3);

let val4;
val4 = null ?? 10 ?? 15

console.log(val4);      // if we use nullish coalescing operator then whatever first value it has got here
// the same will get assigned in the values that's why output is 10.

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;