'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Apartment {
  area: number;
  rooms: number;
  price: number;
  status: string;
  reserved: string;
  image: string;
  quantity: number;
}

interface Building {
  id: number;
  name: string;
  location: string;
  status: string;
  image: string;
  apartments: Apartment[];
}

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params?.id);

  const [building, setBuilding] = useState<Building | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchBuilding = async () => {
  try {
    const res = await fetch('https://karart1981.github.io/host_api/db.json');
    const data = await res.json();
    const found = data.buildings.find((b: Building) => Number(b.id) === Number(id));

    if (!found) {
      throw new Error('Building not found');
    }

    setBuilding(found);
  } catch (err) {
    console.error(err);
    setError(`Project with ID ${id} not found or failed to fetch.`);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    if (id) fetchBuilding();
  }, [id]);

  const handleReserve = async (index: number) => {
    if (!building) return;

    const updatedApartments = [...building.apartments];
    const apt = updatedApartments[index];

    if (apt.quantity > 0) {
      apt.quantity -= 1;
      if (apt.quantity === 0) {
        apt.status = 'reserved';
      }

      const updatedBuilding: Building = {
        ...building,
        apartments: updatedApartments,
      };

      // No real API to update on GitHub Pages, so just update UI locally
      setBuilding(updatedBuilding);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error || !building) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        <p className="text-lg">{error || 'Project not found'}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-[#91b3e0]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#27446C] mb-2">{building.name}</h1>
        <p className="text-gray-700 mb-6">{building.location}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {building.apartments.map((apt, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
              <Image
                src={apt.image}
                alt={`Floor plan for ${apt.rooms} room apartment`}
                width={400}
                height={200}
                className="rounded h-40 object-cover"
              />

              <div className="mt-3 flex flex-wrap gap-2 mb-2">
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {apt.rooms} bedroom
                </span>
                <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Balcony
                </span>
              </div>

              <p className="text-sm text-gray-800 mb-1">📐 Area: {apt.area} m²</p>
              <p className="text-sm text-gray-800 mb-1">💵 Price: {apt.price.toLocaleString()} ֏</p>
              <p className="text-sm text-gray-800 mb-1">🏢 Quantity: {apt.quantity}</p>
              <p className="text-sm mb-2">
                🏷️ Status:{' '}
                <span
                  className={
                    apt.status === 'available'
                      ? 'text-green-600 font-semibold'
                      : apt.status === 'reserved'
                      ? 'text-yellow-600 font-semibold'
                      : 'text-red-600 font-semibold'
                  }
                >
                  {apt.status}
                </span>
              </p>

              <button
                onClick={() => handleReserve(idx)}
                disabled={apt.status === 'reserved'}
                className={`mt-auto px-4 py-2 rounded text-white font-semibold transition ${
                  apt.status === 'reserved'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#27446C] hover:bg-[#1d3550] cursor-pointer'
                }`}
              >
                Reserve
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/projects">
            <button className="bg-[#27446C] text-white px-4 py-2 rounded hover:bg-[#1d3550] cursor-pointer">
              ← Back to Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}



