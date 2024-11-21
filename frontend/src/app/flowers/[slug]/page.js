import React from 'react'
import Variety from './Variety'

const page = ({params:{slug}}) => {
  return (
    <Variety slug={slug}/>
  )
}

export default page
