const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item        // undefined
})

console.log(values);   // undefined

// it basically means for Each does not return any value

const myNums = [1,2,3,4,5,6,7,8,9,10]
// it returns the value for Each does not
const newNums = myNums.filter( (num)=> num > 4)
console.log(newNums);

// other way of writing the filter function
// const newNums = myNums.filter( (num)=> {
//     return num > 4
// })                      here we have to write return keyword else it returns empty array bcz it is in scope (bcz of curly braces)


// no using for each loop we will do same thing

const arr = []
myNums.forEach( (num) => {
    if(num>4){
        arr.push(num)
    }
})
console.log(arr)
