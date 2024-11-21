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
      id: 1,
      image: [
        "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_1.webp",
        "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_2.webp",
        "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_3.webp",
        "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_4.webp",
        "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_5.webp",
      ],
      link: "/decorated-chocolate-truffle-cake-half-kg",
      title: "Decorated Chocolate Truffle Cake Half Kg",
      rate: "4.5",
      price: "575",
      review: "73 reviews",
      delivery: "Today",
    },
    {
      id: 2,
      image: [
        "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_1.webp",
        "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_2.webp",
        "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_3.webp",
        "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_4.webp",
        "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_5.webp",
      ],
      link: "/fruit-overload-cake-half-kg",
      title: "Overload Fruit Cake Half Kg",
      rate: "5.0",
      price: "725",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 3,
      image: [
        "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_1.webp",
        "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_2.webp",
        "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_3.webp",
        "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_4.webp",
        "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_5.webp",
      ],
      link: "/fudge-brownie-cake-half-kg",
      title: "Fudge Brownie Cake Half Kg",
      rate: "4.5",
      price: "675",
      review: "273 reviews",
      delivery: "Today",
    },
    {
        image: [
          "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_1.webp",
          "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_2.webp",
          "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_3.webp",
          "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_4.webp",
          "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_5.webp",    
        ],
        link: "/anniversary-special-chocolate-cake-half-kg",
        title: "Anniversary Special Chocolate Cake- Half Kg",
        rate: "4.9",
        price: "725",
        review: "28 reviews",
        delivery: "Today",
      },
    {
      id: 4,
      image: [
        "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_1.webp",
        "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_2.webp",
        "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_3.webp",
        "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_4.webp",
        "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_5.webp",
      ],
      link: "/love-for-pastel-carnations-bouquet",
      title: "Love For Pastel Carnations Bouquet",
      rate: "4.8",
      price: "949",
      review: "92 reviews",
      delivery: "Today",
    },
    {
        image: [
          "/Images/anniversary/gift-box/personalised-champange-couple-gift-box_1.webp",
          "/Images/anniversary/gift-box/personalised-champange-couple-gift-box_2.webp",
          "/Images/anniversary/gift-box/personalised-champange-couple-gift-box_3.webp",
          "/Images/anniversary/gift-box/personalised-champange-couple-gift-box_4.webp",
          "/Images/anniversary/gift-box/personalised-champange-couple-gift-box_1.webp",  
        ],
        link: "/personalised-champange-couple-gift-box",
        title: "Personalised Champange Couple Gift Box",
        rate: "5.0",
        price: "1699",
        review: "1 reviews",
        delivery: "Tomorrow",
      },
    {
      id: 6,
      image: [
        "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_1.webp",
        "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_2.webp",
        "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_3.webp",
        "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_4.webp",
        "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_2.webp",
      ],
      link: "/rich-coffee-cream-cake-half-kg",
      title: "Rich Coffee Cream Cake Half Kg",
      rate: "5.0",
      price: "725",
      review: "273 reviews",
      delivery: "Today",
    },

    {
      id:13,
      image: [
        "/Images/birthday/gerbera blossom/mixed-brilliance-gerbera-blossoms_1.webp",
        "/Images/birthday/gerbera blossom/mixed-brilliance-gerbera-blossoms_2.webp",
        "/Images/birthday/gerbera blossom/mixed-brilliance-gerbera-blossoms_3.webp",
        "/Images/birthday/gerbera blossom/mixed-brilliance-gerbera-blossoms_4.webp",
        "/Images/birthday/gerbera blossom/mixed-brilliance-gerbera-blossoms_5.webp",
      ],
      link: "/mixed-brilliance-gerbera-blossoms",
      title: "Special 8 Mixed Roses Bouquet",
      rate: "4.3",
      price: "549",
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
        <h4 className="text-gray-500">Anniversary All Gifts</h4>
      </div>

      <div className="flex gap-8">
    
        <div className="w-full space-y-6">
          <div className="bg-white p-4">
            <div className="md:flex gap-10 pb-2">
              <div className="flex gap-5 mb-3 md:mb-0">
                <h2 className="font-semibold text-lg lg:text-xl">
                Anniversary All Gifts
                </h2>
                <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
                  <span>4.8</span>
                  <RiStarHalfSFill />
                </div>
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
                  <Link href={`/gift${item.link}`} className="space-y-2">
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
