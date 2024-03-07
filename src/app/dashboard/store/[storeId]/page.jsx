"use client"

import { useParams } from 'next/navigation'
import React from 'react'
const page = () => {
    const {storeId} = useParams();
  return (
    <div>page{storeId}</div>
  )
}

export default page