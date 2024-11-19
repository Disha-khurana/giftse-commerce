"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiStarHalfSFill } from "react-icons/ri";
import Image from "next/image";
import { heading } from "@/app/components/common/Anniversarydata";
import { data } from "@/app/components/common/Anniversarydata";

function page({ slug }) {


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

  return (
    <div className="px-5 md:px-12 py-10 bg-slate-100">
      <div className="flex items-center pb-5">
        <Link href="/">Home</Link>
        <MdKeyboardArrowRight />
        <h4 className="text-gray-500">{heading[slug]?.title}</h4>
      </div>

      <div className="flex gap-8">
        <div className="w-full space-y-6">
          <div className="bg-white p-4">
            <div className="md:flex gap-10 pb-2">
              <div className="flex gap-5 mb-3 md:mb-0">
                <h2 className="font-semibold text-lg lg:text-xl">
                  {heading[slug]?.title}
                </h2>
                {heading[slug].rate && (
                  <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
                    <span>{heading[slug]?.rate}</span>
                    <RiStarHalfSFill />
                  </div>
                )}
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

export default page;
