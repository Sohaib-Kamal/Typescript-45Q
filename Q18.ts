// Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
let place_wish = [ "Saudia", "Istambul", "Chechniya", "London", "Oman"]
console.log(place_wish)
// • Print your array in alphabetical order without modifying the actual list.
let sorted_array = [...place_wish].sort()
console.log(sorted_array)
// • Show that your array is still in its original order by printing it.
console.log(place_wish)
// • Print your array in reverse alphabetical order without changing the order of the original list.
let reverse_sorted_array = [...place_wish].sort().reverse()
console.log(reverse_sorted_array)
// • Show that your array is still in its original order by printing it again.
console.log(place_wish)
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(place_wish.reverse())
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(place_wish.reverse())
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
place_wish.sort()
console.log(place_wish)
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
place_wish.sort().reverse()
console.log(place_wish)



