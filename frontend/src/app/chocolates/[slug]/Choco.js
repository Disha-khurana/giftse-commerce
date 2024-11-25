"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiStarHalfSFill } from "react-icons/ri";
import Image from "next/image";
import { data, heading, price } from "@/app/components/common/ChocolateData";

function Choco({ slug }) {
  console.log(slug);
  const [show, setShow] = useState({
    price: "price",
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


  const category = slug; // or "best-sellers"
const categoryData = price?.find(item => item.category === category)?.data || [];
console.log(categoryData,'hghgjhjgjgy');

  return (
    <div className="px-5 md:px-12 py-10 bg-slate-100">
      <div className="flex items-center pb-5">
        <Link href="/">Home</Link>
        <MdKeyboardArrowRight />
        <h4 className="text-gray-500">{heading[slug]?.title}</h4>
      </div>

      <div className="lg:flex gap-8">

        {categoryData.length <= 0 ? ''
        :  (
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
                      {categoryData?.map((item, index) => (
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
          ) }
        <div className="w-full space-y-6">
          <div className="bg-white p-3 md:p-4 mt-6 lg:mt-0">
            <div className="md:flex gap-10 pb-4 md:pb-2">
              <div className="flex gap-5">
                <h2 className="font-semibold text-lg lg:text-xl">
                  {heading[slug]?.title}
                </h2>
                {heading[slug]?.rate && (
                  <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
                    <span>{heading[slug]?.rate}</span>
                    <RiStarHalfSFill />
                  </div>
                )}
              </div>
              <div className="flex gap-5 text-base md:text-[17px]">
                <h4 className="text-blue-500 font-normal ">65784 Reviews</h4>
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
          <div className="md:p-4 ">
            <div className={`grid grid-cols-1 md:grid-cols-2  ${categoryData.length <= 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4`}>
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

export default Choco;
