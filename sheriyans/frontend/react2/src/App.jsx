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
//   const age = 21;


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

// 3.Components

// import React from 'react'
// import Card from './Components/Card'

// const App = () => {
//     const data = [
//         {
//             id: 1,
//             name: 'raj',
//             profession: 'developer',
//             added: false,
//             img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//         },
//         {
//             id: 2,
//             name: 'pinky',
//             profession: 'developer',
//             added: false,
//             img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//         },
//         {
//             id: 3,
//             name: 'chhavi',
//             profession: 'developer',
//             added: false,
//             img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//         },
       
//     ]
//   return (
//     <div>
//         <div className='bg-zinc-100 p-5 h-screen w-full'>
//             {data.map((elem,index)=>{
//                 return <Card key={index} name= {elem.name} profession={elem.profession} added={elem.added} img={elem.img}/>
//             })}

//         </div>
        
//     </div>
//   )
// }

// export default App


// 4. Axios API

// import React, { useState } from 'react'
// import axios from 'axios'

// const App = () => {
//     const [data, setdata] = useState([])
//     const gettingdata = async () => {
//         const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
//         setdata(response.data)
//     }
//   return (
//     <div className='p-5 bg-zinc-100'>
//         <button onClick={()=>gettingdata()} className='px-3 py-1 bg-green-400 active:scale-90'>get data </button>
//         <div className='h-screen w-full bg-white'>
//             {/* data will be displayed here */}
//             {data.map((elem,index)=>{
//                 return (
//                     <div key={index} className='flex items-center justify-center p-5'>
//                         <img src={elem.download_url} alt="random image" className='h-20 w-20 rounded-full'/>
//                     </div>
//                 )
//             })}

//         </div>
//     </div>
//   )
// }

// export default App

// 5.routing

// import React from 'react'
// import Header from './Components/Header'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import { Routes, Route } from'react-router-dom'

// const App = () => {
//   return (
//     <div>
//         <Header/>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/contact" element={<Contact/>}/>
//         </Routes>
//     </div>
//   )
// }

// export default App

// 6.context api
// context api is used to centralized the data 
import React, { useContext } from 'react'
import Header from './Components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { DataContext } from './context/usercontext'


const App = () => {
    const data = useContext(DataContext)
    console.log(data)
  return (
    <div>
       <h1> the data is :{data}</h1>
    </div>
  )
}

export default App
