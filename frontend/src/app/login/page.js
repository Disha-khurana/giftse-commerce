'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation' // Import useRouter for routing

function Page() {
  // State to toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter(); // Get router instance

  // Function to handle toggling between login and signup
  const toggleForm = (formType) => {
    setIsLogin(formType === 'login');
    // Update the URL without reloading the page using shallow routing
    router.push(formType === 'login' ? '/login' : '/signup', undefined, { shallow: true });
  };

  // Sync the state with URL when the page loads or the URL changes
  useEffect(() => {
    // Check the URL path to decide which form to show
    if (window.location.pathname.includes('/signup')) {
      setIsLogin(false);  // Show SignUp form if URL includes 'signup'
    } else {
      setIsLogin(true);   // Show Login form otherwise
    }
  }, [router.asPath]);

  return (
    <div className='flex bg-slate-100 justify-center py-20'>
      {/* Left section (Social Media Login) */}
      <div className='bg-[#b1b268] py-32 px-7 w-80'>
        <div className='flex flex-col justify-center space-y-3'>
          <p className='text-white pb-5'>Login using social media to get quick access</p>

          <Link href='https://www.facebook.com/' target='blank'>
          <div className='flex items-center justify-center px-3 gap-2 bg-blue-600 py-1'>
            <Image src='/Images/icon/fb.webp' height={500} width={500} alt='facebook' className='w-6 h-6' />
            <span className='text-white text-sm'>Signin with Facebook</span>
          </div>
          </Link>

          <Link href='https://x.com/' target='blank'>
          <div className='flex items-center justify-center px-3 gap-2 bg-blue-400 py-1'>
            <Image src='/Images/icon/twitter.webp' height={500} width={500} alt='twitter' className='w-5 h-6' />
            <span className='text-white text-sm'>Signin with Twitter</span>
          </div>
          </Link>

          <Link href='https://www.google.com/' target='blank'>
          <div className='flex items-center justify-center px-3 gap-2 bg-slate-400 py-1'>
            <Image src='/Images/icon/google.webp' height={500} width={500} alt='google' className='w-6 h-6' />
            <span className='text-white text-sm'>Signin with Google</span>
          </div>
          </Link>
        </div>
      </div>

      {/* Right section (Login / Signup Form) */}
      <div className='flex flex-col items-center justify-center py-10 h-[480px] bg-white shadow-lg px-5 w-[500px]'>
        <h2 className='text-2xl font-bold'>{isLogin ? 'Log into your account' : 'Create an account'}</h2>
        <div className='flex gap-2'>
          <p>{isLogin ? "Don’t have an account?" : "Already have an account?"}</p>
          {/* Clickable link to toggle between Login and Signup */}
          <Link 
            href="#"
            onClick={() => toggleForm(isLogin ? 'signup' : 'login')}
            className='text-blue-500 cursor-pointer'>
            {isLogin ? 'Sign Up for free!' : 'Log in'}
          </Link>
        </div>

        {/* Form Inputs */}
        <div className='space-y-6 flex flex-col items-center justify-center'>
          {isLogin ? (
            <>
              <input type='text' placeholder='*Email Address' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
              <input type='password' placeholder='*Password' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
              <div className='flex justify-between mt-4 gap-16 '>
                <label className="flex space-x-2 ">
                  <input type="checkbox" className="form-checkbox text-blue-500 focus:ring-blue-500" />
                  <span>Remember me</span>
                </label>
                <span className='text-blue-500'>Forgot Password?</span>
              </div>
              <button className='bg-blue-600 text-white p-1 w-full mt-20'>Login with email</button>
            </>
          ) : (
            <>
              <input type='text' placeholder='*Full Name' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
              <input type='email' placeholder='*Email Address' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
              <input type='password' placeholder='*Password' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
              <button className='bg-blue-600 text-white p-1 w-full'>Sign Up</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page;
