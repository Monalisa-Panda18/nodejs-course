// console.log("hello world");


const maths = require("./math");
console.log("math add value is ",maths.add(2,4),"math add value is ",maths.sub(2,4));


const {add,sub} = require("./math");
console.log("math add value is ",add(2,4),"math add value is ",sub(2,4));

const file =require("./fileSystem/createFile")
console.log("file",file)