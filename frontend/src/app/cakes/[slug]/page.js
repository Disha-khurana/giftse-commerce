import React from 'react'
import CakeNav from './CakeNav'

function page({params}) {
  const { slug } = params;
  return (
   
    <CakeNav slug={slug}/>
  )
}

export default page
