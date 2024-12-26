'use client'
import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { GiCash } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { BsCashCoin } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { PiBellRingingBold } from "react-icons/pi";
import { MdLock } from "react-icons/md";
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import { MdEmail } from "react-icons/md";
import 'react-datepicker/dist/react-datepicker.css';
import { BiRupee } from "react-icons/bi";
import Link from 'next/link';

function page() {
    const data = [
        { icon: <FaUserCircle />, heading: 'User' },
        { icon: <MdOutlineCardGiftcard />, heading: 'My Orders' },
        { icon: <GiCash />, heading: 'FnpCash' },
        { icon: <FaUser />, heading: 'My Profile' },
        { icon: <PiBellRingingBold />, heading: 'My Reminders' },
        { icon: <FaAddressBook />, heading: 'Saved Addresses' },
        { icon: <FaTag />, heading: 'Gift Vouchers' },
        { icon: <MdLock />, heading: 'Change password' },
        { icon: <IoMdLogOut />, heading: 'Logout' },
    ]

    const { control, handleSubmit, formState: { errors } } = useForm();
    const [action, setAction] = useState('My Profile');
    const [profilePic, setProfilePic] = useState(null);

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    const renderContent = () => {
        switch (action) {
            case 'User':
                return <p>Welcome to the user dashboard.</p>;
            case 'My Orders':
                return <div className='flex flex-col items-center gap-3 justify-center '>
                    <h3 className='text-lg font-semibold'>No Orders Found!</h3>
                    <button className='bg-[#E87325] text-white text-base font-semibold px-20 py-2 rounded-md'>START GIFTING!</button>

                </div>;
            case 'FnpCash':
                return <div>
                    <span className='flex items-center text-lg font-semibold'><BsCashCoin /><BiRupee />0 </span>
                    <span className='text-gray-500 text-sm'>Transaction History</span>
                    <h3 className='flex justify-center items-center text-lg font-semibold mt-52'>No FNP Cash Transactions</h3>
                </div>;
            case 'My Profile':
                return <div className="">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        
                        {/* Profile Picture */}
                        <div className="flex justify-center items-center">

                            <div className="relative">
                                <img
                                    src={profilePic || '/Images/category/bday.webp'}
                                    alt="Profile Picture"
                                    className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                                />
                                <label htmlFor="profilePic" className="absolute bottom-0 right-0 bg-gray-500 text-white p-[2px] rounded-full cursor-pointer">
                                    <input
                                        type="file"
                                        id="profilePic"
                                        className="hidden"
                                        onChange={handleProfilePicChange}
                                    />
                                    📷
                                </label>
                            </div>
                        </div>
                        <div className='flex items-center gap-8 w-full'>
                            {/* Full Name */}
                            <div className='w-full'>
                                <label htmlFor="name" className="block text-[13px] font-medium text-gray-400">Name*</label>
                                <div className='flex items-center gap-3'>
                                    <FaUser className='mt-2 text-gray-600' />

                                    <input
                                        id="name"
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...control.register('name', { required: 'Name is required' })}
                                    />
                                </div>
                                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                            </div>

                            {/* Mobile Number */}
                            <div className='w-full'>
                                <label htmlFor="mobile" className="block text-[13px] font-medium text-gray-400">Mobile*</label>
                                <div className='flex items-center gap-3'>
                                    <FaPhoneAlt className='mt-2 text-gray-600' />
                                    <input
                                        id="mobile"
                                        type="tel"
                                        className="mt-1 block w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...control.register('mobile', { required: 'Mobile number is required' })}
                                    />
                                </div>
                                {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
                            </div>
                        </div>
                        <div className='flex items-center gap-8 w-full'>

                            <div className='w-full'>
                                <label htmlFor="email" className="block text-[13px] font-medium text-gray-400">Email*</label>
                                <div className='flex items-center gap-3'>
                                    <MdEmail className='mt-2 text-gray-600' />

                                    <input
                                        id="email"
                                        type="email"
                                        className="mt-1 block w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...control.register('email', { required: 'Email is required' })}
                                    />
                                </div>
                                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                            </div>

                            <div className='w-full'>
                                <label htmlFor="dob" className="block text-[13px] font-medium text-gray-400">Date of Birth*</label>
                                <div className='flex items-center gap-3'>
                                    <BsFillCalendarDateFill className='mt-2 text-gray-600' />

                                    <Controller
                                        control={control}
                                        name="dob"
                                        render={({ field }) => (
                                            <ReactDatePicker
                                                {...field}
                                                selected={field.value}
                                                onChange={(date) => field.onChange(date)}
                                                dateFormat="MM/dd/yyyy"
                                                className="mt-1 block w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        )}
                                    />
                                </div>

                                {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
                            </div>
                        </div>

                        <div className='flex items-center gap-8 w-full'>

                            <div className='w-full'>
                                <label htmlFor="dob" className="block text-[13px] font-medium text-gray-400">Date of Anniversary*</label>
                                <div className='flex items-center gap-3'>
                                    <BsFillCalendarDateFill className='mt-2 text-gray-600' />

                                    <Controller
                                        control={control}
                                        name="dob"
                                        render={({ field }) => (
                                            <ReactDatePicker
                                                {...field}
                                                selected={field.value}
                                                onChange={(date) => field.onChange(date)}
                                                dateFormat="MM/dd/yyyy"
                                                className="mt-1 block w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        )}
                                    />
                                </div>

                                {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
                            </div>

                            <div className='w-full'>
                                <label className="block text-[13px] font-medium text-gray-400">Gender*</label>
                                <div className="mt-2 space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            {...control.register('gender', { required: 'Gender is required' })}
                                            className="form-radio text-indigo-600"
                                        />
                                        <span className="ml-2">Male</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            {...control.register('gender')}
                                            className="form-radio text-indigo-600"
                                        />
                                        <span className="ml-2">Female</span>
                                    </label>
                                </div>
                                {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
                            </div>
                        </div>

                        <div className='flex items-center gap-8 w-full'>

                            <div className='w-full'>
                                <label htmlFor="name" className="block text-[13px] font-medium text-gray-400">Address*</label>
                                <div className='flex items-center gap-3'>
                                    <FaAddressCard className='mt-2 text-gray-600' />

                                    <input
                                        id="address"
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...control.register('address', { required: 'Address is required' })}
                                    />
                                </div>
                                {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
                            </div>


                            <div className='w-full'>
                                <label htmlFor="Pincode" className="block text-[13px] font-medium text-gray-400">Pincode*</label>
                                <div className='flex items-center gap-3'>
                                    <FaLocationDot className='mt-2 text-gray-600' />
                                    <input
                                        id="Pincode"
                                        type="tel"
                                        className="mt-1 block w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...control.register('Pincode', { required: 'Pincode is required' })}
                                    />
                                </div>
                                {errors.pincode && <span className="text-red-500 text-sm">{errors.pincode.message}</span>}
                            </div>
                        </div>

                        <div className='flex items-center gap-8 w-full'>

                            <div className='w-full'>
                                <label htmlFor="city" className="block text-[13px] font-medium text-gray-400">City*</label>
                                <div className='flex items-center gap-3'>
                                    <FaBuilding className='mt-2 text-gray-600' />

                                    <input
                                        id="city"
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...control.register('city', { required: 'city is required' })}
                                    />
                                </div>
                                {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
                            </div>


                            <div className='w-full'>
                                <label htmlFor="country" className="block text-[13px] font-medium text-gray-400">Country*</label>
                                <div className='flex items-center gap-3'>
                                    <FaFlag className='mt-2 text-gray-600' />
                                    <input
                                        id="country"
                                        type="tel"
                                        className="mt-1 block w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...control.register('country', { required: 'country is required' })}
                                    />
                                </div>
                                {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="py-2 px-4 bg-slate-700 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Save Profile
                            </button>
                        </div>
                    </form>
                </div>;
            case 'My Reminders':
                return <p>View and set reminders for special occasions.</p>;
            case 'Saved Addresses':
                return <p>Manage your saved addresses for quicker checkouts.</p>;
            case 'Gift Vouchers':
                return <p>Explore and redeem gift vouchers.</p>;
            case 'Change password':
                return <div className='text-center'>
                <h2 className="font-bold text-gray-800">OTP Verification</h2>
                <p className="text-sm ">Enter the OTP Sent to:</p>
                <div className="flex justify-center gap-4">
                    
                    <input
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 border-b border-b-gray-800 text-center text-xl font-medium focus:outline-none "
                    />
                    <input
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 border-b border-b-gray-800 text-center text-xl font-medium focus:outline-none "
                    />
                    <input
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 border-b border-b-gray-800 text-center text-xl font-medium focus:outline-none "
                    />
                    <input
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 border-b border-b-gray-800 text-center text-xl font-medium focus:outline-none"
                    />
                </div>
                <button className='px-5 py-2 rounded-md bg-slate-600 text-white font-semibold text-lg mt-8 w-[25%]'>VERIFY</button>
                <div className='flex items-center justify-center gap-5 mt-4'>
                    <p>Didn't receive OTP?</p>
                    <p className='text-[#2178cf]'>Resend</p>

                </div>
            </div>
            
            ;
            case 'Logout':
                return <p>You have successfully logged out.</p>;
            default:
                return <p>Select an option from the menu.</p>;
        }
    };


    return (
        <div className='px-5 md:px-12 py-12'>
            <div className='flex items-center gap-1 mb-10'>
                <span className='text-slate-900 font-semibold'>Home</span>
                <IoIosArrowForward />
                <span className='text-slate-900 font-semibold'>My Profile</span>
            </div>
            <div className='flex gap-10 '>
                <div className='shadow-lg py-5 mt-8 flex flex-col justify-center w-[25%]'>
                    {data.map((item, index) => (

                        <div

                            key={index}

                            onClick={() => setAction(item.heading)}
                            className={`flex items-center gap-4 mb-2 px-12 py-3 cursor-pointer ${action === item.heading ? 'bg-lime-200' : 'bg-transparent'
                                }`}
                        >
                            <span className="text-xl text-[#7d8035] opacity-90">{item.icon}</span>
                            <h2 className="text-[17px] font-normal">{item.heading}</h2>
                        </div>

                    ))}

                </div>
                <div className="max-w-5xl w-full shadow-lg p-6 h-auto">
                    <h1 className="text-2xl font-semibold mb-4">{action}</h1>
                    <div className="content">{renderContent()}</div>
                </div>


            </div>

        </div>
    )
}

export default page
