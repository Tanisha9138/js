function sayMyName(){
    console.log("Tanisha");
}
// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers()   gives NaN bcz we don't pass any arguements
addTwoNumbers(3,4)   // 7
addTwoNumbers(3, "4")  // 34
addTwoNumbers(3, "a")  // 3a
addTwoNumbers(3, null)

const result = addTwoNumbers(4,6)
console.log("Result: ", result);            // it gives undefined

// But if function declared like this
function add(num1, num2){
    return num1 + num2;
    console.log("Tanisha")
}
const result2 = add(2,4)
console.log("Result: ", result2); 

// Sttring Function
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Tanisha"))