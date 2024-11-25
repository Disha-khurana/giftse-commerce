import React from 'react'
import Variety from './Variety'

function page ({params}) {
  const { slug } = params;
  return (
    <Variety slug={slug}/>
  )
}

export default page
