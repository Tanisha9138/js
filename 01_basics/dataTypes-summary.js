// JavaScript is a dynamically typed language. This means that data types of variables are checked during runtime (when the code is executed) rather than at compile time. 
// In contrast, statically typed languages like Java or C++ require variables to have their types explicitly declared, and type checking is done before the code runs. 
// Data Type categorised into 2 parts Primitive & Non-Primitive(Reference Type)

// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isloggedIn = false;
const outsideTemp = null;
let userEmail;  //undefined

//Symbol declaration
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)   //false

//bigInt
const bigNumber = 12344388342383223n  // n represents bigInt



// Reference (Non-Primitive)    allocate direct reference in memory

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] //array

//object
let myObj ={
    name: "Tanisha",
    age: 22,
}

//function

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)
console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof anotherId)


// Return Type of non-Primitive Data types

    //    Arrays  =>  object
    //    Function  =>  function
    //    Object  =>  object