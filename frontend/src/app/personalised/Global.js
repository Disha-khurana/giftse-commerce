import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Global() {

    const globe= [
        {
            img: '/Images/flowers/globe/Australia.webp',
            title: 'Australia',
            link: '/australia'
        },
        {
            img: '/Images/flowers/globe/Canada.webp',
            title: 'Canada',
            link: '/canada'
        },
        {
            img: '/Images/flowers/globe/UAE.webp',
            title: 'UAE',
            link: '/uae'
        },
        {
            img: '/Images/flowers/globe/UK.webp',
            title: 'UK',
            link: '/uk'
        },
        {
            img: '/Images/flowers/globe/USA.webp',
            title: 'USA',
            link: '/usa'
        },
        {
            img: '/Images/flowers/globe/Worldwide.webp',
            title: 'Worldwide',
            link: '/worldwide'
        }
    ]
  return (
    <div className="relative h-[450px] lg:h-[400px] bg-black bg-cover bg-no-repeat" style={{ backgroundImage: "url('/Images/flowers/globe/globe.webp')" }}>
                    {/* Semi-transparent black overlay */}
                    <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

                    {/* Text Section */}
                    <div className="absolute flex items-center justify-center left-28 lg:left-[30%] py-20 space-x-4 z-20 ">

                        <Image src="/Images/flowers/choose/spark.svg" height={500} width={500} className="w-10 h-10" alt="spark" />
                        <h2 className="font-bold text-white text-2xl md:text-3xl text-center">Delivering Blooms Globally </h2>
                        <Image src="/Images/flowers/choose/spark.svg" height={500} width={500} className="w-10 h-10" alt="spark" />

                    </div>

                    {/* Grid of Images */}
                    <div className="absolute px-14 py-40 inset-0 grid-cols-4 grid lg:grid-cols-6 gap-5 z-20">
                        {globe.map((item, index) => (
                            <Link key={index} href={`/flowers${item.link}`}>
                                <Image src={item.img} height={500} width={500} className="w-full h-auto rounded-3xl" alt={item.title} />
                            </Link>
                        ))}
                    </div>
                </div>
  )
}

export default Global
