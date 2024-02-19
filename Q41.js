"use strict";
// Q41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician_names = ["Houdini", "Sobini", "Podini", "logini"];
function print_array() {
    for (let a = 0; a < 4; a++) {
        console.log(magician_names[a]);
    }
}
print_array();
