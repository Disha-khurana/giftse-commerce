'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { RiStarHalfSFill } from 'react-icons/ri';

function Gifts() {
    const [sliderRef, slider] = useKeenSlider({
        loop: false,
        slides: {
            perView: 6,
            spacing: 20,
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: { perView: 4, spacing: 15 },
            },
            "(max-width: 768px)": {
                slides: { perView: 3, spacing: 15 },
            },
            "(max-width: 480px)": {
                slides: { perView: 2, spacing: 15 },
            },
        },
    });

    const items = [
        {
            img: '/Images/personalized/items/Accessories.webp',
            title: 'Accessories',
            link: '/accessories',
        },
        {
            img: '/Images/personalized/items/Caricatures.webp',
            title: 'Caricatures',
            link: '/caricatures',
        },
        {
            img: '/Images/personalized/items/Combos (1).webp',
            title: 'Combos',
            link: '/combos',
        },
        {
            img: '/Images/personalized/items/Cushions.webp',
            title: 'Cushions',
            link: '/cushions',
        },
        {
            img: '/Images/personalized/items/Decor.webp',
            title: 'Neon Lights',
            link: '/neon-lights',
        },
        {
            img: '/Images/personalized/items/Flowers.webp',
            title: 'Flowers',
            link: '/flowers',
        },
        {
            img: '/Images/personalized/items/Hampers.webp',
            title: 'Hampers',
            link: '/hampers',
        },
        {
            img: '/Images/personalized/items/Jewellery.webp',
            title: 'Jewellery',
            link: '/jewellery',
        },
        {
            img: '/Images/personalized/items/Mugs.webp',
            title: 'Mugs',
            link: '/mugs',
        },
        {
            img: '/Images/personalized/items/Sippers.webp',
            title: 'Sippers',
            link: '/sippers',
        },
        {
            img: '/Images/personalized/items/Stationary.webp',
            title: 'Stationary',
            link: '/stationary',
        },
        {
            img: '/Images/personalized/items/T-Shirts.webp',
            title: 'T-Shirts',
            link: '/t-shirts',
        },
    ];

    return (
        <div className="bg-slate-200 h-auto w-full px-5 md:px-12 py-4 md:py-7 relative">
            <div className="bg-white p-4 mt-4 md:mt-6 lg:mt-0">
                <div className="flex gap-5 md:gap-10 pb-2">
                    <div className="flex gap-5">
                        <h2 className="font-semibold text-lg lg:text-2xl">Personalised Gifts</h2>
                        <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
                            <span>3.9</span>
                            <RiStarHalfSFill />
                        </div>
                        <h4 className="text-blue-500 font-normal mt-1">32884 Reviews</h4>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute left-1 md:left-4 top-56  transform -translate-y-1/2 bg-white rounded-full p-1 md:p-3 shadow-md z-20 hover:bg-gray-200"
                onClick={() => slider?.current?.prev()}
            >
                &#x276E;
            </button>
            <button
                className="absolute right-1 md:right-4 top-56  transform -translate-y-1/2 bg-white rounded-full p-1 md:p-3 shadow-md z-20 hover:bg-gray-200"
                onClick={() => slider?.current?.next()}
            >
                &#x276F;
            </button>

            {/* Slider */}
            <div ref={sliderRef} className="keen-slider mt-8">
                {items.map((item, index) => (
                    <div key={index} className="keen-slider__slide">
                        <Link
                            href={`/personalised${item.link}`}
                            className="bg-white rounded-xl object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
                        >
                            <Image
                                src={item.img}
                                height={700}
                                width={700}
                                alt={item.title}
                                className="rounded-xl"
                            />
                            <span className="flex justify-center py-3 text-lg font-semibold">
                                {item.title}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gifts;
