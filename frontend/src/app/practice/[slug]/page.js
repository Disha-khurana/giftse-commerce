import React from 'react'
import Data from '../Data'


function page({params:{slug}}){
return (
    <Data slug={slug} />
  )
}

export default page
