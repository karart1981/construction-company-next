'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutCompany() {
  return (
    <div className="bg-[#26466e] w-full py-16 px-4 flex flex-col lg:flex-row justify-center items-center gap-10 mx-auto select-none">

      <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/about-comany-bg.jpg"
          alt="Company Building"
          width={700}
          height={500}
          className="w-full h-auto object-cover aspect-3/2"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center pb-[100px]">
        <h2 className="text-4xl font-bold mb-4 text-white">About Company</h2>
        <div className="w-20 h-1 bg-[#27446C] mb-6"></div>

        <p className="text-white mb-6">
          Founded in 2005, Real Construction has established itself as a trusted leader in the construction industry, delivering high-quality, reliable building solutions for nearly two decades. Specializing in residential, commercial, and industrial projects, Real Construction is known for its commitment to excellence, safety, and client satisfaction. The company’s experienced team of architects, engineers, and skilled builders work closely with each client to bring their unique vision to life, offering personalized service and expert guidance every step of the way.
        </p>

        <p className="text-white font-semibold mb-6">
          Real Construction takes pride in delivering projects on time, within budget, and to the highest standards of craftsmanship. With a strong reputation for integrity, precision, and long-lasting results, the company continues to build modern, functional, and sustainable spaces that meet the evolving needs of communities and businesses. Real Construction’s mission is to turn ideas into reality, providing dependable construction services that stand the test of time. Your vision, our expertise.
        </p>

        <div className="flex items-center gap-3 text-[#27446C] text-xl font-bold">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path fill="white" d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z" />
          </svg>
          <Link href="tel:0012345678910" className="text-white hover:opacity-[0.8]">
            +1 (234) 567-8910
          </Link>
        </div>
      </div>
    </div>
  );
}


