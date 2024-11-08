"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

function Slider() {
  const images = [
    "/Images/slider/new.webp",
    "/Images/slider/slice.webp",
    "/Images/slider/cred.webp",
    "/Images/slider/Airtel.webp",
    "/Images/slider/Franchisee.webp",
    "/Images/slider/FNP.webp",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <section className="hidden lg:block">
      <Swiper
        modules={[ Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="relative w-full container mx-auto "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center bg-image px-5 md:px-12 ">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full shadow-md rounded-md bg-white p-1"
              width={1000}
              height={5000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <Image src='/Images/slider/App.webp' height={500} width={500} className="h-[150px] md:h-full px-5 md:px-12 w-full lg:hidden" alt="app"/>
    </>
  );
}

export default Slider;
