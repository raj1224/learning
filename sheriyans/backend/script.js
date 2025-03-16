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
// const http = require("http");
// const server = http.createServer(function(req,res){
//     res.end("hello world");
// })
// server.listen(3000);

// 3. Npm basics and advanced

// 1. installing and unistalling
// npm install express
// npm uninstall express
 
// installing particular version using @
// dependencies -packages and package ki dependencies
// devdependencies -bs development me kaam aaenge app bnne ke baad ni
// Script- custom and default

// 4. express

// Express is a Framework
// express js is a npm package
// manages everything from receiving the request and giving the Response

// setting up basic express application
// routing
// const express = require("express");
// const app = express();
// app.get("/",function(req,res){
//     res.send("hello world");
// })
// app.get("/profile",function(req,res){
//     res.send("heelo raj kya k")
// })
// app.listen(3000);

// // middleware-routes se phle or accept hone ke baad agr kuch task krawana ho to use hota h

const express = require("express");
const app = express();
app.use(function(req,res,next){
    console.log("middleware-routes");
    next();
})
// app.get("/",function(req,res){
//     res.send("hello world");
// } )
app.get("/profile",function(req,res,next){
    return next(new Error("Not implemented"));
} )
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("something broke!")
})
app.listen(3000);
