"use strict";
// // Q28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//  creates functions that examines a person's age and print the most appropriate msg.
function person_age(personage) {
    if (personage < 2) {
        console.log('The person is baby');
    }
    else if (personage >= 2 && personage < 4) {
        console.log('The person is a todler');
    }
    else if (personage >= 4 && personage < 13) {
        console.log('The person is a kid');
    }
    else if (personage >= 13 && personage < 20) {
        console.log('The person is a teenager');
    }
    else if (personage >= 20 && personage < 65) {
        console.log('The person is an adult');
    }
    else {
        console.log('The person is an elder');
    }
}
// • If the person is less than 2 years old, print a message that the person is a baby.
console.log('person age is 1');
person_age(1);
console.log("_".repeat(70));
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
console.log('person age is 3');
person_age(3);
console.log("_".repeat(70));
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
console.log('person age is 10');
person_age(10);
console.log("_".repeat(70));
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
console.log('person age is 17');
person_age(17);
console.log("_".repeat(70));
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
console.log('person age is 53');
person_age(53);
console.log("_".repeat(70));
// • If the person is age 65 or older, print a message that the person is an elder.
console.log('person age is 75');
person_age(75);
console.log("_".repeat(70));
