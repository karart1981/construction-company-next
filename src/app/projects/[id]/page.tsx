'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProjectDetails() {
  const params = useParams();
  const id = params?.id;
  const [building, setBuilding] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:4000/buildings`)
      .then(res => res.json())
      .then(data => {
        console.log('API response:', data);

        // Handle case where data is an array or an object with 'buildings' property
        const buildings = Array.isArray(data) ? data : data?.buildings;

        if (!buildings) {
          setError('Invalid API response structure.');
          setLoading(false);
          return;
        }

        const b = buildings.find((b: any) => b.id === parseInt(id as string));

        if (!b) {
          setError('Building not found.');
        } else {
          setBuilding(b);
        }

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch buildings.');
        setLoading(false);
      });
  }, [id]);

  const handleBuy = (aptId: number) => {
    const updated = building.apartments.map((apt: any) =>
      apt.id === aptId ? { ...apt, status: 'sold' } : apt
    );
    setBuilding({ ...building, apartments: updated });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!building) return <div>Building not found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{building.name}</h1>
      <p className="text-gray-600 mb-6">{building.location}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {building.apartments?.map((apt: any) => (
          <div key={apt.id} className="border rounded p-4 shadow">
            <h2 className="text-lg font-semibold">{apt.name}</h2>
            <p>📐 {apt.area} m²</p>
            <p>🛏️ {apt.rooms} rooms</p>
            <p>💵 ${apt.price.toLocaleString()}</p>
            <p>
              Status:{" "}
              <span
                className={
                  apt.status === 'available' ? 'text-green-600' : 'text-red-500'
                }
              >
                {apt.status}
              </span>
            </p>
            {apt.status === 'available' && (
              <button
                onClick={() => handleBuy(apt.id)}
                className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
              >
                Buy
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



