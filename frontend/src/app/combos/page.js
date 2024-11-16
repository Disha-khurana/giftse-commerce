"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiStarHalfSFill } from "react-icons/ri";
import Image from "next/image";

function page() {

  const data = [
    {
        image: [
          "/Images/birthday/pink-rose-and-cake/sweet-memories-pink-roses-bouquet-chocolate-cake_1.webp",
          "/Images/birthday/pink-rose-and-cake/sweet-memories-pink-roses-bouquet-chocolate-cake_2.webp",
          "/Images/birthday/pink-rose-and-cake/sweet-memories-pink-roses-bouquet-chocolate-cake_3.webp",
          "/Images/birthday/pink-rose-and-cake/sweet-memories-pink-roses-bouquet-chocolate-cake_4.webp",
          "/Images/birthday/pink-rose-and-cake/sweet-memories-pink-roses-bouquet-chocolate-cake_8.webp",
        ],
        link: "/sweet-memories-pink-roses-bouquet-chocolate-cake",
        title: "Sweet Memories Pink Roses Bouquet & Chocolate Cake",
        rate: "5.0",
        price: "1499",
        slug: "flowers-cakes",
        delivery: "Today",
        review: "767 reviews",
      },
      {
        image: [
          "/Images/birthday/dust-carnations-truffle/magical-dust-carnations-n-truffle-cake-combo_1.webp",
          "/Images/birthday/dust-carnations-truffle/magical-dust-carnations-n-truffle-cake-combo_2.webp",
          "/Images/birthday/dust-carnations-truffle/magical-dust-carnations-n-truffle-cake-combo_3.webp",
          "/Images/birthday/dust-carnations-truffle/magical-dust-carnations-n-truffle-cake-combo_4.webp",
          "/Images/birthday/dust-carnations-truffle/magical-dust-carnations-n-truffle-cake-combo_8.webp",
        ],
        link: "/magical-dust-carnations-n-truffle-cake-combo",
        title: "Magical Dust Carnations & Truffle Cake Combo",
        rate: "4.9",
        price: "1799",
        slug: "flowers-cakes",
        delivery: "Today",
        review: "302 reviews",
      },
      {
        image: [
          "/Images/birthday/timeless-love-cake/timeless-love-red-roses-bouquet-chocolate-cake_1.webp",
          "/Images/birthday/timeless-love-cake/timeless-love-red-roses-bouquet-chocolate-cake_2.webp",
          "/Images/birthday/timeless-love-cake/timeless-love-red-roses-bouquet-chocolate-cake_4.webp",
          "/Images/birthday/timeless-love-cake/timeless-love-red-roses-bouquet-chocolate-cake_5.webp",
          "/Images/birthday/timeless-love-cake/timeless-love-red-roses-bouquet-chocolate-cake_6.webp",
        ],
        link: "/timeless-love-red-roses-bouquet-chocolate-cake",
        title: "Timeless Love Red Roses Bouquet & Chocolate Cake",
        rate: "4.7",
        price: "1449",
        slug: "flowers-cakes",
        delivery: "Today",
        review: "360 reviews",
      },
      {
        image: [
          "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_1.webp",
          "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_2.webp",
          "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_4.webp",
          "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_5.webp",
          "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_8.webp",
        ],
        link: "/elegant-vibe-red-roses-bouquet-pineapple-cake",
        title: "Elegant Vibe Red Roses Bouquet & Pineapple Cake",
        rate: "4.9",
        price: "1449",
        slug: "flowers-cakes",
        delivery: "Today",
        review: "86 reviews",
      },
      {
        image: [
          "/Images/together/dry-fruits-combo/dry-fruits-feast_1.webp",
          "/Images/together/dry-fruits-combo/dry-fruits-feast_2.webp",
          "/Images/together/dry-fruits-combo/dry-fruits-feast_3.webp",
          "/Images/together/dry-fruits-combo/dry-fruits-feast_4.webp",
          "/Images/together/dry-fruits-combo/dry-fruits-feast_1.webp",
          
        ],
        link: "/dry-fruits-feast",
        title: "Dry Fruits Feast",
        price: "2099",
        slug: "flowers-cakes",
        delivery: "Today",
      },
      {
        image: [
          "/Images/birthday/yellow-rose-pineapple/brighten-up-the-day-roses-bouquet-pineapple-cake_1.webp",
          "/Images/birthday/yellow-rose-pineapple/brighten-up-the-day-roses-bouquet-pineapple-cake_2.webp",
          "/Images/birthday/yellow-rose-pineapple/brighten-up-the-day-roses-bouquet-pineapple-cake_4.webp",
          "/Images/birthday/yellow-rose-pineapple/brighten-up-the-day-roses-bouquet-pineapple-cake_5.webp",
          "/Images/birthday/yellow-rose-pineapple/brighten-up-the-day-roses-bouquet-pineapple-cake_9.webp",
        ],
        link: "/brighten-up-the-day-roses-bouquet-pineapple-cake",
        title: "Brighten Up The Day Roses Bouquet & Pineapple Cake",
        rate: "5.0",
        price: "1540",
        slug: "flowers-cakes",
        delivery: "Today",
        review: "76 reviews",
      },
      {
        image: [
          "/Images/birthday/pink-rose-cake/10-pink-roses-with-pineapple-cake-standard_1.webp",
          "/Images/birthday/pink-rose-cake/10-pink-roses-with-pineapple-cake-standard_2.webp",
          "/Images/birthday/pink-rose-cake/10-pink-roses-with-pineapple-cake-standard_3.webp",
          "/Images/birthday/pink-rose-cake/10-pink-roses-with-pineapple-cake-standard_4.webp",
          "/Images/birthday/pink-rose-cake/10-pink-roses-with-pineapple-cake-standard_5.webp",
        ],
        link: "/10-pink-roses-with-pineapple-cake-standard",
        title: "10 Pink Roses With Pineapple Cake Standard",
        rate: "4.8",
        price: "1149",
        slug: "flowers-cakes",
        delivery: "Today",
        review: "13 reviews",
      },
      {
        image: [
          "/Images/birthday/candle-choco/jasmine-whispers-n-chocolate-dreams_1.webp",
          "/Images/birthday/yellow-rose-pineapple/brighten-up-the-day-roses-bouquet-pineapple-cake_2.webp",
          "/Images/birthday/yellow-rose-pineapple/brighten-up-the-day-roses-bouquet-pineapple-cake_4.webp",
          "/Images/birthday/yellow-rose-pineapple/brighten-up-the-day-roses-bouquet-pineapple-cake_5.webp",
          "/Images/birthday/yellow-rose-pineapple/brighten-up-the-day-roses-bouquet-pineapple-cake_9.webp",
        ],
        link: "/brighten-up-the-day-roses-bouquet-pineapple-cake",
        title: "Brighten Up The Day Roses Bouquet & Pineapple Cake",
        rate: "5.0",
        price: "1540",
        slug: "flowers-cakes",
        delivery: "Today",
        review: "76 reviews",
      },
   
  
    
  ];
  
  
  const [hoverEffect, setHoverEffect] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (hoverEffect !== null) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => (prevCount >= 4 ? 0 : prevCount + 1));
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [hoverEffect]);

  const handleChange = (auth) => {
    setShow({ ...show, [auth]: show[auth] ? "" : auth });
  };

  return (
    <div className="px-5 md:px-12 py-10 bg-slate-100">
      <div className="flex items-center pb-5">
        <Link href="/">Home</Link>
        <MdKeyboardArrowRight />
        <h4 className="text-gray-500">Combos N Gift Hampers</h4>
      </div>

      <div className="flex gap-8">
    
        <div className="w-full space-y-6">
          <div className="bg-white p-4">
            <div className="md:flex gap-10 pb-2">
              <div className="flex gap-5 mb-3 md:mb-0">
                <h2 className="font-semibold text-lg lg:text-xl">
                Combos N Gift Hampers
                </h2>
               
              </div>
              <div className="flex gap-5 text-base md:text-[17px]">
                <h4 className="text-blue-500 font-normal ">6 Reviews</h4>
                <span className="text-gray-600 ">| 30 of 100 Gifts</span>
              </div>
            </div>
            <div className="hidden md:flex gap-7 ">
              <h3 className="font-normal text-[17px]">Sort By:</h3>
              <ul className="flex gap-7 text-gray-600">
                <li>Recommended</li>
                <li>New</li>
                <li>Price:Low to High</li>
                <li>Price:High to Low</li>
              </ul>
            </div>
          </div>
          <div className="lg:p-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-2 group"
                  onMouseEnter={() => {
                    setHoverEffect(index);
                    setCount(0);
                  }}
                  onMouseLeave={() => setHoverEffect(null)}
                >
                  <Link href={item.link} className="space-y-2">
                    {hoverEffect === index ? (
                      <Image
                        width={500}
                        height={500}
                        className="w-full h-auto"
                        src={item.image[count]}
                        alt={item.title}
                      />
                    ) : (
                      <Image
                        width={500}
                        height={500}
                        className="w-full h-auto"
                        src={item.image[0]}
                        alt={item.title}
                      />
                    )}

                    <div className="group-hover:-translate-y-5 translate-y-0 duration-500 bg-white p-2 space-y-2">
                      <h3 className="text-slate-800 text-sm">{item.title}</h3>
                      <div className="flex justify-between">
                        <span className="flex items-center font-semibold text-lg">
                          <BsCurrencyRupee />
                          {item.price}
                        </span>
                        {item.rate ? (
                          <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
                            <span>{item.rate}</span>
                            <RiStarHalfSFill />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <h6 className="text-gray-500">
                          Earliest Delivery :
                          <span className="font-semibold text-gray-700">
                            {" "}
                            {item.delivery}
                          </span>{" "}
                        </h6>
                        {
                          item.review ? <span className="text-gray-500">{item.review}</span> : ""
                        }
                        
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
