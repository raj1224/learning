import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  // console.log(handleLogin)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const sumbitHandler =(e)=>{
    e.preventDefault();
    console.log(email, password);
    handleLogin(email,password);
    console.log("form submitted");
    setemail('');
    setpassword('');
  }
  return (
    <div className='bg-black h-screen w-full flex justify-center items-center'>
        <div className='h-120 w-120 border-2  rounded-2xl flex flex-col justify-center items-center border-emerald-600 p-20'>
          <form className='flex flex-col items-center justify-center' 
          onSubmit={(e)=>
            {sumbitHandler(e)
            }} >
              <input required 
              className='placeholder-gray-200 outline-none text-white px-7 py-4 text-xl w-60 text-center border-emerald-600 m-5 border-2 rounded-full ' 
              placeholder='enter your email' type="email"
              value={email} 
              onChange={(e)=>{
                setemail(e.target.value);
              }} />
              <input required
               className='outline-none placeholder-gray-200 text-white px-7 py-4 text-xl w-60 text-center border-emerald-600 m-5 border-2 rounded-full '
                placeholder='enter your password' type="password"
                value={password}
                onChange={(e)=>{
                  setpassword(e.target.value);
                }} />
              <button className=' px-22 py-3 rounded-full text-gray-200 outline-none  text-xl mt-2 bg-emerald-600  font-bold'>submit</button>
          </form>
        </div>
    </div>
  )
}

export default Login