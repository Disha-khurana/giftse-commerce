'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { SlEarphonesAlt } from "react-icons/sl";
import { IoMail } from "react-icons/io5";

function Footer() {
  const[show,setShow] = useState(false);
  return (
    <>
    <div className=' '>
      
    <div className="px-7 md:px-24 text-[#555] py-14">
      <div className="flex flex-wrap gap-3 md:gap-10 space-y-8 md:space-y-0">
        
        {/* Policy Info Section */}
        <div>
          <h6 className="font-semibold mb-4">Policy Info</h6>
          <ul className="space-y-2">
            <li><a href="/info/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</a></li>
            <li><a href="/info/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/info/terms-of-use" className="hover:underline">Terms of Use</a></li>
            <li><a href="/info/disclaimer" className="hover:underline">Disclaimer</a></li>
          </ul>
        </div>

        {/* About Company Section */}
        <div>
          <h6 className="font-semibold mb-4">About Company</h6>
          <ul className="space-y-2">
            <li><a href="/info/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/info/fnp-team" className="hover:underline">FNP Team</a></li>
            <li><a href="/info/careers" className="hover:underline">Careers</a></li>
            <li><a href="/info/testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="/info/news" className="hover:underline">News Room</a></li>
          </ul>
        </div>

        {/* FNP Business Section */}
        <div>
          <h6 className="font-semibold mb-4">FNP Business</h6>
          <ul className="space-y-2">
            <li><a href="/decoration-services" className="hover:underline">Decoration Services</a></li>
            <li><a href="/corporate" className="hover:underline">Corporate Service</a></li>
            <li><a href="/info/affiliate-program" className="hover:underline">Affiliate Program</a></li>
            <li><a href="/info/retail-stores" className="hover:underline">Retail Stores</a></li>
            <li><a href="/info/franchise-programme" className="hover:underline">Franchise</a></li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div>
          <h6 className="font-semibold mb-4">Need Help?</h6>
          <ul className="space-y-2">
            <li><a href="/info/contact-us" className="hover:underline">Contact Us</a></li>
            <li><a href="/info/faq" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h6 className="font-semibold mb-4">Useful Links</h6>
          <ul className="space-y-2">
            <li><a href="/quotes/wishes-n-messages" className="hover:underline">Quotes N Wishes</a></li>
            <li><a href="/article/flower-astrology" className="hover:underline">Flower Astrology</a></li>
            <li><a href="/info/articles-hub" className="hover:underline">Article Hub</a></li>
            <li><a href="/article/care-guide" className="hover:underline">Care Guide</a></li>
            <li><a href="/blog/" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        <div className="mt-8 lg:ms-32">
        <h6 className="font-semibold mb-4">SUBSCRIBE</h6>
        <form className="relative flex items-center">
      {/* Icon */}
      <IoMail className="absolute left-3 text-gray-500 text-xl" />
      
      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        className="pl-10 pr-20 p-2 w-full border border-gray-400 rounded-l focus:outline-none  bg-gray-200 text-gray-700 placeholder-gray-500"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="absolute right-0 top-0 h-full px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-r"
      >
        SUBMIT
      </button>
    </form>
        <p className="text-gray-400 mt-2">Get updates on promotions and offers coupons.</p>
      </div>
      </div>

      {/* Subscribe Section */}
      
    </div>
  

        <ul className="grid grid-cols-1 md:grid-cols-2 mb-5 lg:mb-0 lg:grid-cols-4 py-6 space-y-4 sm:space-y-0 sm:space-x-4 text-center bg-slate-50">
      <li className="flex flex-col items-center">
        <Image src='/Images/footer/aero.webp' className='mb-2 w-16 h-16' height={900} width={900} alt='aero'/>
        <h6 className="font-semibold">Worldwide Delivery</h6>
        <p className="text-sm">We deliver gifts to over 70 countries</p>
      </li>
      
      <li className="flex flex-col items-center">
      <Image src='/Images/footer/lock.webp' className=' w-20 h-20' height={900} width={900} alt='lock'/>
        <h6 className="font-semibold">100% Safe & Secure Payments</h6>
        <p className="text-sm">Pay using secure payment methods</p>
      </li>
      
      <li className="flex flex-col items-center">
      <Image src='/Images/footer/msg.webp' className='mb-4 w-10 h-10 mt-4' height={900} width={900} alt='msg'/>
        <h6 className="font-semibold">Dedicated Help Center</h6>
        <button type="button" className=" text-blue-500 hover:underline">
          Chat with us
        </button>
      </li>
      
      <li className="flex flex-col items-center ">
        <div className='flex items-center gap-5 mt-6'>
        <Image src='/Images/footer/robo.webp' className='mb-2 w-10 h-10' height={900} width={900} alt='robo'/>
        <Image src='/Images/footer/apple.webp' className='mb-2 w-10 h-10' height={900} width={900} alt='apple'/>
        </div>
        <h6 className="font-semibold">Shop on the go</h6>
        <p className="text-sm">Download mobile app</p>
      </li>
    </ul>

    <section>
      {/* Brands Section */}
      <div className="brands w-full text-center border-y border-white py-4 px-2 md:px-0 md:py-8">
        <img
          src="/Images/footer/brands.webp"
          alt="Brand Logos"
          useMap="#brandMap"
          className="mx-auto h-[36px] lg:h-auto"
        />
        <map name="brandMap">
          <area shape="rect" coords="0,0,120,43" href="https://www.fnpvenues.com/" target="_blank" />
          <area shape="rect" coords="120,0,355,43" href="https://www.fnpweddings.com/" target="_blank" />
          <area shape="rect" coords="355,0,455,43" href="#" />
          <area shape="rect" coords="455,0,539,43" href="https://www.weddingdesignhub.com/" target="_blank" />
          <area shape="rect" coords="539,0,687,43" href="#" />
          <area shape="rect" coords="687,0,758,43" href="https://flagshipbyfnp.com/" target="_blank" />
        </map>
      </div>

      {/* Legal Section */}
      <div className="legal w-full text-center border-b border-white text-xs px-5 py-8 space-y-4">
        <div className="sections">
          Company Name: FNP E Retail Private Limited | CIN: U52100HR2021PTC118882 | Regd. Office Address: Plot No. 75P, Sector-44, Gurgaon, Gurgaon Sector 45, Sector -45, Gurgaon- 122003, Haryana, India
        </div>
        <div className="sections">
          Telephone No.: +91-11-26802680 | E-mail: help@fnp.com | Grievance Resolution Officer Name: Mr. Rahul Mamgain
          <br />
          <a href="/info/csr-policy" target="_blank" className="text-blue-600">
            Corporate Social Responsibility (CSR) Policy
          </a>
        </div>
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center items-center  px-10 md:px-20 py-2 border-t bg-[#393939] border-gray-200 text-sm text-gray-600">
      {/* Copyright Text */}
      <div className='text-nowrap text-white font-semibold '>
      <span className='text-[13px] md:text-base'>© 1994-2024 fnp.com. All rights reserved.</span>
      </div>
      
      {/* Social Icons */}
      <div className="flex  justify-center gap-3 md:gap-5 items-center w-full">
        <span className="text-white font-semibold text-[13px] md:text-base">Keep in touch</span>
        <div className="flex  justify-center items-center  ">
        <a href="https://www.facebook.com/fnpind" aria-label="Visit our Facebook page">
        <Image src='/Images/footer/fb.webp' height={500} width={500} alt='fb' className='w-7 h-7 md:mt-2'/>
        </a>
        <a href="https://twitter.com/fnp_ind" aria-label="Visit our Twitter page">
        <Image src='/Images/footer/twitter.webp' height={500} width={500} alt='twitter' className='w-9 h-8 md:mt-2'/>
        </a>
        <a href="https://in.pinterest.com/fnpind" aria-label="Visit our Pinterest page">
        <Image src='/Images/footer/pinterest.webp' height={500} width={500} alt='pinterest' className='w-7 h-7 mt-1 md:mt-3'/>
        </a>
        <a href="https://www.instagram.com/fernsnpetalsindia/?hl=en" aria-label="Visit our Instagram page">
        <Image src='/Images/footer/insta.webp' height={500} width={500} alt='insta' className='w-7 h-8 md:mt-2'/>
        </a>
        </div>
      </div>

      {/* Payment Gateway Icons */}
      <div className="flex lg:justify-end">
       <Image src='/Images/footer/payment.webp' height={500} width={500} alt='payement' className='w-[80%] h-auto '/>
        
      </div>
    </div>
    
    </div>

<div className='bg-blue-500 flex items-center cursor-pointer gap-2 z-40 text-white rounded-full font-semibold fixed px-4 py-2 right-3 bottom-12' onClick={()=>setShow(true)}>
<SlEarphonesAlt className='font-bold'/>
<span className=''>Chat with us</span>
</div>
{show && (
  <div className=" fixed right-7 md:right-3 bottom-12 z-40 flex flex-col items-center rounded-lg">
  {/* Close Button */}
  <button
        onClick={() => setShow(false)}
        className="absolute top-1 right-1 rounded-full p-1 w-7 h-7 flex items-center justify-center text-slate-900 hover:text-black text-2xl z-50 "
      >
        &times;
      </button>

  {/* Chat Box */}
  <div className="flex flex-col bg-white shadow-lg w-96 max-w-full rounded-lg">
    {/* Header */}
    <div className="mb-4 bg-[#808000] rounded-t-md p-4">
      <img
        src='/Images/footer/msgicon.webp'
        alt="Freshchat"
        className="w-7 h-7 ms-3 mb-2"
      />
      <div className="ml-3">
        <h4 className="text-base font-semibold">Enquiry about existing order</h4>
        <h4 className='text-xs font-semibold '>Currently replying in under 5 minutes</h4>
      </div>
    </div>

    {/* Chat Messages */}
    <div className="flex flex-col space-y-2 bg-gray-50 px-5 rounded-md w-full h-60 overflow-y-auto">
      <div className='flex items-center gap-2 border-b border-b-gray-300 pb-3'>
        <Image src='/Images/footer/bot-icon.webp' width={500} height={500} className='w-9 h-9 rounded-full' alt='icon'/>
        <span className='text-sm text-gray-600 font-semibold'>Muskaan</span>
      </div>
      <div className="text-sm text-gray-700">2 minutes ago</div>

      <div className="bg-blue-100 p-3 rounded-lg">
        <p>Hello!</p>
        <p>Welcome to FNP, India's largest gifting destination.</p>
        <p>I am Muskaan, your gifting assistant. How may I help you today?</p>
      </div>
    </div>

    {/* Response Buttons */}
    <div className="mt-2 px-5">
      <button className="px-2 bg-blue-500 text-white py-2 rounded-lg text-xs hover:bg-blue-600">
        Query about my order
      </button>
    </div>

    {/* Reply Input */}
    <div className="mt-4 w-full p-4">
      <input
        type="text"
        placeholder="Reply here..."
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  </div>
</div>
)}
</>
  )
}

export default Footer