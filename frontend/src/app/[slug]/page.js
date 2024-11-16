import React from 'react'
import GiftCompo from './GiftCompo'

const page = ({params:{slug}}) => {
  return (
   <GiftCompo  slug={slug} />
  )
}

export default page
