'use client'
import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/router';
// import RichTextEditor from '../components/Richtexteditor/page';
import axios from "axios"
// import {Router}
import Cards from '../../components/cards/page';

export default function   Index() {

    // const [head, setHead] = useState("")
    // const [des, setDes] = useState("")
    // const [content, setContent] = useState("")
    const [data,setData]=useState({});
const[show,setshow]=useState(false)
    const navigate = useRouter();

   var showing
      
         const getdata=async ()=>{
            await axios.get("http://localhost:5000/blog").then((res) => {
                console.log(res.data.data);
                setData(res.data.data)
                setshow(true);
                // navigate.push('/login');
                console.log("done")
            })
         }   
        
        (show)? console.log(data):""


    return (
        <div className='flex flex-col justify-center items-center'>
<button onClick={()=>{getdata();


} } >getdata</button>
           {
           (show)? (data.map((e,i)=>{
                    // console.log(e)
                    return(
                        <Cards data={e}></Cards>
                    )
                })):""
           }
        </div>
    )
}