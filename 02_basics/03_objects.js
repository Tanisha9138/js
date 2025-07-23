// Singleton =>  class and object has only one instance
// When we declare objects like literals then singleton are not created but
// When we declare them as constructor then it will always be a singleton.

// Object.create   => Singleton created by constructor

// object literals

// Symbol Declaration => 

const mySym = Symbol("key1")

const jsUser = {
    name: "Tanisha",
    "full name": "Tanisha Garg",
    // mySym: "myKey1",   // We can't declare symbol like that it will print output but now it's data type is string not a symbol
    [mySym]: "myKey1",
    age: 19,
    location: "Chandigarh",
    email: "tanisha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// How to access the objects
 
console.log(jsUser.email)  // this is not a good way
// Because using dot we can't access full name value
// console.log(jsUser.full name);    give error


console.log(jsUser["email"]);
console.log(jsUser["full name"]);

// console.log(jsUser.mySym);         // myKey1
// console.log(typeof jsUser.mySym); // string

console.log(jsUser[mySym]);
console.log(typeof mySym);  // symbol

// Changes in Objects

jsUser.email = "tanisha@chatgpt.com";
console.log(jsUser["email"]);           // tanisha@chatgpt.com


// freeze => Using freeze we cannot change/update any value
// Object.freeze(jsUser)
jsUser.email = "tanisha@microsoft.com";
console.log(jsUser["email"]);            // tanisha@chatgpt.com


//  Functions in JS
jsUser.greeting = function(){
    console.log(`Hello Js User`);
}

console.log(jsUser.greeting);  // it does not execute function it just tells that it is a function
console.log(jsUser.greeting()); // it will execute function and print output

// object reference in function

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greetingTwo());