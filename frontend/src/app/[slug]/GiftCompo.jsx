'use client'
import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';

function GiftCompo({slug}) {
  

 const data={
    all: [
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
          slug: "decorated-chocolate-truffle-cake-half-kg",
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
          slug: "fruit-overload-cake-half-kg",
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
          slug: "fudge-brownie-cake-half-kg",
          rate: "4.5",
          price: "675",
          review: "273 reviews",
          delivery: "Today",
        },
        {
          id: 6,
          image: [
            "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_1.webp",
            "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_2.webp",
            "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_3.webp",
            "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_4.webp",
            "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_2.webp",
          ],
          link: "/rich-coffee-cream-cake-half-kg",
          title: "Rich Coffee Cream Cake Half Kg",
          slug: "rich-coffee-cream-cake-half-kg",
          rate: "5.0",
          price: "725",
          review: "273 reviews",
          delivery: "Today",
        },
        {
          id: 8,
          image: [
            "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_1.webp",
            "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_2.webp",
            "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_3.webp",
            "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_4.webp",
            "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_1.webp",
          ],
          link: "/birthday-bliss-vanilla-dream-cake-half-kg",
          title: "Birthday Bliss Vanilla Dream Cake- Half Kg",
          slug: "birthday-bliss-vanilla-dream-cake-half-kg",
          price: "649",
          delivery: "Tomorrow",
        },
        {
          id: 10,
          image: [
            "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_1.webp",
            "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_2.webp",
            "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_3.webp",
            "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_4.webp",
            "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_1.webp",
          ],
          link: "/dates-walnuts-mixed-dry-cake-500gms",
          title: "Dates & Walnuts Mixed Dry Cake 500gms",
          slug: "dates-walnuts-mixed-dry-cake-500gms",
          rate: "5.0",
          price: "999",
          review: "273 reviews",
          delivery: "Today",
        },
        {
          id: 17,
          image: [
            "/Images/birthday/rocher/rocher-choco-bouquet_1.webp",
            "/Images/birthday/rocher/rocher-choco-bouquet_2.webp",
            "/Images/birthday/rocher/rocher-choco-bouquet_3.webp",
            "/Images/birthday/rocher/rocher-choco-bouquet_4.webp",
            "/Images/birthday/rocher/rocher-choco-bouquet_1.webp",
          ],
          link: "/rocher-choco-bouquet",
          title: "Rocher Choco Bouquet",
          slug: "rocher-choco-bouquet",
          rate: "4.8",
          price: "1899",
        },
        {
          id: 20,
          image: [
            "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_2.webp",
            "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_3.webp",
            "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_4.webp",
            "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_5.webp",
            "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_6.webp",
          ],
          link: "/chocolate-truffle-cream-cake-half-kg",
          title: "Chocolate Truffle Cream Cake Half Kg",
          slug: "chocolate-truffle-cream-cake-half-kg",
          rate: "4.5",
          price: "575",
          review: "273 reviews",
          delivery: "Today",
        },
        {
          image: [
            "/Images/birthday/red-velvet/red-velvet-bento-cake_1.webp",
            "/Images/birthday/red-velvet/red-velvet-bento-cake_2.webp",
            "/Images/birthday/red-velvet/red-velvet-bento-cake_3.webp",
            "/Images/birthday/red-velvet/red-velvet-bento-cake_4.webp",
            "/Images/birthday/red-velvet/red-velvet-bento-cake_5.webp",
          ],
          link: "/red-velvet-bento-cake",
          title: "Red Velvet Bento Cake 250 Gram",
          slug: "red-velvet-bento-cake",
          rate: "4.8",
          price: "449",
          review: "161 reviews",
          delivery: "Today",
        },
      ],
      
        birthday:[
           {
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
                "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_1.webp",
                "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_2.webp",
                "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_3.webp",
                "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_4.webp",
                "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_2.webp",
              ],
              link: "/rich-coffee-cream-cake-half-kg",
              title: "Rich Coffee Cream Cake Half Kg",
              rate: "5.0",
              price: "725",
              review: "273 reviews",
              delivery: "Today",
            },
            {
              image: [
                "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_1.webp",
                "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_2.webp",
                "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_3.webp",
                "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_4.webp",
                "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_1.webp",
              ],
              link: "/birthday-bliss-vanilla-dream-cake-half-kg",
              title: "Birthday Bliss Vanilla Dream Cake- Half Kg",
              price: "649",
              delivery: "Tomorrow",
            },
            {
              image: [
                "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_1.webp",
                "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_2.webp",
                "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_3.webp",
                "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_4.webp",
                "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_1.webp",
              ],
              link: "/dates-walnuts-mixed-dry-cake-500gms",
              title: "Dates & Walnuts Mixed Dry Cake 500gms",
              rate: "5.0",
              price: "999",
              review: "273 reviews",
              delivery: "Today",
            },
            {
              image: [
                "/Images/birthday/butterscotch rsmlai/butterscotch-cake-with-rasmalai-1kg_1.webp",
                "/Images/birthday/butterscotch rsmlai/butterscotch-cake-with-rasmalai-1kg_2.webp",
                "/Images/birthday/butterscotch rsmlai/butterscotch-cake-with-rasmalai-1kg_3.webp",
                "/Images/birthday/butterscotch rsmlai/butterscotch-cake-with-rasmalai-1kg_4.webp",
                "/Images/birthday/butterscotch rsmlai/butterscotch-cake-with-rasmalai-1kg_5.webp",
      
              ],
              link: "/butterscotch-cake-with-rasmalai-1kg",
              title: "Butterscotch Cake With Rasmalai 1kg",
              rate: "5.0",
              price: "1325",
              review: "227 reviews",
              delivery: "Today",
            },
            {
              image: [
                "/Images/birthday/red-velvet/red-velvet-bento-cake_1.webp",
                "/Images/birthday/red-velvet/red-velvet-bento-cake_2.webp",
                "/Images/birthday/red-velvet/red-velvet-bento-cake_3.webp",
                "/Images/birthday/red-velvet/red-velvet-bento-cake_4.webp",
                "/Images/birthday/red-velvet/red-velvet-bento-cake_5.webp",
      
              ],
              link: "/red-velvet-bento-cake",
              title: "Red Velvet Bento Cake 250 Gram",
              rate: "4.8",
              price: "449",
              review: "161 reviews",
              delivery: "Today",
            },
            {
              image: [
                "/Images/birthday/velvety cake/velvety-chocolate-truffle-cake-500-gm_1.webp",
                "/Images/birthday/velvety cake/velvety-chocolate-truffle-cake-500-gm_2.webp",
                "/Images/birthday/velvety cake/velvety-chocolate-truffle-cake-500-gm_3.webp",
                "/Images/birthday/velvety cake/velvety-chocolate-truffle-cake-500-gm_4.webp",
                "/Images/birthday/velvety cake/velvety-chocolate-truffle-cake-500-gm_5.webp",
      
              ],
              link: "/velvety-chocolate-truffle-cake-500-gm",
              title: "Velvety Chocolate Truffle Cake- 500 Gm",
              price: "649",
              delivery: "Today",
            },
        ]
     }
     const product = data.all.find(item => item.slug === slug);
     console.log(product)
     const [mainImage, setMainImage] = useState(product?.image[0]);
const [imgindex,setimgindex]=useState(0)
     const handleImageClick = (img) => {
      setimgindex(img);
     };
   
     return (
      <div className="px-60">
      {product ? (
        <div className="flex items-center gap-6 py-20">
          <div className="flex flex-col mb-6">
            {/* Main Image with Magnify */}
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
                    width: 1200,  // Set appropriate width
                    height: 1200, // Set appropriate height
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
                  className={`w-20 h-20 object-cover rounded cursor-pointer transition-transform duration-300 ${
                    mainImage === img ? 'ring-2 ring-blue-500 scale-110' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-4">{product.title}</h1>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rate}</p>
            <p>{product.review}</p>
            <p>Delivery: {product.delivery}</p>
          </div>
        </div>
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
}
    
     
        

export default GiftCompo


