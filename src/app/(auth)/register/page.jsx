"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function page() {
    const[formData,setFormData]=useState({});
   const router = useRouter();
    const handleSubmit= ()=>{
        if(formData){
            const obj = JSON.stringify(formData);
           localStorage.setItem("user",obj)
         router.push('/')
        }
    }
    const handleInput= (e)=>{
        const {name,value} = e.target
        setFormData(prev =>({...prev,[name]:value}))
    }
  return (
    <div>
        <input placeholder='name' type='text' onChange={handleInput}/>
        <input placeholder='pass' type='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default page