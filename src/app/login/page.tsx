'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getSessionUser} from '@/utils/session';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const router = useRouter();
  const [error, setError] = useState('');

  useEffect(() => {
    if (getSessionUser()) {
      router.push('/profile');
    }
  }, []);

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const storedUser = getSessionUser();

    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      router.push('/profile');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border" required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Log In</button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
}
