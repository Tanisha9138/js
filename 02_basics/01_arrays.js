// array

// const myArr = [0, 1, 2, 3, 4, 5, true, "Tanisha"]   we can declare array of different data types

// JavaScript arrays are resizable and can contain a mix of different datatypes.
// JavaScript arrays are not assciative.
// it basically means we can access values of arr like myArr[1] but not as a myArr["one"]

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[1]);
// console.log(myArr["one"]);  

// Important point

// When  we create copy of array then it creates shallow copies
// A shallow copy of an object is a copy whose properties share the same references 
// it means when we change either the source or the copy, we may also cause the other object to change too

// Deep Copy => It is a copy whose properties do not share the same reference

const myArr1 = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myHeros[1])

// Methods Of Array
// 1.> push => add elements to the end

myArr1.push(6);
myArr1.push(7);
console.log(myArr1);

// 2.> pop => remove element from end we don't have to give any argument inside.

myArr1.pop();
console.log(myArr1);

// 3.> unshift => add element to beginning, but the problem is now we have to shift all the array values.

myArr1.unshift(8);
console.log(myArr1);

// 4.> shift => we don't give any arguements inside the shift. It removes the elements from beginning

myArr1.shift();
console.log(myArr1);

// 5.>
console.log(myArr1.includes(9));
console.log(myArr1.indexOf(3));
console.log(myArr1.indexOf(8));  // gives -1 bcz 8 index does not exists

// 6.> join => add all elements of an array in a string

const newArr = myArr.join()
console.log(myArr1);
console.log(newArr);
console.log(typeof newArr);

// 7.> slice, splice

// slice =>  Returns a copy of a section of an array

console.log("A ", myArr1);

const myn1 = myArr1.slice(1,3) // including 1 excluding 3

console.log(myn1);
console.log("B ", myArr1);

// splice
const myn2 = myArr1.splice(1,3) // including 1 including 3 

console.log("C ", myArr1);
console.log(myn2);

// but the diff in slice and splice is not about the last range including
// the diff is slice and splice is splice modifies the original array.

// We use slice() when we need a copy of part of the array without changing the original. and 
// We use splice() when we need to change the array