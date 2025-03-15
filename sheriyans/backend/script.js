// // 1. npm init
// // 2. readfile,append
// // 3. node script.js

// // 1.FS module
// const fs = require('fs');
// fs.writeFile("hey.txt","hey kese ho",function(err){
//     if(err) console.log(err);
//     else console.log("done")
// })
// fs.appendFile("hey.txt","me to thik hu",function(err){
//     if(err) console.log(err);
//     else console.log("done")
// })
// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log("done")
// })
// fs.copyFile("hello.txt","./copy/chacha.txt",function(err){
//     if(err) console.log(err.message);
//     else console.log("done")
// })
// fs.unlink("hello.txt",function(err){
//     if(err) console.log(err.message);
//     else console.log("done")
// })
// fs.rm("./copy",function(err){//only for empty folders
//     if(err) console.log(err.message);
//     else console.log("done")
// })
// fs.rm("./copy",{recursive:true},function(err){
//     if(err) console.log(err.message);
//     else console.log("done")
// })

// 2.HTTP,https Server-protocols
const http = require("http");
const server = http.createServer(function(req,res){
    res.end("hello world");
})
server.listen(3000);
