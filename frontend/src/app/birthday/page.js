"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

function page() {
  const [show, setShow] = useState({
    price:"price",
    gift:"gift",
    personalise:"personalise",
    delivery:"delivery"
  });

  const price = [
    { min: 0, max: 499, total: 540 },
    { min: 500, max: 999, total: 1040 },
    { min: 1000, max: 1499, total: 600 },
    { min: 1500, max: 1999, total: 252 },
    { min: 2000, max: 2499, total: 137 },
    { min: 2500, max: 2999, total: 61 },
    { min: 3000, max: "ABOVE", total: 113 },
  ];

  const gifttype = [
    {
      title: "Others",
      max: 333,
    },
    {
      title: "Cakes",
      max: 290,
    },
    {
      title: "Jewellery Sets",
      max: 193,
    },
    {
      title: "Accessories",
      max: 158,
    },
    {
      title: "Handbags",
      max: 143,
    },
    {
      title: "Home Decor",
      max: 116,
    },
    {
      title: "Toy-N-Game",
      max: 110,
    },
    {
      title: "Mugs",
      max: 108,
    },
    {
      title: "Plants",
      max: 106,
    },
  ];

  const personalise = [
    {
      title: "No",
      total: 505,
    },
    {
      title: "Yes",
      total: 468,
    },
  ];

  const delivery = [
    {
      title: "Later",
      total: 1887,
    },
    {
      title: "Later",
      total: 1887,
    },
  ];

  const handleChange = (auth) => {
    setShow({...show,[auth]:show[auth]?"":auth}); 
  };

  return (
    <div className="px-5 md:px-12 py-10 bg-slate-100">
      <div className="flex items-center pb-10">
        <Link href="/">Home</Link>
        <MdKeyboardArrowRight />
        <h4 className="text-gray-500">Birthday Gifts Online</h4>
      </div>

      <div className="flex items-center gap-5">
        <div className="bg-white py-4 w-[20%] h-auto">
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
                      <BsCurrencyRupee />
                      {item.min} To{" "}
                      {item.max !== "ABOVE" && <BsCurrencyRupee />}
                      {item.max} ({item.total})
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="px-4 py-2 border-b border-b-gray-300">
            <div className="flex justify-between py-2">
              <h4 className="font-semibold">Gift Type</h4>
              {show.gift == "gift" ? (
                <FiMinus onClick={() => handleChange("gift")} />
              ) : (
                <HiOutlinePlusSm onClick={() => handleChange("gift")} />
              )}
            </div>
            {show.gift && (
              <div>
                {gifttype.map((item, index) => (
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

          <div className="px-4 py-2 border-b border-b-gray-300">
            <div className="flex justify-between py-2">
              <h4 className="font-semibold">Personalise It</h4>
              {show.personalise == "personalise" ? (
                <FiMinus onClick={() => handleChange("personalise")} />
              ) : (
                <HiOutlinePlusSm onClick={() => handleChange("personalise")} />
              )}
            </div>
            {show.personalise && (
              <div>
                {personalise.map((item, index) => (
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

          <div className="px-4 py-2 ">
            <div className="flex justify-between py-2">
              <h4 className="font-semibold">Delivery Time</h4>
              {show.delivery == "delivery" ? (
                <FiMinus onClick={() => handleChange("delivery")} />
              ) : (
                <HiOutlinePlusSm onClick={() => handleChange("delivery")} />
              )}
            </div>
            {show.delivery && (
              <div>
                {delivery.map((item, index) => (
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
        </div>
      </div>
    </div>
  );
}

export default page;
