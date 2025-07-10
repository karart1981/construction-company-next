'use client';

import { useEffect, useState } from 'react';
import { Reservation } from '@/types/types';
import Image from 'next/image'

export default function ClientDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('userReservations');
    if (stored) {
      try {
        const parsed: Reservation[] = JSON.parse(stored);
        setReservations(parsed);
      } catch (err) {
        console.error('Failed to parse reservations:', err);
      }
    }
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Your Reserved Apartments</h2>

      {reservations.length === 0 ? (
        <p className="text-gray-600">You have not reserved any apartments yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reservations.map((res, index) => (
            <div key={index} className="bg-white rounded shadow p-4">
              <h3 className="text-lg font-semibold mb-1">{res.buildingName}</h3>
              <p className="text-sm text-gray-500 mb-2">{res.location}</p>

              <Image
                width={200}
                height={200}
                src={res.apartment.image}
                alt="Apartment"
                className="w-full h-40 object-cover rounded mb-2"
              />

              <p className="text-sm">📐 Area: {res.apartment.area} m²</p>
              <p className="text-sm">🛏️ Rooms: {res.apartment.rooms}</p>
              <p className="text-sm">💵 Price: {res.apartment.price.toLocaleString()} $</p>
              <p className="text-sm text-gray-600 mt-2">📅 Reserved on: {new Date(res.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



