'use client'
import Header from "../../components/header/page";
import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/router';
import Nexthead from "../../components/header/nexthead"
import Herosection from "../../components/header/herosection"

// import RichTextEditor from '../components/Richtexteditor/page';
import axios from "axios"






export default function Main() {

    const [data, setData] = useState({});
    const [show, setshow] = useState(false)
    const navigate = useRouter();

    var showing

    const getdata = async () => {
        await axios.get("http://localhost:5000/website").then((res) => {
            console.log(res.data.data[0].attributes.image.data.attributes.url);
            // console.log(res.data.data[0].attributes.fortext);
            // console.log(res.data.data[0].attributes.nav);
            // console.log(res.data.data[0].attributes.textc);



            setData(res.data.data)
            setshow(true);
            // console.log(data[0].attributes.nav)
            // console.log(data[0].attributes.fortext)

            // navigate.push('/login');
            console.log("done")
        })
    }

    (show) ? console.log(data) : ""


    useEffect(() => {
        getdata()

    }, [])

    return (

        <div>
{(show)?            <div>
                <Header ></Header>
                <Nexthead data={data[0].attributes.nav}></Nexthead>
                <Herosection dataa={data[0].attributes.fortext} datab={data[0].attributes.textc} img={data[0].attributes.image.data.attributes.url}></Herosection>
            </div>:"Loading"}



        </div>
    )
}