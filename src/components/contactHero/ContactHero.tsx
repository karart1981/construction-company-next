'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FormData, ContactCardItem } from '@/types/types'; 

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ email: '', name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    try {
      const response = await fetch('https://formspree.io/f/mldnoede', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ email: '', name: '', message: '' });
        setSuccess(true);
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards: ContactCardItem[] = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 32 32"><path fill="currentColor" d="m16 24l-6.09-8.6A8.14 8.14 0 0 1 16 2a8.08 8.08 0 0 1 8 8.13a8.2 8.2 0 0 1-1.8 5.13Zm0-20a6.07 6.07 0 0 0-6 6.13a6.19 6.19 0 0 0 1.49 4L16 20.52L20.63 14A6.24 6.24 0 0 0 22 10.13A6.07 6.07 0 0 0 16 4Z"/><circle cx="16" cy="9" r="2" fill="currentColor"/><path fill="currentColor" d="M28 12h-2v2h2v14H4V14h2v-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"/></svg>
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
        <svg width="25" height="25" viewBox="0 0 20 20"><path fill="currentColor" d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"/></svg>
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
        <svg width="40" height="40" viewBox="0 0 32 32"><path fill="currentColor" d="M12 5v5h-2V8H4v18h2v1c0 1.645 1.355 3 3 3s3-1.355 3-3v-1h16V10h-4V5H12zm2 2h8v5h-8V7zm-8 3h2v14H6V10zm4 2h2v2h12v-2h2v12H10V12zm3 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM8 26h2v1c0 .555-.445 1-1 1c-.555 0-1-.445-1-1v-1z"/></svg>
      ),
      title: 'FAX',
      content: <Link href="fax:12345678900" className="hover:underline">1-234-567-8900</Link>,
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 32 32"><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg>
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
          <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="flex-1 p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-900"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Enter your Name"
                className="flex-1 p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-900 capitalize"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              placeholder="Enter your message"
              className="p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-900 h-32 capitalize"
              name="message"
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
          </form>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Get in touch</h2>
            <p className="italic font-medium mb-4">We believe sustainability is vitally important.</p>
            <p className="text-gray-700 mb-6">
              Etiam sit amet convallis erat - class aptent taciti sociosqu ad litora torquent per conubia!
            </p>
            <div className="flex items-center gap-4 text-blue-900 text-2xl">
                 {/* Facebook Icon */}
                <Link href="https://www.facebook.com/" aria-label="Facebook" target="_blank">
                  <svg width="25" height="25" viewBox="0 0 224 432" className="text-black hover:text-blue-600 transition-colors">
                    <path fill="currentColor" d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z"/>
                  </svg>
                </Link>

                {/* Twitter Icon */}
                <Link href="https://x.com" aria-label="Twitter" target="_blank">
                  <svg width="25" height="25" viewBox="0 0 432 384" className="text-black hover:text-sky-500 transition-colors">
                    <path fill="currentColor" d="M383 105v11q0 45-16.5 88.5t-47 79.5t-79 58.5T134 365q-73 0-134-39q10 1 21 1q61 0 109-37q-29-1-51.5-18T48 229q8 2 16 2q12 0 23-4q-30-6-50-30t-20-55v-1q19 10 40 11q-39-27-39-73q0-24 12-44q33 40 79.5 64T210 126q-2-10-2-20q0-36 25.5-61.5T295 19q38 0 64 27q30-6 56-21q-10 31-39 48q27-3 51-13q-18 26-44 45z"/>
                  </svg>
                </Link>

                {/* Instagram Icon */}
                <Link href="https://www.instagram.com" aria-label="Instagram" target="_blank">
                  <svg width="25" height="25" viewBox="0 0 1536 1536" className="text-black hover:text-pink-500 transition-colors">
                    <path fill="currentColor" d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279zm108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65zM768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5zm768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"/>
                  </svg>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

