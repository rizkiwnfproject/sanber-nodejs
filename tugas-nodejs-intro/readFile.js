const fs = require('fs');

// Path ke file teks yang ingin dibaca
const filePath = 'sample.txt';

// Membaca file teks secara asinkron
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error membaca file: ${err.message}`);
        return;
    }
    console.log(`Isi file:\n${data}`);
});