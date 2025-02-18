// ASYNC ,OBJECTS ,PROMISES

// Objects

// class Rectange{
//     constructor(width,height,color){
//         this.width=width;
//         this.height=height;
//         this.color=color
//     }

//     area() {
//         const area= this.height*this.width;
//         return area;
//     }
//     paint(){
//         console.log(`painting with this ${this.color} `)
//     }
// }

// const rect= new Rectange(2,4,"red");
// const area = rect.area();
// rect.paint()
// console.log(area);

// new ke sath constructor aata h humesha
// new constructor() and this 
// jahah bhi new likha h mtlb vo ek object return krta h

// INBUILT CLASSES

// const now = new Date()
// console.log(now.getFullYear());


// const map = new Map();
// map.set('name','raj');
// map.set('age',20);
// console.log(map.get('name'))


// PROMISES

// function random(resolve){
//     // resolve()
//     setTimeout(resolve,3000);

// }
// let p =new Promise(random);
// console.log(p)

// function callback(){
//     console.log("promises sucessed!");
// }
// p.then(callback);


// function waitfor3sec(resolve){
//     setTimeout(resolve,10000)
// }
// function setTimeoutPromisified(){
//     return new Promise(waitfor3sec);
// }
// function main(){
//     console.log("main is called")
// }
// setTimeoutPromisified().then(main);//promis based approach
// resolve ka mtlb h ki .then me jo function h use call kro;

// function setTimeoutPromisified(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms)); 
// }
// function afterdone(){
//     console.log("5 second have passed");
// }
// setTimeoutPromisified(5000).then(afterdone);//Synctactically cleaner


// PROMISIFIED VERSION OF READFILE FUNCTION

const fs = require("fs");

function readTheFile(sendTheFileValueHere){
    fs.readFile("a.txt","utf-8",function(err,data){
        sendTheFileValueHere(data);
    })
}
function readFile(fileName){
    // read the file and return its value
    return new Promise(readTheFile);
}
const p = readFile();
function callback(contents){
    console.log(contents);
}
p.then(callback)



const fs = require("fs");
console.log("----top of the line----");

function readTheFile(resolve){
    console.log("readfile called");
    
}
