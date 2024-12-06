const http = require('http');

// Membuat server HTTP
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

// Menentukan port dan memulai server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});