'use client'
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';

const DropdownMenu = ({ isOpen, options }) => (
  <ul
    className={`absolute z-50 bg-white border shadow-lg transition-opacity duration-300 text-sm ${
      isOpen ? "opacity-100 visible left-0 w-[92.5vw] p-2 top-full" : "opacity-0 invisible"
    }`}
  >
    {options.map((item, index, array) => (
      <li key={item.href}>
        <Link
          href={item.href}
          className={`block px-4 py-3 hover:bg-gray-100 transition-all duration-200 ${
            index !== array.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

function Navbar() {
  const menuItems = [
    {
      name: 'DIWALI',
      options: [
        { href: "/diwali/gifts", label: "Gifts" },
        { href: "/diwali/decorations", label: "Decorations" },
        { href: "/diwali/sweets", label: "Sweets" },
      ],
    },
    {
      name: 'BIRTHDAY',
      options: [
        { href: "/birthday/cakes", label: "Cakes" },
        { href: "/birthday/cards", label: "Cards" },
        { href: "/birthday/gifts", label: "Gifts" },
        
      ],
    },
    {
      name: 'ANNIVERSARY',
      options: [
        { href: "/anniversary/flowers", label: "Flowers" },
        { href: "/anniversary/gifts", label: "Gifts" },
      ],
    },
    {
        name: 'CAKES',
        options: [
          { href: "/anniversary/flowers", label: "Flowers" },
          { href: "/anniversary/gifts", label: "Gifts" },
        ],
      },
      {
        name: 'FLOWERS',
        options: [
          { href: "/anniversary/flowers", label: "Flowers" },
          { href: "/anniversary/gifts", label: "Gifts" },
        ],
      },
      {
        name: 'PERSONALIZED',
        options: [
          { href: "/anniversary/flowers", label: "Flowers" },
          { href: "/anniversary/gifts", label: "Gifts" },
        ],
      },
      {
        name: 'PLANTS',
        options: [
          { href: "/anniversary/flowers", label: "Flowers" },
          { href: "/anniversary/gifts", label: "Gifts" },
        ],
      },
      {
        name: 'CHOCOLATES',
        options: [
          { href: "/anniversary/flowers", label: "Flowers" },
          { href: "/anniversary/gifts", label: "Gifts" },
        ],
      },
      {
        name: 'COMBOS',
        options: [
          { href: "/anniversary/flowers", label: "Flowers" },
          { href: "/anniversary/gifts", label: "Gifts" },
        ],
      },
      {
        name: 'LIFESTYLE',
        options: [
          { href: "/anniversary/flowers", label: "Flowers" },
          { href: "/anniversary/gifts", label: "Gifts" },
        ],
      },
      {
        name: 'OCCASIONS',
        options: [
          { href: "/anniversary/flowers", label: "Flowers" },
          { href: "/anniversary/gifts", label: "Gifts" },
        ],
      },
      {
        name: 'GLOBAL',
        options: [
          { href: "/anniversary/flowers", label: "Flowers" },
          { href: "/anniversary/gifts", label: "Gifts" },
        ],
      },
      {
        name: 'ON TREND',
        options: [
          { href: "/anniversary/flowers", label: "Flowers" },
          { href: "/anniversary/gifts", label: "Gifts" },
        ],
      },
  ];

  const [openDropdown, setOpenDropdown] = useState('DIWALI');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();

    const debounceResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, []);

  const handleMouseEnter = (menuName) => {
    if (isDesktop) setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    if (isDesktop) setOpenDropdown(null);
  };

  const handleDropdownClick = (menuName) => {
    if (!isDesktop) {
      setOpenDropdown((prev) => (prev === menuName ? null : menuName));
    }
  };

  return (
    <div className='bg-white shadow-md'>
      <div className='flex items-center px-12'>
        <ul className='space-x-5 flex py-3 text-sm font-semibold '>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className='relative flex items-center cursor-pointer'
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleDropdownClick(item.name)}
            >
              {item.name}
              <MdKeyboardArrowDown
                className={`ml-1 transition-transform text-lg duration-300 ${
                  openDropdown === item.name ? "rotate-180" : ""
                }`}
              />
              {openDropdown === item.name && (
                <DropdownMenu isOpen={openDropdown === item.name} options={item.options} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
