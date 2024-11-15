import React from 'react'
import PlantsData from './PlantsData'


function page({params:{slug}}) {
  return (
    <PlantsData slug={slug}/>
  )
}

export default page
