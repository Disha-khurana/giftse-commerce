import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Showstopper() {

    const flowerData={
        collection: [
            {
                img: '/Images/flowers/collection/Flower-Arrangements.webp',
                title: 'Flower Arrangements',
                link: '/flower-arrangements'
            },
            {
                img: '/Images/flowers/collection/Flower-Bouquets.webp',
                title: 'Flower Bouquets',
                link: '/flower-bouquets'
            },
            {
                img: '/Images/flowers/collection/Flower-in-a-Box.webp',
                title: 'Flower in a Box',
                link: '/flower-in-a-box'
            },
            {
                img: '/Images/flowers/collection/Sleeves.webp',
                title: 'Flower Sleeves',
                link: '/flower-sleeves'
            },
            {
                img: '/Images/flowers/collection/Standing-Bouquets.webp',
                title: 'Standing Bouquets',
                link: '/standing-bouquets'
            },
            {
                img: '/Images/flowers/collection/Zodiac-Flowers.webp',
                title: 'Zodiac Flowers',
                link: '/zodiac-flowers'
            }
        ],
        price: [
            {
                price: 'Under ₹599',
                link: '/under599'
            },
            {
                price: 'Under ₹999',
                link: '/under999'
            },
            {
                price: 'Under ₹1499',
                link: '/under1499'
            },
            {
                price: 'Under ₹1999',
                link: '/under1999'
            },
            {
                price: 'Above ₹2000',
                link: '/above2000'
            }
        ],

    }
  return (
    <div className="space-y-10 py-16 px-10 md:px-20">
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-px bg-[#7d8035] "></div>
                        <h2 className="font-bold text-2xl md:text-3xl text-nowrap text-center">The Showstopper Collection</h2>
                        <div className="w-16 h-px bg-[#7d8035]"></div>
                    </div>
                    <div className="lg:flex items-center gap-12">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5 md:mb-10 lg:mb-0">
                            {flowerData.collection.map((item, index) => (
                                <div key={index}>
                                    <Link href={`/flowers${item.link}`}>
                                        <Image src={item.img} height={500} width={500} className="w-full h-auto rounded-xl" alt={item.title} />

                                    </Link>

                                </div>
                            ))}

                        </div>
                        <div className="w-full relative flex justify-end">
                            <div className="relative w-full h-[600px] md:h-[500px] lg:h-[590px] ">
                                <Image
                                    src='/Images/flowers/flowers.webp'
                                    alt="bg"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="absolute flex flex-col justify-center py-20 inset-0 ">
                                <div className="flex justify-center space-x-4 relative z-10 mb-6 lg:mb-0">
                                    <Image
                                        src="/Images/flowers/choose/spark.svg"
                                        height={500}
                                        width={500}
                                        className="w-10 h-10 "
                                        alt="spark"
                                    />
                                    <h2 className="font-bold text-2xl md:text-3xl text-center ">Shop by Price</h2>
                                    <Image
                                        src="/Images/flowers/choose/spark.svg"
                                        height={500}
                                        width={500}
                                        className="w-10 h-10"
                                        alt="spark"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 relative gap-7 md:mt-10 py-2 px-20 z-20">
                                    {flowerData.price.map((item, index) => (
                                        <Link key={index} href={`/flowers${item.link}`}>
                                            <div className="relative bg-white opacity-60 rounded-3xl p-3 flex md:justify-center md:items-center">
                                                <span className="text-black font-semibold opacity-100 text-xl">{item.price}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>


                            </div>

                        </div>



                    </div>
                </div>

  )
}

export default Showstopper
