

import React from 'react'
import Content from './comp/Content'

function page({params:{slug}}) {
  return (
  <Content slug={slug}/>
  
  )
}

export default page
