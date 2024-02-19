"use strict";
// Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests_number = exports.guests_list = void 0;
exports.guests_list = ["Phupho ", "Khala ", "Hammad ", "Aunty ", "Uncle "];
console.log(`Old list of guests is ${exports.guests_list}\n`);
console.log(`${exports.guests_list[4]} is not being able to come to dinner. \n`);
// modification of list
exports.guests_list.pop();
exports.guests_list.push("Neighbor");
console.log(`New list of guests is ${exports.guests_list} \n`);
// printing second set of invitation.
exports.guests_number = exports.guests_list.length;
for (let k = 0; k < exports.guests_number; k++) {
    console.log(`Dear ${exports.guests_list[k]}! Please do come for dinner. Your presence will honour us.`);
}
// console.log(`Dear ${guests_list[0]}! Please do come.`)
// console.log(`Dear ${guests_list[1]}! We will be waiting for you.`)
// console.log(`Dear ${guests_list[3]}! Your presence will honour us.`)
// console.log(`Dear ${guests_list[3]}! Give us the pleasure of meeting you.`)
// console.log(`Dear ${guests_list[4]}! Please have dinner with us. \n`)
