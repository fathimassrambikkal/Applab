import React from 'react';
import heroImg from '../assets/heroimg.png';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="relative min-h-screen text-white flex flex-col justify-center items-center bg-center bg-no-repeat object-contain"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      
      <div className="absolute top-80 left-40 max-w-[90%] sm:max-w-[80%]  px-4">
        <header className="mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif">
            Creating a Wealth of Opportunities
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-2">
            We partner closely with you to identify and advance your ambitions
          </p>
        </header>
        <Link
          to="/explore"
          className="inline-block mt-4 px-4 sm:px-6 py-2 bg-transparent text-white font-semibold rounded-xl border text-sm sm:text-base"
        >
          Explore More
        </Link>
      </div>
      <div className="flex absolute top-[33rem] left-40 gap-2 px-4">
        <button className="border rounded-xl bg-transparent text-white text-base sm:text-lg px-4 sm:px-6 py-2">
          <FaArrowLeft />
        </button>
        <button className="border rounded-xl bg-transparent text-white text-base sm:text-lg px-4 sm:px-6 py-2">
          <FaArrowRight />
        </button>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap text-white relative top-60 left-20 gap-6 sm:gap-10 px-4">
        <div className="border-t border-gray-400 space-y-2 max-w-[90%] sm:max-w-[200px]">
          <span className="text-sm sm:text-base">1</span>
          <h4 className="text-sm sm:text-base">
            Creating a Wealth of opportunities
          </h4>
        </div>
        <div className="border-t border-gray-400 space-y-2 max-w-[100%] sm:max-w-[200px]">
          <span className="text-sm sm:text-base">2</span>
          <h4 className="text-sm sm:text-base">
            Creating a Wealth of opportunities
          </h4>
        </div>
        <div className="border-t border-gray-400 space-y-2 max-w-[90%] sm:max-w-[200px]">
          <span className="text-sm sm:text-base">3</span>
          <h4 className="text-sm sm:text-base">
            Creating a Wealth of opportunities
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Hero;
