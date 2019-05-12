const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(`This is the current file name -> ${path.basename(__filename)}`);
