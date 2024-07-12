
const file = require("fs");   // "fs" is nodejs built in module if  we import the path(./hello.js ) then this module created by us .

//synchronous ...
// file.writeFileSync("./text.txt","creating our first synchronous file in node js");

//asynchronous ...
file.writeFile("./test.txt","creating our first asynchronous file in node js" ,(err)=>{});


