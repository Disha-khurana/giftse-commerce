import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Flowers() {
    const flowers = [
        {
            image:"/Images/flowers/Orchids2.webp",
            title:"Orchids",
            link:'/flowers/orchids'
        },
        {
            image:"/Images/flowers/Roses.webp",
            title:"Roses",
            link:'/flowers/roses'
        },
        {
         
            image:"/Images/flowers/Orchids2.webp",
            title:"Carnations",
            link:'/flowers/carnations'
        },
        {
           
            image:"/Images/flowers/Roses.webp",
            title:"Personalised flower",
            link:'/flowers/personalised'
        },
        
    ]
  return (
    <div className='px-5 md:px-12'>
      <div className="flex items-center justify-between mb-12">
      <h3 className=" text-lg md:text-xl lg:text-2xl font-semibold ">
      Pick Their Fav Flowers
      </h3>
        <Link
          href="/viewall"
          className="bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold"
        >
          VIEW ALL
        </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10'>
      {flowers.map((item, index) => (
        <Link key={index} href={item.link}>
        <div  className=' relative overflow-hidden group rounded-lg'>
        <Image src={item.image} width={500} height={500} className='w-full h-full shadow-md object-cover' alt={item.title}/>
        <div className="absolute group-hover:translate-y-0 duration-500 flex flex-col py-3 justify-center items-center translate-y-[100%] inset-0 bg-[rgba(0,0,0,0.45)]  z-40">
            <span className='text-white font-serif text-base md:text-xl mb-1 md:mb-3'>{item.title}</span>
            <p className='text-white font-serif text-xs md:text-sm lg:text-base px-5 text-center'>Brighten their day with our curated collection of fresh, elegant flowers—perfect for every occasion and sentiment.</p>
        </div>
        </div>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Flowers
