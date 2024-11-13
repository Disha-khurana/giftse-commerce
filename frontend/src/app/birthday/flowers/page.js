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
  const [show, setShow] = useState({
    price: "price",
    flower: "flower",
    arrangements: "arrangements",
    colors: "colors",
  });

  const price = [
    { range: "₹ 500 TO ₹ 999", total: 55 },
    { range: "₹ 1000 TO ₹ 1499", total: 42 },
    { range: "₹ 1500 TO ₹ 1999", total: 14 },
    { range: "₹ 2000 TO ₹ 2499", total: 5 },
    { range: "₹ 2500 TO ₹ 2999", total: 4 },
    { range: "₹ 3000 AND ABOVE", total: 1 },
  ];
  

  const flowertype = [
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
  const flowerArrangements = [
    { title: "Bouquet", total: 49 },
    { title: "Vase", total: 10 },
    { title: "Basket", total: 1 },
    { title: "Sleeves", total: 1 }
  ];
  

  const flowerColors = [
    { color: "Red", total: 20 },
    { color: "Others", total: 13 },
    { color: "Pink", total: 13 },
    { color: "White", total: 6 },
    { color: "Yellow", total: 5 },
    { color: "Purple", total: 4 }
  ];
  

  const data = [
   
  
   
   
   
    
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
      delivery: "Today",
    },
    {
      id:14,
      image: [
        "/Images/birthday/white roses/heavenly-6-white-roses-bunch_1.webp",
        "/Images/birthday/white roses/heavenly-6-white-roses-bunch_2.webp",
        "/Images/birthday/white roses/heavenly-6-white-roses-bunch_3.webp",
        "/Images/birthday/white roses/heavenly-6-white-roses-bunch_4.webp",
        "/Images/birthday/white roses/heavenly-6-white-roses-bunch_1.webp"
      ],
      link: "/heavenly-6-white-roses-bunch",
      title: "Heavenly 6 White Roses Bunch",
      rate: "4.3",
      price: "549",
      delivery: "Today",
    },
    {
      id:15,
      image: [
        "/Images/birthday/happy times carnation/happy-times-carnations-bouquet_1.webp",
        "/Images/birthday/happy times carnation/happy-times-carnations-bouquet_2.webp",
        "/Images/birthday/happy times carnation/happy-times-carnations-bouquet_3.webp",
        "/Images/birthday/happy times carnation/happy-times-carnations-bouquet_4.webp",
        "/Images/birthday/happy times carnation/happy-times-carnations-bouquet_5.webp",
      ],
      link: "/happy-times-carnations-bouquet",
      title: "Happy Times Carnations Flower Bouquet",
      rate: "4.9",
      price: "899",
      delivery: "Today",
    },
    {
      id:16,
      image: [
        "/Images/birthday/blushing rose/blushing-rose-love-elegance_1.webp",
       "/Images/birthday/blushing rose/blushing-rose-love-elegance_2.webp",
       "/Images/birthday/blushing rose/blushing-rose-love-elegance_3.webp",
       "/Images/birthday/blushing rose/blushing-rose-love-elegance_4.webp",
       "/Images/birthday/blushing rose/blushing-rose-love-elegance_5.webp",
      ],
      link: "/blushing-rose-love-elegance",
      title: "Blushing Rose Love Elegance",
      price: "1749",
      delivery: "Today",
    },
    {
      id:17,
      image: [
        "/Images/birthday/red rose/vivid-love-6-red-roses-bouquet_1.webp",
      "/Images/birthday/red rose/vivid-love-6-red-roses-bouquet_2.webp",
      "/Images/birthday/red rose/vivid-love-6-red-roses-bouquet_3.webp",
      "/Images/birthday/red rose/vivid-love-6-red-roses-bouquet_4.webp",
      "/Images/birthday/red rose/vivid-love-6-red-roses-bouquet_1.webp",
      ],
      link: "/vivid-love-6-red-roses-bouquet",
      title: "Vivid Love 6 Red Roses Bouquet",
      rate: "5.0",
      price: "549",
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
        <h4 className="text-gray-500">Birthday flowers </h4>
      </div>

      <div className="flex gap-8 ">
        <div className="bg-white py-4 w-[20%] ">
          <div className="sticky top-32 z-10">
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
                        {item.range} ({item.total})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2 border-b border-b-gray-300">
              <div className="flex justify-between py-2">
                <h4 className="font-semibold">Flower Type</h4>
                {show.flower == "flower" ? (
                  <FiMinus onClick={() => handleChange("flower")} />
                ) : (
                  <HiOutlinePlusSm onClick={() => handleChange("flower")} />
                )}
              </div>
              {show.flower && (
                <div>
                  {flowertype.map((item, index) => (
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
                <h4 className="font-semibold"> Arrangements</h4>
                {show.arrangements == "arrangements" ? (
                  <FiMinus onClick={() => handleChange("arrangements")} />
                ) : (
                  <HiOutlinePlusSm
                    onClick={() => handleChange("arrangements")}
                  />
                )}
              </div>
              {show.arrangements && (
                <div>
                  {flowerArrangements.map((item, index) => (
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
                <h4 className="font-semibold">Color</h4>
                {show.colors == "colors" ? (
                  <FiMinus onClick={() => handleChange("colors")} />
                ) : (
                  <HiOutlinePlusSm onClick={() => handleChange("colors")} />
                )}
              </div>
              {show.colors && (
                <div>
                  {flowerColors.map((item, index) => (
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
          </div>
        </div>
        <div className="w-[80%] space-y-6">
          <div className="bg-white p-4">
            <div className="flex gap-10 pb-2">
              <div className="flex gap-5">
                <h2 className="font-semibold text-lg">
                Happy Birthday Flowers

                </h2>
                <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
                  <span>4.3</span>
                  <RiStarHalfSFill />
                </div>
              </div>
              <div className="flex gap-5 text-[17px]">
                <h4 className="text-blue-500 font-normal ">65784 Reviews</h4>
                <span className="text-gray-600 ">| 30 of 100 flowers</span>
              </div>
            </div>
            <div className="flex gap-7 ">
              <h3 className="font-normal text-[17px]">Sort By:</h3>
              <ul className="flex gap-7 text-gray-600">
                <li>Recommended</li>
                <li>New</li>
                <li>Price:Low to High</li>
                <li>Price:High to Low</li>
              </ul>
            </div>
          </div>
          <div className="p-4 ">
            <div className="grid grid-cols-3 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-2"
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

                    <div className="hover:-translate-y-5 translate-y-0 duration-500 bg-white p-2 space-y-2">
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
