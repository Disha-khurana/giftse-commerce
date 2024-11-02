'use client'
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import Image from 'next/image'
import Link from 'next/link';
import { IoLocationSharp } from 'react-icons/io5';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowDown} from "react-icons/md";
import SetLocation from './SetLocation';

function Topbar() {
  const[loc,setLoc] = useState(null);

  const placeholders = [
    "Diwali gifts",
    "Birthday gifts",
    "Personalised Photo Frames",
    "Gifts for men",
    "Fresh Fruit cakes",
    "Gifts for kids",
    "Search flowers,cakes,gifts,etc.",
  ];

  const handleClick = () =>{
    setLoc(null);
  }

  const [placeholder, setPlaceholder] = useState(""); // Current placeholder text to display
  const [phase, setPhase] = useState("typing"); // Phase of animation: "typing" or "deleting"
  const [charIndex, setCharIndex] = useState(0); // Current character index
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);  // Current placeholder index

  useEffect(() => {
    if (isComplete) return; // Stop the animation if all placeholders have been displayed

    const currentText = placeholders[placeholderIndex];

    // Typing phase
    if (phase === "typing" && charIndex <= currentText.length) {
      const typingTimeout = setTimeout(() => {
        setPlaceholder((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      if (charIndex === currentText.length) {
        // Check if it's the last placeholder and has finished typing
        if (placeholderIndex === placeholders.length - 1) {
          setIsComplete(true); // Mark completion if it's the last placeholder
        } else {
          setPhase("deleting"); // Otherwise, switch to deleting
        }
      }

      return () => clearTimeout(typingTimeout);
    }

    // Deleting phase
    if (phase === "deleting" && charIndex >= 0) {
      const deletingTimeout = setTimeout(() => {
        setPlaceholder((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 100);

      if (charIndex === 0) {
        // Cycle to the next placeholder if not at the end
        setPlaceholderIndex((prev) => prev + 1);
        setPhase("typing");
      }

      return () => clearTimeout(deletingTimeout);
    }
  }, [charIndex, phase, placeholderIndex, placeholders, isComplete]);


  return (
   
    <div className='sticky top-0 z-50 hidden lg:block '>
    <div className=' bg-[#707428] '>
      <div className='items-center justify-end py-1 text-[13px] px-12  text-white font-semibold flex '>
        <p>Franchise Enquiries | </p>
        
    <div className="relative group">
        <div className="cursor-pointer ps-1 flex items-center">More
        <MdOutlineKeyboardArrowDown className='text-white'/>
        </div>
        
        <div className="absolute -left-32 hidden w-40 bg-white text-gray-800 rounded shadow-lg group-hover:block py-2">
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 border-b border-gray-200">
                <span className="mr-2">🎁</span> Corporate Gifts
            </div>
            <div className="flex items-center px-4 py-2 hover:bg-gray-100 text-nowrap">
                <span className="mr-2 ">👥</span> Become a Partner
            </div>
           
        </div>
    </div>
        

      </div>


</div>


    
    <div className='bg-[#7d8035] '>
        <div className=' px-5 md:px-12 py-4 flex justify-between items-center '>
            <div className='flex items-center gap-5 w-full '>
              <div className='relative w-[60%] flex items-center gap-5'>
            <Image width={150} height={200} src='/Images/logo.webp' alt='logo' className='text-white'/>
            <input 
              type="text"
              placeholder={placeholder}
              className="flex-grow px-4 py-[8px] rounded-md focus:outline-none placeholder-sm focus:ring-0 border-none"
              readOnly
            />
            <IoIosSearch className="absolute right-0 lg:right-4 text-2xl inset-y-0 mt-4" />
            </div>
            <div className='flex items-center gap-1 text-gray-700 bg-white rounded-md px-2 py-[12px] cursor-pointer' onClick={()=>setLoc(true)}>
            <IoLocationSharp/>
            <h3 className='text-xs font-semibold'>Select Delivery Location</h3>
            <MdKeyboardArrowRight className='text-base' />
            </div>
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
          {loc &&
     <SetLocation handleClick={handleClick}/>
     }
        </div>
     
    </div>
    </div>
    
  )
}

export default Topbar
