import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Offer() {
    const offer=[
        {
            'image':'/Images/offer/diwaligifts.webp',
            'title':'Send your Diwali wishes with Chocolate Hampers'
        },
        {
            'image':'/Images/offer/hampers.webp',
            'title':'Elevate the festive glow with Beauty Hampers'
        },
        {
            'image':'/Images/offer/smallhome.webp',
            'title':'Illuminate spaces with vibrant festive decor'
        },
        {
            'image':'/Images/offer/godgifts.webp',
            'title':'Spread peace and positivity with Spiritual Gifts'
        },
        {
            'image':'/Images/offer/dryfruit.webp',
            'title':'Gift gourmet dry fruits this festive season'
        },
    ]
  return (
    <>
    <div className='px-5 md:px-12 shadow-xl'>
   
    <div className='px-8 w-full py-10 bg-white space-y-9 rounded-lg '>
        <div className='flex items-center justify-between'>
    <h3 className='mb-4 text-lg md:text-xl lg:text-2xl font-semibold'>Thoughtfully Created Gifts</h3>
    <Link href='/viewall' className='bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold'>VIEW ALL</Link>
    </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 '>
       
      <Image width={500} height={500} src='/Images/offer/offer1.webp' className='h-[200px] lg:h-auto w-full shadow-md' alt='offer1'/>
      <Image width={500} height={500} src='/Images/offer/offer2.webp' className='h-[200px] lg:h-auto w-full shadow-md' alt='offer2'/>
   
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center gap-7 '>
      {offer.map((item, index) => (
        <div key={index} className='border border-gray-200 flex flex-col items-center justify-center shadow-lg overflow-hidden'>
        <Image width={300} height={300} src={item.image} alt='name' className='h-[250px] lg:h-[300px] w-full transition-transform duration-300 ease-in-out transform hover:scale-105'/>
        <h2 className='text-center text-sm lg:text-base py-2 px-3'>{item.title}</h2>
        </div>
      ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default Offer
