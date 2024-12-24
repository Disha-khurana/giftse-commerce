'use client'

import Image from "next/image";
import Link from "next/link";
import React,{
  useState,useEffect,
  use
} from "react";
import { ApiBaseurl } from "./common/Apiurl";

function Collection() {
  const items = [
    { 
      image: "/Images/collection/Cakes.webp", 
      title: "Cakes", 
      link: "/cakes" 
    },
    { 
      image: "/Images/collection/FLowers.webp", 
      title: "Flowers", 
      link: "/flowers" 
    },
    {
      image: "/Images/collection/fabessentials-sea-breeze-spa-body-care-gift-box.webp", 
      title: "Combos", 
      link: "/combos"
    },
    { 
      image: "/Images/collection/Experiences.webp", 
      title: "Experience", 
      link: "/experience" 
    },
    { 
      image: "/Images/collection/goodluck.webp", 
      title: "Plants", 
      link: "/plants" 
    },
    { 
      image: "/Images/collection/personalised-bluetooth-led-speaker.webp", 
      title: "Personalised", 
      link: "/personalised" 
    }
  ];
  

  useEffect(()=>{

   const fetechData = async () =>{

    console.log('hjyffyfjjffjf',ApiBaseurl)

    const data = await fetch(`${ApiBaseurl}/category`)

    const jsdata = await data.json()

    console.log('hjyffyfjjffjf',jsdata)
   }

   fetechData()

  },[])

  return (
    <div className="px-5 md:px-12">
      <div className="flex items-center justify-between mb-12">
      <h3 className=" text-lg md:text-xl lg:text-2xl font-semibold text-nowrap ">
        The 2024 Birthday Collection
      </h3>
        <Link
          href="/viewall"
          className="bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold"
        >
          VIEW ALL
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item, index) => (
          <Link key={index} href={item.link}>
          <div className="flex flex-col items-center gap-3 md:gap-7 mb-4 lg:mb-0" >
            <div className="overflow-hidden rounded-full ">
              <Image
                src={item.image}
                height={900}
                width={900}
                alt={item.title}
                className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-cover rounded-full transition-transform duration-700 hover:scale-110"
              />
            </div>
            <span className="font-semibold text-base md:text-lg tracking-normal">
              {item.title}
            </span>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Collection;
