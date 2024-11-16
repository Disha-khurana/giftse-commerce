import React from 'react'
import Choco from './Choco'

function page({params:{slug}}) {
  return (
    <Choco slug={slug}/>
  )
}

export default page
