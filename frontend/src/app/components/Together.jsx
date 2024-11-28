import Image from "next/image";
import Link from "next/link";
import React from "react";

function Together() {
  const together = [
    {
      src: "/Images/together/Gift Hampers.webp",
      width: 900,
      height: 900,
      link:'/gifts',
      title: "Gift Hampers",
    },
    {
      src: "/Images/together/Flowers & Cakes.webp",
      width: 900,
      height: 900,

      title: "Flowers & Cakes",
      link:'/birthday/flowers-cakes'
    },
    {
      src: "/Images/together/Chocolates Combos .webp",
      width: 900,
      height: 900,

      title: "Chocolates Combos",
      link:'/chocolates'
    },
    {
      src: "/Images/together/Plants Combo.webp",
      width: 900,
      height: 900,
      link:'/plants',
      title: "Plants Combo",
    },
    {
      src: "/Images/together/Flowers & Chocolates.webp",
      width: 900,
      height: 900,
      link:'/birthday/flowers-chocolates',
      title: "Flowers & Chocolates",
    },
  ];


  return (
    <div className="px-5 md:px-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className=" text-lg md:text-xl lg:text-2xl font-semibold ">
          Gifts that Go together
        </h3>
        <Link
          href="/viewall"
          className="bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold"
        >
          VIEW ALL
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-7">
        {together.map((item, index) => (
         
            <Link key={index} href={item.link}>
            <div  className="relative overflow-hidden ">
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.title} // Use dynamic alt based on title
                className={`w-full h-[270px] rounded-xl object-cover transition-transform duration-700 ease-in-out transform hover:scale-110`}
              />
              <div className="absolute inset-0 top-56 md:top-52 bg-[rgba(0,0,0,0.30)] z-40 transform transition duration-500 ease-in-out">
                <span className="text-white font-serif text-base md:text-xl flex items-center justify-center pt-2 md:pt-4">{item.title}</span>
              </div>
            </div>
            </Link>
         
        ))}
      </div>

    </div>
  );
}

export default Together;
