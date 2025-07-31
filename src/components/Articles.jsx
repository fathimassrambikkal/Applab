import React from 'react';
import { PiNewspaperBold } from "react-icons/pi";
import team from '../assets/team.jpg';

function Articles() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center text-orange-600 gap-2">
          <PiNewspaperBold className="text-lg" />
          <h4 className="text-sm font-medium">New and Article</h4>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif text-slate-700 mt-2 max-w-3xl">
          Stay updated with the latest insights and stories
        </h1>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-4 bg-white border border-slate-200 p-4"
          >
            <img
              src={team}
              alt="team"
              className="w-40 h-20 object-cover "
            />
            <h2 className="text-slate-700 font-serif font-medium text-lg leading-snug">
              Digital transformation in Qatar has accelerated due to COVID-19, with ban...
            </h2>
            <h4 className="text-gray-500 text-sm border-b border-slate-300 pb-1 ">13. MAY. 2025</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae adipisci dolor nam mollitia, eius non. Velit nemo, vel cupiditate animi architecto iure mollitia, quam veniam modi iusto officia provident.
            </p>
            <h3 className="text-slate-700 font-serif font-semibold text-sm mt-auto">
              Read More
            </h3>
          </div>
        ))}
      </div>

      {/* Navigation Buttons + Link */}
      <div className="flex justify-between items-center mt-12 px-2">
        <div className="flex space-x-4">
          <button className="w-10 h-10 border border-slate-400 rounded-full flex items-center justify-center hover:bg-slate-100 transition">
            ←
          </button>
          <button className="w-10 h-10 border border-slate-400 rounded-full flex items-center justify-center hover:bg-slate-100 transition">
            →
          </button>
        </div>
        <a
          href="#"
          className="text-slate-600 text-sm font-medium hover:underline"
        >
          Explore more Now?
        </a>
      </div>
    </section>
  );
}

export default Articles;
