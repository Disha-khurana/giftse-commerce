import React from 'react'
import Slider from './Slider'
import Gifts from './Gifts'
import Occasion from './Occasion'
import Treasures from './Treaures'
import Celebrations from './Celebrations'
import Global from './Global'

function page() {
  return (
    <div className='space-y-10 md:space-y-14'>
      <Slider/>
      <Gifts/>
      <div>
      <Occasion/>
      <Treasures/>
      <Celebrations/>
      </div>
      <Global/>
    </div>
  )
}

export default page
