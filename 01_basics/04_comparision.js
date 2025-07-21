// We will compare different data types
console.log("2" > 1)
console.log("02" > 1)

// null comparision
console.log(null > 0)   // false
console.log(null == 0)  // false
console.log(null >= 0)  // true

// The reason for true in above comparision is => The reason is that an equality check (==) and comparisions (> < >= <=) work differntly.
// Comparisions convert null to a number, treating it as 0. (==) Equality does not convert null to a number
// That's why (3) null >= 0 is true and (1) null > 0 is false 

// undefined conversion
console.log(undefined > 0)   // false
console.log(undefined == 0)  // false
console.log(undefined >= 0)  // false

// (===) it will check data value as well as data type (Strict comparision)

console.log("2"== 2) //true
console.log("2" === 2) //false as data type of both is different