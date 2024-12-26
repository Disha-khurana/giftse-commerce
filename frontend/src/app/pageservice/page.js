'use client'
import Image from 'next/image';
import Link from 'next/link'
import { FaCheckDouble } from "react-icons/fa6";
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';

function ServiceSection() {


    const data = {
        services: [
            {
                id: 1,
                title: "Ocean Freight",
                link: "/Service/OceanFreight",
            },
            {
                id: 2,
                title: "Road Freight",
                link: "/Service/RoadFreight",
            },
            {
                id: 3,
                title: "Packaging",
                link: "/Service/Packaging",
            },
            {
                id: 4,
                title: "Warehousing",
                link: "/Service/Warehousing",
            },
            {
                id: 5,
                title: "Shipping",
                link: "/Service/Shipping",
            },
            {
                id: 6,
                title: "Supply Chain",
                link: "/Service/SupplyChain",
            },
        ],
        options: [
            { data: 'Fusce justo risus placerat in risus eget tincidunt consequat elit.' },
            { data: 'Fusce justo risus placerat in risus eget tincidunt consequat elit.' },
            { data: 'Fusce justo risus placerat in risus eget tincidunt consequat elit.' },
            { data: 'Fusce justo risus placerat in risus eget tincidunt consequat elit.' },
            { data: 'Fusce justo risus placerat in risus eget tincidunt consequat elit.' }
        ]
    };


    return (
        <div className='px-5 md:px-20 lg:px-32 py-20 lg:flex justify-center gap-10'>
            <div className="grid grid-cols-1 lg:p-6 space-y-4 lg:border lg:border-slate-200 rounded-lg shadow-sm lg:w-1/2 h-[500px]  bg-white">
                {data.services.map((item) => (
                    <Link
                        href={item.link}
                        key={item.id}
                        className='flex items-center justify-between rounded-lg px-6 py-3 group bg-slate-50 hover:bg-[#ff5e14] transition-all duration-300 '
                    >
                        <h3
                            className=' group-hover:text-white text-[#003f72] text-base font-semibold text-nowrap tracking-wide'
                        >
                            {item.title}
                        </h3>
                        <div
                            className='relative flex items-center justify-center rounded-full bg-white text-[#003f72] group-hover:bg-[#ff5e14] group-hover:text-white px-6 py-5 '

                        >
                            <FaArrowRight className="absolute" />
                        </div>
                    </Link>
                ))}

            </div>
            <div className='text-[#003f72] w-full space-y-5'>

                <img
                    className="w-full h-auto md:h-[390px] rounded-[40px] mt-8 lg:mt-0"
                    src="https://live.themewild.com/logisto/assets/img/service/single.jpg"
                />

                <h1 className="font-bold text-xl md:text-2xl lg:text-[26px]">
                    Air Freight
                </h1>
                <p className="text-base text-gray-500 leading-relaxed text-justify ">
                    GoodRich Packers and Movers are one of the premium companies in
                    Bangalore, for which there are plenty of reasons. For years, we have
                    been taking care of the needs of our customers through reliable,
                    cost-effective, and efficient relocation solutions. Our staff is
                    made of experienced experts who exercise the utmost care with your
                    belongings. We offer professional services designed to suit the
                    demands of each individual in ensuring that your moving process is
                    stress-free. With ample experience, hassle-free relocation in
                    Bangalore is ensured by GoodRich Packers and Movers.
                </p>


                <p className="text-base text-gray-500 leading-relaxed text-justify">
                    GoodRich Packers and Movers stands in the top list in Bangalore
                    with quality commitment. We are proud of better-and-better
                    equipment, modern techniques, and timely delivery commitment.
                    His transparent pricing with details create a competitive edge
                    that stands him out while earning trust and loyalty from
                    clients. We are keen to work with reliance and integrity that
                    stand out and go beyond people's expectations. Knowing this, we
                    are the best for all kinds of moving needs in Bangalore.
                </p>

                <div className='flex items-center gap-8'>
                    <img src='https://live.themewild.com/logisto/assets/img/service/01.jpg' alt='service1' className='w-full md:w-[300px] lg:w-[400px] h-auto md:h-[250px] rounded-[40px]' />
                    <img src='https://live.themewild.com/logisto/assets/img/service/02.jpg' alt='service1' className='hidden md:block w-[300px] lg:w-[400px] h-[250px] rounded-[40px]' />

                </div>
                <p className="text-base text-gray-500 leading-relaxed text-justify">
                    GoodRich Packers and Movers stands in the top list in Bangalore
                    with quality commitment. We are proud of better-and-better
                    equipment, modern techniques, and timely delivery commitment.
                    His transparent pricing with details create a competitive edge
                    that stands him out while earning trust and loyalty from
                    clients. We are keen to work with reliance and integrity that
                    stand out and go beyond people's expectations. Knowing this, we
                    are the best for all kinds of moving needs in Bangalore.
                </p>
                <div>
                    <h1 className="font-bold text-xl md:text-2xl lg:text-[26px] mb-5">
                        Our Work Process
                    </h1>
                    <p className="text-base text-gray-500 leading-relaxed text-justify mb-5 lg:mb-0 ">
                        GoodRich Packers and Movers are one of the premium companies in
                        Bangalore, for which there are plenty of reasons. For years, we have
                        been taking care of the needs of our customers through reliable,
                        cost-effective, and efficient relocation solutions. Our staff is
                        made of experienced experts who exercise the utmost care with your
                        belongings. We offer professional services designed to suit the
                        demands of each individual in ensuring that your moving process is
                        stress-free. With ample experience, hassle-free relocation in
                        Bangalore is ensured by GoodRich Packers and Movers.
                    </p>
                    {data.options.map((item, index) => (
                        <ul key={index} className='text-base font-semibold space-y-4 mt-2 '>
                            <li className='flex items-center gap-3'><FaCheckDouble className='text-[#ff5e14]' />{item.data}</li>

                        </ul>
                    ))}
                </div>
                <div>
                    <h1 className="font-bold text-xl md:text-2xl lg:text-[26px] mb-5">
                        Why Choose Our Services ?
                    </h1>
                    <p className="text-base text-gray-500 leading-relaxed text-justify ">
                        GoodRich Packers and Movers are one of the premium companies in
                        Bangalore, for which there are plenty of reasons. For years, we have
                        been taking care of the needs of our customers through reliable,
                        cost-effective, and efficient relocation solutions. Our staff is
                        made of experienced experts who exercise the utmost care with your
                        belongings. We offer professional services designed to suit the
                        demands of each individual in ensuring that your moving process is
                        stress-free. With ample experience, hassle-free relocation in
                        Bangalore is ensured by GoodRich Packers and Movers.
                    </p>
                </div>


            </div>
        </div>
    )
}

export default ServiceSection
