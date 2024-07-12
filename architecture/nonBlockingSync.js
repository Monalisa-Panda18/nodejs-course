 const fs = require('fs');
 const os = require("os")

 console.log (os.cpus().length)
 console.log("a")
 fs.readFile("text.txt","utf-8",(err,result)=>{
    console.log(result)

 });
console.log("b")
console.log("c")
console.log("d")

//it does not wait for the function ,first execute a then b then c then d then the function which takes more time .