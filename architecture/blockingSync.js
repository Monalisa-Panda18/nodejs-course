
const fs =require("fs");

//blocking operations 

console.log("a")
const result =fs.readFileSync("text.txt","utf-8");
console.log(result)
console.log("b")
console.log("c")
console.log("d")

//it performs first console.log a then the readFileSYnc function then wait for complete the print result then consoleb then console cthen console d.