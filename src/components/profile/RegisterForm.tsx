'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';
import { setSessionUser } from '@/utils/session';

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = { ...form };
    setSessionUser(newUser);
    router.push('/login');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          name="name"
          id="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
      </div>
      {/* email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="you@example.com"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
      </div>
      {/* password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="••••••••"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[var(--mid-blue)] text-white text-lg font-semibold py-3 rounded-lg hover:bg-[var(--dark-blue)] transition cursor-pointer"
      >
        Register
      </button>
    </form>
  );
}
