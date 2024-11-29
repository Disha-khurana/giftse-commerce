"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdStar } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiStarHalfSFill } from "react-icons/ri";
import Image from "next/image";
import { MdRecommend } from "react-icons/md";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdArrowRoundDown } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";

function page() {
  const [show, setShow] = useState({
    price: "price",
    cake: "cake",
    category: "category",
    options: "options",
    shape: "shape",
    weight: "weight",
  });

  const price = [
    { range: "₹ 0 TO ₹ 499", count: 10 },
    { range: "₹ 500 TO ₹ 999", count: 255 },
    { range: "₹ 1000 TO ₹ 1499", count: 64 },
    { range: "₹ 1500 TO ₹ 1999", count: 11 },
    { range: "₹ 2000 TO ₹ 2499", count: 1 }
  ];

  const cakeFlavors = [
    { flavor: "chocolate", count: 114 },
    { flavor: "truffle", count: 40 },
    { flavor: "pineapple", count: 33 },
    { flavor: "vanilla", count: 26 },
    { flavor: "blackforest", count: 25 },
    { flavor: "butterscotch", count: 25 },
    { flavor: "red velvet", count: 15 },
    { flavor: "others", count: 9 },
    { flavor: "blueberry", count: 3 },
    { flavor: "mixfruit", count: 2 }
  ]

  const cakeCategories = [
    { type: "cream cakes", count: 256 },
    { type: "fondant cakes", count: 15 },
    { type: "photo cakes", count: 15 },
    { type: "designer cakes", count: 9 },
    { type: "dry cakes", count: 7 }
  ];

  const cakeOptions = [
    { type: "with egg", count: 295 },
    { type: "eggless", count: 40 }
  ];

  const cakeShapes = [
    { shape: "round", count: 251 },
    { shape: "heart", count: 26 },
    { shape: "others", count: 11 },
    { shape: "square", count: 11 }
  ];

  const cakeWeights = [
    { weight: "1/2 kg", count: 263 },
    { weight: "1 kg", count: 23 },
    { weight: "1.5 kg", count: 4 }
  ];





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
      rate: "5",
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
      rate: "5",
      price: "725",
      review: "273 reviews",
      delivery: "Today",
    },

    {
      id: 8,
      image: [
        "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_1.webp",
        "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_2.webp",
        "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_3.webp",
        "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_4.webp",
        "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_1.webp",
      ],
      link: "/birthday-bliss-vanilla-dream-cake-half-kg",
      title: "Birthday Bliss Vanilla Dream Cake- Half Kg",
      price: "649",
      delivery: "Tomorrow",
    },


    {
      id: 10,
      image: [
        "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_1.webp",
        "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_2.webp",
        "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_3.webp",
        "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_4.webp",
        "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_1.webp",
      ],
      link: "/dates-walnuts-mixed-dry-cake-500gms",
      title: "Dates & Walnuts Mixed Dry Cake 500gms",
      rate: "5",
      price: "999",
      review: "273 reviews",
      delivery: "Today",
    },

    {
      id: 17,
      image: [
        "/Images/birthday/rocher/rocher-choco-bouquet_1.webp",
        "/Images/birthday/rocher/rocher-choco-bouquet_2.webp",
        "/Images/birthday/rocher/rocher-choco-bouquet_3.webp",
        "/Images/birthday/rocher/rocher-choco-bouquet_4.webp",
        "/Images/birthday/rocher/rocher-choco-bouquet_1.webp",
      ],
      link: "/rocher-choco-bouquet",
      title: "Rocher Choco Bouquet",
      rate: "4.8",
      price: "1899",
    },


    {
      id: 20,
      image: [
        "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_2.webp",
        "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_3.webp",
        "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_4.webp",
        "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_5.webp",
        "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_6.webp",
      ],
      link: "/chocolate-truffle-cream-cake-half-kg",
      title: "Chocolate Truffle Cream Cake Half Kg",
      rate: "4.5",
      price: "575",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      image: [
        "/Images/birthday/red-velvet/red-velvet-bento-cake_1.webp",
        "/Images/birthday/red-velvet/red-velvet-bento-cake_2.webp",
        "/Images/birthday/red-velvet/red-velvet-bento-cake_3.webp",
        "/Images/birthday/red-velvet/red-velvet-bento-cake_4.webp",
        "/Images/birthday/red-velvet/red-velvet-bento-cake_5.webp",

      ],
      link: "/red-velvet-bento-cake",
      title: "Red Velvet Bento Cake 250 Gram",
      rate: "4.8",
      price: "449",
      review: "161 reviews",
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
      <div className="flex items-center pb-10">
        <Link href="/">Home</Link>
        <MdKeyboardArrowRight />
        <h4 className="text-gray-500">All Cakes</h4>
      </div>

      <div className="lg:flex gap-8">
        <div className="bg-white py-4 w-full lg:w-[30%]">
          <div className="sticky top-36">
            <h4 className="border-b border-b-gray-300 font-semibold px-4 pb-2 text-lg">
              Filters
            </h4>
            <div className="px-4 py-2 border-b border-b-gray-300">
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

            <div className="px-4 py-2 border-b border-b-gray-300">
              <div className="flex justify-between py-2">
                <h4 className="font-semibold">Flavour</h4>
                {show.cake === "cake" ? (
                  <FiMinus onClick={() => handleChange("cake")} />
                ) : (
                  <HiOutlinePlusSm onClick={() => handleChange("cake")} />
                )}
              </div>
              {show.cake && (
                <div>
                  {cakeFlavors.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mb-2">
                      <input type="checkbox" />
                      <span className="text-slate-500 flex items-center tracking-wide ">
                        {item.flavor} ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2 border-b border-b-gray-300">
              <div className="flex justify-between py-2">
                <h4 className="font-semibold">Cake Type</h4>
                {show.category === "category" ? (
                  <FiMinus onClick={() => handleChange("category")} />
                ) : (
                  <HiOutlinePlusSm onClick={() => handleChange("category")} />
                )}
              </div>
              {show.category && (
                <div>
                  {cakeCategories.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mb-2">
                      <input type="checkbox" />
                      <span className="text-slate-500 flex items-center tracking-wide ">
                        {item.type} ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2 border-b border-b-gray-300">
              <div className="flex justify-between py-2">
                <h4 className="font-semibold">Ingredients</h4>
                {show.options === "options" ? (
                  <FiMinus onClick={() => handleChange("options")} />
                ) : (
                  <HiOutlinePlusSm onClick={() => handleChange("options")} />
                )}
              </div>
              {show.options && (
                <div>
                  {cakeOptions.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mb-2">
                      <input type="checkbox" />
                      <span className="text-slate-500 flex items-center tracking-wide ">
                        {item.type} ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2 border-b border-b-gray-300">
              <div className="flex justify-between py-2">
                <h4 className="font-semibold">Shape</h4>
                {show.shape === "shape" ? (
                  <FiMinus onClick={() => handleChange("shape")} />
                ) : (
                  <HiOutlinePlusSm onClick={() => handleChange("shape")} />
                )}
              </div>
              {show.shape && (
                <div>
                  {cakeShapes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mb-2">
                      <input type="checkbox" />
                      <span className="text-slate-500 flex items-center tracking-wide ">
                        {item.shape} ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2 ">
              <div className="flex justify-between py-2">
                <h4 className="font-semibold">Weight</h4>
                {show.weight === "weight" ? (
                  <FiMinus onClick={() => handleChange("weight")} />
                ) : (
                  <HiOutlinePlusSm onClick={() => handleChange("weight")} />
                )}
              </div>
              {show.weight && (
                <div>
                  {cakeWeights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mb-2">
                      <input type="checkbox" />
                      <span className="text-slate-500 flex items-center tracking-wide ">
                        {item.weight} ({item.count})
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
            <div className="md:flex gap-10 pb-4 md:pb-2 md:items-center">
              <div className="flex gap-5">
                <h2 className="font-semibold text-lg lg:text-xl">
                  Cakes for Every Taste
                </h2>

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
