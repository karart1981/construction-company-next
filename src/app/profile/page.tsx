'use client';
import { useEffect, useState } from 'react';
import { getSessionUser, logoutUser } from '@/utils/session';
import { useRouter } from 'next/navigation';
import News from '@/components/news/News';
interface User {
  name: string;
  email: string;
  image?: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const u = getSessionUser();
    if (!u) {
      router.push('/login');
    } else {
      setUser(u);
    }
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push('/');
  };

  if (!user) return null;

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow text-center mb-[100px] bg-white select-none">
          <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <button onClick={handleLogout} className="mt-6 bg-red-600 text-white px-4 py-2 rounded cursor-pointer">Log Out</button>
      </div>
      <News />
    </>
  );
}


