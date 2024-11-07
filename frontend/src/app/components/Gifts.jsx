import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Gifts() {

  const gifts=[
    {
      image:"/Images/gifts/Experiential.webp",
      title:"Experiential Gifts",
      link:"/experimental"
    },
    {
      image:"/Images/gifts/Fashion & Lifestyle.webp",
      title:"Fashion & Lifestyle",
      link:"/faishon"
    },
    {
      image:"/Images/gifts/toys n games.webp",
      title:"Toys N Games",
      link:"/toys n games"
    },
    {
      image:"/Images/gifts/home decor.webp",
      title:"Home Decor",
      link:"/home decor"
    },
    {
      image:"/Images/flowers/Roses.webp",
      title:"Bestseller Gifts",
      link:"/Bestseller"
    }
  ]
  return (
    <div className='px-5 md:px-12'>
       <div className="flex items-center justify-between mb-6">
      <h3 className=" text-lg md:text-xl lg:text-2xl font-semibold ">
      Gifts worth waiting for
      </h3>
        <Link
          href="/viewall"
          className="bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold"
        >
          VIEW ALL
        </Link>
      </div> 
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 ">
            {gifts.map((item, index) => (
              <div key={index} className='border border-gray-200 shadow-md'>
                <div className='overflow-hidden'>
                <Image src={item.image} width={500} height={500} alt={item.title} className='object-cover w-full h-auto md:h-[300px] transition-transform duration-700 ease-in-out transform hover:scale-110'/>
                </div>
                <span className='flex items-center justify-center py-1 md:py-2 font-semibold text-base md:text-lg tracking-normal'>{item.title}</span>


              </div>
            ))}
            </div>
      
    </div>
  )
}

export default Gifts
