import Image from "next/image";
import Link from "next/link";
import React from "react";

function Collection() {
  const items = [
    { image: "/Images/collection/Ckaes.webp", title: "Cakes" },
    { image: "/Images/collection/FLowers.webp", title: "Flowers" },
    {
      image:
        "/Images/collection/fabessentials-sea-breeze-spa-body-care-gift-box.webp",
      title: "Combos",
    },
    { image: "/Images/collection/Experiences.webp", title: "Experience" },
    { image: "/Images/collection/goodluck.webp", title: "Plants" },
    {
      image: "/Images/collection/personalised-bluetooth-led-speaker.webp",
      title: "Personalised",
    },
  ];

  return (
    <div className="px-5 md:px-12">
      <div className="flex items-center justify-between mb-12">
      <h3 className=" text-lg md:text-xl lg:text-2xl font-semibold ">
        The 2024 Birthday Collection
      </h3>
        <Link
          href="/viewall"
          className="bg-[#7d8035] py-2 text-xs lg:text-sm px-3 rounded-md text-white font-semibold"
        >
          VIEW ALL
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item, index) => (
          <div className="flex flex-col items-center gap-3 md:gap-7 mb-4 lg:mb-0" key={index}>
            <div className="overflow-hidden rounded-full ">
              <Image
                src={item.image}
                height={900}
                width={900}
                alt={item.title}
                className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-cover rounded-full transition-transform duration-700 hover:scale-110"
              />
            </div>
            <span className="font-semibold text-base md:text-lg tracking-normal">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
