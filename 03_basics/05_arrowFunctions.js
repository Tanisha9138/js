// Same declaration as functions just remove the function keyword and use arrow symbol
const msg = () => {
    let username = "Tanisha"
    console.log(this.username)
}
msg()  // it also gives undefined


// +++++++++++++++++++++++++++++  Implicit/ Explicit Return       +++++++++++++++++++++++++++++
// Example 1: Explicit Return

// You use curly braces {}

// You must use the return keyword to send the result

// If you forget return, it will return undefined

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));

// Example 2: Implicit Return
// You use parentheses () instead of {} for the function body

// The return is implicit — the value is automatically returned without needing return

// Works only for single-expression functions

const add = (num1,num2) => (num1 + num2)
console.log(addTwo(4,4));



// How to return object

// const add1 = (num1, num2) => (username: "Tanii")  // it gives undefined we have to wrap object in curly braces
const add1 = (num1, num2) => ({username: "Tanii"})
console.log(add1(4,4));