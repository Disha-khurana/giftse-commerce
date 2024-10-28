import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import Image from 'next/image'

function Topbar() {
  return (
    <div className='bg-[#7d8035] sticky top-0 z-50 '>
        <div className=' px-5 md:ps-12 md:pe-20 py-4 flex justify-between items-center'>
            <div className='flex items-center gap-7 relative w-[40%]'>
            <Image width={150} height={200} src='/Images/logo.webp' alt='logo' className='text-white'/>
            <input
              type="text"
              placeholder="Search flowers,cakes,gifts,etc."
              className="flex-grow px-4 py-[9px] rounded-xl focus:outline-none placeholder-sm focus:ring-0 border-none"
            />
            <IoIosSearch className="absolute right-0 lg:right-4 text-2xl inset-y-0 mt-4" />
            </div>
            <div className="w-1/2 flex justify-end items-center">
            <IoIosSearch className="text-[5.5rem] m-3 md:hidden" />
           
            
                <div className='flex flex-col items-center justify-center text-white font-[600]'>
                <FaRegUser className="text-[22px] mb-1" />
                <span className='text-xs'>Profile</span>
                </div>
             
            
            <div className='flex flex-col items-center justify-center text-white font-[600]'>
            <AiOutlineHeart className="text-[23px] mx-7 mb-1"/>
            <span className=' text-xs'>Wishlist</span>
            </div>
            <div className='flex flex-col items-center justify-center text-white font-[600]'>
            <HiOutlineShoppingBag className="text-[23px] mb-1 " />
            <span className=' text-xs'>Bag</span>
            </div>
          </div>
        </div>
     
    </div>
  )
}

export default Topbar
