// array specific loop

// ["","",""]     strings in array
// [{},{},{}]     objects in array

// for of loop

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

const greetings = "Hello world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Maps  -> key value pairs (object)
// Map known for unique values they do not store duplicate values
const map = new Map()
map.set('IN', "india")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "india")

console.log(map)

// Loop in map

for(const key of map){
    console.log(key);       // it will print the whole map
}

// if we want key and value separately then we use 

for(const [key, value] of map){
    console.log(key, ':-', value);      
}

// Loop in object

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for(const [key, value] of myObject){  // it gives an array
    console.log(key, ':-', value);    // it says myObject is not iterable
} 