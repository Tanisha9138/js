let score = "33abc"
let a = null

console.log(typeof score) // string
console.log(typeof (score))

let valueInNumber = Number(score);  // converted to number
console.log(typeof valueInNumber)   // number  
console.log(valueInNumber)  //Nan  means not a number

let ab = Number(a);

console.log(ab);    //0

// Number Conversion
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null => 0
// unndefined => NaN


let isloggedIn = 1

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn)    //true

let isString = ""
let booleanIsString = Boolean(isString)
console.log(booleanIsString) //false

// Boolean Conversion
// 1 => true; 0 => false;
// "" => false;
// "hitesh" => true


let someNummber = 33
let stringNumber = String(someNummber)
console.log(stringNumber);
console.log(typeof stringNumber)