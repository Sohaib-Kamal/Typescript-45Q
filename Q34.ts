// // Q34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizza_array = ["calzone", "fajita", "BBQ"]
for (let pizza in pizza_array) {console.log(pizza_array[pizza])}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let pizza in pizza_array) {console.log(pizza_array[pizza], 'pizza has good flavor.')}
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log('Frankly, pizzas are not my favourite type of meals. Nevertheless empty stomach craves anything even resembling food and since i am hungry now so lets say I really love Pizza ')


