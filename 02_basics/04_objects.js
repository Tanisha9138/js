// Objects declaration using constructors
// main diff is just about singleton
// const tinderUser = new Object()  
// console.log(tinderUser)               // {}

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {                  // Nested Object
        userfullname: {
            firstname: "Tanisha",
            lastname: "Garg"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

// Merging 2 or more Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);

const obj4 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)  we can use this as well ,in 1st actually we merge obj2 in obj1, now we merge obj1 and obj2 in empty object
console.log(obj4);
console.log(obj1);

// we can use spread like syntax

const obj5 = {...obj1, ...obj2}

// When the value comes from database it comes actually like this

// When user comes from database , an array of objects will come

const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    }
]
// How to Access => users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser))  // We get the data type of the output value Basically we took all the keys and put them in an array. Now we can loop over it
console.log(Object.values(tinderUser)) // Returns an array of values
console.log(Object.entries(tinderUser))  //Returns an array of key/values

// for checking if value exists or not? we use
console.log(tinderUser.hasOwnProperty('isLoggedIn'));     // true
console.log(tinderUser.hasOwnProperty('isLogged'));       // false
