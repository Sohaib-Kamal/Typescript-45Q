// Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

console.log("Conditional Test 1:")
let namenew = 'Sohaib'
console.log("Is name1 == 'sohaib'? I predict False")
console.log(namenew =='sohaib')

console.log("Conditional Test 2:")
let x = 1
    x +=2
console.log("Is x==3? I predict True")
console.log(x==3)

console.log("Conditional Test 3:")
let Roll_no = "1234"
console.log("Is Rollno === 1234? I predict False")
console.log(Roll_no === 1234)

console.log("Conditional Test 4:")
let y=10
console.log("Is y + '10' = 1010? I predict True")
console.log(y + '10'=== '1010')

console.log("Conditional Test 5:")
let z = 7
let b = 13
    console.log("Is z*z + 2zb + b*b == 400? I predict True")
console.log(z*z + 2*z*b + b*b == 400)

console.log("Conditional Test 6:")
let Physics_theory = 50
let Physics_practical = 13
let result = 'unknown'
if (Physics_theory>=28 && Physics_practical >=5) {result = 'pass'}
else {result = 'fail'}
console.log('Is result == "pass"?I predict True')
console.log(result == 'pass')

console.log("Conditional Test 7:")
let r = 5
let w = 3
console.log('Is r > 4 || w > 4? I predict True')
console.log(r > 4 || w > 4)

console.log("Conditional Test 8:")
let f = true
let j = false
console.log('I predict f!=!j to be False')
console.log(f!=!j)

console.log("Conditional Test 9:")
let h = 'M'
let i = h + 5
console.log('Is i != M5? I predict False')
console.log(i != 'M5')

console.log("Conditional Test 10:")
let Arr = [1, 2, 3, 4, 5]
console.log('is Arr[1] == 1? I predict False')
console.log(Arr[1] == 1)
