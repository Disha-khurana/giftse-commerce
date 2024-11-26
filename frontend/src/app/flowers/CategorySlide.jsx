"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; // Import Keen Slider styles


import Link from "next/link";
import Image from "next/image";

// Example flower data for demonstration
const flowerData ={
    variety: [
        {
            img: '/Images/flowers/variety/All Flowers.webp',
            title: 'All Flowers',
            link: '/all-flowers'
        },
        {
            img: '/Images/flowers/variety/Anniversary (1).webp',
            title: 'Anniversary',
            link: '/anniversary'
        },
        {
            img: '/Images/flowers/variety/Bestsellers.webp',
            title: 'Bestsellers',
            link: '/bestsellers'
        },
        {
            img: '/Images/flowers/variety/Birthday (1).webp',
            title: 'Birthday',
            link: '/birthday'
        },
        {
            img: '/Images/flowers/variety/Combos.webp',
            title: 'Combos',
            link: '/combos'
        },
        {
            img: '/Images/flowers/variety/Flower Hampers.webp',
            title: 'Flower Hampers',
            link: '/flower-hampers'
        },
        {
            img: '/Images/flowers/variety/Flower Subscription.webp',
            title: 'Flower Subscription',
            link: '/flower-subscription'
        },
        {
            img: '/Images/flowers/variety/International.webp',
            title: 'International',
            link: '/international'
        },
        {
            img: '/Images/flowers/variety/Luxury Blooms.webp',
            title: 'Luxury Blooms',
            link: '/luxury-blooms'
        },
        {
            img: '/Images/flowers/variety/New Arrivals.webp',
            title: 'New Arrivals',
            link: '/new-arrivals'
        },
        {
            img: '/Images/flowers/variety/Personalised.webp',
            title: 'Personalised',
            link: '/personalised'
        },
        {
            img: '/Images/flowers/variety/Preserved Flowers.webp',
            title: 'Preserved Flowers',
            link: '/preserved-flowers'
        },
        {
            img: '/Images/flowers/variety/Roses.webp',
            title: 'Roses',
            link: '/roses'
        },
        {
            img: '/Images/flowers/variety/Same Day Delivery.webp',
            title: 'Same Day Delivery',
            link: '/same-day-delivery'
        }
    ]}

export default function Slider() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 9, // Number of visible slides
      spacing: 15, // Space between slides
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 7, spacing: 10 },
      },
      "(max-width: 768px)": {
        slides: { perView: 4, spacing: 20 },
      },
      "(max-width: 480px)": {
        slides: { perView: 3, spacing: 5 },
      },
    },
  });

  return (
    <div className="relative px-5 md:px-12">
      <div ref={sliderRef} className="keen-slider">
        {flowerData.variety.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            <Link href={`/flowers${item.link}`}>
              <Image
                src={item.img}
                className="w-full h-auto rounded-full mb-3"
                height={200}
                width={200}
                alt={item.title}
              />
              <span className="flex items-center justify-center font-semibold">
                {item.title}
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-200"
        onClick={() => slider?.current?.prev()}
      >
        &#x276E;
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-200"
        onClick={() => slider?.current?.next()}
      >
        &#x276F;
      </button>
    </div>
  );
}
