'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ApiBaseurl } from '../components/common/Apiurl';

function Page() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const socialLinks = [
    {
      link: 'https://www.facebook.com/',
      imgSrc: '/Images/icon/fb.webp',
      alt: 'facebook',
      text: 'Sign in with Facebook',
    },
    {
      link: 'https://x.com/',
      imgSrc: '/Images/icon/twitter.webp',
      alt: 'twitter',
      text: 'Sign in with Twitter',
    },
    {
      link: 'https://www.google.com/',
      imgSrc: '/Images/icon/google.webp',
      alt: 'google',
      text: 'Sign in with Google',
    },
  ];

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
      if (response.ok) {
        alert('User created successfully!');
        e.target.reset();
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
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

    const validationError = validateForm(payload, false);
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${ApiBaseurl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Logged in successfully!');
        e.target.reset();
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
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
    
    <div className='bg-[#b1b268] py-32 px-7 w-80'>
      <div className='flex flex-col justify-center space-y-3'>
        <p className='text-white pb-5'>Login using social media to get quick access</p>

        {socialLinks.map((item,index)=>(
        <Link key={index} href={item.link} target='blank'>
        <div className='flex items-center justify-center px-3 gap-2 bg-blue-600 py-1'>
          <Image src={item.imgSrc} height={500} width={500} alt={item.alt} className='w-6 h-6' />
          <span className='text-white text-sm'>{item.text}</span>
        </div>
        </Link>
        ))}

        
      </div>
    </div>


    <div className='flex flex-col items-center justify-center py-10 h-[480px] bg-white shadow-lg px-5 w-[500px]'>
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
          <form className='text-center'>
            <input type='text' placeholder='*Email Address' name='email' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
            <input type='password' placeholder='*Password' name='password' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
            <div className='flex justify-center mt-4 gap-16 '>
              <label className="flex space-x-2 ">
                <input type="checkbox" className="form-checkbox text-blue-500 focus:ring-blue-500" />
                <span>Remember me</span>
              </label>
              <span className='text-blue-500'>Forgot Password?</span>
            </div>
            <button className='bg-blue-600 text-white py-2 w-[70%] mt-12'>Login </button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className='text-center'>
            <input type='text' placeholder='*Full Name' name='name' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
            <input type='email' placeholder='*Email Address' name='email' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
            <input type='password' placeholder='*Password' name='password' className='p-1 border-b focus:outline-none border-slate-500 focus:border-blue-700 w-80 mt-7' />
            <button type='submit' className='bg-blue-600 text-white py-2 w-[70%] mt-12'>Sign Up</button>
          </form>
        )}
      </div>
    </div>
  </div>
  );
}

export default Page;
