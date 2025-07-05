'use client';

import Link from 'next/link';
import { Construction } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 py-12 text-center select-none">
      <Construction className="w-16 h-16 text-[var(--dark-blue)] mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist or might still be under construction.
      </p>
      <Link
        href="/"
        className="inline-block bg-[var(--dark-blue)] text-white px-6 py-3 rounded-lg text-lg hover:bg-[var(--mid-blue)] transition-all"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}


