import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import testImg1 from '../assets/men1.png';
import testImg2 from '../assets/men2.png';

function Testimonials() {
  return (
    <section className="w-full font-sans overflow-hidden">
      <div className="flex flex-row w-full min-h-[30rem] max-w-screen-2xl mx-auto">

        {/* Left */}
        <div className="w-2/3 bg-[#2D4954] text-white px-8 md:px-12 py-8 flex flex-col justify-center relative">
          <p className="text-yellow-400 text-sm font-semibold mb-4">☰ Voices of Success</p>
          <h2 className="text-2xl md:text-3xl font-serif leading-snug max-w-xl mb-6">
            “Expanding to Qatar in 2016 was the right choice – great results, strong support, and an easy transition for my family.”
          </h2>
          <div className="text-2xl md:text-3xl font-extrabold tracking-wide">talabat</div>
          <FaQuoteRight className="absolute bottom-10 right-8 md:right-16 text-5xl md:text-6xl text-[#3d5a66] opacity-30" />
        </div>

        {/* Right */}
        <div className="relative w-1/3 min-h-[30rem]">
          <div className="w-full h-full flex">

            {/* Left Blue BG */}
            <div className="w-1/3 bg-[#236a95] relative">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
                <span className="w-2 h-2 rounded-full bg-white opacity-50"></span>
                <span className="w-2 h-2 rounded-full bg-white opacity-90"></span>
                <span className="w-2 h-2 rounded-full bg-white opacity-50"></span>
              </div>
            </div>

            {/* Right Orange BG */}
            <div className="w-3/4 bg-[#e99864] relative overflow-hidden">
              <div className="absolute top-20 left-48 w-40 h-40 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={testImg2}
                  alt="testimonial image2"
                  className="w-full h-full object-cover bg-peachyOrange"
                />
              </div>

              <div className="absolute bottom-4 ml-2 flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow">
                  <img
                    src={testImg2}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-xs font-semibold tracking-wide">NEXT →</p>
              </div>
            </div>
          </div>

          {/* Main Profile Card */}
          <div className="absolute top-0 left-0 w-2/3 h-80 md:h-96 bg-[#0d93a1] z-20 rounded-br-2xl shadow-lg p-6 md:p-12 flex flex-col items-center justify-center space-y-2">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden">
              <img
                src={testImg1}
                alt="testimonial image1"
                className="w-full h-full object-cover bg-tealSoft"
              />
            </div>
            <h3 className="text-white font-serif text-sm text-center">
              Mr. Francisco Miguel de Sousa
            </h3>
            <h4 className="text-gray-300 text-center text-xs">Managing Director</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
