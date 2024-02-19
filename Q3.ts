// Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let my_name = "Syed Sohaib Kamal"
let name_in_lowercase = my_name.toLowerCase()
console.log(name_in_lowercase)

let name_in_uppercase = my_name.toUpperCase()
console.log(name_in_uppercase)

let new_name = "syed sohaib kamal"
// this split function is splitting or seperating the string along spaces 
let name_array = new_name.split(" ")
// to show that an array by the name of name_array has been created
console.log(name_array)
// to declare an empty string variable
let TitleCaseName = ""
for (let i=0; i < name_array.length; i++) {TitleCaseName += name_array[i].charAt(0).toUpperCase() + name_array[i].slice(1).toLowerCase() + " "}
console.log (TitleCaseName)
