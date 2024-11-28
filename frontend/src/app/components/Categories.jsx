import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Categories() {
    const category = [
        { img: '/Images/category/bday.webp', title: 'Birthday' ,link:'/birthday'},
        { img: '/Images/category/same-day-delivery.webp', title: '2-Hour Delivery',link:'/delivery' },
        { img: '/Images/category/luxe.webp', title: 'Luxe',link:'/luxe' },
        { img: '/Images/category/anniversary.webp', title: 'Anniversary',link:'/anniversary' },
        { img: '/Images/category/flowers.webp', title: 'Flowers',link:'/flowers' },
        { img: '/Images/category/international.webp', title: 'International',link:'/global' },
        { img: '/Images/category/combos.webp', title: 'Combos',link:'/combos' },
        { img: '/Images/category/zodiac-saggitarius_Squircle-27-11-24.webp', title: 'Zodiac Gifts',link:'/lifestyle/zodiac-gifts' },
    ];

    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-5 px-5 md:px-12 ">
            {category.map((item, index) => (
                <Link key={index} href={item.link}>
                <div className="flex flex-col items-center relative mb-6 lg:mb-0">
                    <div className='overflow-hidden rounded-lg'>
                    <Image
                        width={200}
                        height={200}
                        src={item.img}
                        alt={item.title}
                        className="transition-transform duration-700 hover:scale-110"
                    />
                    </div>
                    <Link 
                        href={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="bg-white px-3 py-1 md:py-2 font-semibold text-[0.65rem] md:text-xs lg:text-sm rounded-3xl border border-gray-300 absolute -bottom-4 text-center"
                    >
                        {item.title}
                    </Link>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default Categories;
