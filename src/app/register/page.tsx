'use client';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';
import { setSessionUser } from '@/utils/session';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  // Proper typing for input change event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Proper typing for form submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = { ...form, image: 'https://robohash.org/' + form.name };
    setSessionUser(newUser);
    router.push('/login');
  };

  return (
    <div className="max-w-[800px] mx-auto mt-20 p-6 border rounded-lg shadow bg-white">
      <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-16">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-4 border rounded-lg"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-4 border rounded-lg"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-4 border rounded-lg"
          required
        />
        <button type="submit" className="bg-[var(--dark-blue)] text-white px-6 py-4 rounded-lg text-[20px] cursor-pointer">
          Register
        </button>
      </form>
    </div>
  );
}

