'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './callCenter.module.css';

const CallCenter: React.FC = () => {
  return (
    <div className="w-full bg-[var(--mid-grey)] flex justify-center items-center py-12 px-4 md:px-10 select-none">
      <div className="bg-white flex flex-col lg:flex-row items-center justify-center gap-8 max-w-[1200px] w-full rounded-lg shadow-lg p-6">
        <div className="flex items-center relative">
          <div>
            <Image
              src="/phone-call.png"
              className={styles.callIcon}
              width={40}
              height={40}
              alt="Phone Call Icon"
            />
          </div>
          <div>
            <Image
              src="/caller.jpg"
              className={styles.caller}
              width={200}
              height={200}
              alt="Caller Image"
            />
          </div>
        </div>

        <div className="w-full max-w-2xl flex flex-col gap-6 text-center lg:text-left">
          <p className="text-[20px] md:text-[24px] leading-relaxed">
            We realize that you lead a busy life, so we have made it easy for you to drop off your vehicle 24/7.
          </p>

          <div className="flex justify-center lg:justify-start items-center gap-2">
            <svg width="30" height="30" viewBox="0 0 20 20">
              <path fill="#26466e" d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"/>
            </svg>
            <Link href="tel:+12345678910" className={styles.link}>
              +1 (234) 567-8910
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCenter;
