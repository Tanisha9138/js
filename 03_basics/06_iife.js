// Immediately Invoked Function Expressions (IIFE)

// If we write a function, it has to be executed immediately. Now there can be many ways to get this done and 
// why do we need a ffunction which gets executed immediately.

// So, many times we have to write a file in which there is only a database connection and we want that as soon as our application starts,
// our database connection start inside that file 

// and another reason is  when we write any function, we don't want global variable cause any problem

(function msg() {
    // named IIFE bcz function has a name
    console.log(`DB Connected`)
})();

// () => first parenthesis we have is where we are going to write the definition of the function
// and the second one after that is it's execution is done

// now iife with arrow function

( () => {
    // simple/ unnamed iife
    console.log(`DB CONNECTED TWO`);
}) ();

// If we pass parameters,

( (name) => {
    console.log(`DB CONNECTED BY ${name}`);
}) ('Tanisha')



//  Important point to remember  when we write one iife fxn then there is no requirement of semicolon (;) after the function but if we write more than one iife then we have to end every iife with semicolon


// Key Point:
// When writing a single IIFE, a semicolon (;) is not strictly required at the end.

// But when writing multiple IIFEs in the same file, you MUST end each IIFE with a semicolon, otherwise JavaScript might throw a syntax error or behave unexpectedly.

// Why?
// JavaScript uses Automatic Semicolon Insertion (ASI), but it can’t always guess your intentions correctly — especially when two IIFEs are back-to-back. Without semicolons, it may interpret the second IIFE as trying to be called on the result of the first one.