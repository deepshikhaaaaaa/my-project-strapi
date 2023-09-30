'use client'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useHistory } from "react-router-dom";
import axios from 'axios';
// import './App.css'
import { useRouter } from 'next/router';





function Signup() {
  const navigate = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhonenumber] = useState("");

  const [password, setPassword] = useState("");
  function submit(e) {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/signup", {
        email: email,
        password: password,
        name: name,
        phone: phone,
      }).then((e) => {
        navigate.push('/login')
      })
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h1 className=' font-bold text-[26px]'>SIGNUP</h1>
        <form onSubmit={submit} className=' mt-[20px]'>
          <div className='flex  '>
            <div className='w-[120px] flex flex-col gap-[20px]'>
              <p className='h-[30px]'>
                Name
              </p>
              <p className='h-[30px]'>
                Phonenumber
              </p>
              <p className='h-[30px]'>
                Email
              </p>
              <p className='h-[30px]'>
                Password
              </p>
            </div>
            <div className='w-[300px] flex flex-col gap-[20px]'>
              <input type="text" id="name" onChange={(e) => setName(e.target.value)}  className='border-solid border-[2px] border-gray-300 h-[30px]'/>
              <input type="text" id="pno" onChange={(e) => setPhonenumber(e.target.value)} className='border-solid border-[2px] border-gray-300 h-[30px]' />
              <input type="text" id='email' onChange={(e) => setEmail(e.target.value)} className='border-solid border-[2px] border-gray-300 h-[30px]' />
              <input type="text" id="password" onChange={(e) => setPassword(e.target.value)}  className='border-solid border-[2px] border-gray-300 h-[30px]'/>

            </div>




            {/* <div>
              <label htmlFor="name" className='w-[100px] h-[50] bg-blue-200'></label>
            </div>
            <div>
              <label htmlFor="pno" className='w-[100px] bg-blue-200'></label>
            </div>
            <div>
              <label htmlFor="email" className='w-[100px] bg-blue-200'></label>
            </div>
            <div>
              <label htmlFor="password" className='w-[100px] bg-blue-200'></label>
            </div> */}
          </div>
           <div className='flex justify-center items-center'>
           <button type='submit' className='mt-[50px]  w-[100px] h-[40px] bg-black hover:bg-white text-white hover:text-black border-solid border-[2px] border-gray-300 p-1'>submit</button>

           </div>
        </form>
      </div>
    </>
  )
}

export default Signup;
