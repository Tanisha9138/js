// A promise is an object representing the eventual completion or failure of an asynchronous operation.
// There are two parts of prommise => one is to consume promise and other one is to create promise.
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

// Now question is what is the resolve and reject doing

promiseOne.then(function(){    // direct connection with resolve
    console.log("Promise consumed");
})  


// we have done the async task but promise isn't consumed yet
// it means we never connect resolve with .then
// for this we have to use resolve method in nodejs

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})
// we always can't do setTimeOut & console.log sometimes data come from the network

// now if data come from network then we also have to pass it then
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "tanu", email: "tanu@example.com"})
    },1000)
})

// now how we take data from resolve

promiseThree.then(function(user){
    console.log(user);
})

// rejection gives error
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false    // if error = true then it print something went wrong
        if(!error){
            resolve({username: "tanisha", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// now we consume promiseFour

// in this we use concept of chaining/channable/thenable which means the value returned from above .then that value come in this .then 
promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

// Now we use async/await concept instead of .then
// it waits a little for work if work happens,then only it moves forward otherwise it gives us an error, in this we can't handle a catch gracefully
// problem of async is it cannot handle error directly
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

//
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json() // response ko bhi convert hone me time lgta hai tho yha bhi await krana pdega
        console.log(data);
    }catch(error){
        console.log("E: ", error);
    }
}
getAllUsers()

// if we do above work with .then 
fetch('https://api.github.com/users/Tanisha9138')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})


// isme fetch phle kaam kr rha hai or jo setTimeout hmne ye functions likhe the ye baad me.