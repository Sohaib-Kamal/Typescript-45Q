"use strict";
// // Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
const Q30_1 = require("./Q30");
console.log(Q30_1.usernames);
// testing that the list is not empty
if (Q30_1.number_users > 0) {
    console.log('List of users is not empty. \n');
}
else {
    console.log('We need to find more users. \n');
}
console.log('Removing all users from an array.');
Q30_1.usernames.splice(0, Q30_1.number_users);
console.log(Q30_1.usernames);
console.log('Confirming if the list is indeed empty');
let number_users_upd = Q30_1.usernames.length;
if (number_users_upd > 0) {
    console.log('List of users is not empty. \n');
}
else {
    console.log('We need to find more users. \n');
}
