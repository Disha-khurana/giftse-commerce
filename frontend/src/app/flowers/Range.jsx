import Link from 'next/link'
import React from 'react'

function Range() {

    const flowerData={
        range: [
            {
                image: "/Images/flowers/range/Roses.webp",
                link: "/roses",
            },
            {
                image: "/Images/flowers/range/Orchids.webp",
                link: "/orchids",
            },
            {
                image: "/Images/flowers/range/Lily.webp",
                link: "/lily",
            },
            {
                image: "/Images/flowers/range/Carnations.webp",
                link: "/carnations",
            },
            {
                image: "/Images/flowers/range/Gerbaras.webp",
                link: "/gerbaras",
            },
            {
                image: "/Images/flowers/range/Mixed.webp",
                link: "/mixed",
            },
        ],

    }

  return (
    
            <div className="space-y-10 px-5 md:px-12">
                <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-px bg-[#7d8035] "></div>
                    <h2 className="font-bold text-2xl md:text-3xl text-nowrap text-center">Explore Our Exquisite Range</h2>
                    <div className="w-16 h-px bg-[#7d8035]"></div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
                    {flowerData.range.map((item, index) => (
                        <Link key={index} href={`/flowers${item.link}`}>
                            <img src={item.image} className='w-full h-auto rounded-xl' />
                        </Link>
                    ))}
                </div>
            </div>
  )
}

export default Range
