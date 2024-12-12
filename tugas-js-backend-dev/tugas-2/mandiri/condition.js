// Mandiri
console.log("=================MANDIRI=================")
const prompt = require('prompt-sync')();

let number = parseInt(prompt("input your number : "))
if (number % 2 == 0) {
    console.log(number + " it's Genap")
} else {
    console.log(number + " it's Ganjil")
}

let number_day = parseInt(prompt("input your number of day(around 1-7) : "))
switch (number_day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}