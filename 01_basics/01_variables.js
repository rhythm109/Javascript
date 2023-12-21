const accountId = 144553
let accountEmail = "cats.com"
var accountPassword = "12345"
accountCity = "Raipur"
let accountMeter;

// accountId = 2 Not allowed
console.log(accountId)

accountEmail = "Khajur.com"
accountPassword = "12121"

/*
Prefer not to use var, because of issue in scope and name
*/

console.table([accountId, accountEmail, accountPassword, accountCity])


