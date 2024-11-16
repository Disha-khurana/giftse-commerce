import React from 'react'
import LifestylePage from './LifestylePage'

function page({params:{slug}}) {
  return (
    <LifestylePage slug={slug}/>
  )
}

export default page
