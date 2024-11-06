import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cakes() {
    const cakes = [
        {
            image:"/Images/cakes/cake2.webp",
            title:"Chocolate Cakes",
            link:'/ChocolateCakes'
        },
        {
            image:"/Images/cakes/cake1.webp",
            title:"Butterscotch Cakes",
            link:'/ButterscotchCakes'
        },
        {
         
            image:"/Images/cakes/cake3.webp",

            title:"Pineapple Cakes",
            link:'/PineappleCakes'
        },
        {
           
            image:"/Images/cakes/cake4.webp",

            title:"Flowers N Cakes",
            link:'/FlowersNCakes'
        },
        
    ]
  return (
    <div className='px-5 md:px-12'>
      <div className="flex items-center justify-between mb-12">
      <h3 className=" text-lg md:text-xl lg:text-2xl font-semibold ">
      Bakery-Fresh Cakes
      </h3>
        <Link
          href="/viewall"
          className="bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold"
        >
          VIEW ALL
        </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
      {cakes.map((item, index) => (
        <div key={index} className=' relative overflow-hidden group rounded-lg'>
        <Image src={item.image} width={500} height={500} className='w-full h-full shadow-md' alt={item.title}/>
        <div className="absolute group-hover:translate-y-0 duration-500 flex flex-col justify-center items-center translate-y-[100%] inset-0 bg-[rgba(0,0,0,0.45)]  z-40">
            <span className='text-white font-serif text-xl mb-3'>{item.title}</span>
            <p className='text-white font-serif text-base px-5 text-center'>Indulge in our delightful range of cakes, crafted to make every celebration unforgettable.</p>
        </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Cakes
