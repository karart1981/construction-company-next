'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './aboutHero.module.css';
import React from 'react';

export default function AboutHero() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full min-h-[600px] bg-[#d6d7d9] px-4 md:px-12 py-10 gap-8">
        <div className="flex flex-col justify-center gap-4 max-w-xl text-center lg:text-left">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-bold leading-tight">
            Working to create a cleaner, greener world
          </h2>
          <p>► When luxury meets comfort</p>
          <p>► Individual approach to each client</p>
          <p>► Flexible payment system</p>
          <Link href="/contact" className={styles.contact}>
            <button className="py-3 px-8 bg-[#26466e] text-white rounded-3xl cursor-pointer text-[16px] hover:bg-[#1e3654] transition">
              CONTACT US
            </button>
          </Link>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:w-[50%] lg:h-[600px]">
          <Image
            src="/about-bg.jpg"
            alt="Image of the background of Hero section"
            fill
            className="object-cover rounded-xl object-[50%_0%]"
            priority
          />
        </div>
      </div>

      {/* Icon section */}
      <div className="w-full bg-[#26466e] flex flex-wrap justify-center items-start px-4 py-10 gap-10">
        {[
          { icon: '/build.png', label: 'Design-Build' },
          { icon: '/remodeling.png', label: 'Home Remodeling' },
          { icon: '/spaces.png', label: 'City Spaces' },
          { icon: '/engineers.png', label: 'Civil Engineers' },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <div className="bg-white p-2 rounded-md">
              <Image
                src={item.icon}
                alt={`${item.label} Icon`}
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
            <div className="text-white text-center text-[14px] sm:text-[16px]">{item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
