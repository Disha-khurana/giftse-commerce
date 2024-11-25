import React from 'react'
import Variety from './Variety'

function page ({slug}) {
  const { slug } = params;
  return (
    <Variety slug={slug}/>
  )
}

export default page
