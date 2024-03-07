"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function List({routes}) {
    const pathName = usePathname();
  return (
    <ul>
    {routes.map((v,i)=> <li key={i} className={pathName === v.path? 'font-bold':'text-sm-500'}><Link href={v.path}>{v.name}</Link></li>)}    
       </ul>
  )
}

export default List