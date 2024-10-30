import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiCircle } from "react-icons/gi";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import LocationPopup from "./LocPopuop";

function SetLocation({ handleClick }) {
  const [section, setSection] = useState("Within India");

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal content */}
      <div className="bg-white relative z-40 rounded-md px-8 py-4 ">
        <div className="absolute top-0 right-0 p-3">
          <RxCross2 onClick={handleClick} />
        </div>
        <div className="py-5 px-7 flex flex-col items-center justify-center space-y-5">
          <div className="space-y-1">
            <h3 className="font-semibold text-xl text-[#222222]">
              Let's Personalize Your Experience!
            </h3>
            <p className="text-center text-sm text-[#555555]">
              Find the perfect gifts for you or your loved ones – it's
              <br /> like magic!
            </p>
          </div>
         
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-10">
              <div onClick={() => setSection("Within India")}>
                {section == "Within India" ? (
                  <div className="flex items-center gap-1">
                    <FaRegCircleDot className="text-orange-500" />
                    <button>Within India</button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-[#555555]">
                    <GiCircle />
                    <button>Within India</button>
                  </div>
                )}
              </div>
              <div onClick={() => setSection("Outside India")}>
                {section == "Outside India" ? (
                  <div className="flex items-center gap-1">
                    <FaRegCircleDot className="text-orange-500" />
                    <button>Outside India</button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-[#555555]">
                    <GiCircle />
                    <button>Outside India</button>
                  </div>
                )}
              </div>
            </div>
                {section == "Within India" && (
                    <div className="space-y-4">
            <div className="relative flex items-center ">
              <IoLocationSharp className="absolute left-3 text-gray-700 text-xl" />
              <input
                type="text"
                placeholder="* Enter delivery location or pincode or area"
                className="pl-10 px-4 py-2 focus:outline-none border border-orange-500 custom-shadow w-[320px] rounded-md placeholder-gray-700  "
              />
            </div>
            <button className="bg-orange-500 text-white font-semibold flex justify-center w-full py-[10px] rounded-md text-[17px]">
              CONTINUE SHOPPING
            </button>
            </div>
                )}
                {section == "Outside India" && (
                    <div className="space-y-4">
                        <LocationPopup/>
                    </div>
                )}
          </div>
                
        </div>
                
      </div>
    </div>
  );
}

export default SetLocation;
