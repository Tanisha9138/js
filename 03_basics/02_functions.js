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
