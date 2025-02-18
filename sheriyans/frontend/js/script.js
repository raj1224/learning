//1. console,alert,prompt
// console.log("hello");
// console.error("error aa gya");
// console.warn("this is warning")

// alert("hello");

// prompt("naam btao apna?");

// 2. variables
// let,const:-ec6
// var:-ec5
// var window me save store hota h

// 3.intepreter vs compilor
// intepretet->bytecode->0,1
// compilor->0,1

// 4.window
// alert,prompt,console,document etc are the part of the window object 

// 5. data types
// primitives:- baki sb
// reference:-(),[],{}

// how to copy reference types:-
// let arr=[2,4,5]
// let b=[...arr];

// 6.conditionals
// if elseif else ,ternary operator,switch case

// if(true or truthy/false or falsy) aata bs.
// falsy values:-( false,0,"",'',nan,undefined,null,document.all )hoti h
// truthy:- baki sb truthy values hoti h
 
// how to check=> Boolean(value)

// 7.loops=>repeatation
// for,while,dowhile,foreach,forin,forof


// 8.fucntions
// es5 and es6
// es5=> fucntion statements,function expressions,anonymous function 
// es6=> fat arrow fucntion
// a) basic fat arrow funtion 
// b) fat arrow with one param 
// c) fat arrow with implicit return 


function abcd(){
    // function statement
}
var abcd = function(){
    // function expression
}
function(){
    // anonumous function
}


// fat arrow

var c= ()=>{

}
var c = a =>{

}
var d = (ab)=> 12;

// 9.null/undefined/not defined

// null or undefined => is a value 
// not defined is a error 

// 10.Arrays

// forEach
var arr = [2,52,61,624,6];
arr.forEach(function(value){
    console.log(value)
})

// 11.objects

// objects=>ek bande ki kafi details
// arrays=>kafi bando ki ek detail

const obj = {
    name:'raj',
    age:20,
};

// 12. scynchronous and asynchronous js 

// main stack=>synchorous code
// side stack=> asynchronous code

// 13.this 

// global-window
console.log(this);
// fucntion-window
function abcd(){
    console.log(this);
}
abcd();
// method-obj
// function inside a obj is called method 
var osdf ={
    name:function () {
        console.log(this.age);
    },
    age:25,
    email:"gasgas"
};
// fnc inside method (es5)-window
var obj2 = {
    sayName:function(){
        console.log(this.age);
        function childfnc() {
            console.log(this.age)
        }
    },
    age:24
};
obj2.sayName();
// fnc inside method (es6)-obj
var obj3 = {
    sayName:function(){
        console.log(this.age);
        const childfnc= ()=> {//arrow function this ki value parent se leta h
            console.log(this.age)
        }
    },
    age:24
};
obj3.sayName();

// constructor fnc me this ki value - new blank obj
// new lgate h bs
function add(){
    console.log(this);
}
const ans = new add();

// event listener mein this ki value - that element jispar evenet lis. laga ho
document.querySelector("button")
.addEventListener("click",function(){
    console.log(this);
})


// 14.call,bind ,apply
// function ko call krne ke tarike h obj ko this maankr

// const obj3 ={
//     naam:"raj"
// }
// function abcd(){
//     console.log(this);
// }
// abcd.call(obj)

// aplly

const obj4 ={
    naam:"raj"
}
function abcd(){
    console.log(this,a,b,c);
}
abcd.call(obj,[1,2,4])

// bind
const obj3 ={
        naam:"raj"
    }
function abcd(){
    console.log(this);
}
const baadmeusekrnekeliye=abcd.bind(obj)
baadmeusekrnekeliye();


// 16.prototype inheritence

function makeHuman(name,age){
    this.name= name;
    this.age = age;
}
makeHuman.prototype.printMyName=function(){
    console.log(this.name);
}
const human1 = new makeHuman("raj",21);
const human2 = new makeHuman("pinky",28);

// closures
// function timer(){
//     var a = 12;
//     return setTimeout(function(){
//         console.log(a);
//     },2000)
// }
// var ans = timer();

// 17.event bubbling/event delegation

var parent = document.querySelector("#parent");
parent.addEventListener("click",function(details){
    if(details.target.id === "play"){
        console.log("play song")
    }
    else if(details.target.id==="pause"){
        console.log("pause song"); 
    }
})

// 18.higher order function 
function abcd(){
    return function(){

    }
}
// or/and 
function abcd(param){

}
abcd(function(){

})

// foreach is a higher order function

// 19.Error handling - try/catch

function divide(a,b){
    try{
        if(b===0){
            throw Error("koi gadbad hui");
        }
        console.log(a/b);
    }
    catch(err){
        console.error(err);
    }
}
divide(12,0);

// 20. create your event 
const yourevent = new Event("gharjaao");
document.querySelector("button")
.addEventListener("gharjaao",function(){
    alert("jaa rha hu");
})

document.querySelector("button").dispatchEvent();

