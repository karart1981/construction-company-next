'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      'service_82wrnaf',
      'template_43c3b2n',
      { user_email: email },
      'CJAVaMvYuQRJ5LSwH'
    );
    setSubmitted(true);
  } catch (err) {
    console.error('EmailJS error:', JSON.stringify(err, null, 2));
    setError('Something went wrong. Please try again.');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Forgot Password</h2>

        {submitted ? (
          <p className="text-green-600 text-center">
            Password reset link sent to your email.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="you@example.com"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

