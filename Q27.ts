// // Q27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// version 1
let colors_alien = "green"
console.log("If alien is green")
if (colors_alien == "green") {console.log('Congratulations! You have just earned 5 points.')}
else if (colors_alien == "yellow") {console.log('Congratulations! You have just earned 10 points')}
else if (colors_alien == "red") {console.log('Congratulations! You have just earned 15 points')}
else{console.log('No points for you')}
 
// version 2
colors_alien = "yellow"
console.log("If alien is yellow")
if (colors_alien == "green") {console.log('Congratulations! You have just earned 5 points.')}
else if (colors_alien == "yellow") {console.log('Congratulations! You have just earned 10 points')}
else if (colors_alien == "red") {console.log('Congratulations! You have just earned 15 points')}
else{console.log('No points for you')}

// version 3
colors_alien = "red"
console.log("If alien is red")
if (colors_alien == "green") {console.log('Congratulations! You have just earned 5 points.')}
else if (colors_alien == "yellow") {console.log('Congratulations! You have just earned 10 points')}
else if (colors_alien == "red") {console.log('Congratulations! You have just earned 15 points')}
else{console.log('No points for you')}

// version 4
colors_alien = "blue"
console.log("If alien is neither green nor yellow nor red")
if (colors_alien == "green") {console.log('Congratulations! You have just earned 5 points.')}
else if (colors_alien == "yellow") {console.log('Congratulations! You have just earned 10 points')}
else if (colors_alien == "red") {console.log('Congratulations! You have just earned 15 points')}
else{console.log('No points for you')}



