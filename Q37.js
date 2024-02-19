"use strict";
// Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt_new(size = "large", text = "I love Typescript") { console.log('This shirt is', size, 'in size and the message to be printed on the T-Shirt is "', text + '"'); }
make_shirt_new();
make_shirt_new("medium");
make_shirt_new("small", "Programming is fun!");
