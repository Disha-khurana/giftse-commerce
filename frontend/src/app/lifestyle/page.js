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
    gift: "gift",
    personalise: "personalise",
    delivery: "delivery",
  });

  const price = [
    { range: "₹ 0 TO ₹ 499", total: 66 },
  { range: "₹ 500 TO ₹ 999", total: 275 },
  { range: "₹ 1000 TO ₹ 1499", total: 308 },
  { range: "₹ 1500 TO ₹ 1999", total: 198 },
  { range: "₹ 2000 TO ₹ 2499", total: 100 },
  { range: "₹ 2500 TO ₹ 2999", total: 80 },
  { range: "₹ 3000 AND ABOVE", total: 104 },
  ];

  const gifttype = [
    { category: "grooming hampers", total: 225 },
  { category: "accessories", total: 194 },
  { category: "jewellery sets", total: 191 },
  { category: "bags", total: 157 },
  { category: "others", total: 117 },
  { category: "handbags", total: 87 },
  { category: "earrings", total: 73 },
  { category: "necklaces & pendants", total: 73 },
  { category: "perfumes", total: 63 },
  { category: "bracelets", total: 41 },
  { category: "wallets", total: 38 },
  { category: "apparels", total: 29 },
  { category: "baby gift", total: 25 },
  { category: "rings", total: 25 },
  { category: "fashion", total: 19 },
  { category: "beauty gifts", total: 16 },
  { category: "anklets", total: 5 },
  { category: "cosmetics n spa", total: 5 },
  { category: "grooming gifts", total: 5 },
  { category: "hampers n combos", total: 5 },
  { category: "watches", total: 4 },
  { category: "bangles", total: 2 },
  { category: "diyas & candles", total: 1 },
  { category: "gadgets", total: 1 },
  { category: "stationery", total: 1 },
  ];

  const personalise = [
    {
      title: "No",
      total: 559,
    },
    {
      title: "Yes",
      total: 137,
    },
  ];

  const delivery = [
    {
      title: "Later",
      total: 1103,
    },

  ];

  const data=[
    {
        id: 1,
        image: [
          "/Images/lifestyle/necklace/personalised-crown-underlined-heart-name-necklace_1.webp",
          "/Images/lifestyle/necklace/personalised-crown-underlined-heart-name-necklace_2.webp",
          "/Images/lifestyle/necklace/personalised-crown-underlined-heart-name-necklace_3.webp",
          "/Images/lifestyle/necklace/personalised-crown-underlined-heart-name-necklace_4.webp",
          "/Images/lifestyle/necklace/personalised-crown-underlined-heart-name-necklace_5.webp",
     
        ],
        link: "/personalised-crown-underlined-heart-name-necklace",
        title: "Personalised Crown Underlined Heart Name Necklace",
        rate: "4.8",
        price: "599",
        review: "23 reviews",
        delivery: "Today",
      },
      {
        id: 1,
        image: [
          "/Images/lifestyle/diamond/estele-american-diamond-pendant-necklace-set_1.webp",
          "/Images/lifestyle/diamond/estele-american-diamond-pendant-necklace-set_2.webp",
          "/Images/lifestyle/diamond/estele-american-diamond-pendant-necklace-set_3.webp",
          "/Images/lifestyle/diamond/estele-american-diamond-pendant-necklace-set_4.webp",
          "/Images/lifestyle/diamond/estele-american-diamond-pendant-necklace-set_8.webp",
         
     
        ],
        link: "/estele-american-diamond-pendant-necklace-set",
        title: "Estele American Diamond Pendant Necklace Set",
        rate: "5.0",
        price: "3199",
        review: "2 reviews",
        delivery: "Today",
      },
      {
        id: 1,
        image: [
          "/Images/lifestyle/luxury/kimirica-love-story-experience-luxury-bath-n-body-care-gift-box_1.webp",
          "/Images/lifestyle/luxury/kimirica-love-story-experience-luxury-bath-n-body-care-gift-box_2.webp",
          "/Images/lifestyle/luxury/kimirica-love-story-experience-luxury-bath-n-body-care-gift-box_3.webp",
          "/Images/lifestyle/luxury/kimirica-love-story-experience-luxury-bath-n-body-care-gift-box_4.webp",
          "/Images/lifestyle/luxury/kimirica-love-story-experience-luxury-bath-n-body-care-gift-box_5.webp",        
     
        ],
        link: "/kimirica-love-story-experience-luxury-bath-n-body-care-gift-box",
        title: "Kimirica Love Story Experience Luxury Bath N Body Care Gift Box",
        rate: "4.9",
        price: "1449",
        review: "10 reviews",
        delivery: "Today",
      },
      {
        id: 1,
        image: [
          "/Images/lifestyle/heart-pendant/heart-pendant-for-love_1.webp",
          "/Images/lifestyle/heart-pendant/heart-pendant-for-love_1.webp",
          "/Images/lifestyle/heart-pendant/heart-pendant-for-love_1.webp",
          "/Images/lifestyle/heart-pendant/heart-pendant-for-love_1.webp",
          "/Images/lifestyle/heart-pendant/heart-pendant-for-love_1.webp",
     
        ],
        link: "/heart-pendant-for-love",
        title: "Zircon Heart Magnetic Clover Pendant",
        price: "449",
        delivery: "Today",
      },
      {
        id: 1,
        image: [
          "/Images/lifestyle/set/charming-whiffs-fragrance-set-for-her_1.webp",
            "/Images/lifestyle/set/charming-whiffs-fragrance-set-for-her_2.webp",
            "/Images/lifestyle/set/charming-whiffs-fragrance-set-for-her_3.webp",
            "/Images/lifestyle/set/charming-whiffs-fragrance-set-for-her_4.webp",
            "/Images/lifestyle/set/charming-whiffs-fragrance-set-for-her_5.webp",
     
        ],
        link: "/charming-whiffs-fragrance-set-for-her",
        title: "Charming Whiffs Fragrance Set for Her",
        price: "5999",
        delivery: "Tomorrow",
      },
      {
        id: 1,
        image: [
          "/Images/lifestyle/perfume-n-jewel-temptations-gift-box_1.webp",
            "/Images/lifestyle/perfume-n-jewel-temptations-gift-box_1.webp",
            "/Images/lifestyle/perfume-n-jewel-temptations-gift-box_1.webp",
            "/Images/lifestyle/perfume-n-jewel-temptations-gift-box_1.webp",
            "/Images/lifestyle/perfume-n-jewel-temptations-gift-box_1.webp",
     
        ],
        link: "/perfume-n-jewel-temptations-gift-box",
        title: "Perfume & Jewel Temptations Gift Box",
        price: "899",
        delivery: "Tomorrow",
      },
  ]
  
  
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
        <h4 className="text-gray-500">Fashion N Lifestyle Gifts</h4>
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
                        {item.range} ({item.total})
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
                        <span className="capitalize">{item.category}</span> ({item.total})
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
                  <HiOutlinePlusSm
                    onClick={() => handleChange("personalise")}
                  />
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
        <div className="w-full space-y-6">
          <div className="bg-white p-3 md:p-4 mt-6 lg:mt-0">
            <div className="md:flex gap-10 pb-4 md:pb-2">
              <div className="flex gap-5">
                <h2 className="font-semibold text-lg lg:text-xl">
                Fashion N Lifestyle Gifts
                </h2>
                
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
