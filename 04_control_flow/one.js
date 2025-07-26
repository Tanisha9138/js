// Diff b/w (==) & (===)

if( 2 == "2"){
    console.log("executed");     // executed 
}
else{
    console.log("not executed");
}

if( 2 === "2"){
    console.log("executed");     // not executed bcz it is false
}
else{
    console.log("not executed");
}

// &&

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail= true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy courses");
}