"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiStarHalfSFill } from "react-icons/ri";
import Image from "next/image";
import { data } from "@/app/components/common/Personalise";
import { price } from "@/app/components/common/Personalise";
import { heading } from "@/app/components/common/Personalise";
import { giftType } from "@/app/components/common/Personalise";
import { personalise } from "@/app/components/common/Personalise";
import { delivery } from "@/app/components/common/Personalise";



function Personalise({ slug }) {
  const [show, setShow] = useState({
    price: 'price',
    giftType: 'giftType',
    personalise: 'personalise',
    delivery:'delivery'


  });

  const priceData = price.find((item) => item.category === slug)?.data || [];
  const giftTypeData = giftType.find((item) => item.category === slug)?.data || [];
  const personaliseData = personalise.find((item) => item.category === slug)?.data || [];
    const timeData = delivery.find((item) => item.category === slug)?.data || [];
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
      {heading[slug]?.title &&
        <div className="flex items-center pb-10">
          <Link href="/">Home</Link>
          <MdKeyboardArrowRight />
          <h4 className="text-gray-500">{heading[slug]?.title}</h4>
        </div>
      }



      <div className="lg:flex gap-6 ">
        {(priceData.length > 0 || giftTypeData.length > 0 || personaliseData.length > 0 ||timeData.length > 0) && (
          <div className="bg-white py-4 w-full lg:w-[30%] ">
            <div className="sticky top-32 z-10">
              <h4 className="border-b border-b-gray-300 font-semibold px-4 pb-2 text-lg">
                Filters
              </h4>

              {priceData.length > 0 && (
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
                      {priceData.map((item, index) => (
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

              {giftTypeData.length > 0 && (
                <div className="px-4 py-2 border-b border-b-gray-300">
                  <div className="flex justify-between py-2">
                    <h4 className="font-semibold">Gift Type</h4>
                    {show.type === "type" ? (
                      <FiMinus onClick={() => handleChange("type")} />
                    ) : (
                      <HiOutlinePlusSm onClick={() => handleChange("type")} />
                    )}
                  </div>
                  {show.type && (
                    <div>
                      {giftTypeData?.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 mb-2">
                          <input type="checkbox" />
                          <span className="text-slate-500 flex items-center tracking-wide ">
                            <span className="capitalize">{item.category}</span> ({item.count})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {personaliseData.length > 0 && (
                <div className="px-4 py-2 border-b border-b-gray-300">
                  <div className="flex justify-between py-2">
                    <h4 className="font-semibold">Personalise It</h4>
                    {show.personalise === "personalise" ? (
                      <FiMinus onClick={() => handleChange("personalise")} />
                    ) : (
                      <HiOutlinePlusSm onClick={() => handleChange("personalise")} />
                    )}
                  </div>
                  {show.personalise && (
                    <div>
                      {personaliseData?.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 mb-2">
                          <input type="checkbox" />
                          <span className="text-slate-500 flex items-center tracking-wide ">
                            <span className="capitalize">{item.title}</span> ({item.total})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {timeData.length > 0 && (
                <div className="px-4 py-2 border-b border-b-gray-300">
                  <div className="flex justify-between py-2">
                    <h4 className="font-semibold">Delivery Time</h4>
                    {show.delivery === "delivery" ? (
                      <FiMinus onClick={() => handleChange("delivery")} />
                    ) : (
                      <HiOutlinePlusSm onClick={() => handleChange("delivery")} />
                    )}
                  </div>
                  {show.delivery && (
                    <div>
                      {timeData?.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 mb-2">
                          <input type="checkbox" />
                          <span className="text-slate-500 flex items-center tracking-wide ">
                            <span className="capitalize">{item.title}</span> ({item.total})
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
          {heading[slug] &&
            <div className="bg-white p-4 mt-4 md:mt-6 lg:mt-0">
              <div className="flex gap-5 md:gap-10 pb-2">
                <div className="flex gap-5">
                  <h2 className="font-semibold text-lg lg:text-xl">
                    {heading[slug]?.title}
                  </h2>
                  {heading[slug]?.rate &&
                    <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
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
          }
          <div className="lg:p-4 ">
            {data[slug]?.length > 0 ? (
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${categoryData.length <= 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
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
            ) : (
              <div className="flex items-center justify-center h-64">
                <h3 className="text-xl font-semibold text-gray-600">No Products Found</h3>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Personalise;
