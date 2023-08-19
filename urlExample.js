const http= require('http');
const url = require('url');

http.createServer((req,resp)=>{

    console.log(req.url);

    // const urlObj = url.parse(req.url);
    const urlObj = url.parse(req.url,true);
    console.log(urlObj);
    console.log(urlObj.pathname);
    console.log(urlObj.query?.name);
    console.log(urlObj.query?.age);

}).listen(3000);