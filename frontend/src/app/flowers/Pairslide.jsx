"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";

function Pairslide() {

    const flowerData={
        pair: [
            {
                img: '/Images/flowers/pair/flowers-and-cakes_desk.webp',
                title: 'Flowers and Cakes',
                link: '/flowers-and-cakes'
            },
            {
                img: '/Images/flowers/pair/Flowers-and-Chocolates.webp',
                title: 'Flowers and Chocolates',
                link: '/flowers-and-chocolates'
            },
            {
                img: '/Images/flowers/pair/Flowers-and-Greeting-Cards.webp',
                title: 'Flowers and Greeting Cards',
                link: '/flowers-and-greeting-cards'
            },
            {
                img: '/Images/flowers/pair/Flowers-and-Guitarist.webp',
                title: 'Flowers and Guitarist',
                link: '/flowers-and-guitarist'
            },
            {
                img: '/Images/flowers/pair/flowers-and-plants_desk.webp',
                title: 'Flowers and Plants',
                link: '/flowers-and-plants'
            },
            {
                img: '/Images/flowers/pair/Flowers-and-Teddy-Bears.webp',
                title: 'Flowers and Teddy Bears',
                link: '/flowers-and-teddy-bears'
            }
        ],
    }

    
    const [slideRef, slide] = useKeenSlider({
        loop: true,
        slides: {
            perView: 5, // Number of visible slides
            spacing: 15, // Space between slides
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: { perView: 5, spacing: 2 },
            },
            "(max-width: 768px)": {
                slides: { perView: 2, spacing: 8 },
            },
            "(max-width: 480px)": {
                slides: { perView: 1, spacing: 5 },
            },
        },
    });

  return (
    <div className="space-y-10 bg-[url('/Images/flowers/bg.webp')] py-12 rounded-xl px-5 md:px-12">
    <div className="flex items-center justify-center space-x-4">
        <div className="w-16 h-px bg-[#7d8035] "></div>
        <h2 className="font-bold text-3xl text-center">Pair with Flowers </h2>
        <div className="w-16 h-px bg-[#7d8035]"></div>
    </div>
    <div className="relative">
        <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-200"
            onClick={() => slide?.current?.prev()}
        >
            &#x276E;
        </button>

        <div ref={slideRef} className="keen-slider">
            {flowerData.pair.map((item, index) => (
                <div key={index} className="keen-slider__slide">
                    <Link href={`/flowers${item.link}`}>
                        <Image
                            src={item.img}
                            height={500}
                            width={500}
                            className="w-full h-[200px] rounded-3xl rounded-br-[64px] rounded-tl-[64px]"
                            alt={item.title}
                        />
                    </Link>



                </div>
            ))}
        </div>

        {/* Right Arrow */}
        <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-200"
            onClick={() => slide?.current?.next()}
        >
            &#x276F;
        </button>
    </div>
    <div>

    </div>

</div>
  )
}

export default Pairslide
