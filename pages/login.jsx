import React from "react";
import LoginForms from "../components/LoginForms"
import RegisterImg from "../components/RegisterImg";


function Login() {
  return (
    // <div className='mx-auto max-w-6xl text-center drop-shadow-md max-h-[calc(100vh_-_96px)]'>
    // <h1 className='text-4xl py-5 mb-10 font-bold text-gray-800 bg-slate-200'>Expense Tracker Overview</h1>
    
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500' >
      <div className='mx-auto grid  gap-2 form-bg p-10 rounded-2xl'>
      {/* //Input Forms on the left side of the screen (md:grid-cols-2)*/}
      <LoginForms />

      {/* image on the right side of the screen*/}
      {/* <RegisterImg /> */}

      
      </div>

    </div>


  )
}

export default Login;