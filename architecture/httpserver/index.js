const http =require('http')  
//ctreate server is for creating the server and this arrow function is for ()=>{} isresponsible for my incoming request
const myServer = http.createServer((req,res)=>{
console.log("new request received") //knowing the request 
res.end("hello form my server");

}) ;

myServer.listen(8000,()=>{console.log("server started")})
