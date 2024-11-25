import React from 'react'
import Trend from './Trend'

function page({slug}) {
  const { slug } = params;
  return (
    <Trend slug={slug}/>
  )
}

export default page
