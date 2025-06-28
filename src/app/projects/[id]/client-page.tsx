'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Building {
  id: number;
  name: string;
  area: number;
  rooms: number;
  price: number;
  status: string;
  reserved: string;
  image: string;
  location: string;
}

export default function ProjectDetailPage({ id }: { id: string }) {
  const [building, setBuilding] = useState<Building | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:4000/buildings/${id}`)
      .then(res => res.json())
      .then(data => {
        setBuilding(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center text-gray-600">Loading...</div>;
  }

  if (!building) {
    return <div className="p-10 text-center text-red-500">Building not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#91b3e0] p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <Image
          src={building.image}
          alt={building.name}
          width={800}
          height={400}
          className="w-full h-full object-cover rounded"
        />
        <h1 className="text-3xl font-bold mt-4">{building.name}</h1>
        <p className="text-gray-600 mb-2">{building.location}</p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <p><strong>📐 Area:</strong> {building.area} m²</p>
          <p><strong>🛏️ Rooms:</strong> {building.rooms}</p>
          <p><strong>💵 Price:</strong> ${building.price.toLocaleString()}</p>
          <p><strong>📌 Status:</strong> {building.status}</p>
          <p><strong>📅 Reserved:</strong> {building.reserved}</p>
        </div>

        <div className="mt-6">
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
