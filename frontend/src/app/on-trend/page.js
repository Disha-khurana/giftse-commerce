"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdOutlineWatchLater, MdRecommend } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiStarHalfSFill } from "react-icons/ri";
import Image from "next/image";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

function page() {

  const data = [
    {
      image: [
        "/Images/trend/hanging/shree-krishna-wooden-wall-hanging_1.webp",
        "/Images/trend/hanging/shree-krishna-wooden-wall-hanging_2.webp",
        "/Images/trend/hanging/shree-krishna-wooden-wall-hanging_3.webp",
        "/Images/trend/hanging/shree-krishna-wooden-wall-hanging_1.webp",
        "/Images/trend/hanging/shree-krishna-wooden-wall-hanging_2.webp",

      ],
      link: "/shree-krishna-wooden-wall-hanging",
      title: "Shree Krishna Wooden Wall Hanging",
      price: "399",
      delivery: "Today",
    },
    {
      image: [
        "/Images/trend/jasmine-scented/jasmine-scented-candle-in-mandala-designer-tin_1.webp",
        "/Images/trend/jasmine-scented/jasmine-scented-candle-in-mandala-designer-tin_2.webp",
        "/Images/trend/jasmine-scented/jasmine-scented-candle-in-mandala-designer-tin_3.webp",
        "/Images/trend/jasmine-scented/jasmine-scented-candle-in-mandala-designer-tin_1.webp",
        "/Images/trend/jasmine-scented/jasmine-scented-candle-in-mandala-designer-tin_2.webp",

      ],
      link: "/jasmine-scented-candle-in-mandala-designer-tin",
      title: "Jasmine Scented Candle In Mandala Designer Tin",
      price: "349",
      delivery: "Today",
    },
    {
      image: [
        "/Images/trend/rose-scented/secret-message-rose-scented-candle_1.webp",
        "/Images/trend/rose-scented/secret-message-rose-scented-candle_2.webp",
        "/Images/trend/rose-scented/secret-message-rose-scented-candle_3.webp",
        "/Images/trend/rose-scented/secret-message-rose-scented-candle_4.webp",
        "/Images/trend/rose-scented/secret-message-rose-scented-candle_1.webp",

      ],
      link: "/secret-message-rose-scented-candle",
      title: "Secret Message Rose Scented Candle",
      price: "399",
      delivery: "Today",
    },
    {
      image: [
        "/Images/trend/studs/royal-radiance-pearl-studs_1.webp",
        "/Images/trend/studs/royal-radiance-pearl-studs_2.webp",
        "/Images/trend/studs/royal-radiance-pearl-studs_3.webp",
        "/Images/trend/studs/royal-radiance-pearl-studs_4.webp",
        "/Images/trend/studs/royal-radiance-pearl-studs_5.webp",

      ],
      link: "/royal-radiance-pearl-studs",
      title: "Royal Radiance Pearl Studs",
      price: "499",
      delivery: "Today",
    },
  ]


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
        <h4 className="text-gray-500">New Arrival Gifts</h4>
      </div>

      <div className="flex gap-8">

        <div className="w-full space-y-6">
          <div className="bg-white p-4">
            <div className="md:flex gap-5 md:items-center md:gap-10 pb-2">
              <div className="flex gap-5 mb-3 md:mb-0">
                <h2 className="font-semibold text-lg lg:text-xl">
                  New Arrival Gifts
                </h2>

              </div>
              <div className="flex gap-5 text-base md:text-[17px]">
                <h4 className="text-blue-500 font-normal ">6 Reviews</h4>
                <span className="text-gray-600 ">| 30 of 100 Gifts</span>
              </div>
            </div>
            <div className="hidden md:flex gap-3 ">
              <h3 className="font-normal text-gray-600 text-base">Sort By:</h3>
              <ul className="flex gap-6 text-gray-600">
                <li className="flex items-center gap-1 "><MdRecommend className="text-xl"/><span className="border-b border-dashed border-b-gray-400">Recommended</span></li>
                <li className="flex items-center gap-1 "><MdOutlineWatchLater className=""/><span className="border-b border-dashed border-b-gray-400">New</span></li>
                <li className="flex items-center gap-1 "><IoMdArrowRoundUp  className="text-xl"/><span className="border-b border-dashed border-b-gray-400">Price:Low to High</span></li>
                <li className="flex items-center gap-1 "><IoMdArrowRoundDown className="text-xl"/><span className="border-b border-dashed border-b-gray-400">Price:High to Low</span></li>
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

                    <div className="group-hover:-translate-y-5 translate-y-0 duration-500 bg-white p-2 ">
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-slate-800 text-base">{item.title}</h3>
                          {item.rate ?
                            <div className="flex items-center text-xl text-yellow-500">
                              <MdStar />
                              <MdStar />
                              <MdStar />
                              <MdStar />
                              {item.rate < '5.0' ? <RiStarHalfSFill /> : <MdStar />}

                            </div> : ""}
                        </div>
                        <div className="flex items-center justify-between">
                          {
                            item.rate && item.review && (

                              <div className="flex items-center gap-3  ">
                                <span className="bg-[#707428] rounded-br-[64px] text-white rounded-bl-[64px] rounded-tl-[64px] font-semibold px-2 text-base">{item.rate}<span className="text-xs font-normal opacity-60 text-slate-50">/5</span></span>
                                <span className="font-semibold text-sm text-[#707428]">{item.review}</span>
                              </div>
                            )}
                          <div className="flex items-center text-xl font-semibold">
                            <BsCurrencyRupee />
                            <span>{item.price}</span>
                          </div>
                        </div>
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
