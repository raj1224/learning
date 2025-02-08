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


// INBUILT CLASSES

// const now = new Date()
// console.log(now.getFullYear());


// const map = new Map();
// map.set('name','raj');
// map.set('age',20);
// console.log(map.get('name'))


// PROMISES

function random(resolve){
    // resolve()
    setTimeout(resolve,3000);

}
let p =new Promise(random);
console.log(p)

function callback(){
    console.log("promises sucessed!");
}
p.then(callback);

// function setTimeoutPromisified(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms)); 
// }
// function afterdone(){
//     console.log("5 second have passed");
// }
// setTimeoutPromisified(5000).then(afterdone);//Synctactically cleaner