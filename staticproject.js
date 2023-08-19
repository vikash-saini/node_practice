const http = require('http');
const url= require('url');
const fs = require('fs');

http.createServer((req,resp)=>{
    const path = req.url;

    resp.writeHead(200,{'content-type':'text/html'});
    if (path =='/home') {
        console.log('this is home');
        const fileContent = fs.readFileSync('./views/home.html');

        resp.write(fileContent);
    }else if (path =='/about') {
        console.log('this is about');
        const fileContent = fs.readFileSync('./views/about.html');
        resp.write(fileContent);
    }

    resp.end();
}).listen(8081);