"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";

function Treasures() {

    const treasures = [
        {
          image: '/Images/personalized/treasure/Bar-Accessories.webp',
          link: '/bar-accessories',
          title: 'Bar Accessories'
        },
        {
          image: '/Images/personalized/treasure/Clocks.webp',
          link: '/clocks',
          title: 'Clocks'
        },
        {
          image: '/Images/personalized/treasure/Key-chains.webp',
          link: '/key-chains',
          title: 'Key Chains'
        },
        {
          image: '/Images/personalized/treasure/Lamps.webp',
          link: '/lamps',
          title: 'Lamps'
        },
        {
          image: '/Images/personalized/treasure/NamePlates.webp',
          link: '/name-plates',
          title: 'Name Plates'
        },
        {
          image: '/Images/personalized/treasure/Table-Tops.webp',
          link: '/table-tops',
          title: 'Table Tops'
        },
        {
          image: '/Images/personalized/treasure/Tailor-Made-Treasures_web-14-11-24.webp',
          link: '/tailor-made-treasures',
          title: 'Tailor Made Treasures'
        }
      ];
      

    
    const [slideRef, slide] = useKeenSlider({
        loop: false,
        slides: {
            perView: 5, // Number of visible slides
            spacing: 15, // Space between slides
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: { perView: 5, spacing: 15 },
            },
            "(max-width: 768px)": {
                slides: { perView: 2, spacing: 15 },
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
        <h2 className="font-bold text-2xl md:text-3xl text-center">Tailor-Made Treasures </h2>
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
            {treasures.map((item, index) => (
                <div key={index} className="keen-slider__slide">
                    <Link href={`/personalised${item.link}`}>
                    <div className="space-y-2">
                        <Image
                            src={item.image}
                            height={500}
                            width={500}
                            className="w-full h-[200px] rounded-3xl "
                            alt={item.title}
                        />
                        <span className="flex justify-center font-semibold text-lg tracking-wide">{item.title}</span>
                        </div>
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

export default Treasures
