import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Occasion() {
  const occasion = [
    {
      image: '/Images/personalized/poster/Anniversary (2).webp',
      title: 'Anniversary',
      link: '/anniversary'
    },
    {
      image: '/Images/personalized/poster/Birthday (2).webp',
      title: 'Birthday',
      link: '/birthday'
    },
    {
      image: '/Images/personalized/poster/Love-n-Romance.webp',
      title: 'Love & Romance',
      link: '/love-and-romance'
    },
    {
      image: '/Images/personalized/poster/Wedding.webp',
      title: 'Wedding',
      link: '/wedding'
    }
  ];
  
  return (
    <div className='px-5 md:px-12 bg-pink-50 py-14'>
      <h2 className='font-bold text-3xl mb-8'>For Every Occasion</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
        {occasion.map((item,index)=>(
          <Link key={index} href={`/personalised${item.link}`}>
          <div className=''>
            <Image src={item.image} height={900} width={900} className='w-full h-auto rounded-lg' alt={item.title}/>

          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Occasion
