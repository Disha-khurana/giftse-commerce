import React from 'react'
import ComboPage from './ComboPage'

function page({params}) {
  const { slug } = params;
  return (
    <ComboPage slug={slug}/>
  )
}

export default page
