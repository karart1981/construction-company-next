'use client';

import { useEffect, useState } from 'react';
import { getSessionUser, logoutUser, getUserReservations } from '@/utils/session';
import { useRouter } from 'next/navigation';
import News from '@/components/news/News';

interface Reservation {
  buildingId: number;
  buildingName: string;
  location: string;
  apartment: {
    area: number;
    rooms: number;
    price: number;
    image: string;
  };
  date: string;
}

interface User {
  name: string;
  email: string;
  image?: string;
  token?: string;
  reservations?: Reservation[];
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const u = getSessionUser();
    if (!u) {
      router.push('/login');
    } else {
      const reservations = getUserReservations();
      setUser({ ...u, reservations });
    }
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push('/');
  };

  if (!user) return null;

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow text-center mb-[50px] bg-white select-none">
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Log Out
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-4 mb-[100px]">
        <h3 className="text-xl font-semibold mb-4 text-white">🏠 Your Reservations</h3>
        {user.reservations && user.reservations.length > 0 ? (
          <ul className="space-y-4">
            {user.reservations.map((res, i) => (
              <li key={i} className="bg-white rounded-lg shadow p-4">
                <p><strong>Building:</strong> {res.buildingName}</p>
                <p><strong>Location:</strong> {res.location}</p>
                <p><strong>Apartment:</strong> Rooms: {res.apartment.rooms}, Area: {res.apartment.area} m², Price: {res.apartment.price.toLocaleString()} $</p>
                <p><strong>Reserved At:</strong> {new Date(res.date).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No reservations yet.</p>
        )}
      </div>

      <News />
    </>
  );
}
