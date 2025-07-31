import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  PiHandshakeThin, PiSidebarDuotone, PiHandshake
} from "react-icons/pi";
import {
  GoDotFill, GoCode
} from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch, CiBullhorn } from "react-icons/ci";
import { IoAccessibility, IoRocketOutline } from "react-icons/io5";
import { TbQuestionMark, TbCalendarStats, TbTriangleSquareCircle } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa";

import gridImg1 from '../assets/image1.jpg';
import gridImg2 from '../assets/image2.jpg';
import gridImg3 from '../assets/image3.jpg';
import gridImg4 from '../assets/image4.jpg';

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { yPercent: 50 },
      {
        yPercent: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
    gsap.to(containerRef.current, {
      yPercent: 80,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="min-h-[70%] w-full bg-white relative flex items-center justify-center overflow-hidden">
      <div className="w-[90%] min-h-[35rem] mt-40 rounded-2xl bg-gradient-to-r from-lavender via-paleLavender to-warmWhite relative z-10 shadow-inner flex flex-col items-center justify-center overflow-hidden">

        {/* Heading */}
        <div className='flex flex-col items-center mt-40 space-y-2'>
          <div className='flex gap-2'>
            <PiHandshakeThin className='text-pumpkin text-xl mt-2 ' />
            <span className='text-orange-600 text-xl'>Join with US</span>
          </div>
          <h1 className='text-slate-700 font-serif text-3xl font-bold'>Join the network of investors in Qatar</h1>
          <h3 className='text-gray-400 text-lg'>Qatar connect you to the region and world-seamlessly <br /><span className='ml-36'> and strategically.</span></h3>
        </div>

        {/* Animated Card Stack Section */}
        <div ref={containerRef} className="relative w-full pt-2 flex flex-col items-center justify-start">
          <div className="w-[60%] h-20 bg-white rounded-[2rem] shadow-md z-10 mb-[-4rem] opacity-30" />
          <div className="w-[70%] h-24 bg-white rounded-[2rem] shadow-md z-20 mb-[-4rem] opacity-50" />
          <div className="w-[80%] h-[35rem] bg-paleLavender rounded-t-[2rem] shadow-2xl z-30 relative border-[.5rem] border-white overflow-hidden">
            <div className='w-[85%] h-[30rem] bg-paleLavender mx-auto rounded-t-3xl mt-28 relative'>

              {/* Top Bar */}
              <div className='w-full h-8 bg-black rounded-t flex gap-2'>
                <div className='flex m-2'>
                  <GoDotFill className='text-rose-500' />
                  <GoDotFill className='text-yellow-300' />
                  <GoDotFill className='text-green-500' />
                </div>
                <PiSidebarDuotone className='text-gray-600 mt-2 rounded-xl' />
                <GoCode className='text-gray-600 mt-2' />
              </div>

              {/* Sidebar */}
              <div className='w-60 h-96 bg-white rounded-t-2xl mt-12 ml-8 py-20 space-y-4'>
                <div className='flex ml-4'>
                  <AiOutlineHome className='text-pink-800 text-2xl' />
                  <h3 className='text-pink-800 font-medium font-serif'>Home</h3>
                </div>
                <div className='text-slate-500 flex gap-1 ml-4 text-sm'>
                  <HiOutlineLightBulb className='mt-1' />
                  <h3 className='font-serif'>Explore opportunities</h3>
                  <IoIosArrowDown className='text-lg mt-1' />
                </div>
                <div className='text-slate-500 flex gap-1 ml-4 text-sm'>
                  <IoRocketOutline className='mt-1' />
                  <h3 className='font-serif'>Start Business</h3>
                  <IoIosArrowDown className='text-lg mt-1' />
                </div>
                <div className='text-slate-500 flex gap-1 ml-4 text-sm'>
                  <PiHandshake className='mt-1' />
                  <h3 className='font-serif'>Grow Business</h3>
                  <IoIosArrowDown className='text-lg mt-1' />
                </div>
                <div className='text-slate-500 flex gap-1 ml-4 text-sm'>
                  <CiBullhorn className='mt-1' />
                  <h3 className='font-serif'>News & Events</h3>
                  <IoIosArrowDown className='text-lg mt-1' />
                </div>
                <div className='text-slate-500 flex gap-1 ml-4 text-sm'>
                  <TbCalendarStats className='mt-1' />
                  <HiOutlineLightBulb className='mt-1' />
                  <h3 className='font-serif'>Data & Insights</h3>
                  <IoIosArrowDown className='text-lg mt-1' />
                </div>
                <div className='text-slate-500 flex gap-1 ml-4 text-sm'>
                  <TbTriangleSquareCircle className='mt-1' />
                  <h3 className='font-serif'>About Us</h3>
                  <IoIosArrowDown className='text-lg mt-1' />
                </div>
              </div>

              {/* Top Right */}
              <div className='flex absolute bottom-80 left-72 items-center gap-1'>
                <div className='flex border border-slate-500 bg-white gap- p-1 rounded-lg items-center'>
                  <CiSearch className='p-1 ' />
                  <h3 className='text-[10px] text-slate-400'>Explore companies, tenders, opportunities and more</h3>
                </div>
                <div className='flex space-x-2 ml-4'>
                  <IoAccessibility className='w-7 h-7 border border-slate-500 rounded-full p-2 bg-white text-slate-500' />
                  <TbQuestionMark className='w-7 h-7 border border-slate-500 rounded-full p-2 bg-white text-slate-800' />
                  <TfiEmail className='w-7 h-7 border border-slate-500 rounded-full p-2 bg-white text-slate-800' />
                  <FaRegBell className='w-7 h-7 border border-slate-500 rounded-full p-2 bg-white text-slate-800' />
                </div>
                <div className='text-slate-700 flex items-center bg-white rounded-sm'>
                  <GoDotFill className='text-3xl' />
                  <h4 className='text-[7px] font-serif'>Profile Name</h4>
                  <IoIosArrowDown className='text-base' />
                </div>
              </div>

              {/* Welcome */}
              <div className='w-[34rem] h-16 bg-white flex flex-col space-y-1 font-serif absolute top-44 left-[17rem] p-2'>
                <h1 className='text-sm text-slate-700'>Welcome Mohamed,</h1>
                <h3 className='text-[10px] text-gray-500'>We are here to support you every steps of the way in Qatar</h3>
              </div>

              {/* Grid Images */}
              <div className="relative w-[33rem] h-48 overflow-hidden left-72 bottom-48">
                <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full w-full z-0 relative">
                  <img src={gridImg1} alt="Build a network in Qatar" className="col-span-1 row-span-2 object-cover rounded-2xl w-full h-full" />
                  <img src={gridImg2} alt="Opportunities" className="col-span-2 row-span-1 object-cover rounded-2xl w-full h-full" />
                  <img src={gridImg3} alt="Grow your business" className="col-span-1 row-span-2 object-cover rounded-2xl w-full h-full" />
                  <img src={gridImg4} alt="Extra" className="col-span-2 row-span-1 object-cover rounded-2xl w-full h-full" />
                </div>
              </div>
              {/* End Grid */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
