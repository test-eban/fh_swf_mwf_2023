// http is an inbuilt module in Node.js
const http = require('http');
const express = require('express')

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

// createServer method takes a callback function as argument
// the callback function takes two arguments req and re
const server = http.createServer(function (req, res) {
    console.log(`${req.method} request received at ${req.url}`);
    if (req.url === '/html') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200; // 200 = OK
        res.write("<h1>Hello World</h1>");
        res.end();
    } else if (req.url === '/plain') {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200; // 200 = OK
        res.write("<h1>Hello World</h1>");
        res.end();
    } else if (req.url === '/json') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200; // 200 = OK
        res.write(JSON.stringify({"firstName": "Harry", "lastName": "Potter"}));
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 400; // 400 = Bad request
        res.write("<h1>Sorry, this page is not available</h1>");
        res.end();
    }
});


// server is listening to incoming requests on port 3000 on localhost
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});