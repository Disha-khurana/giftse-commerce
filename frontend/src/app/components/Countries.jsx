'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ApiBaseurl } from "./common/Apiurl";

function Countries() {
  const[country,setCountry] = useState([]);
  const[loading,setLoading] = useState(true);
  const[hover,setHover] = useState(0)

  useEffect(()=>{
    const fetchCountry = async()=>{
      try{
        const response = await fetch(`${ApiBaseurl}/global`)
        const countryData = await response.json()
        setCountry(countryData)
    }catch(error){
      console.error('Error fetching country',error)
    }finally{
      setLoading(false)
    }
  }
  fetchCountry()
  },[ApiBaseurl])

  if(loading){
    return <div>Loading...</div>
  }

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
          {country.length === 0 ?(
            <div>No country available.</div>
          ):(
        country.map((item, index) => (
          <div key={index} onMouseEnter={()=>setHover(index)} className={` ${hover == index ?'w-96' :'w-44'} group h-96 relative duration-300`}>
            <Image src={item.src} alt={item.alt} height={500} width={500} className="w-full h-full "/>
            <Link href={item.link}>
               <div className={`absolute scale-0 ${hover== index && "group-hover:scale-100"} ${hover== index && "scale-100"} duration-300 inset-0 bg-[rgba(0,0,0,0.30)] tracking-normal text-white  flex flex-col justify-center items-center`}>
               <span className="text-lg font-semibold">{item.title}</span>
               <p className="text-sm px-7">{item.description}</p>
 
             </div>
             </Link>
            
           
            </div>
          ))
        )}
        </div>
     
    </div>
  );
}

export default Countries;
