import React, { useState, useEffect } from 'react'; 
import { PiFlagBannerFold } from "react-icons/pi";
import Marquee from "react-fast-marquee";

function Slider() {
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "right" ? "left" : "right"));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-80 bg-gray-100 flex flex-row">
      {/* Left Text Section */}
        <div className="w-1/3 ml-40 min-h-32 flex flex-col justify-center gap-2 py-4">
            <div className="flex w-full gap-1">
            <PiFlagBannerFold className="text-pumpkin text-base mt-2" />
            <span className="text-pumpkin text-xl">
                Start Your Business Journey
            </span>
            </div>
            <h3 className="text-slate-600 text-2xl font-semibold font-serif">
            License your business <br /> through approved entities.
            </h3>
            <h4 className="text-gray-500">
            Qatar connects you to the region and the world — <br /> seamlessly and strategically.
            </h4>
        </div>

     {/* slider */}
        <div className="w-1/2 mt-20">
            <Marquee
            gradient={false}
            speed={50}
            direction={direction}
            gradientColor={[255, 255, 255]} gradientWidth={80}
            className="bg-transparent text-gray-400 py-10 rounded-md"
            >
            <span className="mx-10 text-xl"> Qatar Vision 2030</span>
            <span className="mx-10 text-xl"> GDP Growth 6%</span>
            <span className="mx-10 text-xl"> Infrastructure Boom</span>
            <span className="mx-10 text-xl"> Investment Grade: AA</span>
            </Marquee>
        </div>
    </section>
);
}

export default Slider;
