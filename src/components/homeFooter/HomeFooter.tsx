'use client';

import React, { FC, FormEvent } from 'react';
import styles from './homeFooter.module.css';

const HomeFooter: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="bg-[url('/footer-bg.jpg')] bg-cover bg-center w-full">
      <div className="z-[9999] flex flex-col justify-center items-center gap-12 px-4 py-20">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center mt-8">
          Contact Us
        </h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter Your Name" required />
          <input type="email" name="email" placeholder="Enter a E-mail address" required />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default HomeFooter;


