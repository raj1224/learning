// Accessing Elements:
let btn=document.querySelector("button");

// Modifying Elements:
innerhtml,innertext,innercontent,src

btn.innerText="heelo";

// classlist and style

btn.style.backgroundColor="black";//inline

btn.classList.add('makeitred');
// add/toggle/remove 

// Creating Elements/removechild/appendchild
var h1 = document.createElement('h1');
h1.textContent= "hey";
h1.classList.add("makeitred");
document.querySelector('body').appendChild(h1);

// Event Handling
// mousehover,mouseleave,click,dblclick
btn.addEventListener("click",function(){
    console.log("inside the btn");
})

// event objects
document.querySelector('body')
.addEventListener("mousemove",function(dets){
    console.log(dets)
})