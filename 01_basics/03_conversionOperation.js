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

// String Conversion
let someNummber = 33
let stringNumber = String(someNummber)
console.log(stringNumber);
console.log(typeof stringNumber)

// ********************************  Operations ********************************

let value = 3
let negValue = -value
console.log(negValue);  //-3

console.log(2+2);   
console.log(2-2);
console.log(2*2);
console.log(2**2); //power
console.log(2/2);
console.log(2%2); //remainder

// Addition Of Two String
let str1 = "Hello"
let str2 = " Tanisha"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);       // 12
console.log(1 + "2");       // 12
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32

// Tricky Conversion

console.log(+true)     // Gives 1
// console.log(true+) // Gives Error

console.log(+"")     // Gives 0

// Prefix Postfix
let dist = 100
++dist             // Prefix
console.log(dist)  // 101
dist++             // Postfix
console.log(dist)  // 102