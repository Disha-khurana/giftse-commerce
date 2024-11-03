import Image from 'next/image'
import React from 'react'

function Calender() {
    const festive=[
        {
            'img':'/Images/calender/dhanteras.webp',
            'name':'Dhanteras'
        },
        {
            'img':'/Images/calender/halloween.webp',
            'name':'Halloween'
        },
        {
            'img':'/Images/calender/diwali.webp',
            'name':'Diwali'
        },
        {
            'img':'/Images/calender/bhaidooj.webp',
            'name':'Bhai Dooj'
        },
        {
            'img':'/Images/calender/childrenday.webp',
            'name':'Childrens Day'
        },
    ]
  return (
    <div className='px-5 md:px-12'>
        <h3 className='text-xl lg:text-[25px] mb-4 font-semibold tracking-normal'>Celebrations Calender</h3>
        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 '> 
        {festive.map((item, index) => (    
            <div key={index} className='flex flex-col items-center justify-center gap-2 overflow-hidden rounded-tl-[26px] rounded-br-[26px]'>
        <Image width={400} height={400} src={item.img} alt={item.name} className='rounded-tl-[26px] rounded-br-[26px] h-auto w-[90%] md:w-full transition-transform duration-300 ease-in-out transform hover:scale-105 '/>
        <h3 className='font-semibold text-base lg:text-lg'>{item.name}</h3>
        </div>
        ))}
        </div> 
      
    </div>
  )
}

export default Calender
