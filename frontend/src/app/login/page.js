'use client';
import Image from 'next/image';
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ApiBaseurl } from '../components/common/Apiurl';

function Page() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();


  const validateForm = (formData, isSignup = false) => {
    if (isSignup && !formData.name) return 'Name is required.';
    if (!formData.email) return 'Email is required.';
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) return 'Invalid email address.';
    if (!formData.password) return 'Password is required.';
    if (isSignup && formData.password.length < 6) return 'Password must be at least 6 characters.';
    return null;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    console.log('Payload:', payload); // Debugging: log payload

    const validationError = validateForm(payload, true);
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${ApiBaseurl}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      console.log('Response:', data); // Debugging: log server response

      if (response.ok) {
        alert('User created successfully!');
        e.target.reset();
      } else {
        setError(data.message || 'Signup failed.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
};


  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
  
    const formData = new FormData(e.target);
    const payload = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
  
    console.log('Payload:', payload);
  
    // Client-side validation
    const validationError = validateForm(payload, false);
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }
  
    // Further client-side validation for email and password
    if (!payload.email || !payload.password) {
      setError('Email and password are required.');
      setIsLoading(false);
      return;
    }
  
    // Optional: Validate email format (you can improve this regex or use a library like validator.js)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await fetch(`${ApiBaseurl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

  
      if (response.ok) {
        const data = await response.json();
        alert('Logged in successfully!');
        e.target.reset();
      } else {
        alert('User doesnot exist.')
        const errorData = await response.text();
        setError(errorData || 'Login failed.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  

  const toggleForm = (formType) => {
    setIsLogin(formType === 'login');
    router.push(formType === 'login' ? '/login' : '/signup', undefined, { shallow: true });
  };

  useEffect(() => {
    setIsLogin(window.location.pathname.includes('/signup') ? false : true);
  }, [router.asPath]);

  return (
    <div className='flex bg-slate-100 justify-center py-20'>
    
    


    <div className='flex flex-col items-center justify-center py-8 h-[450px] rounded-[20px] bg-white shadow-lg px-5 w-[500px]'>
      <h2 className='text-2xl font-bold'>{isLogin ? 'Log into your account' : 'Create an account'}</h2>
      <div className='flex gap-2'>
        <p>{isLogin ? "Don’t have an account?" : "Already have an account?"}</p>
       
        <Link 
          href="#"
          onClick={() => toggleForm(isLogin ? 'signup' : 'login')}
          className='text-blue-500 cursor-pointer'>
          {isLogin ? 'Sign Up for free!' : 'Log in'}
        </Link>
      </div>


      <div className='space-y-6 flex flex-col items-center justify-center'>
        {isLogin ? (
          <form onSubmit={handleLogin} className='text-center'>
            <input type='text' placeholder='*Email Address' name='email' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
            <input type='password' placeholder='*Password' name='password' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
            <div className='flex justify-end me-16 items-center mt-4 gap-16 '>
              
              <span className='text-blue-500 text-sm'>Forgot Password?</span>
            </div>
            <div className='space-y-3 mt-5'>
            <button type='submit' className='bg-blue-600 rounded-md text-white py-2 w-[70%]'>Login </button>
            <p className='text-gray-500 text-[13px]'>Or sign in with</p>
            <div className='flex items-center gap-5 justify-center'>
              <Link href='https://www.google.com/' className='bg-slate-100 py-2 px-8 shadow-md rounded-md'><FcGoogle className='text-xl'/></Link>
              <Link href='https://www.facebook.com/' className='bg-slate-100 py-2 px-8 shadow-md rounded-md'><FaFacebook className='text-xl text-blue-600'/></Link>
              <Link href='https://www.apple.com/' className='bg-slate-100 py-2 px-8 shadow-md rounded-md'><FaApple className='text-xl'/></Link>
            
            </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignup} className='text-center'>
            <input type='text' placeholder='*Full Name' name='name' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
            <input type='email' placeholder='*Email Address' name='email' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
            <input type='password' placeholder='*Password' name='password' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
            <button type='submit' className='bg-blue-600 rounded-md text-white py-2 w-[70%] mt-12'>Sign Up</button>
          </form>
        )}
      </div>
    </div>
  </div>
  );
}

export default Page;
