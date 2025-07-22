// Dates

let myDate = new Date()
console.log(myDate);

// Convert date to String
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON);

// most important type of date
console.log(typeof myDate);      // object

// how to create our own date
let myCreatedDate = new Date(2025, 0, 23)
console.log(myCreatedDate.toDateString());

// in Js months start from 0 for single digit

// another method with time and second as well
let myCreatedDate1 = new Date(2025, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());

// another method like mm-dd-yy
let myCreatedDate2 = new Date("01-14-2025")    // in two digits month start with 01
console.log(myCreatedDate2.toLocaleString());

// TimeStamp

let myTimeStamp = Date.now()

console.log(myTimeStamp);                  // millisecond value
console.log(myCreatedDate.getTime());      // millisecond value    for easy comparision

console.log(Math.floor(Date.now()/1000));   // convert in seconds


// Now we declare new Date

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1);  // if we only want month not complete date
console.log(newDate.getDay());

// Using string interpolation we print dates like
console.log(`${newDate.getDay()} and the month is ${newDate.getMonth() + 1}`)


// toLocaleString method is very important bcz we define an onject into it we can also define many parameters in this as well
// customize date acc to our condition
newDate.toLocaleString('default',{
    weekday: "long"
})