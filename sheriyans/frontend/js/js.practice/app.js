// qs-1
// let p = document.querySelector("p");
// let btn= document.querySelector("button")
// .addEventListener("click",function(){
//     p.innerText="hey guys"
// })

// qs-2
// let img1= document.querySelector("#img1");
// let img2= document.querySelector("#img2");
// let btn = document.querySelector('button')
// .addEventListener('click',function(){
//     img2.src="https://models.bestmodelsagency.com/recursos/clientes/F31110A5-6133-4F2E-96A8-927FA9485371/list.jpg?v1589811317?202410081559";
//     img1.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gisele_Bundchen2.jpg/800px-Gisele_Bundchen2.jpg"
// })

// qs-3
// let inps = document.querySelectorAll("input")
// let btn = document.querySelector("button")
// .addEventListener("click",function (event) {
//     event.preventDefault();
//     for(let i=0;i<inps.length;i++){
//         let content = inps[i].value.trim();
//         if(content===""){
//             alert("invalid input")
//             inps.innertex="";
//             break;
//         }
//     }
// })


// qs4
// let list = document.querySelector("#list")
// let items = document.querySelector(".items")
// let inp = document.querySelector("input")
// let btn = document.querySelector("button");
// let delbtn = document.querySelector("#deletebutton")
// let counter=0

// btn.addEventListener("click",function(){
//     let content = inp.value
//     console.log(content);
//     let newitem = document.createElement("li");
//     newitem.innerHTML=`${content}  <button  id = deletebutton>delete</button>`;
//     list.appendChild(newitem)
// })
// delbtn.addEventListener("click",function(){
//     list.removeChild(newitem)
// })


// qs5

let h3 =document.querySelector("h3")
let btn = document.querySelector("button")

btn.addEventListener("click",function(){
    for(let i=0;i<100000;i++){
        h3.innerHTML=i;
    }

})
