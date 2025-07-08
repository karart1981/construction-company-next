'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';
import { setSessionUser } from '@/utils/session';
import { useAuth } from '@/context/AuthContext';

interface RegisterFormState {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [form, setForm] = useState<RegisterFormState>({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter();
  const { setUser, setRegistered, setLoggedIn } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = { ...form };

    // Save to session
    setSessionUser(newUser);
    setUser(newUser);
    setRegistered(true);
    setLoggedIn(false);

    router.push('/signin');
  };

  const handleForgotPassword = () => {
    router.push('/forgot-password');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md w-full">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[var(--mid-blue)] text-white text-lg font-semibold py-3 rounded-lg hover:bg-[var(--dark-blue)] transition cursor-pointer"
      >
        Register
      </button>

      {/* Forgot Password */}
      <div className="text-right">
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-sm text-blue-600 hover:underline mt-2"
        >
          Forgot Password?
        </button>
      </div>
    </form>
  );
}





