"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdOutlineWatchLater, MdRecommend, MdStar } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiStarHalfSFill } from "react-icons/ri";
import Image from "next/image";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

function page() {
  const [show, setShow] = useState({
    price: "price",

  });

  const price = [
    { range: "₹ 0 TO ₹ 499", count: 129 },
    { range: "₹ 500 TO ₹ 999", count: 172 },
    { range: "₹ 1000 TO ₹ 1499", count: 55 },
    { range: "₹ 1500 TO ₹ 1999", count: 15 },
    { range: "₹ 2000 TO ₹ 2499", count: 7 },
    { range: "₹ 3000 AND ABOVE", count: 1 }
  ];


  const data = [

    {
      image: [
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_1.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_2.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_3.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_4.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_5.webp",
      ],
      link: "/jade-plant-in-gold-tone-metal-pot",
      title: "Jade Plant In Gold Tone Metal Pot",
      rate: "4.8",
      price: "249",
    },
    {
      image: [
        "/Images/plants/plants-3/money-jade-syngonium-plant-set_1.webp",
        "/Images/plants/plants-3/money-jade-syngonium-plant-set_2.webp",
        "/Images/plants/plants-3/money-jade-syngonium-plant-set_3.webp",
        "/Images/plants/plants-3/money-jade-syngonium-plant-set_4.webp",
        "/Images/plants/plants-3/money-jade-syngonium-plant-set_10.webp",
      ],
      link: "/money-jade-syngonium-plant-set",
      title: "Money, Jade & Syngonium Plant Set",
      rate: "4.9",
      price: "599",
      review: "242 reviews",
      delivery: "Tomorrow",
    },
    {
      image: [
        "/Images/plants/truffle-and-plant/eggless-truffle-cake-money-plant_1.webp",
        "/Images/plants/truffle-and-plant/eggless-truffle-cake-money-plant_2.webp",
        "/Images/plants/truffle-and-plant/eggless-truffle-cake-money-plant_3.webp",
        "/Images/plants/truffle-and-plant/eggless-truffle-cake-money-plant_4.webp",
        "/Images/plants/truffle-and-plant/eggless-truffle-cake-money-plant_5.webp"

      ],
      link: "/eggless-truffle-cake-money-plant",
      title: "Eggless Truffle Cake & Money Plant",
      rate: "4.6",
      price: "1299",
      review: "132 reviews",
      delivery: "Today",
    },
    {
      image: [
        "/Images/plants/raisin-pots/set-of-3-air-purifying-plants-in-raisin-pots_1.webp",
        "/Images/plants/raisin-pots/set-of-3-air-purifying-plants-in-raisin-pots_2.webp",
        "/Images/plants/raisin-pots/set-of-3-air-purifying-plants-in-raisin-pots_3.webp",
        "/Images/plants/raisin-pots/set-of-3-air-purifying-plants-in-raisin-pots_7.webp",
        "/Images/plants/raisin-pots/set-of-3-air-purifying-plants-in-raisin-pots_8.webp",

      ],
      link: "/set-of-3-air-purifying-plants-in-raisin-pots",
      title: "Set of 3 Air Purifying Plants In Raisin Pots",
      rate: "4.5",
      price: "1499",
      review: "60 reviews",
      delivery: "Tomorrow",
    },
    {
      image: [
        "/Images/plants/pink-pot/pink-fortune-aglaonema-plant-with-pot_1.webp",
        "/Images/plants/pink-pot/pink-fortune-aglaonema-plant-with-pot_2.webp",
        "/Images/plants/pink-pot/pink-fortune-aglaonema-plant-with-pot_3.webp",
        "/Images/plants/pink-pot/pink-fortune-aglaonema-plant-with-pot_4.webp",
        "/Images/plants/pink-pot/pink-fortune-aglaonema-plant-with-pot_1.webp",
      ],
      link: "/pink-fortune-aglaonema-plant-with-pot",
      title: "Pink Fortune Aglaonema Plant with Pot",
      price: "1249",
      delivery: "Tomorrow",
    },
    {
      image: [
        "/Images/plants/good-vibes-plant-cake/good-vibes-plant-n-cake-combo_1.webp",
        "/Images/plants/good-vibes-plant-cake/good-vibes-plant-n-cake-combo_2.webp",
        "/Images/plants/good-vibes-plant-cake/good-vibes-plant-n-cake-combo_3.webp",
        "/Images/plants/good-vibes-plant-cake/good-vibes-plant-n-cake-combo_4.webp",
        "/Images/plants/good-vibes-plant-cake/good-vibes-plant-n-cake-combo_6.webp",
      ],
      link: "/good-vibes-plant-n-cake-combo",
      title: "Good Vibes Plant & Cake Combo",
      rate: "4.8",
      price: "1099",
      review: "28 reviews",
      delivery: "Today",
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
        <h4 className="text-gray-500">Plants Online</h4>
      </div>

      <div className="lg:flex gap-8">
        <div className="bg-white py-4 w-full lg:w-[30%]">
          <div className="sticky top-36">
            <h4 className="border-b border-b-gray-300 font-semibold px-4 pb-2 text-lg">
              Filters
            </h4>
            <div className="px-4 py-2">
              <div className="flex justify-between py-2">
                <h4 className="font-semibold">Price</h4>
                {show.price == "price" ? (
                  <FiMinus onClick={() => handleChange("price")} />
                ) : (
                  <HiOutlinePlusSm onClick={() => handleChange("price")} />
                )}
              </div>
              {show.price && (
                <div>
                  {price.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mb-2">
                      <input type="checkbox" />
                      <span className="text-slate-500 flex items-center tracking-wide ">
                        {item.range} ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
        <div className="w-full space-y-6">
          <div className="bg-white p-3 md:p-4 mt-6 lg:mt-0">
            <div className="md:flex gap-5 md:items-center md:gap-10 pb-4 md:pb-2">
              <div className="flex gap-5">
                <h2 className="font-semibold text-lg lg:text-xl">
                  Online Plants Nursery

                </h2>
                <div className="font-semibold rounded-br-[64px] rounded-tl-[64px] rounded-bl-[64px] flex items-center text-white bg-green-800 px-1 rounded-sm">
                  <span>4.3</span>
                  <RiStarHalfSFill />
                </div>
              </div>
              <div className="flex gap-5 text-base md:text-[17px]">
                <h4 className="text-blue-500 font-normal ">65784 Reviews</h4>
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
          <div className="md:p-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
