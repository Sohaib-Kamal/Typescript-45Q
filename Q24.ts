// Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let emotion = "Happy";
console.log('emotion = ', emotion)
console.log('Is emotion == "Sad", i predict false')
console.log (emotion == "Sad")

let Teacher = "Sir Sohaib";
console.log('Teacher = ', Teacher)
console.log('Is Teacher == Sir Sohaib, i predict True')
console.log (Teacher == "Sir Sohaib")

// • Tests using the lower case function
function test_if_name_is_lowercase (ur_name:string): boolean {
    return ur_name === ur_name.toLowerCase()
    }
console.log("Test 1 using lower case function")
let comparison1 = test_if_name_is_lowercase("syed sohaib kamal")
console.log("Is syed sohaib kamal is in lowercase. I predict true")
console.log(comparison1)

console.log("Test 2 using lower case function")
let comparison2 = test_if_name_is_lowercase("Syed Sohaib Kamal")
console.log("is Syed Sohaib Kamal is in lowercase. I predict false")
console.log(comparison2)

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let eg1 = 7
let eg2 = 5
console.log("Is eg1 < eg2. I predict False")
console.log(eg1 > eg2)

let driving_agelimit = 18
let my_age = 20
console.log("is ur age => driving_agelimit. I predict True")
console.log(my_age >= driving_agelimit)

// • Tests using "and" and "or" operators
let tom = "cat"
let casper ="cat"
let jerry = "mouse"
let spike = "dog"

console.log("test 1 for 'and' & 'or' oprator")
console.log('is tom = "cat" && casper ="cat". i predict true')
if (tom == "cat" && casper == "cat"){console.log('Tom & Casper are cats')}
else {console.log('one of them is not a cat')}

console.log("test 2 for 'and' & 'or' oprator")
console.log('is tom = "cat" || jerry ="cat". i predict true')
if (tom == "cat" || jerry == "cat"){console.log('Either one of tom or jerry is a cat')}
else {console.log('Both Tom and jerry are not cats')}

// • Test whether an item is in a array
// • Test whether an item is not in a array

let stationary = ["pencil", "eraser", 'sharpner', 'scale', 'highlighter']
function search_array(searchterm:string) {if (stationary.includes(searchterm)) {console.log(searchterm, 'is in the array')}
else {console.log(searchterm, 'is not in the array.')} }

console.log(stationary)
console.log('test 1 if Lion is in the array')
search_array("lion")
console.log('test 2 if pencil is in the array')
search_array("pencil")

