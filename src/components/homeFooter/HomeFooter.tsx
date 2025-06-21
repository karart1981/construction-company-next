'use client';

import React, { FC, FormEvent, useState } from 'react';
import styles from './homeFooter.module.css';

const HomeFooter: FC = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvgrbdrw', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSuccess(true);
        form.reset(); // Clear the form
      } else {
        alert('There was a problem submitting your form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending form. Try again later.');
    }
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

        {success && (
          <p className="text-white text-lg mt-4">Thanks! Your message was sent successfully.</p>
        )}
      </div>
    </div>
  );
};

export default HomeFooter;



