const userEmail = "t@tanu.ai" // if string have value then it's true

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

 
const userValue = ""     // empty string false

if(userValue){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// empty array also give truth vaue
const userArray = []

if(userArray){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


// truthy or falsy values concepts

// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// Every value except falsy values is truthy values but some are important to know

// Truthy Values

// "0", "false", " ", [], {}, function(){} // empty function

// How to check array is empty or not

const arr = []
if(arr.length === 0){
    console.log("Array is empty");
}

// How to check object is empty or not

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Some true statements

// false == 0     
// false == ''
// 0 == ''

// these 3 statements give true output