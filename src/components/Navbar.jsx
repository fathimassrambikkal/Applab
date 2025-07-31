import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoAccessibilityOutline } from "react-icons/io5";
import flag from '../assets/flag.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    const nav = navRef.current;

    gsap.to(nav, {
      backgroundColor: '#ffffff',
      color: '#6b7280', 
      duration: 0.3,
      scrollTrigger: {
        trigger: '#hero',   
        start: 'bottom top',
        toggleActions: 'play reverse play reverse',
        scrub: true,
      },
    });

    gsap.to(nav.querySelectorAll('*'), {
      color: '#475569', 
      duration: 0.3,
      scrollTrigger: {
        trigger: '#hero',
        start: 'bottom top',
        toggleActions: 'play reverse play reverse',
        scrub: true,
      },
    });

  }, []);

  return (
    <nav
      ref={navRef}
      className='w-full h-28 bg-transparent fixed top-0 left-0 z-50 text-white'
    >
      <div className='w-[92%] h-28 mx-auto border-b border-gray-300 flex justify-between items-center gap-8 transition-all duration-300'>
        {/* Logo */}
        <div className='flex'>
          <Link to='/' className='flex flex-col'>
            <span className='text-xl md:text-4xl font-serif'>invest</span>
            <span className='text-xl md:text-4xl ml-5 font-serif'>Qatar</span>
          </Link>
        </div>

        {/* Nav Links */}
        <ul className='flex gap-2 text-sm md:text-sm font-semibold relative left-2 flex-wrap'>
          {[
            "Why Qatar",
            "Sectors & Opportunities",
            "Incentives",
            "How we help",
            "Media Center",
            "Resources",
            "About Us"
          ].map((item, i) => (
            <li key={i}>
              <div className='flex items-center gap-1'>
                <span>{item}</span>
                <IoIosArrowDown className='text-lg md:text-base' />
              </div>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className='flex gap-1 items-center relative '>
          <img src={flag} alt="flag" className='w-6 h-4 rounded-sm' />
          <IoAccessibilityOutline className='text-lg ml-2' />

          <div className='flex items-center relative left-2 pl-2 gap-2'>
            <span className='text-gray-400'>|</span>
            <CiSearch className='text-lg' />

            <input
              type="text"
              placeholder='Search...'
              className='bg-transparent w-16 text-sm outline-none'
            />
            <Link className='bg-white px-1 py-1 rounded-lg text-slate-700 font-semibold text-sm'>
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
