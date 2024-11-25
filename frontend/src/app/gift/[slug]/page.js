import React from 'react'
import GiftCompo from './GiftCompo'

const page = ({params}) => {
  const { slug } = params;
  return (
   <GiftCompo  slug={slug} />
  )
}

export default page
