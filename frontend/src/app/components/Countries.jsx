import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Countries() {
  return (
    <div className='px-5 md:px-12'>
       <div className="flex items-center justify-between mb-12">
      <h3 className=" text-lg md:text-xl lg:text-2xl font-semibold ">
      Gifts to Bring Them Closer
      </h3>
        <Link
          href="/viewall"
          className="bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold"
        >
          VIEW ALL
        </Link>
      </div>

      <div className='flex items-center gap-5 pb-20' >
        <div className='flex items-center gap-8'>
          <Image src='/Images/country/Burj_Khalifa.webp' width={500} height={500} alt='burjtower' className='w-[25%] h-auto'/>
          <div className='grid grid-cols-2  gap-5'>
            <Image src='/Images/country/Singapore.webp' width={500} height={500} alt='singapore' className='w-full h-auto'/>
            <Image src='/Images/country/Australia.webp' width={500} height={500} alt='singapore' className='w-full h-auto'/>
            <Image src='/Images/country/Canada.webp' width={500} height={500} alt='singapore' className='w-full h-auto'/>
            <Image src='/Images/country/Germany.webp' width={500} height={500} alt='singapore' className='w-full h-auto'/>
            <Image src='/Images/country/UK.webp' width={500} height={500} alt='singapore' className='w-full h-auto'/>
            <Image src='/Images/country/UAE.webp' width={500} height={500} alt='singapore' className='w-full h-auto'/>
            <Image src='/Images/country/USA.webp' width={500} height={500} alt='singapore' className='w-full h-auto'/>
            <Image src='/Images/country/Worldwide-mob.webp' width={500} height={500} alt='singapore' className='w-full h-auto'/>
          </div>
          <Image src='/Images/country/Toronto.webp' width={500} height={500} alt='toronto' className='w-[27%] h-auto'/>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Countries
