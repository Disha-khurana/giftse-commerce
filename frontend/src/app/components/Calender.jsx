import Image from 'next/image';
import React from 'react';

function Calender() {
    const festive = [
        {
            img: '/Images/calender/dhanteras.webp',
            name: 'Dhanteras',
        },
        {
            img: '/Images/calender/halloween.webp',
            name: 'Halloween',
        },
        {
            img: '/Images/calender/diwali.webp',
            name: 'Diwali',
        },
        {
            img: '/Images/calender/bhaidooj.webp',
            name: 'Bhai Dooj',
        },
        {
            img: '/Images/calender/childrenday.webp',
            name: "Children's Day",
        },
    ];

    return (
        <div className="px-5 md:px-12">
            <h3 className="text-xl lg:text-[25px] mb-6 font-semibold tracking-normal">
                Celebrations Calendar
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
                {festive.map((item, index) => (
                    <div key={index} className="flex flex-col items-center  rounded-[26px] shadow-md">
                        <div className='overflow-hidden rounded-t-[26px]'>
                        <Image
                            width={400}
                            height={400}
                            src={item.img}
                            alt={item.name}
                            className=" w-[90%] md:w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                        </div>
                        <h3 className="bg-slate-50 px-2 md:px-4 font-semibold tracking-wide text-xs lg:text-sm py-1 md:py-2 rounded-b-3xl w-full text-center border border-gray-300">
                            {item.name.toUpperCase()}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calender;
