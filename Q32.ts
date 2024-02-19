// // Q32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ["mohsin", "adnan", "KAMRAN", "nisar", "hammad"]
let new_users = ["kamran", "imran", "umer", "MOHSIN", "kashif"]
// let current_users_uppercaase = current_users.toUpperCase()
console.log('Current Users:', current_users)
console.log('New users:', new_users)
let newuser_number = new_users.length

for (let g = 1; g <= newuser_number; g++) {
    if (current_users.includes(new_users[g - 1]) || current_users.includes(new_users[g -1].toUpperCase()))
    {console.log(new_users[g -1], 'is not available. you need to enter new username.')}
     else if (current_users.includes(new_users[g - 1]) || current_users.includes(new_users[g -1].toLowerCase()))
     {console.log(new_users[g -1], 'is not available. you need to enter new username.')}
     
     else {console.log(new_users[g -1]+', this username is available.')}
    }



