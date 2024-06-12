var fs = require('fs');

const readStream = fs.createReadStream('./test');
const writeStream = fs.createWriteStream('./abc');

readStream.pipe(writeStream);