const http = require('http');
const {infoCourses} = require('./3-Courses.js');

const handleRequestGet = (req, res) => {
    const path = req.url;

    if(path === '/') {
        return res.end('Welcome to my first server and API using Node.js');

    } else if(path === '/courses') {
        return res.end(JSON.stringify(infoCourses));

    } else if (path === '/courses/programming'){
        return res.end(JSON.stringify(infoCourses.programming));

    }

    res.statusCode = 404;
    return res.end('Source not found.');
}

const handleRequestPost = (req, res) => {
    const path = req.url;

    if(path === '/courses/programming') {
        res.writeHead(200, { 'Content-Type': 'application/json' })

        let body = '';
        req.on('data', (content) => {
            body += content;
        })

        req.on('end', () => {
            console.log(body);
            console.log(typeof body);

            body = JSON.parse(body);

            console.log(typeof  body);
            console.log(body.title);

            res.end('Hello POST')
        })
    }

    res.statusCode = 404;
    return res.end('Source not found.');
}

const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return handleRequestGet(req, res);
        case 'POST':
            return handleRequestPost(req, res);
        default:
            res.statusCode = 501;
            console.log(`Request ${method} did not support by the server.`);
            break;
    };
})

const PORT = 3002;
const URL = `http://localhost:${PORT}/`;

server.listen(PORT, () => {
    console.log(`${URL} Server listening...`);
});
