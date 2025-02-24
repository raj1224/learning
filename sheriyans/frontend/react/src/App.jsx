import React from "react";
import Card from "./Components/Card";
import Card2 from "./Components/Card2";
function App() {
  const data = ["raj","pinky","chhavi","srishti","usha"];
  return (
    <>
      {/* {data.map((value,index)=>(
        <div key={index} className="px-3 py-4 bg-zinc-300 rounded-md w-fit">
          {value}
        </div>
      ))} */}

      {/* <Card/> */}
      
      <Card2/>
    </>
  );
}

export default App;