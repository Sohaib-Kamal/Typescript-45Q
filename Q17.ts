// // Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

import { new_guestlist, updated_guestsnumber } from "./Q16";
for (let u=0; u < updated_guestsnumber; u++) {console.log(`Dear ${new_guestlist[u]}, Unfortunately new dinner table wont be coming in time for dinner and i can now invite only two persons.`) }

// removing first 6 guests from my array and informing them.

for (let w=0; w < updated_guestsnumber -2; w++) {
    console.log('Dear',new_guestlist[updated_guestsnumber -1 - w],', Unfortunetly I cannot invite you for dinner now.')
    new_guestlist.pop()
    console.log(new_guestlist)}

// Printing msg to Two remaining persons that they are still invited
console.log('Dear', new_guestlist[0], 'You are still invited to dinner.')
console.log('Dear', new_guestlist[1], 'You are still invited to dinner.')

// removing these last two persons from the array
new_guestlist.pop()
new_guestlist.pop()

// Printing the empty list
console.log(new_guestlist)
     