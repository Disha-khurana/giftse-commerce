"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiStarHalfSFill } from "react-icons/ri";
import Image from "next/image";

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

  const data=[{
    image:'/Images/birthday/decorated-chocolate-truffle-cake-half-kg_1.webp',
    link:"/decorated-chocolate-truffle-cake-half-kg_1",
    title:'Decorated Chocolate Truffle Cake Half Kg',
    rate:'4.5',
    price:'575'
  },
  {
    image:'/Images/birthday/fruit-overload-cake-half-kg_1.webp',
    link:"/fruit-overload-cake-half-kg_1",
    title:'Overload Fruit Cake Half Kg',
    rate:'5.0',
    price:'725'
  },
  {
    image:'/Images/birthday/fudge-brownie-cake-half-kg_1.webp',
    link:"/fudge-brownie-cake-half-kg_1",
    title:'Fudge Brownie Cake Half Kg',
    rate:'4.5',
    price:'675'
  },
  {
    image:'/Images/birthday/love-for-pastel-carnations-bouquet_1.webp',
    link:"/love-for-pastel-carnations-bouquet_1",
    title:'Love For Pastel Carnations Bouquet',
    rate:'4.8',
    price:'949'
  },
  {
    image:'/Images/birthday/personalised-desk-organisers_1.webp',
    link:"/personalised-desk-organisers_1",
    title:'Personalised Desk Organisers',
    rate:'4.5',
    price:'549'
  },
  {
    image:'/Images/birthday/rich-coffee-cream-cake-half-kg_1.webp',
    link:"/rich-coffee-cream-cake-half-kg_1",
    title:'Rich Coffee Cream Cake Half Kg',
    rate:'5.0',
    price:'725'
  },
  {
    image:'/Images/birthday/shimmering-heart-pendant_1.webp',
    link:"/shimmering-heart-pendant_1",
    title:'Shimmering Heart Pendant',
    rate:'4.5',
    price:'449'
  },
  {
    image:'/Images/birthday/birthday-bliss-vanilla-dream-cake-half-kg_1.webp',
    link:"/birthday-bliss-vanilla-dream-cake-half-kg_1",
    title:'Birthday Bliss Vanilla Dream Cake- Half Kg',
    rate:'5.0',
    price:'649'
  },
  {
    image:'/Images/birthday/birthday-celebration-mugs_1.webp',
    link:"/birthday-celebration-mugs_1",
    title:'Birthday Celebration Mug',
    rate:'4.5',
    price:'249'
  },
  {
    image:'/Images/birthday/dates-walnuts-mixed-dry-cake-500gms_1.webp',
    link:"/dates-walnuts-mixed-dry-cake-500gms_1",
    title:'Dates & Walnuts Mixed Dry Cake 500gms',
    rate:'5.0',
    price:'999'
  },
  {
    image:'/Images/birthday/feminine-fragrance-collection-for-her_1.webp',
    link:"/feminine-fragrance-collection-for-her_1",
    title:'Feminine Fragrance Collection for Her',
    rate:'4.5',
    price:'899'
  },
  {
    image:'/Images/birthday/jade-plant-in-gold-tone-metal-pot_1.webp',
    link:"/jade-plant-in-gold-tone-metal-pot_1",
    title:'Jade Plant In Gold Tone Metal Pot',
    rate:'4.8',
    price:'249'
  },
  {
    image:'/Images/birthday/mixed-brilliance-gerbera-blossoms_1.webp',
    link:"/mixed-brilliance-gerbera-blossoms_1",
    title:'Special 8 Mixed Roses Bouquet',
    rate:'4.3',
    price:'549'
  },
  {
    image:'/Images/birthday/personalised-blue-notebook-and-pen-combo_1.webp',
    link:"/personalised-blue-notebook-and-pen-combo_1",
    title:'Personalised Blue Notebook & Pen Combo',
    rate:'4.8',
    price:'599'
  },
  {
    image:'/Images/birthday/personalised-mens-classy-essentials-gift-box_1.webp',
    link:"/personalised-mens-classy-essentials-gift-box_1",
    title:'Personalised Mens Classy Essentials Gift Box',
    rate:'4.7',
    price:'1499'
  },
  {
    image:'/Images/birthday/personalised-temperature-hydration-bottle_1.webp',
    link:"/personalised-temperature-hydration-bottle_1",
    title:'Personalised Temperature Hydration Bottle',
    rate:'4.6',
    price:'599'
  },
  {
    image:'/Images/birthday/rocher-choco-bouquet_1.webp',
    link:"/rocher-choco-bouquet_1",
    title:'Rocher Choco Bouquet',
    rate:'4.8',
    price:'1899'
  },
  {
    image:'/Images/birthday/decorated-chocolate-truffle-cake-half-kg_1.webp',
    link:"/decorated-chocolate-truffle-cake-half-kg_1",
    title:'Decorated Chocolate Truffle Cake Half Kg',
    rate:'4.5',
    price:'575'
  },
  {
    image:'/Images/birthday/fruit-overload-cake-half-kg_1.webp',
    link:"/fruit-overload-cake-half-kg_1",
    title:'Overload Fruit Cake Half Kg',
    rate:'5.0',
    price:'725'
  },
  {
    image:'/Images/birthday/fudge-brownie-cake-half-kg_1.webp',
    link:"/fudge-brownie-cake-half-kg_1",
    title:'Fudge Brownie Cake Half Kg',
    rate:'4.5',
    price:'675'
  },
  {
    image:'/Images/birthday/love-for-pastel-carnations-bouquet_1.webp',
    link:"/love-for-pastel-carnations-bouquet_1",
    title:'Love For Pastel Carnations Bouquet',
    rate:'4.8',
    price:'949'
  },
  {
    image:'/Images/birthday/personalised-desk-organisers_1.webp',
    link:"/personalised-desk-organisers_1",
    title:'Personalised Desk Organisers',
    rate:'4.5',
    price:'549'
  },
  {
    image:'/Images/birthday/rich-coffee-cream-cake-half-kg_1.webp',
    link:"/rich-coffee-cream-cake-half-kg_1",
    title:'Rich Coffee Cream Cake Half Kg',
    rate:'5.0',
    price:'725'
  },
  {
    image:'/Images/birthday/shimmering-heart-pendant_1.webp',
    link:"/shimmering-heart-pendant_1",
    title:'Shimmering Heart Pendant',
    rate:'4.5',
    price:'449'
  },
  {
    image:'/Images/birthday/birthday-bliss-vanilla-dream-cake-half-kg_1.webp',
    link:"/birthday-bliss-vanilla-dream-cake-half-kg_1",
    title:'Birthday Bliss Vanilla Dream Cake- Half Kg',
    rate:'5.0',
    price:'649'
  },
  {
    image:'/Images/birthday/birthday-celebration-mugs_1.webp',
    link:"/birthday-celebration-mugs_1",
    title:'Birthday Celebration Mug',
    rate:'4.5',
    price:'249'
  },
  {
    image:'/Images/birthday/dates-walnuts-mixed-dry-cake-500gms_1.webp',
    link:"/dates-walnuts-mixed-dry-cake-500gms_1",
    title:'Dates & Walnuts Mixed Dry Cake 500gms',
    rate:'5.0',
    price:'999'
  },
  {
    image:'/Images/birthday/feminine-fragrance-collection-for-her_1.webp',
    link:"/feminine-fragrance-collection-for-her_1",
    title:'Feminine Fragrance Collection for Her',
    rate:'4.5',
    price:'899'
  },
  {
    image:'/Images/birthday/jade-plant-in-gold-tone-metal-pot_1.webp',
    link:"/jade-plant-in-gold-tone-metal-pot_1",
    title:'Jade Plant In Gold Tone Metal Pot',
    rate:'4.8',
    price:'249'
  },
  {
    image:'/Images/birthday/mixed-brilliance-gerbera-blossoms_1.webp',
    link:"/mixed-brilliance-gerbera-blossoms_1",
    title:'Special 8 Mixed Roses Bouquet',
    rate:'4.3',
    price:'549'
  },
  {
    image:'/Images/birthday/personalised-blue-notebook-and-pen-combo_1.webp',
    link:"/personalised-blue-notebook-and-pen-combo_1",
    title:'Personalised Blue Notebook & Pen Combo',
    rate:'4.8',
    price:'599'
  },
  {
    image:'/Images/birthday/personalised-mens-classy-essentials-gift-box_1.webp',
    link:"/personalised-mens-classy-essentials-gift-box_1",
    title:'Personalised Mens Classy Essentials Gift Box',
    rate:'4.7',
    price:'1499'
  },
  {
    image:'/Images/birthday/personalised-temperature-hydration-bottle_1.webp',
    link:"/personalised-temperature-hydration-bottle_1",
    title:'Personalised Temperature Hydration Bottle',
    rate:'4.6',
    price:'599'
  },
  {
    image:'/Images/birthday/rocher-choco-bouquet_1.webp',
    link:"/rocher-choco-bouquet_1",
    title:'Rocher Choco Bouquet',
    rate:'4.8',
    price:'1899'
  },
  {
    image:'/Images/birthday/decorated-chocolate-truffle-cake-half-kg_1.webp',
    link:"/decorated-chocolate-truffle-cake-half-kg_1",
    title:'Decorated Chocolate Truffle Cake Half Kg',
    rate:'4.5',
    price:'575'
  },
  {
    image:'/Images/birthday/fruit-overload-cake-half-kg_1.webp',
    link:"/fruit-overload-cake-half-kg_1",
    title:'Overload Fruit Cake Half Kg',
    rate:'5.0',
    price:'725'
  },
  {
    image:'/Images/birthday/fudge-brownie-cake-half-kg_1.webp',
    link:"/fudge-brownie-cake-half-kg_1",
    title:'Fudge Brownie Cake Half Kg',
    rate:'4.5',
    price:'675'
  },
  {
    image:'/Images/birthday/love-for-pastel-carnations-bouquet_1.webp',
    link:"/love-for-pastel-carnations-bouquet_1",
    title:'Love For Pastel Carnations Bouquet',
    rate:'4.8',
    price:'949'
  },
  {
    image:'/Images/birthday/personalised-desk-organisers_1.webp',
    link:"/personalised-desk-organisers_1",
    title:'Personalised Desk Organisers',
    rate:'4.5',
    price:'549'
  },
  {
    image:'/Images/birthday/rich-coffee-cream-cake-half-kg_1.webp',
    link:"/rich-coffee-cream-cake-half-kg_1",
    title:'Rich Coffee Cream Cake Half Kg',
    rate:'5.0',
    price:'725'
  },
  {
    image:'/Images/birthday/shimmering-heart-pendant_1.webp',
    link:"/shimmering-heart-pendant_1",
    title:'Shimmering Heart Pendant',
    rate:'4.5',
    price:'449'
  },
  {
    image:'/Images/birthday/birthday-bliss-vanilla-dream-cake-half-kg_1.webp',
    link:"/birthday-bliss-vanilla-dream-cake-half-kg_1",
    title:'Birthday Bliss Vanilla Dream Cake- Half Kg',
    rate:'5.0',
    price:'649'
  },
  {
    image:'/Images/birthday/birthday-celebration-mugs_1.webp',
    link:"/birthday-celebration-mugs_1",
    title:'Birthday Celebration Mug',
    rate:'4.5',
    price:'249'
  },
  {
    image:'/Images/birthday/dates-walnuts-mixed-dry-cake-500gms_1.webp',
    link:"/dates-walnuts-mixed-dry-cake-500gms_1",
    title:'Dates & Walnuts Mixed Dry Cake 500gms',
    rate:'5.0',
    price:'999'
  },
  {
    image:'/Images/birthday/feminine-fragrance-collection-for-her_1.webp',
    link:"/feminine-fragrance-collection-for-her_1",
    title:'Feminine Fragrance Collection for Her',
    rate:'4.5',
    price:'899'
  },
  {
    image:'/Images/birthday/jade-plant-in-gold-tone-metal-pot_1.webp',
    link:"/jade-plant-in-gold-tone-metal-pot_1",
    title:'Jade Plant In Gold Tone Metal Pot',
    rate:'4.8',
    price:'249'
  },
  {
    image:'/Images/birthday/mixed-brilliance-gerbera-blossoms_1.webp',
    link:"/mixed-brilliance-gerbera-blossoms_1",
    title:'Special 8 Mixed Roses Bouquet',
    rate:'4.3',
    price:'549'
  },
  {
    image:'/Images/birthday/personalised-blue-notebook-and-pen-combo_1.webp',
    link:"/personalised-blue-notebook-and-pen-combo_1",
    title:'Personalised Blue Notebook & Pen Combo',
    rate:'4.8',
    price:'599'
  },
  {
    image:'/Images/birthday/personalised-mens-classy-essentials-gift-box_1.webp',
    link:"/personalised-mens-classy-essentials-gift-box_1",
    title:'Personalised Mens Classy Essentials Gift Box',
    rate:'4.7',
    price:'1499'
  },
  {
    image:'/Images/birthday/personalised-temperature-hydration-bottle_1.webp',
    link:"/personalised-temperature-hydration-bottle_1",
    title:'Personalised Temperature Hydration Bottle',
    rate:'4.6',
    price:'599'
  },
  {
    image:'/Images/birthday/rocher-choco-bouquet_1.webp',
    link:"/rocher-choco-bouquet_1",
    title:'Rocher Choco Bouquet',
    rate:'4.8',
    price:'1899'
  },
  {
    image:'/Images/birthday/decorated-chocolate-truffle-cake-half-kg_1.webp',
    link:"/decorated-chocolate-truffle-cake-half-kg_1",
    title:'Decorated Chocolate Truffle Cake Half Kg',
    rate:'4.5',
    price:'575'
  },
  {
    image:'/Images/birthday/fruit-overload-cake-half-kg_1.webp',
    link:"/fruit-overload-cake-half-kg_1",
    title:'Overload Fruit Cake Half Kg',
    rate:'5.0',
    price:'725'
  },
  {
    image:'/Images/birthday/fudge-brownie-cake-half-kg_1.webp',
    link:"/fudge-brownie-cake-half-kg_1",
    title:'Fudge Brownie Cake Half Kg',
    rate:'4.5',
    price:'675'
  },
  {
    image:'/Images/birthday/love-for-pastel-carnations-bouquet_1.webp',
    link:"/love-for-pastel-carnations-bouquet_1",
    title:'Love For Pastel Carnations Bouquet',
    rate:'4.8',
    price:'949'
  },
  {
    image:'/Images/birthday/personalised-desk-organisers_1.webp',
    link:"/personalised-desk-organisers_1",
    title:'Personalised Desk Organisers',
    rate:'4.5',
    price:'549'
  },
  {
    image:'/Images/birthday/rich-coffee-cream-cake-half-kg_1.webp',
    link:"/rich-coffee-cream-cake-half-kg_1",
    title:'Rich Coffee Cream Cake Half Kg',
    rate:'5.0',
    price:'725'
  },
  {
    image:'/Images/birthday/shimmering-heart-pendant_1.webp',
    link:"/shimmering-heart-pendant_1",
    title:'Shimmering Heart Pendant',
    rate:'4.5',
    price:'449'
  },
  {
    image:'/Images/birthday/birthday-bliss-vanilla-dream-cake-half-kg_1.webp',
    link:"/birthday-bliss-vanilla-dream-cake-half-kg_1",
    title:'Birthday Bliss Vanilla Dream Cake- Half Kg',
    rate:'5.0',
    price:'649'
  },
  {
    image:'/Images/birthday/birthday-celebration-mugs_1.webp',
    link:"/birthday-celebration-mugs_1",
    title:'Birthday Celebration Mug',
    rate:'4.5',
    price:'249'
  },
  {
    image:'/Images/birthday/dates-walnuts-mixed-dry-cake-500gms_1.webp',
    link:"/dates-walnuts-mixed-dry-cake-500gms_1",
    title:'Dates & Walnuts Mixed Dry Cake 500gms',
    rate:'5.0',
    price:'999'
  },
  {
    image:'/Images/birthday/feminine-fragrance-collection-for-her_1.webp',
    link:"/feminine-fragrance-collection-for-her_1",
    title:'Feminine Fragrance Collection for Her',
    rate:'4.5',
    price:'899'
  },
  {
    image:'/Images/birthday/jade-plant-in-gold-tone-metal-pot_1.webp',
    link:"/jade-plant-in-gold-tone-metal-pot_1",
    title:'Jade Plant In Gold Tone Metal Pot',
    rate:'4.8',
    price:'249'
  },
  {
    image:'/Images/birthday/mixed-brilliance-gerbera-blossoms_1.webp',
    link:"/mixed-brilliance-gerbera-blossoms_1",
    title:'Special 8 Mixed Roses Bouquet',
    rate:'4.3',
    price:'549'
  },
  {
    image:'/Images/birthday/personalised-blue-notebook-and-pen-combo_1.webp',
    link:"/personalised-blue-notebook-and-pen-combo_1",
    title:'Personalised Blue Notebook & Pen Combo',
    rate:'4.8',
    price:'599'
  },
  {
    image:'/Images/birthday/personalised-mens-classy-essentials-gift-box_1.webp',
    link:"/personalised-mens-classy-essentials-gift-box_1",
    title:'Personalised Mens Classy Essentials Gift Box',
    rate:'4.7',
    price:'1499'
  },
  {
    image:'/Images/birthday/personalised-temperature-hydration-bottle_1.webp',
    link:"/personalised-temperature-hydration-bottle_1",
    title:'Personalised Temperature Hydration Bottle',
    rate:'4.6',
    price:'599'
  },
  {
    image:'/Images/birthday/rocher-choco-bouquet_1.webp',
    link:"/rocher-choco-bouquet_1",
    title:'Rocher Choco Bouquet',
    rate:'4.8',
    price:'1899'
  },
  {
    image:'/Images/birthday/decorated-chocolate-truffle-cake-half-kg_1.webp',
    link:"/decorated-chocolate-truffle-cake-half-kg_1",
    title:'Decorated Chocolate Truffle Cake Half Kg',
    rate:'4.5',
    price:'575'
  },
  {
    image:'/Images/birthday/fruit-overload-cake-half-kg_1.webp',
    link:"/fruit-overload-cake-half-kg_1",
    title:'Overload Fruit Cake Half Kg',
    rate:'5.0',
    price:'725'
  },
  {
    image:'/Images/birthday/fudge-brownie-cake-half-kg_1.webp',
    link:"/fudge-brownie-cake-half-kg_1",
    title:'Fudge Brownie Cake Half Kg',
    rate:'4.5',
    price:'675'
  },
  {
    image:'/Images/birthday/love-for-pastel-carnations-bouquet_1.webp',
    link:"/love-for-pastel-carnations-bouquet_1",
    title:'Love For Pastel Carnations Bouquet',
    rate:'4.8',
    price:'949'
  },
  {
    image:'/Images/birthday/personalised-desk-organisers_1.webp',
    link:"/personalised-desk-organisers_1",
    title:'Personalised Desk Organisers',
    rate:'4.5',
    price:'549'
  },
  {
    image:'/Images/birthday/rich-coffee-cream-cake-half-kg_1.webp',
    link:"/rich-coffee-cream-cake-half-kg_1",
    title:'Rich Coffee Cream Cake Half Kg',
    rate:'5.0',
    price:'725'
  },
  {
    image:'/Images/birthday/shimmering-heart-pendant_1.webp',
    link:"/shimmering-heart-pendant_1",
    title:'Shimmering Heart Pendant',
    rate:'4.5',
    price:'449'
  },
  {
    image:'/Images/birthday/birthday-bliss-vanilla-dream-cake-half-kg_1.webp',
    link:"/birthday-bliss-vanilla-dream-cake-half-kg_1",
    title:'Birthday Bliss Vanilla Dream Cake- Half Kg',
    rate:'5.0',
    price:'649'
  },
  {
    image:'/Images/birthday/birthday-celebration-mugs_1.webp',
    link:"/birthday-celebration-mugs_1",
    title:'Birthday Celebration Mug',
    rate:'4.5',
    price:'249'
  },
  {
    image:'/Images/birthday/dates-walnuts-mixed-dry-cake-500gms_1.webp',
    link:"/dates-walnuts-mixed-dry-cake-500gms_1",
    title:'Dates & Walnuts Mixed Dry Cake 500gms',
    rate:'5.0',
    price:'999'
  },
  {
    image:'/Images/birthday/feminine-fragrance-collection-for-her_1.webp',
    link:"/feminine-fragrance-collection-for-her_1",
    title:'Feminine Fragrance Collection for Her',
    rate:'4.5',
    price:'899'
  },
  {
    image:'/Images/birthday/jade-plant-in-gold-tone-metal-pot_1.webp',
    link:"/jade-plant-in-gold-tone-metal-pot_1",
    title:'Jade Plant In Gold Tone Metal Pot',
    rate:'4.8',
    price:'249'
  },
  {
    image:'/Images/birthday/mixed-brilliance-gerbera-blossoms_1.webp',
    link:"/mixed-brilliance-gerbera-blossoms_1",
    title:'Special 8 Mixed Roses Bouquet',
    rate:'4.3',
    price:'549'
  },
  {
    image:'/Images/birthday/personalised-blue-notebook-and-pen-combo_1.webp',
    link:"/personalised-blue-notebook-and-pen-combo_1",
    title:'Personalised Blue Notebook & Pen Combo',
    rate:'4.8',
    price:'599'
  },
  {
    image:'/Images/birthday/personalised-mens-classy-essentials-gift-box_1.webp',
    link:"/personalised-mens-classy-essentials-gift-box_1",
    title:'Personalised Mens Classy Essentials Gift Box',
    rate:'4.7',
    price:'1499'
  },
  {
    image:'/Images/birthday/personalised-temperature-hydration-bottle_1.webp',
    link:"/personalised-temperature-hydration-bottle_1",
    title:'Personalised Temperature Hydration Bottle',
    rate:'4.6',
    price:'599'
  },
  {
    image:'/Images/birthday/rocher-choco-bouquet_1.webp',
    link:"/rocher-choco-bouquet_1",
    title:'Rocher Choco Bouquet',
    rate:'4.8',
    price:'1899'
  }
]

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

      <div className="flex gap-8">
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
        <div className="w-[80%] space-y-6">
          <div className="bg-white p-4">
            <div className="flex gap-10 pb-2">
              <div className="flex gap-5">
              <h2 className="font-semibold text-lg">Memorable Birthday Gifts</h2>
              <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
                <span>4.0</span>
                <RiStarHalfSFill />
              </div>
              </div>
              <div className="flex gap-5 text-[17px]">
              <h4 className="text-blue-500 font-normal ">65784 Reviews</h4>
              <span className="text-gray-600 ">|    30 of 100 Gifts</span>
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
          <div className="p-4">
            <div className="grid grid-cols-3 gap-4">
              {data.map((item,index)=>(

              
              <div key={index} className="bg-white p-2 ">
                <Link href={item.link} className="space-y-2">
                  <Image width={500} height={500} className="w-full h-auto" src={item.image} alt={item.title}/>
                  <h3 className="text-slate-800">{item.title}</h3>
                  <div className="flex justify-between">
                  <span className="flex items-center font-semibold text-lg"><BsCurrencyRupee />{item.price}</span>
                  <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
                <span>{item.rate}</span>
                <RiStarHalfSFill />
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
