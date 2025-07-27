const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//  Now how to iterate object we see thar using for-of loop it gives object is not iterable

// Using for-in loop
for(const key in myObject){
    console.log(key)                  /// it gives only key
}

// if we need value of that key
for(const key in myObject){
    console.log(myObject[key])                  /// it gives only key
}

// for key-object both
for(const key in myObject){
    console.log(myObject[key])                  /// it gives object of that key
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);               /// it gives only key
}

// is for in loop works on array

const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    console.log(key)                  /// it gives key of array, by default array key starts from 0
}
for(const key in programming){
    console.log(programming[key])                  /// it gives values of array
}

// map is not iterable so we can't iterate it through for in loop