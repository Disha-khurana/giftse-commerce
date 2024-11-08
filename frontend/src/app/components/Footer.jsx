import Image from 'next/image'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className=' '>
      
    <div className="px-10 md:px-24 text-[#555] py-14">
      <div className="flex flex-wrap gap-10 space-y-8 md:space-y-0">
        
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

        <div className="mt-8 ms-32">
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
  

        <ul className="flex flex-wrap justify-around py-6 space-y-4 sm:space-y-0 sm:space-x-4 text-center bg-slate-50">
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
      <div className="brands w-full text-center border-y border-white py-8">
        <img
          src="/Images/footer/brands.webp"
          alt="Brand Logos"
          useMap="#brandMap"
          className="mx-auto"
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
      <div className="legal w-full text-center border-b border-white text-xs py-8 space-y-4">
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

    <div className=" flex text-center items-center justify-between px-10 md:px-20 py-2 border-t bg-[#393939] border-gray-200 text-sm text-gray-600">
      {/* Copyright Text */}
      <div className='text-nowrap text-white font-semibold'>
      <span>© 1994-2024 fnp.com. All rights reserved.</span>
      </div>
      
      {/* Social Icons */}
      <div className="flex  justify-center gap-5 items-center  w-full">
        <span className="text-white font-semibold">Keep in touch</span>
        <div className="flex  justify-center items-center  ">
        <a href="https://www.facebook.com/fnpind" aria-label="Visit our Facebook page">
        <Image src='/Images/footer/fb.webp' height={500} width={500} alt='fb' className='w-7 h-7 mt-2'/>
        </a>
        <a href="https://twitter.com/fnp_ind" aria-label="Visit our Twitter page">
        <Image src='/Images/footer/twitter.webp' height={500} width={500} alt='twitter' className='w-9 h-8 mt-2'/>
        </a>
        <a href="https://in.pinterest.com/fnpind" aria-label="Visit our Pinterest page">
        <Image src='/Images/footer/pinterest.webp' height={500} width={500} alt='pinterest' className='w-7 h-7 mt-2'/>
        </a>
        <a href="https://www.instagram.com/fernsnpetalsindia/?hl=en" aria-label="Visit our Instagram page">
        <Image src='/Images/footer/insta.webp' height={500} width={500} alt='insta' className='w-7 h-8 mt-2'/>
        </a>
        </div>
      </div>

      {/* Payment Gateway Icons */}
      <div className="flex justify-end ">
       <Image src='/Images/footer/payment.webp' height={500} width={500} alt='payement' className='w-[80%] h-auto'/>
        
      </div>
    </div>
    </div>
  )
}

export default Footer