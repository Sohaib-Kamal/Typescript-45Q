// Q42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians = ["Houdini", "Sobini", "Podini", "logini"]
let number_of_magicians = magicians.length

function show_magicians () {
    for (let a = 0; a < 4; a++)
    {console.log(magicians[a])}
}

show_magicians()


function make_great(addition:string) {
    for (let v = 0; v < number_of_magicians; v++)
    {magicians[v] = addition + magicians[v]}
}

make_great("The great ")
show_magicians()
