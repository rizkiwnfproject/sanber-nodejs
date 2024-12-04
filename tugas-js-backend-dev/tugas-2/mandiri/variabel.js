// const, let, tipe data primitif, tipe data non primitif
// Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.
// Buat program yang mencakup semua tipe data primitif dan non-primitif, serta menggunakan operator aritmatika dan perbandingan.


const title = "Buku Kancil Dengan Buaya";
var stock = 15;
const forChild = true;
let howField = null;
const id = Symbol('ID123');
let sampul;

console.log("terdapat buku berjudul =====", title, "===== dengan stock", stock, "dengan id", id, "untuk sampulnya", sampul, "dan isinya", howField);
stock = 10;
howField = "interesting"
console.log("terdapat buku berjudul =====", title, "===== dengan stock", stock, "dengan id", id, "untuk sampulnya", sampul, "dan isinya", howField);
if(forChild){
    console.log("Buku ini untuk anak-anak");
}else{
    console.log("Buku ini bukan untuk anak-anak");
}

const fruits = ['mango', 'apple', 'lemon'];
const person = {
    name: "Rizki Wahyu Nurcahyani F", 
    age: 22,
    job: "Website Developer",
}

console.log("nama buah :");
fruits.forEach(fruit=>{
    console.log("-",fruit)
})


const numberA = 10
const numberB = 20
const stringA = "10"

console.log(numberA, "+", numberB, "hasilnya : ", numberA+numberB)
console.log(numberA, "-", numberB, "hasilnya : ", numberA-numberB)
console.log(numberA, "*", numberB, "hasilnya : ", numberA*numberB)
console.log(numberB, "/", numberA, "hasilnya : ", numberB/numberA)
console.log(numberB, "%(modulus/sisa bagi)", numberA, "hasilnya : ", numberB%numberA)

console.log(numberA, "==", stringA, "hasilnya : ",numberA == stringA);  
console.log(numberA, "===", stringA, "hasilnya : ", numberA === stringA);
console.log(numberA, "!=", stringA, "hasilnya : ", numberA != stringA);  
console.log(numberA, "!==", stringA, "hasilnya : ", numberA !== stringA); 
console.log(numberA, ">", numberB, "hasilnya : ",numberA > numberB);  
console.log(numberA, "<=", numberB, "hasilnya : ",numberA <= numberB); 
