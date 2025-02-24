import React, { useState } from "react";
import Card from "./Components/Card";
import Card2 from "./Components/Card2";
function App() {
  const data = ["raj","pinky","chhavi","srishti","usha"];
  // usestate
  // const ans = useState({name:"raj"});
  // console.log(ans[0]);
  // ans[0]=value
  // ans[1]=function;
  // const [banned,setbanned]=useState(false);
  // const [val,setval]=useState(12);
  const [val, setval] = useState({name: "raj", isbanned: false });
  return (
    // <>
    //   {/* {data.map((value,index)=>(
    //     <div key={index} className="px-3 py-4 bg-zinc-300 rounded-md w-fit">
    //       {value}
    //     </div>
    //   ))} */}

    //   {/* <Card/> */}
      
    //   {/* <Card2/> */}
    //  {/* App */}
    // </>
    // <div className="p-4">
    //   <h1>{banned.toString()}</h1>
    //   <button onClick={()=>setbanned(!banned)} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500">click to ban</button>
    // </div>

    // <div className="p-4">
    //   <h1>{val}</h1>
    //   <button onClick={()=>setval(prev=>prev+1)} className=" px-3 py-1 bg-blue-500 rounded-full">change karo</button>
    // </div>

    <div className="p-4">
      <h1>name:{val.name}</h1>
      <h2>banned:{val.isbanned.toString()}</h2>
      <button onClick={()=>setval({...val , isbanned: !val.isbanned})} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white">click to ban</button>
    </div>
    // refrence type ki value me aise hi krte h change purani value ko copy krke.
    
  );
}

export default App;