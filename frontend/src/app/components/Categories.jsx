import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Categories() {
    const category = [
        { 'img': '/Images/category/diwali.webp', 'title': 'Diwali gifts' },
        { 'img': '/Images/category/bhaidooj.webp', 'title': 'Bhai Dooj' },
        { 'img': '/Images/category/bday.webp', 'title': 'Birthday' },
        { 'img': '/Images/category/same-day-delivery.webp', 'title': '2-Hour Delivery' },
        { 'img': '/Images/category/luxe.webp', 'title': 'Luxe' },
        { 'img': '/Images/category/anniversary.webp', 'title': 'Anniversary' },
        { 'img': '/Images/category/flowers.webp', 'title': 'Flowers' },
        { 'img': '/Images/category/international.webp', 'title': 'International' },
        { 'img': '/Images/category/combos.webp', 'title': 'Combos' },
    ];

    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-7 md:gap-12 lg:gap-8 px-5 md:px-12'>
            {category.map((item, index) => (
                <div key={index} className='flex flex-col items-center relative'>
                    <Image
                        width={200}
                        height={200}
                        src={item.img}
                        alt={item.title}
                        className='rounded-lg'
                    />
                    <Link href={item.title} className='bg-white px-2 md:px-4 font-semibold text-xs md:text-sm text-nowrap py-1 md:py-2 rounded-3xl border border-gray-300 absolute -bottom-3 md:-bottom-6'>
                            {item.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Categories;
