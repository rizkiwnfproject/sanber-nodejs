console.log("===================NOMOR 1===================")
const tasks = [
    {
        id: 1,
        title: "Kerjaan 1",
        description: "ceritain detail pekerjaanya disini",
        isDone: false,
    },
    {
        id: 2,
        title: "Kerjaan 2",
        description: "ceritain detail pekerjaanya disini",
        isDone: true,
    },
    {
        id: 3,
        title: "Kerjaan 3",
        description: "ceritain detail pekerjaanya disini",
        isDone: true,
    },
];

function taskShow(tasks) {
    return tasks.map(task => {
        console.log(
            `Task ID: ${task.id} \nTitle: ${task.title} \nDescription: ${task.description} \nStatus: ${task.isDone ? "Selesai" : "Belum Selesai"}\n`);
    })
}

taskShow(tasks)


console.log("===================NOMOR 2===================")
// sebuah fungsi yang bernama sumOfNumbers memiliki parameter spread ...numbers yang mana berarti dapat menampung banyak isi. 
function sumOfNumbers(...numbers) {
    // memberikan return value berupa angka/parameter yang direduce, dimana angka/parameter ini ditambahkan yang sebelumnya diinisialisasi 0. total sebelumnya ditambah oleh number yang baru
    return numbers.reduce((total, number) => total + number, 0);
}
// disini merupakan pemanggilan fungsi sumOfNumbers yang didalamnya diisi oleh parameter yang kemudian dikirimkan ke fungsi. hasil dari pemanggilan fungsi tersebut disimpan ke dalam variabel result
const result = sumOfNumbers(1, 2, 3, 4, 5);
// setelah mendapatkan hasilnya dari pemanggilan fungsi, variabel result ditampilkan menggunakan console.log
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result} `);


