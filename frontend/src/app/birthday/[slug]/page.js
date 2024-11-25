

import React from 'react'
import Content from './comp/Content'



function page({params}) {
  const { slug } = params;
  return (
  <Content slug={slug}/>
  
  )
}

export default page
