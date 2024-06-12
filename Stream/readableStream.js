var fs = require('fs');

var content="";
const readableStream = fs.createReadStream('./test');
readableStream.on('data',(chunk)=>{
    console.log("chunkData:",chunk);
    content +=chunk.toString();
});

readableStream.on('error',(err)=>{
    console.log("err: ",err);
});

readableStream.on('end',(data)=>{
    console.log("content: "+content);
});
