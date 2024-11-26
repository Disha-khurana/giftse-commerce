'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCaretLeft } from "react-icons/fa6";
import { BsCaretRightFill } from "react-icons/bs";

function Slider() {
  const [width, setWidth] = useState(50); // Initial width of the second image (in percentage)

  const handleMouseMove = (e) => {
    const slider = e.currentTarget.getBoundingClientRect(); // Get the slider's dimensions
    const newWidth = ((e.clientX - slider.left) / slider.width) * 100; // Calculate percentage width
    setWidth(newWidth); // Update the width dynamically
  };

  return (
    <div
      className="px-5 md:px-12 relative overflow-hidden"
      onMouseMove={handleMouseMove} // Track mouse movement
    >
      {/* First image */}
      <div className="relative">
        <Image
          src="/Images/personalized/slider/Main-Banner-Desktop-after_feb.webp"
          height={900}
          width={900}
          className="w-full h-auto"
          alt="slider"
        />
      </div>

      {/* Second image with dynamic width */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden px-5 md:px-12"
        style={{ width: `${width}%` }} // Dynamically adjust width
      >
        <Image
          src="/Images/personalized/slider/Main-Banner-Desktop-Before_feb.webp"
          height={900}
          width={900}
          className="h-full w-full object-cover"
          alt="slider"
        />
      </div>

      {/* Vertical line */}
      <div
        className="absolute top-0 h-full w-1 bg-gray-400 z-20"
        style={{ left: `${width}%` }} // Position the line at the edge of the second image
      >
       
        <div class="absolute w-full h-24">


  <div class="bal-handle flex absolute bg-slate-100 opacity-50 px-2 py-4 rounded-full top-72 transform -translate-y-1/2 -left-8" >
  <FaCaretLeft className='cursor-pointer text-2xl text-slate-200'/>
  <BsCaretRightFill className='cursor-pointer text-2xl text-slate-200'/>
  </div>
</div>

      </div>
    </div>
  );
}

export default Slider;
