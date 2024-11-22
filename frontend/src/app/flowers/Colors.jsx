"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";

function Colors() {

    const flowerData={
        
        color: [
            {
                image: "/Images/flowers/color/Blue.webp",
                link: "/blue",
                title: "Blue",
            },
            {
                image: "/Images/flowers/color/Cool.webp",
                link: "/cool",
                title: "Cool",
            },
            {
                image: "/Images/flowers/color/Mixed.webp",
                link: "/mixed",
                title: "Mixed",
            },
            {
                image: "/Images/flowers/color/Orange.webp",
                link: "/orange",
                title: "Orange",
            },
            {
                image: "/Images/flowers/color/Pastel.webp",
                link: "/pastel",
                title: "Pastel",
            },
            {
                image: "/Images/flowers/color/Peach.webp",
                link: "/peach",
                title: "Peach",
            },
            {
                image: "/Images/flowers/color/Pink.webp",
                link: "/pink",
                title: "Pink",
            },
            {
                image: "/Images/flowers/color/Purple.webp",
                link: "/purple",
                title: "Purple",
            },
            {
                image: "/Images/flowers/color/Red.webp",
                link: "/red",
                title: "Red",
            },
            {
                image: "/Images/flowers/color/Warm.webp",
                link: "/warm",
                title: "Warm",
            },
            {
                image: "/Images/flowers/color/White.webp",
                link: "/white",
                title: "White",
            },
            {
                image: "/Images/flowers/color/Yellow.webp",
                link: "/yellow",
                title: "Yellow",
            },
        ],

        

    }

    const [sliderrRef, sliderr] = useKeenSlider({
        loop: true,
        slides: {
            perView: 10, // Number of visible slides
            spacing: 5, // Space between slides
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: { perView: 10, spacing: 2 },
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
   <div className="relative bg-[url('/Images/flowers/bg.webp')] py-16">
                    <div className="flex items-center justify-center space-x-4 relative z-10 mb-6">
                        <Image src="/Images/flowers/choose/spark.svg" height={500} width={500} className="w-10 h-10" alt="spark" />
                        <h2 className="font-bold text-3xl text-center">Choose a Favourite Colour</h2>
                        <Image src="/Images/flowers/choose/spark.svg" height={500} width={500} className="w-10 h-10" alt="spark" />
                    </div>
                    <button
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-200"
                        onClick={() => sliderr?.current?.prev()}
                    >
                        &#x276E;
                    </button>

                    <div ref={sliderrRef} className="keen-slider  rounded-xl px-5 md:px-12">
                        {flowerData.color.map((item, index) => (
                            <Link href={`/flowers${item.link}`} key={index} className="keen-slider__slide space-y-4">
                                {/* Image */}
                                <Image
                                    src={item.image}
                                    height={500}
                                    width={500}
                                    alt={item.title}
                                    className="w-full h-auto rounded-lg"
                                />
                                {/* Title */}
                                <span className="flex justify-center text-lg font-semibold">{item.title}</span>
                            </Link>
                        ))}
                    </div>

                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-200"
                        onClick={() => sliderr?.current?.next()}
                    >
                        &#x276F;
                    </button>
                </div>
  )
}

export default Colors
