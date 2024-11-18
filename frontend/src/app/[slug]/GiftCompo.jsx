'use client'
import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { IoStarHalfSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import Image from 'next/image';
import { SlCalender } from "react-icons/sl";
import { RxCross2 } from 'react-icons/rx';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { data } from '../components/common/Alldata';

function GiftCompo({ slug }) {
  const product = data.all.find(item => item.slug === slug);
  console.log(product)
  const [mainImage, setMainImage] = useState(product?.image[0]);
  const [imgindex, setimgindex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("WITH EGG");
  const [section, setSection] = useState("offers");
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



  return (
    <div className="px-60">
      {product ? (
        <div>
        <div className="flex items-start gap-6 pt-20 pb-12">
          <div className="flex flex-col mb-6">
        
            <div className="w-full max-w-md">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: product.title,
                    isFluidWidth: true,
                    src: product.image[imgindex],
                  },
                  largeImage: {
                    src: product.image[imgindex],
                    width: 1200,  
                    height: 1200, 
                  },
                  enlargedImageContainerStyle: { zIndex: 15 },
                }}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-4">
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                  className={`w-20 h-20 object-cover rounded cursor-pointer transition-transform duration-300 ${mainImage === img ? 'ring-2 ring-[#707428] scale-110' : ''
                    }`}
                />
              ))}
            </div>
          </div>

          <div className='space-y-6'>

            <div>
              <h1 className="text-2xl text-nowrap mb-2">{product.title}</h1>
              <div className='flex items-center gap-7 mb-2'>
                <button className='bg-[#707428]  px-2 py-1 font-normal text-white rounded-full flex items-center text-sm'> {product.rate}<IoStarHalfSharp /></button>
                <p className='font-normal text-blue-600 text-base'>{product.review}</p>
              </div>

              <div>
                <p className='text-3xl gap-1 flex items-start'> ₹<span className='text-5xl'>{product.price}</span></p>
                <span className='ms-5 text-sm text-gray-500'>Inclusive of all taxes</span>
              </div>





            </div>

            <div >
              <span className='text-gray-600 text-base font-semibold '>Pick an Upgrade</span>
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
            <div className='flex items-center gap-5 w-full '>
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
          </div>

        </div>
         <div className="flex flex-col">
         <div className="flex items-center gap-1 md:gap-3 text-xs md:text-[17px] ">
           <p onClick={() => setSection("offers")} className={`py-2 text-center font-semibold border border-slate-100 w-auto px-1 md:px-4 cursor-pointer ${section === "offers"
             ? "bg-white text-gray-500 border-t-4 border-t-gray-500"
             : "bg-slate-50 text-black border-none"
             }`}>
             Offers Available
           </p>
           <p onClick={() => setSection("description")} className={`py-2 text-center font-semibold border border-slate-100 w-auto px-1 md:px-4 cursor-pointer ${section === "description"
             ? "bg-white text-gray-500 border-t-4 border-t-gray-500"
             : "bg-slate-50 text-black border-none"
             }`}>
             Description
           </p>
           <p onClick={() => setSection("DeliveryInformation")} className={`py-2 text-center font-semibold border border-slate-100 px-1 md:px-4 w-auto cursor-pointer text-nowrap  ${section === "DeliveryInformation"
             ? "bg-white text-gray-500 border-t-4 border-t-gray-500 "
             : "bg-slate-50 text-black border-none"
             }`}>
             Delivery Information
           </p>
           <p onClick={() => setSection("CareInstructions")} className={`py-2 text-center font-semibold px-1 md:px-4 border border-slate-100 w-auto cursor-pointer ${section === "CareInstructions"
             ? "bg-white text-gray-500 border-t-4 border-t-gray-500  "
             : "bg-slate-50 text-black border-none"
             }`}>
             Care Instructions
           </p>
         </div>
         {section == "offers" && <div className="text-justify text-slate-500 w-[70%] text-xs md:text-base border border-slate-200 px-6 pb-12 leading-relaxed py-6">
           <div className="bank-offers">
             <table className=" table-auto">
               <tbody>
                 {/* First Offer */}
                 <tr>
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
                         <div className="offer-tnc-popup absolute bg-white shadow-lg p-4 rounded-lg w-80">
                           <i
                             className="material-icons close-tnc text-gray-500 cursor-pointer"
                             onClick={() => setShowTnc(null)}
                           >
                             
                           </i>
                           <div className="offer-tnc-head font-bold text-lg">Terms & Conditions</div>
                           <div className="offer-terms mt-2">
                             <ul className="list-disc pl-6">
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
                         <div className="offer-tnc-popup absolute bg-white shadow-lg p-4 rounded-lg w-80">
                           <i
                             className="material-icons close-tnc text-gray-500 cursor-pointer"
                             onClick={() => setShowTnc(null)}
                           >
                             
                           </i>
                           <div className="offer-tnc-head font-bold text-lg">Terms & Conditions</div>
                           <div className="offer-terms mt-2">
                             <ul className="list-disc pl-6">
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
                         <div className="offer-tnc-popup absolute bg-white shadow-lg p-4 rounded-lg w-80">
                           <i
                             className="material-icons close-tnc text-gray-500 cursor-pointer"
                             onClick={() => setShowTnc(null)}
                           >
                             
                           </i>
                           <div className="offer-tnc-head font-bold text-lg">Terms & Conditions</div>
                           <div className="offer-terms mt-2">
                             <ul className="list-disc pl-6">
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
                 <tr>
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
                         <div className="offer-tnc-popup absolute bg-white shadow-lg p-4 rounded-lg w-80">
                           <i
                             className="material-icons close-tnc text-gray-500 cursor-pointer"
                             onClick={() => setShowTnc(null)}
                           >
                             
                           </i>
                           <div className="offer-tnc-head font-bold text-lg">Terms & Conditions</div>
                           <div className="offer-terms mt-2">
                             <ul className="list-disc pl-6">
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
         </div>}
         {section == "description" &&
           <div className="border border-slate-200 p-4">
 
 
             <p className="font-bold mb-2">Product Details:</p>
             <ul className="list-disc pl-5 space-y-2 mb-4">
               <li>Cake Flavour: Truffle</li>
               <li>Type of Cake: Cream Cake</li>
               <li>Shape: Round</li>
               <li>Weight: 500 gm</li>
               <li>Net Quantity: 1 Cake</li>
               <li>Diameter: 7.5 inch</li>
               <li>Country Of Origin: India</li>
               <li>Serves: 4-6 People</li>
             </ul>
 
             <p className="font-bold mb-2">Ingredients:</p>
             <ul className="list-disc pl-5 space-y-2 mb-4">
               <li>Chocolate premix, Refined oil, Breakfast Sugar, Chocolate Truffle Base, Dark Chocolate compound, Milk chocolate compound, Chocolate Glaze</li>
             </ul>
 
             <p className="font-bold mb-2">Please Note:</p>
             <ul className="list-disc pl-5 space-y-2">
               <li>The cake stand, cutlery, and accessories used in the image are only for representation purposes. They are not delivered with the cake.</li>
               <li>This cake is hand delivered in a good quality cardboard box.</li>
             </ul>
           </div>
         }
         {section == "DeliveryInformation" &&
           <ul className="list-disc pl-10 border border-slate-200 space-y-2 p-7">
             <li>Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.</li>
             <li>The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.</li>
             <li>Since cakes are perishable in nature, we attempt delivery of your order only once.</li>
             <li>The delivery cannot be redirected to any other address.</li>
             <li>This product is hand delivered and will not be delivered along with courier products.</li>
             <li>Occasionally, substitutions of flavours/designs are necessary due to temporary and/or regional unavailability issues.</li>
           </ul>
 
         }
         {section == "CareInstructions" &&
           <div className="p-4 border border-slate-200">
 
 
             <ul className="list-disc pl-5 space-y-2 mb-4">
               <li>Store cream cakes in a refrigerator.</li>
               <li>Fondant cakes should be stored in an air conditioned environment.</li>
               <li>Slice and serve the cake at room temperature and make sure it is not exposed to heat.</li>
               <li>Use a serrated knife to cut a fondant cake.</li>
               <li>Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.</li>
               <li>Please check the placement of these items before serving to small children.</li>
               <li>The cake should be consumed within 24 hours.</li>
               <li>Enjoy your cake!</li>
             </ul>
 
             <p className="font-bold mb-2">Manufacturer Details:</p>
             <ul className="list-disc pl-5 space-y-2">
               <li>Ferns N Petals Private Limited</li>
               <li>Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030</li>
               <li>FSSAI License No. 10019011006502</li>
             </ul>
           </div>
         }
       </div>
       </div>

      ) : (
        <p>Product not found!</p>
      )}
     
    </div>
  );
}




export default GiftCompo


