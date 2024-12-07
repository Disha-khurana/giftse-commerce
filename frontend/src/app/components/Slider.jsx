"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider() {
  const images = [
    "/Images/slider/img1.webp",
    // "/Images/slider/img2.webp",
    "/Images/slider/img3.webp",
    // "/Images/slider/img4.webp",
    "/Images/slider/img5.webp",
    "/Images/slider/img6.webp",
    "/Images/slider/img7.webp",
  ];

  const slide=[
    "/Images/slider/LUXE_Mob.webp",
    "/Images/slider/Wedding_Mob.webp",
    "/Images/slider/Childrens_Day.webp",
    "/Images/slider/Birthday_banner.webp",
    "/Images/slider/Anniversary_Mob.webp"
  ]

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
        {images.map((image, index) => (
          <SwiperSlide key={`desktop-${index}`} className=" justify-center flex bg-image">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-auto  hidden lg:block"
              width={1000}
              height={5000}
            />
          </SwiperSlide>
        ))}
       
      </Swiper>
     
        <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        className="relative w-full container mx-auto"
      >
         {slide.map((image, index) => (
          <SwiperSlide key={`mobile-${index}`} className="flex justify-center bg-image">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-auto lg:hidden "
              width={1000}
              height={5000}
            />
          </SwiperSlide>
        ))}
       
      </Swiper>
    </section>
  );
}

export default Slider;
