// Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// reverse_sorted_array = [...place_wish].sort().reverse()

let magicians2 = ["Houdini", "Sobini", "Podini", "logini"]
let number_of_magicians2 = magicians2.length

function show_magicians2 () {
    for (let c = 0; c < 4; c++)
    {console.log(magicians2[c])}
}

show_magicians2()
console.log("-".repeat(70))

let new_magicians = [...magicians2]

function make_great2(addition:string) {
    for (let v2 = 0; v2 < number_of_magicians2; v2++)
    {new_magicians[v2] = addition + magicians2[v2]}
    }

make_great2("The great ")
console.log(new_magicians)
console.log("-".repeat(70))
show_magicians2()
