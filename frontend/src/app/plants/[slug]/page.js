import React from 'react'
import PlantsData from './PlantsData'


function page({params}) {
  const { slug } = params;
  return (
    <PlantsData slug={slug}/>
  )
}

export default page
