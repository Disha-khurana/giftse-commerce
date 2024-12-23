'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ApiBaseurl } from "./common/Apiurl";

function Categories() {
   const [categories, setCategories] = useState([]);
     const [loading, setLoading] = useState(true);
     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch(`${ApiBaseurl}/category`);
           const data = await response.json();
           setCategories(data);
         } catch (error) {
           console.error('Error fetching data:', error);
         } finally {
           setLoading(false); 
         }
       };
   
       fetchData(); 
     }, [ApiBaseurl]); 
   
     if (loading) {
       return <div>Loading...</div>;
     }

     return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-5 px-5 md:px-12">
          {categories.length === 0 ? (
            <div>No categories available</div>
          ) : (
            categories.slice(4,13).map((item, index) => (
              <div key={index} className="flex flex-col items-center relative mb-6 lg:mb-0">
                <Link href={item.link}>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      width={200}
                      height={200}
                      src={item.image}
                      alt={item.name}
                      className="transition-transform duration-700 hover:scale-110 h-[150px]"
                    />
                  </div>
                </Link>
                <Link
                  href={item.name}
                  className="bg-white px-3 py-1 md:py-2 font-semibold text-[0.65rem] md:text-xs lg:text-sm rounded-3xl border border-gray-300 absolute -bottom-4 text-center"
                >
                  {item.name}
                </Link>
              </div>
            ))
          )}
        </div>
      );
    }
      
export default Categories
