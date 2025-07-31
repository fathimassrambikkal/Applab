import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CiCalendar } from "react-icons/ci";
import pavilion from '../assets/pavilion.jpg';
import { TbCalendarStats } from "react-icons/tb";

function EventsSection() {
  return (
    <section className="bg-[#f5f9fc] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">

        {/* LEFT */}
        <div className="flex-1 space-y-4">
          <div className='flex gap-1'>
            <CiCalendar className="text-orange-400 text-xl mt-1" />
            <span className="text-orange-500 font-semibold text-lg">Latest Events</span>
          </div>

          <h2 className="text-xl font-semibold font-serif text-slate-700">
            Catch up on the newest events in Invest Qatar
          </h2>

          <div className="flex flex-col items-start gap-8 mt-6">
            <div>
              <p className="text-xs text-slate-500">DATE</p>
              <p className="text-sm font-semibold text-slate-700">06 – April – 2025</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">TIME</p>
              <p className="text-sm font-semibold text-slate-700">10:00 AM – 12:00 PM</p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-md font-semibold text-lg font-serif text-slate-700">
              Qatar Pavilion at Expo 2025 Osaka
            </h4>
            <p className="text-sm text-slate-500 mt-2 max-w-md">
              As part of its ongoing efforts to promote economic collaboration and cultural exchange,
              the State of Qatar is participating in Expo 2025 Osaka under the national theme “From the Shoreline, We Progress.”
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 relative w-full">
          {/* Arrows */}
          <div className="absolute left-[-20px] top-20 transform -translate-y-1/2 hidden lg:block">
            <button className="bg-transparent border border-slate-300 shadow px-4 py-2 rounded-2xl">
              <FaArrowLeft className="text-sm" />
            </button>
          </div>
          <div className="absolute right-[-20px] top-20 transform -translate-y-1/2 hidden lg:block">
            <button className="bg-transparent border border-slate-300 shadow px-4 py-2 rounded-2xl">
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* Card Container */}
          <div className="mt-20 ml-0 sm:ml-6 lg:ml-10 relative w-full sm:w-[85%] mx-auto">
            <div className="bg-white rounded-xl shadow-md h-auto relative z-10 p-4 pt-32">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">VENUE</p>
                  <p className="text-sm font-semibold text-slate-600">Education City, near Al Shaqab</p>
                </div>
                <button className="flex items-center gap-2 w-full sm:w-44 h-10 bg-white border border-slate-400 shadow rounded-md">
                  <div className="bg-slate-600 w-10 h-10 flex items-center justify-center rounded">
                    <TbCalendarStats className="text-black bg-white p-1 text-2xl" />
                    
                  </div>
                  <span className="text-sm text-slate-600">Add to Calendar</span>
                </button>
              </div>
            </div>

            {/* Image */}
            <img
              src={pavilion}
              alt="Event"
              className="w-72 sm:w-80 h-52 object-cover rounded-lg absolute -top-24 left-1/2 transform -translate-x-1/2 z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
