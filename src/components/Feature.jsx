import React, { useEffect, useRef } from 'react';
import { SiAdguard, SiSaturn } from "react-icons/si";
import { PiLeafFill, PiHandshakeFill } from "react-icons/pi";
import { MdAlignVerticalTop } from "react-icons/md";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import people from '../assets/people.jpg';
import doha from '../assets/doha.jpg';

gsap.registerPlugin(ScrollTrigger);

function Feature() {
    const lineRefs = [useRef(null), useRef(null)];
    const rightSectionRef = useRef(null);
    const rightSecondSetRef = useRef(null);

useEffect(() => {

        lineRefs.forEach((ref, index) => {
        gsap.fromTo(
            ref.current,
            { width: '0%' },
            {
            width: '100%',
            duration: 1,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            }
        );
        });

    
        gsap.fromTo(
        rightSecondSetRef.current,
        { y: '100%' },
        {
            y: '0%',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
            trigger: rightSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            },
        }
        );
    }, []);

    return (
        <section className="w-full min-h-96 flex flex-row">
        {/* Left content */}
        <div className="w-1/2 min-h-32 flex flex-col justify-center gap-2 px-40 py-4">
            <div className="flex gap-2">
            <span>
                <MdAlignVerticalTop className="text-orange-600 text-sm mt-2" />
            </span>
            <span className="text-orange-600 text-xl">Why Qatar</span>
            </div>
            <h4 className="font-semibold text-slate-700 text-2xl">
            The Gateway to Regional and <br /> Global Growth
            </h4>

            <div className="flex flex-col gap-4 mt-4">
            {[
                'Invest with Confidence',
                'Strategic Location and Connectivity',
                'Lifestyle & Environment',
                'Business Friendly Environment',
            ].map((text, index) => (
                <div key={index} className="flex items-start gap-3 relative">
                {index === 0 && (
                    <SiAdguard className="text-4xl bg-rosewine p-2 rounded-xl text-white" />
                )}
                {index === 1 && (
                    <SiSaturn className="text-4xl p-2 bg-oceanblue rounded-xl text-white" />
                )}
                {index === 2 && (
                    <PiLeafFill className="text-4xl p-2 bg-peach rounded-xl text-white" />
                )}
                {index === 3 && (
                    <PiHandshakeFill className="text-4xl p-2 bg-plum rounded-xl text-white" />
                )}

                <div className="flex flex-col">
                    <h3 className="text-slate-700 relative">
                    {text}
                    {index < 2 && (
                        <span
                        ref={lineRefs[index]}
                        className="block h-[2px] bg-slate-600 absolute left-0 -bottom-1 w-0"
                        ></span>
                    )}
                    </h3>
                </div>
                </div>
            ))}
            </div>
        </div>
        <div
            ref={rightSectionRef}
            className="w-1/2 min-h-96 relative overflow-hidden grid grid-cols-2"
        >
            <div className="bg-darkplum flex flex-col justify-between text-white z-10">
            <div className="m-5 py-5">
                <h1 className="text-4xl font-thin mb-2 font-serif">AA</h1>
                <h4 className="text-sm leading-snug">
                Credit rating from S & P and Fitch, Aa2 from <br /> Moody's
                </h4>
            </div>
            <img
                src={people}
                alt="people"
                className="w-full h-48 object-cover rounded-tr-3xl"
            />
            </div>

            <div className="bg-pumpkin flex flex-col text-white z-10">
            <img
                src={doha}
                alt="doha"
                className="w-full h-1/2 object-cover rounded-bl-3xl"
            />
            <div className="m-5 py-5">
                <h1 className="text-4xl font-thin mt-4 mb-2 font-serif">6%</h1>
                <h4 className="text-sm leading-snug">
                Average annual GDP growth over the past 15 <br /> years
                </h4>
            </div>
            </div>

            <div
            ref={rightSecondSetRef}
            className="absolute top-0 left-0 w-full h-full grid grid-cols-2 z-0"
            >
            <div className="bg-[#37517e] flex flex-col justify-between text-white">
                <div className="m-5 py-5">
                <h1 className="text-4xl font-thin mb-2 font-serif">QAR 1B+</h1>
                <h4 className="text-sm leading-snug">
                    Total foreign direct investment <br /> in 2023
                </h4>
                </div>
                <img
                src={people}
                alt="people2"
                className="w-full h-48 object-cover rounded-tr-3xl"
                />
            </div>
            <div className="bg-[#f76c6c] flex flex-col text-white">
                <img
                src={doha}
                alt="doha2"
                className="w-full h-1/2 object-cover rounded-bl-3xl"
                />
                <div className="m-5 py-5">
                <h1 className="text-4xl font-thin mt-4 mb-2 font-serif">Top 10</h1>
                <h4 className="text-sm leading-snug">
                    Rank in MENA for ease of <br /> doing business
                </h4>
                </div>
            </div>
            </div>
        </div>
    </section>
);
}

export default Feature;
