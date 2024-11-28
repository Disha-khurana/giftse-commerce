import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Stories() {

    const story=[
        {
            image:"/Images/story/Cushions2.webp",
            title:"Cushions",
            link:"/lifestyle/cushions"
        },
        {
            image:"/Images/story/Mugs2.webp",
            title:"Mugs",
            link:"/lifestyle/mugs"
        },
        {
            image:"/Images/story/Photoframe2.webp",
            title:"Photoframe",
            link:"/personalised/photo-frames"
        },
        {
            image:"/Images/story/Stationary2.webp",
            title:"Stationary",
            link:"/personalised/stationary"
        }
    ]
  return (
    <div className='px-5 md:px-12'>
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h3 className=" text-lg md:text-xl lg:text-2xl font-semibold ">
        Gifts That Tell Stories
        </h3>
        <Link
          href="/viewall"
          className="bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold"
        >
          VIEW ALL
        </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {story.map((item, index) => {
        return(
            <Link href={item.link} key={index} className='relative overflow-hidden rounded-lg'>
                <Image src={item.image} height={500} width={500} alt={item.title} className='object-cover w-full h-auto transition-transform duration-700 ease-in-out transform hover:scale-110'/>
           
            <div id="set" className="absolute inset-0   z-40 transform transition duration-500 ease-in-out">
            <span className="text-white font-serif text-sm md:text-base lg:text-lg flex items-center justify-center pt-2 md:pt-3 lg:pt-5 tracking-normal">{item.title.toUpperCase()}</span>
            
          </div>
          </Link>
        )
})}

      </div>
    </div>
  )
}

export default Stories
