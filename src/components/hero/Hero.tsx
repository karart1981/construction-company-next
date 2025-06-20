import React from 'react';
import styles from './hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full bg-[#eef3fb]">
      <div className="flex flex-col justify-center px-6 py-12 md:px-[100px] md:py-0 md:w-1/2">
        <h5 className="text-[24px] md:text-[30px] tracking-[2px] md:tracking-[3px] pb-4 md:pb-[30px]">
          Real Construction
        </h5>
        <h1 className="text-[36px] md:text-[60px] lg:text-[80px] font-extrabold leading-tight md:leading-[120%] border-b-8 md:border-b-[15px] border-[#28466e] pb-4 md:pb-[30px]">
          Building a Better World
        </h1>
      </div>

      <div className={`${styles.heroBg} w-full md:w-1/2 h-[300px] md:h-[500px] lg:h-[680px]`}></div>
    </div>
  );
};

export default Hero;

