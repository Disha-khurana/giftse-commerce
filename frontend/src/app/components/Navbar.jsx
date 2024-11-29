"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const menuRef = useRef(null);
  const [menuWidth, setMenuWidth] = useState(0);

  const items = [
    
    {
      name: "BIRTHDAY",
      link: "/birthday",
    },
    {
      name: "ANNIVERSARY",
      link: "/anniversary",
    },
    {
      name: "CAKES",
      link: "/cakes",
    },
    {
      name: "FLOWERS",
      link: "/flowers",
    },
    {
      name: "PERSONALISED",
      link: "/personalised",
    },
    {
      name: "PLANTS",
      link: "/plants",
    },
    {
      name: "CHOCOLATES",
      link: "/chocolates",
    },
    {
      name: "COMBOS",
      link: "/combos",
    },
    {
      name: "LIFESTYLE",
      link: "/lifestyle",
    },
    {
      name: "OCCASIONS",
      link: "/",
    },
    {
      name: "GLOBAL",
      link: "/global",
    },
    {
      name: "ON TREND",
      link: "/on-trend",
    },
  ];

  

  const festivalSections = [
    {
      heading: "Bhai Dooj",
      links: [
        { href: "/gifts/all", text: "All Gifts" },
        { href: "/gifts/tikka", text: "Tikka Gifts" },
        { href: "/gifts/dry-fruits", text: "Dry Fruits" },
        { href: "/gifts/sweets", text: "Sweets" },
        { href: "/gifts/personalised", text: "Personalised Gifts" },
        { href: "/gifts/chocolates", text: "Chocolates" },
        { href: "/gifts/cakes", text: "Cakes" },
        { href: "/gifts/hampers", text: "Hampers" },
        { href: "/gifts/plants", text: "Plants" },
        { href: "/gifts/combos", text: "Combos" },
      ],
    },
    {
      heading: "Festive Vibes",
      links: [
        { href: "/festivals/diwali", text: "Diwali – 1st Nov" },
        { href: "/festivals/bhai-dooj", text: "Bhai Dooj – 2nd – 3rd Nov" },
        { href: "/festivals/christmas", text: "Christmas – 25th Dec" },
        { href: "/festivals/new-year", text: "New Year - 1st Jan" },
        { href: "/festivals/lohri", text: "Lohri - 13th Jan" },
        {
          href: "/festivals/makar-sakranti",
          text: "Makar Sakranti - 14th Jan",
        },
        { href: "/festivals/pongal", text: "Pongal - 14th Jan" },
        {
          href: "/festivals/ram-mandir-anniversary",
          text: "Ram Mandir 1st Anniversary - 22nd Jan",
        },
        { href: "/festivals/mahashivratri", text: "Mahashivratri - 26th Feb" },
        { href: "/festivals/holi", text: "Holi - 14th Mar" },
        {
          href: "/festivals/ramadan-eid",
          text: "Ramadan & EID - 28th Feb - 31st Mar",
        },
        { href: "/festivals/raksha-bandhan", text: "Raksha Bandhan - 9th Aug" },
      ],
    },
    {
      heading: "Moments of Joy",
      links: [
        { href: "/moments/childrens-day", text: "Children’s Day – 14th Nov" },
        {
          href: "/moments/international-mens-day",
          text: "International Men's Day - 19th Nov",
        },
        { href: "/moments/thanksgiving", text: "Thanksgiving Day - 29th Nov" },
        { href: "/moments/valentines-day", text: "Valentine’s Day – 14th Feb" },
        { href: "/moments/womens-day", text: "Women's Day - 8th Mar" },
        { href: "/moments/mothers-day", text: "Mother's Day - 11th May" },
        { href: "/moments/fathers-day", text: "Father's Day - 15th June" },
      ],
    },
    {
      heading: "Milestone Moments",
      links: [
        { href: "/milestones/birthday", text: "Birthday" },
        { href: "/milestones/anniversary", text: "Anniversary" },
        { href: "/milestones/wedding", text: "Wedding" },
        { href: "/milestones/housewarming", text: "House Warming" },
        { href: "/milestones/newborn-baby", text: "New Born Baby" },
        { href: "/milestones/congratulations", text: "Congratulations" },
        { href: "/milestones/retirement", text: "Retirement" },
      ],
    },
  ];

  const birthdaySections = [
    {
      heading: "Must Haves",
      links: [
        { href: "/birthday/flowers", text: "Flowers" },
        { href: "/birthday/flowers-cakes", text: "Flowers N Cakes" },
        { href: "/birthday/cakes", text: "Cakes" },
        { href: "/birthday/flowers-chocolates", text: "Flowers N Chocolates" },
        { href: "/birthday/plants", text: "Plants" },
        { href: "/birthday/combos", text: "Combos" },
        { href: "/birthday/gift-hampers", text: "Gift Hampers" },
        { href: "/birthday/personalised", text: "Personalised Gifts" },
        { href: "/birthday/chocolates", text: "Chocolates" },
        { href: "/birthday/greeting-cards", text: "Greeting Cards" },
      ],
    },
    {
      heading: "Prime Picks",
      links: [
        { href: "/birthday/all", text: "All Gifts" },
        { href: "/birthday/bestsellers", text: "Bestsellers" },
        { href: "/birthday/premium", text: "Premium Gifts" },
        { href: "/birthday/unusual", text: "Unusual Gifts" },
        { href: "/birthday/new-arrivals", text: "New Arrivals" },
        { href: "/birthday/midnight-delivery", text: "Midnight Delivery" },
        { href: "/birthday/return-gifts", text: "Return Gifts" },
      ],
    },
    {
      heading: "Personal Picks",
      links: [
        { href: "/birthday/plant-lover", text: "Plant Lover" },
        { href: "/birthday/wanderer", text: "Wanderer" },
        { href: "/birthday/foodies", text: "Foodies" },
        { href: "/birthday/music-fan", text: "Music Fan" },
      ],
    },
    {
      heading: "Age Perfect Gifts",
      links: [
        { href: "/birthday/1st-birthday", text: "1st Birthday" },
        { href: "/birthday/10th-birthday", text: "10th Birthday" },
        { href: "/birthday/18th-birthday", text: "18th Birthday" },
        { href: "/birthday/50th-birthday", text: "50th Birthday" },
      ],
    },
    {
      heading: "Treasure Trove",
      links: [
        { href: "/birthday/spiritual", text: "Spiritual Gifts" },
        { href: "/birthday/electronics", text: "Electronics" },
        { href: "/birthday/jewellery", text: "Jewellery" },
        { href: "/birthday/exotic-flowers", text: "Exotic Flowers" },
        { href: "/birthday/experiential", text: "Experiential Gifts" },
        { href: "/birthday/toys-games", text: "Toys N Games" },
        { href: "/birthday/balloon-decor", text: "Balloon Decor" },
        { href: "/birthday/lifestyle-guitarist", text: "Gifts N Guitarist" },
      ],
    },
    {
      heading: "Price Wise Gifts",
      links: [
        { href: "/birthday/range-500-1000", text: "Rs500 - Rs1000" },
        { href: "/birthday/range-1000-2000", text: "Rs1000 - Rs2000" },
        { href: "/birthday/above-2000", text: "Above Rs2000" },
        { href: "/birthday/below-500", text: "Below Rs500" },
      ],
    },
  ];
  

  const anniversarySections = [
    {
      heading: "FEATURED",
      links: [
        { href: "/anniversary/all", text: "All Gifts" },
        { href: "/anniversary/best-sellers", text: "Best Sellers" },
        { href: "/anniversary/premium", text: "Premium Gifts" },
        { href: "/anniversary/new-arrivals", text: "New Arrivals" },
        { href: "/anniversary/unique", text: "Unique Gifts" },
      ],
    },
    {
      heading: "GIFTS - BY CHOICE",
      links: [
        { href: "/anniversary/cakes", text: "Cakes" },
        { href: "/anniversary/flowers", text: "Flowers" },
        { href: "/anniversary/personalised", text: "Personalised Gifts" },
        { href: "/anniversary/chocolates", text: "Chocolates" },
        { href: "/anniversary/plants", text: "Plants" },
        { href: "/anniversary/flowers-cakes", text: "Flowers N Cakes" },
        { href: "/anniversary/combos", text: "Combos" },
        { href: "/anniversary/gift-hampers", text: "Gift Hampers" },
        { href: "/anniversary/flowers-chocolates", text: "Flowers N Chocolates" },
        { href: "/anniversary/decorations-services", text: "Decorations Services" },
        { href: "/anniversary/jewellery", text: "Jewellery" },
        { href: "/anniversary/experiential", text: "Experiential Gifts" },
      ],
    },
    {
      heading: "EXPLORE MORE",
      links: [
        { href: "/anniversary/surprises-decorations", text: "Surprises N Decorations" },
        { href: "/anniversary/gift-hampers", text: "Gift Hampers" },
        { href: "/anniversary/photo-frames", text: "Photo Frames" },
        { href: "/anniversary/exotic-flowers", text: "Exotic Flowers" },
        { href: "/anniversary/home-decor", text: "Home Décor" },
        { href: "/anniversary/lifestyle", text: "Home N Living" },
        { href: "/anniversary/cosmetics-spa-hampers", text: "Cosmetics N Spa Hampers" },
        { href: "/anniversary/gift-mall", text: "Gift Mall" },
      ],
    },
    {
      heading: "Gifts - By Recipients",
      links: [
        { href: "/anniversary/for-husband", text: "For Husband" },
        { href: "/anniversary/for-wife", text: "For Wife" },
        { href: "/anniversary/for-couples", text: "For Couples" },
        { href: "/anniversary/for-parents", text: "For Parents" },
      ],
    },
    {
      heading: "GIFTS BY PRICE",
      links: [
        { href: "/anniversary/range-500-1000", text: "Gifts Rs500 - Rs1000" },
        { href: "/anniversary/range-1000-2000", text: "Gifts Rs1000 - Rs2000" },
        { href: "/anniversary/above-2000", text: "Gifts above Rs2000" },
      ],
    },
    {
      heading: "GIFTS FOR",
      links: [
        { href: "/anniversary/1st-anniversary", text: "1st Anniversary" },
        { href: "/anniversary/10th-anniversary", text: "10th Anniversary" },
        { href: "/anniversary/25th-anniversary", text: "25th Anniversary" },
        { href: "/anniversary/50th-anniversary", text: "50th Anniversary" },
      ],
    },
  ];

  const cakeSections = [
    {
      heading: "Celebrate Special Occasions",
      links: [
        { href: "/cakes/all", text: "All Cakes" },
        { href: "/cakes/birthday", text: "Birthday Cakes" },
        { href: "/cakes/anniversary", text: "Anniversary Cakes" },
        { href: "/cakes/congratulations", text: "Congratulations" },
        { href: "/cakes/25th-anniversary", text: "25th Anniversary" },
        { href: "/cakes/kids-birthday", text: "Kid's Birthday Cakes" },
        { href: "/cakes/wedding", text: "Wedding Cakes" },
        { href: "/cakes/1st-anniversary", text: "1st Anniversary" },
      ],
    },
    {
      heading: "Make Small Celebrations Big",
      links: [
        { href: "/cakes/collection", text: "Explore Cakes Collection" },
        { href: "/cakes/top-picks", text: "Top Picks" },
        { href: "/cakes/best-sellers", text: "Best Sellers" },
        { href: "/cakes/same-day-delivery", text: "Same Day Delivery" },
        { href: "/cakes/midnight-delivery", text: "Midnight Delivery" },
        { href: "/cakes/flowers-n-cakes", text: "Flowers N Cakes" },
        { href: "/cakes/cakes-and-guitarist", text: "Cakes and Guitarist" },
        { href: "/cakes/cake-combos", text: "Cake Combos" },
        { href: "/cakes/cake-with-plants", text: "Cake With Plants" },
        { href: "/cakes/cake-with-chocolates", text: "Cake With Chocolates" },
        { href: "/cakes/new-arrivals", text: "New Arrivals" },
      ],
    },
    {
      heading: "Yummy Treats",
      links: [
        { href: "/cakes/gourmet", text: "Gourmet Cakes" },
        { href: "/cakes/eggless", text: "Eggless Cakes" },
        { href: "/cakes/cup-cakes", text: "Cup Cakes" },
        { href: "/cakes/dry-cakes", text: "Dry Cakes" },
        { href: "/cakes/bento-cakes", text: "Bento Cakes" },
        { href: "/cakes/photo-cakes", text: "Photo Cakes" },
        { href: "/cakes/fusion-cakes", text: "Fusion Cakes" },
        { href: "/cakes/jar-cakes", text: "Jar Cakes" },
        { href: "/cakes/designer-cakes", text: "Designer Cakes" },
        { href: "/cakes/fondant-cakes", text: "Fondant Cakes" },
        { href: "/cakes/heart-shaped", text: "Heart Shaped Cakes" },
      ],
    },
    {
      heading: "Flavour Choices",
      links: [
        { href: "/cakes/butterscotch", text: "Butterscotch Cakes" },
        { href: "/cakes/pineapple", text: "Pineapple Cakes" },
        { href: "/cakes/truffle", text: "Truffle Cakes" },
        { href: "/cakes/chocolate", text: "Chocolate Cakes" },
        { href: "/cakes/black-forest", text: "Black Forest Cakes" },
        { href: "/cakes/vanilla", text: "Vanilla Cakes" },
        { href: "/cakes/red-velvet", text: "Red Velvet Cakes" },
        { href: "/cakes/blueberry", text: "Blueberry Cakes" },
        { href: "/cakes/walnut", text: "Walnut Cakes" },
        { href: "/cakes/coffee", text: "Coffee Cakes" },
        { href: "/cakes/pinata", text: "Pinata Cakes" },
        { href: "/cakes/fresh-fruit", text: "Fresh Fruit Cakes" },
        { href: "/cakes/caramel", text: "Caramel Cakes" },
      ],
    },
    {
      heading: "Send Cakes to",
      links: [
        { href: "/cakes/send/delhi", text: "Delhi" },
        { href: "/cakes/send/mumbai", text: "Mumbai" },
        { href: "/cakes/send/bengaluru", text: "Bengaluru" },
        { href: "/cakes/send/pune", text: "Pune" },
        { href: "/cakes/send/hyderabad", text: "Hyderabad" },
        { href: "/cakes/send/kolkata", text: "Kolkata" },
      ],
    },
  ];

  const flowerSections = [
    {
      heading: "IN FOCUS",
      links: [
       
        { href: "/flowers/all-flowers", text: "All Flowers" },
        { href: "/flowers/bestsellers", text: "Best Sellers" },
        { href: "/flowers/same-day-delivery", text: "Same Day Delivery" },
        { href: "/flowers/new-arrivals", text: "New Arrivals" },
        { href: "/flowers/personalised", text: "Personalised Flowers" },
        { href: "/flowers/premium", text: "Premium Flowers" },
        { href: "/flowers/zodiac", text: "Zodiac Flowers" },
        { href: "/flowers/dried-preserved", text: "Dried N Preserved Flowers" },
        { href: "/flowers/standing-bouquets", text: "Standing Flower Bouquets" },
      ],
    },
    {
      heading: "FLOWERS FOR EVERY OCCASION",
      links: [
        { href: "/flowers/occasions/birthday", text: "Birthday" },
        { href: "/flowers/occasions/anniversary", text: "Anniversary" },
        { href: "/flowers/occasions/congratulations", text: "Congratulations" },
        { href: "/flowers/occasions/love-romance", text: "Love N Romance" },
        { href: "/flowers/occasions/wedding", text: "Wedding" },
        { href: "/flowers/occasions/housewarming", text: "Housewarming" },
        { href: "/flowers/occasions/condolences", text: "Condolences" },
      ],
    },
    // {
    //   heading: "BLOOM ASSORTMENT",
    //   links: [
    //     { href: "/flowers/combinations/flowers-n-cakes", text: "Flowers N Cakes" },
    //     { href: "/flowers/combinations/flowers-n-chocolates", text: "Flowers N Chocolates" },
    //     { href: "/flowers/combinations/flowers-guitarist", text: "Flowers & Guitarist" },
    //     { href: "/flowers/combinations/flower-hampers", text: "Flower Hampers" },
    //   ],
    // },
    {
      heading: "FLORAL TYPES",
      links: [
        { href: "/flowers/mixed", text: "Mixed Flowers" },
        { href: "/flowers/carnations", text: "Carnations" },
        { href: "/flowers/exotic", text: "Exotic Flowers" },
        { href: "/flowers/roses", text: "Roses" },
        { href: "/flowers/orchids", text: "Orchids" },
        { href: "/flowers/gerberas", text: "Gerberas" },
        { href: "/flowers/lilies", text: "Lilies" },
      ],
    },
    {
      heading: "BLOSSOM ARRANGEMENT",
      links: [
        { href: "/flowers/arrangements", text: "Flower Arrangements" },
        { href: "/flowers/bouquets", text: "Flower Bouquets" },
        { href: "/flowers/subscription", text: "Flowers Subscription" },
      ],
    },
    {
      heading: "FLOWERS BY HUES",
      links: [
        { href: "/flowers/colors/red", text: "Red" },
        { href: "/flowers/colors/pink", text: "Pink" },
        { href: "/flowers/colors/purple", text: "Purple" },
        { href: "/flowers/colors/blue", text: "Blue" },
        { href: "/flowers/colors/yellow", text: "Yellow" },
        { href: "/flowers/colors/pastel", text: "Pastel" },
      ],
    },
    {
      heading: "SEND FLOWERS TO",
      links: [
        { href: "/flowers/send/delhi-ncr", text: "Delhi NCR" },
        { href: "/flowers/send/bengaluru", text: "Bengaluru" },
        { href: "/flowers/send/mumbai", text: "Mumbai" },
        { href: "/flowers/send/pune", text: "Pune" },
        { href: "/flowers/send/hyderabad", text: "Hyderabad" },
        { href: "/flowers/send/kolkata", text: "Kolkata" },
        { href: "/flowers/send/chennai", text: "Chennai" },
        { href: "/flowers/send/lucknow", text: "Lucknow" },
        { href: "/flowers/send/ahmedabad", text: "Ahmedabad" },
        { href: "/flowers/send/other-cities", text: "All Other Cities" },
      ],
    },
  ];

  const personalizedSections = [
    {
      heading: "GIFTS IN SPOTLIGHT",
      links: [
        { href: "/personalised/mugs", text: "Mugs" },
        { href: "/personalised/cushions", text: "Cushions" },
        { href: "/personalised/water-bottles", text: "Water Bottles" },
        { href: "/personalised/stationery", text: "Stationery" },
        { href: "/personalised/engraved", text: "Engraved" },
        { href: "/personalised/lamps", text: "Lamps" },
        { href: "/personalised/photo-frames", text: "Photo Frames" },
        { href: "/personalised/bar-accessories", text: "Bar Accessories" },
        { href: "/personalised/clocks", text: "Clocks" },
        { href: "/personalised/glass-ware", text: "Glass Ware" },
        { href: "/personalised/name-plates", text: "Name Plates" },
        { href: "/personalised/keychains", text: "Keychains" },
        { href: "/personalised/rings", text: "Rings" },
      ],
    },
    {
      heading: "TAILOR-MADE TREASURES",
      links: [
        { href: "/personalised/all", text: "All Personalised Gifts" },
        { href: "/personalised/same-day-delivery", text: "Same Day Delivery" },
        { href: "/personalised/best-sellers", text: "Best Sellers" },
        { href: "/personalised/new-arrivals", text: "New Arrivals" },
        { href: "/personalised/flowers", text: "Personalised Flowers" },
        { href: "/personalised/photo-cakes", text: "Personalised Photo Cakes" },
        { href: "/personalised/plants", text: "Personalised Plants" },
        { href: "/personalised/combos", text: "Personalised Combos" },
        { href: "/personalised/chocolates", text: "Personalised Chocolates" },
        { href: "/personalised/hampers", text: "Personalised Hampers" },
        { href: "/personalised/accessories", text: "Personalised Accessories" },
      ],
    },
    {
      heading: "FOR EVERY OCCASION",
      links: [
        { href: "/personalised/birthday", text: "Birthday" },
        { href: "/personalised/anniversary", text: "Anniversary" },
        { href: "/personalised/love-and-romance", text: "Love N Romance" },
        { href: "/personalised/wedding", text: "Wedding" },
      ],
    },
    {
      heading: "PERSONALISE GIFTS FOR",
      links: [
        { href: "/personalised/for-him", text: "For Him" },
        { href: "/personalised/for-her", text: "For Her" },
        { href: "/personalised/for-kids", text: "For Kids" },
        { href: "/personalised/for-husband", text: "For Husband" },
        { href: "/personalised/for-wife", text: "For Wife" },
      ],
    },
    {
      heading: "TRENDING",
      links: [
        { href: "/personalised/explosion-boxes", text: "Explosion Boxes" },
        { href: "/personalised/jewellery", text: "Jewellery" },
        { href: "/personalised/caricatures", text: "Caricatures" },
        { href: "/personalised/neon-lights", text: "Neon Lights" },
        { href: "/personalised/t-shirts", text: "T-Shirts" },
        { href: "/personalised/travel-accessories", text: "Travel Accessories" },
        { href: "/personalised/perfumes", text: "Perfumes" },
        { href: "/personalised/greeting-cards", text: "Greeting Cards" },
      ],
    },
    {
      heading: "BY CITIES",
      links: [
        { href: "/personalised/send/delhi-ncr", text: "Delhi NCR" },
        { href: "/personalised/send/mumbai", text: "Mumbai" },
        { href: "/personalised/send/bengaluru", text: "Bengaluru" },
        { href: "/personalised/send/pune", text: "Pune" },
        { href: "/personalised/send/hyderabad", text: "Hyderabad" },
        { href: "/personalised/send/kolkata", text: "Kolkata" },
        { href: "/personalised/send/chennai", text: "Chennai" },
        { href: "/personalised/send/lucknow", text: "Lucknow" },
        { href: "/personalised/send/ahmedabad", text: "Ahmedabad" },
        { href: "/personalised/send/all-other-cities", text: "All Other Cities" },
      ],
    },
  ];
  
  const plantSections = [
    {
      heading: "ELITE GREENS",
      links: [
        { href: "/plants/all", text: "All Plants" },
        { href: "/plants/best-sellers", text: "Best Sellers" },
        { href: "/plants/same-day-delivery", text: "Same Day Delivery" },
        { href: "/plants/new-arrivals", text: "New Arrivals" },
        { href: "/plants/premium", text: "Premium Plants" },
        { href: "/plants/air-purifying", text: "Air Purifying Plants" },
        { href: "/plants/for-her", text: "Plants for Her" },
        { href: "/plants/for-him", text: "Plants for Him" },
        { href: "/plants/offers", text: "Plants Offers" },
        { href: "/plants/garden-accessories", text: "Garden Accessories" },
        { href: "/plants/terrariums", text: "Terrariums Plants" },
        { href: "/plants/personalised", text: "Personalised Plants" },
      ],
    },
    {
      heading: "PERFECT PLACEMENTS",
      links: [
        { href: "/plants/indoor", text: "Indoor Plants" },
        { href: "/plants/desktop", text: "Desktop Plants" },
        { href: "/plants/hanging", text: "Hanging Plants" },
      ],
    },
    {
      heading: "FOR CELEBRATIONS",
      links: [
        { href: "/plants/occasions/birthday", text: "Birthday" },
        { href: "/plants/occasions/anniversary", text: "Anniversary" },
        { href: "/plants/occasions/house-warming", text: "House Warming" },
        { href: "/plants/occasions/good-luck", text: "Good Luck" },
      ],
    },
    {
      heading: "PLANTS COLLECTION",
      links: [
        { href: "/plants/money-plant", text: "Money Plants" },
        { href: "/plants/snake-plant", text: "Snake Plants" },
        { href: "/plants/jade", text: "Jade Plants" },
        { href: "/plants/diy-kits", text: "Plants DIY Kits" },
        { href: "/plants/lucky-bamboo", text: "Lucky Bamboo" },
        { href: "/plants/palm", text: "Palm Plants" },
        { href: "/plants/bonsai", text: "Bonsai Plants" },
        { href: "/plants/ficus", text: "Ficus Plants" },
        { href: "/plants/spider", text: "Spider Plants" },
        { href: "/plants/exotic", text: "Exotic Plants" },
        { href: "/plants/aglaonema", text: "Agalaonema Plants" },
        { href: "/plants/flowering", text: "Flowering Plants" },
        { href: "/plants/cactus-succulents", text: "Cactus & Succulent Plants" },
        { href: "/plants/low-maintenance", text: "Low Maintenance Plants" },
      ],
    },
    {
      heading: "PLANTERS STYLES",
      links: [
        { href: "/planters/ceramic", text: "Ceramic Planters" },
        { href: "/planters/metal", text: "Metal Planters" },
        { href: "/planters/glass", text: "Glass Planters" },
        { href: "/planters/self-watering", text: "Self Watering Planters" },
        { href: "/planters/mugs", text: "Mugs Planters" },
        { href: "/planters/pots", text: "Planter Pots" },
      ],
    },
    // {
    //   heading: "PLANT COMBOS",
    //   links: [
    //     { href: "/combos/cake-plants", text: "Cake N Plants" },
    //     { href: "/combos/plants", text: "Plants Combos" },
    //     { href: "/combos/flowers-plants", text: "Flowers N Plants" },
    //   ],
    // },
    {
      heading: "SEND PLANTS TO",
      links: [
        { href: "/plants/send/delhi-ncr", text: "Delhi NCR" },
        { href: "/plants/send/bengaluru", text: "Bengaluru" },
        { href: "/plants/send/mumbai", text: "Mumbai" },
        { href: "/plants/send/pune", text: "Pune" },
        { href: "/plants/send/hyderabad", text: "Hyderabad" },
        { href: "/plants/send/kolkata", text: "Kolkata" },
        { href: "/plants/send/chennai", text: "Chennai" },
        { href: "/plants/send/lucknow", text: "Lucknow" },
        { href: "/plants/send/ahmedabad", text: "Ahmedabad" },
        { href: "/plants/send/all-other-cities", text: "All Other Cities" },
      ],
    },
  ];

  const chocolateSections = [
    {
      heading: "BY FEATURED",
      links: [
        { href: "/chocolates/all", text: "All Chocolates" },
        { href: "/chocolates/best-sellers", text: "Best Sellers" },
        { href: "/chocolates/same-day", text: "Same Day Chocolates" },
        { href: "/chocolates/new-arrivals", text: "New Arrivals" },
        { href: "/chocolates/premium", text: "Premium ChocolatesNEW" },
        { href: "/gourmet-gifts", text: "Gourmet Gifts" },
      ],
    },
    {
      heading: "BY TYPES",
      links: [
        { href: "/chocolates/milk", text: "Milk Chocolates" },
        { href: "/chocolates/dark", text: "Dark Chocolates" },
        { href: "/chocolates/personalised", text: "Personalised Chocolates" },
        { href: "/chocolates/sugar-free", text: "Sugar Free Chocolates" },
        { href: "/chocolates/handmade", text: "Handmade Chocolates" },
      ],
    },
    {
      heading: "BY CHOICE",
      links: [
        { href: "/chocolates/bouquets", text: "Chocolate Bouquets" },
        { href: "/chocolates/hampers", text: "Chocolate Hampers" },
        { href: "/chocolates/combos", text: "Chocolate Combos" },
        { href: "/flowers-and-chocolates", text: "Flowers N Chocolates" },
        { href: "/chocolates/imported", text: "Imported Chocolates" },
      ],
    },
    {
      heading: "BY BRANDS",
      links: [
        { href: "/chocolates/ferrero-rocher", text: "Ferrero Rocher" },
        { href: "/chocolates/cadbury", text: "Cadbury" },
        { href: "/chocolates/artisanal", text: "Artisanal Chocolates" },
        { href: "/chocolates/fnp-premium", text: "FNP Premium Chocolates" },
        { href: "/chocolates/smoor", text: "Smoor Chocolates" },
        { href: "/chocolates/lindt", text: "Lindt Chocolates" },
        { href: "/chocolates/toblerone", text: "Toblerone" },
        { href: "/chocolates/hershey", text: "Hershey Chocolates" },
        { href: "/chocolates/kitkat", text: "Kitkat Chocolates" },
      ],
    },
    // {
    //   heading: "BY OCCASION",
    //   links: [
    //     { href: "/occasions/birthday", text: "Birthday" },
    //     { href: "/occasions/anniversary", text: "Anniversary" },
    //     { href: "/occasions/thank-you", text: "Thank You" },
    //     { href: "/occasions/wedding", text: "Wedding" },
    //   ],
    // },
    {
      heading: "BY PRICES",
      links: [
        { href: "/gifts/price-500-1000", text: "Gifts Rs 500 - Rs 1000" },
        { href: "/gifts/price-1000-2000", text: "Gifts Rs 1000 - Rs 2000" },
        { href: "/gifts/price-above-2000", text: "Gifts above Rs 2000" },
      ],
    },
    {
      heading: "BY CITIES",
      links: [
        { href: "/send-to/delhi-ncr", text: "Delhi NCR" },
        { href: "/send-to/bengaluru", text: "Bengaluru" },
        { href: "/send-to/mumbai", text: "Mumbai" },
        { href: "/send-to/pune", text: "Pune" },
        { href: "/send-to/hyderabad", text: "Hyderabad" },
        { href: "/send-to/kolkata", text: "Kolkata" },
        { href: "/send-to/chennai", text: "Chennai" },
        { href: "/send-to/lucknow", text: "Lucknow" },
        { href: "/send-to/all-cities", text: "All Other Cities" },
      ],
    },
  ];

  const comboSections = [
    {
      heading: "FEATURED COMBOS",
      links: [
        { href: "/combos/all", text: "All Combos" },
        { href: "/combos/best-sellers", text: "Best Sellers" },
        { href: "/combos/new-arrivals", text: "New Arrivals" },
        { href: "/combos/birthday", text: "Birthday Combos" },
        { href: "/combos/anniversary", text: "Anniversary Combos" },
        { href: "/combos/wedding", text: "Wedding Combos" },
      ],
    },
    {
      heading: "CAKE COMBOS",
      links: [
        { href: "/combos/cake", text: "Cake Combos" },
        { href: "/combos/cake-with-plants", text: "Cake With Plants" },
        { href: "/combos/cake-with-chocolates", text: "Cake With Chocolates" },
        { href: "/combos/cakes-and-guitarist", text: "Cakes and Guitarist" },
      ],
    },
    {
      heading: "FLOWERS COMBOS",
      links: [
        { href: "/combos/flowers", text: "All Flowers Combos" },
        { href: "/combos/flowers-cakes", text: "Flowers N Cakes" },
        { href: "/combos/flowers-chocolates", text: "Flowers N Chocolates" },
        { href: "/combos/flowers-plants", text: "Flowers N Plants" },
        { href: "/combos/flowers-guitarist", text: "Flowers N Guitarist" },
      ],
    },
    // {
    //   heading: "FOR EVERY OCCASION",
    //   links: [
    //     { href: "/combos/birthday-flowers-cakes", text: "Birthday Flowers N Cakes" },
    //     { href: "/combos/birthday-flowers-chocolates", text: "Birthday Flowers N Chocolates" },
    //     { href: "/combos/anniversary-flowers-cakes", text: "Anniversary Flowers N Cakes" },
    //     { href: "/combos/anniversary-flowers-chocolates", text: "Anniversary Flowers N Chocolates" },
    //   ],
    // },
    {
      heading: "FEATURED HAMPERS",
      links: [
        { href: "/hampers/new-arrivals", text: "New Arrivals" },
        { href: "/hampers/birthday", text: "Birthday Hampers" },
        { href: "/hampers/anniversary", text: "Anniversary Hampers" },
        { href: "/hampers/premium", text: "Premium Gift HampersNew" },
        { href: "/hampers/wedding", text: "Wedding Hampers" },
      ],
    },
    {
      heading: "THOUGHTFULLY CURATED HAMPERS",
      links: [
        { href: "/hampers/all", text: "All Gift Hampers" },
        { href: "/hampers/healthy", text: "Healthy Hampers" },
        { href: "/hampers/snacks", text: "Snacks Hampers" },
        { href: "/hampers/grooming", text: "Grooming Hampers" },
        { href: "/hampers/tea-coffee", text: "Tea & Coffee Hampers" },
        { href: "/hampers/gourmet", text: "Gourmet Hampers" },
        { href: "/hampers/chocolate", text: "Chocolate Hampers" },
        { href: "/hampers/fruit", text: "Fruit Hampers" },
        { href: "/hampers/sweet", text: "Sweet Hampers" },
        { href: "/hampers/dry-fruit", text: "Dry Fruit Hampers" },
        { href: "/hampers/diy-kits", text: "DIY Kits Hampers" },
      ],
    },
  ];

  const lifestyleSections = [
    {
      heading: "Trending",
      links: [
        { href: "/lifestyle/mugs", text: "Mugs" },
        { href: "/lifestyle/zodiac-gifts", text: "Zodiac Gifts" },
        { href: "/lifestyle/neon-lights", text: "Neon Lights" },
        { href: "/lifestyle/spiritual-gifts", text: "Spiritual Gifts" },
        { href: "/lifestyle/cushions", text: "Cushions" },
        { href: "/lifestyle/cosmetics-spa", text: "Cosmetics-n-Spa Hampers" },
        { href: "/lifestyle/themed-gifts", text: "Themed Gifts" },
      ],
    },
    // {
    //   heading: "Explore Our",
    //   links: [
    //     { href: "/bestsellers", text: "Bestsellers" },
    //     { href: "/same-day-delivery", text: "Same Day Delivery" },
    //     { href: "/new-arrivals", text: "New Arrivals" },
    //     { href: "/unique-gifts", text: "Unique Gifts" },
    //     { href: "/midnight-delivery", text: "Midnight Delivery" },
    //   ],
    // },
    {
      heading: "Fashion",
      links: [
        { href: "/lifestyle/jewellery", text: "Jewellery" },
        { href: "/lifestyle/handbags-bags", text: "Handbags N Bags" },
        { href: "/lifestyle/perfumes", text: "Perfumes" },
        { href: "/lifestyle/accessories", text: "Accessories" },
        { href: "/lifestyle/accessories-for-him", text: "Accessories for Him" },
        { href: "/lifestyle/accessories-for-her", text: "Accessories for Her" },
        { href: "/lifestyle/watches", text: "Watches" },
      ],
    },
    {
      heading: "Home N Living",
      links: [
        { href: "/lifestyle/home-decor", text: "Home Décor" },
        { href: "/lifestyle/toys-games", text: "Toys N Games" },
        { href: "/lifestyle/kitchen-dining", text: "Kitchen N Dining" },
        { href: "/lifestyle/spiritual-gifts", text: "Spiritual GiftsNEW" },
        { href: "/lifestyle/soft-toys", text: "Soft Toys" },
        { href: "/lifestyle/unusual-gifts", text: "Unusual Gifts" },
        { href: "/lifestyle/electronics", text: "Electronics" },
        { href: "/lifestyle/desktop-gifts", text: "Desktop Gifts" },
        { href: "/lifestyle/garden-decor", text: "Garden Decor" },
        { href: "/lifestyle/linen", text: "Linen" },
        { href: "/lifestyle/silver-gifts", text: "Silver Gifts" },
        { href: "/lifestyle/home-fragrances", text: "Home Fragrances" },
      ],
    },
    {
      heading: "Experiences",
      links: [
        { href: "/lifestyle/balloon-decor", text: "Balloon Décor" },
        { href: "/lifestyle/balloon-bouquets", text: "Balloon Bouquets" },
        { href: "/lifestyle/gifts-guitarist", text: "Gifts N Guitarist" },
        { href: "/lifestyle/digital-gifts", text: "Digital Gifts" },
        { href: "/lifestyle/room-decor", text: "Room Décor" },
        { href: "/lifestyle/balloons", text: "Balloons" },
      ],
    },
    {
      heading: "Gifts For",
      links: [
        { href: "/lifestyle-for/daughter", text: "Daughter" },
        { href: "/lifestyle-for/her", text: "Her" },
        { href: "/lifestyle-for/him", text: "Him" },
        { href: "/lifestyle-for/girlfriend", text: "Girlfriend" },
        { href: "/lifestyle-for/boyfriend", text: "Boyfriend" },
        { href: "/lifestyle-for/wife", text: "Wife" },
        { href: "/lifestyle-for/husband", text: "Husband" },
        { href: "/lifestyle-for/kids", text: "Kids" },
        { href: "/lifestyle-for/new-born", text: "New Born" },
        { href: "/lifestyle-for/girls", text: "Girls" },
        { href: "/lifestyle-for/boys", text: "Boys" },
        { href: "/lifestyle-for/pets", text: "Pets" },
        { href: "/lifestyle-for/pet-lovers", text: "Pet Lovers" },
      ],
    },
    {
      heading: "Shop By Personality",
      links: [
        { href: "/lifestyle/fashionista", text: "Fashionista" },
        { href: "/lifestyle/decor-enthusiast", text: "Decor Enthusiast" },
        { href: "/lifestyle/gadget-guru", text: "Gadget Guru" },
        { href: "/lifestyle/plant-lover", text: "Plant Lover" },
        { href: "/lifestyle/music-fan", text: "Music Fan" },
        { href: "/lifestyle/wanderer", text: "Wanderer" },
      ],
    },
    // {
    //   heading: "Brands Spotlight",
    //   links: [
    //     { href: "/brands/fabindia", text: "FabIndia" },
    //     { href: "/brands/giva", text: "Giva" },
    //     { href: "/brands/ellementry", text: "Ellementry" },
    //     { href: "/brands/carlton-london", text: "Carlton London" },
    //   ],
    // },
  ];

  const globalSections = [
    {
      country: "USA",
      links: [
        { href: "/usa/diwali-gifts", text: "Diwali Gifts USA" },
        { href: "/usa/bhai-dooj-gifts", text: "Bhai Dooj Gifts USA" },
        { href: "/usa/flowers", text: "Flowers USA" },
        { href: "/usa/gifts", text: "Gifts USA" },
        { href: "/usa/personalised-gifts", text: "Personalised Gifts USA" },
        { href: "/usa/cakes", text: "Cakes USA" },
        { href: "/usa/chocolates", text: "Chocolates USA" },
        { href: "/usa/sweets", text: "Sweets USA" },
        { href: "/usa/gift-baskets", text: "Gift Baskets USA" },
        { href: "/usa/roses", text: "Roses USA" },
      ],
    },
    {
      country: "Canada",
      links: [
        { href: "/canada/diwali-gifts", text: "Diwali Gifts Canada" },
        { href: "/canada/bhai-dooj-gifts", text: "Bhai Dooj Gifts Canada" },
        { href: "/canada/flowers", text: "Flowers Canada" },
        { href: "/canada/gifts", text: "Gifts Canada" },
        { href: "/canada/personalised-gifts", text: "Personalised Gifts Canada" },
        { href: "/canada/cakes", text: "Cakes Canada" },
        { href: "/canada/chocolates", text: "Chocolates Canada" },
        { href: "/canada/gift-baskets", text: "Gift Baskets Canada" },
      ],
    },
    {
      country: "Australia",
      links: [
        { href: "/australia/diwali-gifts", text: "Diwali Gifts Australia" },
        { href: "/australia/bhai-dooj-gifts", text: "Bhai Dooj Gifts Australia" },
        { href: "/australia/flowers", text: "Flowers Australia" },
        { href: "/australia/gifts", text: "Gifts Australia" },
        { href: "/australia/personalised-gifts", text: "Personalised Gifts Australia" },
        { href: "/australia/cakes", text: "Cakes Australia" },
        { href: "/australia/chocolates", text: "Chocolates Australia" },
        { href: "/australia/gift-baskets", text: "Gift Baskets Australia" },
      ],
    },
    {
      country: "UK",
      links: [
        { href: "/uk/diwali-gifts", text: "Diwali Gifts UK" },
        { href: "/uk/bhai-dooj-gifts", text: "Bhai Dooj Gifts UK" },
        { href: "/uk/flowers", text: "Flowers UK" },
        { href: "/uk/gifts", text: "Gifts UK" },
        { href: "/uk/personalised-gifts", text: "Personalised Gifts UK" },
        { href: "/uk/cakes", text: "Cakes UK" },
        { href: "/uk/chocolates", text: "Chocolates UK" },
        { href: "/uk/gift-baskets", text: "Gift Baskets UK" },
        { href: "/uk/roses", text: "Roses UK" },
      ],
    },
    {
      country: "UAE",
      links: [
        { href: "/uae/diwali-gifts", text: "Diwali Gifts UAE" },
        { href: "/uae/bhai-dooj-gifts", text: "Bhai Dooj Gifts UAE" },
        { href: "/uae/flowers", text: "Flowers UAE" },
        { href: "/uae/gifts", text: "Gifts UAE" },
        { href: "/uae/personalised-gifts", text: "Personalised Gifts UAE" },
        { href: "/uae/cakes", text: "Cakes UAE" },
        { href: "/uae/chocolates", text: "Chocolates UAE" },
        { href: "/uae/sweets", text: "Sweets UAE" },
        { href: "/uae/gift-baskets", text: "Gift Baskets UAE" },
        { href: "/uae/roses", text: "Roses UAE" },
      ],
    },
    {
      country: "Singapore",
      links: [
        { href: "/singapore/diwali-gifts", text: "Diwali Gifts Singapore" },
        { href: "/singapore/bhai-dooj-gifts", text: "Bhai Dooj Gifts Singapore" },
        { href: "/singapore/flowers", text: "Flowers Singapore" },
        { href: "/singapore/gifts", text: "Gifts Singapore" },
        { href: "/singapore/personalised-gifts", text: "Personalised Gifts Singapore" },
        { href: "/singapore/cakes", text: "Cakes Singapore" },
        { href: "/singapore/chocolates", text: "Chocolates Singapore" },
        { href: "/singapore/sweets", text: "Sweets Singapore" },
        { href: "/singapore/gift-hampers", text: "Gift Hampers Singapore" },
        { href: "/singapore/roses", text: "Roses Singapore" },
      ],
    },
    {
      country: "Other Countries",
      links: [
        { href: "/other-countries/philippines", text: "Philippines" },
        { href: "/other-countries/qatar", text: "Qatar" },
        { href: "/other-countries/saudi-arabia", text: "Saudi Arabia" },
        { href: "/other-countries/indonesia", text: "Indonesia" },
        { href: "/other-countries/new-zealand", text: "New Zealand" },
        { href: "/other-countries/germany", text: "Germany" },
        { href: "/other-countries/malaysia", text: "Malaysia" },
        { href: "/other-countries/netherland", text: "Netherland" },
        { href: "/other-countries/kuwait", text: "Kuwait" },
        { href: "/other-countries/oman", text: "Oman" },
        { href: "/other-countries/ireland", text: "Ireland" },
        { href: "/other-countries/all", text: "Other Countries" },
      ],
    },
  ];

  const newArrivalsTrends = [
    {
      category: "New Arrivals",
      links: [
        { href: "/new-arrivals/perfumes", text: "Perfumes" },
        { href: "/new-arrivals/watches", text: "Watches" },
        { href: "/new-arrivals/marvel-gifts", text: "Marvel Gifts" },
        { href: "/new-arrivals/personalised-plants", text: "Personalised Plants" },
        { href: "/new-arrivals/disney-gifts", text: "Disney Gifts" },
        { href: "/new-arrivals/flower-subscription", text: "Flower Subscription" },
        { href: "/new-arrivals/newly-launched-cakes", text: "Newly Launched Cakes" },
        { href: "/new-arrivals/themed-gifts", text: "Themed Gifts" },
        { href: "/new-arrivals/dried-flowers", text: "Dried Flowers" },
        { href: "/new-arrivals/gourmet-cakes", text: "Gourmet Cakes" },
        { href: "/new-arrivals/home-fragrances", text: "Home Fragrances" },
      ],
    },
    {
      category: "Heartfelt Expressions",
      links: [
        { href: "/expressions/love-romance", text: "Love & Romance" },
        { href: "/expressions/i-am-sorry", text: "I Am Sorry" },
        { href: "/expressions/miss-you", text: "Miss You" },
        { href: "/expressions/best-wishes", text: "Best Wishes" },
        { href: "/expressions/get-well-soon", text: "Get Well Soon" },
        { href: "/expressions/thank-you", text: "Thank You" },
      ],
    },
    {
      category: "Special Occasions",
      links: [
        { href: "/occasions/birthday", text: "Birthday" },
        { href: "/occasions/anniversary", text: "Anniversary" },
        { href: "/occasions/graduations", text: "Graduations" },
        { href: "/occasions/wedding", text: "Wedding" },
        { href: "/occasions/baby-shower", text: "Baby Shower" },
        { href: "/occasions/retirement", text: "Retirement" },
      ],
    },
    {
      category: "Upbeat Trends",
      links: [
        { href: "/trends/health-fitness", text: "Health N Fitness" },
        { href: "/trends/spirituality", text: "Spirituality" },
        { href: "/trends/home-lifestyle", text: "Home N Lifestyle" },
        { href: "/trends/nature-lover", text: "Nature Lover" },
        { href: "/trends/tech-gadgets", text: "Tech N Gadgets" },
        { href: "/trends/wellness-self-care", text: "Wellness N Self-Care" },
        { href: "/trends/fashion-accessories", text: "Fashion N Accessories" },
        { href: "/trends/cooking-enthusiasts", text: "Cooking Enthusiasts" },
      ],
    },
    {
      category: "Gifts for Everyone",
      links: [
        { href: "/gifts/for-daughter", text: "For Daughter" },
        { href: "/gifts/for-her", text: "For Her" },
        { href: "/gifts/for-him", text: "For Him" },
        { href: "/gifts/for-couples", text: "For Couples" },
        { href: "/gifts/for-kids", text: "For Kids" },
        { href: "/gifts/for-friends", text: "For Friends" },
        { href: "/gifts/for-girlfriend", text: "For Girlfriend" },
        { href: "/gifts/for-boyfriend", text: "For Boyfriend" },
        { href: "/gifts/for-mother", text: "For Mother" },
        { href: "/gifts/for-father", text: "For Father" },
        { href: "/gifts/for-wife", text: "For Wife" },
        { href: "/gifts/for-husband", text: "For Husband" },
        { href: "/gifts/for-sister", text: "For Sister" },
        { href: "/gifts/for-brother", text: "For Brother" },
      ],
    },
    {
      category: "City Vibe",
      links: [
        { href: "/cities/delhi-ncr", text: "Delhi NCR" },
        { href: "/cities/bengaluru", text: "Bengaluru" },
        { href: "/cities/mumbai", text: "Mumbai" },
        { href: "/cities/pune", text: "Pune" },
        { href: "/cities/hyderabad", text: "Hyderabad" },
        { href: "/cities/kolkata", text: "Kolkata" },
        { href: "/cities/chennai", text: "Chennai" },
        { href: "/cities/lucknow", text: "Lucknow" },
        { href: "/cities/ahmedabad", text: "Ahmedabad" },
        { href: "/cities/all-other-cities", text: "All Other Cities" },
      ],
    },
  ];
  
  // Calculate width of menu items container
  useEffect(() => {
    if (menuRef.current) {
      setMenuWidth(menuRef.current.offsetWidth);
    }
  }, []);

  // Toggle dropdown visibility
  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <nav
      className="w-full bg-slate-100 shadow-2xl relative z-30"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-14 py-3 hidden lg:flex  justify-between items-center text-sm">
        <ul
          ref={menuRef}
          className="hidden md:flex space-x-5 font-medium relative "
        >
          {items.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(item.name.toLowerCase())}
              className="relative flex items-end"
            >
              <Link href={item.link}>{item.name}</Link>
              <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-700 ${
                  dropdown === item.name.toLowerCase() ? "rotate-180" : ""
                }`}
              />
            </li>
          ))}

          {dropdown && (
            <div
              onMouseLeave={handleMouseLeave}
              className="absolute top-full mt-2 bg-white shadow-lg rounded-md px-6 grid grid-cols-7 gap-5 "
              style={{ width: menuWidth, left: 0 }}
            >
             
             
              {dropdown === "birthday" && (
                <>
                  {birthdaySections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-4 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div>
                    <Image
                      width={300}
                      height={300}
                      className="w-full h-auto pt-6 pb-10"
                      alt="bday-nav"
                      src="/Images/dropdown/bdaynav.webp"
                    />
                  </div>
                </>
              )}
              {dropdown === "anniversary" && (
                <>
                  {anniversarySections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-4 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div>
                    <Image
                      width={300}
                      height={300}
                      className="w-full h-auto pt-6 pb-10"
                      alt="anniversary-nav"
                      src="/Images/dropdown/anniversarynav.webp"
                    />
                  </div>
                </>
              )}
               {dropdown === "cakes" && (
                <>
                  {cakeSections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-5 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div>
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-auto pt-6 pb-10"
                      alt="cakes-nav"
                      src="/Images/dropdown/cakes.webp"
                    />
                  </div>
                </>
              )}
               {dropdown === "flowers" && (
                <>
                  {flowerSections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-5 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div>
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-auto pt-6 pb-10"
                      alt="flower-nav"
                      src="/Images/dropdown/flowers.webp"
                    />
                  </div>
                </>
              )}
               {dropdown === "personalised" && (
                <>
                  {personalizedSections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-5 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div>
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-auto pt-6 pb-10"
                      alt="personalized-nav"
                      src="/Images/dropdown/personalized.webp"
                    />
                  </div>
                </>
              )}
              {dropdown === "plants" && (
                <>
                  {plantSections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-5 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div>
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-auto pt-6 pb-10"
                      alt="plants-nav"
                      src="/Images/dropdown/plants.webp"
                    />
                  </div>
                </>
              )}
               {dropdown === "chocolates" && (
                <>
                  {chocolateSections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-5 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div>
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-auto pt-6 pb-10"
                      alt="chocolates-nav"
                      src="/Images/dropdown/chocolate.webp"
                    />
                  </div>
                </>
              )}
               {dropdown === "combos" && (
                <>
                  {comboSections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-5 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="flex items-start gap-3">
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-auto pt-6 pb-10"
                      alt="combo1-nav"
                      src="/Images/dropdown/combo1.webp"
                    />
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-auto pt-6 pb-10"
                      alt="combo2-nav"
                      src="/Images/dropdown/combo2.webp"
                    />
                  </div>
                </>
              )}
               {dropdown === "lifestyle" && (
                <>
                  {lifestyleSections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-5 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div>
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-auto pt-6 pb-10"
                      alt="perfume-nav"
                      src="/Images/dropdown/perfume.webp"
                    />
                  </div>
                </>
              )}
               {dropdown === "occasions" && (
                <>
                  {festivalSections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-4 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="flex items-start gap-6">
                    <Image
                      width={300}
                      height={300}
                      className="w-full h-auto pt-6 pb-10"
                      alt="bhai-nav"
                      src="/Images/dropdown/bhaidooj.webp"
                    />

                    <Image
                      width={300}
                      height={300}
                      className="w-full h-auto pt-6 pb-10"
                      alt="bday-nav"
                      src="/Images/dropdown/bdaynav.webp"
                    />

                    <Image
                      width={300}
                      height={300}
                      className="w-full h-auto pt-6 pb-10"
                      alt="anniversary-nav"
                      src="/Images/dropdown/anniversarynav.webp"
                    />
                  </div>
                </>
              )}
              {dropdown === "global" && (
                <>
                  {globalSections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-5 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2 text-[#2278b8] ">
                        {section.country.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  
                </>
              )}
              {dropdown === "on trend" && (
                <>
                  {lifestyleSections.map((section, index) => (
                    <div
                      key={index}
                      className={`pt-6 pb-20 ps-5 ${
                        index % 2 === 1 ? "bg-slate-50" : ""
                      }`}
                    >
                      <p className="font-semibold text-sm mb-2">
                        {section.heading.toUpperCase()}
                      </p>
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div>
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-auto pt-6 pb-10"
                      alt="premium-nav"
                      src="/Images/dropdown/premium.webp"
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </ul>
      </div>

      <div className="lg:hidden flex items-center justify-between px-5 md:px-10 py-3 bg-[#7d8035] sticky top-0 z-50">
        <Image
          width={100}
          height={100}
          src="/Images/logo.webp"
          alt="logo"
          className=""
        />
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="lg:hidden bg-white shadow-md space-y-4 p-4 font-medium">
          <li className=" flex items-end">
            <Link href="/diwali">DIWALI</Link>
          </li>
          <li className=" flex items-end">
            <Link href="/women">Women</Link>
          </li>
          <li className=" flex items-end">
            <Link href="/kids">Kids</Link>
          </li>
          <li className=" flex items-end">
            <Link href="/lifestyle">Home & Living</Link>
          </li>
          <li className=" flex items-end">
            <Link href="/beauty">Beauty</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
