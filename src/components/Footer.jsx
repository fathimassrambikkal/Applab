import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

function FooterSection() {
  return (
    <footer className="w-full bg-[#f8fafc] border-t border-dashed border-gray-300 text-sm text-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Columns */}
          <div className="bg-white w-full lg:w-2/3 flex flex-wrap gap-12 p-8">
            {/* Column Group 1 */}
            <div className="flex flex-col gap-8 min-w-[180px]">
              <div>
                <h5 className="font-semibold text-slate-800 mb-4 text-sm tracking-wide">Why Qatar?</h5>
                <ul className="space-y-2">
                  <li>Business in Qatar</li>
                  <li>Doing Business from Qatar</li>
                  <li>Establish a business in Qatar</li>
                  <li>Supporting Environment</li>
                  <li>A stable and resilient economy</li>
                  <li>Finding talent</li>
                  <li>Living in Qatar</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-slate-800 mb-4 text-sm tracking-wide">About Us</h5>
                <ul className="space-y-2">
                  <li>Message from CEO</li>
                  <li>Governance</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>

            {/* Column Group 2 */}
            <div className="flex flex-col gap-8 min-w-[180px]">
              <div>
                <h5 className="font-semibold text-slate-800 mb-4 text-sm tracking-wide">Sectors & Opportunities</h5>
                <ul className="space-y-2">
                  <li>Oppurtunities</li>
                  <li>PPP Opportunities</li>
                  <li>Agriculture</li>
                  <li>Education</li>
                  <li>Financial services</li>
                  <li>Healthcare and life science</li>
                  <li>Logistics and transport</li>
                  <li>Manufacturing</li>
                  <li>Media</li>
                  <li>Energy</li>
                  <li>Professional services</li>
                  <li>Real estate</li>
                  <li>Technology</li>
                  <li>Tourism</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-slate-800 mb-4 text-sm tracking-wide">Media Centre</h5>
                <ul className="space-y-2">
                  <li>News</li>
                  <li>Events</li>
                  <li>Newsletters</li>
                  <li>Media Gallery</li>
                </ul>
              </div>
            </div>

            {/* Column Group 3 */}
            <div className="flex flex-col gap-8 min-w-[180px]">
              <div>
                <h5 className="font-semibold text-slate-800 mb-4 text-sm tracking-wide">Incentives</h5>
                <ul className="space-y-2">
                  <li>Advanced Industries</li>
                  <li>Logistics</li>
                  <li>Technology</li>
                  <li>Financial Services</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-slate-800 mb-4 text-sm tracking-wide">Resources</h5>
                <ul className="space-y-2">
                  <li>FAQs</li>
                  <li>Find an Investor</li>
                  <li>Media Center</li>
                  <li>Contact Us</li>
                  <li>Find your advisor</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-slate-800 mb-4 text-sm tracking-wide">How We Help</h5>
                <ul className="space-y-2">
                  <li>Request information</li>
                  <li>Request introduction</li>
                  <li>Request additional assistance</li>
                  <li>Find a partner</li>
                  <li>Find business services assistance</li>
                  <li>Investor Relations team</li>
                  <li>About Invest Qatar Gateway</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="bg-white p-6 rounded shadow-sm w-full lg:w-1/3 space-y-4">
            <h5 className="font-semibold text-slate-800 text-sm tracking-wide">Receive our updates</h5>
            <p className="text-xs text-gray-500 leading-relaxed">
              By subscribing, I agree to the <span className="text-blue-600 underline">Terms and Conditions</span>
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
            <button className="px-4 py-2 bg-slate-700 text-white rounded text-sm hover:bg-slate-700 transition">
              Subscribe
            </button>

            {/* Social */}
            <div className="flex items-center gap-4 relative top-[60%] text-sm text-gray-600">
              <span className="whitespace-nowrap">Follow on</span>
              <div className="h-px w-full bg-gray-400"></div>
              <FaLinkedin className="text-gray-700 hover:text-blue-800 cursor-pointer" />
              <FaTwitter className="text-gray-700 hover:text-sky-600 cursor-pointer" />
              <FaFacebook className="text-gray-700 hover:text-blue-600 cursor-pointer" />
              <FaYoutube className="text-gray-700 hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-900 mt-12 text-white text-xs py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p>&copy; 2025 Qatar. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="hover:underline cursor-pointer">Terms & Conditions</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Cookies Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
