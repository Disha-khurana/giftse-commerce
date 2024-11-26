import React from 'react'
import Personalise from './Personalise';



function page({params}) {
  const { slug } = params;
  return (
    <Personalise slug={slug}/>
  )
}

export default page