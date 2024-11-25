import React from 'react'
import Choco from './Choco'

function page({slug}) {
  const { slug } = params;
  return (
    <Choco slug={slug}/>
  )
}

export default page
