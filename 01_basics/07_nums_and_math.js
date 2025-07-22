const score = 400
const balance = new Number(100)

console.log(balance)
console.log(score)

// Some Methods in Number

// 1.> Convert number to string

console.log(balance.toString());
console.log(balance.toString().length);

// 2.> fixed method that we use many times

console.log(balance.toFixed(2)); // 100.00    if i give 3 then output will be 100.000

// 3.> toPrecision

const otherNumber = 23.8966
 
console.log(otherNumber.toPrecision(3));   // 23.9

const otherNumber1 = 123.8966

console.log(otherNumber1.toPrecision(3));  // 124

// 4.> LocaleString

const hundreds = 1000000
console.log(hundreds.toLocaleString());  // default US standard
console.log(hundreds.toLocaleString('en-IN'));  // india standard

// min and max value
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// +++++++++++++++++++++++++  Maths  +++++++++++++++++++++++++  

// Maths library comes with javascript by default and it is a very powerful library and math is an object in itself

console.log(Math);
console.log(Math.abs(-4));    // negative becomes positive
console.log(Math.round(4.3)); // round off 4
console.log(Math.round(4.6)); // round off 5
// but we can control whether the value will be the upper or the lower value.

// for upper value we use ceil
console.log(Math.ceil(4.3));    // 5  Ceiling means the value if it is even a little more than four, then it will choose the top value

// for lower value we use floor
console.log(Math.floor(4.6)) // 4 floor means the value if it is even a little more than five , then it will choose the lower value

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

// ** Most important method of math is random
console.log(Math.random());
// Value of Math.random() will always come between zero and one.

// Now as it's value is always come between zero and 1 now if we are making any other game in which we need values between 1 and 10 then what we do is mutiply math.random by 10 so that digits shift by one place
// like if digit is 0.3 than it becomes 3 and math.random value can be 0.012443 so we add math.random multiply by 10 (+ 1) so that values always start with 1
console.log((Math.random()* 10) + 1);


// important formula

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+min)