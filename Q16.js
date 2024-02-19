"use strict";
// Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
Object.defineProperty(exports, "__esModule", { value: true });
exports.new_guestlist = exports.updated_guestsnumber = void 0;
const Q15_js_1 = require("./Q15.js");
for (let k = 0; k < Q15_js_1.guests_number; k++) {
    console.log(`Dear ${Q15_js_1.guests_list[k]}, Hurrah!! I have found bigger table so I am inviting more people.`);
}
// Add new guest to the start of the list
Q15_js_1.guests_list.unshift("Faizan ");
// Add one new guest in the middle of the array
Q15_js_1.guests_list.splice(Q15_js_1.guests_number / 2 + 1, 0, "Sir Naeem ");
// adding one more guest at the end of the array
Q15_js_1.guests_list.push("Abeela ");
console.log(Q15_js_1.guests_list);
// Printing new set of invitation
exports.updated_guestsnumber = Q15_js_1.guests_list.length;
for (let f = 0; f < exports.updated_guestsnumber; f++) {
    console.log(`Dear ${Q15_js_1.guests_list[f]}, Please have dinner with me.`);
}
exports.new_guestlist = Q15_js_1.guests_list;
