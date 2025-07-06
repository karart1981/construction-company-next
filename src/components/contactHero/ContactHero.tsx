'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { FormData, ContactCardItem } from '@/types/types';

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ email: '', name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    setError(false);

    try {
      const result = await emailjs.sendForm(
        process.env.service_cx5fh24!,
        process.env.template_43c3b2n!,
        formRef.current!,
        process.env.CJAvAMvYuQRJ5LSwH!
      );

      console.log('Email sent:', result.text);
      setFormData({ email: '', name: '', message: '' });
      setSuccess(true);
    } catch (error) {
      console.error('EmailJS error:', error);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards: ContactCardItem[] = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 32 32">
          <path fill="currentColor" d="m16 24l-6.09-8.6A8.14 8.14 0 0 1 16 2a8.08 8.08 0 0 1 8 8.13a8.2 8.2 0 0 1-1.8 5.13Z"/>
          <circle cx="16" cy="9" r="2" fill="currentColor"/>
          <path fill="currentColor" d="M28 12h-2v2h2v14H4V14h2v-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"/>
        </svg>
      ),
      title: 'OUR MAIN OFFICE',
      content: (
        <>
          <Link
            href="https://maps.app.goo.gl/8trqBq8Ltj5fES2KA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            SoHo 94 Broadway St
          </Link>
          <p>New York, NY 1001</p>
        </>
      ),
    },
    {
      icon: (
        <svg width="25" height="25" viewBox="0 0 20 20">
          <path fill="currentColor" d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"/>
        </svg>
      ),
      title: 'PHONE NUMBER',
      content: (
        <>
          <Link href="tel:23498765400" className="hover:underline">234-9876-5400</Link><br />
          <Link href="tel:88801234567" className="hover:underline">888-0123-4567 (Toll Free)</Link>
        </>
      ),
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 32 32">
          <path fill="currentColor" d="M12 5v5h-2V8H4v18h2v1c0 1.645 1.355 3 3 3s3-1.355 3-3v-1h16V10h-4V5H12zm2 2h8v5h-8V7zm-8 3h2v14H6V10zm4 2h2v2h12v-2h2v12H10V12zm3 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM8 26h2v1c0 .555-.445 1-1 1c-.555 0-1-.445-1-1v-1z"/>
        </svg>
      ),
      title: 'FAX',
      content: <Link href="fax:12345678900" className="hover:underline">1-234-567-8900</Link>,
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 32 32">
          <path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/>
        </svg>
      ),
      title: 'EMAIL',
      content: <Link href="mailto:hello@theme.com" className="hover:underline">hello@theme.com</Link>,
    },
  ];

  return (
    <>
      <div className="bg-[var(--dark-blue)] w-full py-12 px-4 h-auto select-none">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-white text-center text-base md:text-lg max-w-md mx-auto tracking-wide pb-[100px]">
          Contact us and our specialists will provide comprehensive answers to your questions and concerns.
        </p>
      </div>

      <div className="bg-gray-100 w-full py-16 px-4 select-none">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 -mt-40">
          {contactCards.map((item, idx) => (
            <div key={idx} className="bg-white w-full sm:w-[calc(50%-0.75rem)] lg:w-[23%] p-6 rounded-2xl shadow-lg text-center flex flex-col items-center gap-2">
              {item.icon}
              <h3 className="font-bold text-lg">{item.title}</h3>
              {item.content}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row gap-10">
          <form ref={formRef} className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email address"
                className="flex-1 p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-900"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="flex-1 p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-900 capitalize"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-900 h-32"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[var(--dark-blue)] text-white py-3 px-6 rounded-full hover:opacity-[var(--opacity)] transition w-fit capitalize cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            {success && <p className="text-green-700 mt-2">Your message has been sent successfully!</p>}
            {error && <p className="text-red-600 mt-2">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </>
  );
}

