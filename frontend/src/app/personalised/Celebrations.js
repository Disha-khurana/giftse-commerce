import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Celebrations() {
    const celebration = [
        {
          image: '/Images/personalized/celebration/Chocolates.webp',
          title: 'Chocolates',
          link: '/chocolates'
        },
        {
          image: '/Images/personalized/celebration/Explosion-box.webp',
          title: 'Explosion Box',
          link: '/explosion-box'
        },
        {
          image: '/Images/personalized/celebration/Greeting-Cards.webp',
          title: 'Greeting Cards',
          link: '/greeting-cards'
        },
        {
          image: '/Images/personalized/celebration/Personalised.webp',
          title: 'Personalised Gifts',
          link: '/flowers'
        },
        {
          image: '/Images/personalized/celebration/Photo-Cakes.webp',
          title: 'Photo Cakes',
          link: '/photo-cakes'
        },
        {
          image: '/Images/personalized/celebration/Photoframes.webp',
          title: 'Photo Frames',
          link: '/photo-frames'
        }
      ];
      
  return (
    <div className='py-12 px-5 md:px-12'>
      <div className="flex items-center justify-center space-x-4 mb-10">
        <div className="w-16 h-px bg-[#7d8035] "></div>
        <h2 className="font-bold text-2xl md:text-3xl text-center">Make Celebrations Special With</h2>
        <div className="w-16 h-px bg-[#7d8035]"></div>
    </div>
    <div className='grid grid-cols-4 gap-8'>
        {celebration.map((item,index)=>(
            <Link key={index} href={`/personalised${item.link}`}>
            <Image src={item.image} height={900} width={900} className='w-full h-auto' alt={item.title}/>
            </Link>
        ))}

    </div>
    </div>
  )
}

export default Celebrations
