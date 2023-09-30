'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
// import { useHistory } from "react-router-dom";
import axios from 'axios';
// import './App.css'
// import jwt from "jsonwebtoken";
// import { BrowserRouter } from 'react-router-dom';





function Login() {
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function submit(e) {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
        withCredentials: true,
      }).then(res => {
        if (res.data.message === "userfound") {
          // console.log(res.data);
          navigate.push(
            '/about',
            {
              state: {
                data2: res.data.e
              }
            }
          );
        }
        else if (res.data.message === "password doesnt match") {
          alert("wrong password")
        }
        else {
          alert("user has not signed up")
        }
      })
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h1 className=' font-bold text-[26px]'>LOGIN</h1>


        <div className='flex mt-[20px]'>
          <div className='w-[120px] flex flex-col gap-[20px]'>
            <p>
              Email
            </p>
            <p>
              Password
            </p>
          </div>
          <div className='w-[300px] flex flex-col gap-[20px]'>

            <input type="text" id='email' onChange={(e) => setEmail(e.target.value)} className='border-solid border-[2px] rounded-sm border-gray-300 h-[30px]' />
            <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} className='border-solid border-[2px] rounded-sm border-gray-300 h-[30px]' />

          </div>
        </div>



        <button type='submit' onClick={submit} className='mt-[50px]  w-[100px] h-[40px] bg-black hover:bg-white text-white hover:text-black border-solid border-[2px] rounded-sm border-gray-300 p-1'>submit</button>


      </div>
    </>
  )
}

export default Login;
