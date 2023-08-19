// common models
// http
// url
// Fs
// Express
// Os 

const http = require('http');

http.createServer((req,resp)=>{
    // req: request process
    // resp: for writing response

    resp.writeHead(200,{'content-type':'text/html'});
    resp.write("<h1>Nameste World</h1>");
    resp.end("<p>ok bye bye</p>");
}).listen(8080);