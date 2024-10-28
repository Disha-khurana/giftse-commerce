'use client'
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import Image from 'next/image'

function Topbar() {
  const placeholders = [
    "Diwali gifts",
    "Birthday gifts",
    "Personalised Photo Frames",
    "Gifts for men",
    "Fresh Fruit cakes",
    "Gifts for kids",
    "Search flowers,cakes,gifts,etc.",
  ];

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
    <div className='bg-[#7d8035] sticky top-0 z-50 hidden lg:block'>
        <div className=' px-5 md:ps-12 md:pe-20 py-4 flex justify-between items-center'>
            <div className='flex items-center gap-7 relative w-[40%]'>
            <Image width={150} height={200} src='/Images/logo.webp' alt='logo' className='text-white'/>
            <input
              type="text"
              placeholder={placeholder}
              className="flex-grow px-4 py-[9px] rounded-xl focus:outline-none placeholder-sm focus:ring-0 border-none"
              readOnly
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
