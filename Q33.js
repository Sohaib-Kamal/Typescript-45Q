"use strict";
// Q33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinalarray_length = ordinal_number.length;
for (let x = 0; x < ordinalarray_length; x++) {
    if (ordinal_number[x] == 1) {
        console.log(ordinal_number[x] + 'st');
    }
    else if (ordinal_number[x] === 2) {
        console.log(ordinal_number[x] + 'nd');
    }
    else if (ordinal_number[x] === 3) {
        console.log(ordinal_number[x] + 'rd');
    }
    else {
        console.log(ordinal_number[x] + 'th');
    }
}
