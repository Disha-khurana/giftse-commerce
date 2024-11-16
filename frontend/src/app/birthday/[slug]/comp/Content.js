"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiStarHalfSFill } from "react-icons/ri";
import Image from "next/image";
import {  data } from "@/app/components/common/Data";
import { price } from "@/app/components/common/Data";
import { heading } from "@/app/components/common/Data";
import { flowerArrangements } from "@/app/components/common/Data";
import { flowerColors } from "@/app/components/common/Data";
import { flowertype } from "@/app/components/common/Data";
import { cakeFlavors } from "@/app/components/common/Data";
import { cakeCategories } from "@/app/components/common/Data";
import { cakeShapes } from "@/app/components/common/Data";
import { cakeOptions } from "@/app/components/common/Data";
import { cakeWeights } from "@/app/components/common/Data";

function Content({ slug }) {
  const [show, setShow] = useState({
    price: "price",
    flower: "flower",
    cake: "cake",
    arrangements: "arrangements",
    colors: "colors",
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

  const category = slug;
  const categoryData = price?.find(item => item.category === category)?.data || [];

  return (
    <div className="px-5 md:px-12 py-10 bg-slate-100">
      <div className="flex items-center pb-10">
        <Link href="/">Home</Link>
        <MdKeyboardArrowRight />
        <h4 className="text-gray-500">{heading[slug]?.title}</h4>
      </div>

      <div className="lg:flex gap-6 ">
      {(price[slug] || cakeFlavors[slug] || cakeCategories[slug] || cakeOptions[slug] || cakeShapes[slug] || cakeWeights[slug] || flowertype[slug] || flowerArrangements[slug] || flowerColors[slug]) && (
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
                    {item.range} ({item.total})
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
                    {item.category} ({item.count})
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

      {flowertype[slug] && (
        <div className="px-4 py-2 border-b border-b-gray-300">
          <div className="flex justify-between py-2">
            <h4 className="font-semibold">Flower Type</h4>
            {show.flower === "flower" ? (
              <FiMinus onClick={() => handleChange("flower")} />
            ) : (
              <HiOutlinePlusSm onClick={() => handleChange("flower")} />
            )}
          </div>
          {show.flower && (
            <div>
              {flowertype[slug]?.map((item, index) => (
                <div key={index} className="flex items-center gap-3 mb-2">
                  <input type="checkbox" />
                  <span className="text-slate-500 flex items-center tracking-wide ">
                    {item.title} ({item.max})
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {flowerArrangements[slug] && (
        <div className="px-4 py-2 border-b border-b-gray-300">
          <div className="flex justify-between py-2">
            <h4 className="font-semibold">Arrangements</h4>
            {show.arrangements === "arrangements" ? (
              <FiMinus onClick={() => handleChange("arrangements")} />
            ) : (
              <HiOutlinePlusSm onClick={() => handleChange("arrangements")} />
            )}
          </div>
          {show.arrangements && (
            <div>
              {flowerArrangements[slug]?.map((item, index) => (
                <div key={index} className="flex items-center gap-3 mb-2">
                  <input type="checkbox" />
                  <span className="text-slate-500 flex items-center tracking-wide ">
                    {item.title} ({item.total})
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {flowerColors[slug] && (
        <div className="px-4 py-2 ">
          <div className="flex justify-between py-2">
            <h4 className="font-semibold">Color</h4>
            {show.colors === "colors" ? (
              <FiMinus onClick={() => handleChange("colors")} />
            ) : (
              <HiOutlinePlusSm onClick={() => handleChange("colors")} />
            )}
          </div>
          {show.colors && (
            <div>
              {flowerColors[slug]?.map((item, index) => (
                <div key={index} className="flex items-center gap-3 mb-2">
                  <input type="checkbox" />
                  <span className="text-slate-500 flex items-center tracking-wide ">
                    {item.color} ({item.total})
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
            <div className="flex gap-5 md:gap-10 pb-2">
              <div className="flex gap-5">
                <h2 className="font-semibold text-lg lg:text-xl">
                  {heading[slug]?.title}
                </h2>
                <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
                  <span>{heading[slug]?.rate}</span>
                  <RiStarHalfSFill />
                </div>
              </div>
              <div className="flex gap-2 md:gap-5 text-sm md:text-[17px]">
                <h4 className="text-blue-500 font-normal ">65784 Reviews</h4>
                <span className="text-gray-600 ">| 30 of 100 flowers</span>
              </div>
            </div>
            <div className="flex gap-2 md:gap-7 ">
              <h3 className="font-normal text-sm md:text-[17px]">Sort By:</h3>
              <ul className="flex gap-2 md:gap-7 text-sm md:text-[17px] text-gray-600">
                <li>Recommended</li>
                <li>New</li>
                <li>Price:Low to High</li>
                <li>Price:High to Low</li>
              </ul>
            </div>
          </div>
          <div className="lg:p-4 ">
            <div className={`grid grid-cols-1 md:grid-cols-2  ${categoryData.length <= 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`} >
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

                    <div className="group-hover:-translate-y-7 translate-y-0 duration-500 bg-white p-2 space-y-2">
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
                        {item.review ? (
                          <span className="text-gray-500">{item.review}</span>
                        ) : (
                          ""
                        )}
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

export default Content;
