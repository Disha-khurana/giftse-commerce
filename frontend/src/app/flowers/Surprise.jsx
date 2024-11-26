import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Surprise() {

    const flowerData={
        surprise: [
            {
                img: '/Images/flowers/surprise/Him.webp',
                link: '/him'
            },
            {
                img: '/Images/flowers/surprise/Her.webp',
                link: '/her'
            },
            {
                img: '/Images/flowers/surprise/Them.webp',
                link: '/them'
            }
        ],
    }

  return (
    <div className="space-y-10 relative bg-[url('/Images/flowers/Background.webp')] py-20 rounded-xl px-5 md:px-12">
                    {/* Title Section */}
                    <div className="flex items-center justify-center space-x-4 relative z-10">
                        <Image src="/Images/flowers/choose/spark.svg" height={500} width={500} className="w-10 h-10" alt="spark" />
                        <h2 className="font-bold text-2xl md:text-3xl text-nowrap text-center">Plan The Perfect Surprise</h2>
                        <Image src="/Images/flowers/choose/spark.svg" height={500} width={500} className="w-10 h-10" alt="spark" />
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 relative z-10">
                        {flowerData.surprise.map((item, index) => (
                            <Link href={`/flowers${item.link}`} key={index} className="group relative">
                                <Image
                                    src={item.img}
                                    height={500}
                                    width={500}
                                    alt="title"
                                    className="w-[400px] transform transition-transform duration-300 hover:scale-105 rounded-md"
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Background Image */}
                    <img src="/Images/flowers/suprise-n.svg" className="absolute inset-0 z-0" alt="background" />
                </div>
  )
}

export default Surprise
