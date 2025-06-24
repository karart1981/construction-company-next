'use client';

import React from 'react';

export default function AboutContent() {
  return (
    <section className="bg-white w-full">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 py-16 gap-10">
        {/* Left Box */}
        <div className="border-8 border-[#27446C] rounded-[20px] w-[90%] sm:w-[80%] md:w-[300px] lg:w-[350px] h-[400px] md:h-[500px] relative">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight bg-white z-[10] relative left-4 sm:left-8 md:left-[60px] lg:left-[100px] top-6 sm:top-10 md:top-[80px] lg:top-[100px] py-2 text-left w-[90%] sm:w-[80%] md:w-[300px] lg:w-[400px]">
            Our businesses<br />
            stretch across<br />
            construction and<br />
            regeneration in the<br />
            built environment.
          </h1>
        </div>

        {/* Right Text + Button */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <button className="mb-4 px-6 py-2 bg-[#27446C] text-white font-semibold text-sm tracking-widest rounded-full">
            ABOUT US
          </button>
          <p className="text-gray-700 text-base leading-relaxed">
            We specialize in construction and regeneration, creating high-quality, sustainable spaces that enhance communities. From new developments to revitalizing existing structures, our work transforms the built environment. With a focus on innovation and long-term value, we build for today while shaping a better, more resilient future for cities and towns.
          </p>
        </div>
      </div>
    </section>
  );
}


