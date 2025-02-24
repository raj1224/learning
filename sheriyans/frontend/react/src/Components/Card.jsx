import React from "react";
function Card(){
    const data =[
        {image:"https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Amazon Basics", Describtion:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",instock:true},
        {image:"https://images.unsplash.com/photo-1641154719048-4bf998cc3cd5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Daily needs ", Describtion:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",instock:false},
        {image:"https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Apple Products", Describtion:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",instock:true},
        
    ]
    return(
        <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
            {data.map((elem,index)=>(
                <div key={index} className="w-52 bg-zinc-100 rounded-lg overflow-hidden">
                <div className="w-full h-32 bg-zinc-300">
                    <img 
                    className="w-full h-full object-cover" 
                    src={elem.image} 
                    alt="" />
                </div>
                <div className="w-full px-3 py-4">
                    <h2>{elem.name} </h2>
                    <p className="text-xs mt-3">{elem.Describtion}</p>
                    <button className={`px-4 py-1 text-xs rounded text-zinc-100 mt-3 ${elem.instock? "bg-blue-600" : "bg-red-600"}`}>{elem.instock? "In Stock" : "Out of Stock"}</button>
                </div>
            </div>
            ))}
        </div>
    )
}
export default Card;