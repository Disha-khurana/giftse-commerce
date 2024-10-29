'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Giftover from './Giftover';

function Filter() {
  const items1 = [
    { name: 'Diwali' },
    { name: 'Birthday' },
    { name: 'Anniversary' },
    { name: 'Love N Romance' },
    { name: 'Congratulations' },
    { name: 'House Warming' },
    { name: 'Get Well Soon' },
    { name: 'Sympathy N Funeral' }
];

const items2 = [
  { name: 'ddndnd' },
  { name: 'Birthday' },
  { name: 'Anniversary' },
  { name: 'Love N Romance' },
  { name: 'Congratulations' },
  { name: 'House Warming' },
  { name: 'Get Well Soon' },
  { name: 'Sympathy N Funeral' }
];

  const[openOffer , setOpenOffer] = useState(null);
  const[openGifts , setOpenGifts] = useState(null);


  const handleChange = () =>{
    setOpenOffer(null);
    setOpenGifts(null);
  }

  return (
  <section className=''>
      <div className='flex w-full rounded-lg px-5 md:px-12 gap-12 pb-20  '>
        <div className='bg-slate-50 px-10 py-6 w-[70%] space-y-6'>
      <h3 className='font-semibold text-xl text-center'>GIFT FINDER</h3>
     
      <div className="relative flex items-center ">
  <IoLocationSharp className="absolute left-3 text-gray-700 text-xl" />
  <input
    type="text"
    placeholder="Enter pincode"
    className="pl-10 border border-gray-200 px-4 py-2 w-full rounded-md placeholder-gray-700  "
  />




      </div>
     

        <div className='bg-white px-3 py-6 border border-gray-300 rounded-md relative' onClick={()=>setOpenOffer(true)}>
          <div className='absolute top-0 flex items-center justify-between w-full'>
            <div >
            <h3 className='font-semibold'>Occasion</h3>
            <p className='text-xs'>Birthday, Anniversary, etc.</p>
            </div>
            <MdKeyboardArrowRight className='text-xl mt-2 mr-5'/>

          </div>
         
        </div>
        
        <div className='bg-white px-3 py-6 border border-gray-300 rounded-md relative ' onClick={()=>setOpenGifts(true)}>
        <div className='absolute top-0 flex items-center justify-between w-full'>
            <div>
            <h3 className='font-semibold'>Gift Type</h3>
            <p className='text-xs'>Flowers, Cakes, Plants, etc.</p>
            </div>
            <MdKeyboardArrowRight className='text-xl mt-2 mr-5'/>

          </div>
        </div>
        <div className='pt-10 '>
        <button className='bg-[#7d8035] text-white font-semibold px-6 py-2 w-full'>FIND GIFTS</button>

        </div>
      </div>
      
     
      <div className='w-full h-auto'>
        <Image width={900} height={900} alt='filters' className='w-[800px] h-[400px]' src='/Images/offer/gift.webp'/>
      </div>
    </div>
    {openOffer &&
    <Giftover items={items1}  handleChange={handleChange}/>  


}
{openGifts &&
<Giftover items={items2}  handleChange={handleChange}/>
}
  </section>
  )
}

export default Filter
