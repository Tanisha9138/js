const name = "tanisha"
const repoCount = 5
console.log(name + repoCount + " Value");  // Concatenation using +

// But doing concatenation using + is a worst way instead of that we use backticks.

// What the advantage of using backticks ,here comes the concept of string interpolation, name is quite complex but in this we create placeholders,
// whatever variable is inside then, you can directly inject there like

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// String Declaration in another way

const gameName = new String('tanishatg')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());  // but original string doesn't change
console.log(gameName.charAt(2));     // tells which character is at which index
console.log(gameName.indexOf('n')); // tells us at which position this character is located

const newString = gameName.substring(0,4)  // in this we can't give negative value
console.log(newString);

const anotherString = gameName.slice(-8,4)  // if we give it negative values then it starts from reverse
console.log(anotherString)

const newStringOne = "  tanisha  "
console.log(newStringOne);
console.log(newStringOne.trim());    // it removes extra space

const url = "https://tanisha.com/tanisha%20choudary"
console.log(url.replace('%20', '-'))

console.log(url.includes('tanisha'))  //true
console.log(url.includes('abcd'))  // false

const word = "tanisha-tanu-garg"
console.log(word.split('-'));  // array, elements split form -