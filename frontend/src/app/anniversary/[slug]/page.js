import React from 'react'
import AnniversaryPage from './AnniversaryPage'

const page = ({params}) => {
  const { slug } = params;
  return (
    <AnniversaryPage slug={slug}/>
  )
}

export default page
