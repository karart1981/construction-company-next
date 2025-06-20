'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from 'next/image';

type Partner = {
  id: number;
  logo: string;
  alt: string;
};

const partners: Partner[] = [
  { id: 1, logo: '/partners/p-1.png', alt: 'Partner 1' },
  { id: 2, logo: '/partners/p-2.png' , alt: 'Partner 2' },
  { id: 3, logo: '/partners/p-3.png' , alt: 'Partner 3' },
  { id: 4, logo: '/partners/p-4.png', alt: 'Partner 4' },
  { id: 5, logo: '/partners/p-5.png', alt: 'Partner 5' },
  { id: 6, logo: '/partners/p-6.png', alt: 'Partner 6' },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 }
    }
  ]
};

const OurPartners: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-15 px-4 overflow-hidden">
      <h2 className="text-center text-2xl md:text-4xl font-semibold mb-12">Our Partners</h2>
      <Slider {...sliderSettings}>
        {partners.map(partner => (
          <div key={partner.id} className="flex justify-center items-center px-4">
            <Image
              src={partner.logo}
              alt={partner.alt}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurPartners;
