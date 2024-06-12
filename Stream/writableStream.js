var fs = require('fs');

const content = "This is new content to append using writable Stream";

const writableStream = fs.createWriteStream('./test');

writableStream.write(content,'utf-8');

writableStream.end();
writableStream.on('finish',()=>{
    console.log("Finish writing content");
})
