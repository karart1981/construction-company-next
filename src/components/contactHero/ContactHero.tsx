"use client"
import React, { useState } from 'react';
import Link from 'next/link';

interface FormData {
  email: string;
  name: string;
  message: string;
}

interface ContactCardItem {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

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
          <Link href="https://maps.app.goo.gl/8trqBq8Ltj5fES2KA" target="_blank" className="hover:underline">
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
          <Link href="tel:23498765400" className="hover:underline">234-9876-5400</Link>
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
      content: <a href="mailto:hello@theme.com" className="hover:underline">hello@theme.com</a>,
    },
  ];

  return (
      <>
      <div className="bg-[#1b366b] w-full py-12 px-4 h-auto">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-white text-center text-base md:text-lg max-w-md mx-auto tracking-wide pb-[100px]">
          Contact us and our specialists will provide comprehensive answers to your questions and concerns.
        </p>
      </div>

      <div className="bg-gray-100 w-full py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 -mt-40">
          {[
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 32 32"><path fill="currentColor" d="m16 24l-6.09-8.6A8.14 8.14 0 0 1 16 2a8.08 8.08 0 0 1 8 8.13a8.2 8.2 0 0 1-1.8 5.13Zm0-20a6.07 6.07 0 0 0-6 6.13a6.19 6.19 0 0 0 1.49 4L16 20.52L20.63 14A6.24 6.24 0 0 0 22 10.13A6.07 6.07 0 0 0 16 4Z"/><circle cx="16" cy="9" r="2" fill="currentColor"/><path fill="currentColor" d="M28 12h-2v2h2v14H4V14h2v-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"/></svg>
              ),
              title: 'OUR MAIN OFFICE',
              content: (
                <>
                  <Link href="https://maps.app.goo.gl/8trqBq8Ltj5fES2KA" target="_blank" className="hover:underline">
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
                  <Link href="tel:23498765400" className="hover:underline">234-9876-5400</Link>
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
              content: <a href="mailto:hello@theme.com" className="hover:underline">hello@theme.com</a>,
            },
          ].map((item, idx) => (
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
              className="bg-blue-900 text-white py-3 px-6 rounded-full hover:bg-blue-800 transition w-fit capitalize"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            {success && <p className="text-green-600 mt-2">Your message has been sent successfully!</p>}
          </form>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Get in touch</h2>
            <p className="italic font-medium mb-4">We believe sustainability is vitally important.</p>
            <p className="text-gray-700 mb-6">
              Etiam sit amet convallis erat - class aptent taciti sociosqu ad litora torquent per conubia!
            </p>
            <div className="flex items-center gap-4 text-blue-900 text-2xl">
                 <Link href="#" target="_blank">
                     <svg width="20" height="20" viewBox="0 0 224 432"><path fill="currentColor" d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z"/></svg>
                 </Link>
                 <Link href="#" target="_blank">
                      <svg width="20" height="20" viewBox="0 0 432 384"><path fill="currentColor" d="M383 105v11q0 45-16.5 88.5t-47 79.5t-79 58.5T134 365q-73 0-134-39q10 1 21 1q61 0 109-37q-29-1-51.5-18T48 229q8 2 16 2q12 0 23-4q-30-6-50-30t-20-55v-1q19 10 40 11q-39-27-39-73q0-24 12-44q33 40 79.5 64T210 126q-2-10-2-20q0-36 25.5-61.5T295 19q38 0 64 27q30-6 56-21q-10 31-39 48q27-3 51-13q-18 26-44 45z"/></svg>
                 </Link>
                 <Link href="#" target="_blank">
                     <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072C5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053C.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384a5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913c.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071c1.17.055 1.805.249 2.227.415c.562.217.96.477 1.382.896c.419.42.679.819.896 1.381c.164.422.36 1.057.413 2.227c.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382a3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413c-1.274.057-1.649.07-4.859.07c-3.211 0-3.586-.015-4.859-.074c-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899a3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235c-.045-1.26-.061-1.649-.061-4.844c0-3.196.016-3.586.061-4.861c.061-1.17.255-1.814.42-2.234c.21-.57.479-.96.9-1.381c.419-.419.81-.689 1.379-.898c.42-.166 1.051-.361 2.221-.421c1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324a6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0a1.44 1.44 0 0 1 2.88 0z"/></svg>
                 </Link>
                 <Link href="#" target="_blank">
                     <svg width="20" height="20" viewBox="0 0 432 432"><path fill="currentColor" d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"/></svg>
                 </Link>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}


 