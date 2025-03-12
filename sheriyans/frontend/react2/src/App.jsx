// import React, { useState } from 'react'

// function App() {
//   const [user, setuser] = useState("raj")
//   const changeuser =()=>{
//     setuser("pinky")
//   }
//   const [age,setage]=useState(21)
//   const incrementage =()=>{
//     setage(age+1)
//   }
//   const decrementage =()=>{
//     setage(age-1)
//   }


//   return (
//     <div>
//       <h1>my name is {user}</h1>
//       <button className='bg-amber-300' onClick={changeuser}>change</button>
//       <h2>age is {age}</h2>
//       <button onClick={incrementage}>+1year</button>
//       <button onClick={decrementage}>-1year</button>
//     </div>
//   )
// }

// export default App

// 2.form handling
// import React from 'react'
// import { useState } from'react'

// const App = () => {
//   const submithandler =(e)=>{
//     e.preventDefault() // prevent form from submitting normally

//     console.log('submitted')
//     console.log('username:',username)
//     setusername("")
//   }
//   const [username, setusername] = useState("")
//   return (
//     <div>
//       <form onSubmit={(e)=>submithandler(e)}>
//         <input
//          className='px-5 py-3 bg-zinc-200 rounded'
//           placeholder='write something'
//           onChange={(e)=>{
//             setusername(e.target.value)
//           }}
//           value={username}
//           type="text" />
//         <button className='px-3 py-1 m-3 rounded bg-green-500 text-white'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App