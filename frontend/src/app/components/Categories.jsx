import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Categories() {
    const category = [
        { img: '/Images/category/diwali.webp', title: 'Diwali gifts' },
        { img: '/Images/category/bhaidooj.webp', title: 'Bhai Dooj' },
        { img: '/Images/category/bday.webp', title: 'Birthday' },
        { img: '/Images/category/same-day-delivery.webp', title: '2-Hour Delivery' },
        { img: '/Images/category/luxe.webp', title: 'Luxe' },
        { img: '/Images/category/anniversary.webp', title: 'Anniversary' },
        { img: '/Images/category/flowers.webp', title: 'Flowers' },
        { img: '/Images/category/international.webp', title: 'International' },
        { img: '/Images/category/combos.webp', title: 'Combos' },
    ];

    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-5 px-5 md:px-12">
            {category.map((item, index) => (
                <div key={index} className="flex flex-col items-center relative ">
                    <div className='overflow-hidden rounded-lg'>
                    <Image
                        width={200}
                        height={200}
                        src={item.img}
                        alt={item.title}
                        className="transition-transform duration-300 hover:scale-110"
                    />
                    </div>
                    <Link 
                        href={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="bg-white px-3 py-1 md:py-2 font-semibold text-xs lg:text-sm rounded-3xl border border-gray-300 absolute -bottom-4 text-center"
                    >
                        {item.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Categories;
