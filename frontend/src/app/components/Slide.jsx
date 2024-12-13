"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { ApiBaseurl } from "./common/Apiurl";

function Slider() {
  const [slide, setSlide] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`${ApiBaseurl}/offerSlide`);
        const image = await response.json();
        console.log(response)
        setSlide(image);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, [ApiBaseurl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="hidden lg:block">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="relative w-full container mx-auto"
        >
          {slide.length === 0 ? (
            <div>No images available.</div>
          ) : (
            slide.slice(0,6).map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center bg-image px-5 md:px-12">
                <Image
                  src={item.image} 
                  alt={`Slide ${index}`}
                  className="object-cover w-full h-full shadow-md rounded-md bg-white p-1"
                  width={1000}
                  height={500}
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </section>

      {/* Mobile Version Image */}
      {slide.length > 6 ? (
  <Image 
    src={slide[6].image} 
    height={150} 
    width={150} 
    className="h-[150px] md:h-full px-5 md:px-12 w-full lg:hidden" 
    alt="app" 
  />
) : (
  <div>No images available.</div>
)}

    </>
  );
}

export default Slider;
