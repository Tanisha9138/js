let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

// They works same so why we need let, const, var different bcz of block scope

// {} => scope of that program

if(true){
    let a1 = 20
    const b1 = 20
    var c1 = 30
    console.log("INNER: ", a);
}
// console.log(a1);  // now it gives error
// console.log(b1);  // now it also give us error 
console.log(c1);  // but it print the value of c1 which is 30

// Function within function

function one(){
    const username = "Tanisha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // Give Error
    two()
}
one()


// if within if
if(true){
    const username = "Tanisha"
    if(username === "Tanisha"){
        const website = "youtube"
        console.log(username + website);
    }  
    console.log(website);   // give error
}
console.log(username);   // give error


// +++++++++++++++++++++++++++ interesting concept  +++++++++++++++++++++++++++

function addOne(num){
    return num + 1
}
console.log(addOne(5))

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))