"use strict";
// Q11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
Object.defineProperty(exports, "__esModule", { value: true });
exports.array_length = exports.Friends_names = void 0;
exports.Friends_names = ["Hammad", "Nisar", "Masroor", "Umair"];
exports.array_length = exports.Friends_names.length;
for (let i_n = 0; i_n < exports.array_length; i_n++) {
    console.log(exports.Friends_names[i_n]);
}
// above for loop replaced below 4 lines of code and will work for arrays of all length
// console.log(Friends_names[0])
// console.log(Friends_names[1])
// console.log(Friends_names[2])
// console.log(Friends_names[3])
