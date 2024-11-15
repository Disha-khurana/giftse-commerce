import React from 'react'
import CakeNav from './CakeNav'

function page({params:{slug}}) {
  return (
    <CakeNav slug={slug}/>
  )
}

export default page
