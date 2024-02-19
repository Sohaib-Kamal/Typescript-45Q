"use strict";
// // Q30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
Object.defineProperty(exports, "__esModule", { value: true });
exports.number_users = exports.usernames = void 0;
exports.usernames = ['admin', 'sohaib', 'abeela', 'sulaim', 'zarrar'];
exports.number_users = exports.usernames.length;
for (let m = 0; m < exports.number_users; m++) {
    if (exports.usernames[m] == 'admin') {
        console.log('Hello admin, would you like to see the status report.');
    }
    else {
        console.log(exports.usernames[m], '! Hello and welcome again.');
    }
}
