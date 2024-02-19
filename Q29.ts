// Q29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits = ["banana", "apple", 'orange', 'peach', 'watermelon']
console.log(favorite_fruits)
console.log('Checking if banana is in the array.')
if (favorite_fruits.includes("banana")) {console.log('I really like bananas. n')}
else {console.log('this fruit is not present in the array. \n')}

console.log('Checking if guava is in the array.')
if (favorite_fruits.includes("guava")) {console.log('I really like guavas. \n')}
else {console.log('this fruit is not present in the array. \n')}

console.log('Checking if peach is in the array.')
if (favorite_fruits.includes("peach")) {console.log('I really like peach. \n')}
else {console.log('this fruit is not present in the array. \n')}

console.log('Checking if grapes is in the array.')
if (favorite_fruits.includes("grapes")) {console.log('I really like grapes. \n')}
else {console.log('this fruit is not present in the array. \n')}

console.log('Checking if apple is in the array.')
if (favorite_fruits.includes("apple")) {console.log('I really like apples. \n')}
else {console.log('this fruit is not present in the array. \n')}

