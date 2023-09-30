'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
// import RichTextEditor from '../components/Richtexteditor/page';
import axios from "axios"
// import {Router}

export default function Index() {

    const[head,setHead]=useState("")
    const[des,setDes]=useState("")
    const[content,setContent]=useState("")

  const navigate = useRouter();

    const submit = async () => {
        if(head.length>0 && content.length>0)
        {
            const updata={
                "data":{
                    "heading":head,
                    "description":des,
                    "content":content
                }
            }
            await axios.post("http://localhost:5000/logout",{data:updata}).then((res) => {
            console.log(res.data.data);
            navigate.push('/blog');
            console.log("done")
        })
    }
    else
    {
        console.log("some fields are left untouched")
    }
    }


    return (
        <div className='flex flex-col justify-center items-center'>
            <p>
                heading
            </p>
            <textarea name="" id="" className='border-solid border-gray-400 border-[2px] mb-[10px]' cols="30" rows="1" onChange={(e)=>{
                console.log(e.target.value)
                setHead(e.target.value)
            }}></textarea>
            <p>
                description
            </p>
            <textarea name="" id="" className='border-solid border-gray-400 border-[2px] mb-[10px]' cols="30" rows="1" onChange={(e)=>{
                console.log(e.target.value)
                setDes(e.target.value)
            }}></textarea>
            <p >
                content
            </p>
           <textarea name="" id="" className='border-solid border-gray-400 border-[2px] mb-[10px]' cols="60" rows="20" onChange={(e)=>{
                console.log(e.target.value)
                setContent(e.target.value)
            }}></textarea>
            <button className="w-[100px] bg-black text-white p-2 border-solid border-gray-200 border-[2px]" type='submit' onClick={submit}>submit</button>

        </div>
    )
}