// Buat fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan.
// Buat fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan.

function circle(number) {
    return 3.14 * number * number;
}
function quadrate(number) {
    return number * number;
}

const prompt = require('prompt-sync')();

let jari_jari = parseInt(prompt("input your number : "));
let resultCircle = circle(jari_jari);
console.log("hasil luas lingkaran dari jari-jari", jari_jari, "adalah", resultCircle);


let numberOfArray = [];
let numberOfArrayQuadrate = [];
let stop = false;
let number;
do {
    number = parseInt(prompt("input your array number : "));
    numberOfArray.push(number);
    numberOfArrayQuadrate.push(quadrate(number))
    let answer = prompt("Apakah kamu mau menambahkan angka lagi? (y/t)")
    if (answer == 't') {
        stop = true
    }
} while (stop == false)

console.log("array sebelum dikuadrat : ", numberOfArray)
console.log("array setelah dikuadrat : ", numberOfArrayQuadrate)