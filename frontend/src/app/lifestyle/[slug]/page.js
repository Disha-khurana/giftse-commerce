import React from 'react'
import LifestylePage from './LifestylePage'

function page({params}) {
  const { slug } = params;
  return (
    <LifestylePage slug={slug}/>
  )
}

export default page
