'use client'
import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { IoStarHalfSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import Image from 'next/image';
import { SlCalender } from "react-icons/sl";
import { IoStar } from "react-icons/io5";
import { RxCross2 } from 'react-icons/rx';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { data } from '../../components/common/Alldata';
import Link from 'next/link';

function GiftCompo({ slug }) {
  const product = data.all.find(item => item.slug === slug);
  console.log(product)
  const [mainImage, setMainImage] = useState(product?.image[0]);
  const [imgindex, setimgindex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("WITH EGG");
  const [openSection, setOpenSection] = useState('');
  const [showTnc, setShowTnc] = useState(null);

  const handleImageClick = (index) => {
    setimgindex(index);
    setMainImage(product?.image[index]);
    setSelectedIndex(index);
  };

  const handleToggle = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleTnc = (offerIndex) => {
    setShowTnc(showTnc === offerIndex ? null : offerIndex);
  };
  const goDownHandler = () => {
    const offerElement = document.getElementById('offer');
    if (offerElement) {
      offerElement.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',     // Align the element to the top of the viewport
      });
    }
  };

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? '' : sectionName); // Toggle the section
  };

  const goDownHandle = () => {
    const offer = document.getElementById('details');
    if (offer) {
      offer.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',     // Align the element to the top of the viewport
      });
    }
  };

  const product_details = [
    {
      id: 1,
      image: [
        "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_1.webp",
        "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_2.webp",
        "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_3.webp",
        "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_4.webp",
        "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_5.webp",
      ],
      link: "/decorated-chocolate-truffle-cake-half-kg",
      title: "Decorated Chocolate Truffle Cake Half Kg",
      rate: "4.5",
      price: "575",
      review: "73 reviews",
      delivery: "Today",
    },
    {
      id: 2,
      image: [
        "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_1.webp",
        "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_2.webp",
        "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_3.webp",
        "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_4.webp",
        "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_5.webp",
      ],
      link: "/fruit-overload-cake-half-kg",
      title: "Overload Fruit Cake Half Kg",
      rate: "5.0",
      price: "725",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      id: 3,
      image: [
        "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_1.webp",
        "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_2.webp",
        "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_3.webp",
        "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_4.webp",
        "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_5.webp",
      ],
      link: "/fudge-brownie-cake-half-kg",
      title: "Fudge Brownie Cake Half Kg",
      rate: "4.5",
      price: "675",
      review: "273 reviews",
      delivery: "Today",
    },
    {
      image: [
        "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_1.webp",
        "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_2.webp",
        "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_3.webp",
        "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_4.webp",
        "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_5.webp",
      ],
      link: "/anniversary-special-chocolate-cake-half-kg",
      title: "Anniversary Special Chocolate Cake- Half Kg",
      rate: "4.9",
      price: "725",
      review: "28 reviews",
      delivery: "Today",
    },
    {
      id: 4,
      image: [
        "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_1.webp",
        "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_2.webp",
        "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_3.webp",
        "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_4.webp",
        "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_5.webp",
      ],
      link: "/love-for-pastel-carnations-bouquet",
      title: "Love For Pastel Carnations Bouquet",
      rate: "4.8",
      price: "949",
      review: "92 reviews",
      delivery: "Today",
    },

  ]


  return (
    <div >
      {product ? (
        <div>
          <div className="flex px-48 items-start gap-6 pt-20 pb-12">
            <div className="flex flex-col sticky top-32 mb-6">

              <div className="w-full max-w-lg">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: product.title,
                      isFluidWidth: true,
                      src: product.image[imgindex],
                    },
                    largeImage: {
                      src: product.image[imgindex],
                      width: 1500,
                      height: 1500,
                    },
                    enlargedImageContainerStyle: { zIndex: 15 },
                  }}
                />
              </div>

              {/* Thumbnails */}
              <div className="flex max-w-lg w-full gap-4 mt-4">
                {product.image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.title} thumbnail ${index + 1}`}
                    onClick={() => handleImageClick(index)}
                    className={`w-24 h-20 object-cover rounded cursor-pointer transition-transform duration-300 ${mainImage === img ? 'ring-2 ring-[#707428] scale-110' : ''
                      }`}
                  />
                ))}
              </div>
            </div>

            <div className='space-y-6'>

              <div>
                <h1 className="text-2xl lg:text-3xl font-semibold text-nowrap mb-2">{product.title}</h1>
                <div className='flex items-center gap-2 mb-2'>
                  {product.rate ?
                    <button className='  gap-1 rounded-full flex items-center font-semibold text-base'> {product.rate}
                      <div className='text-[#707428] flex'>
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalfSharp />
                      </div>|
                    </button> : ""
                  }
                  <p className='font-normal text-blue-600 text-base'> {product.review}</p>
                </div>
                <div className='flex items-center'>
                  <div>
                    <p className='text-3xl gap-1 flex items-start'> ₹<span className='text-5xl'>{product.price}</span></p>
                    <span className='ms-5 text-sm text-gray-500'>Inclusive of all taxes</span>

                  </div>

                  <div onClick={goDownHandler} className='bg-gray-500 cursor-pointer flex items-center -ms-8 text-white rounded p-1'>
                    <FaTag />
                    <span className='text-xs ps-1'>Offers Available </span>
                    <MdKeyboardArrowDown />
                  </div>
                  <div onClick={goDownHandle} className=' cursor-pointer flex items-center font-semibold text-blue-500 rounded p-1'>

                    <span className='text-xs ps-1'>View more Details</span>
                    <MdKeyboardArrowDown />
                  </div>

                </div>





              </div>

              <div >
                <span className='text-gray-700 text-base font-semibold '>Pick an Upgrade</span>
                <div className='flex items-center gap-3'>
                  <div className=" mt-2">

                    <img src={product?.image[0]} alt="Product Image" className="w-20 h-20 object-cover rounded ring-1 ring-[#707428] " />
                    <div className='flex flex-col text-sm mt-1'>
                      <h6 className='text-gray-500 font-semibold'>1/2 kg</h6>
                      <h6 className='font-[500]'>₹575</h6>
                    </div>
                  </div>
                  <div className=" mt-2">

                    <img src={product?.image[0]} alt="Product Image" className="w-20 h-20 object-cover rounded ring-1 ring-[#707428] " />
                    <div className='flex flex-col text-sm mt-1'>
                      <h6 className='text-gray-500 font-semibold'>1 kg</h6>
                      <h6 className='font-[500]'>₹1025</h6>
                    </div>
                  </div>
                  <div className=" mt-2">

                    <img src={product?.image[0]} alt="Product Image" className="w-20 h-20 object-cover rounded ring-1 ring-[#707428] " />
                    <div className='flex flex-col text-sm mt-1'>
                      <h6 className='text-gray-500 font-semibold'>2 kg</h6>
                      <h6 className='font-[500]'>₹2375</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center gap-5'>
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      name="pincode"
                      placeholder="*Enter delivery location"
                      className="border border-orange-500 focus:outline-none focus:ring-none shadow rounded pl-10 pr-2 py-2" // Add left padding to make space for the flag
                    />
                    <Image
                      src="/Images/country/flag.webp"
                      height={500}
                      width={500}
                      className="h-6 w-6  absolute left-2 top-1/2 transform -translate-y-1/2"
                      alt="flag"
                    />
                  </div>
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Select Delivery Date"
                      className="border border-gray-400 focus:outline-none focus:ring-none rounded pl-10 pr-1 py-2"
                    />
                    <SlCalender className='absolute left-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-400' />

                  </div>


                </div>

                <div className="w-full max-w-xs mx-auto">
                  <div className="flex items-center justify-between bg-gray-100 rounded-md p-1 cursor-pointer">
                    {/* Radio for "With Egg" */}
                    <label className="flex-1 text-center py-1 px-4 rounded-md cursor-pointer transition-all duration-300">
                      <input
                        type="radio"
                        name="cakeVariant"
                        value="WITH EGG"
                        checked={selectedOption === "WITH EGG"}
                        onChange={handleToggle}
                        className="hidden"
                      />
                      <div
                        className={`transition-all duration-300 rounded-md ${selectedOption === "WITH EGG" ? "bg-orange-500 text-white p-2" : "bg-transparent text-gray-600"}`}
                      >
                        With Egg
                      </div>
                    </label>

                    {/* Radio for "Eggless" */}
                    <label className="flex-1 text-center py-1 px-4 rounded-md cursor-pointer transition-all duration-300">
                      <input
                        type="radio"
                        name="cakeVariant"
                        value="EGGLESS"
                        checked={selectedOption === "EGGLESS"}
                        onChange={handleToggle}
                        className="hidden"
                      />
                      <div
                        className={`transition-all duration-300 rounded-md ${selectedOption === "EGGLESS" ? "bg-green-500 text-white p-2" : "bg-transparent text-gray-600"}`}
                      >
                        Eggless
                      </div>
                    </label>
                  </div>

                </div>

              </div>
              <div id='offer' className='flex items-center gap-5 w-full '>
                <button className='bg-[#707428] py-3 w-1/2 justify-center text-white flex items-center gap-1'><IoMdCart className='text-xl' />ADD TO CART</button>
                <button className='bg-orange-600 py-3 w-1/2 justify-center text-white flex items-center gap-1'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{ width: '25px', height: '25px', fill: 'white' }}
                  >
                    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                  </svg>
                  BUY NOW</button>
              </div>
              <div className='pt-10 px-4 py-5' >
                <h5 className='text-xl font-semibold border-b border-b-slate-300 pb-2'>Offers Available</h5>
                <div className="text-justify text-slate-800 w-full text-xs md:text-base leading-relaxed">
                  <div className="bank-offers">
                    <table className=" table-auto">
                      <tbody>
                        {/* First Offer */}
                        <tr >
                          <td className="p-2">
                            <img
                              className="offer-images w-[60%] h-auto"
                              src="/Images/logos/fnp.webp"
                              alt="Offer 1"
                            />
                          </td>
                          <td className="p-2">
                            <span>15% Off* on 1st Order, Code: FIRSTORDER</span>
                          </td>
                          <td className="p-2">
                            <div className="offer-tnc relative">
                              <span
                                className="offer-tnc-txt text-blue-500 cursor-pointer"
                                onClick={() => toggleTnc(1)}
                              >
                                *T&C
                              </span>
                              {showTnc === 1 && (
                                <div className="offer-tnc-popup absolute z-30 -right-20 bg-white shadow-lg p-4 rounded-lg w-[550px]">
                                  <i
                                    className="material-icons close-tnc absolute top-3 right-3 text-gray-900 cursor-pointer"
                                    onClick={() => setShowTnc(null)}
                                  >
                                    <RxCross2 />
                                  </i>
                                  <div className="offer-tnc-head font-bold text-lg text-gray-900 ">Terms & Conditions</div>
                                  <div className="offer-terms mt-2">
                                    <ul className="list-disc pl-6 text-gray-900">
                                      <li>Applicable only for New Users, on their 1st transaction</li>
                                      <li>Maximum amount of discount that can be availed by using this discount is INR 500</li>
                                      <li>Code required to avail the discount: FIRSTORDER</li>
                                      <li>Users will Get Upto 15% Off* (max.)</li>
                                      <li>Minimum Order Value required is INR 999</li>
                                      <li>Get 10% Off when your order value is between INR 999 - 1499</li>
                                      <li>Get 12% Off when your order value is between INR 1500 - 1999</li>
                                      <li>Get 15% Off when your order value is INR 2000 & above</li>
                                      <li>Offer can be availed only once per user</li>
                                      <li>Offer not applicable on International Products</li>
                                      <li>Offer is valid on the already discounted products also</li>
                                      <li>In case any order gets cancelled, the Coupon Code cannot be availed again</li>
                                      <li>Offer is valid only on www.fnp.com & not on FNP App</li>
                                    </ul>
                                  </div>
                                </div>
                              )}

                            </div>
                          </td>
                        </tr>

                        {/* Second Offer */}
                        <tr>
                          <td className="p-2">
                            <img
                              className="offer-images w-1/2 h-auto"
                              src="/Images/logos/slice.webp"
                              alt="Offer 2"
                            />
                          </td>
                          <td className="p-2">
                            <span>Get up to ₹250 cashback through slice UPI</span>
                          </td>
                          <td className="p-2">
                            <div className="offer-tnc relative">
                              <span
                                className="offer-tnc-txt text-blue-500 cursor-pointer"
                                onClick={() => toggleTnc(2)}
                              >
                                *T&C
                              </span>
                              {showTnc === 2 && (
                                <div className="offer-tnc-popup absolute z-30 bg-white shadow-lg p-4 rounded-lg w-[550px] -right-20">
                                  <i
                                    className="material-icons close-tnc absolute top-3 right-3 text-gray-900 cursor-pointer"
                                    onClick={() => setShowTnc(null)}
                                  >
                                    <RxCross2 />
                                  </i>
                                  <div className="offer-tnc-head font-bold text-lg text-gray-900">Terms & Conditions</div>
                                  <div className="offer-terms mt-2">
                                    <ul className="list-disc pl-6 text-gray-900">
                                      <li>Applicable on payments done using slice UPI only [@slice/@sliceaxis]</li>
                                      <li>Not applicable on slice card transactions</li>
                                      <li>No minimum order value</li>
                                      <li>Offer valid till 20th November 2024</li>
                                      <li>User has to collect cashback on slice app reward section after the successful transaction</li>
                                      <li>Cashback will be credited to user's slice account</li>
                                      <li>FNP & Slice reserve the right to modify/change/deactivate the offer at any time without any prior information.</li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>

                        {/* Third Offer */}
                        <tr>
                          <td className="p-2">
                            <img
                              className="offer-images w-[60%] h-auto"
                              src="/Images/logos/CRED Logo.webp"
                              alt="Offer 3"
                            />
                          </td>
                          <td className="p-2">
                            <span>Cred - Get cashback up to INR 200</span>
                          </td>
                          <td className="p-2">
                            <div className="offer-tnc relative">
                              <span
                                className="offer-tnc-txt text-blue-500 cursor-pointer"
                                onClick={() => toggleTnc(3)}
                              >
                                *T&C
                              </span>
                              {showTnc === 3 && (
                                <div className="offer-tnc-popup absolute z-30 bg-white shadow-lg p-4 rounded-lg w-[550px] -right-20">
                                  <i
                                    className="material-icons close-tnc absolute top-3 right-3 text-gray-900 cursor-pointer"
                                    onClick={() => setShowTnc(null)}
                                  >
                                    <RxCross2 />
                                  </i>
                                  <div className="offer-tnc-head font-bold text-lg text-gray-900">Terms & Conditions</div>
                                  <div className="offer-terms mt-2">
                                    <ul className="list-disc pl-6 text-gray-900">
                                      <li>Min assured cashback of INR 10 per user</li>
                                      <li>Valid till 30th Nov 2024</li>
                                      <li>Offer is valid once per user per month</li>
                                      <li>Min order value is INR 899</li>
                                      <li>Claim cashback on CRED app after successful transaction</li>
                                      <li>Cashback goes into your CRED wallet/balance</li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>

                        {/* Fourth Offer */}
                        <tr >
                          <td className="p-2">
                            <img
                              className="offer-images w-[60%] h-auto"
                              src="/Images/logos/aritel-logo.webp"
                              alt="Offer 4"
                            />
                          </td>
                          <td className="p-2">
                            <span>Airtel Payments Bank - Flat 10% off up to Rs.200</span>
                          </td>
                          <td className="p-2">
                            <div className="offer-tnc relative">
                              <span
                                className="offer-tnc-txt text-blue-500 cursor-pointer"
                                onClick={() => toggleTnc(4)}
                              >
                                *T&C
                              </span>
                              {showTnc === 4 && (
                                <div className="offer-tnc-popup absolute z-30 bg-white shadow-lg p-4 rounded-lg w-[550px] -right-20">
                                  <i
                                    className="material-icons close-tnc absolute top-3 right-3 text-gray-900 cursor-pointer"
                                    onClick={() => setShowTnc(null)}
                                  >
                                    <RxCross2 />
                                  </i>
                                  <div className="offer-tnc-head font-bold text-lg text-gray-900">Terms & Conditions</div>
                                  <div className="offer-terms mt-2">
                                    <ul className="list-disc pl-6 text-gray-900">
                                      <li>The offer is available only for Airtel Payments Bank savings account customers.</li>
                                      <li>Maximum cashback amount per transaction will be Rs. 200.</li>
                                      <li>Limited period offer, offer duration: from 1st to 30th Nov 2024.</li>
                                      <li>User can avail the offer 1 time during the offer period.</li>
                                      <li>Offer is applicable for all users of Airtel Payments Bank on FNP.</li>
                                      <li>Minimum purchase of Rs. 999 is mandatory for the customer to be eligible for the offer.</li>
                                      <li>Cashback would be credited within 72 business hours in the user's Airtel Payments Bank wallet or savings account.</li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>







          <div className='px-48 py-12 bg-slate-50' >
            <h1 className='font-semibold pb-5 text-2xl'> Recently Viewed by You</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3  lg:grid-cols-5'>

              {product_details.map((item, index) => (
                <Link href={`/gift${item.link}`}>
                  <div key={index} className='space-y-1 bg-white p-3 '>
                    <Image src={item.image[0]} height={500} width={500} alt={item.title} />
                    <span className='flex justify-center items-center text-slate-800 text-base font-semibold pt-2' id='details'>{item.title}</span>
                    <span className='font-semibold flex items-start'>₹<span className='text-lg'>{item.price}</span></span>
                    <p className='text-xs text-slate-700'>Earliest Delivery:<span className='text-slate-900'>{item.delivery}</span></p>
                    <div className='flex items-center justify-between text-xs'>
                    <span>{item.review}</span>
                      <h4 className='text-white bg-green-700 p-1  rounded flex items-center gap-1'>{item.rate}<IoStarHalfSharp/></h4>
                      
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className='px-48 py-10' >
            <h1 className='font-bold text-2xl mb-4'>Important Information:</h1>
            <p className='font-bold mb-2'>Directions:</p>
            {product.storage ?
              <ul className="list-disc pl-5 space-y-2 mb-4 border-b border-b-slate-400 pb-4">
                {product.storage.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul> : ""}

            <p className="font-bold mb-2">Product Description:</p>
            {product.delivery.map((item, index) => (
              <p key={index} className='mb-4 border-b border-b-slate-400 pb-4'>{item}</p>
            ))}

            <div className='border-b border-b-slate-400 pb-4 mb-2'>
              <p className="font-bold mb-2">Product Information:</p>
              <div className="flex flex-wrap gap-4">
                {/* Care dropdown */}
                <div className="bg-slate-100 border border-slate-200 p-2 w-full md:w-1/2">
                  <p
                    onClick={() => toggleSection('care')}
                    className="cursor-pointer flex justify-between items-center text-lg font-semibold">
                    Care
                    <MdKeyboardArrowDown />
                  </p>
                  {openSection === 'care' && (
                    <div className="mt-2">
                      {product.storage && (
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          {product.storage.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {product.plant_care_instructions && (
                        <>
                          <p className="font-bold mb-2">Plant Care Instructions:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            {product.plant_care_instructions.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      {product.plant_care && (
                        <>
                          <p className="font-bold mb-2">Plant Care:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            {product.plant_care.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      {product.cake_care && (
                        <>
                          <p className="font-bold mb-2">Cake Care:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            {product.cake_care.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Storage dropdown */}
                <div className="bg-slate-100 border border-slate-200 p-2 w-full md:w-1/2">
                  <p
                    onClick={() => toggleSection('additional')}
                    className="cursor-pointer text-lg flex justify-between items-center font-semibold">
                    Additional Details
                    <MdKeyboardArrowDown />
                  </p>
                  {openSection === 'additional' && (
                    <div className="mt-2">
                      {product.personalisation ?
                        <>
                          <p className="font-bold mb-2">Personalisation:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            {product.personalisation.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </> : ""}

                      {product.price_breakup ?
                        <>
                          <p className="font-bold mb-2">Price Breakup:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            {product.price_breakup.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </> : ""}

                      {product.flowers_trivia ?
                        <>
                          <p className="font-bold mb-2">Flowers Trivia:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            {product.flowers_trivia.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </> : ""}
                      {product.plant_trivia ?
                        <>
                          <p className="font-bold mb-2">Plants Trivia:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            {product.plant_trivia.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </> : ""}
                    </div>
                  )}
                </div>



                <div className="bg-slate-100 border border-slate-200 p-2 w-full md:w-1/2">
                  <p
                    onClick={() => toggleSection('plant_care_instructions')}
                    className="cursor-pointer flex justify-between items-center text-lg font-semibold">
                    Ingredients
                    <MdKeyboardArrowDown />
                  </p>
                  {openSection === 'plant_care_instructions' && (
                    <div className="mt-2">
                      {
                        product.ingredients ?
                          <>
                           
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                              {product.ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}


                            </ul>
                          </> : ""

                      }
                    </div>
                  )}
                </div>


              </div>


            </div>

            {product.productDetails ?
              <>
                <p className="font-bold mb-2">Product Details:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 border-b border-b-slate-400 pb-4" >
                  {product.productDetails.map((item, index) => (
                    <li key={index}>{item.label}: {item.value}</li>
                  ))}

                </ul>
              </> : ""
            }


            <div>



              <p className="font-bold mb-2">Manufacturer Details:</p>
              <ul className="list-disc pl-5 space-y-2">
                {product.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>


            </div>
          </div>
        </div>

      ) : (
        <p>Product not found!</p>
      )}

    </div>
  );
}




export default GiftCompo


