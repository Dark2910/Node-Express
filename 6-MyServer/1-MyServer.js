const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('Hello. :D');

/*     console.log(req); */
/*     console.log(req.url); */
/*     console.log(req.method); */
/*     console.log(req.headers); */
/*     console.log(res.statusCode); */

    res.end();
})

const PORT = 3002;
const direction = `http://localhost:${PORT}/`

server.listen(PORT,() => {
    console.log(`Server listening... ${direction}`);
})