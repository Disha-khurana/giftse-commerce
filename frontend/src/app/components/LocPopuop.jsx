'use client'
import { useState } from "react";
import { HiGlobeAlt } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsBuildingFill } from "react-icons/bs";

const LocationPopup = () => {
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [city, setCity] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false); // New state variable

  const countries = [
    "USA", "UK", "Australia", "Canada", "Germany", "UAE", "Singapore",
    "Brazil", "Philippines", "New Zealand", "Argentina", "Austria",
    "Bahrain", "Belgium", "Bulgaria", "China", "Croatia", "Denmark",
    "Egypt", "Finland", "France", "Greece", "Hong Kong", "Hungary",
    "Indonesia", "Ireland", "Italy", "Japan", "Jordan", "Kuwait",
    "Lebanon", "Malaysia", "Mauritius", "Morocco", "Nepal", "Netherlands",
    "Norway", "Oman", "Pakistan", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Saudi Arabia", "South Africa", "Spain", "Sri Lanka",
    "Sweden", "Switzerland", "Taiwan", "Thailand", "Ukraine",
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false); // Close the dropdown when a country is selected
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="w-[320px] mx-auto mt-8 ">
      <div className="flex items-center mb-2 border border-gray-300 px-3 rounded-md py-2 bg-slate-100" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <HiGlobeAlt className="text-2xl me-2 text-gray-400"/>
        <span className="flex-1 text-gray-700 font-semibold">{selectedCountry}</span>
        <MdKeyboardArrowDown className="text-gray-400"/>
      </div>

      {dropdownOpen && ( // Show dropdown only when dropdownOpen is true
        <div className="max-h-48 overflow-y-auto border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {countries.map((country, index) => (
              <li
                key={index}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCountrySelect(country)}
              >
                {country}
              </li>
            ))}
          </ul>
        </div>
      )}

<div className="relative flex items-center mt-4">
  <BsBuildingFill className="absolute left-3 text-gray-700 text-xl" />
  <input
    className="pl-10 flex-1 p-2  rounded-md focus:outline-none border border-orange-500 custom-shadow"
    type="text"
    placeholder="Enter Delivery City"
    value={city}
    onChange={handleCityChange}
  />
  
  {city && (
    <i
      className="material-icons text-gray-400 cursor-pointer ml-2"
      onClick={() => setCity("")}
    >
      close
    </i>
  )}
</div>
<button className="bg-orange-500 text-white font-semibold flex justify-center mt-6 w-full py-[10px] rounded-md text-[17px]">
              CONTINUE SHOPPING
            </button>
    </div>
  );
};

export default LocationPopup;
