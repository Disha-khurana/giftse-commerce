import React from 'react'
import Slider from './Slider'
import Gifts from './Gifts'
import Occasion from './Occasion'

function page() {
  return (
    <div className='space-y-10 md:space-y-14'>
      <Slider/>
      <Gifts/>
      <Occasion/>
    </div>
  )
}

export default page
