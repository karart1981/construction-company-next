'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './pictures.module.css';

const imageSources: string[] = [
  '/projects-pictures/proj-image1.jpeg',
  '/projects-pictures/proj-image2.jpg',
  '/projects-pictures/proj-image3.jpg',
  '/projects-pictures/proj-image4.jpg',
  '/projects-pictures/proj-image5.jpg',
  '/projects-pictures/proj-image6.jpg',
  '/projects-pictures/proj-image7.jpg',
  '/projects-pictures/proj-image8.jpg',
];

const Pictures: React.FC = () => {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-[60px] bg-[#d6d7d9] select-none">
      {/* Responsive image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {imageSources.map((src, index) => (
          <div
            key={index}
            className="relative w-full max-w-[300px] h-[250px] overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={src}
              alt={`Project image ${index + 1}`}
              fill
              className={`${styles.projImg} object-cover`}
            />
          </div>
        ))}
      </div>

      {/* Last section with text and icons */}
      <div className="w-full flex flex-col items-center gap-5 py-12 px-4">
        <p className="max-w-[400px] text-center text-base sm:text-lg">
          Sample text. Click to select the text box. Click again or double click to start editing the text.
        </p>

        <div className="flex items-center justify-center gap-6">
          {/* Facebook Icon */}
          <Link href="#" aria-label="Facebook">
            <svg width="25" height="25" viewBox="0 0 224 432" className="text-black hover:text-blue-600 transition-colors">
              <path fill="currentColor" d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z"/>
            </svg>
          </Link>

          {/* Twitter Icon */}
          <Link href="#" aria-label="Twitter">
            <svg width="25" height="25" viewBox="0 0 432 384" className="text-black hover:text-sky-500 transition-colors">
              <path fill="currentColor" d="M383 105v11q0 45-16.5 88.5t-47 79.5t-79 58.5T134 365q-73 0-134-39q10 1 21 1q61 0 109-37q-29-1-51.5-18T48 229q8 2 16 2q12 0 23-4q-30-6-50-30t-20-55v-1q19 10 40 11q-39-27-39-73q0-24 12-44q33 40 79.5 64T210 126q-2-10-2-20q0-36 25.5-61.5T295 19q38 0 64 27q30-6 56-21q-10 31-39 48q27-3 51-13q-18 26-44 45z"/>
            </svg>
          </Link>

          {/* Instagram Icon */}
          <Link href="#" aria-label="Instagram">
            <svg width="25" height="25" viewBox="0 0 1536 1536" className="text-black hover:text-pink-500 transition-colors">
              <path fill="currentColor" d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279zm108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65zM768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5zm768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pictures;

