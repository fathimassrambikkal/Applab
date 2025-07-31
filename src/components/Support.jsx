import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import supportBg from '../assets/doha2.jpg';
import { IoBulbOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { LuNotepadText } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

function Support() {
  const maskedRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      maskedRef.current,
      { y: 100 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: maskedRef.current,
          start: 'top 90%',
        },
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative overflow-hidden"
      style={{ backgroundImage: `url(${supportBg})` }}
    >
      <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative bottom-40">
        <div className="space-y-5 md:max-w-3xl relative">
          <div className="flex items-center space-x-2">
            <IoBulbOutline className="text-yellow-500 text-3xl mt-[2px]" />
            <h2 className="text-yellow-500 text-lg md:text-xl">How We Help</h2>
          </div>

          <h1 className="text-white text-xl sm:text-2xl lg:text-2xl font-serif font-semibold whitespace-nowrap w-full">
            Guiding You Through Every Step of Your Business Journey
          </h1>

          <h3 className="text-sm md:text-base text-white">
            Qatar connects you to the region and the world — seamlessly and strategically.
          </h3>

          <h3 className="text-sm md:text-base text-white">
            Support for investors at every phase of their journey.
          </h3>
        </div>

        {/* Button */}
        <div>
          <Link
            to="#"
            className="bg-white px-6 py-2 rounded-lg text-slate-700 font-semibold text-sm hover:bg-slate-100 transition"
          >
            Get Support
          </Link>
        </div>
      </div>

     {/* Masked Background Container */}
<div
  ref={maskedRef}
  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full z-0 rounded-t-3xl overflow-hidden"
>

  <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 opacity-40" />
  </div>
  <div className="relative z-50 flex gap-20 p-20 text-white mt-10">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex flex-col items-center text-center space-y-2">
        <LuNotepadText className="text-5xl text-blue-600 bg-white rounded-xl p-3 shadow-md" />
        <h2 className="text-lg font-semibold text-white">Request Info</h2>
        <p className="w-40 text-sm leading-relaxed text-white">
          We help you get investment-related information
        </p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}

export default Support;
