"use strict";
// Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
const Q11_1 = require("./Q11");
for (let y = 0; y < Q11_1.array_length; y++) {
    console.log(`\n Hello ${Q11_1.Friends_names[y]}! How are you?`);
}
// console.log(`\n Hello ${Friends_names[0]}! How are you?`)
// console.log(`\n Hello ${Friends_names[1]}! How are you?`)
// console.log(`\n Hello ${Friends_names[2]}! How are you?`)
// console.log(`\n Hello ${Friends_names[3]}! How are you?`)
