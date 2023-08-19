// Fs module : to read, write,create,delete file

const fs = require('fs');

// read file
fs.readFile('./abc.txt',(error,data)=>{

    if (error) {
        console.log("error");
        console.log(error);
    }else{
        console.log(data.toString());
    }
})

console.log("hhhh");
// write file

// let content = "this file is created dynamically using Fs module. and the content also dynamic"
// fs.writeFile('./test.txt',content,(error)=>{

//     if(error){
//         console.log("error");
//         console.log(error);
//     }

// })

// append file content
// fs.appendFile('./test.txt'," append this content",(error)=>{

//     if(error){
//         console.log("error");
//         console.log(error);
//     }

// });


// delete file
fs.unlink('./test.txt',(error)=>{
    if(error){
        console.log("error");
        console.log(error);
    }else{
        console.log("delete");
    }
});
