// Most use loop -> for Each loop
const coding = ["js", "ruby", "java", "python", "cpp"]

// for-Each with callBack function
// callBack function does not have name
coding.forEach( function (val) {
    console.log(val)
})

// for-Each with Arrow function
coding.forEach( (item) => {
    console.log(item)
})


// We pass function as a reference in js as well

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


// for each also have access of index and complete list of array
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})


// Most important operation
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// how to iterate this
myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})