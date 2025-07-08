'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';
import { getSessionUser } from '@/utils/session';
import emailjs from '@emailjs/browser';

interface FormState {
  email: string;
  password: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  token?: string;
}

export default function LoginClient() {
  const [form, setForm] = useState<FormState>({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const storedUser = getSessionUser() as User | null;

    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      router.push('/profile');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    const templateParams = {
      to_email: resetEmail,
      message: 'Click this link to reset your password: https://construction-company-next-ibks.vercel.app/reset-password',
    };

    try {
      await emailjs.send(
        'service_82wrnaf',      // Replace with your actual EmailJS service ID
        'template_43c3b2n',     // Replace with your actual EmailJS template ID
        templateParams,
        'CJAVaMvYuQRJ5LSwH'       // Replace with your actual EmailJS public key
      );
      setStatus('✅ Password reset email sent!');
    } catch (err) {
      console.error('EmailJS error:', JSON.stringify(err, null, 2));
      setStatus('❌ Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--dark-blue)] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!form.email || !form.password}
            className={`w-full text-white font-semibold py-3 rounded-lg transition ${
              !form.email || !form.password
                ? 'bg-green-600 opacity-50 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 cursor-pointer'
            }`}
          >
            Log In
          </button>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <button
            onClick={() => setShowReset((prev) => !prev)}
            className="text-sm text-blue-600 hover:underline focus:outline-none"
          >
            {showReset ? 'Hide Password Reset' : 'Forgot Password?'}
          </button>
        </div>

        {/* Reset Password Form */}
        {showReset && (
          <form onSubmit={handleResetPassword} className="mt-6 space-y-4">
            <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your email to reset password
            </label>
            <input
              type="email"
              id="resetEmail"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />

            <button
              type="submit"
              className={`w-full text-white py-3 rounded-lg transition ${
                loading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Email'}
            </button>

            {status && (
              <p
                className={`text-center text-sm ${
                  status.startsWith('✅') ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {status}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}






