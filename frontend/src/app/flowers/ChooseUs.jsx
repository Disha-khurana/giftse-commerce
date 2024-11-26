import Image from 'next/image'
import React from 'react'

function ChooseUs() {

    const flowerData={
        chooseUs: [
            {
                img: "/Images/flowers/choose/Premium-Flowers.svg",
                title: "Premium Flowers",
            },
            {
                img: "/Images/flowers/choose/Handcrafted-arrangements.svg",
                title: "Handcrafted Arrangements",
            },
            {
                img: "/Images/flowers/choose/Hassle-Free-Delivery.svg",
                title: "Hassle-Free Delivery",
            },
            {
                img: "/Images/flowers/choose/Customer-Support.svg",
                title: "Customer Support",
            },
        ],

    }
  return (
    <div className="space-y-10 bg-[url('/Images/flowers/bg-img.webp')] px-5 py-9 rounded-xl">
                <div className="flex items-center justify-center space-x-4">
                    <Image src='/Images/flowers/choose/spark.svg' height={500} width={500} className="w-10 h-10" alt="spark" />
                    <h2 className="font-bold text-2xl md:text-3xl text-center">Why Choose FNP ?</h2>
                    <Image src='/Images/flowers/choose/spark.svg' height={500} width={500} className="w-10 h-10" alt="spark" />
                </div>
                <div className="flex flex-wrap  gap-20 justify-center ">
                    {flowerData.chooseUs.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <Image src={item.img} height={500} width={500} className="w-20 h-20" />
                            <p className=" font-normal text-xl font-serif">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default ChooseUs
