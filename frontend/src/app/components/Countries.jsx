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

      <div className='flex gap-10' >
        <div>

        </div>
      </div>
    </div>
  )
}

export default Countries
