import React from 'react'
import Trend from './Trend'

function page({params}) {
  const { slug } = params;
  return (
    <Trend slug={slug}/>
  )
}

export default page
