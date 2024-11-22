"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";

function PlantsOccasion() {

    const flowerData={
        Occasion: [
            {
                img: "/Images/flowers/occasion/Anniversary.webp",
                link: "/anniversary",
            },
            {
                img: "/Images/flowers/occasion/Birthday.webp",
                link: "/birthday",
            },
            {
                img: "/Images/flowers/occasion/Celebrations.webp",
                link: "/celebrations",
            },
            {
                img: "/Images/flowers/occasion/Condolences.webp",
                link: "/condolences",
            },
            {
                img: "/Images/flowers/occasion/Desk.webp",
                link: "/desk",
            },
            {
                img: "/Images/flowers/occasion/Farewell.webp",
                link: "/farewell",
            },
            {
                img: "/Images/flowers/occasion/Get well soon.webp",
                link: "/get-well-soon",
            },
            {
                img: "/Images/flowers/occasion/Housewarming.webp",
                link: "/housewarming",
            },
            {
                img: "/Images/flowers/occasion/I am Sorry.webp",
                link: "/i-am-sorry",
            },
            {
                img: "/Images/flowers/occasion/I love you.webp",
                link: "/i-love-you",
            },
            {
                img: "/Images/flowers/occasion/I miss you.webp",
                link: "/i-miss-you",
            },
            {
                img: "/Images/flowers/occasion/Thank You.webp",
                link: "/thank-you",
            },
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
                        <h2 className="font-bold text-3xl text-center">Flowers for Every Occasion</h2>
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
                            {flowerData.Occasion.map((item, index) => (
                                <div key={index} className="keen-slider__slide">
                                    <Link href={`/flowers${item.link}`}>
                                        <Image
                                            src={item.img}
                                            height={500}
                                            width={500}
                                            className="w-full h-[200px] rounded-3xl rounded-br-[64px] rounded-tl-[64px]"
                                            alt="title"
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

export default PlantsOccasion
