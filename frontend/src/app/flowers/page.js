import React from "react";
import Link from "next/link";
import Image from "next/image";
import CategorySlide from './CategorySlide'
import PlantsOccasion from "./FlowersOccasion";
import ChooseUs from "./ChooseUs";
import Range from "./Range";
import Showstopper from "./Showstopper";
import Pairslide from "./Pairslide";
import Colors from "./Colors";
import Autoplay from "./Autoplay";

function Page() {

    const flowerData = {
        country: [
            {
                img: '/Images/flowers/country/Bengaluru.webp',
                title: 'Bengaluru',
                link: '/bengaluru'
            },
            {
                img: '/Images/flowers/country/Chennai.webp',
                title: 'Chennai',
                link: '/chennai'
            },
            {
                img: '/Images/flowers/country/Delhi NCR.webp',
                title: 'Delhi NCR',
                link: '/delhi-ncr'
            },
            {
                img: '/Images/flowers/country/Hyderabad.webp',
                title: 'Hyderabad',
                link: '/hyderabad'
            },
            {
                img: '/Images/flowers/country/Mumbai.webp',
                title: 'Mumbai',
                link: '/mumbai'
            },
            {
                img: '/Images/flowers/country/Pune.webp',
                title: 'Pune',
                link: '/pune'
            }
        ],

        globe: [
            {
                img: '/Images/flowers/globe/Australia.webp',
                title: 'Australia',
                link: '/australia'
            },
            {
                img: '/Images/flowers/globe/Canada.webp',
                title: 'Canada',
                link: '/canada'
            },
            {
                img: '/Images/flowers/globe/UAE.webp',
                title: 'UAE',
                link: '/uae'
            },
            {
                img: '/Images/flowers/globe/UK.webp',
                title: 'UK',
                link: '/uk'
            },
            {
                img: '/Images/flowers/globe/USA.webp',
                title: 'USA',
                link: '/usa'
            },
            {
                img: '/Images/flowers/globe/Worldwide.webp',
                title: 'Worldwide',
                link: '/worldwide'
            }
        ]
    }



    return (
        <div className=" space-y-20">
            <Autoplay />
            <CategorySlide />

            <Range />

            <ChooseUs />

            <div>

                <PlantsOccasion />


                <Colors />

                <Showstopper />
                <Pairslide />

                <div className="relative h-[400px] bg-black bg-cover  bg-no-repeat" style={{ backgroundImage: "url('/Images/flowers/country/countrybg.webp')" }}>
                    {/* Semi-transparent black overlay */}
                    <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

                    {/* Text Section */}
                    <div className="absolute flex items-center justify-center left-[30%] py-20 space-x-4 z-20 ">
                        <div className="w-16 h-px bg-[#7d8035]"></div>
                        <h2 className="font-bold text-3xl text-center text-white">Delivering Blooms Across India</h2>
                        <div className="w-16 h-px bg-[#7d8035]"></div>
                    </div>

                    {/* Grid of Images */}
                    <div className="absolute px-14 py-40 inset-0 grid grid-cols-6 gap-5 z-20">
                        {flowerData.country.map((item, index) => (
                            <Link key={index} href={`/flowers${item.link}`}>
                                <Image src={item.img} height={500} width={500} className="w-full h-auto rounded-3xl" alt={item.title} />
                            </Link>
                        ))}
                    </div>
                </div>

                <Link href='/flowers/preserved'>
                    <Image src='/Images/flowers/globe/Preserved-Flowers.webp' height={3000} width={3000} className="w-full h-auto py-20" alt="flowers" />
                </Link>

                <div className="relative h-[400px] bg-black bg-cover bg-no-repeat" style={{ backgroundImage: "url('/Images/flowers/globe/globe.webp')" }}>
                    {/* Semi-transparent black overlay */}
                    <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

                    {/* Text Section */}
                    <div className="absolute flex items-center justify-center left-[30%] py-20 space-x-4 z-20 ">

                        <Image src="/Images/flowers/choose/spark.svg" height={500} width={500} className="w-10 h-10" alt="spark" />
                        <h2 className="font-bold text-white text-3xl text-center">Delivering Blooms Globally </h2>
                        <Image src="/Images/flowers/choose/spark.svg" height={500} width={500} className="w-10 h-10" alt="spark" />

                    </div>

                    {/* Grid of Images */}
                    <div className="absolute px-14 py-40 inset-0 grid grid-cols-6 gap-5 z-20">
                        {flowerData.globe.map((item, index) => (
                            <Link key={index} href={`/flowers${item.link}`}>
                                <Image src={item.img} height={500} width={500} className="w-full h-auto rounded-3xl" alt={item.title} />
                            </Link>
                        ))}
                    </div>
                </div>



            </div>

        </div>
    );
}

export default Page;
