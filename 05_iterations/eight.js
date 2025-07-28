const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)  // it automatically returns the value

// channing method
const newNums = myNums 
                .map( (num) => num * 10 )   // map returns everything but filter is like true or false
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums);

// reduce method => executes a user-supplied "reducer"
// in this accumulator is given as an empty variable now in this we have to enter intial value

const arr = [1, 2, 3]

const myTotal = arr.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);

// use reduce in arrow function

const total = arr.reduce( (acc, curr) => acc+curr, 0)
console.log(total);


// Taking example of shopping cart

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);