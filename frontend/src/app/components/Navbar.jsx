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
    <nav className="w-full bg-white shadow-2xl relative z-30">
      <div className="container mx-auto px-14 py-3 hidden lg:flex  justify-between items-center text-sm">
       
        <ul
          ref={menuRef}
          className="hidden md:flex space-x-6 font-medium relative "
        >
          <li
            onMouseEnter={() => handleMouseEnter("diwali")}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-end"
          >
            <Link href="/diwali">DIWALI</Link>
            <MdKeyboardArrowDown
              className={`transition-transform text-lg duration-300 ${
                dropdown === "diwali" ? "rotate-180" : ""
              }`}
            />
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("birthday")}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-end"
          >
            <Link href="/birthday">BIRTHDAY</Link>
            <MdKeyboardArrowDown
              className={`transition-transform text-lg duration-300 ${
                dropdown === "birthday" ? "rotate-180" : ""
              }`}
            />
          </li>
          <li 
          onMouseEnter={() => handleMouseEnter("anniversary")}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-end"
          >
            <Link href="/anniversary">ANNIVERSARY</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'anniversary' ? "rotate-180" : ""}`}
              />
          </li>
          <li className=" flex items-end">
            <Link href="/home-living">CAKES</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'women' ? "rotate-180" : ""}`}
              />
          </li>
          <li className=" flex items-end">
            <Link href="/beauty">FLOWERS</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'women' ? "rotate-180" : ""}`}
              />
          </li>
          <li className=" flex items-end">
            <Link href="/kids">PERSONALIZED</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'women' ? "rotate-180" : ""}`}
              />
          </li>
          <li className=" flex items-end">
            <Link href="/home-living">PLANTS</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'women' ? "rotate-180" : ""}`}
              />
          </li>
          <li className=" flex items-end">
            <Link href="/beauty">CHOCOLATES</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'women' ? "rotate-180" : ""}`}
              />
          </li>
          <li className=" flex items-end">
            <Link href="/kids">COMBOS</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'women' ? "rotate-180" : ""}`}
              />
          </li>
          <li className=" flex items-end">
            <Link href="/home-living">LIFESTYLE</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'women' ? "rotate-180" : ""}`}
              />
          </li>
          <li className=" flex items-end">
            <Link href="/beauty">OCCASIONS</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'women' ? "rotate-180" : ""}`}
              />
          </li>
          <li className=" flex items-end">
            <Link href="/kids">GLOBAL</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'women' ? "rotate-180" : ""}`}
              />
          </li>
          <li className=" flex items-end">
            <Link href="/home-living">ON TREND</Link>
            <MdKeyboardArrowDown
                className={`transition-transform text-lg duration-300 ${dropdown === 'women' ? "rotate-180" : ""}`}
              />
          </li>

       
          {dropdown && (
            <div
              className="absolute top-full mt-2 bg-white shadow-lg rounded-md p-4 grid grid-cols-2 gap-4"
              style={{ width: menuWidth, left: 0 }}
            >
              {dropdown === "diwali" && (
                <>
                  <div>
                    <p className="font-semibold mb-2">Topwear</p>
                    <Link
                      href="/men/tshirts"
                      className="block py-1 text-sm text-gray-600"
                    >
                      T-Shirts
                    </Link>
                    <Link
                      href="/men/shirts"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Shirts
                    </Link>
                    <Link
                      href="/men/sweatshirts"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Sweatshirts
                    </Link>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Bottomwear</p>
                    <Link
                      href="/men/jeans"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Jeans
                    </Link>
                    <Link
                      href="/men/trousers"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Trousers
                    </Link>
                    <Link
                      href="/men/shorts"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Shorts
                    </Link>
                  </div>
                </>
              )}
              {dropdown === "women" && (
                <>
                  <div>
                    <p className="font-semibold mb-2">Topwear</p>
                    <Link
                      href="/women/tops"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Tops
                    </Link>
                    <Link
                      href="/women/kurtis"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Kurtis
                    </Link>
                    <Link
                      href="/women/blouses"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Blouses
                    </Link>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Bottomwear</p>
                    <Link
                      href="/women/skirts"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Skirts
                    </Link>
                    <Link
                      href="/women/jeans"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Jeans
                    </Link>
                    <Link
                      href="/women/shorts"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Shorts
                    </Link>
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
            <Link href="/home-living">Home & Living</Link>
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
