import Image from "next/image";
import Link from "next/link";
import React from "react";

function Anniversary() {
  const items = [
    { image: "/Images/anniversary/Anniversary_Web_Cakes.webp", title: "Cakes" },
    { image: "/Images/anniversary/Anniversary_Web_FlowersV2.webp", title: "FLowers" },
    {
      image:
        "/Images/anniversary/Anniversary_Web_Combos.webp",
      title: "Combos",
    },
    { image: "/Images/anniversary/Anniversary_Web_Home & Living V2.webp", title: "Home & Living" },
    { image: "/Images/anniversary/Anniversary_Web_Premium GiftsV2.webp", title: "Premium Gifts" },
  ];

  return (
    <div className="px-5 md:px-12">
      <div className="flex items-center justify-between mb-12">
      <h3 className=" text-lg md:text-xl lg:text-2xl font-semibold ">
      Anniversary : Rekindle Love
      </h3>
        <Link
          href="/viewall"
          className="bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold"
        >
          VIEW ALL
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5">
        {items.map((item, index) => (
          <div className="flex flex-col items-center gap-7" key={index}>
            <div className="overflow-hidden rounded-full">
              <Image
                src={item.image}
                height={900}
                width={900}
                alt={item.title}
                className="w-[230px] h-[230px] rounded-full transition-transform duration-300 hover:scale-110"
              />
            </div>
            <span className="font-semibold text-lg tracking-normal">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anniversary;
