// Memory work in Js


// When we use early language like C etc, then what happens there is that reserving memory and freeing memory both are our work as a programmer

// But modern or u can say that mid modern languages like js, you are not given so much control over memory there, automatic garbage collection etc. all these things are there.

// Now see how memory allocation happens

// Stack(Primitive) and Heap(Non Primitive)

// Whenever stack memory is used, it means whatever variable we have declared we get a copy of it
// And whenever a memory is defined inside heap,any object or anything goes inside heap, from there we get the reference of the original value. So whatever change we make will change the original value.

// Example

// String(Primitive)
let myName = "Tanisha"

let anotherName = myName
anotherName = "Tanu"

console.log(myName)         // Tanisha
console.log(anotherName)    // Tanu bcz we pass the copy of myName into anotherName if we change the value of anotherName it doesn't change the value of myName

// Object(Non Primitive)
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "tanisha@google.com"

console.log(userOne.email);     // tanisha@google.com
console.log(userTwo.email);     // tanisha@google.com 