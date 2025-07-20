const accountId = 12345
let accountEmail = "tanisha@google.com"
var accountPassword = "54321"
accountCity = "Charkhi Dadri"
let accountState;

// accountId = 2  not allowed

accountEmail = "tanu@google.com"
accountPassword = "121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
