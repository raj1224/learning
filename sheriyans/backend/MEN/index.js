// // const catme = require("cat-me")
// // console.log(catme());

// // 2.Making server 
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     // res.end("hello world");
//     // console.log(req.url);

//     // 3. Routing
//     if(req.url=="/about"){
//         res.end("this is about page")
//     }else if(req.url == "/profile"){
//         res.end("this is profile page")
//     }else if (req.url== "/"){
//         res.end("this is home page")
//     }
// })
// server.listen(3000);


// 4.express 
// const express = require("express");
// const app = express();

// app.get("/",(req,res)=>{
//     res.send("this is home page")
// })
// app.get("/about",(req,res)=>{
//     res.send("this is about page");
// })
// app.listen(3000)

// 5.ejs 
// make views folder and make ejs file
// const express = require("express");
// const app = express();
// const morgan = require("morgan");

// // middleware
// // 1.custom middleware 
// // app.use((req,res,next)=>{
// //     console.log("hello world");
// //     //res ya next() krwana jruri hota h wrna reloading hi hoti rhegi
// //     return next();
// // })
// // 2.built in middleware 
// // 3. third party middleware 
// app.use(morgan('dev'))

// app.set("view engine", "ejs")
// app.use(express.json())
// app.use(express.urlencoded({extended:true}));
// // another eg of custom middlewares
// app.get('/',(req,res,next)=>{
//     let a = 5;
//     let b= 3;
//     let result = a + b;
//     console.log(result)
//     next();
// },(req,res)=>{
//     res.render('index');
// })
// app.get("/about",(req,res)=>{
//     res.render('about');
// })

// app.listen(3000)

// 6. form handling 
const express = require("express")
const app = express()

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// for linking css and js file
app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.render('index')
})
app.get("/get-form-data",(req,res)=>{
    console.log(req.query);
    res.send("data received")
})
app.post("/get-form-data",(req,res)=>{
    console.log(req.body);
    res.send("data received")
})
app.listen(3000)

