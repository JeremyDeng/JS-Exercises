// 3. Write a function that takes a number (from 1 to 12) and return its corresponding month
// name as a string.

var monthArray = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function numberToMonth(num) {
    return monthArray[num];
}

console.log(numberToMonth(1));
console.log(numberToMonth(6));
console.log(numberToMonth(12));