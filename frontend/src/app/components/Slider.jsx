"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ApiBaseurl } from "./common/Apiurl";
import Link from "next/link";

function Slider() {
const[slider,setSlider] = useState([]);
const[loading,setLoading] = useState(true);



  useEffect(() => {
    const fetchSlider = async()=>{
      try{
        const response = await fetch(`${ApiBaseurl}/slide`)
        const slideData = await response.json();
        setSlider(slideData)
      }catch(error){
        console.error('Error fetching slider',error);
      }finally{
        setLoading(false);
      }
    }
    fetchSlider();
  }, [ApiBaseurl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        className="relative w-full container mx-auto "
      >
         {slider.length === 0 ? (
            <div>No images available.</div>
          ) : (
            slider.slice(0,5).map((item, index) => (
          <SwiperSlide key={`desktop-${index}`} className=" justify-center flex bg-image">
            <Link href={item.link}>
            <img
              src={item.image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-auto  hidden lg:block"
              width={1000}
              height={5000}
            />
            </Link>
          </SwiperSlide>
        ))
      )}
      </Swiper>
     
        <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        className="relative w-full container mx-auto"
      >
          {slider.length === 0 ? (
            <div>No images available.</div>
          ) : (
            slider.slice(5,9).map((item, index) => (
          <SwiperSlide key={`mobile-${index}`} className="flex justify-center bg-image">
            <Link href={item.link}>
            <img
              src={item.image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-auto lg:hidden "
              width={1000}
              height={5000}
            />
            </Link>
          </SwiperSlide>
        ))
      )}
       
      </Swiper>
    </section>
  );
}

export default Slider;
