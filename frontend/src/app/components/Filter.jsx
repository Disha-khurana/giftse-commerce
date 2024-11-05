'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';


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
  { name: "All Gifts" },
  { name: "Cakes" },
  { name: "Flowers" },
  { name: "Personalised Gifts" },
  { name: "Chocolates" },
  { name: "Plants" },
  { name: "Combos" },
  { name: "Premium Gifts" },
  { name: "Balloon Decorations" },
  { name: "Gift Hampers" }
];

const [selectedOccasion, setSelectedOccasion] = useState('Select an occasion');
const [selectedGift, setSelectedGift] = useState('Select an gift');
const [openOffer, setOpenOffer] = useState(false);
  const[openGifts , setOpenGifts] = useState(false);



  return (
  <section className=''>
      <div className='lg:flex w-full rounded-lg px-5 md:px-12 gap-12 '>
        <div className='bg-slate-50 px-10 py-6 lg:w-[70%] space-y-6'>
      <h3 className='font-semibold text-xl text-center'>GIFT FINDER</h3>
     
      <div className="relative flex items-center ">
  <IoLocationSharp className="absolute left-3 text-gray-700 text-xl" />
  <input
    type="text"
    placeholder="Enter pincode"
    className="pl-10 border border-gray-200 px-4 py-2 w-full rounded-md placeholder-gray-700  "
  />




      </div>
     
      <div className='bg-white px-3 py-6 border border-gray-300 rounded-md relative'>
      <div
        className='absolute top-0 flex items-center justify-between w-full'
        onClick={() => setOpenOffer(!openOffer)}
      >
        <div>
          <h3 className='font-semibold'>Occasion</h3>
          <p className={`text-xs font-semibold ${selectedOccasion === 'Select an occasion' ? 'text-black' :'text-green-900'}`}>
            {selectedOccasion === 'Select an occasion' ? 'Birthday, Anniversary, etc.' : selectedOccasion}
          </p>
        </div>
        {openOffer ? (
          <MdKeyboardArrowDown className='text-xl mt-2 mr-5' />
        ) : (
          <MdKeyboardArrowRight className='text-xl mt-2 mr-5' />
        )}
      </div>

      {openOffer && (
        <div className='mt-12 bg-white border border-gray-300 rounded-md shadow-md absolute top-full left-0 w-full z-10'>
          <ul className='py-2'>
            {items1.map((item, index) => (
              <li
                key={index}
                className='px-4 py-1 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  setSelectedOccasion(item.name);
                  setOpenOffer(false); 
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <div className='bg-white px-3 py-6 border border-gray-300 rounded-md relative'>
      <div
        className='absolute top-0 flex items-center justify-between w-full'
        onClick={()=>setOpenGifts(!openGifts)}
      >
        <div>
          <h3 className='font-semibold'>Gift Type</h3>
          <p className={`text-xs font-semibold ${selectedGift === 'Select an gift' ? 'text-black' :'text-green-900'}`}>
            {selectedGift === 'Select an gift' ? 'Flowers, Cakes, Plants, etc.' : selectedGift}
          </p>
        </div>
        {openGifts ? (
          <MdKeyboardArrowDown className='text-xl mt-2 mr-5' />
        ) : (
          <MdKeyboardArrowRight className='text-xl mt-2 mr-5' />
        )}
      </div>

      {openGifts && (
        <div className='mt-12 bg-white border border-gray-300 rounded-md shadow-md absolute top-full left-0 w-full z-10'>
          <ul className='py-2'>
            {items2.map((item, index) => (
              <li
                key={index}
                className='px-4 py-1 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  setSelectedGift(item.name);
                  setOpenGifts(false); 
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

        <div className='pt-10 '>
        <button className='bg-[#7d8035] text-white font-semibold px-6 py-2 w-full'>FIND GIFTS</button>

        </div>
      </div>
      
     
      <div className='w-full h-auto hidden lg:block'>
        <Image width={900} height={900} alt='filters' className='w-[800px] h-[400px]' src='/Images/offer/gift.webp'/>
      </div>
    </div>

  </section>
  )
}

export default Filter
