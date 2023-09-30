// import '../../public/globals.css'
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import axios from "axios"
// import {Router}


export default function index() {
    const navigate = useRouter();





    return (
        <div>
           <textarea name="" id="" cols="30" rows="30" placeholder='write here'></textarea>
        </div>
    )
}