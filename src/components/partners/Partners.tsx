'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Partner } from '@/types/types'; 

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 800,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const OurPartners: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    fetch('https://karart1981.github.io/host_api/db.json')
      .then(res => res.json())
      .then(data => setPartners(data.partners)) // ✅ Access the .partners array
      .catch(err => console.error("Failed to fetch partners:", err));
  }, []);

  return (
    <div className="w-full bg-gray-100 py-15 px-4 overflow-hidden select-none">
      <h2 className="text-center text-2xl md:text-4xl font-semibold mb-12">Our Partners</h2>
      <Slider {...sliderSettings}>
        {partners.map(partner => (
          <div key={partner.id} className="flex justify-center items-center pl-18">
            <Image
              src={partner.logo}
              alt={partner.alt}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurPartners;
