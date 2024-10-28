"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Slider() {
  const images = [
    "/Images/slider/img1.webp",
    "/Images/slider/img2.webp",
    "/Images/slider/img3.webp",
    "/Images/slider/img4.webp",
    "/Images/slider/img5.webp",
    "/Images/slider/img6.webp",
    "/Images/slider/img7.webp",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="relative w-full container mx-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center bg-image">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-auto lg:h-auto "
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
