'use client';

import React from 'react';
import Image from 'next/image';
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
    <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-[60px] bg-[#d6d7d9]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {imageSources.map((src, index) => (
          <div key={index} className="relative w-full max-w-[300px] h-[250px] overflow-hidden">
            <Image
              src={src}
              alt={`Project image ${index + 1}`}
              fill
              className={`${styles.projImg} object-cover`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
