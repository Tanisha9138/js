function calculatedPrice(num1){
    return num1
}
console.log(calculatedPrice(100));   // it gives output 100

// But the problem is
console.log(calculatedPrice(200,400,500));   // now it just onlly print 200

// Rest Operator => ...
// rest and spread operator are same it depends on their use case when will it be called rest, or spread

function calculatedPrice1(...num1){
    return num1
}
console.log(calculatedPrice1(200,400,500));  // [200,400,500]

function calculatedPrice2(val1,val2,...num1){
    return num1
}
console.log(calculatedPrice2(200,400,500,2000)); // [500,2000]

// We can pass object in function
const user = {
    username: "Tanisha",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)   Username is Tanisha and price is 199

// We can pass direct object as well
handleObject({
    username: "Harshu",
    price: 399
})

// We can pass array as well

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); // 400

// We can pass direct array as well
console.log(returnSecondValue([200, 400, 500, 1000]));