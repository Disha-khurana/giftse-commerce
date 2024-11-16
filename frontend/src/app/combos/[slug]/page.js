import React from 'react'
import ComboPage from './ComboPage'

function page({params:{slug}}) {
  return (
    <ComboPage slug={slug}/>
  )
}

export default page
