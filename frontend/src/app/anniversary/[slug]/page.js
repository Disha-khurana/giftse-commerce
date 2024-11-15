import React from 'react'
import AnniversaryPage from './AnniversaryPage'

const page = ({params:{slug}}) => {
  return (
    <AnniversaryPage slug={slug}/>
  )
}

export default page
