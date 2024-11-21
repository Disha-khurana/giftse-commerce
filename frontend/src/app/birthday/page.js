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
      rate: "5.0",
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
      id: 5,
      image: [
        "/Images/birthday/desk organiser/personalised-desk-organisers_1.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_2.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_3.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_4.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_5.webp",
      ],
      link: "/personalised-desk-organisers_1",
      title: "Personalised Desk Organisers",
      rate: "4.5",
      price: "549",
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
      rate: "5.0",
      price: "725",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 7,
      image: [
        "/Images/birthday/heart pendant/shimmering-heart-pendant_1.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_2.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_3.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_2.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_3.webp",
      ],
      link: "/shimmering-heart-pendant",
      title: "Shimmering Heart Pendant",
      rate: "4.5",
      price: "449",
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
      id: 9,
      image: [
        "/Images/birthday/celebration mug/birthday-celebration-mugs_1.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_2.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_3.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_4.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_1.webp",
      ],
      link: "/birthday-celebration-mugs",
      title: "Birthday Celebration Mug",
      rate: "4.5",
      price: "249",
      review: "273 reviews",
      delivery: "Today",
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
      rate: "5.0",
      price: "999",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 11,
      image: [
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
      ],
      link: "/feminine-fragrance-collection-for-her",
      title: "Feminine Fragrance Collection For Her",
      rate: "5.0",
      price: "399",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id:12,
      image: [
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_1.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_2.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_3.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_4.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_5.webp",
      ],
      link: "/jade-plant-in-gold-tone-metal-pot",
      title: "Jade Plant In Gold Tone Metal Pot",
      rate: "4.8",
      price: "249",
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
    },
    {
      id:14,
      image: [
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_1.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_2.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_3.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_4.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_5.webp",
      ],
      link: "/personalised-blue-notebook-and-pen-combo",
      title: "Personalised Blue Notebook & Pen Combo",
      rate: "4.8",
      price: "599",
    },
    {
      id:15,
      image: [
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_1.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_2.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_3.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_4.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_5.webp",
      ],
      link: "/personalised-mens-classy-essentials-gift-box",
      title: "Personalised Mens Classy Essentials Gift Box",
      rate: "4.7",
      price: "1499",
    },
    {
      id:16,
      image: [
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_1.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_2.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_3.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_4.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_1.webp",
      ],
      link: "/personalised-temperature-hydration-bottle",
      title: "Personalised Temperature Hydration Bottle",
      rate: "4.6",
      price: "599",
    },
    {
      id:17,
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
      id:18,
      image: [
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_1.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_2.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_3.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_4.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_1.webp",
      ],
      link: "scorpion-signature-mug",
      title: "Scorpion Signature Mug",
      rate: "4.8",
      price: "1899",
    },
    {
      id:19,
      image: [
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_2.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_3.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
      ],
      link: "/totally-scorpio-hanging-frame",
      title: "Totally Scorpio Hanging Frame",
      price: "449",
    },
    {
      id:20,
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
      rate: "5.0",
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
      id: 5,
      image: [
        "/Images/birthday/desk organiser/personalised-desk-organisers_1.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_2.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_3.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_4.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_5.webp",
      ],
      link: "/personalised-desk-organisers_1",
      title: "Personalised Desk Organisers",
      rate: "4.5",
      price: "549",
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
      rate: "5.0",
      price: "725",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 7,
      image: [
        "/Images/birthday/heart pendant/shimmering-heart-pendant_1.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_2.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_3.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_2.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_3.webp",
      ],
      link: "/shimmering-heart-pendant",
      title: "Shimmering Heart Pendant",
      rate: "4.5",
      price: "449",
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
      id: 9,
      image: [
        "/Images/birthday/celebration mug/birthday-celebration-mugs_1.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_2.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_3.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_4.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_1.webp",
      ],
      link: "/birthday-celebration-mugs",
      title: "Birthday Celebration Mug",
      rate: "4.5",
      price: "249",
      review: "273 reviews",
      delivery: "Today",
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
      rate: "5.0",
      price: "999",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 11,
      image: [
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
      ],
      link: "/feminine-fragrance-collection-for-her",
      title: "Feminine Fragrance Collection For Her",
      rate: "5.0",
      price: "399",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id:12,
      image: [
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_1.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_2.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_3.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_4.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_5.webp",
      ],
      link: "/jade-plant-in-gold-tone-metal-pot",
      title: "Jade Plant In Gold Tone Metal Pot",
      rate: "4.8",
      price: "249",
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
    },
    {
      id:14,
      image: [
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_1.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_2.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_3.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_4.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_5.webp",
      ],
      link: "/personalised-blue-notebook-and-pen-combo",
      title: "Personalised Blue Notebook & Pen Combo",
      rate: "4.8",
      price: "599",
    },
    {
      id:15,
      image: [
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_1.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_2.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_3.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_4.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_5.webp",
      ],
      link: "/personalised-mens-classy-essentials-gift-box",
      title: "Personalised Mens Classy Essentials Gift Box",
      rate: "4.7",
      price: "1499",
    },
    {
      id:16,
      image: [
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_1.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_2.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_3.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_4.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_1.webp",
      ],
      link: "/personalised-temperature-hydration-bottle",
      title: "Personalised Temperature Hydration Bottle",
      rate: "4.6",
      price: "599",
    },
    {
      id:17,
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
      id:18,
      image: [
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_1.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_2.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_3.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_4.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_1.webp",
      ],
      link: "scorpion-signature-mug",
      title: "Scorpion Signature Mug",
      rate: "4.8",
      price: "1899",
    },
    {
      id:19,
      image: [
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_2.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_3.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
      ],
      link: "/totally-scorpio-hanging-frame",
      title: "Totally Scorpio Hanging Frame",
      price: "449",
    },
    {
      id:20,
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
      rate: "5.0",
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
      id: 5,
      image: [
        "/Images/birthday/desk organiser/personalised-desk-organisers_1.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_2.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_3.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_4.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_5.webp",
      ],
      link: "/personalised-desk-organisers_1",
      title: "Personalised Desk Organisers",
      rate: "4.5",
      price: "549",
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
      rate: "5.0",
      price: "725",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 7,
      image: [
        "/Images/birthday/heart pendant/shimmering-heart-pendant_1.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_2.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_3.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_2.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_3.webp",
      ],
      link: "/shimmering-heart-pendant",
      title: "Shimmering Heart Pendant",
      rate: "4.5",
      price: "449",
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
      id: 9,
      image: [
        "/Images/birthday/celebration mug/birthday-celebration-mugs_1.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_2.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_3.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_4.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_1.webp",
      ],
      link: "/birthday-celebration-mugs",
      title: "Birthday Celebration Mug",
      rate: "4.5",
      price: "249",
      review: "273 reviews",
      delivery: "Today",
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
      rate: "5.0",
      price: "999",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 11,
      image: [
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
      ],
      link: "/feminine-fragrance-collection-for-her",
      title: "Feminine Fragrance Collection For Her",
      rate: "5.0",
      price: "399",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id:12,
      image: [
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_1.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_2.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_3.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_4.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_5.webp",
      ],
      link: "/jade-plant-in-gold-tone-metal-pot",
      title: "Jade Plant In Gold Tone Metal Pot",
      rate: "4.8",
      price: "249",
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
    },
    {
      id:14,
      image: [
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_1.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_2.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_3.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_4.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_5.webp",
      ],
      link: "/personalised-blue-notebook-and-pen-combo",
      title: "Personalised Blue Notebook & Pen Combo",
      rate: "4.8",
      price: "599",
    },
    {
      id:15,
      image: [
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_1.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_2.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_3.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_4.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_5.webp",
      ],
      link: "/personalised-mens-classy-essentials-gift-box",
      title: "Personalised Mens Classy Essentials Gift Box",
      rate: "4.7",
      price: "1499",
    },
    {
      id:16,
      image: [
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_1.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_2.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_3.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_4.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_1.webp",
      ],
      link: "/personalised-temperature-hydration-bottle",
      title: "Personalised Temperature Hydration Bottle",
      rate: "4.6",
      price: "599",
    },
    {
      id:17,
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
      id:18,
      image: [
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_1.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_2.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_3.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_4.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_1.webp",
      ],
      link: "scorpion-signature-mug",
      title: "Scorpion Signature Mug",
      rate: "4.8",
      price: "1899",
    },
    {
      id:19,
      image: [
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_2.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_3.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
      ],
      link: "/totally-scorpio-hanging-frame",
      title: "Totally Scorpio Hanging Frame",
      price: "449",
    },
    {
      id:20,
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
      rate: "5.0",
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
      id: 5,
      image: [
        "/Images/birthday/desk organiser/personalised-desk-organisers_1.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_2.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_3.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_4.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_5.webp",
      ],
      link: "/personalised-desk-organisers_1",
      title: "Personalised Desk Organisers",
      rate: "4.5",
      price: "549",
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
      rate: "5.0",
      price: "725",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 7,
      image: [
        "/Images/birthday/heart pendant/shimmering-heart-pendant_1.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_2.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_3.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_2.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_3.webp",
      ],
      link: "/shimmering-heart-pendant",
      title: "Shimmering Heart Pendant",
      rate: "4.5",
      price: "449",
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
      id: 9,
      image: [
        "/Images/birthday/celebration mug/birthday-celebration-mugs_1.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_2.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_3.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_4.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_1.webp",
      ],
      link: "/birthday-celebration-mugs",
      title: "Birthday Celebration Mug",
      rate: "4.5",
      price: "249",
      review: "273 reviews",
      delivery: "Today",
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
      rate: "5.0",
      price: "999",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 11,
      image: [
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
      ],
      link: "/feminine-fragrance-collection-for-her",
      title: "Feminine Fragrance Collection For Her",
      rate: "5.0",
      price: "399",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id:12,
      image: [
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_1.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_2.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_3.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_4.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_5.webp",
      ],
      link: "/jade-plant-in-gold-tone-metal-pot",
      title: "Jade Plant In Gold Tone Metal Pot",
      rate: "4.8",
      price: "249",
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
    },
    {
      id:14,
      image: [
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_1.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_2.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_3.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_4.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_5.webp",
      ],
      link: "/personalised-blue-notebook-and-pen-combo",
      title: "Personalised Blue Notebook & Pen Combo",
      rate: "4.8",
      price: "599",
    },
    {
      id:15,
      image: [
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_1.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_2.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_3.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_4.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_5.webp",
      ],
      link: "/personalised-mens-classy-essentials-gift-box",
      title: "Personalised Mens Classy Essentials Gift Box",
      rate: "4.7",
      price: "1499",
    },
    {
      id:16,
      image: [
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_1.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_2.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_3.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_4.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_1.webp",
      ],
      link: "/personalised-temperature-hydration-bottle",
      title: "Personalised Temperature Hydration Bottle",
      rate: "4.6",
      price: "599",
    },
    {
      id:17,
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
      id:18,
      image: [
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_1.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_2.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_3.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_4.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_1.webp",
      ],
      link: "scorpion-signature-mug",
      title: "Scorpion Signature Mug",
      rate: "4.8",
      price: "1899",
    },
    {
      id:19,
      image: [
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_2.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_3.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
      ],
      link: "/totally-scorpio-hanging-frame",
      title: "Totally Scorpio Hanging Frame",
      price: "449",
    },
    {
      id:20,
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
      rate: "5.0",
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
      id: 5,
      image: [
        "/Images/birthday/desk organiser/personalised-desk-organisers_1.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_2.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_3.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_4.webp",
        "/Images/birthday/desk organiser/personalised-desk-organisers_5.webp",
      ],
      link: "/personalised-desk-organisers_1",
      title: "Personalised Desk Organisers",
      rate: "4.5",
      price: "549",
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
      rate: "5.0",
      price: "725",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 7,
      image: [
        "/Images/birthday/heart pendant/shimmering-heart-pendant_1.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_2.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_3.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_2.webp",
        "/Images/birthday/heart pendant/shimmering-heart-pendant_3.webp",
      ],
      link: "/shimmering-heart-pendant",
      title: "Shimmering Heart Pendant",
      rate: "4.5",
      price: "449",
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
      id: 9,
      image: [
        "/Images/birthday/celebration mug/birthday-celebration-mugs_1.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_2.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_3.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_4.webp",
        "/Images/birthday/celebration mug/birthday-celebration-mugs_1.webp",
      ],
      link: "/birthday-celebration-mugs",
      title: "Birthday Celebration Mug",
      rate: "4.5",
      price: "249",
      review: "273 reviews",
      delivery: "Today",
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
      rate: "5.0",
      price: "999",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 11,
      image: [
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
        "/Images/birthday/perfume col/feminine-fragrance-collection-for-her_1.webp",
      ],
      link: "/feminine-fragrance-collection-for-her",
      title: "Feminine Fragrance Collection For Her",
      rate: "5.0",
      price: "399",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id:12,
      image: [
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_1.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_2.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_3.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_4.webp",
        "/Images/birthday/jade plant/jade-plant-in-gold-tone-metal-pot_5.webp",
      ],
      link: "/jade-plant-in-gold-tone-metal-pot",
      title: "Jade Plant In Gold Tone Metal Pot",
      rate: "4.8",
      price: "249",
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
    },
    {
      id:14,
      image: [
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_1.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_2.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_3.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_4.webp",
        "/Images/birthday/combo/personalised-blue-notebook-and-pen-combo_5.webp",
      ],
      link: "/personalised-blue-notebook-and-pen-combo",
      title: "Personalised Blue Notebook & Pen Combo",
      rate: "4.8",
      price: "599",
    },
    {
      id:15,
      image: [
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_1.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_2.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_3.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_4.webp",
        "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_5.webp",
      ],
      link: "/personalised-mens-classy-essentials-gift-box",
      title: "Personalised Mens Classy Essentials Gift Box",
      rate: "4.7",
      price: "1499",
    },
    {
      id:16,
      image: [
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_1.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_2.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_3.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_4.webp",
        "/Images/birthday/bottle/personalised-temperature-hydration-bottle_1.webp",
      ],
      link: "/personalised-temperature-hydration-bottle",
      title: "Personalised Temperature Hydration Bottle",
      rate: "4.6",
      price: "599",
    },
    {
      id:17,
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
      id:18,
      image: [
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_1.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_2.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_3.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_4.webp",
        "/Images/birthday/scorpion-signature-mug/scorpion-signature-mug_1.webp",
      ],
      link: "scorpion-signature-mug",
      title: "Scorpion Signature Mug",
      rate: "4.8",
      price: "1899",
    },
    {
      id:19,
      image: [
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_2.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_3.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
        "/Images/birthday/hanging frame/totally-scorpio-hanging-frame_1.webp",
      ],
      link: "/totally-scorpio-hanging-frame",
      title: "Totally Scorpio Hanging Frame",
      price: "449",
    },
    {
      id:20,
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
        <h4 className="text-gray-500">Birthday Gifts Online</h4>
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
                  Memorable Birthday Gifts
                </h2>
                <div className="font-semibold flex items-center text-white bg-green-800 px-1 rounded-sm">
                  <span>4.0</span>
                  <RiStarHalfSFill />
                </div>
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
