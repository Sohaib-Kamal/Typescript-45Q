// Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

import { guests_list, guests_number } from "./Q15.js"

for (let k=0; k<guests_number; k++) {console.log(`Dear ${guests_list[k]}, Hurrah!! I have found bigger table so I am inviting more people.`) }

// Add new guest to the start of the list
guests_list.unshift("Faizan ")
// Add one new guest in the middle of the array
guests_list.splice(guests_number/2 + 1, 0 , "Sir Naeem ")
// adding one more guest at the end of the array
guests_list.push("Abeela ")
console.log(guests_list)
// Printing new set of invitation
export let updated_guestsnumber = guests_list.length
for (let f=0; f < updated_guestsnumber; f++) {console.log(`Dear ${guests_list[f]}, Please have dinner with me.`) }
export let new_guestlist = guests_list