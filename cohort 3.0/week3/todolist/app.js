// onclick,document.queryselector,parentnode,removechild,
// createelement,innerhtml,innertext,appendchild

// todo
// function deletetodo(index){
//     const eledelte= document.querySelector("#todo-"+index);
//     eledelte.parentNode.removeChild(eledelte)
// }
// let counter=0;
// function addtodo(){
//     const value = document.querySelector("#inp").value;
//     console.log(value)
//     const newtodo = document.createElement("div");
//     newtodo.innerHTML= '<div id="todo-'+counter+'"><h3>'+value+'</h3><button onclick="deletetodo('+counter+')">delete</button></div>'
//     document.querySelector("#todo").appendChild(newtodo)
//     counter++;
// }

// background changer

function changecolor(){
    let div = document.querySelector("#box");
    let color = randomcolor()
    div.style.backgroundColor=color;
}
function randomcolor(){
    let red=Math.floor(Math.random()*256);
    // console.log(red)
    let blue=Math.floor(Math.random()*256);
    // console.log(red)
    let green=Math.floor(Math.random()*256);
    // console.log(red)
    let color= `rgb(${red},${blue},${green})`;
    return color;
}

// 3.theme changer
function themechanger(){
    let body =document.querySelector("body");
    body.classList.toggle("blacktheme");


}