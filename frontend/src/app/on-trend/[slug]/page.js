import React from 'react'
import Trend from './Trend'

function page({params:{slug}}) {
  return (
    <Trend slug={slug}/>
  )
}

export default page
