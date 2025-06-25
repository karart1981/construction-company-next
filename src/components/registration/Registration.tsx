'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { isUserLoggedIn } from '@/utils/session';

export default function Registration() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isUserLoggedIn());
  }, []);

  return (
      <div className="space-x-4">
        {loggedIn ? (
          <Link href="/login">Log In</Link>
        ) : (
          <Link href="/register">Sign In</Link>
        )}
      </div>
  );
}
