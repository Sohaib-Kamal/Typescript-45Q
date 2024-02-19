// Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//Printing Name with whitespace characters
let name1 = "\t \n Sohaib Kamal \t \n"
console.log("Name with whitespace characters:", name1)

// Printing Name after removing whitespace characters
let name2 = name1.trim();
console.log("Name without whitespace characters:", name2)
