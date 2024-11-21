"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";

function Page() {

    const flowerData = {
        images: [
            "/Images/flowers/slider/blooms.webp",
            "/Images/flowers/slider/premium.webp",
            "/Images/flowers/slider/subs.webp",
        ],

        range: [
            {
                image: "/Images/flowers/range/Roses.webp",
                link: "/roses",
            },
            {
                image: "/Images/flowers/range/Orchids.webp",
                link: "/orchids",
            },
            {
                image: "/Images/flowers/range/Lily.webp",
                link: "/lily",
            },
            {
                image: "/Images/flowers/range/Carnations.webp",
                link: "/carnations",
            },
            {
                image: "/Images/flowers/range/Gerbaras.webp",
                link: "/gerbaras",
            },
            {
                image: "/Images/flowers/range/Mixed.webp",
                link: "/mixed",
            },
        ],

        chooseUs: [
            {
                img: "/Images/flowers/choose/Premium-Flowers.svg",
                title: "Premium Flowers",
            },
            {
                img: "/Images/flowers/choose/Handcrafted-arrangements.svg",
                title: "Handcrafted Arrangements",
            },
            {
                img: "/Images/flowers/choose/Hassle-Free-Delivery.svg",
                title: "Hassle-Free Delivery",
            },
            {
                img: "/Images/flowers/choose/Customer-Support.svg",
                title: "Customer Support",
            },
        ],

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

        surprise:[
            {
                img:'/Images/flowers/surprise/Him.webp',
                link:'/him'
            },
            {
                img:'/Images/flowers/surprise/Her.webp',
                link:'/her'
            },
            {
                img:'/Images/flowers/surprise/Them.webp',
                link:'/them'
            }
        ]

    }


    // Autoplay logic
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        animation: { duration: 1000 },
        slides: {
            perView: 1,
            spacing: 15,
        },
    });

    const [slideRef,slide] = useKeenSlider({
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

    return (
        <div className=" space-y-20">
            <div className="flex flex-col md:flex-row px-5 md:px-12 items-center justify-center">
                {/* Slider with Arrow Controls */}
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

            <div className="space-y-10 px-5 md:px-12">
                <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-px bg-[#7d8035] "></div>
                    <h2 className="font-bold text-3xl text-center">Explore Our Exquisite Range</h2>
                    <div className="w-16 h-px bg-[#7d8035]"></div>
                </div>
                <div className="grid grid-cols-6 gap-6 ">
                    {flowerData.range.map((item, index) => (
                        <Link href={`/gift${item.link}`}>
                            <img key={index} src={item.image} className='w-full h-auto rounded-xl' />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="space-y-10 bg-[url('/Images/flowers/bg-img.webp')] py-9 rounded-xl">
                <div className="flex items-center justify-center space-x-4">
                    <Image src='/Images/flowers/choose/spark.svg' height={500} width={500} className="w-10 h-10" alt="spark" />
                    <h2 className="font-bold text-3xl text-center">Why Choose FNP ?</h2>
                    <Image src='/Images/flowers/choose/spark.svg' height={500} width={500} className="w-10 h-10" alt="spark" />
                </div>
                <div className="flex flex-wrap  gap-20 justify-center ">
                    {flowerData.chooseUs.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <Image src={item.img} height={500} width={500} className="w-20 h-20" />
                            <p className=" font-normal text-xl font-serif">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
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

            <div className="space-y-10 relative bg-[url('/Images/flowers/Background.webp')] py-12 rounded-xl px-5 md:px-12">
            <div className="flex items-center justify-center space-x-4">
                    <Image src='/Images/flowers/choose/spark.svg' height={500} width={500} className="w-10 h-10" alt="spark" />
                    <h2 className="font-bold text-3xl text-center">Plan The Perfect Surprise</h2>
                    <Image src='/Images/flowers/choose/spark.svg' height={500} width={500} className="w-10 h-10" alt="spark" />
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {flowerData.surprise.map((item,index)=>(
                        <div key={index}>
                            <Image src={item.img} height={500} width={500} alt="title" className="w-[400px]"/>
                        </div>
                    ))}

                </div>

            <img src="/Images/flowers/suprise-n.svg" className="absolute inset-0"/>      
            </div>
            </div>

        </div>
    );
}

export default Page;
