'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Countries() {
  const country = [
    {
      src: "/Images/country/singapore.webp",
      alt: "singapore",
      title: "Singapore",
      description: "A bustling city-state known for its cultural diversity and innovation.",
      link: "/global/singapore"
    },
    {
      src: "/Images/country/Australia.webp",
      alt: "australia",
      title: "Australia",
      description: "Famous for its unique wildlife, beaches, and landmarks like the Sydney Opera House.",
      link: "/global/australia"
    },
    {
      src: "/Images/country/Toronto.webp",
      alt: "toronto",
      title: "Toronto",
      description: "Canada’s largest city, known for its vibrant arts scene and CN Tower.",
      link: "/global/toronto"
    },
    {
      src: "/Images/country/Germany.webp",
      alt: "germany",
      title: "Germany",
      description: "A European powerhouse known for its history, art, and engineering excellence.",
      link: "/global/germany"
    },
    {
      src: "/Images/country/UK.webp",
      alt: "uk",
      title: "United Kingdom",
      description: "Known for its royal heritage, historical landmarks, and cultural impact.",
      link: "/global/uk"
    },
    {
      src: "/Images/country/UAE.webp",
      alt: "uae",
      title: "United Arab Emirates",
      description: "Home to futuristic cities like Dubai and iconic landmarks such as the Burj Khalifa.",
      link: "/global/uae"
    },
    {
      src: "/Images/country/USA.webp",
      alt: "usa",
      title: "United States",
      description: "A diverse country known for its influence on global culture, economy, and technology.",
      link: "/global/usa"
    },
    {
      src: "/Images/country/Worldwide-mob.webp",
      alt: "worldwide",
      title: "Worldwide",
      description: "Our services are available across the globe, bringing people together everywhere.",
      link: "/global/worldwide"
    },
    {
      src: "/Images/country/Burj_Khalifa.webp",
      alt: "Burj_Khalifa",
      title: "Burj Khalifa",
      description: "The tallest building in the world, located in Dubai, UAE, representing modern architecture.",
      link: "/global/burj_khalifa"
    }
  ];
  
  
  

  const[hover,setHover] = useState(0)

  return (
    <div className="px-5 md:px-12">
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

      
        <div className="flex items-center" >
        {country.map((item, index) => (
          <div key={index} onMouseEnter={()=>setHover(index)} className={` ${hover == index ?'w-96' :'w-44'} group h-96 relative duration-300`}>
            <Image src={item.src} alt={item.alt} height={500} width={500} className="w-full h-full "/>
            <Link href={item.link}>
               <div className={`absolute scale-0 ${hover== index && "group-hover:scale-100"} ${hover== index && "scale-100"} duration-300 inset-0 bg-[rgba(0,0,0,0.30)] tracking-normal text-white  flex flex-col justify-center items-center`}>
               <span className="text-lg font-semibold">{item.title}</span>
               <p className="text-sm px-7">{item.description}</p>
 
             </div>
             </Link>
            
           
            </div>
          ))}
        </div>
     
    </div>
  );
}

export default Countries;
