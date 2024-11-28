import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Plants() {

    const plants=[{
        image:"/Images/plants/Jade-Plants.webp",
        title:"Jade Plants",
        link:'/plants/jade-plants'
    },
    {
        image:"/Images/plants/Indoor-Plants.webp",
        title:"Indoor Plants",
        link:'/plants/indoor-plants'
    },
    {
        image:"/Images/plants/Lucky-Bamboo.webp",
        title:"Lucky Bamboo",
        link:'/plants/lucky-bamboo'
    },
    {
        image:"/Images/plants/Money-Plants.webp",
        title:"Money Plants",
        link:'/plants/money-plants'
    }

]
  return (
    <div className='px-5 md:px-12 '>
        <div className='bg-white p-5 md:p-8 rounded-lg'>
       <div className="flex items-center justify-between mb-10">
      <h3 className=" text-base md:text-xl lg:text-2xl font-semibold ">
      Plants For Every Vibe
      </h3>
        <Link
          href="/viewall"
          className="bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold"
        >
          VIEW ALL
        </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-4 '>
      {plants.map((item, index) => (
        <Link href={item.link} key={index}>
          <div>
            <Image src={item.image} height={500} width={500} alt={item.title} className='h-[95%] object-cover w-full rounded-3xl'/>
            <h3 className='text-base md:text-lg py-2 px-4 font-semibold text-nowrap'>{item.title}</h3>
            </div>
         </Link>   
      ))}
  
       
        

      </div>
      </div>
    </div>
  )
}

export default Plants
