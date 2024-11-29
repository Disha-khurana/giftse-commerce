"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdOutlineWatchLater, MdRecommend, MdStar } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiStarHalfSFill } from "react-icons/ri";
import Image from "next/image";
import { cakeCategories, cakeFlavors, cakeOptions, cakeShapes, cakeWeights, data, heading } from "@/app/components/common/Cake";
import { price } from "@/app/components/common/Cake";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";



function CakeNav({ slug }) {
  const [show, setShow] = useState({
    price: "price",
    cake: "cake",
    category: "category",
    options: "options",
    shape: "shape",
    weight: "weight",
  });

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
        <h4 className="text-gray-500">{heading[slug]?.title}</h4>
      </div>

      <div className="lg:flex gap-6 ">
        {(price[slug] || cakeFlavors[slug] || cakeCategories[slug] || cakeOptions[slug] || cakeShapes[slug] || cakeWeights[slug]) && (
          <div className="bg-white py-4 w-full lg:w-[30%] ">
            <div className="sticky top-32 z-10">
              <h4 className="border-b border-b-gray-300 font-semibold px-4 pb-2 text-lg">
                Filters
              </h4>

              {price[slug] && (
                <div className="px-4 py-2 border-b border-b-gray-300">
                  <div className="flex justify-between py-2">
                    <h4 className="font-semibold">Price</h4>
                    {show.price === "price" ? (
                      <FiMinus onClick={() => handleChange("price")} />
                    ) : (
                      <HiOutlinePlusSm onClick={() => handleChange("price")} />
                    )}
                  </div>
                  {show.price && (
                    <div>
                      {price[slug]?.map((item, index) => (
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
              )}

              {cakeFlavors[slug] && (
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
                      {cakeFlavors[slug]?.map((item, index) => (
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
              )}

              {cakeCategories[slug] && (
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
                      {cakeCategories[slug]?.map((item, index) => (
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
              )}

              {cakeOptions[slug] && (
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
                      {cakeOptions[slug]?.map((item, index) => (
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
              )}

              {cakeShapes[slug] && (
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
                      {cakeShapes[slug]?.map((item, index) => (
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
              )}

              {cakeWeights[slug] && (
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
                      {cakeWeights[slug]?.map((item, index) => (
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
              )}

            </div>
          </div>
        )}

        <div className="w-full space-y-6">
          <div className="bg-white p-4 mt-4 md:mt-6 lg:mt-0">
            <div className="md:flex gap-5 md:items-center md:gap-10 pb-2">
              <div className="flex gap-5">
                <h2 className="font-semibold text-lg lg:text-xl">
                  {heading[slug]?.title}
                </h2>
                {heading[slug].rate &&
                  <div className="font-semibold flex items-center text-white bg-green-800 rounded-br-[64px] rounded-tl-[64px] rounded-bl-[64px] px-1 rounded-sm">
                    <span>{heading[slug]?.rate}</span>
                    <RiStarHalfSFill />
                  </div>
                }
              </div>
              <div className="flex gap-2 md:gap-5 text-sm md:text-[17px]">
                <h4 className="text-blue-500 font-normal ">65784 Reviews</h4>
                <span className="text-gray-600 ">| 30 of 100 flowers</span>
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
          <div className="lg:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data[slug]?.map((item, index) => (
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

export default CakeNav;
