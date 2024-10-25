import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import Image from 'next/image'

function Topbar() {
  return (
    <div className='bg-pink-100 sticky top-0 z-20 '>
        <div className=' px-5 md:ps-12 md:pe-20  flex justify-between items-center'>
            <div className='flex items-center gap-7 relative w-1/2'>
            <Image width={130} height={150} src='/Images/logo.webp' alt='logo' className=''/>
            <input
              type="text"
              placeholder="Search flowers,cakes,gifts,etc."
              className="flex-grow px-4 py-[9px] rounded-xl focus:outline-none placeholder-sm focus:ring-0 border-none"
            />
            <IoIosSearch className="absolute right-0 lg:right-4 text-2xl inset-y-0 mt-7" />
            </div>
            <div className="w-1/2 flex justify-end items-center">
            <IoIosSearch className="text-[5.5rem] m-3 md:hidden" />
           
            
                <div className='text-center mt-[1px]'>
                <FaRegUser className="text-[22px] ms-1" />
                <span className='font-semibold text-xs'>Profile</span>
                </div>
             
            
            <div className='text-center'>
            <AiOutlineHeart className="text-[23px] mx-8"/>
            <span className='font-semibold text-xs'>Wishlist</span>
            </div>
            <div className='text-center'>
            <HiOutlineShoppingBag className="text-[23px] " />
            <span className='font-semibold text-xs'>Bag</span>
            </div>
          </div>
        </div>
     
    </div>
  )
}

export default Topbar
