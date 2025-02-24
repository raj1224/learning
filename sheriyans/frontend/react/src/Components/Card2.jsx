import React from 'react'

function Card2() {
    const data =[
        {name:"mahiya ve", image:"https://picsum.photos/id/100/200/300", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name:"Sanam teri kasam", image:"https://picsum.photos/id/100/200/300", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},

    ];
    const handler = ()=>{
        console.log('Download button clicked');
        alert('File downloaded successfully');
    }
  return (

    // <div>Card2</div>
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center'>
        {
            data.map((elem,index)=>(
            <div className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
            <h3 className='font-semibold text-xl'>{elem.name}</h3>
            <p className='text-xs mt-2'>{elem.description}</p>
            <button key={index} onClick={handler} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download</button>
            </div>)

            )
        }
        
        

    </div>
  )
}

export default Card2