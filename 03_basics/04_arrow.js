// First we create basic Object to understand arrow function and this keyword

const user = {
    username: "Tanisha",
    price: 200,

    // now we want whichever user comes inside this function, i should pass this message to them.
    // now see here, the username is Tanisha but it can change in future, it is possible that someone else has used this object in work and changed the name. so there i want welcome message be a little different
    // That's why we use this keyword for referencing current context

    welcomeMessage: function() {         
        console.log(`${this.username} welcome to website`);
        console.log(this)  // print current context like username price function
    }
}

user.welcomeMessage()  // Tanisha welcome to website
user.username = "sam"
user.welcomeMessage() // sam welcome to website
// Why did is become sam here reason is =>  Because we did not make the value hardcore here, we said whatever is the current context, print the value of the username inside the current context.

console.log(this)  // {} but in browser it refers to window object.


// Now if do console.log(this) in function then it gives a lot of things like performance, global and so on

function msg(){
    console.log(this);
}
msg()     // => <ref *1> Object [global] {... }   That means: this inside a regular function (not inside a method, not inside a class, and not using arrow) refers to the global object in Node.js, which is global.

// Important one

function code(){
    let username = "hello"
    console.log(this.username)  // undefined output
}
code()

// Why undefined => so this context actually works in object not in functions