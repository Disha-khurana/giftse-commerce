"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";

function Autoplay() {

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        animation: { duration: 1000 },
        slides: {
            perView: 1,
            spacing: 15,
        },
    });




    

    useEffect(() => {
        // Check if slider instance exists
        if (slider) {
            const interval = setInterval(() => {
                slider.current?.next();
            }, 4000);

            // Clear interval on unmount or if slider changes
            return () => clearInterval(interval);
        }
    }, [slider]);


    const flowerData = {
        images: [
            "/Images/flowers/slider/blooms.webp",
            "/Images/flowers/slider/premium.webp",
            "/Images/flowers/slider/subs.webp",
        ],
    }
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-12 items-center justify-center">

    <div className="relative w-full">
        <div ref={sliderRef} className="keen-slider">
            {flowerData.images.map((image, index) => (
                <div
                    key={`slide-${index}`}
                    className="keen-slider__slide flex justify-center"
                >
                    <img
                        src={image}
                        alt={`Slide ${index}`}
                        className="object-cover w-full rounded-lg shadow-lg"
                    />
                </div>
            ))}
        </div>

        {/* Left Arrow */}
        <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-200"
            onClick={() => slider?.current?.prev()}
        >
            &#x276E;
        </button>

        {/* Right Arrow */}
        <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-200"
            onClick={() => slider?.current?.next()}
        >
            &#x276F;
        </button>
    </div>


</div>
  )
}

export default Autoplay
